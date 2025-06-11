function g0(i,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in i)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(i,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function hv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ld={exports:{}},Jo={},cd={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function v0(){if(Um)return _t;Um=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function _(O,ne,Ae){this.props=O,this.context=ne,this.refs=M,this.updater=Ae||S}_.prototype.isReactComponent={},_.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=_.prototype;function D(O,ne,Ae){this.props=O,this.context=ne,this.refs=M,this.updater=Ae||S}var N=D.prototype=new x;N.constructor=D,E(N,_.prototype),N.isPureReactComponent=!0;var R=Array.isArray,V=Object.prototype.hasOwnProperty,z={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function k(O,ne,Ae){var Y,pe={},we=null,me=null;if(ne!=null)for(Y in ne.ref!==void 0&&(me=ne.ref),ne.key!==void 0&&(we=""+ne.key),ne)V.call(ne,Y)&&!F.hasOwnProperty(Y)&&(pe[Y]=ne[Y]);var Ce=arguments.length-2;if(Ce===1)pe.children=Ae;else if(1<Ce){for(var qe=Array(Ce),ke=0;ke<Ce;ke++)qe[ke]=arguments[ke+2];pe.children=qe}if(O&&O.defaultProps)for(Y in Ce=O.defaultProps,Ce)pe[Y]===void 0&&(pe[Y]=Ce[Y]);return{$$typeof:i,type:O,key:we,ref:me,props:pe,_owner:z.current}}function P(O,ne){return{$$typeof:i,type:O.type,key:ne,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function G(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ae){return ne[Ae]})}var le=/\/+/g;function Q(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?G(""+O.key):ne.toString(36)}function fe(O,ne,Ae,Y,pe){var we=typeof O;(we==="undefined"||we==="boolean")&&(O=null);var me=!1;if(O===null)me=!0;else switch(we){case"string":case"number":me=!0;break;case"object":switch(O.$$typeof){case i:case e:me=!0}}if(me)return me=O,pe=pe(me),O=Y===""?"."+Q(me,0):Y,R(pe)?(Ae="",O!=null&&(Ae=O.replace(le,"$&/")+"/"),fe(pe,ne,Ae,"",function(ke){return ke})):pe!=null&&(C(pe)&&(pe=P(pe,Ae+(!pe.key||me&&me.key===pe.key?"":(""+pe.key).replace(le,"$&/")+"/")+O)),ne.push(pe)),1;if(me=0,Y=Y===""?".":Y+":",R(O))for(var Ce=0;Ce<O.length;Ce++){we=O[Ce];var qe=Y+Q(we,Ce);me+=fe(we,ne,Ae,qe,pe)}else if(qe=y(O),typeof qe=="function")for(O=qe.call(O),Ce=0;!(we=O.next()).done;)we=we.value,qe=Y+Q(we,Ce++),me+=fe(we,ne,Ae,qe,pe);else if(we==="object")throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return me}function he(O,ne,Ae){if(O==null)return O;var Y=[],pe=0;return fe(O,Y,"","",function(we){return ne.call(Ae,we,pe++)}),Y}function se(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(Ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ae)},function(Ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ae)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var ce={current:null},I={transition:null},ue={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:I,ReactCurrentOwner:z};function oe(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:he,forEach:function(O,ne,Ae){he(O,function(){ne.apply(this,arguments)},Ae)},count:function(O){var ne=0;return he(O,function(){ne++}),ne},toArray:function(O){return he(O,function(ne){return ne})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},_t.Component=_,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=D,_t.StrictMode=s,_t.Suspense=f,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,_t.act=oe,_t.cloneElement=function(O,ne,Ae){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Y=E({},O.props),pe=O.key,we=O.ref,me=O._owner;if(ne!=null){if(ne.ref!==void 0&&(we=ne.ref,me=z.current),ne.key!==void 0&&(pe=""+ne.key),O.type&&O.type.defaultProps)var Ce=O.type.defaultProps;for(qe in ne)V.call(ne,qe)&&!F.hasOwnProperty(qe)&&(Y[qe]=ne[qe]===void 0&&Ce!==void 0?Ce[qe]:ne[qe])}var qe=arguments.length-2;if(qe===1)Y.children=Ae;else if(1<qe){Ce=Array(qe);for(var ke=0;ke<qe;ke++)Ce[ke]=arguments[ke+2];Y.children=Ce}return{$$typeof:i,type:O.type,key:pe,ref:we,props:Y,_owner:me}},_t.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},_t.createElement=k,_t.createFactory=function(O){var ne=k.bind(null,O);return ne.type=O,ne},_t.createRef=function(){return{current:null}},_t.forwardRef=function(O){return{$$typeof:d,render:O}},_t.isValidElement=C,_t.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:se}},_t.memo=function(O,ne){return{$$typeof:p,type:O,compare:ne===void 0?null:ne}},_t.startTransition=function(O){var ne=I.transition;I.transition={};try{O()}finally{I.transition=ne}},_t.unstable_act=oe,_t.useCallback=function(O,ne){return ce.current.useCallback(O,ne)},_t.useContext=function(O){return ce.current.useContext(O)},_t.useDebugValue=function(){},_t.useDeferredValue=function(O){return ce.current.useDeferredValue(O)},_t.useEffect=function(O,ne){return ce.current.useEffect(O,ne)},_t.useId=function(){return ce.current.useId()},_t.useImperativeHandle=function(O,ne,Ae){return ce.current.useImperativeHandle(O,ne,Ae)},_t.useInsertionEffect=function(O,ne){return ce.current.useInsertionEffect(O,ne)},_t.useLayoutEffect=function(O,ne){return ce.current.useLayoutEffect(O,ne)},_t.useMemo=function(O,ne){return ce.current.useMemo(O,ne)},_t.useReducer=function(O,ne,Ae){return ce.current.useReducer(O,ne,Ae)},_t.useRef=function(O){return ce.current.useRef(O)},_t.useState=function(O){return ce.current.useState(O)},_t.useSyncExternalStore=function(O,ne,Ae){return ce.current.useSyncExternalStore(O,ne,Ae)},_t.useTransition=function(){return ce.current.useTransition()},_t.version="18.3.1",_t}var Im;function $f(){return Im||(Im=1,cd.exports=v0()),cd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function _0(){if(Om)return Jo;Om=1;var i=$f(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,p){var m,g={},y=null,S=null;p!==void 0&&(y=""+p),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(S=f.ref);for(m in f)s.call(f,m)&&!l.hasOwnProperty(m)&&(g[m]=f[m]);if(d&&d.defaultProps)for(m in f=d.defaultProps,f)g[m]===void 0&&(g[m]=f[m]);return{$$typeof:e,type:d,key:y,ref:S,props:g,_owner:o.current}}return Jo.Fragment=t,Jo.jsx=c,Jo.jsxs=c,Jo}var Fm;function x0(){return Fm||(Fm=1,ld.exports=_0()),ld.exports}var T=x0(),_e=$f();const y0=hv(_e),S0=g0({__proto__:null,default:y0},[_e]);var Ll={},ud={exports:{}},Bn={},dd={exports:{}},fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function E0(){return km||(km=1,function(i){function e(I,ue){var oe=I.length;I.push(ue);e:for(;0<oe;){var O=oe-1>>>1,ne=I[O];if(0<o(ne,ue))I[O]=ue,I[oe]=ne,oe=O;else break e}}function t(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var ue=I[0],oe=I.pop();if(oe!==ue){I[0]=oe;e:for(var O=0,ne=I.length,Ae=ne>>>1;O<Ae;){var Y=2*(O+1)-1,pe=I[Y],we=Y+1,me=I[we];if(0>o(pe,oe))we<ne&&0>o(me,pe)?(I[O]=me,I[we]=oe,O=we):(I[O]=pe,I[Y]=oe,O=Y);else if(we<ne&&0>o(me,oe))I[O]=me,I[we]=oe,O=we;else break e}}return ue}function o(I,ue){var oe=I.sortIndex-ue.sortIndex;return oe!==0?oe:I.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var f=[],p=[],m=1,g=null,y=3,S=!1,E=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(I){for(var ue=t(p);ue!==null;){if(ue.callback===null)s(p);else if(ue.startTime<=I)s(p),ue.sortIndex=ue.expirationTime,e(f,ue);else break;ue=t(p)}}function R(I){if(M=!1,N(I),!E)if(t(f)!==null)E=!0,se(V);else{var ue=t(p);ue!==null&&ce(R,ue.startTime-I)}}function V(I,ue){E=!1,M&&(M=!1,x(k),k=-1),S=!0;var oe=y;try{for(N(ue),g=t(f);g!==null&&(!(g.expirationTime>ue)||I&&!G());){var O=g.callback;if(typeof O=="function"){g.callback=null,y=g.priorityLevel;var ne=O(g.expirationTime<=ue);ue=i.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(f)&&s(f),N(ue)}else s(f);g=t(f)}if(g!==null)var Ae=!0;else{var Y=t(p);Y!==null&&ce(R,Y.startTime-ue),Ae=!1}return Ae}finally{g=null,y=oe,S=!1}}var z=!1,F=null,k=-1,P=5,C=-1;function G(){return!(i.unstable_now()-C<P)}function le(){if(F!==null){var I=i.unstable_now();C=I;var ue=!0;try{ue=F(!0,I)}finally{ue?Q():(z=!1,F=null)}}else z=!1}var Q;if(typeof D=="function")Q=function(){D(le)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=le,Q=function(){he.postMessage(null)}}else Q=function(){_(le,0)};function se(I){F=I,z||(z=!0,Q())}function ce(I,ue){k=_(function(){I(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(I){I.callback=null},i.unstable_continueExecution=function(){E||S||(E=!0,se(V))},i.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<I?Math.floor(1e3/I):5},i.unstable_getCurrentPriorityLevel=function(){return y},i.unstable_getFirstCallbackNode=function(){return t(f)},i.unstable_next=function(I){switch(y){case 1:case 2:case 3:var ue=3;break;default:ue=y}var oe=y;y=ue;try{return I()}finally{y=oe}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(I,ue){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var oe=y;y=I;try{return ue()}finally{y=oe}},i.unstable_scheduleCallback=function(I,ue,oe){var O=i.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?O+oe:O):oe=O,I){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=oe+ne,I={id:m++,callback:ue,priorityLevel:I,startTime:oe,expirationTime:ne,sortIndex:-1},oe>O?(I.sortIndex=oe,e(p,I),t(f)===null&&I===t(p)&&(M?(x(k),k=-1):M=!0,ce(R,oe-O))):(I.sortIndex=ne,e(f,I),E||S||(E=!0,se(V))),I},i.unstable_shouldYield=G,i.unstable_wrapCallback=function(I){var ue=y;return function(){var oe=y;y=ue;try{return I.apply(this,arguments)}finally{y=oe}}}}(fd)),fd}var Bm;function M0(){return Bm||(Bm=1,dd.exports=E0()),dd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function w0(){if(zm)return Bn;zm=1;var i=$f(),e=M0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function y(n){return f.call(g,n)?!0:f.call(m,n)?!1:p.test(n)?g[n]=!0:(m[n]=!0,!1)}function S(n,r,a,u){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,a,u){if(r===null||typeof r>"u"||S(n,r,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,a,u,h,v,w){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=w}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];_[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,D);_[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,D);_[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,D);_[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,r,a,u){var h=_.hasOwnProperty(r)?_[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,a,h,u)&&(a=null),u||h===null?y(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(r=h.attributeName,u=h.attributeNamespace,a===null?n.removeAttribute(r):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,u?n.setAttributeNS(u,r,a):n.setAttribute(r,a))))}var R=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),G=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),I=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=I&&n[I]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,O;function ne(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var Ae=!1;function Y(n,r){if(!n||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ee){var u=ee}Reflect.construct(n,[],r)}else{try{r.call()}catch(ee){u=ee}n.call(r.prototype)}else{try{throw Error()}catch(ee){u=ee}n()}}catch(ee){if(ee&&u&&typeof ee.stack=="string"){for(var h=ee.stack.split(`
`),v=u.stack.split(`
`),w=h.length-1,U=v.length-1;1<=w&&0<=U&&h[w]!==v[U];)U--;for(;1<=w&&0<=U;w--,U--)if(h[w]!==v[U]){if(w!==1||U!==1)do if(w--,U--,0>U||h[w]!==v[U]){var B=`
`+h[w].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=w&&0<=U);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ne(n):""}function pe(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Y(n.type,!1),n;case 11:return n=Y(n.type.render,!1),n;case 1:return n=Y(n.type,!0),n;default:return""}}function we(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case z:return"Portal";case P:return"Profiler";case k:return"StrictMode";case Q:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case le:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return r=n.displayName||null,r!==null?r:we(n.type)||"Memo";case se:r=n._payload,n=n._init;try{return we(n(r))}catch{}}return null}function me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(r);case 8:return r===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function qe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ke(n){var r=qe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,v=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(w){u=""+w,v.call(this,w)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Pt(n){n._valueTracker||(n._valueTracker=ke(n))}function Rt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),u="";return n&&(u=qe(n)?n.checked?"true":"false":n.value),n=u,n!==a?(r.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function H(n,r){var a=r.checked;return oe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Tn(n,r){var a=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;a=Ce(r.value!=null?r.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function xt(n,r){r=r.checked,r!=null&&N(n,"checked",r,!1)}function gt(n,r){xt(n,r);var a=Ce(r.value),u=r.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Dt(n,r.type,a):r.hasOwnProperty("defaultValue")&&Dt(n,r.type,Ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ze(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Dt(n,r,a){(r!=="number"||pt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ye=Array.isArray;function L(n,r,a,u){if(n=n.options,r){r={};for(var h=0;h<a.length;h++)r["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=r.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Ce(a),r=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function b(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function J(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(Ye(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Ce(a)}}function ge(n,r){var a=Ce(r.value),u=Ce(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function Se(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $e(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?de(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Re,et=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,u,h){MSApp.execUnsafeLocalFunction(function(){return n(r,a,u,h)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Qe(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Be.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ee[r]=Ee[n]})});function rt(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+r).trim():r+"px"}function st(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var u=a.indexOf("--")===0,h=rt(a,r[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,h):n[a]=h}}var ze=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vt(n,r){if(r){if(ze[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function lt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nt=null;function j(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,ae=null,ve=null;function Ue(n){if(n=Fo(n)){if(typeof Pe!="function")throw Error(t(280));var r=n.stateNode;r&&(r=qa(r),Pe(n.stateNode,n.type,r))}}function De(n){ae?ve?ve.push(n):ve=[n]:ae=n}function ct(){if(ae){var n=ae,r=ve;if(ve=ae=null,Ue(n),r)for(n=0;n<r.length;n++)Ue(r[n])}}function Bt(n,r){return n(r)}function tn(){}var wt=!1;function Dn(n,r,a){if(wt)return n(r,a);wt=!0;try{return Bt(n,r,a)}finally{wt=!1,(ae!==null||ve!==null)&&(tn(),ct())}}function An(n,r){var a=n.stateNode;if(a===null)return null;var u=qa(a);if(u===null)return null;a=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var ys=!1;if(d)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){ys=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{ys=!1}function Ni(n,r,a,u,h,v,w,U,B){var ee=Array.prototype.slice.call(arguments,3);try{r.apply(a,ee)}catch(ye){this.onError(ye)}}var Li=!1,kr=null,Br=!1,rr=null,ba={onError:function(n){Li=!0,kr=n}};function Ss(n,r,a,u,h,v,w,U,B){Li=!1,kr=null,Ni.apply(ba,arguments)}function Ta(n,r,a,u,h,v,w,U,B){if(Ss.apply(this,arguments),Li){if(Li){var ee=kr;Li=!1,kr=null}else throw Error(t(198));Br||(Br=!0,rr=ee)}}function Si(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Aa(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ca(n){if(Si(n)!==n)throw Error(t(188))}function Nc(n){var r=n.alternate;if(!r){if(r=Si(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,u=r;;){var h=a.return;if(h===null)break;var v=h.alternate;if(v===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===v.child){for(v=h.child;v;){if(v===a)return Ca(h),n;if(v===u)return Ca(h),r;v=v.sibling}throw Error(t(188))}if(a.return!==u.return)a=h,u=v;else{for(var w=!1,U=h.child;U;){if(U===a){w=!0,a=h,u=v;break}if(U===u){w=!0,u=h,a=v;break}U=U.sibling}if(!w){for(U=v.child;U;){if(U===a){w=!0,a=v,u=h;break}if(U===u){w=!0,u=v,a=h;break}U=U.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Ra(n){return n=Nc(n),n!==null?Pa(n):null}function Pa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Pa(n);if(r!==null)return r;n=n.sibling}return null}var Na=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,X=e.unstable_shouldYield,te=e.unstable_requestPaint,K=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,be=e.unstable_ImmediatePriority,Ne=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,He=e.unstable_LowPriority,ot=e.unstable_IdlePriority,it=null,je=null;function St(n){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(it,n,void 0,(n.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Mt,Xt=Math.log,Vt=Math.LN2;function Mt(n){return n>>>=0,n===0?32:31-(Xt(n)/Vt|0)|0}var Je=64,qt=4194304;function yt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vn(n,r){var a=n.pendingLanes;if(a===0)return 0;var u=0,h=n.suspendedLanes,v=n.pingedLanes,w=a&268435455;if(w!==0){var U=w&~h;U!==0?u=yt(U):(v&=w,v!==0&&(u=yt(v)))}else w=a&~h,w!==0?u=yt(w):v!==0&&(u=yt(v));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,v=r&-r,h>=v||h===16&&(v&4194240)!==0))return r;if((u&4)!==0&&(u|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)a=31-ut(r),h=1<<a,u|=n[a],r&=~h;return u}function sr(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cn(n,r){for(var a=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,v=n.pendingLanes;0<v;){var w=31-ut(v),U=1<<w,B=h[w];B===-1?((U&a)===0||(U&u)!==0)&&(h[w]=sr(U,r)):B<=r&&(n.expiredLanes|=U),v&=~U}}function Di(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ft(){var n=Je;return Je<<=1,(Je&4194240)===0&&(Je=64),n}function _n(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function ln(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ut(r),n[r]=a}function pn(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-ut(a),v=1<<h;r[h]=0,u[h]=-1,n[h]=-1,a&=~v}}function cn(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var u=31-ut(a),h=1<<u;h&r|n[u]&r&&(n[u]|=r),a&=~h}}var bt=0;function Ei(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var hh,Lc,ph,mh,gh,Dc=!1,La=[],or=null,ar=null,lr=null,So=new Map,Eo=new Map,cr=[],k_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vh(n,r){switch(n){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":So.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(r.pointerId)}}function Mo(n,r,a,u,h,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:a,eventSystemFlags:u,nativeEvent:v,targetContainers:[h]},r!==null&&(r=Fo(r),r!==null&&Lc(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function B_(n,r,a,u,h){switch(r){case"focusin":return or=Mo(or,n,r,a,u,h),!0;case"dragenter":return ar=Mo(ar,n,r,a,u,h),!0;case"mouseover":return lr=Mo(lr,n,r,a,u,h),!0;case"pointerover":var v=h.pointerId;return So.set(v,Mo(So.get(v)||null,n,r,a,u,h)),!0;case"gotpointercapture":return v=h.pointerId,Eo.set(v,Mo(Eo.get(v)||null,n,r,a,u,h)),!0}return!1}function _h(n){var r=zr(n.target);if(r!==null){var a=Si(r);if(a!==null){if(r=a.tag,r===13){if(r=Aa(a),r!==null){n.blockedOn=r,gh(n.priority,function(){ph(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Da(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Ic(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Nt=u,a.target.dispatchEvent(u),Nt=null}else return r=Fo(a),r!==null&&Lc(r),n.blockedOn=a,!1;r.shift()}return!0}function xh(n,r,a){Da(n)&&a.delete(r)}function z_(){Dc=!1,or!==null&&Da(or)&&(or=null),ar!==null&&Da(ar)&&(ar=null),lr!==null&&Da(lr)&&(lr=null),So.forEach(xh),Eo.forEach(xh)}function wo(n,r){n.blockedOn===r&&(n.blockedOn=null,Dc||(Dc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,z_)))}function bo(n){function r(h){return wo(h,n)}if(0<La.length){wo(La[0],n);for(var a=1;a<La.length;a++){var u=La[a];u.blockedOn===n&&(u.blockedOn=null)}}for(or!==null&&wo(or,n),ar!==null&&wo(ar,n),lr!==null&&wo(lr,n),So.forEach(r),Eo.forEach(r),a=0;a<cr.length;a++)u=cr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)_h(a),a.blockedOn===null&&cr.shift()}var Es=R.ReactCurrentBatchConfig,Ua=!0;function H_(n,r,a,u){var h=bt,v=Es.transition;Es.transition=null;try{bt=1,Uc(n,r,a,u)}finally{bt=h,Es.transition=v}}function V_(n,r,a,u){var h=bt,v=Es.transition;Es.transition=null;try{bt=4,Uc(n,r,a,u)}finally{bt=h,Es.transition=v}}function Uc(n,r,a,u){if(Ua){var h=Ic(n,r,a,u);if(h===null)Jc(n,r,u,Ia,a),vh(n,u);else if(B_(h,n,r,a,u))u.stopPropagation();else if(vh(n,u),r&4&&-1<k_.indexOf(n)){for(;h!==null;){var v=Fo(h);if(v!==null&&hh(v),v=Ic(n,r,a,u),v===null&&Jc(n,r,u,Ia,a),v===h)break;h=v}h!==null&&u.stopPropagation()}else Jc(n,r,u,null,a)}}var Ia=null;function Ic(n,r,a,u){if(Ia=null,n=j(u),n=zr(n),n!==null)if(r=Si(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Aa(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ia=n,null}function yh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case be:return 1;case Ne:return 4;case Ie:case He:return 16;case ot:return 536870912;default:return 16}default:return 16}}var ur=null,Oc=null,Oa=null;function Sh(){if(Oa)return Oa;var n,r=Oc,a=r.length,u,h="value"in ur?ur.value:ur.textContent,v=h.length;for(n=0;n<a&&r[n]===h[n];n++);var w=a-n;for(u=1;u<=w&&r[a-u]===h[v-u];u++);return Oa=h.slice(n,1<u?1-u:void 0)}function Fa(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function ka(){return!0}function Eh(){return!1}function Wn(n){function r(a,u,h,v,w){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=v,this.target=w,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(v):v[U]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?ka:Eh,this.isPropagationStopped=Eh,this}return oe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),r}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=Wn(Ms),To=oe({},Ms,{view:0,detail:0}),G_=Wn(To),kc,Bc,Ao,Ba=oe({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ao&&(Ao&&n.type==="mousemove"?(kc=n.screenX-Ao.screenX,Bc=n.screenY-Ao.screenY):Bc=kc=0,Ao=n),kc)},movementY:function(n){return"movementY"in n?n.movementY:Bc}}),Mh=Wn(Ba),W_=oe({},Ba,{dataTransfer:0}),j_=Wn(W_),X_=oe({},To,{relatedTarget:0}),zc=Wn(X_),q_=oe({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),$_=Wn(q_),Y_=oe({},Ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),K_=Wn(Y_),Z_=oe({},Ms,{data:0}),wh=Wn(Z_),J_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=ex[n])?!!r[n]:!1}function Hc(){return tx}var nx=oe({},To,{key:function(n){if(n.key){var r=J_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Fa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Q_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(n){return n.type==="keypress"?Fa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ix=Wn(nx),rx=oe({},Ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bh=Wn(rx),sx=oe({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),ox=Wn(sx),ax=oe({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Wn(ax),cx=oe({},Ba,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=Wn(cx),dx=[9,13,27,32],Vc=d&&"CompositionEvent"in window,Co=null;d&&"documentMode"in document&&(Co=document.documentMode);var fx=d&&"TextEvent"in window&&!Co,Th=d&&(!Vc||Co&&8<Co&&11>=Co),Ah=" ",Ch=!1;function Rh(n,r){switch(n){case"keyup":return dx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ph(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ws=!1;function hx(n,r){switch(n){case"compositionend":return Ph(r);case"keypress":return r.which!==32?null:(Ch=!0,Ah);case"textInput":return n=r.data,n===Ah&&Ch?null:n;default:return null}}function px(n,r){if(ws)return n==="compositionend"||!Vc&&Rh(n,r)?(n=Sh(),Oa=Oc=ur=null,ws=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Th&&r.locale!=="ko"?null:r.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!mx[n.type]:r==="textarea"}function Lh(n,r,a,u){De(u),r=Wa(r,"onChange"),0<r.length&&(a=new Fc("onChange","change",null,a,u),n.push({event:a,listeners:r}))}var Ro=null,Po=null;function gx(n){Kh(n,0)}function za(n){var r=Rs(n);if(Rt(r))return n}function vx(n,r){if(n==="change")return r}var Dh=!1;if(d){var Gc;if(d){var Wc="oninput"in document;if(!Wc){var Uh=document.createElement("div");Uh.setAttribute("oninput","return;"),Wc=typeof Uh.oninput=="function"}Gc=Wc}else Gc=!1;Dh=Gc&&(!document.documentMode||9<document.documentMode)}function Ih(){Ro&&(Ro.detachEvent("onpropertychange",Oh),Po=Ro=null)}function Oh(n){if(n.propertyName==="value"&&za(Po)){var r=[];Lh(r,Po,n,j(n)),Dn(gx,r)}}function _x(n,r,a){n==="focusin"?(Ih(),Ro=r,Po=a,Ro.attachEvent("onpropertychange",Oh)):n==="focusout"&&Ih()}function xx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return za(Po)}function yx(n,r){if(n==="click")return za(r)}function Sx(n,r){if(n==="input"||n==="change")return za(r)}function Ex(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var si=typeof Object.is=="function"?Object.is:Ex;function No(n,r){if(si(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),u=Object.keys(r);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!f.call(r,h)||!si(n[h],r[h]))return!1}return!0}function Fh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function kh(n,r){var a=Fh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=r&&u>=r)return{node:a,offset:r-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Fh(a)}}function Bh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Bh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function zh(){for(var n=window,r=pt();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=pt(n.document)}return r}function jc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Mx(n){var r=zh(),a=n.focusedElem,u=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Bh(a.ownerDocument.documentElement,a)){if(u!==null&&jc(a)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,v=Math.min(u.start,h);u=u.end===void 0?v:Math.min(u.end,h),!n.extend&&v>u&&(h=u,u=v,v=h),h=kh(a,v);var w=kh(a,u);h&&w&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),n.removeAllRanges(),v>u?(n.addRange(r),n.extend(w.node,w.offset)):(r.setEnd(w.node,w.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var wx=d&&"documentMode"in document&&11>=document.documentMode,bs=null,Xc=null,Lo=null,qc=!1;function Hh(n,r,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qc||bs==null||bs!==pt(u)||(u=bs,"selectionStart"in u&&jc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Lo&&No(Lo,u)||(Lo=u,u=Wa(Xc,"onSelect"),0<u.length&&(r=new Fc("onSelect","select",null,r,a),n.push({event:r,listeners:u}),r.target=bs)))}function Ha(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ts={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},$c={},Vh={};d&&(Vh=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Va(n){if($c[n])return $c[n];if(!Ts[n])return n;var r=Ts[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Vh)return $c[n]=r[a];return n}var Gh=Va("animationend"),Wh=Va("animationiteration"),jh=Va("animationstart"),Xh=Va("transitionend"),qh=new Map,$h="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(n,r){qh.set(n,r),l(r,[n])}for(var Yc=0;Yc<$h.length;Yc++){var Kc=$h[Yc],bx=Kc.toLowerCase(),Tx=Kc[0].toUpperCase()+Kc.slice(1);dr(bx,"on"+Tx)}dr(Gh,"onAnimationEnd"),dr(Wh,"onAnimationIteration"),dr(jh,"onAnimationStart"),dr("dblclick","onDoubleClick"),dr("focusin","onFocus"),dr("focusout","onBlur"),dr(Xh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function Yh(n,r,a){var u=n.type||"unknown-event";n.currentTarget=a,Ta(u,r,void 0,n),n.currentTarget=null}function Kh(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],h=u.event;u=u.listeners;e:{var v=void 0;if(r)for(var w=u.length-1;0<=w;w--){var U=u[w],B=U.instance,ee=U.currentTarget;if(U=U.listener,B!==v&&h.isPropagationStopped())break e;Yh(h,U,ee),v=B}else for(w=0;w<u.length;w++){if(U=u[w],B=U.instance,ee=U.currentTarget,U=U.listener,B!==v&&h.isPropagationStopped())break e;Yh(h,U,ee),v=B}}}if(Br)throw n=rr,Br=!1,rr=null,n}function zt(n,r){var a=r[ru];a===void 0&&(a=r[ru]=new Set);var u=n+"__bubble";a.has(u)||(Zh(r,n,2,!1),a.add(u))}function Zc(n,r,a){var u=0;r&&(u|=4),Zh(a,n,u,r)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function Uo(n){if(!n[Ga]){n[Ga]=!0,s.forEach(function(a){a!=="selectionchange"&&(Ax.has(a)||Zc(a,!1,n),Zc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ga]||(r[Ga]=!0,Zc("selectionchange",!1,r))}}function Zh(n,r,a,u){switch(yh(r)){case 1:var h=H_;break;case 4:h=V_;break;default:h=Uc}a=h.bind(null,r,a,n),h=void 0,!ys||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(r,a,{capture:!0,passive:h}):n.addEventListener(r,a,!0):h!==void 0?n.addEventListener(r,a,{passive:h}):n.addEventListener(r,a,!1)}function Jc(n,r,a,u,h){var v=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var U=u.stateNode.containerInfo;if(U===h||U.nodeType===8&&U.parentNode===h)break;if(w===4)for(w=u.return;w!==null;){var B=w.tag;if((B===3||B===4)&&(B=w.stateNode.containerInfo,B===h||B.nodeType===8&&B.parentNode===h))return;w=w.return}for(;U!==null;){if(w=zr(U),w===null)return;if(B=w.tag,B===5||B===6){u=v=w;continue e}U=U.parentNode}}u=u.return}Dn(function(){var ee=v,ye=j(a),Me=[];e:{var xe=qh.get(n);if(xe!==void 0){var Oe=Fc,Ve=n;switch(n){case"keypress":if(Fa(a)===0)break e;case"keydown":case"keyup":Oe=ix;break;case"focusin":Ve="focus",Oe=zc;break;case"focusout":Ve="blur",Oe=zc;break;case"beforeblur":case"afterblur":Oe=zc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=j_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=ox;break;case Gh:case Wh:case jh:Oe=$_;break;case Xh:Oe=lx;break;case"scroll":Oe=G_;break;case"wheel":Oe=ux;break;case"copy":case"cut":case"paste":Oe=K_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=bh}var Xe=(r&4)!==0,Yt=!Xe&&n==="scroll",$=Xe?xe!==null?xe+"Capture":null:xe;Xe=[];for(var W=ee,Z;W!==null;){Z=W;var Te=Z.stateNode;if(Z.tag===5&&Te!==null&&(Z=Te,$!==null&&(Te=An(W,$),Te!=null&&Xe.push(Io(W,Te,Z)))),Yt)break;W=W.return}0<Xe.length&&(xe=new Oe(xe,Ve,null,a,ye),Me.push({event:xe,listeners:Xe}))}}if((r&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Oe=n==="mouseout"||n==="pointerout",xe&&a!==Nt&&(Ve=a.relatedTarget||a.fromElement)&&(zr(Ve)||Ve[Ui]))break e;if((Oe||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,Oe?(Ve=a.relatedTarget||a.toElement,Oe=ee,Ve=Ve?zr(Ve):null,Ve!==null&&(Yt=Si(Ve),Ve!==Yt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Oe=null,Ve=ee),Oe!==Ve)){if(Xe=Mh,Te="onMouseLeave",$="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Xe=bh,Te="onPointerLeave",$="onPointerEnter",W="pointer"),Yt=Oe==null?xe:Rs(Oe),Z=Ve==null?xe:Rs(Ve),xe=new Xe(Te,W+"leave",Oe,a,ye),xe.target=Yt,xe.relatedTarget=Z,Te=null,zr(ye)===ee&&(Xe=new Xe($,W+"enter",Ve,a,ye),Xe.target=Z,Xe.relatedTarget=Yt,Te=Xe),Yt=Te,Oe&&Ve)t:{for(Xe=Oe,$=Ve,W=0,Z=Xe;Z;Z=As(Z))W++;for(Z=0,Te=$;Te;Te=As(Te))Z++;for(;0<W-Z;)Xe=As(Xe),W--;for(;0<Z-W;)$=As($),Z--;for(;W--;){if(Xe===$||$!==null&&Xe===$.alternate)break t;Xe=As(Xe),$=As($)}Xe=null}else Xe=null;Oe!==null&&Jh(Me,xe,Oe,Xe,!1),Ve!==null&&Yt!==null&&Jh(Me,Yt,Ve,Xe,!0)}}e:{if(xe=ee?Rs(ee):window,Oe=xe.nodeName&&xe.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&xe.type==="file")var Ke=vx;else if(Nh(xe))if(Dh)Ke=Sx;else{Ke=xx;var tt=_x}else(Oe=xe.nodeName)&&Oe.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ke=yx);if(Ke&&(Ke=Ke(n,ee))){Lh(Me,Ke,a,ye);break e}tt&&tt(n,xe,ee),n==="focusout"&&(tt=xe._wrapperState)&&tt.controlled&&xe.type==="number"&&Dt(xe,"number",xe.value)}switch(tt=ee?Rs(ee):window,n){case"focusin":(Nh(tt)||tt.contentEditable==="true")&&(bs=tt,Xc=ee,Lo=null);break;case"focusout":Lo=Xc=bs=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,Hh(Me,a,ye);break;case"selectionchange":if(wx)break;case"keydown":case"keyup":Hh(Me,a,ye)}var nt;if(Vc)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else ws?Rh(n,a)&&(at="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(Th&&a.locale!=="ko"&&(ws||at!=="onCompositionStart"?at==="onCompositionEnd"&&ws&&(nt=Sh()):(ur=ye,Oc="value"in ur?ur.value:ur.textContent,ws=!0)),tt=Wa(ee,at),0<tt.length&&(at=new wh(at,n,null,a,ye),Me.push({event:at,listeners:tt}),nt?at.data=nt:(nt=Ph(a),nt!==null&&(at.data=nt)))),(nt=fx?hx(n,a):px(n,a))&&(ee=Wa(ee,"onBeforeInput"),0<ee.length&&(ye=new wh("onBeforeInput","beforeinput",null,a,ye),Me.push({event:ye,listeners:ee}),ye.data=nt))}Kh(Me,r)})}function Io(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Wa(n,r){for(var a=r+"Capture",u=[];n!==null;){var h=n,v=h.stateNode;h.tag===5&&v!==null&&(h=v,v=An(n,a),v!=null&&u.unshift(Io(n,v,h)),v=An(n,r),v!=null&&u.push(Io(n,v,h))),n=n.return}return u}function As(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Jh(n,r,a,u,h){for(var v=r._reactName,w=[];a!==null&&a!==u;){var U=a,B=U.alternate,ee=U.stateNode;if(B!==null&&B===u)break;U.tag===5&&ee!==null&&(U=ee,h?(B=An(a,v),B!=null&&w.unshift(Io(a,B,U))):h||(B=An(a,v),B!=null&&w.push(Io(a,B,U)))),a=a.return}w.length!==0&&n.push({event:r,listeners:w})}var Cx=/\r\n?/g,Rx=/\u0000|\uFFFD/g;function Qh(n){return(typeof n=="string"?n:""+n).replace(Cx,`
`).replace(Rx,"")}function ja(n,r,a){if(r=Qh(r),Qh(n)!==r&&a)throw Error(t(425))}function Xa(){}var Qc=null,eu=null;function tu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var nu=typeof setTimeout=="function"?setTimeout:void 0,Px=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,Nx=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(n){return ep.resolve(null).then(n).catch(Lx)}:nu;function Lx(n){setTimeout(function(){throw n})}function iu(n,r){var a=r,u=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(u===0){n.removeChild(h),bo(r);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=h}while(a);bo(r)}function fr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function tp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Mi="__reactFiber$"+Cs,Oo="__reactProps$"+Cs,Ui="__reactContainer$"+Cs,ru="__reactEvents$"+Cs,Dx="__reactListeners$"+Cs,Ux="__reactHandles$"+Cs;function zr(n){var r=n[Mi];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Ui]||a[Mi]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=tp(n);n!==null;){if(a=n[Mi])return a;n=tp(n)}return r}n=a,a=n.parentNode}return null}function Fo(n){return n=n[Mi]||n[Ui],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Rs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function qa(n){return n[Oo]||null}var su=[],Ps=-1;function hr(n){return{current:n}}function Ht(n){0>Ps||(n.current=su[Ps],su[Ps]=null,Ps--)}function kt(n,r){Ps++,su[Ps]=n.current,n.current=r}var pr={},xn=hr(pr),Un=hr(!1),Hr=pr;function Ns(n,r){var a=n.type.contextTypes;if(!a)return pr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},v;for(v in a)h[v]=r[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=h),h}function In(n){return n=n.childContextTypes,n!=null}function $a(){Ht(Un),Ht(xn)}function np(n,r,a){if(xn.current!==pr)throw Error(t(168));kt(xn,r),kt(Un,a)}function ip(n,r,a){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(t(108,me(n)||"Unknown",h));return oe({},a,u)}function Ya(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pr,Hr=xn.current,kt(xn,n),kt(Un,Un.current),!0}function rp(n,r,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=ip(n,r,Hr),u.__reactInternalMemoizedMergedChildContext=n,Ht(Un),Ht(xn),kt(xn,n)):Ht(Un),kt(Un,a)}var Ii=null,Ka=!1,ou=!1;function sp(n){Ii===null?Ii=[n]:Ii.push(n)}function Ix(n){Ka=!0,sp(n)}function mr(){if(!ou&&Ii!==null){ou=!0;var n=0,r=bt;try{var a=Ii;for(bt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ii=null,Ka=!1}catch(h){throw Ii!==null&&(Ii=Ii.slice(n+1)),Na(be,mr),h}finally{bt=r,ou=!1}}return null}var Ls=[],Ds=0,Za=null,Ja=0,Zn=[],Jn=0,Vr=null,Oi=1,Fi="";function Gr(n,r){Ls[Ds++]=Ja,Ls[Ds++]=Za,Za=n,Ja=r}function op(n,r,a){Zn[Jn++]=Oi,Zn[Jn++]=Fi,Zn[Jn++]=Vr,Vr=n;var u=Oi;n=Fi;var h=32-ut(u)-1;u&=~(1<<h),a+=1;var v=32-ut(r)+h;if(30<v){var w=h-h%5;v=(u&(1<<w)-1).toString(32),u>>=w,h-=w,Oi=1<<32-ut(r)+h|a<<h|u,Fi=v+n}else Oi=1<<v|a<<h|u,Fi=n}function au(n){n.return!==null&&(Gr(n,1),op(n,1,0))}function lu(n){for(;n===Za;)Za=Ls[--Ds],Ls[Ds]=null,Ja=Ls[--Ds],Ls[Ds]=null;for(;n===Vr;)Vr=Zn[--Jn],Zn[Jn]=null,Fi=Zn[--Jn],Zn[Jn]=null,Oi=Zn[--Jn],Zn[Jn]=null}var jn=null,Xn=null,Gt=!1,oi=null;function ap(n,r){var a=ni(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function lp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,jn=n,Xn=fr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,jn=n,Xn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Vr!==null?{id:Oi,overflow:Fi}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=ni(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,jn=n,Xn=null,!0):!1;default:return!1}}function cu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function uu(n){if(Gt){var r=Xn;if(r){var a=r;if(!lp(n,r)){if(cu(n))throw Error(t(418));r=fr(a.nextSibling);var u=jn;r&&lp(n,r)?ap(u,a):(n.flags=n.flags&-4097|2,Gt=!1,jn=n)}}else{if(cu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Gt=!1,jn=n}}}function cp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;jn=n}function Qa(n){if(n!==jn)return!1;if(!Gt)return cp(n),Gt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!tu(n.type,n.memoizedProps)),r&&(r=Xn)){if(cu(n))throw up(),Error(t(418));for(;r;)ap(n,r),r=fr(r.nextSibling)}if(cp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){Xn=fr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}Xn=null}}else Xn=jn?fr(n.stateNode.nextSibling):null;return!0}function up(){for(var n=Xn;n;)n=fr(n.nextSibling)}function Us(){Xn=jn=null,Gt=!1}function du(n){oi===null?oi=[n]:oi.push(n)}var Ox=R.ReactCurrentBatchConfig;function ko(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var h=u,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(w){var U=h.refs;w===null?delete U[v]:U[v]=w},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function el(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function dp(n){var r=n._init;return r(n._payload)}function fp(n){function r($,W){if(n){var Z=$.deletions;Z===null?($.deletions=[W],$.flags|=16):Z.push(W)}}function a($,W){if(!n)return null;for(;W!==null;)r($,W),W=W.sibling;return null}function u($,W){for($=new Map;W!==null;)W.key!==null?$.set(W.key,W):$.set(W.index,W),W=W.sibling;return $}function h($,W){return $=Mr($,W),$.index=0,$.sibling=null,$}function v($,W,Z){return $.index=Z,n?(Z=$.alternate,Z!==null?(Z=Z.index,Z<W?($.flags|=2,W):Z):($.flags|=2,W)):($.flags|=1048576,W)}function w($){return n&&$.alternate===null&&($.flags|=2),$}function U($,W,Z,Te){return W===null||W.tag!==6?(W=nd(Z,$.mode,Te),W.return=$,W):(W=h(W,Z),W.return=$,W)}function B($,W,Z,Te){var Ke=Z.type;return Ke===F?ye($,W,Z.props.children,Te,Z.key):W!==null&&(W.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===se&&dp(Ke)===W.type)?(Te=h(W,Z.props),Te.ref=ko($,W,Z),Te.return=$,Te):(Te=wl(Z.type,Z.key,Z.props,null,$.mode,Te),Te.ref=ko($,W,Z),Te.return=$,Te)}function ee($,W,Z,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==Z.containerInfo||W.stateNode.implementation!==Z.implementation?(W=id(Z,$.mode,Te),W.return=$,W):(W=h(W,Z.children||[]),W.return=$,W)}function ye($,W,Z,Te,Ke){return W===null||W.tag!==7?(W=Zr(Z,$.mode,Te,Ke),W.return=$,W):(W=h(W,Z),W.return=$,W)}function Me($,W,Z){if(typeof W=="string"&&W!==""||typeof W=="number")return W=nd(""+W,$.mode,Z),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case V:return Z=wl(W.type,W.key,W.props,null,$.mode,Z),Z.ref=ko($,null,W),Z.return=$,Z;case z:return W=id(W,$.mode,Z),W.return=$,W;case se:var Te=W._init;return Me($,Te(W._payload),Z)}if(Ye(W)||ue(W))return W=Zr(W,$.mode,Z,null),W.return=$,W;el($,W)}return null}function xe($,W,Z,Te){var Ke=W!==null?W.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Ke!==null?null:U($,W,""+Z,Te);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case V:return Z.key===Ke?B($,W,Z,Te):null;case z:return Z.key===Ke?ee($,W,Z,Te):null;case se:return Ke=Z._init,xe($,W,Ke(Z._payload),Te)}if(Ye(Z)||ue(Z))return Ke!==null?null:ye($,W,Z,Te,null);el($,Z)}return null}function Oe($,W,Z,Te,Ke){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return $=$.get(Z)||null,U(W,$,""+Te,Ke);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case V:return $=$.get(Te.key===null?Z:Te.key)||null,B(W,$,Te,Ke);case z:return $=$.get(Te.key===null?Z:Te.key)||null,ee(W,$,Te,Ke);case se:var tt=Te._init;return Oe($,W,Z,tt(Te._payload),Ke)}if(Ye(Te)||ue(Te))return $=$.get(Z)||null,ye(W,$,Te,Ke,null);el(W,Te)}return null}function Ve($,W,Z,Te){for(var Ke=null,tt=null,nt=W,at=W=0,fn=null;nt!==null&&at<Z.length;at++){nt.index>at?(fn=nt,nt=null):fn=nt.sibling;var At=xe($,nt,Z[at],Te);if(At===null){nt===null&&(nt=fn);break}n&&nt&&At.alternate===null&&r($,nt),W=v(At,W,at),tt===null?Ke=At:tt.sibling=At,tt=At,nt=fn}if(at===Z.length)return a($,nt),Gt&&Gr($,at),Ke;if(nt===null){for(;at<Z.length;at++)nt=Me($,Z[at],Te),nt!==null&&(W=v(nt,W,at),tt===null?Ke=nt:tt.sibling=nt,tt=nt);return Gt&&Gr($,at),Ke}for(nt=u($,nt);at<Z.length;at++)fn=Oe(nt,$,at,Z[at],Te),fn!==null&&(n&&fn.alternate!==null&&nt.delete(fn.key===null?at:fn.key),W=v(fn,W,at),tt===null?Ke=fn:tt.sibling=fn,tt=fn);return n&&nt.forEach(function(wr){return r($,wr)}),Gt&&Gr($,at),Ke}function Xe($,W,Z,Te){var Ke=ue(Z);if(typeof Ke!="function")throw Error(t(150));if(Z=Ke.call(Z),Z==null)throw Error(t(151));for(var tt=Ke=null,nt=W,at=W=0,fn=null,At=Z.next();nt!==null&&!At.done;at++,At=Z.next()){nt.index>at?(fn=nt,nt=null):fn=nt.sibling;var wr=xe($,nt,At.value,Te);if(wr===null){nt===null&&(nt=fn);break}n&&nt&&wr.alternate===null&&r($,nt),W=v(wr,W,at),tt===null?Ke=wr:tt.sibling=wr,tt=wr,nt=fn}if(At.done)return a($,nt),Gt&&Gr($,at),Ke;if(nt===null){for(;!At.done;at++,At=Z.next())At=Me($,At.value,Te),At!==null&&(W=v(At,W,at),tt===null?Ke=At:tt.sibling=At,tt=At);return Gt&&Gr($,at),Ke}for(nt=u($,nt);!At.done;at++,At=Z.next())At=Oe(nt,$,at,At.value,Te),At!==null&&(n&&At.alternate!==null&&nt.delete(At.key===null?at:At.key),W=v(At,W,at),tt===null?Ke=At:tt.sibling=At,tt=At);return n&&nt.forEach(function(m0){return r($,m0)}),Gt&&Gr($,at),Ke}function Yt($,W,Z,Te){if(typeof Z=="object"&&Z!==null&&Z.type===F&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case V:e:{for(var Ke=Z.key,tt=W;tt!==null;){if(tt.key===Ke){if(Ke=Z.type,Ke===F){if(tt.tag===7){a($,tt.sibling),W=h(tt,Z.props.children),W.return=$,$=W;break e}}else if(tt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===se&&dp(Ke)===tt.type){a($,tt.sibling),W=h(tt,Z.props),W.ref=ko($,tt,Z),W.return=$,$=W;break e}a($,tt);break}else r($,tt);tt=tt.sibling}Z.type===F?(W=Zr(Z.props.children,$.mode,Te,Z.key),W.return=$,$=W):(Te=wl(Z.type,Z.key,Z.props,null,$.mode,Te),Te.ref=ko($,W,Z),Te.return=$,$=Te)}return w($);case z:e:{for(tt=Z.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===Z.containerInfo&&W.stateNode.implementation===Z.implementation){a($,W.sibling),W=h(W,Z.children||[]),W.return=$,$=W;break e}else{a($,W);break}else r($,W);W=W.sibling}W=id(Z,$.mode,Te),W.return=$,$=W}return w($);case se:return tt=Z._init,Yt($,W,tt(Z._payload),Te)}if(Ye(Z))return Ve($,W,Z,Te);if(ue(Z))return Xe($,W,Z,Te);el($,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,W!==null&&W.tag===6?(a($,W.sibling),W=h(W,Z),W.return=$,$=W):(a($,W),W=nd(Z,$.mode,Te),W.return=$,$=W),w($)):a($,W)}return Yt}var Is=fp(!0),hp=fp(!1),tl=hr(null),nl=null,Os=null,fu=null;function hu(){fu=Os=nl=null}function pu(n){var r=tl.current;Ht(tl),n._currentValue=r}function mu(n,r,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===a)break;n=n.return}}function Fs(n,r){nl=n,fu=Os=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(On=!0),n.firstContext=null)}function Qn(n){var r=n._currentValue;if(fu!==n)if(n={context:n,memoizedValue:r,next:null},Os===null){if(nl===null)throw Error(t(308));Os=n,nl.dependencies={lanes:0,firstContext:n}}else Os=Os.next=n;return r}var Wr=null;function gu(n){Wr===null?Wr=[n]:Wr.push(n)}function pp(n,r,a,u){var h=r.interleaved;return h===null?(a.next=a,gu(r)):(a.next=h.next,h.next=a),r.interleaved=a,ki(n,u)}function ki(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var gr=!1;function vu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Bi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function vr(n,r,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Tt&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,ki(n,a)}return h=u.interleaved,h===null?(r.next=r,gu(u)):(r.next=h.next,h.next=r),u.interleaved=r,ki(n,a)}function il(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,cn(n,a)}}function gp(n,r){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?h=v=w:v=v.next=w,a=a.next}while(a!==null);v===null?h=v=r:v=v.next=r}else h=v=r;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function rl(n,r,a,u){var h=n.updateQueue;gr=!1;var v=h.firstBaseUpdate,w=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var B=U,ee=B.next;B.next=null,w===null?v=ee:w.next=ee,w=B;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,U=ye.lastBaseUpdate,U!==w&&(U===null?ye.firstBaseUpdate=ee:U.next=ee,ye.lastBaseUpdate=B))}if(v!==null){var Me=h.baseState;w=0,ye=ee=B=null,U=v;do{var xe=U.lane,Oe=U.eventTime;if((u&xe)===xe){ye!==null&&(ye=ye.next={eventTime:Oe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ve=n,Xe=U;switch(xe=r,Oe=a,Xe.tag){case 1:if(Ve=Xe.payload,typeof Ve=="function"){Me=Ve.call(Oe,Me,xe);break e}Me=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=Xe.payload,xe=typeof Ve=="function"?Ve.call(Oe,Me,xe):Ve,xe==null)break e;Me=oe({},Me,xe);break e;case 2:gr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,xe=h.effects,xe===null?h.effects=[U]:xe.push(U))}else Oe={eventTime:Oe,lane:xe,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ye===null?(ee=ye=Oe,B=Me):ye=ye.next=Oe,w|=xe;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;xe=U,U=xe.next,xe.next=null,h.lastBaseUpdate=xe,h.shared.pending=null}}while(!0);if(ye===null&&(B=Me),h.baseState=B,h.firstBaseUpdate=ee,h.lastBaseUpdate=ye,r=h.shared.interleaved,r!==null){h=r;do w|=h.lane,h=h.next;while(h!==r)}else v===null&&(h.shared.lanes=0);qr|=w,n.lanes=w,n.memoizedState=Me}}function vp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],h=u.callback;if(h!==null){if(u.callback=null,u=a,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Bo={},wi=hr(Bo),zo=hr(Bo),Ho=hr(Bo);function jr(n){if(n===Bo)throw Error(t(174));return n}function _u(n,r){switch(kt(Ho,r),kt(zo,n),kt(wi,Bo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:$e(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=$e(r,n)}Ht(wi),kt(wi,r)}function ks(){Ht(wi),Ht(zo),Ht(Ho)}function _p(n){jr(Ho.current);var r=jr(wi.current),a=$e(r,n.type);r!==a&&(kt(zo,n),kt(wi,a))}function xu(n){zo.current===n&&(Ht(wi),Ht(zo))}var Wt=hr(0);function sl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var yu=[];function Su(){for(var n=0;n<yu.length;n++)yu[n]._workInProgressVersionPrimary=null;yu.length=0}var ol=R.ReactCurrentDispatcher,Eu=R.ReactCurrentBatchConfig,Xr=0,jt=null,nn=null,un=null,al=!1,Vo=!1,Go=0,Fx=0;function yn(){throw Error(t(321))}function Mu(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!si(n[a],r[a]))return!1;return!0}function wu(n,r,a,u,h,v){if(Xr=v,jt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ol.current=n===null||n.memoizedState===null?Hx:Vx,n=a(u,h),Vo){v=0;do{if(Vo=!1,Go=0,25<=v)throw Error(t(301));v+=1,un=nn=null,r.updateQueue=null,ol.current=Gx,n=a(u,h)}while(Vo)}if(ol.current=ul,r=nn!==null&&nn.next!==null,Xr=0,un=nn=jt=null,al=!1,r)throw Error(t(300));return n}function bu(){var n=Go!==0;return Go=0,n}function bi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?jt.memoizedState=un=n:un=un.next=n,un}function ei(){if(nn===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var r=un===null?jt.memoizedState:un.next;if(r!==null)un=r,nn=n;else{if(n===null)throw Error(t(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},un===null?jt.memoizedState=un=n:un=un.next=n}return un}function Wo(n,r){return typeof r=="function"?r(n):r}function Tu(n){var r=ei(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=nn,h=u.baseQueue,v=a.pending;if(v!==null){if(h!==null){var w=h.next;h.next=v.next,v.next=w}u.baseQueue=h=v,a.pending=null}if(h!==null){v=h.next,u=u.baseState;var U=w=null,B=null,ee=v;do{var ye=ee.lane;if((Xr&ye)===ye)B!==null&&(B=B.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),u=ee.hasEagerState?ee.eagerState:n(u,ee.action);else{var Me={lane:ye,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};B===null?(U=B=Me,w=u):B=B.next=Me,jt.lanes|=ye,qr|=ye}ee=ee.next}while(ee!==null&&ee!==v);B===null?w=u:B.next=U,si(u,r.memoizedState)||(On=!0),r.memoizedState=u,r.baseState=w,r.baseQueue=B,a.lastRenderedState=u}if(n=a.interleaved,n!==null){h=n;do v=h.lane,jt.lanes|=v,qr|=v,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Au(n){var r=ei(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,h=a.pending,v=r.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do v=n(v,w.action),w=w.next;while(w!==h);si(v,r.memoizedState)||(On=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),a.lastRenderedState=v}return[v,u]}function xp(){}function yp(n,r){var a=jt,u=ei(),h=r(),v=!si(u.memoizedState,h);if(v&&(u.memoizedState=h,On=!0),u=u.queue,Cu(Mp.bind(null,a,u,n),[n]),u.getSnapshot!==r||v||un!==null&&un.memoizedState.tag&1){if(a.flags|=2048,jo(9,Ep.bind(null,a,u,h,r),void 0,null),dn===null)throw Error(t(349));(Xr&30)!==0||Sp(a,r,h)}return h}function Sp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=jt.updateQueue,r===null?(r={lastEffect:null,stores:null},jt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Ep(n,r,a,u){r.value=a,r.getSnapshot=u,wp(r)&&bp(n)}function Mp(n,r,a){return a(function(){wp(r)&&bp(n)})}function wp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!si(n,a)}catch{return!0}}function bp(n){var r=ki(n,1);r!==null&&ui(r,n,1,-1)}function Tp(n){var r=bi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:n},r.queue=n,n=n.dispatch=zx.bind(null,jt,n),[r.memoizedState,n]}function jo(n,r,a,u){return n={tag:n,create:r,destroy:a,deps:u,next:null},r=jt.updateQueue,r===null?(r={lastEffect:null,stores:null},jt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,r.lastEffect=n)),n}function Ap(){return ei().memoizedState}function ll(n,r,a,u){var h=bi();jt.flags|=n,h.memoizedState=jo(1|r,a,void 0,u===void 0?null:u)}function cl(n,r,a,u){var h=ei();u=u===void 0?null:u;var v=void 0;if(nn!==null){var w=nn.memoizedState;if(v=w.destroy,u!==null&&Mu(u,w.deps)){h.memoizedState=jo(r,a,v,u);return}}jt.flags|=n,h.memoizedState=jo(1|r,a,v,u)}function Cp(n,r){return ll(8390656,8,n,r)}function Cu(n,r){return cl(2048,8,n,r)}function Rp(n,r){return cl(4,2,n,r)}function Pp(n,r){return cl(4,4,n,r)}function Np(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Lp(n,r,a){return a=a!=null?a.concat([n]):null,cl(4,4,Np.bind(null,r,n),a)}function Ru(){}function Dp(n,r){var a=ei();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Mu(r,u[1])?u[0]:(a.memoizedState=[n,r],n)}function Up(n,r){var a=ei();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Mu(r,u[1])?u[0]:(n=n(),a.memoizedState=[n,r],n)}function Ip(n,r,a){return(Xr&21)===0?(n.baseState&&(n.baseState=!1,On=!0),n.memoizedState=a):(si(a,r)||(a=Ft(),jt.lanes|=a,qr|=a,n.baseState=!0),r)}function kx(n,r){var a=bt;bt=a!==0&&4>a?a:4,n(!0);var u=Eu.transition;Eu.transition={};try{n(!1),r()}finally{bt=a,Eu.transition=u}}function Op(){return ei().memoizedState}function Bx(n,r,a){var u=Sr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Fp(n))kp(r,a);else if(a=pp(n,r,a,u),a!==null){var h=Pn();ui(a,n,u,h),Bp(a,r,u)}}function zx(n,r,a){var u=Sr(n),h={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fp(n))kp(r,h);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var w=r.lastRenderedState,U=v(w,a);if(h.hasEagerState=!0,h.eagerState=U,si(U,w)){var B=r.interleaved;B===null?(h.next=h,gu(r)):(h.next=B.next,B.next=h),r.interleaved=h;return}}catch{}finally{}a=pp(n,r,h,u),a!==null&&(h=Pn(),ui(a,n,u,h),Bp(a,r,u))}}function Fp(n){var r=n.alternate;return n===jt||r!==null&&r===jt}function kp(n,r){Vo=al=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Bp(n,r,a){if((a&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,cn(n,a)}}var ul={readContext:Qn,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},Hx={readContext:Qn,useCallback:function(n,r){return bi().memoizedState=[n,r===void 0?null:r],n},useContext:Qn,useEffect:Cp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,ll(4194308,4,Np.bind(null,r,n),a)},useLayoutEffect:function(n,r){return ll(4194308,4,n,r)},useInsertionEffect:function(n,r){return ll(4,2,n,r)},useMemo:function(n,r){var a=bi();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var u=bi();return r=a!==void 0?a(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=Bx.bind(null,jt,n),[u.memoizedState,n]},useRef:function(n){var r=bi();return n={current:n},r.memoizedState=n},useState:Tp,useDebugValue:Ru,useDeferredValue:function(n){return bi().memoizedState=n},useTransition:function(){var n=Tp(!1),r=n[0];return n=kx.bind(null,n[1]),bi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var u=jt,h=bi();if(Gt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),dn===null)throw Error(t(349));(Xr&30)!==0||Sp(u,r,a)}h.memoizedState=a;var v={value:a,getSnapshot:r};return h.queue=v,Cp(Mp.bind(null,u,v,n),[n]),u.flags|=2048,jo(9,Ep.bind(null,u,v,a,r),void 0,null),a},useId:function(){var n=bi(),r=dn.identifierPrefix;if(Gt){var a=Fi,u=Oi;a=(u&~(1<<32-ut(u)-1)).toString(32)+a,r=":"+r+"R"+a,a=Go++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Fx++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Vx={readContext:Qn,useCallback:Dp,useContext:Qn,useEffect:Cu,useImperativeHandle:Lp,useInsertionEffect:Rp,useLayoutEffect:Pp,useMemo:Up,useReducer:Tu,useRef:Ap,useState:function(){return Tu(Wo)},useDebugValue:Ru,useDeferredValue:function(n){var r=ei();return Ip(r,nn.memoizedState,n)},useTransition:function(){var n=Tu(Wo)[0],r=ei().memoizedState;return[n,r]},useMutableSource:xp,useSyncExternalStore:yp,useId:Op,unstable_isNewReconciler:!1},Gx={readContext:Qn,useCallback:Dp,useContext:Qn,useEffect:Cu,useImperativeHandle:Lp,useInsertionEffect:Rp,useLayoutEffect:Pp,useMemo:Up,useReducer:Au,useRef:Ap,useState:function(){return Au(Wo)},useDebugValue:Ru,useDeferredValue:function(n){var r=ei();return nn===null?r.memoizedState=n:Ip(r,nn.memoizedState,n)},useTransition:function(){var n=Au(Wo)[0],r=ei().memoizedState;return[n,r]},useMutableSource:xp,useSyncExternalStore:yp,useId:Op,unstable_isNewReconciler:!1};function ai(n,r){if(n&&n.defaultProps){r=oe({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Pu(n,r,a,u){r=n.memoizedState,a=a(u,r),a=a==null?r:oe({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var dl={isMounted:function(n){return(n=n._reactInternals)?Si(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var u=Pn(),h=Sr(n),v=Bi(u,h);v.payload=r,a!=null&&(v.callback=a),r=vr(n,v,h),r!==null&&(ui(r,n,h,u),il(r,n,h))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var u=Pn(),h=Sr(n),v=Bi(u,h);v.tag=1,v.payload=r,a!=null&&(v.callback=a),r=vr(n,v,h),r!==null&&(ui(r,n,h,u),il(r,n,h))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Pn(),u=Sr(n),h=Bi(a,u);h.tag=2,r!=null&&(h.callback=r),r=vr(n,h,u),r!==null&&(ui(r,n,u,a),il(r,n,u))}};function zp(n,r,a,u,h,v,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,w):r.prototype&&r.prototype.isPureReactComponent?!No(a,u)||!No(h,v):!0}function Hp(n,r,a){var u=!1,h=pr,v=r.contextType;return typeof v=="object"&&v!==null?v=Qn(v):(h=In(r)?Hr:xn.current,u=r.contextTypes,v=(u=u!=null)?Ns(n,h):pr),r=new r(a,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=dl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=v),r}function Vp(n,r,a,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,u),r.state!==n&&dl.enqueueReplaceState(r,r.state,null)}function Nu(n,r,a,u){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},vu(n);var v=r.contextType;typeof v=="object"&&v!==null?h.context=Qn(v):(v=In(r)?Hr:xn.current,h.context=Ns(n,v)),h.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Pu(n,r,v,a),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&dl.enqueueReplaceState(h,h.state,null),rl(n,a,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Bs(n,r){try{var a="",u=r;do a+=pe(u),u=u.return;while(u);var h=a}catch(v){h=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:h,digest:null}}function Lu(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Du(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Wx=typeof WeakMap=="function"?WeakMap:Map;function Gp(n,r,a){a=Bi(-1,a),a.tag=3,a.payload={element:null};var u=r.value;return a.callback=function(){_l||(_l=!0,$u=u),Du(n,r)},a}function Wp(n,r,a){a=Bi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;a.payload=function(){return u(h)},a.callback=function(){Du(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Du(n,r),typeof u!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})}),a}function jp(n,r,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Wx;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(a)||(h.add(a),n=r0.bind(null,n,r,a),r.then(n,n))}function Xp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function qp(n,r,a,u,h){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Bi(-1,1),r.tag=2,vr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var jx=R.ReactCurrentOwner,On=!1;function Rn(n,r,a,u){r.child=n===null?hp(r,null,a,u):Is(r,n.child,a,u)}function $p(n,r,a,u,h){a=a.render;var v=r.ref;return Fs(r,h),u=wu(n,r,a,u,v,h),a=bu(),n!==null&&!On?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,zi(n,r,h)):(Gt&&a&&au(r),r.flags|=1,Rn(n,r,u,h),r.child)}function Yp(n,r,a,u,h){if(n===null){var v=a.type;return typeof v=="function"&&!td(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=v,Kp(n,r,v,u,h)):(n=wl(a.type,null,u,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&h)===0){var w=v.memoizedProps;if(a=a.compare,a=a!==null?a:No,a(w,u)&&n.ref===r.ref)return zi(n,r,h)}return r.flags|=1,n=Mr(v,u),n.ref=r.ref,n.return=r,r.child=n}function Kp(n,r,a,u,h){if(n!==null){var v=n.memoizedProps;if(No(v,u)&&n.ref===r.ref)if(On=!1,r.pendingProps=u=v,(n.lanes&h)!==0)(n.flags&131072)!==0&&(On=!0);else return r.lanes=n.lanes,zi(n,r,h)}return Uu(n,r,a,u,h)}function Zp(n,r,a){var u=r.pendingProps,h=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Hs,qn),qn|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,kt(Hs,qn),qn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:a,kt(Hs,qn),qn|=u}else v!==null?(u=v.baseLanes|a,r.memoizedState=null):u=a,kt(Hs,qn),qn|=u;return Rn(n,r,h,a),r.child}function Jp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Uu(n,r,a,u,h){var v=In(a)?Hr:xn.current;return v=Ns(r,v),Fs(r,h),a=wu(n,r,a,u,v,h),u=bu(),n!==null&&!On?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,zi(n,r,h)):(Gt&&u&&au(r),r.flags|=1,Rn(n,r,a,h),r.child)}function Qp(n,r,a,u,h){if(In(a)){var v=!0;Ya(r)}else v=!1;if(Fs(r,h),r.stateNode===null)hl(n,r),Hp(r,a,u),Nu(r,a,u,h),u=!0;else if(n===null){var w=r.stateNode,U=r.memoizedProps;w.props=U;var B=w.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=Qn(ee):(ee=In(a)?Hr:xn.current,ee=Ns(r,ee));var ye=a.getDerivedStateFromProps,Me=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function";Me||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==u||B!==ee)&&Vp(r,w,u,ee),gr=!1;var xe=r.memoizedState;w.state=xe,rl(r,u,w,h),B=r.memoizedState,U!==u||xe!==B||Un.current||gr?(typeof ye=="function"&&(Pu(r,a,ye,u),B=r.memoizedState),(U=gr||zp(r,a,U,u,xe,B,ee))?(Me||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(r.flags|=4194308)):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=B),w.props=u,w.state=B,w.context=ee,u=U):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{w=r.stateNode,mp(n,r),U=r.memoizedProps,ee=r.type===r.elementType?U:ai(r.type,U),w.props=ee,Me=r.pendingProps,xe=w.context,B=a.contextType,typeof B=="object"&&B!==null?B=Qn(B):(B=In(a)?Hr:xn.current,B=Ns(r,B));var Oe=a.getDerivedStateFromProps;(ye=typeof Oe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==Me||xe!==B)&&Vp(r,w,u,B),gr=!1,xe=r.memoizedState,w.state=xe,rl(r,u,w,h);var Ve=r.memoizedState;U!==Me||xe!==Ve||Un.current||gr?(typeof Oe=="function"&&(Pu(r,a,Oe,u),Ve=r.memoizedState),(ee=gr||zp(r,a,ee,u,xe,Ve,B)||!1)?(ye||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,Ve,B),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,Ve,B)),typeof w.componentDidUpdate=="function"&&(r.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Ve),w.props=u,w.state=Ve,w.context=B,u=ee):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(r.flags|=1024),u=!1)}return Iu(n,r,a,u,v,h)}function Iu(n,r,a,u,h,v){Jp(n,r);var w=(r.flags&128)!==0;if(!u&&!w)return h&&rp(r,a,!1),zi(n,r,v);u=r.stateNode,jx.current=r;var U=w&&typeof a.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&w?(r.child=Is(r,n.child,null,v),r.child=Is(r,null,U,v)):Rn(n,r,U,v),r.memoizedState=u.state,h&&rp(r,a,!0),r.child}function em(n){var r=n.stateNode;r.pendingContext?np(n,r.pendingContext,r.pendingContext!==r.context):r.context&&np(n,r.context,!1),_u(n,r.containerInfo)}function tm(n,r,a,u,h){return Us(),du(h),r.flags|=256,Rn(n,r,a,u),r.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function Fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function nm(n,r,a){var u=r.pendingProps,h=Wt.current,v=!1,w=(r.flags&128)!==0,U;if((U=w)||(U=n!==null&&n.memoizedState===null?!1:(h&2)!==0),U?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),kt(Wt,h&1),n===null)return uu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(w=u.children,n=u.fallback,v?(u=r.mode,v=r.child,w={mode:"hidden",children:w},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=w):v=bl(w,u,0,null),n=Zr(n,u,a,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Fu(a),r.memoizedState=Ou,n):ku(r,w));if(h=n.memoizedState,h!==null&&(U=h.dehydrated,U!==null))return Xx(n,r,w,u,U,h,a);if(v){v=u.fallback,w=r.mode,h=n.child,U=h.sibling;var B={mode:"hidden",children:u.children};return(w&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=B,r.deletions=null):(u=Mr(h,B),u.subtreeFlags=h.subtreeFlags&14680064),U!==null?v=Mr(U,v):(v=Zr(v,w,a,null),v.flags|=2),v.return=r,u.return=r,u.sibling=v,r.child=u,u=v,v=r.child,w=n.child.memoizedState,w=w===null?Fu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},v.memoizedState=w,v.childLanes=n.childLanes&~a,r.memoizedState=Ou,u}return v=n.child,n=v.sibling,u=Mr(v,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=a),u.return=r,u.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=u,r.memoizedState=null,u}function ku(n,r){return r=bl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function fl(n,r,a,u){return u!==null&&du(u),Is(r,n.child,null,a),n=ku(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Xx(n,r,a,u,h,v,w){if(a)return r.flags&256?(r.flags&=-257,u=Lu(Error(t(422))),fl(n,r,w,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=u.fallback,h=r.mode,u=bl({mode:"visible",children:u.children},h,0,null),v=Zr(v,h,w,null),v.flags|=2,u.return=r,v.return=r,u.sibling=v,r.child=u,(r.mode&1)!==0&&Is(r,n.child,null,w),r.child.memoizedState=Fu(w),r.memoizedState=Ou,v);if((r.mode&1)===0)return fl(n,r,w,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var U=u.dgst;return u=U,v=Error(t(419)),u=Lu(v,u,void 0),fl(n,r,w,u)}if(U=(w&n.childLanes)!==0,On||U){if(u=dn,u!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|w))!==0?0:h,h!==0&&h!==v.retryLane&&(v.retryLane=h,ki(n,h),ui(u,n,h,-1))}return ed(),u=Lu(Error(t(421))),fl(n,r,w,u)}return h.data==="$?"?(r.flags|=128,r.child=n.child,r=s0.bind(null,n),h._reactRetry=r,null):(n=v.treeContext,Xn=fr(h.nextSibling),jn=r,Gt=!0,oi=null,n!==null&&(Zn[Jn++]=Oi,Zn[Jn++]=Fi,Zn[Jn++]=Vr,Oi=n.id,Fi=n.overflow,Vr=r),r=ku(r,u.children),r.flags|=4096,r)}function im(n,r,a){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),mu(n.return,r,a)}function Bu(n,r,a,u,h){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=a,v.tailMode=h)}function rm(n,r,a){var u=r.pendingProps,h=u.revealOrder,v=u.tail;if(Rn(n,r,u.children,a),u=Wt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&im(n,a,r);else if(n.tag===19)im(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(kt(Wt,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(a=r.child,h=null;a!==null;)n=a.alternate,n!==null&&sl(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=r.child,r.child=null):(h=a.sibling,a.sibling=null),Bu(r,!1,h,a,v);break;case"backwards":for(a=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&sl(n)===null){r.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Bu(r,!0,a,null,v);break;case"together":Bu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function hl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function zi(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),qr|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Mr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Mr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function qx(n,r,a){switch(r.tag){case 3:em(r),Us();break;case 5:_p(r);break;case 1:In(r.type)&&Ya(r);break;case 4:_u(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;kt(tl,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(kt(Wt,Wt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?nm(n,r,a):(kt(Wt,Wt.current&1),n=zi(n,r,a),n!==null?n.sibling:null);kt(Wt,Wt.current&1);break;case 19:if(u=(a&r.childLanes)!==0,(n.flags&128)!==0){if(u)return rm(n,r,a);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),kt(Wt,Wt.current),u)break;return null;case 22:case 23:return r.lanes=0,Zp(n,r,a)}return zi(n,r,a)}var sm,zu,om,am;sm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},zu=function(){},om=function(n,r,a,u){var h=n.memoizedProps;if(h!==u){n=r.stateNode,jr(wi.current);var v=null;switch(a){case"input":h=H(n,h),u=H(n,u),v=[];break;case"select":h=oe({},h,{value:void 0}),u=oe({},u,{value:void 0}),v=[];break;case"textarea":h=b(n,h),u=b(n,u),v=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Xa)}vt(a,u);var w;a=null;for(ee in h)if(!u.hasOwnProperty(ee)&&h.hasOwnProperty(ee)&&h[ee]!=null)if(ee==="style"){var U=h[ee];for(w in U)U.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?v||(v=[]):(v=v||[]).push(ee,null));for(ee in u){var B=u[ee];if(U=h!=null?h[ee]:void 0,u.hasOwnProperty(ee)&&B!==U&&(B!=null||U!=null))if(ee==="style")if(U){for(w in U)!U.hasOwnProperty(w)||B&&B.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in B)B.hasOwnProperty(w)&&U[w]!==B[w]&&(a||(a={}),a[w]=B[w])}else a||(v||(v=[]),v.push(ee,a)),a=B;else ee==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(v=v||[]).push(ee,B)):ee==="children"?typeof B!="string"&&typeof B!="number"||(v=v||[]).push(ee,""+B):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(B!=null&&ee==="onScroll"&&zt("scroll",n),v||U===B||(v=[])):(v=v||[]).push(ee,B))}a&&(v=v||[]).push("style",a);var ee=v;(r.updateQueue=ee)&&(r.flags|=4)}},am=function(n,r,a,u){a!==u&&(r.flags|=4)};function Xo(n,r){if(!Gt)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Sn(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(r)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=a,r}function $x(n,r,a){var u=r.pendingProps;switch(lu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(r),null;case 1:return In(r.type)&&$a(),Sn(r),null;case 3:return u=r.stateNode,ks(),Ht(Un),Ht(xn),Su(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Qa(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,oi!==null&&(Zu(oi),oi=null))),zu(n,r),Sn(r),null;case 5:xu(r);var h=jr(Ho.current);if(a=r.type,n!==null&&r.stateNode!=null)om(n,r,a,u,h),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Sn(r),null}if(n=jr(wi.current),Qa(r)){u=r.stateNode,a=r.type;var v=r.memoizedProps;switch(u[Mi]=r,u[Oo]=v,n=(r.mode&1)!==0,a){case"dialog":zt("cancel",u),zt("close",u);break;case"iframe":case"object":case"embed":zt("load",u);break;case"video":case"audio":for(h=0;h<Do.length;h++)zt(Do[h],u);break;case"source":zt("error",u);break;case"img":case"image":case"link":zt("error",u),zt("load",u);break;case"details":zt("toggle",u);break;case"input":Tn(u,v),zt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},zt("invalid",u);break;case"textarea":J(u,v),zt("invalid",u)}vt(a,v),h=null;for(var w in v)if(v.hasOwnProperty(w)){var U=v[w];w==="children"?typeof U=="string"?u.textContent!==U&&(v.suppressHydrationWarning!==!0&&ja(u.textContent,U,n),h=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(v.suppressHydrationWarning!==!0&&ja(u.textContent,U,n),h=["children",""+U]):o.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&zt("scroll",u)}switch(a){case"input":Pt(u),Ze(u,v,!0);break;case"textarea":Pt(u),Se(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=Xa)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(a,{is:u.is}):(n=w.createElement(a),a==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,a),n[Mi]=r,n[Oo]=u,sm(n,r,!1,!1),r.stateNode=n;e:{switch(w=lt(a,u),a){case"dialog":zt("cancel",n),zt("close",n),h=u;break;case"iframe":case"object":case"embed":zt("load",n),h=u;break;case"video":case"audio":for(h=0;h<Do.length;h++)zt(Do[h],n);h=u;break;case"source":zt("error",n),h=u;break;case"img":case"image":case"link":zt("error",n),zt("load",n),h=u;break;case"details":zt("toggle",n),h=u;break;case"input":Tn(n,u),h=H(n,u),zt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=oe({},u,{value:void 0}),zt("invalid",n);break;case"textarea":J(n,u),h=b(n,u),zt("invalid",n);break;default:h=u}vt(a,h),U=h;for(v in U)if(U.hasOwnProperty(v)){var B=U[v];v==="style"?st(n,B):v==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&et(n,B)):v==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&Qe(n,B):typeof B=="number"&&Qe(n,""+B):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?B!=null&&v==="onScroll"&&zt("scroll",n):B!=null&&N(n,v,B,w))}switch(a){case"input":Pt(n),Ze(n,u,!1);break;case"textarea":Pt(n),Se(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ce(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?L(n,!!u.multiple,v,!1):u.defaultValue!=null&&L(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Xa)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Sn(r),null;case 6:if(n&&r.stateNode!=null)am(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(a=jr(Ho.current),jr(wi.current),Qa(r)){if(u=r.stateNode,a=r.memoizedProps,u[Mi]=r,(v=u.nodeValue!==a)&&(n=jn,n!==null))switch(n.tag){case 3:ja(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ja(u.nodeValue,a,(n.mode&1)!==0)}v&&(r.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Mi]=r,r.stateNode=u}return Sn(r),null;case 13:if(Ht(Wt),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Gt&&Xn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)up(),Us(),r.flags|=98560,v=!1;else if(v=Qa(r),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Mi]=r}else Us(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Sn(r),v=!1}else oi!==null&&(Zu(oi),oi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Wt.current&1)!==0?rn===0&&(rn=3):ed())),r.updateQueue!==null&&(r.flags|=4),Sn(r),null);case 4:return ks(),zu(n,r),n===null&&Uo(r.stateNode.containerInfo),Sn(r),null;case 10:return pu(r.type._context),Sn(r),null;case 17:return In(r.type)&&$a(),Sn(r),null;case 19:if(Ht(Wt),v=r.memoizedState,v===null)return Sn(r),null;if(u=(r.flags&128)!==0,w=v.rendering,w===null)if(u)Xo(v,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(w=sl(n),w!==null){for(r.flags|=128,Xo(v,!1),u=w.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=a,a=r.child;a!==null;)v=a,n=u,v.flags&=14680066,w=v.alternate,w===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=w.childLanes,v.lanes=w.lanes,v.child=w.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=w.memoizedProps,v.memoizedState=w.memoizedState,v.updateQueue=w.updateQueue,v.type=w.type,n=w.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt(Wt,Wt.current&1|2),r.child}n=n.sibling}v.tail!==null&&K()>Vs&&(r.flags|=128,u=!0,Xo(v,!1),r.lanes=4194304)}else{if(!u)if(n=sl(w),n!==null){if(r.flags|=128,u=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Xo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!w.alternate&&!Gt)return Sn(r),null}else 2*K()-v.renderingStartTime>Vs&&a!==1073741824&&(r.flags|=128,u=!0,Xo(v,!1),r.lanes=4194304);v.isBackwards?(w.sibling=r.child,r.child=w):(a=v.last,a!==null?a.sibling=w:r.child=w,v.last=w)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=K(),r.sibling=null,a=Wt.current,kt(Wt,u?a&1|2:a&1),r):(Sn(r),null);case 22:case 23:return Qu(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(qn&1073741824)!==0&&(Sn(r),r.subtreeFlags&6&&(r.flags|=8192)):Sn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Yx(n,r){switch(lu(r),r.tag){case 1:return In(r.type)&&$a(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ks(),Ht(Un),Ht(xn),Su(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return xu(r),null;case 13:if(Ht(Wt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Us()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ht(Wt),null;case 4:return ks(),null;case 10:return pu(r.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var pl=!1,En=!1,Kx=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function zs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){$t(n,r,u)}else a.current=null}function Hu(n,r,a){try{a()}catch(u){$t(n,r,u)}}var lm=!1;function Zx(n,r){if(Qc=Ua,n=zh(),jc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var w=0,U=-1,B=-1,ee=0,ye=0,Me=n,xe=null;t:for(;;){for(var Oe;Me!==a||h!==0&&Me.nodeType!==3||(U=w+h),Me!==v||u!==0&&Me.nodeType!==3||(B=w+u),Me.nodeType===3&&(w+=Me.nodeValue.length),(Oe=Me.firstChild)!==null;)xe=Me,Me=Oe;for(;;){if(Me===n)break t;if(xe===a&&++ee===h&&(U=w),xe===v&&++ye===u&&(B=w),(Oe=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=Oe}a=U===-1||B===-1?null:{start:U,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(eu={focusedElem:n,selectionRange:a},Ua=!1,Fe=r;Fe!==null;)if(r=Fe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Fe=n;else for(;Fe!==null;){r=Fe;try{var Ve=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var Xe=Ve.memoizedProps,Yt=Ve.memoizedState,$=r.stateNode,W=$.getSnapshotBeforeUpdate(r.elementType===r.type?Xe:ai(r.type,Xe),Yt);$.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var Z=r.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){$t(r,r.return,Te)}if(n=r.sibling,n!==null){n.return=r.return,Fe=n;break}Fe=r.return}return Ve=lm,lm=!1,Ve}function qo(n,r,a){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var v=h.destroy;h.destroy=void 0,v!==void 0&&Hu(r,a,v)}h=h.next}while(h!==u)}}function ml(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==r)}}function Vu(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function cm(n){var r=n.alternate;r!==null&&(n.alternate=null,cm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Mi],delete r[Oo],delete r[ru],delete r[Dx],delete r[Ux])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function um(n){return n.tag===5||n.tag===3||n.tag===4}function dm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||um(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gu(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Xa));else if(u!==4&&(n=n.child,n!==null))for(Gu(n,r,a),n=n.sibling;n!==null;)Gu(n,r,a),n=n.sibling}function Wu(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Wu(n,r,a),n=n.sibling;n!==null;)Wu(n,r,a),n=n.sibling}var mn=null,li=!1;function _r(n,r,a){for(a=a.child;a!==null;)fm(n,r,a),a=a.sibling}function fm(n,r,a){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(it,a)}catch{}switch(a.tag){case 5:En||zs(a,r);case 6:var u=mn,h=li;mn=null,_r(n,r,a),mn=u,li=h,mn!==null&&(li?(n=mn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):mn.removeChild(a.stateNode));break;case 18:mn!==null&&(li?(n=mn,a=a.stateNode,n.nodeType===8?iu(n.parentNode,a):n.nodeType===1&&iu(n,a),bo(n)):iu(mn,a.stateNode));break;case 4:u=mn,h=li,mn=a.stateNode.containerInfo,li=!0,_r(n,r,a),mn=u,li=h;break;case 0:case 11:case 14:case 15:if(!En&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var v=h,w=v.destroy;v=v.tag,w!==void 0&&((v&2)!==0||(v&4)!==0)&&Hu(a,r,w),h=h.next}while(h!==u)}_r(n,r,a);break;case 1:if(!En&&(zs(a,r),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(U){$t(a,r,U)}_r(n,r,a);break;case 21:_r(n,r,a);break;case 22:a.mode&1?(En=(u=En)||a.memoizedState!==null,_r(n,r,a),En=u):_r(n,r,a);break;default:_r(n,r,a)}}function hm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Kx),r.forEach(function(u){var h=o0.bind(null,n,u);a.has(u)||(a.add(u),u.then(h,h))})}}function ci(n,r){var a=r.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u];try{var v=n,w=r,U=w;e:for(;U!==null;){switch(U.tag){case 5:mn=U.stateNode,li=!1;break e;case 3:mn=U.stateNode.containerInfo,li=!0;break e;case 4:mn=U.stateNode.containerInfo,li=!0;break e}U=U.return}if(mn===null)throw Error(t(160));fm(v,w,h),mn=null,li=!1;var B=h.alternate;B!==null&&(B.return=null),h.return=null}catch(ee){$t(h,r,ee)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)pm(r,n),r=r.sibling}function pm(n,r){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(r,n),Ti(n),u&4){try{qo(3,n,n.return),ml(3,n)}catch(Xe){$t(n,n.return,Xe)}try{qo(5,n,n.return)}catch(Xe){$t(n,n.return,Xe)}}break;case 1:ci(r,n),Ti(n),u&512&&a!==null&&zs(a,a.return);break;case 5:if(ci(r,n),Ti(n),u&512&&a!==null&&zs(a,a.return),n.flags&32){var h=n.stateNode;try{Qe(h,"")}catch(Xe){$t(n,n.return,Xe)}}if(u&4&&(h=n.stateNode,h!=null)){var v=n.memoizedProps,w=a!==null?a.memoizedProps:v,U=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{U==="input"&&v.type==="radio"&&v.name!=null&&xt(h,v),lt(U,w);var ee=lt(U,v);for(w=0;w<B.length;w+=2){var ye=B[w],Me=B[w+1];ye==="style"?st(h,Me):ye==="dangerouslySetInnerHTML"?et(h,Me):ye==="children"?Qe(h,Me):N(h,ye,Me,ee)}switch(U){case"input":gt(h,v);break;case"textarea":ge(h,v);break;case"select":var xe=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!v.multiple;var Oe=v.value;Oe!=null?L(h,!!v.multiple,Oe,!1):xe!==!!v.multiple&&(v.defaultValue!=null?L(h,!!v.multiple,v.defaultValue,!0):L(h,!!v.multiple,v.multiple?[]:"",!1))}h[Oo]=v}catch(Xe){$t(n,n.return,Xe)}}break;case 6:if(ci(r,n),Ti(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,v=n.memoizedProps;try{h.nodeValue=v}catch(Xe){$t(n,n.return,Xe)}}break;case 3:if(ci(r,n),Ti(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{bo(r.containerInfo)}catch(Xe){$t(n,n.return,Xe)}break;case 4:ci(r,n),Ti(n);break;case 13:ci(r,n),Ti(n),h=n.child,h.flags&8192&&(v=h.memoizedState!==null,h.stateNode.isHidden=v,!v||h.alternate!==null&&h.alternate.memoizedState!==null||(qu=K())),u&4&&hm(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(En=(ee=En)||ye,ci(r,n),En=ee):ci(r,n),Ti(n),u&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!ye&&(n.mode&1)!==0)for(Fe=n,ye=n.child;ye!==null;){for(Me=Fe=ye;Fe!==null;){switch(xe=Fe,Oe=xe.child,xe.tag){case 0:case 11:case 14:case 15:qo(4,xe,xe.return);break;case 1:zs(xe,xe.return);var Ve=xe.stateNode;if(typeof Ve.componentWillUnmount=="function"){u=xe,a=xe.return;try{r=u,Ve.props=r.memoizedProps,Ve.state=r.memoizedState,Ve.componentWillUnmount()}catch(Xe){$t(u,a,Xe)}}break;case 5:zs(xe,xe.return);break;case 22:if(xe.memoizedState!==null){vm(Me);continue}}Oe!==null?(Oe.return=xe,Fe=Oe):vm(Me)}ye=ye.sibling}e:for(ye=null,Me=n;;){if(Me.tag===5){if(ye===null){ye=Me;try{h=Me.stateNode,ee?(v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(U=Me.stateNode,B=Me.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=rt("display",w))}catch(Xe){$t(n,n.return,Xe)}}}else if(Me.tag===6){if(ye===null)try{Me.stateNode.nodeValue=ee?"":Me.memoizedProps}catch(Xe){$t(n,n.return,Xe)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;ye===Me&&(ye=null),Me=Me.return}ye===Me&&(ye=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:ci(r,n),Ti(n),u&4&&hm(n);break;case 21:break;default:ci(r,n),Ti(n)}}function Ti(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(um(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Qe(h,""),u.flags&=-33);var v=dm(n);Wu(n,v,h);break;case 3:case 4:var w=u.stateNode.containerInfo,U=dm(n);Gu(n,U,w);break;default:throw Error(t(161))}}catch(B){$t(n,n.return,B)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Jx(n,r,a){Fe=n,mm(n)}function mm(n,r,a){for(var u=(n.mode&1)!==0;Fe!==null;){var h=Fe,v=h.child;if(h.tag===22&&u){var w=h.memoizedState!==null||pl;if(!w){var U=h.alternate,B=U!==null&&U.memoizedState!==null||En;U=pl;var ee=En;if(pl=w,(En=B)&&!ee)for(Fe=h;Fe!==null;)w=Fe,B=w.child,w.tag===22&&w.memoizedState!==null?_m(h):B!==null?(B.return=w,Fe=B):_m(h);for(;v!==null;)Fe=v,mm(v),v=v.sibling;Fe=h,pl=U,En=ee}gm(n)}else(h.subtreeFlags&8772)!==0&&v!==null?(v.return=h,Fe=v):gm(n)}}function gm(n){for(;Fe!==null;){var r=Fe;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:En||ml(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!En)if(a===null)u.componentDidMount();else{var h=r.elementType===r.type?a.memoizedProps:ai(r.type,a.memoizedProps);u.componentDidUpdate(h,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&vp(r,v,u);break;case 3:var w=r.updateQueue;if(w!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}vp(r,w,a)}break;case 5:var U=r.stateNode;if(a===null&&r.flags&4){a=U;var B=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ee=r.alternate;if(ee!==null){var ye=ee.memoizedState;if(ye!==null){var Me=ye.dehydrated;Me!==null&&bo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}En||r.flags&512&&Vu(r)}catch(xe){$t(r,r.return,xe)}}if(r===n){Fe=null;break}if(a=r.sibling,a!==null){a.return=r.return,Fe=a;break}Fe=r.return}}function vm(n){for(;Fe!==null;){var r=Fe;if(r===n){Fe=null;break}var a=r.sibling;if(a!==null){a.return=r.return,Fe=a;break}Fe=r.return}}function _m(n){for(;Fe!==null;){var r=Fe;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{ml(4,r)}catch(B){$t(r,a,B)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(B){$t(r,h,B)}}var v=r.return;try{Vu(r)}catch(B){$t(r,v,B)}break;case 5:var w=r.return;try{Vu(r)}catch(B){$t(r,w,B)}}}catch(B){$t(r,r.return,B)}if(r===n){Fe=null;break}var U=r.sibling;if(U!==null){U.return=r.return,Fe=U;break}Fe=r.return}}var Qx=Math.ceil,gl=R.ReactCurrentDispatcher,ju=R.ReactCurrentOwner,ti=R.ReactCurrentBatchConfig,Tt=0,dn=null,Zt=null,gn=0,qn=0,Hs=hr(0),rn=0,$o=null,qr=0,vl=0,Xu=0,Yo=null,Fn=null,qu=0,Vs=1/0,Hi=null,_l=!1,$u=null,xr=null,xl=!1,yr=null,yl=0,Ko=0,Yu=null,Sl=-1,El=0;function Pn(){return(Tt&6)!==0?K():Sl!==-1?Sl:Sl=K()}function Sr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&gn!==0?gn&-gn:Ox.transition!==null?(El===0&&(El=Ft()),El):(n=bt,n!==0||(n=window.event,n=n===void 0?16:yh(n.type)),n)}function ui(n,r,a,u){if(50<Ko)throw Ko=0,Yu=null,Error(t(185));ln(n,a,u),((Tt&2)===0||n!==dn)&&(n===dn&&((Tt&2)===0&&(vl|=a),rn===4&&Er(n,gn)),kn(n,u),a===1&&Tt===0&&(r.mode&1)===0&&(Vs=K()+500,Ka&&mr()))}function kn(n,r){var a=n.callbackNode;Cn(n,r);var u=vn(n,n===dn?gn:0);if(u===0)a!==null&&A(a),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(a!=null&&A(a),r===1)n.tag===0?Ix(ym.bind(null,n)):sp(ym.bind(null,n)),Nx(function(){(Tt&6)===0&&mr()}),a=null;else{switch(Ei(u)){case 1:a=be;break;case 4:a=Ne;break;case 16:a=Ie;break;case 536870912:a=ot;break;default:a=Ie}a=Cm(a,xm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function xm(n,r){if(Sl=-1,El=0,(Tt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Gs()&&n.callbackNode!==a)return null;var u=vn(n,n===dn?gn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Ml(n,u);else{r=u;var h=Tt;Tt|=2;var v=Em();(dn!==n||gn!==r)&&(Hi=null,Vs=K()+500,Yr(n,r));do try{n0();break}catch(U){Sm(n,U)}while(!0);hu(),gl.current=v,Tt=h,Zt!==null?r=0:(dn=null,gn=0,r=rn)}if(r!==0){if(r===2&&(h=Di(n),h!==0&&(u=h,r=Ku(n,h))),r===1)throw a=$o,Yr(n,0),Er(n,u),kn(n,K()),a;if(r===6)Er(n,u);else{if(h=n.current.alternate,(u&30)===0&&!e0(h)&&(r=Ml(n,u),r===2&&(v=Di(n),v!==0&&(u=v,r=Ku(n,v))),r===1))throw a=$o,Yr(n,0),Er(n,u),kn(n,K()),a;switch(n.finishedWork=h,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Kr(n,Fn,Hi);break;case 3:if(Er(n,u),(u&130023424)===u&&(r=qu+500-K(),10<r)){if(vn(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){Pn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=nu(Kr.bind(null,n,Fn,Hi),r);break}Kr(n,Fn,Hi);break;case 4:if(Er(n,u),(u&4194240)===u)break;for(r=n.eventTimes,h=-1;0<u;){var w=31-ut(u);v=1<<w,w=r[w],w>h&&(h=w),u&=~v}if(u=h,u=K()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Qx(u/1960))-u,10<u){n.timeoutHandle=nu(Kr.bind(null,n,Fn,Hi),u);break}Kr(n,Fn,Hi);break;case 5:Kr(n,Fn,Hi);break;default:throw Error(t(329))}}}return kn(n,K()),n.callbackNode===a?xm.bind(null,n):null}function Ku(n,r){var a=Yo;return n.current.memoizedState.isDehydrated&&(Yr(n,r).flags|=256),n=Ml(n,r),n!==2&&(r=Fn,Fn=a,r!==null&&Zu(r)),n}function Zu(n){Fn===null?Fn=n:Fn.push.apply(Fn,n)}function e0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var h=a[u],v=h.getSnapshot;h=h.value;try{if(!si(v(),h))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Er(n,r){for(r&=~Xu,r&=~vl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-ut(r),u=1<<a;n[a]=-1,r&=~u}}function ym(n){if((Tt&6)!==0)throw Error(t(327));Gs();var r=vn(n,0);if((r&1)===0)return kn(n,K()),null;var a=Ml(n,r);if(n.tag!==0&&a===2){var u=Di(n);u!==0&&(r=u,a=Ku(n,u))}if(a===1)throw a=$o,Yr(n,0),Er(n,r),kn(n,K()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Kr(n,Fn,Hi),kn(n,K()),null}function Ju(n,r){var a=Tt;Tt|=1;try{return n(r)}finally{Tt=a,Tt===0&&(Vs=K()+500,Ka&&mr())}}function $r(n){yr!==null&&yr.tag===0&&(Tt&6)===0&&Gs();var r=Tt;Tt|=1;var a=ti.transition,u=bt;try{if(ti.transition=null,bt=1,n)return n()}finally{bt=u,ti.transition=a,Tt=r,(Tt&6)===0&&mr()}}function Qu(){qn=Hs.current,Ht(Hs)}function Yr(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Px(a)),Zt!==null)for(a=Zt.return;a!==null;){var u=a;switch(lu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&$a();break;case 3:ks(),Ht(Un),Ht(xn),Su();break;case 5:xu(u);break;case 4:ks();break;case 13:Ht(Wt);break;case 19:Ht(Wt);break;case 10:pu(u.type._context);break;case 22:case 23:Qu()}a=a.return}if(dn=n,Zt=n=Mr(n.current,null),gn=qn=r,rn=0,$o=null,Xu=vl=qr=0,Fn=Yo=null,Wr!==null){for(r=0;r<Wr.length;r++)if(a=Wr[r],u=a.interleaved,u!==null){a.interleaved=null;var h=u.next,v=a.pending;if(v!==null){var w=v.next;v.next=h,u.next=w}a.pending=u}Wr=null}return n}function Sm(n,r){do{var a=Zt;try{if(hu(),ol.current=ul,al){for(var u=jt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}al=!1}if(Xr=0,un=nn=jt=null,Vo=!1,Go=0,ju.current=null,a===null||a.return===null){rn=1,$o=r,Zt=null;break}e:{var v=n,w=a.return,U=a,B=r;if(r=gn,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ee=B,ye=U,Me=ye.tag;if((ye.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Oe=Xp(w);if(Oe!==null){Oe.flags&=-257,qp(Oe,w,U,v,r),Oe.mode&1&&jp(v,ee,r),r=Oe,B=ee;var Ve=r.updateQueue;if(Ve===null){var Xe=new Set;Xe.add(B),r.updateQueue=Xe}else Ve.add(B);break e}else{if((r&1)===0){jp(v,ee,r),ed();break e}B=Error(t(426))}}else if(Gt&&U.mode&1){var Yt=Xp(w);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),qp(Yt,w,U,v,r),du(Bs(B,U));break e}}v=B=Bs(B,U),rn!==4&&(rn=2),Yo===null?Yo=[v]:Yo.push(v),v=w;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var $=Gp(v,B,r);gp(v,$);break e;case 1:U=B;var W=v.type,Z=v.stateNode;if((v.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(xr===null||!xr.has(Z)))){v.flags|=65536,r&=-r,v.lanes|=r;var Te=Wp(v,U,r);gp(v,Te);break e}}v=v.return}while(v!==null)}wm(a)}catch(Ke){r=Ke,Zt===a&&a!==null&&(Zt=a=a.return);continue}break}while(!0)}function Em(){var n=gl.current;return gl.current=ul,n===null?ul:n}function ed(){(rn===0||rn===3||rn===2)&&(rn=4),dn===null||(qr&268435455)===0&&(vl&268435455)===0||Er(dn,gn)}function Ml(n,r){var a=Tt;Tt|=2;var u=Em();(dn!==n||gn!==r)&&(Hi=null,Yr(n,r));do try{t0();break}catch(h){Sm(n,h)}while(!0);if(hu(),Tt=a,gl.current=u,Zt!==null)throw Error(t(261));return dn=null,gn=0,rn}function t0(){for(;Zt!==null;)Mm(Zt)}function n0(){for(;Zt!==null&&!X();)Mm(Zt)}function Mm(n){var r=Am(n.alternate,n,qn);n.memoizedProps=n.pendingProps,r===null?wm(n):Zt=r,ju.current=null}function wm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=$x(a,r,qn),a!==null){Zt=a;return}}else{if(a=Yx(a,r),a!==null){a.flags&=32767,Zt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,Zt=null;return}}if(r=r.sibling,r!==null){Zt=r;return}Zt=r=n}while(r!==null);rn===0&&(rn=5)}function Kr(n,r,a){var u=bt,h=ti.transition;try{ti.transition=null,bt=1,i0(n,r,a,u)}finally{ti.transition=h,bt=u}return null}function i0(n,r,a,u){do Gs();while(yr!==null);if((Tt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(pn(n,v),n===dn&&(Zt=dn=null,gn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||xl||(xl=!0,Cm(Ie,function(){return Gs(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=ti.transition,ti.transition=null;var w=bt;bt=1;var U=Tt;Tt|=4,ju.current=null,Zx(n,a),pm(a,n),Mx(eu),Ua=!!Qc,eu=Qc=null,n.current=a,Jx(a),te(),Tt=U,bt=w,ti.transition=v}else n.current=a;if(xl&&(xl=!1,yr=n,yl=h),v=n.pendingLanes,v===0&&(xr=null),St(a.stateNode),kn(n,K()),r!==null)for(u=n.onRecoverableError,a=0;a<r.length;a++)h=r[a],u(h.value,{componentStack:h.stack,digest:h.digest});if(_l)throw _l=!1,n=$u,$u=null,n;return(yl&1)!==0&&n.tag!==0&&Gs(),v=n.pendingLanes,(v&1)!==0?n===Yu?Ko++:(Ko=0,Yu=n):Ko=0,mr(),null}function Gs(){if(yr!==null){var n=Ei(yl),r=ti.transition,a=bt;try{if(ti.transition=null,bt=16>n?16:n,yr===null)var u=!1;else{if(n=yr,yr=null,yl=0,(Tt&6)!==0)throw Error(t(331));var h=Tt;for(Tt|=4,Fe=n.current;Fe!==null;){var v=Fe,w=v.child;if((Fe.flags&16)!==0){var U=v.deletions;if(U!==null){for(var B=0;B<U.length;B++){var ee=U[B];for(Fe=ee;Fe!==null;){var ye=Fe;switch(ye.tag){case 0:case 11:case 15:qo(8,ye,v)}var Me=ye.child;if(Me!==null)Me.return=ye,Fe=Me;else for(;Fe!==null;){ye=Fe;var xe=ye.sibling,Oe=ye.return;if(cm(ye),ye===ee){Fe=null;break}if(xe!==null){xe.return=Oe,Fe=xe;break}Fe=Oe}}}var Ve=v.alternate;if(Ve!==null){var Xe=Ve.child;if(Xe!==null){Ve.child=null;do{var Yt=Xe.sibling;Xe.sibling=null,Xe=Yt}while(Xe!==null)}}Fe=v}}if((v.subtreeFlags&2064)!==0&&w!==null)w.return=v,Fe=w;else e:for(;Fe!==null;){if(v=Fe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:qo(9,v,v.return)}var $=v.sibling;if($!==null){$.return=v.return,Fe=$;break e}Fe=v.return}}var W=n.current;for(Fe=W;Fe!==null;){w=Fe;var Z=w.child;if((w.subtreeFlags&2064)!==0&&Z!==null)Z.return=w,Fe=Z;else e:for(w=W;Fe!==null;){if(U=Fe,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:ml(9,U)}}catch(Ke){$t(U,U.return,Ke)}if(U===w){Fe=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,Fe=Te;break e}Fe=U.return}}if(Tt=h,mr(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(it,n)}catch{}u=!0}return u}finally{bt=a,ti.transition=r}}return!1}function bm(n,r,a){r=Bs(a,r),r=Gp(n,r,1),n=vr(n,r,1),r=Pn(),n!==null&&(ln(n,1,r),kn(n,r))}function $t(n,r,a){if(n.tag===3)bm(n,n,a);else for(;r!==null;){if(r.tag===3){bm(r,n,a);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(xr===null||!xr.has(u))){n=Bs(a,n),n=Wp(r,n,1),r=vr(r,n,1),n=Pn(),r!==null&&(ln(r,1,n),kn(r,n));break}}r=r.return}}function r0(n,r,a){var u=n.pingCache;u!==null&&u.delete(r),r=Pn(),n.pingedLanes|=n.suspendedLanes&a,dn===n&&(gn&a)===a&&(rn===4||rn===3&&(gn&130023424)===gn&&500>K()-qu?Yr(n,0):Xu|=a),kn(n,r)}function Tm(n,r){r===0&&((n.mode&1)===0?r=1:(r=qt,qt<<=1,(qt&130023424)===0&&(qt=4194304)));var a=Pn();n=ki(n,r),n!==null&&(ln(n,r,a),kn(n,a))}function s0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Tm(n,a)}function o0(n,r){var a=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Tm(n,a)}var Am;Am=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Un.current)On=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return On=!1,qx(n,r,a);On=(n.flags&131072)!==0}else On=!1,Gt&&(r.flags&1048576)!==0&&op(r,Ja,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;hl(n,r),n=r.pendingProps;var h=Ns(r,xn.current);Fs(r,a),h=wu(null,r,u,n,h,a);var v=bu();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,In(u)?(v=!0,Ya(r)):v=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,vu(r),h.updater=dl,r.stateNode=h,h._reactInternals=r,Nu(r,u,n,a),r=Iu(null,r,u,!0,v,a)):(r.tag=0,Gt&&v&&au(r),Rn(null,r,h,a),r=r.child),r;case 16:u=r.elementType;e:{switch(hl(n,r),n=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=l0(u),n=ai(u,n),h){case 0:r=Uu(null,r,u,n,a);break e;case 1:r=Qp(null,r,u,n,a);break e;case 11:r=$p(null,r,u,n,a);break e;case 14:r=Yp(null,r,u,ai(u.type,n),a);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ai(u,h),Uu(n,r,u,h,a);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ai(u,h),Qp(n,r,u,h,a);case 3:e:{if(em(r),n===null)throw Error(t(387));u=r.pendingProps,v=r.memoizedState,h=v.element,mp(n,r),rl(r,u,null,a);var w=r.memoizedState;if(u=w.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){h=Bs(Error(t(423)),r),r=tm(n,r,u,a,h);break e}else if(u!==h){h=Bs(Error(t(424)),r),r=tm(n,r,u,a,h);break e}else for(Xn=fr(r.stateNode.containerInfo.firstChild),jn=r,Gt=!0,oi=null,a=hp(r,null,u,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Us(),u===h){r=zi(n,r,a);break e}Rn(n,r,u,a)}r=r.child}return r;case 5:return _p(r),n===null&&uu(r),u=r.type,h=r.pendingProps,v=n!==null?n.memoizedProps:null,w=h.children,tu(u,h)?w=null:v!==null&&tu(u,v)&&(r.flags|=32),Jp(n,r),Rn(n,r,w,a),r.child;case 6:return n===null&&uu(r),null;case 13:return nm(n,r,a);case 4:return _u(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Is(r,null,u,a):Rn(n,r,u,a),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ai(u,h),$p(n,r,u,h,a);case 7:return Rn(n,r,r.pendingProps,a),r.child;case 8:return Rn(n,r,r.pendingProps.children,a),r.child;case 12:return Rn(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,v=r.memoizedProps,w=h.value,kt(tl,u._currentValue),u._currentValue=w,v!==null)if(si(v.value,w)){if(v.children===h.children&&!Un.current){r=zi(n,r,a);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var U=v.dependencies;if(U!==null){w=v.child;for(var B=U.firstContext;B!==null;){if(B.context===u){if(v.tag===1){B=Bi(-1,a&-a),B.tag=2;var ee=v.updateQueue;if(ee!==null){ee=ee.shared;var ye=ee.pending;ye===null?B.next=B:(B.next=ye.next,ye.next=B),ee.pending=B}}v.lanes|=a,B=v.alternate,B!==null&&(B.lanes|=a),mu(v.return,a,r),U.lanes|=a;break}B=B.next}}else if(v.tag===10)w=v.type===r.type?null:v.child;else if(v.tag===18){if(w=v.return,w===null)throw Error(t(341));w.lanes|=a,U=w.alternate,U!==null&&(U.lanes|=a),mu(w,a,r),w=v.sibling}else w=v.child;if(w!==null)w.return=v;else for(w=v;w!==null;){if(w===r){w=null;break}if(v=w.sibling,v!==null){v.return=w.return,w=v;break}w=w.return}v=w}Rn(n,r,h.children,a),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,Fs(r,a),h=Qn(h),u=u(h),r.flags|=1,Rn(n,r,u,a),r.child;case 14:return u=r.type,h=ai(u,r.pendingProps),h=ai(u.type,h),Yp(n,r,u,h,a);case 15:return Kp(n,r,r.type,r.pendingProps,a);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ai(u,h),hl(n,r),r.tag=1,In(u)?(n=!0,Ya(r)):n=!1,Fs(r,a),Hp(r,u,h),Nu(r,u,h,a),Iu(null,r,u,!0,n,a);case 19:return rm(n,r,a);case 22:return Zp(n,r,a)}throw Error(t(156,r.tag))};function Cm(n,r){return Na(n,r)}function a0(n,r,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(n,r,a,u){return new a0(n,r,a,u)}function td(n){return n=n.prototype,!(!n||!n.isReactComponent)}function l0(n){if(typeof n=="function")return td(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===he)return 14}return 2}function Mr(n,r){var a=n.alternate;return a===null?(a=ni(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function wl(n,r,a,u,h,v){var w=2;if(u=n,typeof n=="function")td(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case F:return Zr(a.children,h,v,r);case k:w=8,h|=8;break;case P:return n=ni(12,a,r,h|2),n.elementType=P,n.lanes=v,n;case Q:return n=ni(13,a,r,h),n.elementType=Q,n.lanes=v,n;case fe:return n=ni(19,a,r,h),n.elementType=fe,n.lanes=v,n;case ce:return bl(a,h,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:w=10;break e;case G:w=9;break e;case le:w=11;break e;case he:w=14;break e;case se:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ni(w,a,r,h),r.elementType=n,r.type=u,r.lanes=v,r}function Zr(n,r,a,u){return n=ni(7,n,u,r),n.lanes=a,n}function bl(n,r,a,u){return n=ni(22,n,u,r),n.elementType=ce,n.lanes=a,n.stateNode={isHidden:!1},n}function nd(n,r,a){return n=ni(6,n,null,r),n.lanes=a,n}function id(n,r,a){return r=ni(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function c0(n,r,a,u,h){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_n(0),this.expirationTimes=_n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function rd(n,r,a,u,h,v,w,U,B){return n=new c0(n,r,a,U,B),r===1?(r=1,v===!0&&(r|=8)):r=0,v=ni(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},vu(v),n}function u0(n,r,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:u==null?null:""+u,children:n,containerInfo:r,implementation:a}}function Rm(n){if(!n)return pr;n=n._reactInternals;e:{if(Si(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(In(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(In(a))return ip(n,a,r)}return r}function Pm(n,r,a,u,h,v,w,U,B){return n=rd(a,u,!0,n,h,v,w,U,B),n.context=Rm(null),a=n.current,u=Pn(),h=Sr(a),v=Bi(u,h),v.callback=r??null,vr(a,v,h),n.current.lanes=h,ln(n,h,u),kn(n,u),n}function Tl(n,r,a,u){var h=r.current,v=Pn(),w=Sr(h);return a=Rm(a),r.context===null?r.context=a:r.pendingContext=a,r=Bi(v,w),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=vr(h,r,w),n!==null&&(ui(n,h,w,v),il(n,h,w)),w}function Al(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Nm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function sd(n,r){Nm(n,r),(n=n.alternate)&&Nm(n,r)}function d0(){return null}var Lm=typeof reportError=="function"?reportError:function(n){console.error(n)};function od(n){this._internalRoot=n}Cl.prototype.render=od.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Tl(n,r,null,null)},Cl.prototype.unmount=od.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;$r(function(){Tl(null,n,null,null)}),r[Ui]=null}};function Cl(n){this._internalRoot=n}Cl.prototype.unstable_scheduleHydration=function(n){if(n){var r=mh();n={blockedOn:null,target:n,priority:r};for(var a=0;a<cr.length&&r!==0&&r<cr[a].priority;a++);cr.splice(a,0,n),a===0&&_h(n)}};function ad(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Rl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function f0(n,r,a,u,h){if(h){if(typeof u=="function"){var v=u;u=function(){var ee=Al(w);v.call(ee)}}var w=Pm(r,u,n,0,null,!1,!1,"",Dm);return n._reactRootContainer=w,n[Ui]=w.current,Uo(n.nodeType===8?n.parentNode:n),$r(),w}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var U=u;u=function(){var ee=Al(B);U.call(ee)}}var B=rd(n,0,!1,null,null,!1,!1,"",Dm);return n._reactRootContainer=B,n[Ui]=B.current,Uo(n.nodeType===8?n.parentNode:n),$r(function(){Tl(r,B,a,u)}),B}function Pl(n,r,a,u,h){var v=a._reactRootContainer;if(v){var w=v;if(typeof h=="function"){var U=h;h=function(){var B=Al(w);U.call(B)}}Tl(r,w,n,h)}else w=f0(a,r,n,h,u);return Al(w)}hh=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=yt(r.pendingLanes);a!==0&&(cn(r,a|1),kn(r,K()),(Tt&6)===0&&(Vs=K()+500,mr()))}break;case 13:$r(function(){var u=ki(n,1);if(u!==null){var h=Pn();ui(u,n,1,h)}}),sd(n,1)}},Lc=function(n){if(n.tag===13){var r=ki(n,134217728);if(r!==null){var a=Pn();ui(r,n,134217728,a)}sd(n,134217728)}},ph=function(n){if(n.tag===13){var r=Sr(n),a=ki(n,r);if(a!==null){var u=Pn();ui(a,n,r,u)}sd(n,r)}},mh=function(){return bt},gh=function(n,r){var a=bt;try{return bt=n,r()}finally{bt=a}},Pe=function(n,r,a){switch(r){case"input":if(gt(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var u=a[r];if(u!==n&&u.form===n.form){var h=qa(u);if(!h)throw Error(t(90));Rt(u),gt(u,h)}}}break;case"textarea":ge(n,a);break;case"select":r=a.value,r!=null&&L(n,!!a.multiple,r,!1)}},Bt=Ju,tn=$r;var h0={usingClientEntryPoint:!1,Events:[Fo,Rs,qa,De,ct,Ju]},Zo={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p0={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ra(n),n===null?null:n.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||d0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{it=Nl.inject(p0),je=Nl}catch{}}return Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h0,Bn.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ad(r))throw Error(t(200));return u0(n,r,null,a)},Bn.createRoot=function(n,r){if(!ad(n))throw Error(t(299));var a=!1,u="",h=Lm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=rd(n,1,!1,null,null,a,!1,u,h),n[Ui]=r.current,Uo(n.nodeType===8?n.parentNode:n),new od(r)},Bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ra(r),n=n===null?null:n.stateNode,n},Bn.flushSync=function(n){return $r(n)},Bn.hydrate=function(n,r,a){if(!Rl(r))throw Error(t(200));return Pl(null,n,r,!0,a)},Bn.hydrateRoot=function(n,r,a){if(!ad(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,h=!1,v="",w=Lm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),r=Pm(r,null,n,1,a??null,h,!1,v,w),n[Ui]=r.current,Uo(n),u)for(n=0;n<u.length;n++)a=u[n],h=a._getVersion,h=h(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,h]:r.mutableSourceEagerHydrationData.push(a,h);return new Cl(r)},Bn.render=function(n,r,a){if(!Rl(r))throw Error(t(200));return Pl(null,n,r,!1,a)},Bn.unmountComponentAtNode=function(n){if(!Rl(n))throw Error(t(40));return n._reactRootContainer?($r(function(){Pl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ui]=null})}),!0):!1},Bn.unstable_batchedUpdates=Ju,Bn.unstable_renderSubtreeIntoContainer=function(n,r,a,u){if(!Rl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Pl(n,r,a,!1,u)},Bn.version="18.3.1-next-f1338f8080-20240426",Bn}var Hm;function pv(){if(Hm)return ud.exports;Hm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),ud.exports=w0(),ud.exports}var Vm;function b0(){if(Vm)return Ll;Vm=1;var i=pv();return Ll.createRoot=i.createRoot,Ll.hydrateRoot=i.hydrateRoot,Ll}var T0=b0();const A0=hv(T0);pv();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},aa.apply(this,arguments)}var Dr;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(Dr||(Dr={}));const Gm="popstate";function C0(i){i===void 0&&(i={});function e(s,o){let{pathname:l,search:c,hash:d}=s.location;return Yd("",{pathname:l,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:pc(o)}return P0(e,t,null,i)}function Qt(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function mv(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function R0(){return Math.random().toString(36).substr(2,8)}function Wm(i,e){return{usr:i.state,key:i.key,idx:e}}function Yd(i,e,t,s){return t===void 0&&(t=null),aa({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?po(e):e,{state:t,key:e&&e.key||s||R0()})}function pc(i){let{pathname:e="/",search:t="",hash:s=""}=i;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function po(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substr(t),i=i.substr(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substr(s),i=i.substr(0,s)),i&&(e.pathname=i)}return e}function P0(i,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,c=o.history,d=Dr.Pop,f=null,p=m();p==null&&(p=0,c.replaceState(aa({},c.state,{idx:p}),""));function m(){return(c.state||{idx:null}).idx}function g(){d=Dr.Pop;let _=m(),x=_==null?null:_-p;p=_,f&&f({action:d,location:M.location,delta:x})}function y(_,x){d=Dr.Push;let D=Yd(M.location,_,x);p=m()+1;let N=Wm(D,p),R=M.createHref(D);try{c.pushState(N,"",R)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;o.location.assign(R)}l&&f&&f({action:d,location:M.location,delta:1})}function S(_,x){d=Dr.Replace;let D=Yd(M.location,_,x);p=m();let N=Wm(D,p),R=M.createHref(D);c.replaceState(N,"",R),l&&f&&f({action:d,location:M.location,delta:0})}function E(_){let x=o.location.origin!=="null"?o.location.origin:o.location.href,D=typeof _=="string"?_:pc(_);return D=D.replace(/ $/,"%20"),Qt(x,"No window.location.(origin|href) available to create URL for href: "+D),new URL(D,x)}let M={get action(){return d},get location(){return i(o,c)},listen(_){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(Gm,g),f=_,()=>{o.removeEventListener(Gm,g),f=null}},createHref(_){return e(o,_)},createURL:E,encodeLocation(_){let x=E(_);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:y,replace:S,go(_){return c.go(_)}};return M}var jm;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(jm||(jm={}));function N0(i,e,t){return t===void 0&&(t="/"),L0(i,e,t)}function L0(i,e,t,s){let o=typeof e=="string"?po(e):e,l=Yf(o.pathname||"/",t);if(l==null)return null;let c=gv(i);D0(c);let d=null;for(let f=0;d==null&&f<c.length;++f){let p=j0(l);d=V0(c[f],p)}return d}function gv(i,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,c,d)=>{let f={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};f.relativePath.startsWith("/")&&(Qt(f.relativePath.startsWith(s),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(s.length));let p=Ur([s,f.relativePath]),m=t.concat(f);l.children&&l.children.length>0&&(Qt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),gv(l.children,e,m,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:z0(p,l.index),routesMeta:m})};return i.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,c);else for(let f of vv(l.path))o(l,c,f)}),e}function vv(i){let e=i.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let c=vv(s.join("/")),d=[];return d.push(...c.map(f=>f===""?l:[l,f].join("/"))),o&&d.push(...c),d.map(f=>i.startsWith("/")&&f===""?"/":f)}function D0(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:H0(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const U0=/^:[\w-]+$/,I0=3,O0=2,F0=1,k0=10,B0=-2,Xm=i=>i==="*";function z0(i,e){let t=i.split("/"),s=t.length;return t.some(Xm)&&(s+=B0),e&&(s+=O0),t.filter(o=>!Xm(o)).reduce((o,l)=>o+(U0.test(l)?I0:l===""?F0:k0),s)}function H0(i,e){return i.length===e.length&&i.slice(0,-1).every((s,o)=>s===e[o])?i[i.length-1]-e[e.length-1]:0}function V0(i,e,t){let{routesMeta:s}=i,o={},l="/",c=[];for(let d=0;d<s.length;++d){let f=s[d],p=d===s.length-1,m=l==="/"?e:e.slice(l.length)||"/",g=G0({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},m),y=f.route;if(!g)return null;Object.assign(o,g.params),c.push({params:o,pathname:Ur([l,g.pathname]),pathnameBase:Y0(Ur([l,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(l=Ur([l,g.pathnameBase]))}return c}function G0(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,s]=W0(i.path,i.caseSensitive,i.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:s.reduce((p,m,g)=>{let{paramName:y,isOptional:S}=m;if(y==="*"){let M=d[g]||"";c=l.slice(0,l.length-M.length).replace(/(.)\/+$/,"$1")}const E=d[g];return S&&!E?p[y]=void 0:p[y]=(E||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:i}}function W0(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),mv(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let s=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,f)=>(s.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(s.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function j0(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mv(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),i}}function Yf(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}function X0(i,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof i=="string"?po(i):i;return{pathname:t?t.startsWith("/")?t:q0(t,e):e,search:K0(s),hash:Z0(o)}}function q0(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function hd(i,e,t,s){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $0(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function _v(i,e){let t=$0(i);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function xv(i,e,t,s){s===void 0&&(s=!1);let o;typeof i=="string"?o=po(i):(o=aa({},i),Qt(!o.pathname||!o.pathname.includes("?"),hd("?","pathname","search",o)),Qt(!o.pathname||!o.pathname.includes("#"),hd("#","pathname","hash",o)),Qt(!o.search||!o.search.includes("#"),hd("#","search","hash",o)));let l=i===""||o.pathname==="",c=l?"/":o.pathname,d;if(c==null)d=t;else{let g=e.length-1;if(!s&&c.startsWith("..")){let y=c.split("/");for(;y[0]==="..";)y.shift(),g-=1;o.pathname=y.join("/")}d=g>=0?e[g]:"/"}let f=X0(o,d),p=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(p||m)&&(f.pathname+="/"),f}const Ur=i=>i.join("/").replace(/\/\/+/g,"/"),Y0=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),K0=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Z0=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function J0(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const yv=["post","put","patch","delete"];new Set(yv);const Q0=["get",...yv];new Set(Q0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function la(){return la=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},la.apply(this,arguments)}const Kf=_e.createContext(null),ey=_e.createContext(null),vs=_e.createContext(null),xc=_e.createContext(null),_s=_e.createContext({outlet:null,matches:[],isDataRoute:!1}),Sv=_e.createContext(null);function ty(i,e){let{relative:t}=e===void 0?{}:e;ga()||Qt(!1);let{basename:s,navigator:o}=_e.useContext(vs),{hash:l,pathname:c,search:d}=Mv(i,{relative:t}),f=c;return s!=="/"&&(f=c==="/"?s:Ur([s,c])),o.createHref({pathname:f,search:d,hash:l})}function ga(){return _e.useContext(xc)!=null}function yc(){return ga()||Qt(!1),_e.useContext(xc).location}function Ev(i){_e.useContext(vs).static||_e.useLayoutEffect(i)}function ny(){let{isDataRoute:i}=_e.useContext(_s);return i?my():iy()}function iy(){ga()||Qt(!1);let i=_e.useContext(Kf),{basename:e,future:t,navigator:s}=_e.useContext(vs),{matches:o}=_e.useContext(_s),{pathname:l}=yc(),c=JSON.stringify(_v(o,t.v7_relativeSplatPath)),d=_e.useRef(!1);return Ev(()=>{d.current=!0}),_e.useCallback(function(p,m){if(m===void 0&&(m={}),!d.current)return;if(typeof p=="number"){s.go(p);return}let g=xv(p,JSON.parse(c),l,m.relative==="path");i==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Ur([e,g.pathname])),(m.replace?s.replace:s.push)(g,m.state,m)},[e,s,c,l,i])}function Mv(i,e){let{relative:t}=e===void 0?{}:e,{future:s}=_e.useContext(vs),{matches:o}=_e.useContext(_s),{pathname:l}=yc(),c=JSON.stringify(_v(o,s.v7_relativeSplatPath));return _e.useMemo(()=>xv(i,JSON.parse(c),l,t==="path"),[i,c,l,t])}function ry(i,e){return sy(i,e)}function sy(i,e,t,s){ga()||Qt(!1);let{navigator:o}=_e.useContext(vs),{matches:l}=_e.useContext(_s),c=l[l.length-1],d=c?c.params:{};c&&c.pathname;let f=c?c.pathnameBase:"/";c&&c.route;let p=yc(),m;if(e){var g;let _=typeof e=="string"?po(e):e;f==="/"||(g=_.pathname)!=null&&g.startsWith(f)||Qt(!1),m=_}else m=p;let y=m.pathname||"/",S=y;if(f!=="/"){let _=f.replace(/^\//,"").split("/");S="/"+y.replace(/^\//,"").split("/").slice(_.length).join("/")}let E=N0(i,{pathname:S}),M=uy(E&&E.map(_=>Object.assign({},_,{params:Object.assign({},d,_.params),pathname:Ur([f,o.encodeLocation?o.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?f:Ur([f,o.encodeLocation?o.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),l,t,s);return e&&M?_e.createElement(xc.Provider,{value:{location:la({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Dr.Pop}},M):M}function oy(){let i=py(),e=J0(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _e.createElement(_e.Fragment,null,_e.createElement("h2",null,"Unexpected Application Error!"),_e.createElement("h3",{style:{fontStyle:"italic"}},e),t?_e.createElement("pre",{style:o},t):null,null)}const ay=_e.createElement(oy,null);class ly extends _e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?_e.createElement(_s.Provider,{value:this.props.routeContext},_e.createElement(Sv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cy(i){let{routeContext:e,match:t,children:s}=i,o=_e.useContext(Kf);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),_e.createElement(_s.Provider,{value:e},s)}function uy(i,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),i==null){var l;if(!t)return null;if(t.errors)i=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let c=i,d=(o=t)==null?void 0:o.errors;if(d!=null){let m=c.findIndex(g=>g.route.id&&(d==null?void 0:d[g.route.id])!==void 0);m>=0||Qt(!1),c=c.slice(0,Math.min(c.length,m+1))}let f=!1,p=-1;if(t&&s&&s.v7_partialHydration)for(let m=0;m<c.length;m++){let g=c[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:y,errors:S}=t,E=g.route.loader&&y[g.route.id]===void 0&&(!S||S[g.route.id]===void 0);if(g.route.lazy||E){f=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((m,g,y)=>{let S,E=!1,M=null,_=null;t&&(S=d&&g.route.id?d[g.route.id]:void 0,M=g.route.errorElement||ay,f&&(p<0&&y===0?(gy("route-fallback"),E=!0,_=null):p===y&&(E=!0,_=g.route.hydrateFallbackElement||null)));let x=e.concat(c.slice(0,y+1)),D=()=>{let N;return S?N=M:E?N=_:g.route.Component?N=_e.createElement(g.route.Component,null):g.route.element?N=g.route.element:N=m,_e.createElement(cy,{match:g,routeContext:{outlet:m,matches:x,isDataRoute:t!=null},children:N})};return t&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?_e.createElement(ly,{location:t.location,revalidation:t.revalidation,component:M,error:S,children:D(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):D()},null)}var wv=function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i}(wv||{}),bv=function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i}(bv||{});function dy(i){let e=_e.useContext(Kf);return e||Qt(!1),e}function fy(i){let e=_e.useContext(ey);return e||Qt(!1),e}function hy(i){let e=_e.useContext(_s);return e||Qt(!1),e}function Tv(i){let e=hy(),t=e.matches[e.matches.length-1];return t.route.id||Qt(!1),t.route.id}function py(){var i;let e=_e.useContext(Sv),t=fy(),s=Tv();return e!==void 0?e:(i=t.errors)==null?void 0:i[s]}function my(){let{router:i}=dy(wv.UseNavigateStable),e=Tv(bv.UseNavigateStable),t=_e.useRef(!1);return Ev(()=>{t.current=!0}),_e.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?i.navigate(o):i.navigate(o,la({fromRouteId:e},l)))},[i,e])}const qm={};function gy(i,e,t){qm[i]||(qm[i]=!0)}function vy(i,e){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function pi(i){Qt(!1)}function _y(i){let{basename:e="/",children:t=null,location:s,navigationType:o=Dr.Pop,navigator:l,static:c=!1,future:d}=i;ga()&&Qt(!1);let f=e.replace(/^\/*/,"/"),p=_e.useMemo(()=>({basename:f,navigator:l,static:c,future:la({v7_relativeSplatPath:!1},d)}),[f,d,l,c]);typeof s=="string"&&(s=po(s));let{pathname:m="/",search:g="",hash:y="",state:S=null,key:E="default"}=s,M=_e.useMemo(()=>{let _=Yf(m,f);return _==null?null:{location:{pathname:_,search:g,hash:y,state:S,key:E},navigationType:o}},[f,m,g,y,S,E,o]);return M==null?null:_e.createElement(vs.Provider,{value:p},_e.createElement(xc.Provider,{children:t,value:M}))}function xy(i){let{children:e,location:t}=i;return ry(Kd(e),t)}new Promise(()=>{});function Kd(i,e){e===void 0&&(e=[]);let t=[];return _e.Children.forEach(i,(s,o)=>{if(!_e.isValidElement(s))return;let l=[...e,o];if(s.type===_e.Fragment){t.push.apply(t,Kd(s.props.children,l));return}s.type!==pi&&Qt(!1),!s.props.index||!s.props.children||Qt(!1);let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Kd(s.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zd(){return Zd=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},Zd.apply(this,arguments)}function yy(i,e){if(i==null)return{};var t={},s=Object.keys(i),o,l;for(l=0;l<s.length;l++)o=s[l],!(e.indexOf(o)>=0)&&(t[o]=i[o]);return t}function Sy(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Ey(i,e){return i.button===0&&(!e||e==="_self")&&!Sy(i)}const My=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],wy="6";try{window.__reactRouterVersion=wy}catch{}const by="startTransition",$m=S0[by];function Ty(i){let{basename:e,children:t,future:s,window:o}=i,l=_e.useRef();l.current==null&&(l.current=C0({window:o,v5Compat:!0}));let c=l.current,[d,f]=_e.useState({action:c.action,location:c.location}),{v7_startTransition:p}=s||{},m=_e.useCallback(g=>{p&&$m?$m(()=>f(g)):f(g)},[f,p]);return _e.useLayoutEffect(()=>c.listen(m),[c,m]),_e.useEffect(()=>vy(s),[s]),_e.createElement(_y,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:c,future:s})}const Ay=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vi=_e.forwardRef(function(e,t){let{onClick:s,relative:o,reloadDocument:l,replace:c,state:d,target:f,to:p,preventScrollReset:m,viewTransition:g}=e,y=yy(e,My),{basename:S}=_e.useContext(vs),E,M=!1;if(typeof p=="string"&&Cy.test(p)&&(E=p,Ay))try{let N=new URL(window.location.href),R=p.startsWith("//")?new URL(N.protocol+p):new URL(p),V=Yf(R.pathname,S);R.origin===N.origin&&V!=null?p=V+R.search+R.hash:M=!0}catch{}let _=ty(p,{relative:o}),x=Ry(p,{replace:c,state:d,target:f,preventScrollReset:m,relative:o,viewTransition:g});function D(N){s&&s(N),N.defaultPrevented||x(N)}return _e.createElement("a",Zd({},y,{href:E||_,onClick:M||l?s:D,ref:t,target:f}))});var Ym;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Ym||(Ym={}));var Km;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Km||(Km={}));function Ry(i,e){let{target:t,replace:s,state:o,preventScrollReset:l,relative:c,viewTransition:d}=e===void 0?{}:e,f=ny(),p=yc(),m=Mv(i,{relative:c});return _e.useCallback(g=>{if(Ey(g,t)){g.preventDefault();let y=s!==void 0?s:pc(p)===pc(m);f(i,{replace:y,state:o,preventScrollReset:l,relative:c,viewTransition:d})}},[p,f,m,s,o,t,i,l,c,d])}function Zm(i,e){if(typeof i=="function")return i(e);i!=null&&(i.current=e)}function Py(...i){return e=>{let t=!1;const s=i.map(o=>{const l=Zm(o,e);return!t&&typeof l=="function"&&(t=!0),l});if(t)return()=>{for(let o=0;o<s.length;o++){const l=s[o];typeof l=="function"?l():Zm(i[o],null)}}}}function Ny(i){const e=Dy(i),t=_e.forwardRef((s,o)=>{const{children:l,...c}=s,d=_e.Children.toArray(l),f=d.find(Iy);if(f){const p=f.props.children,m=d.map(g=>g===f?_e.Children.count(p)>1?_e.Children.only(null):_e.isValidElement(p)?p.props.children:null:g);return T.jsx(e,{...c,ref:o,children:_e.isValidElement(p)?_e.cloneElement(p,void 0,m):null})}return T.jsx(e,{...c,ref:o,children:l})});return t.displayName=`${i}.Slot`,t}var Ly=Ny("Slot");function Dy(i){const e=_e.forwardRef((t,s)=>{const{children:o,...l}=t;if(_e.isValidElement(o)){const c=Fy(o),d=Oy(l,o.props);return o.type!==_e.Fragment&&(d.ref=s?Py(s,c):c),_e.cloneElement(o,d)}return _e.Children.count(o)>1?_e.Children.only(null):null});return e.displayName=`${i}.SlotClone`,e}var Uy=Symbol("radix.slottable");function Iy(i){return _e.isValidElement(i)&&typeof i.type=="function"&&"__radixId"in i.type&&i.type.__radixId===Uy}function Oy(i,e){const t={...e};for(const s in e){const o=i[s],l=e[s];/^on[A-Z]/.test(s)?o&&l?t[s]=(...d)=>{const f=l(...d);return o(...d),f}:o&&(t[s]=o):s==="style"?t[s]={...o,...l}:s==="className"&&(t[s]=[o,l].filter(Boolean).join(" "))}return{...i,...t}}function Fy(i){var s,o;let e=(s=Object.getOwnPropertyDescriptor(i.props,"ref"))==null?void 0:s.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?i.ref:(e=(o=Object.getOwnPropertyDescriptor(i,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?i.props.ref:i.props.ref||i.ref)}function Av(i){var e,t,s="";if(typeof i=="string"||typeof i=="number")s+=i;else if(typeof i=="object")if(Array.isArray(i)){var o=i.length;for(e=0;e<o;e++)i[e]&&(t=Av(i[e]))&&(s&&(s+=" "),s+=t)}else for(t in i)i[t]&&(s&&(s+=" "),s+=t);return s}function Cv(){for(var i,e,t=0,s="",o=arguments.length;t<o;t++)(i=arguments[t])&&(e=Av(i))&&(s&&(s+=" "),s+=e);return s}const Jm=i=>typeof i=="boolean"?`${i}`:i===0?"0":i,Qm=Cv,ky=(i,e)=>t=>{var s;if((e==null?void 0:e.variants)==null)return Qm(i,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:o,defaultVariants:l}=e,c=Object.keys(o).map(p=>{const m=t==null?void 0:t[p],g=l==null?void 0:l[p];if(m===null)return null;const y=Jm(m)||Jm(g);return o[p][y]}),d=t&&Object.entries(t).reduce((p,m)=>{let[g,y]=m;return y===void 0||(p[g]=y),p},{}),f=e==null||(s=e.compoundVariants)===null||s===void 0?void 0:s.reduce((p,m)=>{let{class:g,className:y,...S}=m;return Object.entries(S).every(E=>{let[M,_]=E;return Array.isArray(_)?_.includes({...l,...d}[M]):{...l,...d}[M]===_})?[...p,g,y]:p},[]);return Qm(i,c,f,t==null?void 0:t.class,t==null?void 0:t.className)},Zf="-",By=i=>{const e=Hy(i),{conflictingClassGroups:t,conflictingClassGroupModifiers:s}=i;return{getClassGroupId:c=>{const d=c.split(Zf);return d[0]===""&&d.length!==1&&d.shift(),Rv(d,e)||zy(c)},getConflictingClassGroupIds:(c,d)=>{const f=t[c]||[];return d&&s[c]?[...f,...s[c]]:f}}},Rv=(i,e)=>{var c;if(i.length===0)return e.classGroupId;const t=i[0],s=e.nextPart.get(t),o=s?Rv(i.slice(1),s):void 0;if(o)return o;if(e.validators.length===0)return;const l=i.join(Zf);return(c=e.validators.find(({validator:d})=>d(l)))==null?void 0:c.classGroupId},eg=/^\[(.+)\]$/,zy=i=>{if(eg.test(i)){const e=eg.exec(i)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},Hy=i=>{const{theme:e,classGroups:t}=i,s={nextPart:new Map,validators:[]};for(const o in t)Jd(t[o],s,o,e);return s},Jd=(i,e,t,s)=>{i.forEach(o=>{if(typeof o=="string"){const l=o===""?e:tg(e,o);l.classGroupId=t;return}if(typeof o=="function"){if(Vy(o)){Jd(o(s),e,t,s);return}e.validators.push({validator:o,classGroupId:t});return}Object.entries(o).forEach(([l,c])=>{Jd(c,tg(e,l),t,s)})})},tg=(i,e)=>{let t=i;return e.split(Zf).forEach(s=>{t.nextPart.has(s)||t.nextPart.set(s,{nextPart:new Map,validators:[]}),t=t.nextPart.get(s)}),t},Vy=i=>i.isThemeGetter,Gy=i=>{if(i<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,s=new Map;const o=(l,c)=>{t.set(l,c),e++,e>i&&(e=0,s=t,t=new Map)};return{get(l){let c=t.get(l);if(c!==void 0)return c;if((c=s.get(l))!==void 0)return o(l,c),c},set(l,c){t.has(l)?t.set(l,c):o(l,c)}}},Qd="!",ef=":",Wy=ef.length,jy=i=>{const{prefix:e,experimentalParseClassName:t}=i;let s=o=>{const l=[];let c=0,d=0,f=0,p;for(let E=0;E<o.length;E++){let M=o[E];if(c===0&&d===0){if(M===ef){l.push(o.slice(f,E)),f=E+Wy;continue}if(M==="/"){p=E;continue}}M==="["?c++:M==="]"?c--:M==="("?d++:M===")"&&d--}const m=l.length===0?o:o.substring(f),g=Xy(m),y=g!==m,S=p&&p>f?p-f:void 0;return{modifiers:l,hasImportantModifier:y,baseClassName:g,maybePostfixModifierPosition:S}};if(e){const o=e+ef,l=s;s=c=>c.startsWith(o)?l(c.substring(o.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:c,maybePostfixModifierPosition:void 0}}if(t){const o=s;s=l=>t({className:l,parseClassName:o})}return s},Xy=i=>i.endsWith(Qd)?i.substring(0,i.length-1):i.startsWith(Qd)?i.substring(1):i,qy=i=>{const e=Object.fromEntries(i.orderSensitiveModifiers.map(s=>[s,!0]));return s=>{if(s.length<=1)return s;const o=[];let l=[];return s.forEach(c=>{c[0]==="["||e[c]?(o.push(...l.sort(),c),l=[]):l.push(c)}),o.push(...l.sort()),o}},$y=i=>({cache:Gy(i.cacheSize),parseClassName:jy(i),sortModifiers:qy(i),...By(i)}),Yy=/\s+/,Ky=(i,e)=>{const{parseClassName:t,getClassGroupId:s,getConflictingClassGroupIds:o,sortModifiers:l}=e,c=[],d=i.trim().split(Yy);let f="";for(let p=d.length-1;p>=0;p-=1){const m=d[p],{isExternal:g,modifiers:y,hasImportantModifier:S,baseClassName:E,maybePostfixModifierPosition:M}=t(m);if(g){f=m+(f.length>0?" "+f:f);continue}let _=!!M,x=s(_?E.substring(0,M):E);if(!x){if(!_){f=m+(f.length>0?" "+f:f);continue}if(x=s(E),!x){f=m+(f.length>0?" "+f:f);continue}_=!1}const D=l(y).join(":"),N=S?D+Qd:D,R=N+x;if(c.includes(R))continue;c.push(R);const V=o(x,_);for(let z=0;z<V.length;++z){const F=V[z];c.push(N+F)}f=m+(f.length>0?" "+f:f)}return f};function Zy(){let i=0,e,t,s="";for(;i<arguments.length;)(e=arguments[i++])&&(t=Pv(e))&&(s&&(s+=" "),s+=t);return s}const Pv=i=>{if(typeof i=="string")return i;let e,t="";for(let s=0;s<i.length;s++)i[s]&&(e=Pv(i[s]))&&(t&&(t+=" "),t+=e);return t};function Jy(i,...e){let t,s,o,l=c;function c(f){const p=e.reduce((m,g)=>g(m),i());return t=$y(p),s=t.cache.get,o=t.cache.set,l=d,d(f)}function d(f){const p=s(f);if(p)return p;const m=Ky(f,t);return o(f,m),m}return function(){return l(Zy.apply(null,arguments))}}const sn=i=>{const e=t=>t[i]||[];return e.isThemeGetter=!0,e},Nv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Lv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Qy=/^\d+\/\d+$/,eS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,tS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,nS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,iS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,rS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ws=i=>Qy.test(i),mt=i=>!!i&&!Number.isNaN(Number(i)),br=i=>!!i&&Number.isInteger(Number(i)),pd=i=>i.endsWith("%")&&mt(i.slice(0,-1)),Gi=i=>eS.test(i),sS=()=>!0,oS=i=>tS.test(i)&&!nS.test(i),Dv=()=>!1,aS=i=>iS.test(i),lS=i=>rS.test(i),cS=i=>!Ge(i)&&!We(i),uS=i=>mo(i,Ov,Dv),Ge=i=>Nv.test(i),Jr=i=>mo(i,Fv,oS),md=i=>mo(i,mS,mt),ng=i=>mo(i,Uv,Dv),dS=i=>mo(i,Iv,lS),Dl=i=>mo(i,kv,aS),We=i=>Lv.test(i),Qo=i=>go(i,Fv),fS=i=>go(i,gS),ig=i=>go(i,Uv),hS=i=>go(i,Ov),pS=i=>go(i,Iv),Ul=i=>go(i,kv,!0),mo=(i,e,t)=>{const s=Nv.exec(i);return s?s[1]?e(s[1]):t(s[2]):!1},go=(i,e,t=!1)=>{const s=Lv.exec(i);return s?s[1]?e(s[1]):t:!1},Uv=i=>i==="position"||i==="percentage",Iv=i=>i==="image"||i==="url",Ov=i=>i==="length"||i==="size"||i==="bg-size",Fv=i=>i==="length",mS=i=>i==="number",gS=i=>i==="family-name",kv=i=>i==="shadow",vS=()=>{const i=sn("color"),e=sn("font"),t=sn("text"),s=sn("font-weight"),o=sn("tracking"),l=sn("leading"),c=sn("breakpoint"),d=sn("container"),f=sn("spacing"),p=sn("radius"),m=sn("shadow"),g=sn("inset-shadow"),y=sn("text-shadow"),S=sn("drop-shadow"),E=sn("blur"),M=sn("perspective"),_=sn("aspect"),x=sn("ease"),D=sn("animate"),N=()=>["auto","avoid","all","avoid-page","page","left","right","column"],R=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],V=()=>[...R(),We,Ge],z=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto","contain","none"],k=()=>[We,Ge,f],P=()=>[Ws,"full","auto",...k()],C=()=>[br,"none","subgrid",We,Ge],G=()=>["auto",{span:["full",br,We,Ge]},br,We,Ge],le=()=>[br,"auto",We,Ge],Q=()=>["auto","min","max","fr",We,Ge],fe=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],he=()=>["start","end","center","stretch","center-safe","end-safe"],se=()=>["auto",...k()],ce=()=>[Ws,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...k()],I=()=>[i,We,Ge],ue=()=>[...R(),ig,ng,{position:[We,Ge]}],oe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],O=()=>["auto","cover","contain",hS,uS,{size:[We,Ge]}],ne=()=>[pd,Qo,Jr],Ae=()=>["","none","full",p,We,Ge],Y=()=>["",mt,Qo,Jr],pe=()=>["solid","dashed","dotted","double"],we=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],me=()=>[mt,pd,ig,ng],Ce=()=>["","none",E,We,Ge],qe=()=>["none",mt,We,Ge],ke=()=>["none",mt,We,Ge],Pt=()=>[mt,We,Ge],Rt=()=>[Ws,"full",...k()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Gi],breakpoint:[Gi],color:[sS],container:[Gi],"drop-shadow":[Gi],ease:["in","out","in-out"],font:[cS],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Gi],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Gi],shadow:[Gi],spacing:["px",mt],text:[Gi],"text-shadow":[Gi],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ws,Ge,We,_]}],container:["container"],columns:[{columns:[mt,Ge,We,d]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:V()}],overflow:[{overflow:z()}],"overflow-x":[{"overflow-x":z()}],"overflow-y":[{"overflow-y":z()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:P()}],"inset-x":[{"inset-x":P()}],"inset-y":[{"inset-y":P()}],start:[{start:P()}],end:[{end:P()}],top:[{top:P()}],right:[{right:P()}],bottom:[{bottom:P()}],left:[{left:P()}],visibility:["visible","invisible","collapse"],z:[{z:[br,"auto",We,Ge]}],basis:[{basis:[Ws,"full","auto",d,...k()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[mt,Ws,"auto","initial","none",Ge]}],grow:[{grow:["",mt,We,Ge]}],shrink:[{shrink:["",mt,We,Ge]}],order:[{order:[br,"first","last","none",We,Ge]}],"grid-cols":[{"grid-cols":C()}],"col-start-end":[{col:G()}],"col-start":[{"col-start":le()}],"col-end":[{"col-end":le()}],"grid-rows":[{"grid-rows":C()}],"row-start-end":[{row:G()}],"row-start":[{"row-start":le()}],"row-end":[{"row-end":le()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Q()}],"auto-rows":[{"auto-rows":Q()}],gap:[{gap:k()}],"gap-x":[{"gap-x":k()}],"gap-y":[{"gap-y":k()}],"justify-content":[{justify:[...fe(),"normal"]}],"justify-items":[{"justify-items":[...he(),"normal"]}],"justify-self":[{"justify-self":["auto",...he()]}],"align-content":[{content:["normal",...fe()]}],"align-items":[{items:[...he(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...he(),{baseline:["","last"]}]}],"place-content":[{"place-content":fe()}],"place-items":[{"place-items":[...he(),"baseline"]}],"place-self":[{"place-self":["auto",...he()]}],p:[{p:k()}],px:[{px:k()}],py:[{py:k()}],ps:[{ps:k()}],pe:[{pe:k()}],pt:[{pt:k()}],pr:[{pr:k()}],pb:[{pb:k()}],pl:[{pl:k()}],m:[{m:se()}],mx:[{mx:se()}],my:[{my:se()}],ms:[{ms:se()}],me:[{me:se()}],mt:[{mt:se()}],mr:[{mr:se()}],mb:[{mb:se()}],ml:[{ml:se()}],"space-x":[{"space-x":k()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":k()}],"space-y-reverse":["space-y-reverse"],size:[{size:ce()}],w:[{w:[d,"screen",...ce()]}],"min-w":[{"min-w":[d,"screen","none",...ce()]}],"max-w":[{"max-w":[d,"screen","none","prose",{screen:[c]},...ce()]}],h:[{h:["screen","lh",...ce()]}],"min-h":[{"min-h":["screen","lh","none",...ce()]}],"max-h":[{"max-h":["screen","lh",...ce()]}],"font-size":[{text:["base",t,Qo,Jr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,We,md]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",pd,Ge]}],"font-family":[{font:[fS,Ge,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,We,Ge]}],"line-clamp":[{"line-clamp":[mt,"none",We,md]}],leading:[{leading:[l,...k()]}],"list-image":[{"list-image":["none",We,Ge]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",We,Ge]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:I()}],"text-color":[{text:I()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...pe(),"wavy"]}],"text-decoration-thickness":[{decoration:[mt,"from-font","auto",We,Jr]}],"text-decoration-color":[{decoration:I()}],"underline-offset":[{"underline-offset":[mt,"auto",We,Ge]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:k()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",We,Ge]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",We,Ge]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ue()}],"bg-repeat":[{bg:oe()}],"bg-size":[{bg:O()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},br,We,Ge],radial:["",We,Ge],conic:[br,We,Ge]},pS,dS]}],"bg-color":[{bg:I()}],"gradient-from-pos":[{from:ne()}],"gradient-via-pos":[{via:ne()}],"gradient-to-pos":[{to:ne()}],"gradient-from":[{from:I()}],"gradient-via":[{via:I()}],"gradient-to":[{to:I()}],rounded:[{rounded:Ae()}],"rounded-s":[{"rounded-s":Ae()}],"rounded-e":[{"rounded-e":Ae()}],"rounded-t":[{"rounded-t":Ae()}],"rounded-r":[{"rounded-r":Ae()}],"rounded-b":[{"rounded-b":Ae()}],"rounded-l":[{"rounded-l":Ae()}],"rounded-ss":[{"rounded-ss":Ae()}],"rounded-se":[{"rounded-se":Ae()}],"rounded-ee":[{"rounded-ee":Ae()}],"rounded-es":[{"rounded-es":Ae()}],"rounded-tl":[{"rounded-tl":Ae()}],"rounded-tr":[{"rounded-tr":Ae()}],"rounded-br":[{"rounded-br":Ae()}],"rounded-bl":[{"rounded-bl":Ae()}],"border-w":[{border:Y()}],"border-w-x":[{"border-x":Y()}],"border-w-y":[{"border-y":Y()}],"border-w-s":[{"border-s":Y()}],"border-w-e":[{"border-e":Y()}],"border-w-t":[{"border-t":Y()}],"border-w-r":[{"border-r":Y()}],"border-w-b":[{"border-b":Y()}],"border-w-l":[{"border-l":Y()}],"divide-x":[{"divide-x":Y()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Y()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...pe(),"hidden","none"]}],"divide-style":[{divide:[...pe(),"hidden","none"]}],"border-color":[{border:I()}],"border-color-x":[{"border-x":I()}],"border-color-y":[{"border-y":I()}],"border-color-s":[{"border-s":I()}],"border-color-e":[{"border-e":I()}],"border-color-t":[{"border-t":I()}],"border-color-r":[{"border-r":I()}],"border-color-b":[{"border-b":I()}],"border-color-l":[{"border-l":I()}],"divide-color":[{divide:I()}],"outline-style":[{outline:[...pe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[mt,We,Ge]}],"outline-w":[{outline:["",mt,Qo,Jr]}],"outline-color":[{outline:I()}],shadow:[{shadow:["","none",m,Ul,Dl]}],"shadow-color":[{shadow:I()}],"inset-shadow":[{"inset-shadow":["none",g,Ul,Dl]}],"inset-shadow-color":[{"inset-shadow":I()}],"ring-w":[{ring:Y()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:I()}],"ring-offset-w":[{"ring-offset":[mt,Jr]}],"ring-offset-color":[{"ring-offset":I()}],"inset-ring-w":[{"inset-ring":Y()}],"inset-ring-color":[{"inset-ring":I()}],"text-shadow":[{"text-shadow":["none",y,Ul,Dl]}],"text-shadow-color":[{"text-shadow":I()}],opacity:[{opacity:[mt,We,Ge]}],"mix-blend":[{"mix-blend":[...we(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":we()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[mt]}],"mask-image-linear-from-pos":[{"mask-linear-from":me()}],"mask-image-linear-to-pos":[{"mask-linear-to":me()}],"mask-image-linear-from-color":[{"mask-linear-from":I()}],"mask-image-linear-to-color":[{"mask-linear-to":I()}],"mask-image-t-from-pos":[{"mask-t-from":me()}],"mask-image-t-to-pos":[{"mask-t-to":me()}],"mask-image-t-from-color":[{"mask-t-from":I()}],"mask-image-t-to-color":[{"mask-t-to":I()}],"mask-image-r-from-pos":[{"mask-r-from":me()}],"mask-image-r-to-pos":[{"mask-r-to":me()}],"mask-image-r-from-color":[{"mask-r-from":I()}],"mask-image-r-to-color":[{"mask-r-to":I()}],"mask-image-b-from-pos":[{"mask-b-from":me()}],"mask-image-b-to-pos":[{"mask-b-to":me()}],"mask-image-b-from-color":[{"mask-b-from":I()}],"mask-image-b-to-color":[{"mask-b-to":I()}],"mask-image-l-from-pos":[{"mask-l-from":me()}],"mask-image-l-to-pos":[{"mask-l-to":me()}],"mask-image-l-from-color":[{"mask-l-from":I()}],"mask-image-l-to-color":[{"mask-l-to":I()}],"mask-image-x-from-pos":[{"mask-x-from":me()}],"mask-image-x-to-pos":[{"mask-x-to":me()}],"mask-image-x-from-color":[{"mask-x-from":I()}],"mask-image-x-to-color":[{"mask-x-to":I()}],"mask-image-y-from-pos":[{"mask-y-from":me()}],"mask-image-y-to-pos":[{"mask-y-to":me()}],"mask-image-y-from-color":[{"mask-y-from":I()}],"mask-image-y-to-color":[{"mask-y-to":I()}],"mask-image-radial":[{"mask-radial":[We,Ge]}],"mask-image-radial-from-pos":[{"mask-radial-from":me()}],"mask-image-radial-to-pos":[{"mask-radial-to":me()}],"mask-image-radial-from-color":[{"mask-radial-from":I()}],"mask-image-radial-to-color":[{"mask-radial-to":I()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":R()}],"mask-image-conic-pos":[{"mask-conic":[mt]}],"mask-image-conic-from-pos":[{"mask-conic-from":me()}],"mask-image-conic-to-pos":[{"mask-conic-to":me()}],"mask-image-conic-from-color":[{"mask-conic-from":I()}],"mask-image-conic-to-color":[{"mask-conic-to":I()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ue()}],"mask-repeat":[{mask:oe()}],"mask-size":[{mask:O()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",We,Ge]}],filter:[{filter:["","none",We,Ge]}],blur:[{blur:Ce()}],brightness:[{brightness:[mt,We,Ge]}],contrast:[{contrast:[mt,We,Ge]}],"drop-shadow":[{"drop-shadow":["","none",S,Ul,Dl]}],"drop-shadow-color":[{"drop-shadow":I()}],grayscale:[{grayscale:["",mt,We,Ge]}],"hue-rotate":[{"hue-rotate":[mt,We,Ge]}],invert:[{invert:["",mt,We,Ge]}],saturate:[{saturate:[mt,We,Ge]}],sepia:[{sepia:["",mt,We,Ge]}],"backdrop-filter":[{"backdrop-filter":["","none",We,Ge]}],"backdrop-blur":[{"backdrop-blur":Ce()}],"backdrop-brightness":[{"backdrop-brightness":[mt,We,Ge]}],"backdrop-contrast":[{"backdrop-contrast":[mt,We,Ge]}],"backdrop-grayscale":[{"backdrop-grayscale":["",mt,We,Ge]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[mt,We,Ge]}],"backdrop-invert":[{"backdrop-invert":["",mt,We,Ge]}],"backdrop-opacity":[{"backdrop-opacity":[mt,We,Ge]}],"backdrop-saturate":[{"backdrop-saturate":[mt,We,Ge]}],"backdrop-sepia":[{"backdrop-sepia":["",mt,We,Ge]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":k()}],"border-spacing-x":[{"border-spacing-x":k()}],"border-spacing-y":[{"border-spacing-y":k()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",We,Ge]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[mt,"initial",We,Ge]}],ease:[{ease:["linear","initial",x,We,Ge]}],delay:[{delay:[mt,We,Ge]}],animate:[{animate:["none",D,We,Ge]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[M,We,Ge]}],"perspective-origin":[{"perspective-origin":V()}],rotate:[{rotate:qe()}],"rotate-x":[{"rotate-x":qe()}],"rotate-y":[{"rotate-y":qe()}],"rotate-z":[{"rotate-z":qe()}],scale:[{scale:ke()}],"scale-x":[{"scale-x":ke()}],"scale-y":[{"scale-y":ke()}],"scale-z":[{"scale-z":ke()}],"scale-3d":["scale-3d"],skew:[{skew:Pt()}],"skew-x":[{"skew-x":Pt()}],"skew-y":[{"skew-y":Pt()}],transform:[{transform:[We,Ge,"","none","gpu","cpu"]}],"transform-origin":[{origin:V()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Rt()}],"translate-x":[{"translate-x":Rt()}],"translate-y":[{"translate-y":Rt()}],"translate-z":[{"translate-z":Rt()}],"translate-none":["translate-none"],accent:[{accent:I()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:I()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",We,Ge]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":k()}],"scroll-mx":[{"scroll-mx":k()}],"scroll-my":[{"scroll-my":k()}],"scroll-ms":[{"scroll-ms":k()}],"scroll-me":[{"scroll-me":k()}],"scroll-mt":[{"scroll-mt":k()}],"scroll-mr":[{"scroll-mr":k()}],"scroll-mb":[{"scroll-mb":k()}],"scroll-ml":[{"scroll-ml":k()}],"scroll-p":[{"scroll-p":k()}],"scroll-px":[{"scroll-px":k()}],"scroll-py":[{"scroll-py":k()}],"scroll-ps":[{"scroll-ps":k()}],"scroll-pe":[{"scroll-pe":k()}],"scroll-pt":[{"scroll-pt":k()}],"scroll-pr":[{"scroll-pr":k()}],"scroll-pb":[{"scroll-pb":k()}],"scroll-pl":[{"scroll-pl":k()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",We,Ge]}],fill:[{fill:["none",...I()]}],"stroke-w":[{stroke:[mt,Qo,Jr,md]}],stroke:[{stroke:["none",...I()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},_S=Jy(vS);function xS(...i){return _S(Cv(i))}const yS=ky("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),ic=_e.forwardRef(({className:i,variant:e,size:t,asChild:s=!1,...o},l)=>{const c=s?Ly:"button";return T.jsx(c,{className:xS(yS({variant:e,size:t,className:i})),ref:l,...o})});ic.displayName="Button";function SS(){return T.jsxs("div",{className:"max-w-4xl mx-auto text-white",children:[T.jsx("h1",{className:"text-5xl font-bold mb-8",children:"The Order of Marzod - A Mystical Brotherhood of Truth and Revelation"}),T.jsxs("div",{className:"space-y-8 text-lg",children:[T.jsx("p",{className:"leading-relaxed",children:"Across the vast tapestry of human history, civilizations have worshiped gods—divine figures of power, wisdom, and creation. From Ather to Pangu, Ra to Baldur, and An to the countless others etched into myth and legend, they have guided the hearts and minds of generations. But what if they were all echoes of a singular truth? What if, through the distortion of time, language barriers, cultural shifts, and the evolution of storytelling, their origins were lost in translation—fragments of a greater entity?"}),T.jsx("p",{className:"leading-relaxed",children:"Welcome to The Order of Marzod, an enigmatic community where ranks and roles signify wisdom, leadership, and belonging. Here, seekers of truth uncover the mysteries that have shaped the world's religions and mythologies. We do not merely study history—we rewrite it, uncovering what was hidden beneath centuries of fragmentation."}),T.jsxs("div",{className:"bg-black bg-opacity-50 p-6 rounded-lg",children:[T.jsx("h2",{className:"text-3xl font-bold mb-4",children:"The Lost Truth: One Source, Many Names"}),T.jsx("p",{className:"leading-relaxed",children:"Long before gods were named, before they were adapted to fit the beliefs of emerging civilizations, they existed under one unifying force—Marzod. Each deity, each legend, each divine revelation finds its roots in The Order of Marzod. Through ages of retellings, reinterpretations, and cultural reshaping, the pure essence of Marzod splintered into many forms, each tailored to the lands and people who embraced them."}),T.jsx("p",{className:"mt-4 leading-relaxed",children:"This knowledge has remained buried—until now. Our purpose is not to erase history, but to illuminate it, piecing together what was lost to time."})]}),T.jsxs("div",{className:"bg-black bg-opacity-50 p-6 rounded-lg",children:[T.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Ranks of Knowledge and Leadership"}),T.jsx("p",{className:"leading-relaxed",children:"Within The Order of Marzod, every member holds a role—a position earned through wisdom, enlightenment, and dedication. Your rank is not merely a title; it reflects your understanding of the ancient truths and your commitment to unveiling reality from illusion."})]}),T.jsxs("div",{className:"text-center mt-12",children:[T.jsx("p",{className:"text-2xl mb-4",children:"Are you ready to transcend conventional understanding?"}),T.jsx("p",{className:"text-2xl mb-8",children:"Are you prepared to step beyond the veil and discover the origins of all belief?"}),T.jsx("p",{className:"text-3xl font-bold",children:"This is not just a community—it is a revelation."}),T.jsx("p",{className:"text-4xl font-bold mt-8",children:"Enter The Order of Marzod."})]})]})]})}function ES(){return T.jsxs("div",{className:"text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10 scroll-smooth",children:[T.jsx("div",{className:"fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"}),T.jsx("h1",{className:"text-4xl font-bold mb-16 text-center text-shadow-lg",children:"About The Order of Marzod"}),T.jsxs("section",{className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[T.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"Our History"}),T.jsx("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:T.jsx("p",{className:"indent-8",children:"The Order of Marzod is dedicated to the pursuit of knowledge and understanding of the great Mysteries of the Universe. Through careful study and rigorous practice, we seek to illuminate the world and advance human understanding."})})]}),T.jsxs("section",{className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[T.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"Our Mission"}),T.jsx("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:T.jsx("p",{className:"indent-8",children:"We strive to create a community of dedicated seekers who share in the pursuit of knowledge. Our members range from novices to experienced keepers, each contributing to our collective understanding."})})]}),T.jsxs("section",{className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[T.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"Join Us"}),T.jsx("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:T.jsx("p",{className:"indent-8",children:"If you possess a fervent desire to tread the path of knowledge and wish to join our Order, we welcome you to begin your journey as a Novice. Through dedication and study, you may progress through our ranks and contribute to our understanding of the Universe's mysteries."})})]})]})}function Bv(i,e){return function(){return i.apply(e,arguments)}}const{toString:MS}=Object.prototype,{getPrototypeOf:Jf}=Object,{iterator:Sc,toStringTag:zv}=Symbol,Ec=(i=>e=>{const t=MS.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),yi=i=>(i=i.toLowerCase(),e=>Ec(e)===i),Mc=i=>e=>typeof e===i,{isArray:vo}=Array,ca=Mc("undefined");function wS(i){return i!==null&&!ca(i)&&i.constructor!==null&&!ca(i.constructor)&&Hn(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const Hv=yi("ArrayBuffer");function bS(i){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(i):e=i&&i.buffer&&Hv(i.buffer),e}const TS=Mc("string"),Hn=Mc("function"),Vv=Mc("number"),wc=i=>i!==null&&typeof i=="object",AS=i=>i===!0||i===!1,rc=i=>{if(Ec(i)!=="object")return!1;const e=Jf(i);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(zv in i)&&!(Sc in i)},CS=yi("Date"),RS=yi("File"),PS=yi("Blob"),NS=yi("FileList"),LS=i=>wc(i)&&Hn(i.pipe),DS=i=>{let e;return i&&(typeof FormData=="function"&&i instanceof FormData||Hn(i.append)&&((e=Ec(i))==="formdata"||e==="object"&&Hn(i.toString)&&i.toString()==="[object FormData]"))},US=yi("URLSearchParams"),[IS,OS,FS,kS]=["ReadableStream","Request","Response","Headers"].map(yi),BS=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function va(i,e,{allOwnKeys:t=!1}={}){if(i===null||typeof i>"u")return;let s,o;if(typeof i!="object"&&(i=[i]),vo(i))for(s=0,o=i.length;s<o;s++)e.call(null,i[s],s,i);else{const l=t?Object.getOwnPropertyNames(i):Object.keys(i),c=l.length;let d;for(s=0;s<c;s++)d=l[s],e.call(null,i[d],d,i)}}function Gv(i,e){e=e.toLowerCase();const t=Object.keys(i);let s=t.length,o;for(;s-- >0;)if(o=t[s],e===o.toLowerCase())return o;return null}const cs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Wv=i=>!ca(i)&&i!==cs;function tf(){const{caseless:i}=Wv(this)&&this||{},e={},t=(s,o)=>{const l=i&&Gv(e,o)||o;rc(e[l])&&rc(s)?e[l]=tf(e[l],s):rc(s)?e[l]=tf({},s):vo(s)?e[l]=s.slice():e[l]=s};for(let s=0,o=arguments.length;s<o;s++)arguments[s]&&va(arguments[s],t);return e}const zS=(i,e,t,{allOwnKeys:s}={})=>(va(e,(o,l)=>{t&&Hn(o)?i[l]=Bv(o,t):i[l]=o},{allOwnKeys:s}),i),HS=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),VS=(i,e,t,s)=>{i.prototype=Object.create(e.prototype,s),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:e.prototype}),t&&Object.assign(i.prototype,t)},GS=(i,e,t,s)=>{let o,l,c;const d={};if(e=e||{},i==null)return e;do{for(o=Object.getOwnPropertyNames(i),l=o.length;l-- >0;)c=o[l],(!s||s(c,i,e))&&!d[c]&&(e[c]=i[c],d[c]=!0);i=t!==!1&&Jf(i)}while(i&&(!t||t(i,e))&&i!==Object.prototype);return e},WS=(i,e,t)=>{i=String(i),(t===void 0||t>i.length)&&(t=i.length),t-=e.length;const s=i.indexOf(e,t);return s!==-1&&s===t},jS=i=>{if(!i)return null;if(vo(i))return i;let e=i.length;if(!Vv(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=i[e];return t},XS=(i=>e=>i&&e instanceof i)(typeof Uint8Array<"u"&&Jf(Uint8Array)),qS=(i,e)=>{const s=(i&&i[Sc]).call(i);let o;for(;(o=s.next())&&!o.done;){const l=o.value;e.call(i,l[0],l[1])}},$S=(i,e)=>{let t;const s=[];for(;(t=i.exec(e))!==null;)s.push(t);return s},YS=yi("HTMLFormElement"),KS=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,s,o){return s.toUpperCase()+o}),rg=(({hasOwnProperty:i})=>(e,t)=>i.call(e,t))(Object.prototype),ZS=yi("RegExp"),jv=(i,e)=>{const t=Object.getOwnPropertyDescriptors(i),s={};va(t,(o,l)=>{let c;(c=e(o,l,i))!==!1&&(s[l]=c||o)}),Object.defineProperties(i,s)},JS=i=>{jv(i,(e,t)=>{if(Hn(i)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const s=i[t];if(Hn(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},QS=(i,e)=>{const t={},s=o=>{o.forEach(l=>{t[l]=!0})};return vo(i)?s(i):s(String(i).split(e)),t},eE=()=>{},tE=(i,e)=>i!=null&&Number.isFinite(i=+i)?i:e;function nE(i){return!!(i&&Hn(i.append)&&i[zv]==="FormData"&&i[Sc])}const iE=i=>{const e=new Array(10),t=(s,o)=>{if(wc(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[o]=s;const l=vo(s)?[]:{};return va(s,(c,d)=>{const f=t(c,o+1);!ca(f)&&(l[d]=f)}),e[o]=void 0,l}}return s};return t(i,0)},rE=yi("AsyncFunction"),sE=i=>i&&(wc(i)||Hn(i))&&Hn(i.then)&&Hn(i.catch),Xv=((i,e)=>i?setImmediate:e?((t,s)=>(cs.addEventListener("message",({source:o,data:l})=>{o===cs&&l===t&&s.length&&s.shift()()},!1),o=>{s.push(o),cs.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Hn(cs.postMessage)),oE=typeof queueMicrotask<"u"?queueMicrotask.bind(cs):typeof process<"u"&&process.nextTick||Xv,aE=i=>i!=null&&Hn(i[Sc]),re={isArray:vo,isArrayBuffer:Hv,isBuffer:wS,isFormData:DS,isArrayBufferView:bS,isString:TS,isNumber:Vv,isBoolean:AS,isObject:wc,isPlainObject:rc,isReadableStream:IS,isRequest:OS,isResponse:FS,isHeaders:kS,isUndefined:ca,isDate:CS,isFile:RS,isBlob:PS,isRegExp:ZS,isFunction:Hn,isStream:LS,isURLSearchParams:US,isTypedArray:XS,isFileList:NS,forEach:va,merge:tf,extend:zS,trim:BS,stripBOM:HS,inherits:VS,toFlatObject:GS,kindOf:Ec,kindOfTest:yi,endsWith:WS,toArray:jS,forEachEntry:qS,matchAll:$S,isHTMLForm:YS,hasOwnProperty:rg,hasOwnProp:rg,reduceDescriptors:jv,freezeMethods:JS,toObjectSet:QS,toCamelCase:KS,noop:eE,toFiniteNumber:tE,findKey:Gv,global:cs,isContextDefined:Wv,isSpecCompliantForm:nE,toJSONObject:iE,isAsyncFn:rE,isThenable:sE,setImmediate:Xv,asap:oE,isIterable:aE};function dt(i,e,t,s,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),s&&(this.request=s),o&&(this.response=o,this.status=o.status?o.status:null)}re.inherits(dt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:re.toJSONObject(this.config),code:this.code,status:this.status}}});const qv=dt.prototype,$v={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{$v[i]={value:i}});Object.defineProperties(dt,$v);Object.defineProperty(qv,"isAxiosError",{value:!0});dt.from=(i,e,t,s,o,l)=>{const c=Object.create(qv);return re.toFlatObject(i,c,function(f){return f!==Error.prototype},d=>d!=="isAxiosError"),dt.call(c,i.message,e,t,s,o),c.cause=i,c.name=i.name,l&&Object.assign(c,l),c};const lE=null;function nf(i){return re.isPlainObject(i)||re.isArray(i)}function Yv(i){return re.endsWith(i,"[]")?i.slice(0,-2):i}function sg(i,e,t){return i?i.concat(e).map(function(o,l){return o=Yv(o),!t&&l?"["+o+"]":o}).join(t?".":""):e}function cE(i){return re.isArray(i)&&!i.some(nf)}const uE=re.toFlatObject(re,{},null,function(e){return/^is[A-Z]/.test(e)});function bc(i,e,t){if(!re.isObject(i))throw new TypeError("target must be an object");e=e||new FormData,t=re.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,_){return!re.isUndefined(_[M])});const s=t.metaTokens,o=t.visitor||m,l=t.dots,c=t.indexes,f=(t.Blob||typeof Blob<"u"&&Blob)&&re.isSpecCompliantForm(e);if(!re.isFunction(o))throw new TypeError("visitor must be a function");function p(E){if(E===null)return"";if(re.isDate(E))return E.toISOString();if(!f&&re.isBlob(E))throw new dt("Blob is not supported. Use a Buffer instead.");return re.isArrayBuffer(E)||re.isTypedArray(E)?f&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function m(E,M,_){let x=E;if(E&&!_&&typeof E=="object"){if(re.endsWith(M,"{}"))M=s?M:M.slice(0,-2),E=JSON.stringify(E);else if(re.isArray(E)&&cE(E)||(re.isFileList(E)||re.endsWith(M,"[]"))&&(x=re.toArray(E)))return M=Yv(M),x.forEach(function(N,R){!(re.isUndefined(N)||N===null)&&e.append(c===!0?sg([M],R,l):c===null?M:M+"[]",p(N))}),!1}return nf(E)?!0:(e.append(sg(_,M,l),p(E)),!1)}const g=[],y=Object.assign(uE,{defaultVisitor:m,convertValue:p,isVisitable:nf});function S(E,M){if(!re.isUndefined(E)){if(g.indexOf(E)!==-1)throw Error("Circular reference detected in "+M.join("."));g.push(E),re.forEach(E,function(x,D){(!(re.isUndefined(x)||x===null)&&o.call(e,x,re.isString(D)?D.trim():D,M,y))===!0&&S(x,M?M.concat(D):[D])}),g.pop()}}if(!re.isObject(i))throw new TypeError("data must be an object");return S(i),e}function og(i){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function Qf(i,e){this._pairs=[],i&&bc(i,this,e)}const Kv=Qf.prototype;Kv.append=function(e,t){this._pairs.push([e,t])};Kv.toString=function(e){const t=e?function(s){return e.call(this,s,og)}:og;return this._pairs.map(function(o){return t(o[0])+"="+t(o[1])},"").join("&")};function dE(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Zv(i,e,t){if(!e)return i;const s=t&&t.encode||dE;re.isFunction(t)&&(t={serialize:t});const o=t&&t.serialize;let l;if(o?l=o(e,t):l=re.isURLSearchParams(e)?e.toString():new Qf(e,t).toString(s),l){const c=i.indexOf("#");c!==-1&&(i=i.slice(0,c)),i+=(i.indexOf("?")===-1?"?":"&")+l}return i}class ag{constructor(){this.handlers=[]}use(e,t,s){return this.handlers.push({fulfilled:e,rejected:t,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){re.forEach(this.handlers,function(s){s!==null&&e(s)})}}const Jv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},fE=typeof URLSearchParams<"u"?URLSearchParams:Qf,hE=typeof FormData<"u"?FormData:null,pE=typeof Blob<"u"?Blob:null,mE={isBrowser:!0,classes:{URLSearchParams:fE,FormData:hE,Blob:pE},protocols:["http","https","file","blob","url","data"]},eh=typeof window<"u"&&typeof document<"u",rf=typeof navigator=="object"&&navigator||void 0,gE=eh&&(!rf||["ReactNative","NativeScript","NS"].indexOf(rf.product)<0),vE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",_E=eh&&window.location.href||"http://localhost",xE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:eh,hasStandardBrowserEnv:gE,hasStandardBrowserWebWorkerEnv:vE,navigator:rf,origin:_E},Symbol.toStringTag,{value:"Module"})),bn={...xE,...mE};function yE(i,e){return bc(i,new bn.classes.URLSearchParams,Object.assign({visitor:function(t,s,o,l){return bn.isNode&&re.isBuffer(t)?(this.append(s,t.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)}},e))}function SE(i){return re.matchAll(/\w+|\[(\w*)]/g,i).map(e=>e[0]==="[]"?"":e[1]||e[0])}function EE(i){const e={},t=Object.keys(i);let s;const o=t.length;let l;for(s=0;s<o;s++)l=t[s],e[l]=i[l];return e}function Qv(i){function e(t,s,o,l){let c=t[l++];if(c==="__proto__")return!0;const d=Number.isFinite(+c),f=l>=t.length;return c=!c&&re.isArray(o)?o.length:c,f?(re.hasOwnProp(o,c)?o[c]=[o[c],s]:o[c]=s,!d):((!o[c]||!re.isObject(o[c]))&&(o[c]=[]),e(t,s,o[c],l)&&re.isArray(o[c])&&(o[c]=EE(o[c])),!d)}if(re.isFormData(i)&&re.isFunction(i.entries)){const t={};return re.forEachEntry(i,(s,o)=>{e(SE(s),o,t,0)}),t}return null}function ME(i,e,t){if(re.isString(i))try{return(e||JSON.parse)(i),re.trim(i)}catch(s){if(s.name!=="SyntaxError")throw s}return(t||JSON.stringify)(i)}const _a={transitional:Jv,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const s=t.getContentType()||"",o=s.indexOf("application/json")>-1,l=re.isObject(e);if(l&&re.isHTMLForm(e)&&(e=new FormData(e)),re.isFormData(e))return o?JSON.stringify(Qv(e)):e;if(re.isArrayBuffer(e)||re.isBuffer(e)||re.isStream(e)||re.isFile(e)||re.isBlob(e)||re.isReadableStream(e))return e;if(re.isArrayBufferView(e))return e.buffer;if(re.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let d;if(l){if(s.indexOf("application/x-www-form-urlencoded")>-1)return yE(e,this.formSerializer).toString();if((d=re.isFileList(e))||s.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return bc(d?{"files[]":e}:e,f&&new f,this.formSerializer)}}return l||o?(t.setContentType("application/json",!1),ME(e)):e}],transformResponse:[function(e){const t=this.transitional||_a.transitional,s=t&&t.forcedJSONParsing,o=this.responseType==="json";if(re.isResponse(e)||re.isReadableStream(e))return e;if(e&&re.isString(e)&&(s&&!this.responseType||o)){const c=!(t&&t.silentJSONParsing)&&o;try{return JSON.parse(e)}catch(d){if(c)throw d.name==="SyntaxError"?dt.from(d,dt.ERR_BAD_RESPONSE,this,null,this.response):d}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:bn.classes.FormData,Blob:bn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};re.forEach(["delete","get","head","post","put","patch"],i=>{_a.headers[i]={}});const wE=re.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bE=i=>{const e={};let t,s,o;return i&&i.split(`
`).forEach(function(c){o=c.indexOf(":"),t=c.substring(0,o).trim().toLowerCase(),s=c.substring(o+1).trim(),!(!t||e[t]&&wE[t])&&(t==="set-cookie"?e[t]?e[t].push(s):e[t]=[s]:e[t]=e[t]?e[t]+", "+s:s)}),e},lg=Symbol("internals");function ea(i){return i&&String(i).trim().toLowerCase()}function sc(i){return i===!1||i==null?i:re.isArray(i)?i.map(sc):String(i)}function TE(i){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=t.exec(i);)e[s[1]]=s[2];return e}const AE=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function gd(i,e,t,s,o){if(re.isFunction(s))return s.call(this,e,t);if(o&&(e=t),!!re.isString(e)){if(re.isString(s))return e.indexOf(s)!==-1;if(re.isRegExp(s))return s.test(e)}}function CE(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,s)=>t.toUpperCase()+s)}function RE(i,e){const t=re.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(i,s+t,{value:function(o,l,c){return this[s].call(this,e,o,l,c)},configurable:!0})})}let Vn=class{constructor(e){e&&this.set(e)}set(e,t,s){const o=this;function l(d,f,p){const m=ea(f);if(!m)throw new Error("header name must be a non-empty string");const g=re.findKey(o,m);(!g||o[g]===void 0||p===!0||p===void 0&&o[g]!==!1)&&(o[g||f]=sc(d))}const c=(d,f)=>re.forEach(d,(p,m)=>l(p,m,f));if(re.isPlainObject(e)||e instanceof this.constructor)c(e,t);else if(re.isString(e)&&(e=e.trim())&&!AE(e))c(bE(e),t);else if(re.isObject(e)&&re.isIterable(e)){let d={},f,p;for(const m of e){if(!re.isArray(m))throw TypeError("Object iterator must return a key-value pair");d[p=m[0]]=(f=d[p])?re.isArray(f)?[...f,m[1]]:[f,m[1]]:m[1]}c(d,t)}else e!=null&&l(t,e,s);return this}get(e,t){if(e=ea(e),e){const s=re.findKey(this,e);if(s){const o=this[s];if(!t)return o;if(t===!0)return TE(o);if(re.isFunction(t))return t.call(this,o,s);if(re.isRegExp(t))return t.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ea(e),e){const s=re.findKey(this,e);return!!(s&&this[s]!==void 0&&(!t||gd(this,this[s],s,t)))}return!1}delete(e,t){const s=this;let o=!1;function l(c){if(c=ea(c),c){const d=re.findKey(s,c);d&&(!t||gd(s,s[d],d,t))&&(delete s[d],o=!0)}}return re.isArray(e)?e.forEach(l):l(e),o}clear(e){const t=Object.keys(this);let s=t.length,o=!1;for(;s--;){const l=t[s];(!e||gd(this,this[l],l,e,!0))&&(delete this[l],o=!0)}return o}normalize(e){const t=this,s={};return re.forEach(this,(o,l)=>{const c=re.findKey(s,l);if(c){t[c]=sc(o),delete t[l];return}const d=e?CE(l):String(l).trim();d!==l&&delete t[l],t[d]=sc(o),s[d]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return re.forEach(this,(s,o)=>{s!=null&&s!==!1&&(t[o]=e&&re.isArray(s)?s.join(", "):s)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const s=new this(e);return t.forEach(o=>s.set(o)),s}static accessor(e){const s=(this[lg]=this[lg]={accessors:{}}).accessors,o=this.prototype;function l(c){const d=ea(c);s[d]||(RE(o,c),s[d]=!0)}return re.isArray(e)?e.forEach(l):l(e),this}};Vn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);re.reduceDescriptors(Vn.prototype,({value:i},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>i,set(s){this[t]=s}}});re.freezeMethods(Vn);function vd(i,e){const t=this||_a,s=e||t,o=Vn.from(s.headers);let l=s.data;return re.forEach(i,function(d){l=d.call(t,l,o.normalize(),e?e.status:void 0)}),o.normalize(),l}function e_(i){return!!(i&&i.__CANCEL__)}function _o(i,e,t){dt.call(this,i??"canceled",dt.ERR_CANCELED,e,t),this.name="CanceledError"}re.inherits(_o,dt,{__CANCEL__:!0});function t_(i,e,t){const s=t.config.validateStatus;!t.status||!s||s(t.status)?i(t):e(new dt("Request failed with status code "+t.status,[dt.ERR_BAD_REQUEST,dt.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function PE(i){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return e&&e[1]||""}function NE(i,e){i=i||10;const t=new Array(i),s=new Array(i);let o=0,l=0,c;return e=e!==void 0?e:1e3,function(f){const p=Date.now(),m=s[l];c||(c=p),t[o]=f,s[o]=p;let g=l,y=0;for(;g!==o;)y+=t[g++],g=g%i;if(o=(o+1)%i,o===l&&(l=(l+1)%i),p-c<e)return;const S=m&&p-m;return S?Math.round(y*1e3/S):void 0}}function LE(i,e){let t=0,s=1e3/e,o,l;const c=(p,m=Date.now())=>{t=m,o=null,l&&(clearTimeout(l),l=null),i.apply(null,p)};return[(...p)=>{const m=Date.now(),g=m-t;g>=s?c(p,m):(o=p,l||(l=setTimeout(()=>{l=null,c(o)},s-g)))},()=>o&&c(o)]}const mc=(i,e,t=3)=>{let s=0;const o=NE(50,250);return LE(l=>{const c=l.loaded,d=l.lengthComputable?l.total:void 0,f=c-s,p=o(f),m=c<=d;s=c;const g={loaded:c,total:d,progress:d?c/d:void 0,bytes:f,rate:p||void 0,estimated:p&&d&&m?(d-c)/p:void 0,event:l,lengthComputable:d!=null,[e?"download":"upload"]:!0};i(g)},t)},cg=(i,e)=>{const t=i!=null;return[s=>e[0]({lengthComputable:t,total:i,loaded:s}),e[1]]},ug=i=>(...e)=>re.asap(()=>i(...e)),DE=bn.hasStandardBrowserEnv?((i,e)=>t=>(t=new URL(t,bn.origin),i.protocol===t.protocol&&i.host===t.host&&(e||i.port===t.port)))(new URL(bn.origin),bn.navigator&&/(msie|trident)/i.test(bn.navigator.userAgent)):()=>!0,UE=bn.hasStandardBrowserEnv?{write(i,e,t,s,o,l){const c=[i+"="+encodeURIComponent(e)];re.isNumber(t)&&c.push("expires="+new Date(t).toGMTString()),re.isString(s)&&c.push("path="+s),re.isString(o)&&c.push("domain="+o),l===!0&&c.push("secure"),document.cookie=c.join("; ")},read(i){const e=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(i){this.write(i,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function IE(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function OE(i,e){return e?i.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):i}function n_(i,e,t){let s=!IE(e);return i&&(s||t==!1)?OE(i,e):e}const dg=i=>i instanceof Vn?{...i}:i;function ps(i,e){e=e||{};const t={};function s(p,m,g,y){return re.isPlainObject(p)&&re.isPlainObject(m)?re.merge.call({caseless:y},p,m):re.isPlainObject(m)?re.merge({},m):re.isArray(m)?m.slice():m}function o(p,m,g,y){if(re.isUndefined(m)){if(!re.isUndefined(p))return s(void 0,p,g,y)}else return s(p,m,g,y)}function l(p,m){if(!re.isUndefined(m))return s(void 0,m)}function c(p,m){if(re.isUndefined(m)){if(!re.isUndefined(p))return s(void 0,p)}else return s(void 0,m)}function d(p,m,g){if(g in e)return s(p,m);if(g in i)return s(void 0,p)}const f={url:l,method:l,data:l,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:d,headers:(p,m,g)=>o(dg(p),dg(m),g,!0)};return re.forEach(Object.keys(Object.assign({},i,e)),function(m){const g=f[m]||o,y=g(i[m],e[m],m);re.isUndefined(y)&&g!==d||(t[m]=y)}),t}const i_=i=>{const e=ps({},i);let{data:t,withXSRFToken:s,xsrfHeaderName:o,xsrfCookieName:l,headers:c,auth:d}=e;e.headers=c=Vn.from(c),e.url=Zv(n_(e.baseURL,e.url,e.allowAbsoluteUrls),i.params,i.paramsSerializer),d&&c.set("Authorization","Basic "+btoa((d.username||"")+":"+(d.password?unescape(encodeURIComponent(d.password)):"")));let f;if(re.isFormData(t)){if(bn.hasStandardBrowserEnv||bn.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if((f=c.getContentType())!==!1){const[p,...m]=f?f.split(";").map(g=>g.trim()).filter(Boolean):[];c.setContentType([p||"multipart/form-data",...m].join("; "))}}if(bn.hasStandardBrowserEnv&&(s&&re.isFunction(s)&&(s=s(e)),s||s!==!1&&DE(e.url))){const p=o&&l&&UE.read(l);p&&c.set(o,p)}return e},FE=typeof XMLHttpRequest<"u",kE=FE&&function(i){return new Promise(function(t,s){const o=i_(i);let l=o.data;const c=Vn.from(o.headers).normalize();let{responseType:d,onUploadProgress:f,onDownloadProgress:p}=o,m,g,y,S,E;function M(){S&&S(),E&&E(),o.cancelToken&&o.cancelToken.unsubscribe(m),o.signal&&o.signal.removeEventListener("abort",m)}let _=new XMLHttpRequest;_.open(o.method.toUpperCase(),o.url,!0),_.timeout=o.timeout;function x(){if(!_)return;const N=Vn.from("getAllResponseHeaders"in _&&_.getAllResponseHeaders()),V={data:!d||d==="text"||d==="json"?_.responseText:_.response,status:_.status,statusText:_.statusText,headers:N,config:i,request:_};t_(function(F){t(F),M()},function(F){s(F),M()},V),_=null}"onloadend"in _?_.onloadend=x:_.onreadystatechange=function(){!_||_.readyState!==4||_.status===0&&!(_.responseURL&&_.responseURL.indexOf("file:")===0)||setTimeout(x)},_.onabort=function(){_&&(s(new dt("Request aborted",dt.ECONNABORTED,i,_)),_=null)},_.onerror=function(){s(new dt("Network Error",dt.ERR_NETWORK,i,_)),_=null},_.ontimeout=function(){let R=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const V=o.transitional||Jv;o.timeoutErrorMessage&&(R=o.timeoutErrorMessage),s(new dt(R,V.clarifyTimeoutError?dt.ETIMEDOUT:dt.ECONNABORTED,i,_)),_=null},l===void 0&&c.setContentType(null),"setRequestHeader"in _&&re.forEach(c.toJSON(),function(R,V){_.setRequestHeader(V,R)}),re.isUndefined(o.withCredentials)||(_.withCredentials=!!o.withCredentials),d&&d!=="json"&&(_.responseType=o.responseType),p&&([y,E]=mc(p,!0),_.addEventListener("progress",y)),f&&_.upload&&([g,S]=mc(f),_.upload.addEventListener("progress",g),_.upload.addEventListener("loadend",S)),(o.cancelToken||o.signal)&&(m=N=>{_&&(s(!N||N.type?new _o(null,i,_):N),_.abort(),_=null)},o.cancelToken&&o.cancelToken.subscribe(m),o.signal&&(o.signal.aborted?m():o.signal.addEventListener("abort",m)));const D=PE(o.url);if(D&&bn.protocols.indexOf(D)===-1){s(new dt("Unsupported protocol "+D+":",dt.ERR_BAD_REQUEST,i));return}_.send(l||null)})},BE=(i,e)=>{const{length:t}=i=i?i.filter(Boolean):[];if(e||t){let s=new AbortController,o;const l=function(p){if(!o){o=!0,d();const m=p instanceof Error?p:this.reason;s.abort(m instanceof dt?m:new _o(m instanceof Error?m.message:m))}};let c=e&&setTimeout(()=>{c=null,l(new dt(`timeout ${e} of ms exceeded`,dt.ETIMEDOUT))},e);const d=()=>{i&&(c&&clearTimeout(c),c=null,i.forEach(p=>{p.unsubscribe?p.unsubscribe(l):p.removeEventListener("abort",l)}),i=null)};i.forEach(p=>p.addEventListener("abort",l));const{signal:f}=s;return f.unsubscribe=()=>re.asap(d),f}},zE=function*(i,e){let t=i.byteLength;if(t<e){yield i;return}let s=0,o;for(;s<t;)o=s+e,yield i.slice(s,o),s=o},HE=async function*(i,e){for await(const t of VE(i))yield*zE(t,e)},VE=async function*(i){if(i[Symbol.asyncIterator]){yield*i;return}const e=i.getReader();try{for(;;){const{done:t,value:s}=await e.read();if(t)break;yield s}}finally{await e.cancel()}},fg=(i,e,t,s)=>{const o=HE(i,e);let l=0,c,d=f=>{c||(c=!0,s&&s(f))};return new ReadableStream({async pull(f){try{const{done:p,value:m}=await o.next();if(p){d(),f.close();return}let g=m.byteLength;if(t){let y=l+=g;t(y)}f.enqueue(new Uint8Array(m))}catch(p){throw d(p),p}},cancel(f){return d(f),o.return()}},{highWaterMark:2})},Tc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",r_=Tc&&typeof ReadableStream=="function",GE=Tc&&(typeof TextEncoder=="function"?(i=>e=>i.encode(e))(new TextEncoder):async i=>new Uint8Array(await new Response(i).arrayBuffer())),s_=(i,...e)=>{try{return!!i(...e)}catch{return!1}},WE=r_&&s_(()=>{let i=!1;const e=new Request(bn.origin,{body:new ReadableStream,method:"POST",get duplex(){return i=!0,"half"}}).headers.has("Content-Type");return i&&!e}),hg=64*1024,sf=r_&&s_(()=>re.isReadableStream(new Response("").body)),gc={stream:sf&&(i=>i.body)};Tc&&(i=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!gc[e]&&(gc[e]=re.isFunction(i[e])?t=>t[e]():(t,s)=>{throw new dt(`Response type '${e}' is not supported`,dt.ERR_NOT_SUPPORT,s)})})})(new Response);const jE=async i=>{if(i==null)return 0;if(re.isBlob(i))return i.size;if(re.isSpecCompliantForm(i))return(await new Request(bn.origin,{method:"POST",body:i}).arrayBuffer()).byteLength;if(re.isArrayBufferView(i)||re.isArrayBuffer(i))return i.byteLength;if(re.isURLSearchParams(i)&&(i=i+""),re.isString(i))return(await GE(i)).byteLength},XE=async(i,e)=>{const t=re.toFiniteNumber(i.getContentLength());return t??jE(e)},qE=Tc&&(async i=>{let{url:e,method:t,data:s,signal:o,cancelToken:l,timeout:c,onDownloadProgress:d,onUploadProgress:f,responseType:p,headers:m,withCredentials:g="same-origin",fetchOptions:y}=i_(i);p=p?(p+"").toLowerCase():"text";let S=BE([o,l&&l.toAbortSignal()],c),E;const M=S&&S.unsubscribe&&(()=>{S.unsubscribe()});let _;try{if(f&&WE&&t!=="get"&&t!=="head"&&(_=await XE(m,s))!==0){let V=new Request(e,{method:"POST",body:s,duplex:"half"}),z;if(re.isFormData(s)&&(z=V.headers.get("content-type"))&&m.setContentType(z),V.body){const[F,k]=cg(_,mc(ug(f)));s=fg(V.body,hg,F,k)}}re.isString(g)||(g=g?"include":"omit");const x="credentials"in Request.prototype;E=new Request(e,{...y,signal:S,method:t.toUpperCase(),headers:m.normalize().toJSON(),body:s,duplex:"half",credentials:x?g:void 0});let D=await fetch(E);const N=sf&&(p==="stream"||p==="response");if(sf&&(d||N&&M)){const V={};["status","statusText","headers"].forEach(P=>{V[P]=D[P]});const z=re.toFiniteNumber(D.headers.get("content-length")),[F,k]=d&&cg(z,mc(ug(d),!0))||[];D=new Response(fg(D.body,hg,F,()=>{k&&k(),M&&M()}),V)}p=p||"text";let R=await gc[re.findKey(gc,p)||"text"](D,i);return!N&&M&&M(),await new Promise((V,z)=>{t_(V,z,{data:R,headers:Vn.from(D.headers),status:D.status,statusText:D.statusText,config:i,request:E})})}catch(x){throw M&&M(),x&&x.name==="TypeError"&&/Load failed|fetch/i.test(x.message)?Object.assign(new dt("Network Error",dt.ERR_NETWORK,i,E),{cause:x.cause||x}):dt.from(x,x&&x.code,i,E)}}),of={http:lE,xhr:kE,fetch:qE};re.forEach(of,(i,e)=>{if(i){try{Object.defineProperty(i,"name",{value:e})}catch{}Object.defineProperty(i,"adapterName",{value:e})}});const pg=i=>`- ${i}`,$E=i=>re.isFunction(i)||i===null||i===!1,o_={getAdapter:i=>{i=re.isArray(i)?i:[i];const{length:e}=i;let t,s;const o={};for(let l=0;l<e;l++){t=i[l];let c;if(s=t,!$E(t)&&(s=of[(c=String(t)).toLowerCase()],s===void 0))throw new dt(`Unknown adapter '${c}'`);if(s)break;o[c||"#"+l]=s}if(!s){const l=Object.entries(o).map(([d,f])=>`adapter ${d} `+(f===!1?"is not supported by the environment":"is not available in the build"));let c=e?l.length>1?`since :
`+l.map(pg).join(`
`):" "+pg(l[0]):"as no adapter specified";throw new dt("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return s},adapters:of};function _d(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new _o(null,i)}function mg(i){return _d(i),i.headers=Vn.from(i.headers),i.data=vd.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),o_.getAdapter(i.adapter||_a.adapter)(i).then(function(s){return _d(i),s.data=vd.call(i,i.transformResponse,s),s.headers=Vn.from(s.headers),s},function(s){return e_(s)||(_d(i),s&&s.response&&(s.response.data=vd.call(i,i.transformResponse,s.response),s.response.headers=Vn.from(s.response.headers))),Promise.reject(s)})}const a_="1.9.0",Ac={};["object","boolean","number","function","string","symbol"].forEach((i,e)=>{Ac[i]=function(s){return typeof s===i||"a"+(e<1?"n ":" ")+i}});const gg={};Ac.transitional=function(e,t,s){function o(l,c){return"[Axios v"+a_+"] Transitional option '"+l+"'"+c+(s?". "+s:"")}return(l,c,d)=>{if(e===!1)throw new dt(o(c," has been removed"+(t?" in "+t:"")),dt.ERR_DEPRECATED);return t&&!gg[c]&&(gg[c]=!0,console.warn(o(c," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(l,c,d):!0}};Ac.spelling=function(e){return(t,s)=>(console.warn(`${s} is likely a misspelling of ${e}`),!0)};function YE(i,e,t){if(typeof i!="object")throw new dt("options must be an object",dt.ERR_BAD_OPTION_VALUE);const s=Object.keys(i);let o=s.length;for(;o-- >0;){const l=s[o],c=e[l];if(c){const d=i[l],f=d===void 0||c(d,l,i);if(f!==!0)throw new dt("option "+l+" must be "+f,dt.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new dt("Unknown option "+l,dt.ERR_BAD_OPTION)}}const oc={assertOptions:YE,validators:Ac},Ai=oc.validators;let fs=class{constructor(e){this.defaults=e||{},this.interceptors={request:new ag,response:new ag}}async request(e,t){try{return await this._request(e,t)}catch(s){if(s instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=o.stack?o.stack.replace(/^.+\n/,""):"";try{s.stack?l&&!String(s.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+l):s.stack=l}catch{}}throw s}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=ps(this.defaults,t);const{transitional:s,paramsSerializer:o,headers:l}=t;s!==void 0&&oc.assertOptions(s,{silentJSONParsing:Ai.transitional(Ai.boolean),forcedJSONParsing:Ai.transitional(Ai.boolean),clarifyTimeoutError:Ai.transitional(Ai.boolean)},!1),o!=null&&(re.isFunction(o)?t.paramsSerializer={serialize:o}:oc.assertOptions(o,{encode:Ai.function,serialize:Ai.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),oc.assertOptions(t,{baseUrl:Ai.spelling("baseURL"),withXsrfToken:Ai.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let c=l&&re.merge(l.common,l[t.method]);l&&re.forEach(["delete","get","head","post","put","patch","common"],E=>{delete l[E]}),t.headers=Vn.concat(c,l);const d=[];let f=!0;this.interceptors.request.forEach(function(M){typeof M.runWhen=="function"&&M.runWhen(t)===!1||(f=f&&M.synchronous,d.unshift(M.fulfilled,M.rejected))});const p=[];this.interceptors.response.forEach(function(M){p.push(M.fulfilled,M.rejected)});let m,g=0,y;if(!f){const E=[mg.bind(this),void 0];for(E.unshift.apply(E,d),E.push.apply(E,p),y=E.length,m=Promise.resolve(t);g<y;)m=m.then(E[g++],E[g++]);return m}y=d.length;let S=t;for(g=0;g<y;){const E=d[g++],M=d[g++];try{S=E(S)}catch(_){M.call(this,_);break}}try{m=mg.call(this,S)}catch(E){return Promise.reject(E)}for(g=0,y=p.length;g<y;)m=m.then(p[g++],p[g++]);return m}getUri(e){e=ps(this.defaults,e);const t=n_(e.baseURL,e.url,e.allowAbsoluteUrls);return Zv(t,e.params,e.paramsSerializer)}};re.forEach(["delete","get","head","options"],function(e){fs.prototype[e]=function(t,s){return this.request(ps(s||{},{method:e,url:t,data:(s||{}).data}))}});re.forEach(["post","put","patch"],function(e){function t(s){return function(l,c,d){return this.request(ps(d||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:l,data:c}))}}fs.prototype[e]=t(),fs.prototype[e+"Form"]=t(!0)});let KE=class l_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(l){t=l});const s=this;this.promise.then(o=>{if(!s._listeners)return;let l=s._listeners.length;for(;l-- >0;)s._listeners[l](o);s._listeners=null}),this.promise.then=o=>{let l;const c=new Promise(d=>{s.subscribe(d),l=d}).then(o);return c.cancel=function(){s.unsubscribe(l)},c},e(function(l,c,d){s.reason||(s.reason=new _o(l,c,d),t(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=s=>{e.abort(s)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new l_(function(o){e=o}),cancel:e}}};function ZE(i){return function(t){return i.apply(null,t)}}function JE(i){return re.isObject(i)&&i.isAxiosError===!0}const af={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(af).forEach(([i,e])=>{af[e]=i});function c_(i){const e=new fs(i),t=Bv(fs.prototype.request,e);return re.extend(t,fs.prototype,e,{allOwnKeys:!0}),re.extend(t,e,null,{allOwnKeys:!0}),t.create=function(o){return c_(ps(i,o))},t}const Lt=c_(_a);Lt.Axios=fs;Lt.CanceledError=_o;Lt.CancelToken=KE;Lt.isCancel=e_;Lt.VERSION=a_;Lt.toFormData=bc;Lt.AxiosError=dt;Lt.Cancel=Lt.CanceledError;Lt.all=function(e){return Promise.all(e)};Lt.spread=ZE;Lt.isAxiosError=JE;Lt.mergeConfig=ps;Lt.AxiosHeaders=Vn;Lt.formToJSON=i=>Qv(re.isHTMLForm(i)?new FormData(i):i);Lt.getAdapter=o_.getAdapter;Lt.HttpStatusCode=af;Lt.default=Lt;const{Axios:bC,AxiosError:TC,CanceledError:AC,isCancel:CC,CancelToken:RC,VERSION:PC,all:NC,Cancel:LC,isAxiosError:DC,spread:UC,toFormData:IC,AxiosHeaders:OC,HttpStatusCode:FC,formToJSON:kC,getAdapter:BC,mergeConfig:zC}=Lt;function QE(){const[i,e]=_e.useState(localStorage.getItem("userId")||""),[t,s]=_e.useState(localStorage.getItem("code")||""),[o,l]=_e.useState(""),c=async()=>{try{await Lt.post("http://localhost:5000/api/referrals/use",{userId:i,referralCode:o}),alert("Referral code accepted!")}catch{alert("Error submitting referral code.")}},d=()=>{navigator.clipboard.writeText(t),alert("Referral code copied!")};return T.jsxs("div",{className:"text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10",children:[T.jsx("div",{className:"fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"}),T.jsx("h1",{className:"text-4xl font-bold mb-16 text-center text-shadow-lg",children:"Referral Program"}),T.jsxs("section",{className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[T.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"Invite Others"}),T.jsxs("div",{className:"space-y-6",children:[T.jsx("p",{className:"text-lg leading-relaxed text-shadow-lg",children:"Share us and invite. For each person who signs up using your link and makes a post, you will be rewarded."}),T.jsxs("div",{className:"flex items-center gap-4",children:[T.jsx("input",{type:"text",className:"flex-1 p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all",readOnly:!0,value:t}),T.jsx("button",{onClick:d,className:"px-6 py-4 bg-blue-600/80 hover:bg-blue-600 rounded transition-all text-white font-semibold text-shadow whitespace-nowrap",children:"Copy Code"})]})]})]}),T.jsxs("section",{className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[T.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"Were you invited?"}),T.jsxs("div",{className:"space-y-6",children:[T.jsx("p",{className:"text-lg leading-relaxed text-shadow-lg",children:"Enter the invite code to give credit to the person who referred you:"}),T.jsxs("div",{className:"space-y-4",children:[T.jsx("input",{type:"text",className:"w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all",value:o,onChange:f=>l(f.target.value),placeholder:"Enter referral code..."}),T.jsx("button",{onClick:c,className:"px-6 py-4 bg-green-600/80 hover:bg-green-600 rounded transition-all text-white font-semibold text-shadow",children:"Submit Code"})]})]})]})]})}function eM(){const[i,e]=_e.useState([]),[t,s]=_e.useState(""),[o]=_e.useState(localStorage.getItem("userId")||null),[l,c]=_e.useState({}),[d,f]=_e.useState({});_e.useEffect(()=>{p()},[]);const p=async()=>{const M=(await Lt.get("http://localhost:5000/api/posts")).data;e(M);for(let _ of M)m(_.id)},m=async E=>{const M=await Lt.get(`http://localhost:5000/api/comments/${E}`);c(_=>({..._,[E]:M.data}))},g=async()=>{t.trim()&&(await Lt.post("http://localhost:5000/api/posts",{userId:o,content:t}),s(""),p())},y=async E=>{d[E]&&(await Lt.post("http://localhost:5000/api/comments",{userId:o,postId:E,content:d[E]}),f(M=>({...M,[E]:""})),m(E))},S=async(E,M)=>{await Lt.post(`http://localhost:5000/api/posts/${E}/vote`,{vote:M}),p()};return T.jsxs("div",{className:"text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10",children:[T.jsx("div",{className:"fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"}),T.jsx("h1",{className:"text-4xl font-bold mb-16 text-center text-shadow-lg",children:"Community"}),T.jsxs("section",{className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[T.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"Share Your Thoughts"}),T.jsxs("div",{className:"space-y-4",children:[T.jsx("textarea",{className:"w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none resize-none transition-all",rows:"4",placeholder:"Share your thoughts...",value:t,onChange:E=>s(E.target.value)}),T.jsx("button",{className:"px-6 py-2 bg-blue-600/80 hover:bg-blue-600 rounded transition-all text-white font-semibold text-shadow",onClick:g,children:"Post"})]})]}),T.jsx("section",{className:"space-y-8",children:i.map(E=>{var M;return T.jsxs("div",{className:"bg-black/20 backdrop-blur-sm rounded-lg p-6 transition-all hover:bg-black/25",children:[T.jsxs("div",{className:"mb-4",children:[T.jsx("p",{className:"font-semibold text-lg text-shadow-lg mb-2",children:E.username}),T.jsx("p",{className:"text-lg leading-relaxed text-shadow-lg mb-4",children:E.content}),T.jsxs("div",{className:"flex gap-6",children:[T.jsxs("button",{onClick:()=>S(E.id,"up"),className:"flex items-center gap-2 text-shadow hover:text-blue-400 transition-colors",children:["👍 ",T.jsx("span",{children:E.upvotes})]}),T.jsxs("button",{onClick:()=>S(E.id,"down"),className:"flex items-center gap-2 text-shadow hover:text-red-400 transition-colors",children:["👎 ",T.jsx("span",{children:E.downvotes})]})]})]}),T.jsxs("div",{className:"bg-black/30 rounded-lg p-4",children:[T.jsx("h4",{className:"text-lg font-semibold mb-4 text-shadow-lg",children:"Comments"}),T.jsxs("div",{className:"space-y-4",children:[(M=l[E.id])==null?void 0:M.map(_=>T.jsx("div",{className:"border-t border-white/10 pt-3",children:T.jsxs("p",{className:"text-shadow-lg",children:[T.jsx("strong",{className:"text-blue-400",children:_.username}),": ",_.content]})},_.id)),T.jsxs("div",{className:"mt-4 space-y-2",children:[T.jsx("textarea",{className:"w-full p-3 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none resize-none transition-all",rows:"2",placeholder:"Add a comment...",value:d[E.id]||"",onChange:_=>f(x=>({...x,[E.id]:_.target.value}))}),T.jsx("button",{onClick:()=>y(E.id),className:"px-4 py-1 bg-green-600/80 hover:bg-green-600 rounded transition-all text-white font-semibold text-shadow",children:"Comment"})]})]})]})]},E.id)})})]})}function tM(){return T.jsxs("div",{className:"text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10 scroll-smooth",children:[T.jsx("div",{className:"fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"}),T.jsx("h1",{className:"text-4xl font-bold mb-16 text-center text-shadow-lg",children:"Ranks and Roles in The Order of Marzod"}),T.jsxs("nav",{className:"sticky top-4 mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[T.jsx("h2",{className:"text-2xl font-semibold mb-6 text-shadow-lg",children:"Table of Contents"}),T.jsxs("ul",{className:"space-y-3 text-lg",children:[T.jsx("li",{children:T.jsx("a",{href:"#council",className:"text-blue-400 hover:text-blue-300 text-shadow-lg",children:"1. The Marzodian Council"})}),T.jsx("li",{children:T.jsx("a",{href:"#specialties",className:"text-blue-400 hover:text-blue-300 text-shadow-lg",children:"1.1. Of Specialties and Refinements"})}),T.jsx("li",{children:T.jsx("a",{href:"#collectives",className:"text-blue-400 hover:text-blue-300 text-shadow-lg",children:"1.2. Of Collectives"})}),T.jsx("li",{children:T.jsx("a",{href:"#ranks",className:"text-blue-400 hover:text-blue-300 text-shadow-lg",children:"2. Ranks"})}),T.jsx("li",{children:T.jsx("a",{href:"#trials-ascension",className:"text-blue-400 hover:text-blue-300 text-shadow-lg",children:"Trials of Ascension"})}),T.jsx("li",{children:T.jsx("a",{href:"#trials",className:"text-blue-400 hover:text-blue-300 text-shadow-lg",children:"The Trials"})})]})]}),T.jsxs("section",{id:"council",className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[T.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"1. The Marzodian Council"}),T.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[T.jsx("p",{className:"indent-8",children:"The Marzodian Council is the chief body of the Order, the final authority in the interpretation of doctrine, and shall be comprised of the three Keepers possessing the greatest number of Specialties and Refinements. Should one fit to serve choose not to do so, the mantle of leadership shall pass to the next in succession."}),T.jsx("p",{className:"indent-8",children:"A seat upon the Council may not be revoked, save by death, voluntary resignation, or by the will of the other two members. In all matters brought before the Council, the decision of the majority shall prevail, and such a ruling may not be revisited for one year, save by the Council's own unanimous decree."}),T.jsx("p",{className:"indent-8",children:"A gathering of the Council shall be called upon the following occasions to render a decision, and no decree thus made may be reversed except by the formal declaration of no less than nine tenths of all Chief Keepers, or unanimous decree of the Council."})]})]}),T.jsxs("section",{id:"specialties",className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[T.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"1.1. Of Specialties and Refinements"}),T.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[T.jsx("p",{className:"indent-8",children:"A Specialty is attained through the submission of a treatise, composed by a Keeper, containing no fewer than seven pages on a singular subject. Acceptable subject matter shall generally encompass fields such as physics, chemistry, alchemy, mathematics, natural history, psychology, mythology, religion, ancient cultures, philosophy, mysticism or the occult, and other matters which advance knowledge of the nature of the universe or ancient peoples, from whom much insight into mysterious forces may be gleaned."}),T.jsx("p",{className:"indent-8",children:"This treatise shall be presented before the Council, who shall judge it according to its merit in truth, insight, and distinction from the Keeper's other Specialties, which is to say, whether it sufficiently broadens the Keeper's knowledge to merit further accreditation. Should the work fail in this last, but otherwise be of good quality, it shall be considered a Refinement of a Specialty, or a deepening of existing knowledge. By their judgment, the Council may approve or reject such a work."})]})]}),T.jsxs("section",{id:"collectives",className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[T.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"1.2. Of Collectives"}),T.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[T.jsx("p",{className:"indent-8",children:"A Collective is the local manifestation of the Order, a sanctuary of knowledge, a place of learning for its students, and a gathering ground for its members. It is incumbent upon all members of the Order to be attached to a Collective, most often the one nearest their home, though this is not of necessity."}),T.jsx("p",{className:"indent-8",children:"Service to the Collective is commanded by the Chief Keeper and is the shared duty of all its members. Should a Keeper desire to head a Collective, they may do so by decree of the Council, dedicating their time to the recruitment and instruction of students."}),T.jsx("p",{className:"indent-8",children:"If any Keeper desires to found a Collective, or lay claim to one established, let the matter be presented to the Council, who shall bestow the position upon the Keeper most suited, choosing by the number of Specialties and Refinements they possess and the greatest need among the regions of the Earth. Yet, as with the Council itself, no Keeper is bound to accept such a charge, but may refuse it if they so wish."})]})]}),T.jsxs("section",{id:"ranks",className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[T.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"2. Ranks"}),T.jsxs("div",{className:"space-y-12",children:[T.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[T.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Chief Keeper"}),T.jsx("p",{className:"indent-8",children:"As the sovereign of their Collective, a Chief Keeper may in all things follow their own counsel and govern the Collective according to their wisdom, provided they do not transgress the Prime nor Secondary Laws. Nevertheless, if a Chief Keeper is unable or disinclined to resolve a matter, let him bring the matter before the Council for their judgment."})]}),T.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[T.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Keeper"}),T.jsx("p",{className:"indent-8",children:"Any Seeker, upon the acquisition of a Specialty, ascends to the station of Keeper, thereby gaining sufficient stature to guide a Collective or serve as an Overseer. Additional Specialties and Refinements may be obtained, augmenting and enhancing their station, advancing their standing in appointment to Chief Keeper or to the Council."})]}),T.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[T.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Seeker"}),T.jsx("p",{className:"indent-8",children:"A Seeker is numbered among the Order, although not yet of such stature as may permit them into positions of leadership, which are generally reserved for the Keepers, though a Chief Keeper may assign certain duties to Seekers should no qualified Keeper be found to accept the role."})]}),T.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[T.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Disciple"}),T.jsx("p",{className:"indent-8",children:"A Disciple is one who has attained an advanced stage of study, in which they may begin to bear minor responsibilities of membership and perform in sacred rituals involving human spirits and deities."})]}),T.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[T.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Initiate"}),T.jsx("p",{className:"indent-8",children:"An Initiate is one who has but commenced the journey of knowledge, and is constrained to performance in rituals involving the spirits of Nature and the Elements."})]}),T.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[T.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Novice"}),T.jsx("p",{className:"indent-8",children:"A Novice is one who possesses the fervent desire to tread the path of knowledge. There exists no particular requirement to attain this rank, save for the earnest wish to learn and the judgment of a Chief Keeper that the individual may bring credit and honor to the Order. Novices may not perform in rituals, but devote themselves to study of the foundational tenets of the Order and understanding of the Mysteries of the Universe."})]})]})]}),T.jsxs("section",{id:"trials-ascension",className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[T.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"Trials of Ascension"}),T.jsx("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:T.jsx("p",{className:"indent-8",children:"The Trials of Ascension are the means by which one may ascend in station. They may be administered by any Keeper, who, upon a student's request, is bound to honor it within seven days, or else seek another Keeper to act in their stead. The full procedure is set forth below."})}),T.jsxs("div",{className:"mt-8 space-y-12",children:[T.jsxs("div",{children:[T.jsx("h3",{className:"text-2xl font-semibold mb-4 text-shadow-lg",children:"1. Of Overseers"}),T.jsx("p",{className:"indent-8 text-lg leading-relaxed text-shadow-lg",children:"Overseers shall hold no station lower than that of Keeper, and it is their charge to conduct the Trials. An Overseer shall adhere scrupulously to all established forms of the Trials, and the word of the Overseer shall be deemed absolute, save in cases as specified in the following section, or by order of the Council."})]}),T.jsxs("div",{children:[T.jsx("h3",{className:"text-2xl font-semibold mb-4 text-shadow-lg",children:"2. Of Special Permissions"}),T.jsx("p",{className:"indent-8 text-lg leading-relaxed text-shadow-lg",children:"In the ensuing requirements, the Aspirant is invited to exercise their own judgement in the choosing of many of the particulars. In such matters, the Overseer may exercise their discretion regarding the validity of the Aspirant's choices, but must yield to any prior permissions granted by a Keeper."})]}),T.jsxs("div",{children:[T.jsx("h3",{className:"text-2xl font-semibold mb-4 text-shadow-lg",children:"3. Of Marzodian Runes"}),T.jsx("p",{className:"indent-8 text-lg leading-relaxed text-shadow-lg",children:"Fluency in the Runes is expected of all Seekers, and all material in attainment of the station of Keeper and any further Specialties or Refinements must be executed by hand using the Runes. The mysteries of the Runes are not to be revealed to any below the rank of Seeker, on pain of expulsion from the Order."})]})]})]}),T.jsxs("section",{id:"trials",className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[T.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"The Trials"}),T.jsxs("div",{className:"space-y-12",children:[T.jsxs("div",{children:[T.jsx("h3",{className:"text-2xl font-semibold mb-4 text-shadow-lg",children:"1. Novice"}),T.jsxs("ul",{className:"list-disc list-inside space-y-4 text-lg leading-relaxed text-shadow-lg ml-4",children:[T.jsx("li",{children:"Comprehends and accepts the Statement of Purpose, Core Principle, the Three Laws, and any further laws, vows, or rituals required of them by their Collective."}),T.jsx("li",{children:"Privileges and Responsibilities of Station: The Novice is granted admission into a Collective, though they must not disturb the peace. They shall share equally in toils of the community and perform in no rituals until advancing to the station of Initiate."}),T.jsx("li",{children:"During this time, the Novice shall receive and study materials of general education, including the Books of Water, Metal, and Earth."})]})]}),T.jsxs("div",{children:[T.jsx("h3",{className:"text-2xl font-semibold mb-4 text-shadow-lg",children:"2. Initiate"}),T.jsxs("ul",{className:"list-disc list-inside space-y-4 text-lg leading-relaxed text-shadow-lg ml-4",children:[T.jsx("li",{children:"Journal: Seven pages"}),T.jsxs("li",{children:["Treatises:",T.jsxs("ul",{className:"list-disc list-inside ml-8 mt-2",children:[T.jsx("li",{children:"One Mythology Treatise"}),T.jsx("li",{children:"The Nature of Marzod, Spirits, and the Fourth Dimension"})]})]}),T.jsxs("li",{children:["Writings:",T.jsxs("ul",{className:"list-disc list-inside ml-8 mt-2",children:[T.jsx("li",{children:"Letter and Reply"}),T.jsx("li",{children:"Languages"})]})]}),T.jsx("li",{children:"Privileges and Responsibilities of Rank: In addition to the privileges granted as a Novice, the Initiate may now partake in rituals befitting their station. However, they remain under the guidance of more experienced members and shall not yet assume leadership of such rituals."})]})]}),T.jsxs("div",{children:[T.jsx("h3",{className:"text-2xl font-semibold mb-4 text-shadow-lg",children:"3. Disciple"}),T.jsxs("ul",{className:"list-disc list-inside space-y-4 text-lg leading-relaxed text-shadow-lg ml-4",children:[T.jsx("li",{children:"Journal: Fourteen pages"}),T.jsx("li",{children:"Rituals: Three"}),T.jsxs("li",{children:["Treatises:",T.jsxs("ul",{className:"list-disc list-inside ml-8 mt-2",children:[T.jsx("li",{children:"Two Mythology Treatises"}),T.jsx("li",{children:"100 Medicinal and Ritual Herbs"})]})]}),T.jsxs("li",{children:["Writings:",T.jsxs("ul",{className:"list-disc list-inside ml-8 mt-2",children:[T.jsx("li",{children:"Letter and Reply"}),T.jsx("li",{children:"Languages"}),T.jsx("li",{children:"Three rituals"})]})]}),T.jsx("li",{children:"Privileges and Responsibilities of Rank: In addition to the privileges of Initiate, the student may now engage in rituals suited to their new station and may lead rituals suited to the rank of Initiate."})]})]}),T.jsxs("div",{children:[T.jsx("h3",{className:"text-2xl font-semibold mb-4 text-shadow-lg",children:"4. Seeker"}),T.jsxs("ul",{className:"list-disc list-inside space-y-4 text-lg leading-relaxed text-shadow-lg ml-4",children:[T.jsxs("li",{children:["Journal: Twenty-one pages total",T.jsxs("ul",{className:"list-disc list-inside ml-8 mt-2",children:[T.jsx("li",{children:"The fourteen pages requisite to attain the rank of Disciple must be written once more and perfected"}),T.jsx("li",{children:"A treatise addressing misconceptions previously held and now corrected"}),T.jsx("li",{children:"Seven additional pages"})]})]}),T.jsx("li",{children:"Rituals: Four"}),T.jsxs("li",{children:["Treatises:",T.jsxs("ul",{className:"list-disc list-inside ml-8 mt-2",children:[T.jsx("li",{children:"Four Mythology Treatises"}),T.jsx("li",{children:"Comparison: 20 Deities of Disparate Cultures"}),T.jsx("li",{children:"Incorrect Items of Student Journal"})]})]}),T.jsx("li",{children:"Privileges and Responsibilities of Rank: Upon reaching the station of Seeker, the individual has become a full member of the Order."})]})]}),T.jsxs("div",{children:[T.jsx("h3",{className:"text-2xl font-semibold mb-4 text-shadow-lg",children:"5. Keeper"}),T.jsx("p",{className:"mb-4 text-lg leading-relaxed text-shadow-lg",children:"While the preceding stations may be attained through Trials administered by any Keeper, the final station must be secured through a Trial overseen by the Council. All written materials composed for attainment of this station must be executed using the Marzodian Runes."}),T.jsxs("ul",{className:"list-disc list-inside space-y-4 text-lg leading-relaxed text-shadow-lg ml-4",children:[T.jsx("li",{children:"Rituals: Seven"}),T.jsxs("li",{children:["Treatises:",T.jsxs("ul",{className:"list-disc list-inside ml-8 mt-2",children:[T.jsx("li",{children:"Seven Mythology Treatises"}),T.jsx("li",{children:"Seven pages upon a singular subject, to be the Keeper's Specialty"})]})]}),T.jsxs("li",{children:["Writings:",T.jsxs("ul",{className:"list-disc list-inside ml-8 mt-2",children:[T.jsx("li",{children:"Letter and Reply"}),T.jsx("li",{children:"Languages, consisting of new Writings in all three previous languages and one new language"}),T.jsx("li",{children:"Seven rituals"})]})]}),T.jsx("li",{children:"Privileges and Responsibilities of Rank: By order of the Council, a Keeper may ascend to the position of Head of a Collective, granted upon the grounds of knowledge and need."})]})]})]})]})]})}function nM(){return T.jsxs("div",{className:"text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10 scroll-smooth",children:[T.jsx("div",{className:"fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"}),T.jsx("h1",{className:"text-4xl font-bold mb-16 text-center text-shadow-lg",children:"Statement of Purpose"}),T.jsx("section",{className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:T.jsx("pre",{className:"whitespace-pre-wrap text-lg leading-relaxed text-shadow-lg",children:`Statement of Purpose

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
*Privileges and Responsibilities of Rank: By order of the Council, a Keeper may ascend to the position of Head of a Collective, granted upon the grounds of knowledge and need. In this station, the Keeper shall be expected to devote the greater part of their time to the recruitment and training of students.`})})]})}function iM(){const[i,e]=_e.useState(""),[t,s]=_e.useState(""),[o,l]=_e.useState(null),c=async()=>{try{const d=await Lt.post("http://localhost:5000/api/users/login",{username:i,password:t});l(d.data.userId),localStorage.setItem("userId",d.data.userId),localStorage.setItem("code",d.data.code),window.location.href="/"}catch{alert("Invalid credentials")}};return T.jsxs("div",{className:"text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10",children:[T.jsx("div",{className:"fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"}),T.jsx("h1",{className:"text-4xl font-bold mb-16 text-center text-shadow-lg",children:"Login"}),T.jsx("section",{className:"max-w-md mx-auto mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:T.jsxs("div",{className:"space-y-6",children:[T.jsxs("div",{className:"space-y-2",children:[T.jsx("label",{className:"block text-lg font-semibold text-shadow-lg",children:"Username"}),T.jsx("input",{className:"w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all",type:"text",placeholder:"Enter your username",value:i,onChange:d=>e(d.target.value)})]}),T.jsxs("div",{className:"space-y-2",children:[T.jsx("label",{className:"block text-lg font-semibold text-shadow-lg",children:"Password"}),T.jsx("input",{className:"w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all",type:"password",placeholder:"Enter your password",value:t,onChange:d=>s(d.target.value)})]}),T.jsx("button",{className:"w-full px-6 py-4 bg-green-600/80 hover:bg-green-600 rounded transition-all text-white font-semibold text-shadow text-lg",onClick:c,children:"Login"})]})})]})}function rM(){const[i,e]=_e.useState(""),[t,s]=_e.useState(""),[o,l]=_e.useState(""),[c,d]=_e.useState(null),f=async()=>{try{const p=await Lt.post("http://localhost:5000/api/users/register",{username:i,password:t,inviteCode:o});localStorage.setItem("code",p.data.code),localStorage.setItem("userId",p.data.userId),window.location.href="/"}catch(p){alert("Signup failed: "+p.response.data.error)}};return T.jsxs("div",{className:"text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10",children:[T.jsx("div",{className:"fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"}),T.jsx("h1",{className:"text-4xl font-bold mb-16 text-center text-shadow-lg",children:"Sign Up"}),T.jsxs("section",{className:"max-w-md mx-auto mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[T.jsxs("div",{className:"space-y-6",children:[T.jsxs("div",{className:"space-y-2",children:[T.jsx("label",{className:"block text-lg font-semibold text-shadow-lg",children:"Username"}),T.jsx("input",{className:"w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all",type:"text",placeholder:"Choose a username",value:i,onChange:p=>e(p.target.value)})]}),T.jsxs("div",{className:"space-y-2",children:[T.jsx("label",{className:"block text-lg font-semibold text-shadow-lg",children:"Password"}),T.jsx("input",{className:"w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all",type:"password",placeholder:"Choose a password",value:t,onChange:p=>s(p.target.value)})]}),T.jsxs("div",{className:"space-y-2",children:[T.jsx("label",{className:"block text-lg font-semibold text-shadow-lg",children:"Referral Code"}),T.jsx("input",{className:"w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all",type:"text",placeholder:"Enter referral code (optional)",value:o,onChange:p=>l(p.target.value)})]}),T.jsx("button",{className:"w-full px-6 py-4 bg-blue-600/80 hover:bg-blue-600 rounded transition-all text-white font-semibold text-shadow text-lg",onClick:f,children:"Sign Up"})]}),c&&T.jsxs("div",{className:"mt-8 bg-black/30 p-6 rounded-lg border border-white/10",children:[T.jsx("p",{className:"text-lg font-semibold text-shadow-lg mb-2",children:"Your referral code:"}),T.jsx("code",{className:"block p-4 bg-black/40 rounded text-blue-400 text-lg font-mono text-shadow-lg",children:c})]})]})]})}function sM(){const[i,e]=_e.useState([]);_e.useEffect(()=>{Lt.get("/api/admin/users").then(s=>{e(s.data)}).catch(s=>{console.error("Error fetching users:",s)})},[]);const t=(s,o)=>{Lt.post(`/api/admin/${o}/${s}`).then(()=>{e(l=>l.map(c=>c.username===s?{...c,[o]:!0}:c))}).catch(l=>console.error(l))};return T.jsxs("div",{className:"p-6",children:[T.jsx("h1",{className:"text-2xl font-bold mb-4",children:"User Management"}),T.jsxs("table",{className:"min-w-full bg-white border border-gray-200 rounded-md shadow-md",children:[T.jsx("thead",{className:"bg-gray-100 text-left",children:T.jsxs("tr",{children:[T.jsx("th",{className:"p-3 border-b",children:"Username"}),T.jsx("th",{className:"p-3 border-b",children:"Email"}),T.jsx("th",{className:"p-3 border-b",children:"Referral Code"}),T.jsx("th",{className:"p-3 border-b",children:"Actions"})]})}),T.jsx("tbody",{children:i.map(s=>T.jsxs("tr",{className:"border-b",children:[T.jsx("td",{className:"p-3",children:s.username}),T.jsx("td",{className:"p-3",children:s.email}),T.jsx("td",{className:"p-3",children:s.referral_code||"N/A"}),T.jsxs("td",{className:"p-3 space-x-2",children:[T.jsx("button",{onClick:()=>t(s.username,"ban"),className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"Ban"}),T.jsx("button",{onClick:()=>t(s.username,"mute"),className:"px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600",children:"Mute"})]})]},s.username))})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const th="176",oM=0,vg=1,aM=2,u_=1,lM=2,Yi=3,Fr=0,Gn=1,Ki=2,Ir=0,oo=1,_g=2,xg=3,yg=4,cM=5,as=100,uM=101,dM=102,fM=103,hM=104,pM=200,mM=201,gM=202,vM=203,lf=204,cf=205,_M=206,xM=207,yM=208,SM=209,EM=210,MM=211,wM=212,bM=213,TM=214,uf=0,df=1,ff=2,lo=3,hf=4,pf=5,mf=6,gf=7,d_=0,AM=1,CM=2,Or=0,RM=1,PM=2,NM=3,LM=4,DM=5,UM=6,IM=7,f_=300,co=301,uo=302,vf=303,_f=304,Cc=306,ua=1e3,us=1001,xf=1002,xi=1003,OM=1004,Il=1005,vi=1006,xd=1007,ds=1008,er=1009,h_=1010,p_=1011,da=1012,nh=1013,ms=1014,Zi=1015,xa=1016,ih=1017,rh=1018,fa=1020,m_=35902,g_=1021,v_=1022,_i=1023,ha=1026,pa=1027,__=1028,sh=1029,x_=1030,oh=1031,ah=1033,ac=33776,lc=33777,cc=33778,uc=33779,yf=35840,Sf=35841,Ef=35842,Mf=35843,wf=36196,bf=37492,Tf=37496,Af=37808,Cf=37809,Rf=37810,Pf=37811,Nf=37812,Lf=37813,Df=37814,Uf=37815,If=37816,Of=37817,Ff=37818,kf=37819,Bf=37820,zf=37821,dc=36492,Hf=36494,Vf=36495,y_=36283,Gf=36284,Wf=36285,jf=36286,FM=3200,kM=3201,BM=0,zM=1,Lr="",ri="srgb",fo="srgb-linear",vc="linear",It="srgb",js=7680,Sg=519,HM=512,VM=513,GM=514,S_=515,WM=516,jM=517,XM=518,qM=519,Eg=35044,Mg="300 es",Ji=2e3,_c=2001;class xo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yd=Math.PI/180,Xf=180/Math.PI;function ya(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[s&255]+Mn[s>>8&255]+Mn[s>>16&255]+Mn[s>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function $M(i,e){return(i%e+e)%e}function Sd(i,e,t){return(1-t)*i+t*e}function ta(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ut{constructor(e=0,t=0){Ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,s,o,l,c,d,f,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,d,f,p)}set(e,t,s,o,l,c,d,f,p){const m=this.elements;return m[0]=e,m[1]=o,m[2]=d,m[3]=t,m[4]=l,m[5]=f,m[6]=s,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],d=s[3],f=s[6],p=s[1],m=s[4],g=s[7],y=s[2],S=s[5],E=s[8],M=o[0],_=o[3],x=o[6],D=o[1],N=o[4],R=o[7],V=o[2],z=o[5],F=o[8];return l[0]=c*M+d*D+f*V,l[3]=c*_+d*N+f*z,l[6]=c*x+d*R+f*F,l[1]=p*M+m*D+g*V,l[4]=p*_+m*N+g*z,l[7]=p*x+m*R+g*F,l[2]=y*M+S*D+E*V,l[5]=y*_+S*N+E*z,l[8]=y*x+S*R+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],m=e[8];return t*c*m-t*d*p-s*l*m+s*d*f+o*l*p-o*c*f}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],m=e[8],g=m*c-d*p,y=d*f-m*l,S=p*l-c*f,E=t*g+s*y+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(o*p-m*s)*M,e[2]=(d*s-o*c)*M,e[3]=y*M,e[4]=(m*t-o*f)*M,e[5]=(o*l-d*t)*M,e[6]=S*M,e[7]=(s*f-p*t)*M,e[8]=(c*t-s*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,d){const f=Math.cos(l),p=Math.sin(l);return this.set(s*f,s*p,-s*(f*c+p*d)+c+e,-o*p,o*f,-o*(-p*c+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Ed.makeScale(e,t)),this}rotate(e){return this.premultiply(Ed.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ed.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ed=new ft;function E_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function YM(){const i=ma("canvas");return i.style.display="block",i}const wg={};function fc(i){i in wg||(wg[i]=!0,console.warn(i))}function KM(i,e,t){return new Promise(function(s,o){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function ZM(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function JM(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bg=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tg=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QM(){const i={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===It&&(o.r=Qi(o.r),o.g=Qi(o.g),o.b=Qi(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===It&&(o.r=ao(o.r),o.g=ao(o.g),o.b=ao(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Lr?vc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[fo]:{primaries:e,whitePoint:s,transfer:vc,toXYZ:bg,fromXYZ:Tg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:s,transfer:It,toXYZ:bg,fromXYZ:Tg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),i}const Ct=QM();function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xs;class ew{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Xs===void 0&&(Xs=ma("canvas")),Xs.width=e.width,Xs.height=e.height;const o=Xs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=Xs}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ma("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Qi(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Qi(t[s]/255)*255):t[s]=Qi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tw=0;class lh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tw++}),this.uuid=ya(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?l.push(Md(o[c].image)):l.push(Md(o[c]))}else l=Md(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Md(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ew.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nw=0;class Ln extends xo{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,s=us,o=us,l=vi,c=ds,d=_i,f=er,p=Ln.DEFAULT_ANISOTROPY,m=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nw++}),this.uuid=ya(),this.name="",this.source=new lh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ua:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ua:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=f_;Ln.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,s=0,o=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const f=e.elements,p=f[0],m=f[4],g=f[8],y=f[1],S=f[5],E=f[9],M=f[2],_=f[6],x=f[10];if(Math.abs(m-y)<.01&&Math.abs(g-M)<.01&&Math.abs(E-_)<.01){if(Math.abs(m+y)<.1&&Math.abs(g+M)<.1&&Math.abs(E+_)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(p+1)/2,R=(S+1)/2,V=(x+1)/2,z=(m+y)/4,F=(g+M)/4,k=(E+_)/4;return N>R&&N>V?N<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(N),o=z/s,l=F/s):R>V?R<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),s=z/o,l=k/o):V<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),s=F/l,o=k/l),this.set(s,o,l,t),this}let D=Math.sqrt((_-E)*(_-E)+(g-M)*(g-M)+(y-m)*(y-m));return Math.abs(D)<.001&&(D=1),this.x=(_-E)/D,this.y=(g-M)/D,this.z=(y-m)/D,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iw extends xo{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth?s.depth:1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const o={width:e,height:t,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const l=new Ln(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new lh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends iw{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class M_ extends Ln{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=xi,this.minFilter=xi,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rw extends Ln{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=xi,this.minFilter=xi,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sa{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,d){let f=s[o+0],p=s[o+1],m=s[o+2],g=s[o+3];const y=l[c+0],S=l[c+1],E=l[c+2],M=l[c+3];if(d===0){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=g;return}if(d===1){e[t+0]=y,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(g!==M||f!==y||p!==S||m!==E){let _=1-d;const x=f*y+p*S+m*E+g*M,D=x>=0?1:-1,N=1-x*x;if(N>Number.EPSILON){const V=Math.sqrt(N),z=Math.atan2(V,x*D);_=Math.sin(_*z)/V,d=Math.sin(d*z)/V}const R=d*D;if(f=f*_+y*R,p=p*_+S*R,m=m*_+E*R,g=g*_+M*R,_===1-d){const V=1/Math.sqrt(f*f+p*p+m*m+g*g);f*=V,p*=V,m*=V,g*=V}}e[t]=f,e[t+1]=p,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,s,o,l,c){const d=s[o],f=s[o+1],p=s[o+2],m=s[o+3],g=l[c],y=l[c+1],S=l[c+2],E=l[c+3];return e[t]=d*E+m*g+f*S-p*y,e[t+1]=f*E+m*y+p*g-d*S,e[t+2]=p*E+m*S+d*y-f*g,e[t+3]=m*E-d*g-f*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,c=e._order,d=Math.cos,f=Math.sin,p=d(s/2),m=d(o/2),g=d(l/2),y=f(s/2),S=f(o/2),E=f(l/2);switch(c){case"XYZ":this._x=y*m*g+p*S*E,this._y=p*S*g-y*m*E,this._z=p*m*E+y*S*g,this._w=p*m*g-y*S*E;break;case"YXZ":this._x=y*m*g+p*S*E,this._y=p*S*g-y*m*E,this._z=p*m*E-y*S*g,this._w=p*m*g+y*S*E;break;case"ZXY":this._x=y*m*g-p*S*E,this._y=p*S*g+y*m*E,this._z=p*m*E+y*S*g,this._w=p*m*g-y*S*E;break;case"ZYX":this._x=y*m*g-p*S*E,this._y=p*S*g+y*m*E,this._z=p*m*E-y*S*g,this._w=p*m*g+y*S*E;break;case"YZX":this._x=y*m*g+p*S*E,this._y=p*S*g+y*m*E,this._z=p*m*E-y*S*g,this._w=p*m*g-y*S*E;break;case"XZY":this._x=y*m*g-p*S*E,this._y=p*S*g-y*m*E,this._z=p*m*E+y*S*g,this._w=p*m*g+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],d=t[5],f=t[9],p=t[2],m=t[6],g=t[10],y=s+d+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(m-f)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(s>d&&s>g){const S=2*Math.sqrt(1+s-d-g);this._w=(m-f)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-s-g);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(f+m)/S}else{const S=2*Math.sqrt(1+g-s-d);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(f+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,c=e._w,d=t._x,f=t._y,p=t._z,m=t._w;return this._x=s*m+c*d+o*p-l*f,this._y=o*m+c*f+l*d-s*p,this._z=l*m+c*p+s*f-o*d,this._w=c*m-s*d-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,c=this._w;let d=c*e._w+s*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=s,this._y=o,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(f),m=Math.atan2(p,d),g=Math.sin((1-t)*m)/p,y=Math.sin(t*m)/p;return this._w=c*g+this._w*y,this._x=s*g+this._x*y,this._y=o*g+this._y*y,this._z=l*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,s=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ag.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ag.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,d=e.z,f=e.w,p=2*(c*o-d*s),m=2*(d*t-l*o),g=2*(l*s-c*t);return this.x=t+f*p+c*g-d*m,this.y=s+f*m+d*p-l*g,this.z=o+f*g+l*m-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,c=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*c-s*f,this.z=s*d-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return wd.copy(this).projectOnVector(e),this.sub(wd)}reflect(e){return this.sub(wd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wd=new ie,Ag=new Sa;class Ea{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,di):di.fromBufferAttribute(l,c),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ol.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ol.copy(s.boundingBox)),Ol.applyMatrix4(e.matrixWorld),this.union(Ol)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Fl.subVectors(this.max,na),qs.subVectors(e.a,na),$s.subVectors(e.b,na),Ys.subVectors(e.c,na),Tr.subVectors($s,qs),Ar.subVectors(Ys,$s),Qr.subVectors(qs,Ys);let t=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-Qr.z,Qr.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,Qr.z,0,-Qr.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-Qr.y,Qr.x,0];return!bd(t,qs,$s,Ys,Fl)||(t=[1,0,0,0,1,0,0,0,1],!bd(t,qs,$s,Ys,Fl))?!1:(kl.crossVectors(Tr,Ar),t=[kl.x,kl.y,kl.z],bd(t,qs,$s,Ys,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],di=new ie,Ol=new Ea,qs=new ie,$s=new ie,Ys=new ie,Tr=new ie,Ar=new ie,Qr=new ie,na=new ie,Fl=new ie,kl=new ie,es=new ie;function bd(i,e,t,s,o){for(let l=0,c=i.length-3;l<=c;l+=3){es.fromArray(i,l);const d=o.x*Math.abs(es.x)+o.y*Math.abs(es.y)+o.z*Math.abs(es.z),f=e.dot(es),p=t.dot(es),m=s.dot(es);if(Math.max(-Math.max(f,p,m),Math.min(f,p,m))>d)return!1}return!0}const sw=new Ea,ia=new ie,Td=new ie;class ch{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):sw.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const t=ia.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(ia,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(Td)),this.expandByPoint(ia.copy(e.center).sub(Td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ji=new ie,Ad=new ie,Bl=new ie,Cr=new ie,Cd=new ie,zl=new ie,Rd=new ie;class ow{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Ad.copy(e).add(t).multiplyScalar(.5),Bl.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(Ad);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Bl),d=Cr.dot(this.direction),f=-Cr.dot(Bl),p=Cr.lengthSq(),m=Math.abs(1-c*c);let g,y,S,E;if(m>0)if(g=c*f-d,y=c*d-f,E=l*m,g>=0)if(y>=-E)if(y<=E){const M=1/m;g*=M,y*=M,S=g*(g+c*y+2*d)+y*(c*g+y+2*f)+p}else y=l,g=Math.max(0,-(c*y+d)),S=-g*g+y*(y+2*f)+p;else y=-l,g=Math.max(0,-(c*y+d)),S=-g*g+y*(y+2*f)+p;else y<=-E?(g=Math.max(0,-(-c*l+d)),y=g>0?-l:Math.min(Math.max(-l,-f),l),S=-g*g+y*(y+2*f)+p):y<=E?(g=0,y=Math.min(Math.max(-l,-f),l),S=y*(y+2*f)+p):(g=Math.max(0,-(c*l+d)),y=g>0?l:Math.min(Math.max(-l,-f),l),S=-g*g+y*(y+2*f)+p);else y=c>0?-l:l,g=Math.max(0,-(c*y+d)),S=-g*g+y*(y+2*f)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Ad).addScaledVector(Bl,y),S}intersectSphere(e,t){ji.subVectors(e.center,this.origin);const s=ji.dot(this.direction),o=ji.dot(ji)-s*s,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),d=s-c,f=s+c;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,d,f;const p=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,o=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,o=(e.min.x-y.x)*p),m>=0?(l=(e.min.y-y.y)*m,c=(e.max.y-y.y)*m):(l=(e.max.y-y.y)*m,c=(e.min.y-y.y)*m),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),g>=0?(d=(e.min.z-y.z)*g,f=(e.max.z-y.z)*g):(d=(e.max.z-y.z)*g,f=(e.min.z-y.z)*g),s>f||d>o)||((d>s||s!==s)&&(s=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,s,o,l){Cd.subVectors(t,e),zl.subVectors(s,e),Rd.crossVectors(Cd,zl);let c=this.direction.dot(Rd),d;if(c>0){if(o)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Cr.subVectors(this.origin,e);const f=d*this.direction.dot(zl.crossVectors(Cr,zl));if(f<0)return null;const p=d*this.direction.dot(Cd.cross(Cr));if(p<0||f+p>c)return null;const m=-d*Cr.dot(Rd);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,t,s,o,l,c,d,f,p,m,g,y,S,E,M,_){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,d,f,p,m,g,y,S,E,M,_)}set(e,t,s,o,l,c,d,f,p,m,g,y,S,E,M,_){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=o,x[1]=l,x[5]=c,x[9]=d,x[13]=f,x[2]=p,x[6]=m,x[10]=g,x[14]=y,x[3]=S,x[7]=E,x[11]=M,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/Ks.setFromMatrixColumn(e,0).length(),l=1/Ks.setFromMatrixColumn(e,1).length(),c=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),d=Math.sin(s),f=Math.cos(o),p=Math.sin(o),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const y=c*m,S=c*g,E=d*m,M=d*g;t[0]=f*m,t[4]=-f*g,t[8]=p,t[1]=S+E*p,t[5]=y-M*p,t[9]=-d*f,t[2]=M-y*p,t[6]=E+S*p,t[10]=c*f}else if(e.order==="YXZ"){const y=f*m,S=f*g,E=p*m,M=p*g;t[0]=y+M*d,t[4]=E*d-S,t[8]=c*p,t[1]=c*g,t[5]=c*m,t[9]=-d,t[2]=S*d-E,t[6]=M+y*d,t[10]=c*f}else if(e.order==="ZXY"){const y=f*m,S=f*g,E=p*m,M=p*g;t[0]=y-M*d,t[4]=-c*g,t[8]=E+S*d,t[1]=S+E*d,t[5]=c*m,t[9]=M-y*d,t[2]=-c*p,t[6]=d,t[10]=c*f}else if(e.order==="ZYX"){const y=c*m,S=c*g,E=d*m,M=d*g;t[0]=f*m,t[4]=E*p-S,t[8]=y*p+M,t[1]=f*g,t[5]=M*p+y,t[9]=S*p-E,t[2]=-p,t[6]=d*f,t[10]=c*f}else if(e.order==="YZX"){const y=c*f,S=c*p,E=d*f,M=d*p;t[0]=f*m,t[4]=M-y*g,t[8]=E*g+S,t[1]=g,t[5]=c*m,t[9]=-d*m,t[2]=-p*m,t[6]=S*g+E,t[10]=y-M*g}else if(e.order==="XZY"){const y=c*f,S=c*p,E=d*f,M=d*p;t[0]=f*m,t[4]=-g,t[8]=p*m,t[1]=y*g+M,t[5]=c*m,t[9]=S*g-E,t[2]=E*g-S,t[6]=d*m,t[10]=M*g+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aw,e,lw)}lookAt(e,t,s){const o=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Rr.crossVectors(s,$n),Rr.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Rr.crossVectors(s,$n)),Rr.normalize(),Hl.crossVectors($n,Rr),o[0]=Rr.x,o[4]=Hl.x,o[8]=$n.x,o[1]=Rr.y,o[5]=Hl.y,o[9]=$n.y,o[2]=Rr.z,o[6]=Hl.z,o[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],d=s[4],f=s[8],p=s[12],m=s[1],g=s[5],y=s[9],S=s[13],E=s[2],M=s[6],_=s[10],x=s[14],D=s[3],N=s[7],R=s[11],V=s[15],z=o[0],F=o[4],k=o[8],P=o[12],C=o[1],G=o[5],le=o[9],Q=o[13],fe=o[2],he=o[6],se=o[10],ce=o[14],I=o[3],ue=o[7],oe=o[11],O=o[15];return l[0]=c*z+d*C+f*fe+p*I,l[4]=c*F+d*G+f*he+p*ue,l[8]=c*k+d*le+f*se+p*oe,l[12]=c*P+d*Q+f*ce+p*O,l[1]=m*z+g*C+y*fe+S*I,l[5]=m*F+g*G+y*he+S*ue,l[9]=m*k+g*le+y*se+S*oe,l[13]=m*P+g*Q+y*ce+S*O,l[2]=E*z+M*C+_*fe+x*I,l[6]=E*F+M*G+_*he+x*ue,l[10]=E*k+M*le+_*se+x*oe,l[14]=E*P+M*Q+_*ce+x*O,l[3]=D*z+N*C+R*fe+V*I,l[7]=D*F+N*G+R*he+V*ue,l[11]=D*k+N*le+R*se+V*oe,l[15]=D*P+N*Q+R*ce+V*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],d=e[5],f=e[9],p=e[13],m=e[2],g=e[6],y=e[10],S=e[14],E=e[3],M=e[7],_=e[11],x=e[15];return E*(+l*f*g-o*p*g-l*d*y+s*p*y+o*d*S-s*f*S)+M*(+t*f*S-t*p*y+l*c*y-o*c*S+o*p*m-l*f*m)+_*(+t*p*g-t*d*S-l*c*g+s*c*S+l*d*m-s*p*m)+x*(-o*d*m-t*f*g+t*d*y+o*c*g-s*c*y+s*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],m=e[8],g=e[9],y=e[10],S=e[11],E=e[12],M=e[13],_=e[14],x=e[15],D=g*_*p-M*y*p+M*f*S-d*_*S-g*f*x+d*y*x,N=E*y*p-m*_*p-E*f*S+c*_*S+m*f*x-c*y*x,R=m*M*p-E*g*p+E*d*S-c*M*S-m*d*x+c*g*x,V=E*g*f-m*M*f-E*d*y+c*M*y+m*d*_-c*g*_,z=t*D+s*N+o*R+l*V;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=D*F,e[1]=(M*y*l-g*_*l-M*o*S+s*_*S+g*o*x-s*y*x)*F,e[2]=(d*_*l-M*f*l+M*o*p-s*_*p-d*o*x+s*f*x)*F,e[3]=(g*f*l-d*y*l-g*o*p+s*y*p+d*o*S-s*f*S)*F,e[4]=N*F,e[5]=(m*_*l-E*y*l+E*o*S-t*_*S-m*o*x+t*y*x)*F,e[6]=(E*f*l-c*_*l-E*o*p+t*_*p+c*o*x-t*f*x)*F,e[7]=(c*y*l-m*f*l+m*o*p-t*y*p-c*o*S+t*f*S)*F,e[8]=R*F,e[9]=(E*g*l-m*M*l-E*s*S+t*M*S+m*s*x-t*g*x)*F,e[10]=(c*M*l-E*d*l+E*s*p-t*M*p-c*s*x+t*d*x)*F,e[11]=(m*d*l-c*g*l-m*s*p+t*g*p+c*s*S-t*d*S)*F,e[12]=V*F,e[13]=(m*M*o-E*g*o+E*s*y-t*M*y-m*s*_+t*g*_)*F,e[14]=(E*d*o-c*M*o-E*s*f+t*M*f+c*s*_-t*d*_)*F,e[15]=(c*g*o-m*d*o+m*s*f-t*g*f-c*s*y+t*d*y)*F,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,d=e.y,f=e.z,p=l*c,m=l*d;return this.set(p*c+s,p*d-o*f,p*f+o*d,0,p*d+o*f,m*d+s,m*f-o*c,0,p*f-o*d,m*f+o*c,l*f*f+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,c=t._y,d=t._z,f=t._w,p=l+l,m=c+c,g=d+d,y=l*p,S=l*m,E=l*g,M=c*m,_=c*g,x=d*g,D=f*p,N=f*m,R=f*g,V=s.x,z=s.y,F=s.z;return o[0]=(1-(M+x))*V,o[1]=(S+R)*V,o[2]=(E-N)*V,o[3]=0,o[4]=(S-R)*z,o[5]=(1-(y+x))*z,o[6]=(_+D)*z,o[7]=0,o[8]=(E+N)*F,o[9]=(_-D)*F,o[10]=(1-(y+M))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=Ks.set(o[0],o[1],o[2]).length();const c=Ks.set(o[4],o[5],o[6]).length(),d=Ks.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],fi.copy(this);const p=1/l,m=1/c,g=1/d;return fi.elements[0]*=p,fi.elements[1]*=p,fi.elements[2]*=p,fi.elements[4]*=m,fi.elements[5]*=m,fi.elements[6]*=m,fi.elements[8]*=g,fi.elements[9]*=g,fi.elements[10]*=g,t.setFromRotationMatrix(fi),s.x=l,s.y=c,s.z=d,this}makePerspective(e,t,s,o,l,c,d=Ji){const f=this.elements,p=2*l/(t-e),m=2*l/(s-o),g=(t+e)/(t-e),y=(s+o)/(s-o);let S,E;if(d===Ji)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(d===_c)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=p,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,s,o,l,c,d=Ji){const f=this.elements,p=1/(t-e),m=1/(s-o),g=1/(c-l),y=(t+e)*p,S=(s+o)*m;let E,M;if(d===Ji)E=(c+l)*g,M=-2*g;else if(d===_c)E=l*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-y,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-S,f[2]=0,f[6]=0,f[10]=M,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Ks=new ie,fi=new en,aw=new ie(0,0,0),lw=new ie(1,1,1),Rr=new ie,Hl=new ie,$n=new ie,Cg=new en,Rg=new Sa;class tr{constructor(e=0,t=0,s=0,o=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],c=o[4],d=o[8],f=o[1],p=o[5],m=o[9],g=o[2],y=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Et(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Cg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rg.setFromEuler(this),this.setFromQuaternion(Rg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class w_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cw=0;const Pg=new ie,Zs=new Sa,Xi=new en,Vl=new ie,ra=new ie,uw=new ie,dw=new Sa,Ng=new ie(1,0,0),Lg=new ie(0,1,0),Dg=new ie(0,0,1),Ug={type:"added"},fw={type:"removed"},Js={type:"childadded",child:null},Pd={type:"childremoved",child:null};class Kn extends xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cw++}),this.uuid=ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new ie,t=new tr,s=new Sa,o=new ie(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new en},normalMatrix:{value:new ft}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new w_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(Ng,e)}rotateY(e){return this.rotateOnAxis(Lg,e)}rotateZ(e){return this.rotateOnAxis(Dg,e)}translateOnAxis(e,t){return Pg.copy(e).applyQuaternion(this.quaternion),this.position.add(Pg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ng,e)}translateY(e){return this.translateOnAxis(Lg,e)}translateZ(e){return this.translateOnAxis(Dg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Vl.copy(e):Vl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(ra,Vl,this.up):Xi.lookAt(Vl,ra,this.up),this.quaternion.setFromRotationMatrix(Xi),o&&(Xi.extractRotation(o.matrixWorld),Zs.setFromRotationMatrix(Xi),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ug),Js.child=e,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fw),Pd.child=e,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ug),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,uw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,dw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,m=f.length;p<m;p++){const g=f[p];l(e.shapes,g)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=c(e.geometries),f=c(e.materials),p=c(e.textures),m=c(e.images),g=c(e.shapes),y=c(e.skeletons),S=c(e.animations),E=c(e.nodes);d.length>0&&(s.geometries=d),f.length>0&&(s.materials=f),p.length>0&&(s.textures=p),m.length>0&&(s.images=m),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=o,s;function c(d){const f=[];for(const p in d){const m=d[p];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Kn.DEFAULT_UP=new ie(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new ie,qi=new ie,Nd=new ie,$i=new ie,Qs=new ie,eo=new ie,Ig=new ie,Ld=new ie,Dd=new ie,Ud=new ie,Id=new Kt,Od=new Kt,Fd=new Kt;class gi{constructor(e=new ie,t=new ie,s=new ie){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),hi.subVectors(e,t),o.cross(hi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){hi.subVectors(o,t),qi.subVectors(s,t),Nd.subVectors(e,t);const c=hi.dot(hi),d=hi.dot(qi),f=hi.dot(Nd),p=qi.dot(qi),m=qi.dot(Nd),g=c*p-d*d;if(g===0)return l.set(0,0,0),null;const y=1/g,S=(p*f-d*m)*y,E=(c*m-d*f)*y;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,s,o,l,c,d,f){return this.getBarycoord(e,t,s,o,$i)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,$i.x),f.addScaledVector(c,$i.y),f.addScaledVector(d,$i.z),f)}static getInterpolatedAttribute(e,t,s,o,l,c){return Id.setScalar(0),Od.setScalar(0),Fd.setScalar(0),Id.fromBufferAttribute(e,t),Od.fromBufferAttribute(e,s),Fd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Id,l.x),c.addScaledVector(Od,l.y),c.addScaledVector(Fd,l.z),c}static isFrontFacing(e,t,s,o){return hi.subVectors(s,t),qi.subVectors(e,t),hi.cross(qi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),hi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return gi.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let c,d;Qs.subVectors(o,s),eo.subVectors(l,s),Ld.subVectors(e,s);const f=Qs.dot(Ld),p=eo.dot(Ld);if(f<=0&&p<=0)return t.copy(s);Dd.subVectors(e,o);const m=Qs.dot(Dd),g=eo.dot(Dd);if(m>=0&&g<=m)return t.copy(o);const y=f*g-m*p;if(y<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(s).addScaledVector(Qs,c);Ud.subVectors(e,l);const S=Qs.dot(Ud),E=eo.dot(Ud);if(E>=0&&S<=E)return t.copy(l);const M=S*p-f*E;if(M<=0&&p>=0&&E<=0)return d=p/(p-E),t.copy(s).addScaledVector(eo,d);const _=m*E-S*g;if(_<=0&&g-m>=0&&S-E>=0)return Ig.subVectors(l,o),d=(g-m)/(g-m+(S-E)),t.copy(o).addScaledVector(Ig,d);const x=1/(_+M+y);return c=M*x,d=y*x,t.copy(s).addScaledVector(Qs,c).addScaledVector(eo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const b_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function kd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ot{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=s,Ct.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=Ct.workingColorSpace){if(e=$M(e,1),t=Et(t,0,1),s=Et(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=kd(c,l,e+1/3),this.g=kd(c,l,e),this.b=kd(c,l,e-1/3)}return Ct.toWorkingColorSpace(this,o),this}setStyle(e,t=ri){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ri){const s=b_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Ct.fromWorkingColorSpace(wn.copy(this),e),Math.round(Et(wn.r*255,0,255))*65536+Math.round(Et(wn.g*255,0,255))*256+Math.round(Et(wn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(wn.copy(this),t);const s=wn.r,o=wn.g,l=wn.b,c=Math.max(s,o,l),d=Math.min(s,o,l);let f,p;const m=(d+c)/2;if(d===c)f=0,p=0;else{const g=c-d;switch(p=m<=.5?g/(c+d):g/(2-c-d),c){case s:f=(o-l)/g+(o<l?6:0);break;case o:f=(l-s)/g+2;break;case l:f=(s-o)/g+4;break}f/=6}return e.h=f,e.s=p,e.l=m,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ri){Ct.fromWorkingColorSpace(wn.copy(this),e);const t=wn.r,s=wn.g,o=wn.b;return e!==ri?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(Gl);const s=Sd(Pr.h,Gl.h,t),o=Sd(Pr.s,Gl.s,t),l=Sd(Pr.l,Gl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ot;Ot.NAMES=b_;let hw=0;class Rc extends xo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hw++}),this.uuid=ya(),this.name="",this.type="Material",this.blending=oo,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lf,this.blendDst=cf,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(s.blending=this.blending),this.side!==Fr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==lf&&(s.blendSrc=this.blendSrc),this.blendDst!==cf&&(s.blendDst=this.blendDst),this.blendEquation!==as&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(s.stencilFail=this.stencilFail),this.stencilZFail!==js&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const c=[];for(const d in l){const f=l[d];delete f.metadata,c.push(f)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class T_ extends Rc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=d_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new ie,Wl=new Ut;let pw=0;class Pi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Eg,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Wl.fromBufferAttribute(this,t),Wl.applyMatrix3(e),this.setXY(t,Wl.x,Wl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=ta(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=zn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ta(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ta(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ta(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ta(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),s=zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),s=zn(s,this.array),o=zn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),s=zn(s,this.array),o=zn(o,this.array),l=zn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eg&&(e.usage=this.usage),e}}class A_ extends Pi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class C_ extends Pi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class hs extends Pi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let mw=0;const ii=new en,Bd=new Kn,to=new ie,Yn=new Ea,sa=new Ea,hn=new ie;class xs extends xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mw++}),this.uuid=ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E_(e)?C_:A_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ft().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,s){return ii.makeTranslation(e,t,s),this.applyMatrix4(ii),this}scale(e,t,s){return ii.makeScale(e,t,s),this.applyMatrix4(ii),this}lookAt(e){return Bd.lookAt(e),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new hs(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Yn.setFromBufferAttribute(l),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ch);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];sa.setFromBufferAttribute(d),this.morphTargetsRelative?(hn.addVectors(Yn.min,sa.min),Yn.expandByPoint(hn),hn.addVectors(Yn.max,sa.max),Yn.expandByPoint(hn)):(Yn.expandByPoint(sa.min),Yn.expandByPoint(sa.max))}Yn.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)hn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(hn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,m=d.count;p<m;p++)hn.fromBufferAttribute(d,p),f&&(to.fromBufferAttribute(e,p),hn.add(to)),o=Math.max(o,s.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),d=[],f=[];for(let k=0;k<s.count;k++)d[k]=new ie,f[k]=new ie;const p=new ie,m=new ie,g=new ie,y=new Ut,S=new Ut,E=new Ut,M=new ie,_=new ie;function x(k,P,C){p.fromBufferAttribute(s,k),m.fromBufferAttribute(s,P),g.fromBufferAttribute(s,C),y.fromBufferAttribute(l,k),S.fromBufferAttribute(l,P),E.fromBufferAttribute(l,C),m.sub(p),g.sub(p),S.sub(y),E.sub(y);const G=1/(S.x*E.y-E.x*S.y);isFinite(G)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(G),_.copy(g).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(G),d[k].add(M),d[P].add(M),d[C].add(M),f[k].add(_),f[P].add(_),f[C].add(_))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let k=0,P=D.length;k<P;++k){const C=D[k],G=C.start,le=C.count;for(let Q=G,fe=G+le;Q<fe;Q+=3)x(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const N=new ie,R=new ie,V=new ie,z=new ie;function F(k){V.fromBufferAttribute(o,k),z.copy(V);const P=d[k];N.copy(P),N.sub(V.multiplyScalar(V.dot(P))).normalize(),R.crossVectors(z,P);const G=R.dot(f[k])<0?-1:1;c.setXYZW(k,N.x,N.y,N.z,G)}for(let k=0,P=D.length;k<P;++k){const C=D[k],G=C.start,le=C.count;for(let Q=G,fe=G+le;Q<fe;Q+=3)F(e.getX(Q+0)),F(e.getX(Q+1)),F(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Pi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const o=new ie,l=new ie,c=new ie,d=new ie,f=new ie,p=new ie,m=new ie,g=new ie;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),M=e.getX(y+1),_=e.getX(y+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),c.fromBufferAttribute(t,_),m.subVectors(c,l),g.subVectors(o,l),m.cross(g),d.fromBufferAttribute(s,E),f.fromBufferAttribute(s,M),p.fromBufferAttribute(s,_),d.add(m),f.add(m),p.add(m),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(M,f.x,f.y,f.z),s.setXYZ(_,p.x,p.y,p.z)}else for(let y=0,S=t.count;y<S;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),c.fromBufferAttribute(t,y+2),m.subVectors(c,l),g.subVectors(o,l),m.cross(g),s.setXYZ(y+0,m.x,m.y,m.z),s.setXYZ(y+1,m.x,m.y,m.z),s.setXYZ(y+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(d,f){const p=d.array,m=d.itemSize,g=d.normalized,y=new p.constructor(f.length*m);let S=0,E=0;for(let M=0,_=f.length;M<_;M++){d.isInterleavedBufferAttribute?S=f[M]*d.data.stride+d.offset:S=f[M]*m;for(let x=0;x<m;x++)y[E++]=p[S++]}return new Pi(y,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xs,s=this.index.array,o=this.attributes;for(const d in o){const f=o[d],p=e(f,s);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let m=0,g=p.length;m<g;m++){const y=p[m],S=e(y,s);f.push(S)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,f=c.length;d<f;d++){const p=c[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const f in s){const p=s[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],m=[];for(let g=0,y=p.length;g<y;g++){const S=p[g];m.push(S.toJSON(e.data))}m.length>0&&(o[f]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const m=o[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],g=l[p];for(let y=0,S=g.length;y<S;y++)m.push(g[y].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,m=c.length;p<m;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Og=new en,ts=new ow,jl=new ch,Fg=new ie,Xl=new ie,ql=new ie,$l=new ie,zd=new ie,Yl=new ie,kg=new ie,Kl=new ie;class Ri extends Kn{constructor(e=new xs,t=new T_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Yl.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const m=d[f],g=l[f];m!==0&&(zd.fromBufferAttribute(g,e),c?Yl.addScaledVector(zd,m):Yl.addScaledVector(zd.sub(t),m))}t.add(Yl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),jl.copy(s.boundingSphere),jl.applyMatrix4(l),ts.copy(e.ray).recast(e.near),!(jl.containsPoint(ts.origin)===!1&&(ts.intersectSphere(jl,Fg)===null||ts.origin.distanceToSquared(Fg)>(e.far-e.near)**2))&&(Og.copy(l).invert(),ts.copy(e.ray).applyMatrix4(Og),!(s.boundingBox!==null&&ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,s){let o;const l=this.geometry,c=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,y=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,M=y.length;E<M;E++){const _=y[E],x=c[_.materialIndex],D=Math.max(_.start,S.start),N=Math.min(d.count,Math.min(_.start+_.count,S.start+S.count));for(let R=D,V=N;R<V;R+=3){const z=d.getX(R),F=d.getX(R+1),k=d.getX(R+2);o=Zl(this,x,e,s,p,m,g,z,F,k),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let _=E,x=M;_<x;_+=3){const D=d.getX(_),N=d.getX(_+1),R=d.getX(_+2);o=Zl(this,c,e,s,p,m,g,D,N,R),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let E=0,M=y.length;E<M;E++){const _=y[E],x=c[_.materialIndex],D=Math.max(_.start,S.start),N=Math.min(f.count,Math.min(_.start+_.count,S.start+S.count));for(let R=D,V=N;R<V;R+=3){const z=R,F=R+1,k=R+2;o=Zl(this,x,e,s,p,m,g,z,F,k),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let _=E,x=M;_<x;_+=3){const D=_,N=_+1,R=_+2;o=Zl(this,c,e,s,p,m,g,D,N,R),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function gw(i,e,t,s,o,l,c,d){let f;if(e.side===Gn?f=s.intersectTriangle(c,l,o,!0,d):f=s.intersectTriangle(o,l,c,e.side===Fr,d),f===null)return null;Kl.copy(d),Kl.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(Kl);return p<t.near||p>t.far?null:{distance:p,point:Kl.clone(),object:i}}function Zl(i,e,t,s,o,l,c,d,f,p){i.getVertexPosition(d,Xl),i.getVertexPosition(f,ql),i.getVertexPosition(p,$l);const m=gw(i,e,t,s,Xl,ql,$l,kg);if(m){const g=new ie;gi.getBarycoord(kg,Xl,ql,$l,g),o&&(m.uv=gi.getInterpolatedAttribute(o,d,f,p,g,new Ut)),l&&(m.uv1=gi.getInterpolatedAttribute(l,d,f,p,g,new Ut)),c&&(m.normal=gi.getInterpolatedAttribute(c,d,f,p,g,new ie),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const y={a:d,b:f,c:p,normal:new ie,materialIndex:0};gi.getNormal(Xl,ql,$l,y.normal),m.face=y,m.barycoord=g}return m}class Ma extends xs{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};const d=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const f=[],p=[],m=[],g=[];let y=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,o,c,2),E("x","z","y",1,-1,e,s,-t,o,c,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(f),this.setAttribute("position",new hs(p,3)),this.setAttribute("normal",new hs(m,3)),this.setAttribute("uv",new hs(g,2));function E(M,_,x,D,N,R,V,z,F,k,P){const C=R/F,G=V/k,le=R/2,Q=V/2,fe=z/2,he=F+1,se=k+1;let ce=0,I=0;const ue=new ie;for(let oe=0;oe<se;oe++){const O=oe*G-Q;for(let ne=0;ne<he;ne++){const Ae=ne*C-le;ue[M]=Ae*D,ue[_]=O*N,ue[x]=fe,p.push(ue.x,ue.y,ue.z),ue[M]=0,ue[_]=0,ue[x]=z>0?1:-1,m.push(ue.x,ue.y,ue.z),g.push(ne/F),g.push(1-oe/k),ce+=1}}for(let oe=0;oe<k;oe++)for(let O=0;O<F;O++){const ne=y+O+he*oe,Ae=y+O+he*(oe+1),Y=y+(O+1)+he*(oe+1),pe=y+(O+1)+he*oe;f.push(ne,Ae,pe),f.push(Ae,Y,pe),I+=6}d.addGroup(S,I,P),S+=I,y+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const o=i[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function Nn(i){const e={};for(let t=0;t<i.length;t++){const s=ho(i[t]);for(const o in s)e[o]=s[o]}return e}function vw(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function R_(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const _w={clone:ho,merge:Nn};var xw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends Rc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xw,this.fragmentShader=yw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=vw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class uh extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new ie,Bg=new Ut,zg=new Ut;class mi extends uh{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xf*2*Math.atan(Math.tan(yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,Bg,zg),t.subVectors(zg,Bg)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yd*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/f,t-=c.offsetY*s/p,o*=c.width/f,s*=c.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const no=-90,io=1;class Sw extends Kn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new mi(no,io,e,t);o.layers=this.layers,this.add(o);const l=new mi(no,io,e,t);l.layers=this.layers,this.add(l);const c=new mi(no,io,e,t);c.layers=this.layers,this.add(c);const d=new mi(no,io,e,t);d.layers=this.layers,this.add(d);const f=new mi(no,io,e,t);f.layers=this.layers,this.add(f);const p=new mi(no,io,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,d,f]=t;for(const p of t)this.remove(p);if(e===Ji)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===_c)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,f,p,m]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,c),e.setRenderTarget(s,2,o),e.render(t,d),e.setRenderTarget(s,3,o),e.render(t,f),e.setRenderTarget(s,4,o),e.render(t,p),s.texture.generateMipmaps=M,e.setRenderTarget(s,5,o),e.render(t,m),e.setRenderTarget(g,y,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class P_ extends Ln{constructor(e=[],t=co,s,o,l,c,d,f,p,m){super(e,t,s,o,l,c,d,f,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ew extends gs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new P_(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ma(5,5,5),l=new nr({name:"CubemapFromEquirect",uniforms:ho(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Gn,blending:Ir});l.uniforms.tEquirect.value=t;const c=new Ri(o,l),d=t.minFilter;return t.minFilter===ds&&(t.minFilter=vi),new Sw(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}}class Jl extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mw={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const M of e.hand.values()){const _=t.getJointPose(M,s),x=this._getHandJoint(p,M);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const m=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=m.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Mw)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Jl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class ww extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Vd=new ie,bw=new ie,Tw=new ft;class ss{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Vd.subVectors(s,t).cross(bw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Vd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Tw.getNormalMatrix(e),o=this.coplanarPoint(Vd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new ch,Ql=new ie;class N_{constructor(e=new ss,t=new ss,s=new ss,o=new ss,l=new ss,c=new ss){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Ji){const s=this.planes,o=e.elements,l=o[0],c=o[1],d=o[2],f=o[3],p=o[4],m=o[5],g=o[6],y=o[7],S=o[8],E=o[9],M=o[10],_=o[11],x=o[12],D=o[13],N=o[14],R=o[15];if(s[0].setComponents(f-l,y-p,_-S,R-x).normalize(),s[1].setComponents(f+l,y+p,_+S,R+x).normalize(),s[2].setComponents(f+c,y+m,_+E,R+D).normalize(),s[3].setComponents(f-c,y-m,_-E,R-D).normalize(),s[4].setComponents(f-d,y-g,_-M,R-N).normalize(),t===Ji)s[5].setComponents(f+d,y+g,_+M,R+N).normalize();else if(t===_c)s[5].setComponents(d,g,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Ql.x=o.normal.x>0?e.max.x:e.min.x,Ql.y=o.normal.y>0?e.max.y:e.min.y,Ql.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class L_ extends Ln{constructor(e,t,s=ms,o,l,c,d=xi,f=xi,p,m=ha){if(m!==ha&&m!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,l,c,d,f,m,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wa extends xs{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,c=t/2,d=Math.floor(s),f=Math.floor(o),p=d+1,m=f+1,g=e/d,y=t/f,S=[],E=[],M=[],_=[];for(let x=0;x<m;x++){const D=x*y-c;for(let N=0;N<p;N++){const R=N*g-l;E.push(R,-D,0),M.push(0,0,1),_.push(N/d),_.push(1-x/f)}}for(let x=0;x<f;x++)for(let D=0;D<d;D++){const N=D+p*x,R=D+p*(x+1),V=D+1+p*(x+1),z=D+1+p*x;S.push(N,R,z),S.push(R,V,z)}this.setIndex(S),this.setAttribute("position",new hs(E,3)),this.setAttribute("normal",new hs(M,3)),this.setAttribute("uv",new hs(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Aw extends Rc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cw extends Rc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hg={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Rw{constructor(e,t,s){const o=this;let l=!1,c=0,d=0,f;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){d++,l===!1&&o.onStart!==void 0&&o.onStart(m,c,d),l=!0},this.itemEnd=function(m){c++,o.onProgress!==void 0&&o.onProgress(m,c,d),c===d&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(m){o.onError!==void 0&&o.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,g){return p.push(m,g),this},this.removeHandler=function(m){const g=p.indexOf(m);return g!==-1&&p.splice(g,2),this},this.getHandler=function(m){for(let g=0,y=p.length;g<y;g+=2){const S=p[g],E=p[g+1];if(S.global&&(S.lastIndex=0),S.test(m))return E}return null}}}const Pw=new Rw;class dh{constructor(e){this.manager=e!==void 0?e:Pw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}dh.DEFAULT_MATERIAL_NAME="__DEFAULT";class Nw extends dh{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Hg.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const d=ma("img");function f(){m(),Hg.add(e,this),t&&t(this),l.manager.itemEnd(e)}function p(g){m(),o&&o(g),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){d.removeEventListener("load",f,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",f,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),l.manager.itemStart(e),d.src=e,d}}class Lw extends dh{constructor(e){super(e)}load(e,t,s,o){const l=new Ln,c=new Nw(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){l.image=d,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}}class Dw extends uh{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,c=s+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,d-=m*this.view.offsetY,f=d-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Uw extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Vg(i,e,t,s){const o=Iw(s);switch(t){case g_:return i*e;case __:return i*e/o.components*o.byteLength;case sh:return i*e/o.components*o.byteLength;case x_:return i*e*2/o.components*o.byteLength;case oh:return i*e*2/o.components*o.byteLength;case v_:return i*e*3/o.components*o.byteLength;case _i:return i*e*4/o.components*o.byteLength;case ah:return i*e*4/o.components*o.byteLength;case ac:case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cc:case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sf:case Mf:return Math.max(i,16)*Math.max(e,8)/4;case yf:case Ef:return Math.max(i,8)*Math.max(e,8)/2;case wf:case bf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Df:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case If:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Of:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case kf:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case zf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case dc:case Hf:case Vf:return Math.ceil(i/4)*Math.ceil(e/4)*16;case y_:case Gf:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wf:case jf:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Iw(i){switch(i){case er:case h_:return{byteLength:1,components:1};case da:case p_:case xa:return{byteLength:2,components:1};case ih:case rh:return{byteLength:2,components:4};case ms:case nh:case Zi:return{byteLength:4,components:1};case m_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function D_(){let i=null,e=!1,t=null,s=null;function o(l,c){t(l,c),s=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function Ow(i){const e=new WeakMap;function t(d,f){const p=d.array,m=d.usage,g=p.byteLength,y=i.createBuffer();i.bindBuffer(f,y),i.bufferData(f,p,m),d.onUploadCallback();let S;if(p instanceof Float32Array)S=i.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=i.SHORT;else if(p instanceof Uint32Array)S=i.UNSIGNED_INT;else if(p instanceof Int32Array)S=i.INT;else if(p instanceof Int8Array)S=i.BYTE;else if(p instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,f,p){const m=f.array,g=f.updateRanges;if(i.bindBuffer(p,d),g.length===0)i.bufferSubData(p,0,m);else{g.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<g.length;S++){const E=g[y],M=g[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++y,g[y]=M)}g.length=y+1;for(let S=0,E=g.length;S<E;S++){const M=g[S];i.bufferSubData(p,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(i.deleteBuffer(f.buffer),e.delete(d))}function c(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,f),p.version=d.version}}return{get:o,remove:l,update:c}}var Fw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kw=`#ifdef USE_ALPHAHASH
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
#endif`,Bw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gw=`#ifdef USE_AOMAP
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
#endif`,Ww=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jw=`#ifdef USE_BATCHING
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
#endif`,Xw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$w=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kw=`#ifdef USE_IRIDESCENCE
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
#endif`,Zw=`#ifdef USE_BUMPMAP
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
#endif`,Jw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ob=`#define PI 3.141592653589793
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
} // validated`,ab=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lb=`vec3 transformedNormal = objectNormal;
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
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,db=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",pb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mb=`#ifdef USE_ENVMAP
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
#endif`,gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
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
#endif`,yb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wb=`#ifdef USE_GRADIENTMAP
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
}`,bb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cb=`uniform bool receiveShadow;
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
#endif`,Rb=`#ifdef USE_ENVMAP
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
#endif`,Pb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ub=`PhysicalMaterial material;
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
#endif`,Ib=`struct PhysicalMaterial {
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
}`,Ob=`
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
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
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
#endif`,kb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xb=`#if defined( USE_POINTS_UV )
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
#endif`,qb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jb=`#ifdef USE_MORPHTARGETS
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
#endif`,Qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sT=`#ifdef USE_NORMALMAP
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
#endif`,oT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_T=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ST=`float getShadowMask() {
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
}`,ET=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MT=`#ifdef USE_SKINNING
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
#endif`,wT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bT=`#ifdef USE_SKINNING
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
#endif`,TT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PT=`#ifdef USE_TRANSMISSION
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
#endif`,NT=`#ifdef USE_TRANSMISSION
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
#endif`,LT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FT=`uniform sampler2D t2D;
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
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VT=`#include <common>
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
}`,GT=`#if DEPTH_PACKING == 3200
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
}`,WT=`#define DISTANCE
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
}`,jT=`#define DISTANCE
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
}`,XT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$T=`uniform float scale;
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
}`,YT=`uniform vec3 diffuse;
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
}`,KT=`#include <common>
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
}`,ZT=`uniform vec3 diffuse;
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
}`,JT=`#define LAMBERT
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
}`,QT=`#define LAMBERT
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
}`,e1=`#define MATCAP
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
}`,t1=`#define MATCAP
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
}`,n1=`#define NORMAL
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
}`,i1=`#define NORMAL
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
}`,r1=`#define PHONG
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
}`,s1=`#define PHONG
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
}`,o1=`#define STANDARD
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
}`,a1=`#define STANDARD
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
}`,l1=`#define TOON
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
}`,c1=`#define TOON
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
}`,u1=`uniform float size;
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
}`,d1=`uniform vec3 diffuse;
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
}`,f1=`#include <common>
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
}`,h1=`uniform vec3 color;
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
}`,p1=`uniform float rotation;
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
}`,m1=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Fw,alphahash_pars_fragment:kw,alphamap_fragment:Bw,alphamap_pars_fragment:zw,alphatest_fragment:Hw,alphatest_pars_fragment:Vw,aomap_fragment:Gw,aomap_pars_fragment:Ww,batching_pars_vertex:jw,batching_vertex:Xw,begin_vertex:qw,beginnormal_vertex:$w,bsdfs:Yw,iridescence_fragment:Kw,bumpmap_pars_fragment:Zw,clipping_planes_fragment:Jw,clipping_planes_pars_fragment:Qw,clipping_planes_pars_vertex:eb,clipping_planes_vertex:tb,color_fragment:nb,color_pars_fragment:ib,color_pars_vertex:rb,color_vertex:sb,common:ob,cube_uv_reflection_fragment:ab,defaultnormal_vertex:lb,displacementmap_pars_vertex:cb,displacementmap_vertex:ub,emissivemap_fragment:db,emissivemap_pars_fragment:fb,colorspace_fragment:hb,colorspace_pars_fragment:pb,envmap_fragment:mb,envmap_common_pars_fragment:gb,envmap_pars_fragment:vb,envmap_pars_vertex:_b,envmap_physical_pars_fragment:Rb,envmap_vertex:xb,fog_vertex:yb,fog_pars_vertex:Sb,fog_fragment:Eb,fog_pars_fragment:Mb,gradientmap_pars_fragment:wb,lightmap_pars_fragment:bb,lights_lambert_fragment:Tb,lights_lambert_pars_fragment:Ab,lights_pars_begin:Cb,lights_toon_fragment:Pb,lights_toon_pars_fragment:Nb,lights_phong_fragment:Lb,lights_phong_pars_fragment:Db,lights_physical_fragment:Ub,lights_physical_pars_fragment:Ib,lights_fragment_begin:Ob,lights_fragment_maps:Fb,lights_fragment_end:kb,logdepthbuf_fragment:Bb,logdepthbuf_pars_fragment:zb,logdepthbuf_pars_vertex:Hb,logdepthbuf_vertex:Vb,map_fragment:Gb,map_pars_fragment:Wb,map_particle_fragment:jb,map_particle_pars_fragment:Xb,metalnessmap_fragment:qb,metalnessmap_pars_fragment:$b,morphinstance_vertex:Yb,morphcolor_vertex:Kb,morphnormal_vertex:Zb,morphtarget_pars_vertex:Jb,morphtarget_vertex:Qb,normal_fragment_begin:eT,normal_fragment_maps:tT,normal_pars_fragment:nT,normal_pars_vertex:iT,normal_vertex:rT,normalmap_pars_fragment:sT,clearcoat_normal_fragment_begin:oT,clearcoat_normal_fragment_maps:aT,clearcoat_pars_fragment:lT,iridescence_pars_fragment:cT,opaque_fragment:uT,packing:dT,premultiplied_alpha_fragment:fT,project_vertex:hT,dithering_fragment:pT,dithering_pars_fragment:mT,roughnessmap_fragment:gT,roughnessmap_pars_fragment:vT,shadowmap_pars_fragment:_T,shadowmap_pars_vertex:xT,shadowmap_vertex:yT,shadowmask_pars_fragment:ST,skinbase_vertex:ET,skinning_pars_vertex:MT,skinning_vertex:wT,skinnormal_vertex:bT,specularmap_fragment:TT,specularmap_pars_fragment:AT,tonemapping_fragment:CT,tonemapping_pars_fragment:RT,transmission_fragment:PT,transmission_pars_fragment:NT,uv_pars_fragment:LT,uv_pars_vertex:DT,uv_vertex:UT,worldpos_vertex:IT,background_vert:OT,background_frag:FT,backgroundCube_vert:kT,backgroundCube_frag:BT,cube_vert:zT,cube_frag:HT,depth_vert:VT,depth_frag:GT,distanceRGBA_vert:WT,distanceRGBA_frag:jT,equirect_vert:XT,equirect_frag:qT,linedashed_vert:$T,linedashed_frag:YT,meshbasic_vert:KT,meshbasic_frag:ZT,meshlambert_vert:JT,meshlambert_frag:QT,meshmatcap_vert:e1,meshmatcap_frag:t1,meshnormal_vert:n1,meshnormal_frag:i1,meshphong_vert:r1,meshphong_frag:s1,meshphysical_vert:o1,meshphysical_frag:a1,meshtoon_vert:l1,meshtoon_frag:c1,points_vert:u1,points_frag:d1,shadow_vert:f1,shadow_frag:h1,sprite_vert:p1,sprite_frag:m1},Le={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ci={basic:{uniforms:Nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ot(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Nn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Nn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ot(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Nn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Nn([Le.points,Le.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Nn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Nn([Le.common,Le.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Nn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Nn([Le.sprite,Le.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Nn([Le.common,Le.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Nn([Le.lights,Le.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ci.physical={uniforms:Nn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const ec={r:0,b:0,g:0},is=new tr,g1=new en;function v1(i,e,t,s,o,l,c){const d=new Ot(0);let f=l===!0?0:1,p,m,g=null,y=0,S=null;function E(N){let R=N.isScene===!0?N.background:null;return R&&R.isTexture&&(R=(N.backgroundBlurriness>0?t:e).get(R)),R}function M(N){let R=!1;const V=E(N);V===null?x(d,f):V&&V.isColor&&(x(V,1),R=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(i.autoClear||R)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(N,R){const V=E(R);V&&(V.isCubeTexture||V.mapping===Cc)?(m===void 0&&(m=new Ri(new Ma(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:ho(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,F,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),is.copy(R.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.material.uniforms.envMap.value=V,m.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(g1.makeRotationFromEuler(is)),m.material.toneMapped=Ct.getTransfer(V.colorSpace)!==It,(g!==V||y!==V.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,g=V,y=V.version,S=i.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new Ri(new wa(2,2),new nr({name:"BackgroundMaterial",uniforms:ho(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(V.colorSpace)!==It,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||y!==V.version||S!==i.toneMapping)&&(p.material.needsUpdate=!0,g=V,y=V.version,S=i.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,R){N.getRGB(ec,R_(i)),s.buffers.color.setClear(ec.r,ec.g,ec.b,R,c)}function D(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,R=1){d.set(N),f=R,x(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(N){f=N,x(d,f)},render:M,addToRenderList:_,dispose:D}}function _1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=y(null);let l=o,c=!1;function d(C,G,le,Q,fe){let he=!1;const se=g(Q,le,G);l!==se&&(l=se,p(l.object)),he=S(C,Q,le,fe),he&&E(C,Q,le,fe),fe!==null&&e.update(fe,i.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,R(C,G,le,Q),fe!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function f(){return i.createVertexArray()}function p(C){return i.bindVertexArray(C)}function m(C){return i.deleteVertexArray(C)}function g(C,G,le){const Q=le.wireframe===!0;let fe=s[C.id];fe===void 0&&(fe={},s[C.id]=fe);let he=fe[G.id];he===void 0&&(he={},fe[G.id]=he);let se=he[Q];return se===void 0&&(se=y(f()),he[Q]=se),se}function y(C){const G=[],le=[],Q=[];for(let fe=0;fe<t;fe++)G[fe]=0,le[fe]=0,Q[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:le,attributeDivisors:Q,object:C,attributes:{},index:null}}function S(C,G,le,Q){const fe=l.attributes,he=G.attributes;let se=0;const ce=le.getAttributes();for(const I in ce)if(ce[I].location>=0){const oe=fe[I];let O=he[I];if(O===void 0&&(I==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),I==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),oe===void 0||oe.attribute!==O||O&&oe.data!==O.data)return!0;se++}return l.attributesNum!==se||l.index!==Q}function E(C,G,le,Q){const fe={},he=G.attributes;let se=0;const ce=le.getAttributes();for(const I in ce)if(ce[I].location>=0){let oe=he[I];oe===void 0&&(I==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),I==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor));const O={};O.attribute=oe,oe&&oe.data&&(O.data=oe.data),fe[I]=O,se++}l.attributes=fe,l.attributesNum=se,l.index=Q}function M(){const C=l.newAttributes;for(let G=0,le=C.length;G<le;G++)C[G]=0}function _(C){x(C,0)}function x(C,G){const le=l.newAttributes,Q=l.enabledAttributes,fe=l.attributeDivisors;le[C]=1,Q[C]===0&&(i.enableVertexAttribArray(C),Q[C]=1),fe[C]!==G&&(i.vertexAttribDivisor(C,G),fe[C]=G)}function D(){const C=l.newAttributes,G=l.enabledAttributes;for(let le=0,Q=G.length;le<Q;le++)G[le]!==C[le]&&(i.disableVertexAttribArray(le),G[le]=0)}function N(C,G,le,Q,fe,he,se){se===!0?i.vertexAttribIPointer(C,G,le,fe,he):i.vertexAttribPointer(C,G,le,Q,fe,he)}function R(C,G,le,Q){M();const fe=Q.attributes,he=le.getAttributes(),se=G.defaultAttributeValues;for(const ce in he){const I=he[ce];if(I.location>=0){let ue=fe[ce];if(ue===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),ue!==void 0){const oe=ue.normalized,O=ue.itemSize,ne=e.get(ue);if(ne===void 0)continue;const Ae=ne.buffer,Y=ne.type,pe=ne.bytesPerElement,we=Y===i.INT||Y===i.UNSIGNED_INT||ue.gpuType===nh;if(ue.isInterleavedBufferAttribute){const me=ue.data,Ce=me.stride,qe=ue.offset;if(me.isInstancedInterleavedBuffer){for(let ke=0;ke<I.locationSize;ke++)x(I.location+ke,me.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ke=0;ke<I.locationSize;ke++)_(I.location+ke);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let ke=0;ke<I.locationSize;ke++)N(I.location+ke,O/I.locationSize,Y,oe,Ce*pe,(qe+O/I.locationSize*ke)*pe,we)}else{if(ue.isInstancedBufferAttribute){for(let me=0;me<I.locationSize;me++)x(I.location+me,ue.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<I.locationSize;me++)_(I.location+me);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let me=0;me<I.locationSize;me++)N(I.location+me,O/I.locationSize,Y,oe,O*pe,O/I.locationSize*me*pe,we)}}else if(se!==void 0){const oe=se[ce];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(I.location,oe);break;case 3:i.vertexAttrib3fv(I.location,oe);break;case 4:i.vertexAttrib4fv(I.location,oe);break;default:i.vertexAttrib1fv(I.location,oe)}}}}D()}function V(){k();for(const C in s){const G=s[C];for(const le in G){const Q=G[le];for(const fe in Q)m(Q[fe].object),delete Q[fe];delete G[le]}delete s[C]}}function z(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const le in G){const Q=G[le];for(const fe in Q)m(Q[fe].object),delete Q[fe];delete G[le]}delete s[C.id]}function F(C){for(const G in s){const le=s[G];if(le[C.id]===void 0)continue;const Q=le[C.id];for(const fe in Q)m(Q[fe].object),delete Q[fe];delete le[C.id]}}function k(){P(),c=!0,l!==o&&(l=o,p(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:k,resetDefaultState:P,dispose:V,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:_,disableUnusedAttributes:D}}function x1(i,e,t){let s;function o(p){s=p}function l(p,m){i.drawArrays(s,p,m),t.update(m,s,1)}function c(p,m,g){g!==0&&(i.drawArraysInstanced(s,p,m,g),t.update(m,s,g))}function d(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,g);let S=0;for(let E=0;E<g;E++)S+=m[E];t.update(S,s,1)}function f(p,m,g,y){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],m[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,m,0,y,0,g);let E=0;for(let M=0;M<g;M++)E+=m[M]*y[M];t.update(E,s,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function y1(i,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==_i&&s.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const k=F===xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==er&&s.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Zi&&!k)}function f(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=f(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const g=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,z=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:R,vertexTextures:V,maxSamples:z}}function S1(i){const e=this;let t=null,s=0,o=!1,l=!1;const c=new ss,d=new ft,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||s!==0||o;return o=y,s=g.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,y){t=m(g,y,0)},this.setState=function(g,y,S){const E=g.clippingPlanes,M=g.clipIntersection,_=g.clipShadows,x=i.get(g);if(!o||E===null||E.length===0||l&&!_)l?m(null):p();else{const D=l?0:s,N=D*4;let R=x.clippingState||null;f.value=R,R=m(E,y,N,S);for(let V=0;V!==N;++V)R[V]=t[V];x.clippingState=R,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=D}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(g,y,S,E){const M=g!==null?g.length:0;let _=null;if(M!==0){if(_=f.value,E!==!0||_===null){const x=S+M*4,D=y.matrixWorldInverse;d.getNormalMatrix(D),(_===null||_.length<x)&&(_=new Float32Array(x));for(let N=0,R=S;N!==M;++N,R+=4)c.copy(g[N]).applyMatrix4(D,d),c.normal.toArray(_,R),_[R+3]=c.constant}f.value=_,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,_}}function E1(i){let e=new WeakMap;function t(c,d){return d===vf?c.mapping=co:d===_f&&(c.mapping=uo),c}function s(c){if(c&&c.isTexture){const d=c.mapping;if(d===vf||d===_f)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const p=new Ew(f.height);return p.fromEquirectangularTexture(i,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const d=c.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const so=4,Gg=[.125,.215,.35,.446,.526,.582],ls=20,Gd=new Dw,Wg=new Ot;let Wd=null,jd=0,Xd=0,qd=!1;const os=(1+Math.sqrt(5))/2,ro=1/os,jg=[new ie(-os,ro,0),new ie(os,ro,0),new ie(-ro,0,os),new ie(ro,0,os),new ie(0,os,-ro),new ie(0,os,ro),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)],M1=new ie;class Xg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100,l={}){const{size:c=256,position:d=M1}=l;Wd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,s,o,f,d),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wd,jd,Xd),this._renderer.xr.enabled=qd,e.scissorTest=!1,tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===co||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:xa,format:_i,colorSpace:fo,depthBuffer:!1},o=qg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w1(l)),this._blurMaterial=b1(l,e,t)}return o}_compileMaterial(e){const t=new Ri(this._lodPlanes[0],e);this._renderer.compile(t,Gd)}_sceneToCubeUV(e,t,s,o,l){const f=new mi(90,1,t,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(Wg),g.toneMapping=Or,g.autoClear=!1;const E=new T_({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),M=new Ri(new Ma,E);let _=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,_=!0):(E.color.copy(Wg),_=!0);for(let D=0;D<6;D++){const N=D%3;N===0?(f.up.set(0,p[D],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+m[D],l.y,l.z)):N===1?(f.up.set(0,0,p[D]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+m[D],l.z)):(f.up.set(0,p[D],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+m[D]));const R=this._cubeSize;tc(o,N*R,D>2?R:0,R,R),g.setRenderTarget(o),_&&g.render(M,f),g.render(e,f)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=S,g.autoClear=y,e.background=x}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===co||e.mapping===uo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$g());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Ri(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;tc(t,0,0,3*f,2*f),s.setRenderTarget(t),s.render(c,Gd)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=jg[(o-l-1)%jg.length];this._blur(e,l-1,l,c,d)}t.autoClear=s}_blur(e,t,s,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,o,"latitudinal",l),this._halfBlur(c,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,c,d){const f=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Ri(this._lodPlanes[o],p),y=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ls-1),M=l/E,_=isFinite(l)?1+Math.floor(m*M):ls;_>ls&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ls}`);const x=[];let D=0;for(let F=0;F<ls;++F){const k=F/M,P=Math.exp(-k*k/2);x.push(P),F===0?D+=P:F<_&&(D+=2*P)}for(let F=0;F<x.length;F++)x[F]=x[F]/D;y.envMap.value=e.texture,y.samples.value=_,y.weights.value=x,y.latitudinal.value=c==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:N}=this;y.dTheta.value=E,y.mipInt.value=N-s;const R=this._sizeLods[o],V=3*R*(o>N-so?o-N+so:0),z=4*(this._cubeSize-R);tc(t,V,z,3*R,2*R),f.setRenderTarget(t),f.render(g,Gd)}}function w1(i){const e=[],t=[],s=[];let o=i;const l=i-so+1+Gg.length;for(let c=0;c<l;c++){const d=Math.pow(2,o);t.push(d);let f=1/d;c>i-so?f=Gg[c-i+so-1]:c===0&&(f=0),s.push(f);const p=1/(d-2),m=-p,g=1+p,y=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,E=6,M=3,_=2,x=1,D=new Float32Array(M*E*S),N=new Float32Array(_*E*S),R=new Float32Array(x*E*S);for(let z=0;z<S;z++){const F=z%3*2/3-1,k=z>2?0:-1,P=[F,k,0,F+2/3,k,0,F+2/3,k+1,0,F,k,0,F+2/3,k+1,0,F,k+1,0];D.set(P,M*E*z),N.set(y,_*E*z);const C=[z,z,z,z,z,z];R.set(C,x*E*z)}const V=new xs;V.setAttribute("position",new Pi(D,M)),V.setAttribute("uv",new Pi(N,_)),V.setAttribute("faceIndex",new Pi(R,x)),e.push(V),o>so&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function qg(i,e,t){const s=new gs(i,e,t);return s.texture.mapping=Cc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function tc(i,e,t,s,o){i.viewport.set(e,t,s,o),i.scissor.set(e,t,s,o)}function b1(i,e,t){const s=new Float32Array(ls),o=new ie(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function $g(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Yg(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function fh(){return`

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
	`}function T1(i){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const f=d.mapping,p=f===vf||f===_f,m=f===co||f===uo;if(p||m){let g=e.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new Xg(i)),g=p?t.fromEquirectangular(d,g):t.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||m&&S&&o(S)?(t===null&&(t=new Xg(i)),g=p?t.fromEquirectangular(d):t.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",l),g.texture):null}}}return d}function o(d){let f=0;const p=6;for(let m=0;m<p;m++)d[m]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function A1(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&fc("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function C1(i,e,t,s){const o={},l=new WeakMap;function c(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",c),delete o[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(g,y){return o[y.id]===!0||(y.addEventListener("dispose",c),o[y.id]=!0,t.memory.geometries++),y}function f(g){const y=g.attributes;for(const S in y)e.update(y[S],i.ARRAY_BUFFER)}function p(g){const y=[],S=g.index,E=g.attributes.position;let M=0;if(S!==null){const D=S.array;M=S.version;for(let N=0,R=D.length;N<R;N+=3){const V=D[N+0],z=D[N+1],F=D[N+2];y.push(V,z,z,F,F,V)}}else if(E!==void 0){const D=E.array;M=E.version;for(let N=0,R=D.length/3-1;N<R;N+=3){const V=N+0,z=N+1,F=N+2;y.push(V,z,z,F,F,V)}}else return;const _=new(E_(y)?C_:A_)(y,1);_.version=M;const x=l.get(g);x&&e.remove(x),l.set(g,_)}function m(g){const y=l.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:d,update:f,getWireframeAttribute:m}}function R1(i,e,t){let s;function o(y){s=y}let l,c;function d(y){l=y.type,c=y.bytesPerElement}function f(y,S){i.drawElements(s,S,l,y*c),t.update(S,s,1)}function p(y,S,E){E!==0&&(i.drawElementsInstanced(s,S,l,y*c,E),t.update(S,s,E))}function m(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,y,0,E);let _=0;for(let x=0;x<E;x++)_+=S[x];t.update(_,s,1)}function g(y,S,E,M){if(E===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<y.length;x++)p(y[x]/c,S[x],M[x]);else{_.multiDrawElementsInstancedWEBGL(s,S,0,l,y,0,M,0,E);let x=0;for(let D=0;D<E;D++)x+=S[D]*M[D];t.update(x,s,1)}}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function P1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,d){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=d*(l/3);break;case i.LINES:t.lines+=d*(l/2);break;case i.LINE_STRIP:t.lines+=d*(l-1);break;case i.LINE_LOOP:t.lines+=d*l;break;case i.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function N1(i,e,t){const s=new WeakMap,o=new Kt;function l(c,d,f){const p=c.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=m!==void 0?m.length:0;let y=s.get(d);if(y===void 0||y.count!==g){let C=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),M===!0&&(R=2),_===!0&&(R=3);let V=d.attributes.position.count*R,z=1;V>e.maxTextureSize&&(z=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const F=new Float32Array(V*z*4*g),k=new M_(F,V,z,g);k.type=Zi,k.needsUpdate=!0;const P=R*4;for(let G=0;G<g;G++){const le=x[G],Q=D[G],fe=N[G],he=V*z*4*G;for(let se=0;se<le.count;se++){const ce=se*P;E===!0&&(o.fromBufferAttribute(le,se),F[he+ce+0]=o.x,F[he+ce+1]=o.y,F[he+ce+2]=o.z,F[he+ce+3]=0),M===!0&&(o.fromBufferAttribute(Q,se),F[he+ce+4]=o.x,F[he+ce+5]=o.y,F[he+ce+6]=o.z,F[he+ce+7]=0),_===!0&&(o.fromBufferAttribute(fe,se),F[he+ce+8]=o.x,F[he+ce+9]=o.y,F[he+ce+10]=o.z,F[he+ce+11]=fe.itemSize===4?o.w:1)}}y={count:g,texture:k,size:new Ut(V,z)},s.set(d,y),d.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let E=0;for(let _=0;_<p.length;_++)E+=p[_];const M=d.morphTargetsRelative?1:1-E;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",p)}f.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}return{update:l}}function L1(i,e,t,s){let o=new WeakMap;function l(f){const p=s.render.frame,m=f.geometry,g=e.get(f,m);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),o.get(f)!==p&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const y=f.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return g}function c(){o=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const U_=new Ln,Kg=new L_(1,1),I_=new M_,O_=new rw,F_=new P_,Zg=[],Jg=[],Qg=new Float32Array(16),ev=new Float32Array(9),tv=new Float32Array(4);function yo(i,e,t){const s=i[0];if(s<=0||s>0)return i;const o=e*t;let l=Zg[o];if(l===void 0&&(l=new Float32Array(o),Zg[o]=l),e!==0){s.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,i[c].toArray(l,d)}return l}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function Pc(i,e){let t=Jg[e];t===void 0&&(t=new Int32Array(e),Jg[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function D1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function U1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function I1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function O1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function F1(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,s))return;tv.set(s),i.uniformMatrix2fv(this.addr,!1,tv),an(t,s)}}function k1(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,s))return;ev.set(s),i.uniformMatrix3fv(this.addr,!1,ev),an(t,s)}}function B1(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,s))return;Qg.set(s),i.uniformMatrix4fv(this.addr,!1,Qg),an(t,s)}}function z1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function H1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function V1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function G1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function W1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function j1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function X1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function q1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function $1(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let l;this.type===i.SAMPLER_2D_SHADOW?(Kg.compareFunction=S_,l=Kg):l=U_,t.setTexture2D(e||l,o)}function Y1(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||O_,o)}function K1(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||F_,o)}function Z1(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||I_,o)}function J1(i){switch(i){case 5126:return D1;case 35664:return U1;case 35665:return I1;case 35666:return O1;case 35674:return F1;case 35675:return k1;case 35676:return B1;case 5124:case 35670:return z1;case 35667:case 35671:return H1;case 35668:case 35672:return V1;case 35669:case 35673:return G1;case 5125:return W1;case 36294:return j1;case 36295:return X1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Z1}}function Q1(i,e){i.uniform1fv(this.addr,e)}function eA(i,e){const t=yo(e,this.size,2);i.uniform2fv(this.addr,t)}function tA(i,e){const t=yo(e,this.size,3);i.uniform3fv(this.addr,t)}function nA(i,e){const t=yo(e,this.size,4);i.uniform4fv(this.addr,t)}function iA(i,e){const t=yo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rA(i,e){const t=yo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sA(i,e){const t=yo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function oA(i,e){i.uniform1iv(this.addr,e)}function aA(i,e){i.uniform2iv(this.addr,e)}function lA(i,e){i.uniform3iv(this.addr,e)}function cA(i,e){i.uniform4iv(this.addr,e)}function uA(i,e){i.uniform1uiv(this.addr,e)}function dA(i,e){i.uniform2uiv(this.addr,e)}function fA(i,e){i.uniform3uiv(this.addr,e)}function hA(i,e){i.uniform4uiv(this.addr,e)}function pA(i,e,t){const s=this.cache,o=e.length,l=Pc(t,o);on(s,l)||(i.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||U_,l[c])}function mA(i,e,t){const s=this.cache,o=e.length,l=Pc(t,o);on(s,l)||(i.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||O_,l[c])}function gA(i,e,t){const s=this.cache,o=e.length,l=Pc(t,o);on(s,l)||(i.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||F_,l[c])}function vA(i,e,t){const s=this.cache,o=e.length,l=Pc(t,o);on(s,l)||(i.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||I_,l[c])}function _A(i){switch(i){case 5126:return Q1;case 35664:return eA;case 35665:return tA;case 35666:return nA;case 35674:return iA;case 35675:return rA;case 35676:return sA;case 5124:case 35670:return oA;case 35667:case 35671:return aA;case 35668:case 35672:return lA;case 35669:case 35673:return cA;case 5125:return uA;case 36294:return dA;case 36295:return fA;case 36296:return hA;case 35678:case 36198:case 36298:case 36306:case 35682:return pA;case 35679:case 36299:case 36307:return mA;case 35680:case 36300:case 36308:case 36293:return gA;case 36289:case 36303:case 36311:case 36292:return vA}}class xA{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=J1(t.type)}}class yA{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_A(t.type)}}class SA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const d=o[l];d.setValue(e,t[d.id],s)}}}const $d=/(\w+)(\])?(\[|\.)?/g;function nv(i,e){i.seq.push(e),i.map[e.id]=e}function EA(i,e,t){const s=i.name,o=s.length;for($d.lastIndex=0;;){const l=$d.exec(s),c=$d.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&c+2===o){nv(t,p===void 0?new xA(d,i,e):new yA(d,i,e));break}else{let g=t.map[d];g===void 0&&(g=new SA(d),nv(t,g)),t=g}}}class hc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);EA(l,c,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){const d=t[l],f=s[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&s.push(c)}return s}}function iv(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const MA=37297;let wA=0;function bA(i,e){const t=i.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const d=c+1;s.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return s.join(`
`)}const rv=new ft;function TA(i){Ct._getMatrix(rv,Ct.workingColorSpace,i);const e=`mat3( ${rv.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(i)){case vc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sv(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+bA(i.getShaderSource(e),c)}else return o}function AA(i,e){const t=TA(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function CA(i,e){let t;switch(e){case RM:t="Linear";break;case PM:t="Reinhard";break;case NM:t="Cineon";break;case LM:t="ACESFilmic";break;case UM:t="AgX";break;case IM:t="Neutral";break;case DM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nc=new ie;function RA(){Ct.getLuminanceCoefficients(nc);const i=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function NA(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function LA(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=i.getActiveAttrib(e,o),c=l.name;let d=1;l.type===i.FLOAT_MAT2&&(d=2),l.type===i.FLOAT_MAT3&&(d=3),l.type===i.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:d}}return t}function oa(i){return i!==""}function ov(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function av(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DA=/^[ \t]*#include +<([\w\d./]+)>/gm;function qf(i){return i.replace(DA,IA)}const UA=new Map;function IA(i,e){let t=ht[e];if(t===void 0){const s=UA.get(e);if(s!==void 0)t=ht[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return qf(t)}const OA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lv(i){return i.replace(OA,FA)}function FA(i,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function cv(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function kA(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===u_?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===lM?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function BA(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case co:case uo:e="ENVMAP_TYPE_CUBE";break;case Cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zA(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function HA(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case d_:e="ENVMAP_BLENDING_MULTIPLY";break;case AM:e="ENVMAP_BLENDING_MIX";break;case CM:e="ENVMAP_BLENDING_ADD";break}return e}function VA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function GA(i,e,t,s){const o=i.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const f=kA(t),p=BA(t),m=zA(t),g=HA(t),y=VA(t),S=PA(t),E=NA(l),M=o.createProgram();let _,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(oa).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(oa).join(`
`),x.length>0&&(x+=`
`)):(_=[cv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),x=[cv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?ht.tonemapping_pars_fragment:"",t.toneMapping!==Or?CA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,AA("linearToOutputTexel",t.outputColorSpace),RA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oa).join(`
`)),c=qf(c),c=ov(c,t),c=av(c,t),d=qf(d),d=ov(d,t),d=av(d,t),c=lv(c),d=lv(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===Mg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=D+_+c,R=D+x+d,V=iv(o,o.VERTEX_SHADER,N),z=iv(o,o.FRAGMENT_SHADER,R);o.attachShader(M,V),o.attachShader(M,z),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function F(G){if(i.debug.checkShaderErrors){const le=o.getProgramInfoLog(M).trim(),Q=o.getShaderInfoLog(V).trim(),fe=o.getShaderInfoLog(z).trim();let he=!0,se=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(he=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,M,V,z);else{const ce=sv(o,V,"vertex"),I=sv(o,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+le+`
`+ce+`
`+I)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(Q===""||fe==="")&&(se=!1);se&&(G.diagnostics={runnable:he,programLog:le,vertexShader:{log:Q,prefix:_},fragmentShader:{log:fe,prefix:x}})}o.deleteShader(V),o.deleteShader(z),k=new hc(o,M),P=LA(o,M)}let k;this.getUniforms=function(){return k===void 0&&F(this),k};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(M,MA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wA++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=V,this.fragmentShader=z,this}let WA=0;class jA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new XA(e),t.set(e,s)),s}}class XA{constructor(e){this.id=WA++,this.code=e,this.usedTimes=0}}function qA(i,e,t,s,o,l,c){const d=new w_,f=new jA,p=new Set,m=[],g=o.logarithmicDepthBuffer,y=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(P){return p.add(P),P===0?"uv":`uv${P}`}function _(P,C,G,le,Q){const fe=le.fog,he=Q.geometry,se=P.isMeshStandardMaterial?le.environment:null,ce=(P.isMeshStandardMaterial?t:e).get(P.envMap||se),I=ce&&ce.mapping===Cc?ce.image.height:null,ue=E[P.type];P.precision!==null&&(S=o.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const oe=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,O=oe!==void 0?oe.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let Ae,Y,pe,we;if(ue){const wt=Ci[ue];Ae=wt.vertexShader,Y=wt.fragmentShader}else Ae=P.vertexShader,Y=P.fragmentShader,f.update(P),pe=f.getVertexShaderID(P),we=f.getFragmentShaderID(P);const me=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),qe=Q.isInstancedMesh===!0,ke=Q.isBatchedMesh===!0,Pt=!!P.map,Rt=!!P.matcap,pt=!!ce,H=!!P.aoMap,Tn=!!P.lightMap,xt=!!P.bumpMap,gt=!!P.normalMap,Ze=!!P.displacementMap,Dt=!!P.emissiveMap,Ye=!!P.metalnessMap,L=!!P.roughnessMap,b=P.anisotropy>0,J=P.clearcoat>0,ge=P.dispersion>0,Se=P.iridescence>0,de=P.sheen>0,$e=P.transmission>0,Re=b&&!!P.anisotropyMap,et=J&&!!P.clearcoatMap,Qe=J&&!!P.clearcoatNormalMap,Ee=J&&!!P.clearcoatRoughnessMap,Be=Se&&!!P.iridescenceMap,rt=Se&&!!P.iridescenceThicknessMap,st=de&&!!P.sheenColorMap,ze=de&&!!P.sheenRoughnessMap,vt=!!P.specularMap,lt=!!P.specularColorMap,Nt=!!P.specularIntensityMap,j=$e&&!!P.transmissionMap,Pe=$e&&!!P.thicknessMap,ae=!!P.gradientMap,ve=!!P.alphaMap,Ue=P.alphaTest>0,De=!!P.alphaHash,ct=!!P.extensions;let Bt=Or;P.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Bt=i.toneMapping);const tn={shaderID:ue,shaderType:P.type,shaderName:P.name,vertexShader:Ae,fragmentShader:Y,defines:P.defines,customVertexShaderID:pe,customFragmentShaderID:we,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:ke,batchingColor:ke&&Q._colorsTexture!==null,instancing:qe,instancingColor:qe&&Q.instanceColor!==null,instancingMorph:qe&&Q.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:fo,alphaToCoverage:!!P.alphaToCoverage,map:Pt,matcap:Rt,envMap:pt,envMapMode:pt&&ce.mapping,envMapCubeUVHeight:I,aoMap:H,lightMap:Tn,bumpMap:xt,normalMap:gt,displacementMap:y&&Ze,emissiveMap:Dt,normalMapObjectSpace:gt&&P.normalMapType===zM,normalMapTangentSpace:gt&&P.normalMapType===BM,metalnessMap:Ye,roughnessMap:L,anisotropy:b,anisotropyMap:Re,clearcoat:J,clearcoatMap:et,clearcoatNormalMap:Qe,clearcoatRoughnessMap:Ee,dispersion:ge,iridescence:Se,iridescenceMap:Be,iridescenceThicknessMap:rt,sheen:de,sheenColorMap:st,sheenRoughnessMap:ze,specularMap:vt,specularColorMap:lt,specularIntensityMap:Nt,transmission:$e,transmissionMap:j,thicknessMap:Pe,gradientMap:ae,opaque:P.transparent===!1&&P.blending===oo&&P.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ue,alphaHash:De,combine:P.combine,mapUv:Pt&&M(P.map.channel),aoMapUv:H&&M(P.aoMap.channel),lightMapUv:Tn&&M(P.lightMap.channel),bumpMapUv:xt&&M(P.bumpMap.channel),normalMapUv:gt&&M(P.normalMap.channel),displacementMapUv:Ze&&M(P.displacementMap.channel),emissiveMapUv:Dt&&M(P.emissiveMap.channel),metalnessMapUv:Ye&&M(P.metalnessMap.channel),roughnessMapUv:L&&M(P.roughnessMap.channel),anisotropyMapUv:Re&&M(P.anisotropyMap.channel),clearcoatMapUv:et&&M(P.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&M(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&M(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&M(P.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&M(P.iridescenceThicknessMap.channel),sheenColorMapUv:st&&M(P.sheenColorMap.channel),sheenRoughnessMapUv:ze&&M(P.sheenRoughnessMap.channel),specularMapUv:vt&&M(P.specularMap.channel),specularColorMapUv:lt&&M(P.specularColorMap.channel),specularIntensityMapUv:Nt&&M(P.specularIntensityMap.channel),transmissionMapUv:j&&M(P.transmissionMap.channel),thicknessMapUv:Pe&&M(P.thicknessMap.channel),alphaMapUv:ve&&M(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(gt||b),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!he.attributes.uv&&(Pt||ve),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ce,skinning:Q.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Pt&&P.map.isVideoTexture===!0&&Ct.getTransfer(P.map.colorSpace)===It,decodeVideoTextureEmissive:Dt&&P.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(P.emissiveMap.colorSpace)===It,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ki,flipSided:P.side===Gn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ct&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&P.extensions.multiDraw===!0||ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function x(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const G in P.defines)C.push(G),C.push(P.defines[G]);return P.isRawShaderMaterial===!1&&(D(C,P),N(C,P),C.push(i.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function D(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function N(P,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),P.push(d.mask)}function R(P){const C=E[P.type];let G;if(C){const le=Ci[C];G=_w.clone(le.uniforms)}else G=P.uniforms;return G}function V(P,C){let G;for(let le=0,Q=m.length;le<Q;le++){const fe=m[le];if(fe.cacheKey===C){G=fe,++G.usedTimes;break}}return G===void 0&&(G=new GA(i,C,P,l),m.push(G)),G}function z(P){if(--P.usedTimes===0){const C=m.indexOf(P);m[C]=m[m.length-1],m.pop(),P.destroy()}}function F(P){f.remove(P)}function k(){f.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:R,acquireProgram:V,releaseProgram:z,releaseShaderCache:F,programs:m,dispose:k}}function $A(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let d=i.get(c);return d===void 0&&(d={},i.set(c,d)),d}function s(c){i.delete(c)}function o(c,d,f){i.get(c)[d]=f}function l(){i=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function YA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function uv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dv(){const i=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(g,y,S,E,M,_){let x=i[e];return x===void 0?(x={id:g.id,object:g,geometry:y,material:S,groupOrder:E,renderOrder:g.renderOrder,z:M,group:_},i[e]=x):(x.id=g.id,x.object=g,x.geometry=y,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=M,x.group=_),e++,x}function d(g,y,S,E,M,_){const x=c(g,y,S,E,M,_);S.transmission>0?s.push(x):S.transparent===!0?o.push(x):t.push(x)}function f(g,y,S,E,M,_){const x=c(g,y,S,E,M,_);S.transmission>0?s.unshift(x):S.transparent===!0?o.unshift(x):t.unshift(x)}function p(g,y){t.length>1&&t.sort(g||YA),s.length>1&&s.sort(y||uv),o.length>1&&o.sort(y||uv)}function m(){for(let g=e,y=i.length;g<y;g++){const S=i[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:d,unshift:f,finish:m,sort:p}}function KA(){let i=new WeakMap;function e(s,o){const l=i.get(s);let c;return l===void 0?(c=new dv,i.set(s,[c])):o>=l.length?(c=new dv,l.push(c)):c=l[o],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function ZA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Ot};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return i[e.id]=t,t}}}function JA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let QA=0;function eC(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tC(i){const e=new ZA,t=JA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ie);const o=new ie,l=new en,c=new en;function d(p){let m=0,g=0,y=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let S=0,E=0,M=0,_=0,x=0,D=0,N=0,R=0,V=0,z=0,F=0;p.sort(eC);for(let P=0,C=p.length;P<C;P++){const G=p[P],le=G.color,Q=G.intensity,fe=G.distance,he=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)m+=le.r*Q,g+=le.g*Q,y+=le.b*Q;else if(G.isLightProbe){for(let se=0;se<9;se++)s.probe[se].addScaledVector(G.sh.coefficients[se],Q);F++}else if(G.isDirectionalLight){const se=e.get(G);if(se.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const ce=G.shadow,I=t.get(G);I.shadowIntensity=ce.intensity,I.shadowBias=ce.bias,I.shadowNormalBias=ce.normalBias,I.shadowRadius=ce.radius,I.shadowMapSize=ce.mapSize,s.directionalShadow[S]=I,s.directionalShadowMap[S]=he,s.directionalShadowMatrix[S]=G.shadow.matrix,D++}s.directional[S]=se,S++}else if(G.isSpotLight){const se=e.get(G);se.position.setFromMatrixPosition(G.matrixWorld),se.color.copy(le).multiplyScalar(Q),se.distance=fe,se.coneCos=Math.cos(G.angle),se.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),se.decay=G.decay,s.spot[M]=se;const ce=G.shadow;if(G.map&&(s.spotLightMap[V]=G.map,V++,ce.updateMatrices(G),G.castShadow&&z++),s.spotLightMatrix[M]=ce.matrix,G.castShadow){const I=t.get(G);I.shadowIntensity=ce.intensity,I.shadowBias=ce.bias,I.shadowNormalBias=ce.normalBias,I.shadowRadius=ce.radius,I.shadowMapSize=ce.mapSize,s.spotShadow[M]=I,s.spotShadowMap[M]=he,R++}M++}else if(G.isRectAreaLight){const se=e.get(G);se.color.copy(le).multiplyScalar(Q),se.halfWidth.set(G.width*.5,0,0),se.halfHeight.set(0,G.height*.5,0),s.rectArea[_]=se,_++}else if(G.isPointLight){const se=e.get(G);if(se.color.copy(G.color).multiplyScalar(G.intensity),se.distance=G.distance,se.decay=G.decay,G.castShadow){const ce=G.shadow,I=t.get(G);I.shadowIntensity=ce.intensity,I.shadowBias=ce.bias,I.shadowNormalBias=ce.normalBias,I.shadowRadius=ce.radius,I.shadowMapSize=ce.mapSize,I.shadowCameraNear=ce.camera.near,I.shadowCameraFar=ce.camera.far,s.pointShadow[E]=I,s.pointShadowMap[E]=he,s.pointShadowMatrix[E]=G.shadow.matrix,N++}s.point[E]=se,E++}else if(G.isHemisphereLight){const se=e.get(G);se.skyColor.copy(G.color).multiplyScalar(Q),se.groundColor.copy(G.groundColor).multiplyScalar(Q),s.hemi[x]=se,x++}}_>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=g,s.ambient[2]=y;const k=s.hash;(k.directionalLength!==S||k.pointLength!==E||k.spotLength!==M||k.rectAreaLength!==_||k.hemiLength!==x||k.numDirectionalShadows!==D||k.numPointShadows!==N||k.numSpotShadows!==R||k.numSpotMaps!==V||k.numLightProbes!==F)&&(s.directional.length=S,s.spot.length=M,s.rectArea.length=_,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=R+V-z,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=F,k.directionalLength=S,k.pointLength=E,k.spotLength=M,k.rectAreaLength=_,k.hemiLength=x,k.numDirectionalShadows=D,k.numPointShadows=N,k.numSpotShadows=R,k.numSpotMaps=V,k.numLightProbes=F,s.version=QA++)}function f(p,m){let g=0,y=0,S=0,E=0,M=0;const _=m.matrixWorldInverse;for(let x=0,D=p.length;x<D;x++){const N=p[x];if(N.isDirectionalLight){const R=s.directional[g];R.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(_),g++}else if(N.isSpotLight){const R=s.spot[S];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(_),S++}else if(N.isRectAreaLight){const R=s.rectArea[E];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(_),c.identity(),l.copy(N.matrixWorld),l.premultiply(_),c.extractRotation(l),R.halfWidth.set(N.width*.5,0,0),R.halfHeight.set(0,N.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),E++}else if(N.isPointLight){const R=s.point[y];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(_),y++}else if(N.isHemisphereLight){const R=s.hemi[M];R.direction.setFromMatrixPosition(N.matrixWorld),R.direction.transformDirection(_),M++}}}return{setup:d,setupView:f,state:s}}function fv(i){const e=new tC(i),t=[],s=[];function o(m){p.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function d(){e.setup(t)}function f(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:c}}function nC(i){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let d;return c===void 0?(d=new fv(i),e.set(o,[d])):l>=c.length?(d=new fv(i),c.push(d)):d=c[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}const iC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rC=`uniform sampler2D shadow_pass;
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
}`;function sC(i,e,t){let s=new N_;const o=new Ut,l=new Ut,c=new Kt,d=new Aw({depthPacking:kM}),f=new Cw,p={},m=t.maxTextureSize,g={[Fr]:Gn,[Gn]:Fr,[Ki]:Ki},y=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:iC,fragmentShader:rC}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new xs;E.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ri(E,y),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=u_;let x=this.type;this.render=function(z,F,k){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||z.length===0)return;const P=i.getRenderTarget(),C=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),le=i.state;le.setBlending(Ir),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const Q=x!==Yi&&this.type===Yi,fe=x===Yi&&this.type!==Yi;for(let he=0,se=z.length;he<se;he++){const ce=z[he],I=ce.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;o.copy(I.mapSize);const ue=I.getFrameExtents();if(o.multiply(ue),l.copy(I.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/ue.x),o.x=l.x*ue.x,I.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/ue.y),o.y=l.y*ue.y,I.mapSize.y=l.y)),I.map===null||Q===!0||fe===!0){const O=this.type!==Yi?{minFilter:xi,magFilter:xi}:{};I.map!==null&&I.map.dispose(),I.map=new gs(o.x,o.y,O),I.map.texture.name=ce.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const oe=I.getViewportCount();for(let O=0;O<oe;O++){const ne=I.getViewport(O);c.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),le.viewport(c),I.updateMatrices(ce,O),s=I.getFrustum(),R(F,k,I.camera,ce,this.type)}I.isPointLightShadow!==!0&&this.type===Yi&&D(I,k),I.needsUpdate=!1}x=this.type,_.needsUpdate=!1,i.setRenderTarget(P,C,G)};function D(z,F){const k=e.update(M);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new gs(o.x,o.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,i.setRenderTarget(z.mapPass),i.clear(),i.renderBufferDirect(F,null,k,y,M,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,i.setRenderTarget(z.map),i.clear(),i.renderBufferDirect(F,null,k,S,M,null)}function N(z,F,k,P){let C=null;const G=k.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)C=G;else if(C=k.isPointLight===!0?f:d,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const le=C.uuid,Q=F.uuid;let fe=p[le];fe===void 0&&(fe={},p[le]=fe);let he=fe[Q];he===void 0&&(he=C.clone(),fe[Q]=he,F.addEventListener("dispose",V)),C=he}if(C.visible=F.visible,C.wireframe=F.wireframe,P===Yi?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:g[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const le=i.properties.get(C);le.light=k}return C}function R(z,F,k,P,C){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&C===Yi)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,z.matrixWorld);const Q=e.update(z),fe=z.material;if(Array.isArray(fe)){const he=Q.groups;for(let se=0,ce=he.length;se<ce;se++){const I=he[se],ue=fe[I.materialIndex];if(ue&&ue.visible){const oe=N(z,ue,P,C);z.onBeforeShadow(i,z,F,k,Q,oe,I),i.renderBufferDirect(k,null,Q,oe,z,I),z.onAfterShadow(i,z,F,k,Q,oe,I)}}}else if(fe.visible){const he=N(z,fe,P,C);z.onBeforeShadow(i,z,F,k,Q,he,null),i.renderBufferDirect(k,null,Q,he,z,null),z.onAfterShadow(i,z,F,k,Q,he,null)}}const le=z.children;for(let Q=0,fe=le.length;Q<fe;Q++)R(le[Q],F,k,P,C)}function V(z){z.target.removeEventListener("dispose",V);for(const k in p){const P=p[k],C=z.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const oC={[uf]:df,[ff]:mf,[hf]:gf,[lo]:pf,[df]:uf,[mf]:ff,[gf]:hf,[pf]:lo};function aC(i,e){function t(){let j=!1;const Pe=new Kt;let ae=null;const ve=new Kt(0,0,0,0);return{setMask:function(Ue){ae!==Ue&&!j&&(i.colorMask(Ue,Ue,Ue,Ue),ae=Ue)},setLocked:function(Ue){j=Ue},setClear:function(Ue,De,ct,Bt,tn){tn===!0&&(Ue*=Bt,De*=Bt,ct*=Bt),Pe.set(Ue,De,ct,Bt),ve.equals(Pe)===!1&&(i.clearColor(Ue,De,ct,Bt),ve.copy(Pe))},reset:function(){j=!1,ae=null,ve.set(-1,0,0,0)}}}function s(){let j=!1,Pe=!1,ae=null,ve=null,Ue=null;return{setReversed:function(De){if(Pe!==De){const ct=e.get("EXT_clip_control");De?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),Pe=De;const Bt=Ue;Ue=null,this.setClear(Bt)}},getReversed:function(){return Pe},setTest:function(De){De?me(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(De){ae!==De&&!j&&(i.depthMask(De),ae=De)},setFunc:function(De){if(Pe&&(De=oC[De]),ve!==De){switch(De){case uf:i.depthFunc(i.NEVER);break;case df:i.depthFunc(i.ALWAYS);break;case ff:i.depthFunc(i.LESS);break;case lo:i.depthFunc(i.LEQUAL);break;case hf:i.depthFunc(i.EQUAL);break;case pf:i.depthFunc(i.GEQUAL);break;case mf:i.depthFunc(i.GREATER);break;case gf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=De}},setLocked:function(De){j=De},setClear:function(De){Ue!==De&&(Pe&&(De=1-De),i.clearDepth(De),Ue=De)},reset:function(){j=!1,ae=null,ve=null,Ue=null,Pe=!1}}}function o(){let j=!1,Pe=null,ae=null,ve=null,Ue=null,De=null,ct=null,Bt=null,tn=null;return{setTest:function(wt){j||(wt?me(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(wt){Pe!==wt&&!j&&(i.stencilMask(wt),Pe=wt)},setFunc:function(wt,Dn,An){(ae!==wt||ve!==Dn||Ue!==An)&&(i.stencilFunc(wt,Dn,An),ae=wt,ve=Dn,Ue=An)},setOp:function(wt,Dn,An){(De!==wt||ct!==Dn||Bt!==An)&&(i.stencilOp(wt,Dn,An),De=wt,ct=Dn,Bt=An)},setLocked:function(wt){j=wt},setClear:function(wt){tn!==wt&&(i.clearStencil(wt),tn=wt)},reset:function(){j=!1,Pe=null,ae=null,ve=null,Ue=null,De=null,ct=null,Bt=null,tn=null}}}const l=new t,c=new s,d=new o,f=new WeakMap,p=new WeakMap;let m={},g={},y=new WeakMap,S=[],E=null,M=!1,_=null,x=null,D=null,N=null,R=null,V=null,z=null,F=new Ot(0,0,0),k=0,P=!1,C=null,G=null,le=null,Q=null,fe=null;const he=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ce=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(I)[1]),se=ce>=1):I.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),se=ce>=2);let ue=null,oe={};const O=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),Ae=new Kt().fromArray(O),Y=new Kt().fromArray(ne);function pe(j,Pe,ae,ve){const Ue=new Uint8Array(4),De=i.createTexture();i.bindTexture(j,De),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ct=0;ct<ae;ct++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(Pe,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(Pe+ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return De}const we={};we[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),me(i.DEPTH_TEST),c.setFunc(lo),xt(!1),gt(vg),me(i.CULL_FACE),H(Ir);function me(j){m[j]!==!0&&(i.enable(j),m[j]=!0)}function Ce(j){m[j]!==!1&&(i.disable(j),m[j]=!1)}function qe(j,Pe){return g[j]!==Pe?(i.bindFramebuffer(j,Pe),g[j]=Pe,j===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Pe),j===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Pe),!0):!1}function ke(j,Pe){let ae=S,ve=!1;if(j){ae=y.get(Pe),ae===void 0&&(ae=[],y.set(Pe,ae));const Ue=j.textures;if(ae.length!==Ue.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let De=0,ct=Ue.length;De<ct;De++)ae[De]=i.COLOR_ATTACHMENT0+De;ae.length=Ue.length,ve=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ae)}function Pt(j){return E!==j?(i.useProgram(j),E=j,!0):!1}const Rt={[as]:i.FUNC_ADD,[uM]:i.FUNC_SUBTRACT,[dM]:i.FUNC_REVERSE_SUBTRACT};Rt[fM]=i.MIN,Rt[hM]=i.MAX;const pt={[pM]:i.ZERO,[mM]:i.ONE,[gM]:i.SRC_COLOR,[lf]:i.SRC_ALPHA,[EM]:i.SRC_ALPHA_SATURATE,[yM]:i.DST_COLOR,[_M]:i.DST_ALPHA,[vM]:i.ONE_MINUS_SRC_COLOR,[cf]:i.ONE_MINUS_SRC_ALPHA,[SM]:i.ONE_MINUS_DST_COLOR,[xM]:i.ONE_MINUS_DST_ALPHA,[MM]:i.CONSTANT_COLOR,[wM]:i.ONE_MINUS_CONSTANT_COLOR,[bM]:i.CONSTANT_ALPHA,[TM]:i.ONE_MINUS_CONSTANT_ALPHA};function H(j,Pe,ae,ve,Ue,De,ct,Bt,tn,wt){if(j===Ir){M===!0&&(Ce(i.BLEND),M=!1);return}if(M===!1&&(me(i.BLEND),M=!0),j!==cM){if(j!==_||wt!==P){if((x!==as||R!==as)&&(i.blendEquation(i.FUNC_ADD),x=as,R=as),wt)switch(j){case oo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _g:i.blendFunc(i.ONE,i.ONE);break;case xg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yg:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case oo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _g:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yg:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}D=null,N=null,V=null,z=null,F.set(0,0,0),k=0,_=j,P=wt}return}Ue=Ue||Pe,De=De||ae,ct=ct||ve,(Pe!==x||Ue!==R)&&(i.blendEquationSeparate(Rt[Pe],Rt[Ue]),x=Pe,R=Ue),(ae!==D||ve!==N||De!==V||ct!==z)&&(i.blendFuncSeparate(pt[ae],pt[ve],pt[De],pt[ct]),D=ae,N=ve,V=De,z=ct),(Bt.equals(F)===!1||tn!==k)&&(i.blendColor(Bt.r,Bt.g,Bt.b,tn),F.copy(Bt),k=tn),_=j,P=!1}function Tn(j,Pe){j.side===Ki?Ce(i.CULL_FACE):me(i.CULL_FACE);let ae=j.side===Gn;Pe&&(ae=!ae),xt(ae),j.blending===oo&&j.transparent===!1?H(Ir):H(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),l.setMask(j.colorWrite);const ve=j.stencilWrite;d.setTest(ve),ve&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Dt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(j){C!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),C=j)}function gt(j){j!==oM?(me(i.CULL_FACE),j!==G&&(j===vg?i.cullFace(i.BACK):j===aM?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),G=j}function Ze(j){j!==le&&(se&&i.lineWidth(j),le=j)}function Dt(j,Pe,ae){j?(me(i.POLYGON_OFFSET_FILL),(Q!==Pe||fe!==ae)&&(i.polygonOffset(Pe,ae),Q=Pe,fe=ae)):Ce(i.POLYGON_OFFSET_FILL)}function Ye(j){j?me(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function L(j){j===void 0&&(j=i.TEXTURE0+he-1),ue!==j&&(i.activeTexture(j),ue=j)}function b(j,Pe,ae){ae===void 0&&(ue===null?ae=i.TEXTURE0+he-1:ae=ue);let ve=oe[ae];ve===void 0&&(ve={type:void 0,texture:void 0},oe[ae]=ve),(ve.type!==j||ve.texture!==Pe)&&(ue!==ae&&(i.activeTexture(ae),ue=ae),i.bindTexture(j,Pe||we[j]),ve.type=j,ve.texture=Pe)}function J(){const j=oe[ue];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Se(){try{i.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{i.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function $e(){try{i.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Re(){try{i.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Qe(){try{i.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ee(){try{i.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Be(){try{i.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function rt(){try{i.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function st(j){Ae.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),Ae.copy(j))}function ze(j){Y.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),Y.copy(j))}function vt(j,Pe){let ae=p.get(Pe);ae===void 0&&(ae=new WeakMap,p.set(Pe,ae));let ve=ae.get(j);ve===void 0&&(ve=i.getUniformBlockIndex(Pe,j.name),ae.set(j,ve))}function lt(j,Pe){const ve=p.get(Pe).get(j);f.get(Pe)!==ve&&(i.uniformBlockBinding(Pe,ve,j.__bindingPointIndex),f.set(Pe,ve))}function Nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},ue=null,oe={},g={},y=new WeakMap,S=[],E=null,M=!1,_=null,x=null,D=null,N=null,R=null,V=null,z=null,F=new Ot(0,0,0),k=0,P=!1,C=null,G=null,le=null,Q=null,fe=null,Ae.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:me,disable:Ce,bindFramebuffer:qe,drawBuffers:ke,useProgram:Pt,setBlending:H,setMaterial:Tn,setFlipSided:xt,setCullFace:gt,setLineWidth:Ze,setPolygonOffset:Dt,setScissorTest:Ye,activeTexture:L,bindTexture:b,unbindTexture:J,compressedTexImage2D:ge,compressedTexImage3D:Se,texImage2D:Be,texImage3D:rt,updateUBOMapping:vt,uniformBlockBinding:lt,texStorage2D:Qe,texStorage3D:Ee,texSubImage2D:de,texSubImage3D:$e,compressedTexSubImage2D:Re,compressedTexSubImage3D:et,scissor:st,viewport:ze,reset:Nt}}function lC(i,e,t,s,o,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ut,m=new WeakMap;let g;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return S?new OffscreenCanvas(L,b):ma("canvas")}function M(L,b,J){let ge=1;const Se=Ye(L);if((Se.width>J||Se.height>J)&&(ge=J/Math.max(Se.width,Se.height)),ge<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const de=Math.floor(ge*Se.width),$e=Math.floor(ge*Se.height);g===void 0&&(g=E(de,$e));const Re=b?E(de,$e):g;return Re.width=de,Re.height=$e,Re.getContext("2d").drawImage(L,0,0,de,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+de+"x"+$e+")."),Re}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),L;return L}function _(L){return L.generateMipmaps}function x(L){i.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(L,b,J,ge,Se=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de=b;if(b===i.RED&&(J===i.FLOAT&&(de=i.R32F),J===i.HALF_FLOAT&&(de=i.R16F),J===i.UNSIGNED_BYTE&&(de=i.R8)),b===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(de=i.R8UI),J===i.UNSIGNED_SHORT&&(de=i.R16UI),J===i.UNSIGNED_INT&&(de=i.R32UI),J===i.BYTE&&(de=i.R8I),J===i.SHORT&&(de=i.R16I),J===i.INT&&(de=i.R32I)),b===i.RG&&(J===i.FLOAT&&(de=i.RG32F),J===i.HALF_FLOAT&&(de=i.RG16F),J===i.UNSIGNED_BYTE&&(de=i.RG8)),b===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(de=i.RG8UI),J===i.UNSIGNED_SHORT&&(de=i.RG16UI),J===i.UNSIGNED_INT&&(de=i.RG32UI),J===i.BYTE&&(de=i.RG8I),J===i.SHORT&&(de=i.RG16I),J===i.INT&&(de=i.RG32I)),b===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(de=i.RGB8UI),J===i.UNSIGNED_SHORT&&(de=i.RGB16UI),J===i.UNSIGNED_INT&&(de=i.RGB32UI),J===i.BYTE&&(de=i.RGB8I),J===i.SHORT&&(de=i.RGB16I),J===i.INT&&(de=i.RGB32I)),b===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(de=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(de=i.RGBA16UI),J===i.UNSIGNED_INT&&(de=i.RGBA32UI),J===i.BYTE&&(de=i.RGBA8I),J===i.SHORT&&(de=i.RGBA16I),J===i.INT&&(de=i.RGBA32I)),b===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(de=i.RGB9_E5),b===i.RGBA){const $e=Se?vc:Ct.getTransfer(ge);J===i.FLOAT&&(de=i.RGBA32F),J===i.HALF_FLOAT&&(de=i.RGBA16F),J===i.UNSIGNED_BYTE&&(de=$e===It?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(L,b){let J;return L?b===null||b===ms||b===fa?J=i.DEPTH24_STENCIL8:b===Zi?J=i.DEPTH32F_STENCIL8:b===da&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ms||b===fa?J=i.DEPTH_COMPONENT24:b===Zi?J=i.DEPTH_COMPONENT32F:b===da&&(J=i.DEPTH_COMPONENT16),J}function V(L,b){return _(L)===!0||L.isFramebufferTexture&&L.minFilter!==xi&&L.minFilter!==vi?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function z(L){const b=L.target;b.removeEventListener("dispose",z),k(b),b.isVideoTexture&&m.delete(b)}function F(L){const b=L.target;b.removeEventListener("dispose",F),C(b)}function k(L){const b=s.get(L);if(b.__webglInit===void 0)return;const J=L.source,ge=y.get(J);if(ge){const Se=ge[b.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&P(L),Object.keys(ge).length===0&&y.delete(J)}s.remove(L)}function P(L){const b=s.get(L);i.deleteTexture(b.__webglTexture);const J=L.source,ge=y.get(J);delete ge[b.__cacheKey],c.memory.textures--}function C(L){const b=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(b.__webglFramebuffer[ge]))for(let Se=0;Se<b.__webglFramebuffer[ge].length;Se++)i.deleteFramebuffer(b.__webglFramebuffer[ge][Se]);else i.deleteFramebuffer(b.__webglFramebuffer[ge]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ge])}else{if(Array.isArray(b.__webglFramebuffer))for(let ge=0;ge<b.__webglFramebuffer.length;ge++)i.deleteFramebuffer(b.__webglFramebuffer[ge]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ge=0;ge<b.__webglColorRenderbuffer.length;ge++)b.__webglColorRenderbuffer[ge]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ge]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=L.textures;for(let ge=0,Se=J.length;ge<Se;ge++){const de=s.get(J[ge]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),c.memory.textures--),s.remove(J[ge])}s.remove(L)}let G=0;function le(){G=0}function Q(){const L=G;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),G+=1,L}function fe(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function he(L,b){const J=s.get(L);if(L.isVideoTexture&&Ze(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const ge=L.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(J,L,b);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+b)}function se(L,b){const J=s.get(L);if(L.version>0&&J.__version!==L.version){Y(J,L,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+b)}function ce(L,b){const J=s.get(L);if(L.version>0&&J.__version!==L.version){Y(J,L,b);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+b)}function I(L,b){const J=s.get(L);if(L.version>0&&J.__version!==L.version){pe(J,L,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+b)}const ue={[ua]:i.REPEAT,[us]:i.CLAMP_TO_EDGE,[xf]:i.MIRRORED_REPEAT},oe={[xi]:i.NEAREST,[OM]:i.NEAREST_MIPMAP_NEAREST,[Il]:i.NEAREST_MIPMAP_LINEAR,[vi]:i.LINEAR,[xd]:i.LINEAR_MIPMAP_NEAREST,[ds]:i.LINEAR_MIPMAP_LINEAR},O={[HM]:i.NEVER,[qM]:i.ALWAYS,[VM]:i.LESS,[S_]:i.LEQUAL,[GM]:i.EQUAL,[XM]:i.GEQUAL,[WM]:i.GREATER,[jM]:i.NOTEQUAL};function ne(L,b){if(b.type===Zi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===vi||b.magFilter===xd||b.magFilter===Il||b.magFilter===ds||b.minFilter===vi||b.minFilter===xd||b.minFilter===Il||b.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ue[b.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ue[b.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ue[b.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,oe[b.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,oe[b.minFilter]),b.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===xi||b.minFilter!==Il&&b.minFilter!==ds||b.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function Ae(L,b){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",z));const ge=b.source;let Se=y.get(ge);Se===void 0&&(Se={},y.set(ge,Se));const de=fe(b);if(de!==L.__cacheKey){Se[de]===void 0&&(Se[de]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,J=!0),Se[de].usedTimes++;const $e=Se[L.__cacheKey];$e!==void 0&&(Se[L.__cacheKey].usedTimes--,$e.usedTimes===0&&P(b)),L.__cacheKey=de,L.__webglTexture=Se[de].texture}return J}function Y(L,b,J){let ge=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ge=i.TEXTURE_3D);const Se=Ae(L,b),de=b.source;t.bindTexture(ge,L.__webglTexture,i.TEXTURE0+J);const $e=s.get(de);if(de.version!==$e.__version||Se===!0){t.activeTexture(i.TEXTURE0+J);const Re=Ct.getPrimaries(Ct.workingColorSpace),et=b.colorSpace===Lr?null:Ct.getPrimaries(b.colorSpace),Qe=b.colorSpace===Lr||Re===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let Ee=M(b.image,!1,o.maxTextureSize);Ee=Dt(b,Ee);const Be=l.convert(b.format,b.colorSpace),rt=l.convert(b.type);let st=N(b.internalFormat,Be,rt,b.colorSpace,b.isVideoTexture);ne(ge,b);let ze;const vt=b.mipmaps,lt=b.isVideoTexture!==!0,Nt=$e.__version===void 0||Se===!0,j=de.dataReady,Pe=V(b,Ee);if(b.isDepthTexture)st=R(b.format===pa,b.type),Nt&&(lt?t.texStorage2D(i.TEXTURE_2D,1,st,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,st,Ee.width,Ee.height,0,Be,rt,null));else if(b.isDataTexture)if(vt.length>0){lt&&Nt&&t.texStorage2D(i.TEXTURE_2D,Pe,st,vt[0].width,vt[0].height);for(let ae=0,ve=vt.length;ae<ve;ae++)ze=vt[ae],lt?j&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ze.width,ze.height,Be,rt,ze.data):t.texImage2D(i.TEXTURE_2D,ae,st,ze.width,ze.height,0,Be,rt,ze.data);b.generateMipmaps=!1}else lt?(Nt&&t.texStorage2D(i.TEXTURE_2D,Pe,st,Ee.width,Ee.height),j&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Be,rt,Ee.data)):t.texImage2D(i.TEXTURE_2D,0,st,Ee.width,Ee.height,0,Be,rt,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){lt&&Nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,st,vt[0].width,vt[0].height,Ee.depth);for(let ae=0,ve=vt.length;ae<ve;ae++)if(ze=vt[ae],b.format!==_i)if(Be!==null)if(lt){if(j)if(b.layerUpdates.size>0){const Ue=Vg(ze.width,ze.height,b.format,b.type);for(const De of b.layerUpdates){const ct=ze.data.subarray(De*Ue/ze.data.BYTES_PER_ELEMENT,(De+1)*Ue/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,De,ze.width,ze.height,1,Be,ct)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ze.width,ze.height,Ee.depth,Be,ze.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,st,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?j&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ze.width,ze.height,Ee.depth,Be,rt,ze.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,st,ze.width,ze.height,Ee.depth,0,Be,rt,ze.data)}else{lt&&Nt&&t.texStorage2D(i.TEXTURE_2D,Pe,st,vt[0].width,vt[0].height);for(let ae=0,ve=vt.length;ae<ve;ae++)ze=vt[ae],b.format!==_i?Be!==null?lt?j&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,ze.width,ze.height,Be,ze.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,st,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?j&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ze.width,ze.height,Be,rt,ze.data):t.texImage2D(i.TEXTURE_2D,ae,st,ze.width,ze.height,0,Be,rt,ze.data)}else if(b.isDataArrayTexture)if(lt){if(Nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,st,Ee.width,Ee.height,Ee.depth),j)if(b.layerUpdates.size>0){const ae=Vg(Ee.width,Ee.height,b.format,b.type);for(const ve of b.layerUpdates){const Ue=Ee.data.subarray(ve*ae/Ee.data.BYTES_PER_ELEMENT,(ve+1)*ae/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,Ee.width,Ee.height,1,Be,rt,Ue)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,rt,Ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,st,Ee.width,Ee.height,Ee.depth,0,Be,rt,Ee.data);else if(b.isData3DTexture)lt?(Nt&&t.texStorage3D(i.TEXTURE_3D,Pe,st,Ee.width,Ee.height,Ee.depth),j&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,rt,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,st,Ee.width,Ee.height,Ee.depth,0,Be,rt,Ee.data);else if(b.isFramebufferTexture){if(Nt)if(lt)t.texStorage2D(i.TEXTURE_2D,Pe,st,Ee.width,Ee.height);else{let ae=Ee.width,ve=Ee.height;for(let Ue=0;Ue<Pe;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,st,ae,ve,0,Be,rt,null),ae>>=1,ve>>=1}}else if(vt.length>0){if(lt&&Nt){const ae=Ye(vt[0]);t.texStorage2D(i.TEXTURE_2D,Pe,st,ae.width,ae.height)}for(let ae=0,ve=vt.length;ae<ve;ae++)ze=vt[ae],lt?j&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Be,rt,ze):t.texImage2D(i.TEXTURE_2D,ae,st,Be,rt,ze);b.generateMipmaps=!1}else if(lt){if(Nt){const ae=Ye(Ee);t.texStorage2D(i.TEXTURE_2D,Pe,st,ae.width,ae.height)}j&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Be,rt,Ee)}else t.texImage2D(i.TEXTURE_2D,0,st,Be,rt,Ee);_(b)&&x(ge),$e.__version=de.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function pe(L,b,J){if(b.image.length!==6)return;const ge=Ae(L,b),Se=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+J);const de=s.get(Se);if(Se.version!==de.__version||ge===!0){t.activeTexture(i.TEXTURE0+J);const $e=Ct.getPrimaries(Ct.workingColorSpace),Re=b.colorSpace===Lr?null:Ct.getPrimaries(b.colorSpace),et=b.colorSpace===Lr||$e===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const Qe=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,Be=[];for(let ve=0;ve<6;ve++)!Qe&&!Ee?Be[ve]=M(b.image[ve],!0,o.maxCubemapSize):Be[ve]=Ee?b.image[ve].image:b.image[ve],Be[ve]=Dt(b,Be[ve]);const rt=Be[0],st=l.convert(b.format,b.colorSpace),ze=l.convert(b.type),vt=N(b.internalFormat,st,ze,b.colorSpace),lt=b.isVideoTexture!==!0,Nt=de.__version===void 0||ge===!0,j=Se.dataReady;let Pe=V(b,rt);ne(i.TEXTURE_CUBE_MAP,b);let ae;if(Qe){lt&&Nt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,vt,rt.width,rt.height);for(let ve=0;ve<6;ve++){ae=Be[ve].mipmaps;for(let Ue=0;Ue<ae.length;Ue++){const De=ae[Ue];b.format!==_i?st!==null?lt?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,0,0,De.width,De.height,st,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,vt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,0,0,De.width,De.height,st,ze,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,vt,De.width,De.height,0,st,ze,De.data)}}}else{if(ae=b.mipmaps,lt&&Nt){ae.length>0&&Pe++;const ve=Ye(Be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,vt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ee){lt?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Be[ve].width,Be[ve].height,st,ze,Be[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,vt,Be[ve].width,Be[ve].height,0,st,ze,Be[ve].data);for(let Ue=0;Ue<ae.length;Ue++){const ct=ae[Ue].image[ve].image;lt?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,0,0,ct.width,ct.height,st,ze,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,vt,ct.width,ct.height,0,st,ze,ct.data)}}else{lt?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,st,ze,Be[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,vt,st,ze,Be[ve]);for(let Ue=0;Ue<ae.length;Ue++){const De=ae[Ue];lt?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,0,0,st,ze,De.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,vt,st,ze,De.image[ve])}}}_(b)&&x(i.TEXTURE_CUBE_MAP),de.__version=Se.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function we(L,b,J,ge,Se,de){const $e=l.convert(J.format,J.colorSpace),Re=l.convert(J.type),et=N(J.internalFormat,$e,Re,J.colorSpace),Qe=s.get(b),Ee=s.get(J);if(Ee.__renderTarget=b,!Qe.__hasExternalTextures){const Be=Math.max(1,b.width>>de),rt=Math.max(1,b.height>>de);Se===i.TEXTURE_3D||Se===i.TEXTURE_2D_ARRAY?t.texImage3D(Se,de,et,Be,rt,b.depth,0,$e,Re,null):t.texImage2D(Se,de,et,Be,rt,0,$e,Re,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),gt(b)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,Se,Ee.__webglTexture,0,xt(b)):(Se===i.TEXTURE_2D||Se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,Se,Ee.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(L,b,J){if(i.bindRenderbuffer(i.RENDERBUFFER,L),b.depthBuffer){const ge=b.depthTexture,Se=ge&&ge.isDepthTexture?ge.type:null,de=R(b.stencilBuffer,Se),$e=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=xt(b);gt(b)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,de,b.width,b.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,de,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,de,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$e,i.RENDERBUFFER,L)}else{const ge=b.textures;for(let Se=0;Se<ge.length;Se++){const de=ge[Se],$e=l.convert(de.format,de.colorSpace),Re=l.convert(de.type),et=N(de.internalFormat,$e,Re,de.colorSpace),Qe=xt(b);J&&gt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,et,b.width,b.height):gt(b)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,et,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,et,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(b.depthTexture);ge.__renderTarget=b,(!ge.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),he(b.depthTexture,0);const Se=ge.__webglTexture,de=xt(b);if(b.depthTexture.format===ha)gt(b)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0);else if(b.depthTexture.format===pa)gt(b)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function qe(L){const b=s.get(L),J=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ge=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ge){const Se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ge.removeEventListener("dispose",Se)};ge.addEventListener("dispose",Se),b.__depthDisposeCallback=Se}b.__boundDepthTexture=ge}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const ge=L.texture.mipmaps;ge&&ge.length>0?Ce(b.__webglFramebuffer[0],L):Ce(b.__webglFramebuffer,L)}else if(J){b.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ge]),b.__webglDepthbuffer[ge]===void 0)b.__webglDepthbuffer[ge]=i.createRenderbuffer(),me(b.__webglDepthbuffer[ge],L,!1);else{const Se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer[ge];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,de)}}else{const ge=L.texture.mipmaps;if(ge&&ge.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),me(b.__webglDepthbuffer,L,!1);else{const Se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(L,b,J){const ge=s.get(L);b!==void 0&&we(ge.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&qe(L)}function Pt(L){const b=L.texture,J=s.get(L),ge=s.get(b);L.addEventListener("dispose",F);const Se=L.textures,de=L.isWebGLCubeRenderTarget===!0,$e=Se.length>1;if($e||(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=b.version,c.memory.textures++),de){J.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[Re]=[];for(let et=0;et<b.mipmaps.length;et++)J.__webglFramebuffer[Re][et]=i.createFramebuffer()}else J.__webglFramebuffer[Re]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let Re=0;Re<b.mipmaps.length;Re++)J.__webglFramebuffer[Re]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if($e)for(let Re=0,et=Se.length;Re<et;Re++){const Qe=s.get(Se[Re]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),c.memory.textures++)}if(L.samples>0&&gt(L)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Re=0;Re<Se.length;Re++){const et=Se[Re];J.__webglColorRenderbuffer[Re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Re]);const Qe=l.convert(et.format,et.colorSpace),Ee=l.convert(et.type),Be=N(et.internalFormat,Qe,Ee,et.colorSpace,L.isXRRenderTarget===!0),rt=xt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Be,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,J.__webglColorRenderbuffer[Re])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),me(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),ne(i.TEXTURE_CUBE_MAP,b);for(let Re=0;Re<6;Re++)if(b.mipmaps&&b.mipmaps.length>0)for(let et=0;et<b.mipmaps.length;et++)we(J.__webglFramebuffer[Re][et],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,et);else we(J.__webglFramebuffer[Re],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);_(b)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Re=0,et=Se.length;Re<et;Re++){const Qe=Se[Re],Ee=s.get(Qe);t.bindTexture(i.TEXTURE_2D,Ee.__webglTexture),ne(i.TEXTURE_2D,Qe),we(J.__webglFramebuffer,L,Qe,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,0),_(Qe)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let Re=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Re=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Re,ge.__webglTexture),ne(Re,b),b.mipmaps&&b.mipmaps.length>0)for(let et=0;et<b.mipmaps.length;et++)we(J.__webglFramebuffer[et],L,b,i.COLOR_ATTACHMENT0,Re,et);else we(J.__webglFramebuffer,L,b,i.COLOR_ATTACHMENT0,Re,0);_(b)&&x(Re),t.unbindTexture()}L.depthBuffer&&qe(L)}function Rt(L){const b=L.textures;for(let J=0,ge=b.length;J<ge;J++){const Se=b[J];if(_(Se)){const de=D(L),$e=s.get(Se).__webglTexture;t.bindTexture(de,$e),x(de),t.unbindTexture()}}}const pt=[],H=[];function Tn(L){if(L.samples>0){if(gt(L)===!1){const b=L.textures,J=L.width,ge=L.height;let Se=i.COLOR_BUFFER_BIT;const de=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$e=s.get(L),Re=b.length>1;if(Re)for(let Qe=0;Qe<b.length;Qe++)t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const et=L.texture.mipmaps;et&&et.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Qe=0;Qe<b.length;Qe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Se|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Se|=i.STENCIL_BUFFER_BIT)),Re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$e.__webglColorRenderbuffer[Qe]);const Ee=s.get(b[Qe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,J,ge,0,0,J,ge,Se,i.NEAREST),f===!0&&(pt.length=0,H.length=0,pt.push(i.COLOR_ATTACHMENT0+Qe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(pt.push(de),H.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Re)for(let Qe=0;Qe<b.length;Qe++){t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.RENDERBUFFER,$e.__webglColorRenderbuffer[Qe]);const Ee=s.get(b[Qe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&f){const b=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function xt(L){return Math.min(o.maxSamples,L.samples)}function gt(L){const b=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ze(L){const b=c.render.frame;m.get(L)!==b&&(m.set(L,b),L.update())}function Dt(L,b){const J=L.colorSpace,ge=L.format,Se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==fo&&J!==Lr&&(Ct.getTransfer(J)===It?(ge!==_i||Se!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),b}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=le,this.setTexture2D=he,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=I,this.rebindTextures=ke,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=gt}function cC(i,e){function t(s,o=Lr){let l;const c=Ct.getTransfer(o);if(s===er)return i.UNSIGNED_BYTE;if(s===ih)return i.UNSIGNED_SHORT_4_4_4_4;if(s===rh)return i.UNSIGNED_SHORT_5_5_5_1;if(s===m_)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===h_)return i.BYTE;if(s===p_)return i.SHORT;if(s===da)return i.UNSIGNED_SHORT;if(s===nh)return i.INT;if(s===ms)return i.UNSIGNED_INT;if(s===Zi)return i.FLOAT;if(s===xa)return i.HALF_FLOAT;if(s===g_)return i.ALPHA;if(s===v_)return i.RGB;if(s===_i)return i.RGBA;if(s===ha)return i.DEPTH_COMPONENT;if(s===pa)return i.DEPTH_STENCIL;if(s===__)return i.RED;if(s===sh)return i.RED_INTEGER;if(s===x_)return i.RG;if(s===oh)return i.RG_INTEGER;if(s===ah)return i.RGBA_INTEGER;if(s===ac||s===lc||s===cc||s===uc)if(c===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===ac)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===cc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===ac)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yf||s===Sf||s===Ef||s===Mf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===yf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ef)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Mf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wf||s===bf||s===Tf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===wf||s===bf)return c===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Tf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Af||s===Cf||s===Rf||s===Pf||s===Nf||s===Lf||s===Df||s===Uf||s===If||s===Of||s===Ff||s===kf||s===Bf||s===zf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Af)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Lf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Df)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Uf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===If)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Of)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ff)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===zf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dc||s===Hf||s===Vf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===dc)return c===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Hf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Vf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===y_||s===Gf||s===Wf||s===jf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===dc)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Gf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fa?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}const uC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dC=`
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

}`;class fC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new Ln,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new nr({vertexShader:uC,fragmentShader:dC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ri(new wa(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hC extends xo{constructor(e,t){super();const s=this;let o=null,l=1,c=null,d="local-floor",f=1,p=null,m=null,g=null,y=null,S=null,E=null;const M=new fC,_=t.getContextAttributes();let x=null,D=null;const N=[],R=[],V=new Ut;let z=null;const F=new mi;F.viewport=new Kt;const k=new mi;k.viewport=new Kt;const P=[F,k],C=new Uw;let G=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let pe=N[Y];return pe===void 0&&(pe=new Hd,N[Y]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Y){let pe=N[Y];return pe===void 0&&(pe=new Hd,N[Y]=pe),pe.getGripSpace()},this.getHand=function(Y){let pe=N[Y];return pe===void 0&&(pe=new Hd,N[Y]=pe),pe.getHandSpace()};function Q(Y){const pe=R.indexOf(Y.inputSource);if(pe===-1)return;const we=N[pe];we!==void 0&&(we.update(Y.inputSource,Y.frame,p||c),we.dispatchEvent({type:Y.type,data:Y.inputSource}))}function fe(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",he);for(let Y=0;Y<N.length;Y++){const pe=R[Y];pe!==null&&(R[Y]=null,N[Y].disconnect(pe))}G=null,le=null,M.reset(),e.setRenderTarget(x),S=null,y=null,g=null,o=null,D=null,Ae.stop(),s.isPresenting=!1,e.setPixelRatio(z),e.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Y){if(o=Y,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",he),_.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,me=null,Ce=null;_.depth&&(Ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=_.stencil?pa:ha,me=_.stencil?fa:ms);const qe={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:l};g=new XRWebGLBinding(o,t),y=g.createProjectionLayer(qe),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),D=new gs(y.textureWidth,y.textureHeight,{format:_i,type:er,depthTexture:new L_(y.textureWidth,y.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const we={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,we),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new gs(S.framebufferWidth,S.framebufferHeight,{format:_i,type:er,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(f),p=null,c=await o.requestReferenceSpace(d),Ae.setContext(o),Ae.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function he(Y){for(let pe=0;pe<Y.removed.length;pe++){const we=Y.removed[pe],me=R.indexOf(we);me>=0&&(R[me]=null,N[me].disconnect(we))}for(let pe=0;pe<Y.added.length;pe++){const we=Y.added[pe];let me=R.indexOf(we);if(me===-1){for(let qe=0;qe<N.length;qe++)if(qe>=R.length){R.push(we),me=qe;break}else if(R[qe]===null){R[qe]=we,me=qe;break}if(me===-1)break}const Ce=N[me];Ce&&Ce.connect(we)}}const se=new ie,ce=new ie;function I(Y,pe,we){se.setFromMatrixPosition(pe.matrixWorld),ce.setFromMatrixPosition(we.matrixWorld);const me=se.distanceTo(ce),Ce=pe.projectionMatrix.elements,qe=we.projectionMatrix.elements,ke=Ce[14]/(Ce[10]-1),Pt=Ce[14]/(Ce[10]+1),Rt=(Ce[9]+1)/Ce[5],pt=(Ce[9]-1)/Ce[5],H=(Ce[8]-1)/Ce[0],Tn=(qe[8]+1)/qe[0],xt=ke*H,gt=ke*Tn,Ze=me/(-H+Tn),Dt=Ze*-H;if(pe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Dt),Y.translateZ(Ze),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ce[10]===-1)Y.projectionMatrix.copy(pe.projectionMatrix),Y.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ye=ke+Ze,L=Pt+Ze,b=xt-Dt,J=gt+(me-Dt),ge=Rt*Pt/L*Ye,Se=pt*Pt/L*Ye;Y.projectionMatrix.makePerspective(b,J,ge,Se,Ye,L),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ue(Y,pe){pe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(pe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(o===null)return;let pe=Y.near,we=Y.far;M.texture!==null&&(M.depthNear>0&&(pe=M.depthNear),M.depthFar>0&&(we=M.depthFar)),C.near=k.near=F.near=pe,C.far=k.far=F.far=we,(G!==C.near||le!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,le=C.far),F.layers.mask=Y.layers.mask|2,k.layers.mask=Y.layers.mask|4,C.layers.mask=F.layers.mask|k.layers.mask;const me=Y.parent,Ce=C.cameras;ue(C,me);for(let qe=0;qe<Ce.length;qe++)ue(Ce[qe],me);Ce.length===2?I(C,F,k):C.projectionMatrix.copy(F.projectionMatrix),oe(Y,C,me)};function oe(Y,pe,we){we===null?Y.matrix.copy(pe.matrixWorld):(Y.matrix.copy(we.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(pe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(pe.projectionMatrix),Y.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&S===null))return f},this.setFoveation=function(Y){f=Y,y!==null&&(y.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(C)};let O=null;function ne(Y,pe){if(m=pe.getViewerPose(p||c),E=pe,m!==null){const we=m.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let me=!1;we.length!==C.cameras.length&&(C.cameras.length=0,me=!0);for(let ke=0;ke<we.length;ke++){const Pt=we[ke];let Rt=null;if(S!==null)Rt=S.getViewport(Pt);else{const H=g.getViewSubImage(y,Pt);Rt=H.viewport,ke===0&&(e.setRenderTargetTextures(D,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(D))}let pt=P[ke];pt===void 0&&(pt=new mi,pt.layers.enable(ke),pt.viewport=new Kt,P[ke]=pt),pt.matrix.fromArray(Pt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Pt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),ke===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),me===!0&&C.cameras.push(pt)}const Ce=o.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const ke=g.getDepthInformation(we[0]);ke&&ke.isValid&&ke.texture&&M.init(e,ke,o.renderState)}}for(let we=0;we<N.length;we++){const me=R[we],Ce=N[we];me!==null&&Ce!==void 0&&Ce.update(me,pe,p||c)}O&&O(Y,pe),pe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pe}),E=null}const Ae=new D_;Ae.setAnimationLoop(ne),this.setAnimationLoop=function(Y){O=Y},this.dispose=function(){}}}const rs=new tr,pC=new en;function mC(i,e){function t(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function s(_,x){x.color.getRGB(_.fogColor.value,R_(i)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function o(_,x,D,N,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(_,x):x.isMeshToonMaterial?(l(_,x),g(_,x)):x.isMeshPhongMaterial?(l(_,x),m(_,x)):x.isMeshStandardMaterial?(l(_,x),y(_,x),x.isMeshPhysicalMaterial&&S(_,x,R)):x.isMeshMatcapMaterial?(l(_,x),E(_,x)):x.isMeshDepthMaterial?l(_,x):x.isMeshDistanceMaterial?(l(_,x),M(_,x)):x.isMeshNormalMaterial?l(_,x):x.isLineBasicMaterial?(c(_,x),x.isLineDashedMaterial&&d(_,x)):x.isPointsMaterial?f(_,x,D,N):x.isSpriteMaterial?p(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,t(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===Gn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,t(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===Gn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,t(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,t(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const D=e.get(x),N=D.envMap,R=D.envMapRotation;N&&(_.envMap.value=N,rs.copy(R),rs.x*=-1,rs.y*=-1,rs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),_.envMapRotation.value.setFromMatrix4(pC.makeRotationFromEuler(rs)),_.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,_.aoMapTransform))}function c(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform))}function d(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function f(_,x,D,N){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*D,_.scale.value=N*.5,x.map&&(_.map.value=x.map,t(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function p(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function m(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function g(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function y(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function S(_,x,D){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Gn&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=D.texture,_.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,x){x.matcap&&(_.matcap.value=x.matcap)}function M(_,x){const D=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(D.matrixWorld),_.nearDistance.value=D.shadow.camera.near,_.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function gC(i,e,t,s){let o={},l={},c=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(D,N){const R=N.program;s.uniformBlockBinding(D,R)}function p(D,N){let R=o[D.id];R===void 0&&(E(D),R=m(D),o[D.id]=R,D.addEventListener("dispose",_));const V=N.program;s.updateUBOMapping(D,V);const z=e.render.frame;l[D.id]!==z&&(y(D),l[D.id]=z)}function m(D){const N=g();D.__bindingPointIndex=N;const R=i.createBuffer(),V=D.__size,z=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,V,z),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,N,R),R}function g(){for(let D=0;D<d;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(D){const N=o[D.id],R=D.uniforms,V=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,N);for(let z=0,F=R.length;z<F;z++){const k=Array.isArray(R[z])?R[z]:[R[z]];for(let P=0,C=k.length;P<C;P++){const G=k[P];if(S(G,z,P,V)===!0){const le=G.__offset,Q=Array.isArray(G.value)?G.value:[G.value];let fe=0;for(let he=0;he<Q.length;he++){const se=Q[he],ce=M(se);typeof se=="number"||typeof se=="boolean"?(G.__data[0]=se,i.bufferSubData(i.UNIFORM_BUFFER,le+fe,G.__data)):se.isMatrix3?(G.__data[0]=se.elements[0],G.__data[1]=se.elements[1],G.__data[2]=se.elements[2],G.__data[3]=0,G.__data[4]=se.elements[3],G.__data[5]=se.elements[4],G.__data[6]=se.elements[5],G.__data[7]=0,G.__data[8]=se.elements[6],G.__data[9]=se.elements[7],G.__data[10]=se.elements[8],G.__data[11]=0):(se.toArray(G.__data,fe),fe+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,le,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(D,N,R,V){const z=D.value,F=N+"_"+R;if(V[F]===void 0)return typeof z=="number"||typeof z=="boolean"?V[F]=z:V[F]=z.clone(),!0;{const k=V[F];if(typeof z=="number"||typeof z=="boolean"){if(k!==z)return V[F]=z,!0}else if(k.equals(z)===!1)return k.copy(z),!0}return!1}function E(D){const N=D.uniforms;let R=0;const V=16;for(let F=0,k=N.length;F<k;F++){const P=Array.isArray(N[F])?N[F]:[N[F]];for(let C=0,G=P.length;C<G;C++){const le=P[C],Q=Array.isArray(le.value)?le.value:[le.value];for(let fe=0,he=Q.length;fe<he;fe++){const se=Q[fe],ce=M(se),I=R%V,ue=I%ce.boundary,oe=I+ue;R+=ue,oe!==0&&V-oe<ce.storage&&(R+=V-oe),le.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=R,R+=ce.storage}}}const z=R%V;return z>0&&(R+=V-z),D.__size=R,D.__cache={},this}function M(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),N}function _(D){const N=D.target;N.removeEventListener("dispose",_);const R=c.indexOf(N.__bindingPointIndex);c.splice(R,1),i.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function x(){for(const D in o)i.deleteBuffer(o[D]);c=[],o={},l={}}return{bind:f,update:p,dispose:x}}class vC{constructor(e={}){const{canvas:t=YM(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),M=new Int32Array(4);let _=null,x=null;const D=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let V=!1;this._outputColorSpace=ri;let z=0,F=0,k=null,P=-1,C=null;const G=new Kt,le=new Kt;let Q=null;const fe=new Ot(0);let he=0,se=t.width,ce=t.height,I=1,ue=null,oe=null;const O=new Kt(0,0,se,ce),ne=new Kt(0,0,se,ce);let Ae=!1;const Y=new N_;let pe=!1,we=!1;const me=new en,Ce=new en,qe=new ie,ke=new Kt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function pt(){return k===null?I:1}let H=s;function Tn(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${th}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",De,!1),H===null){const X="webgl2";if(H=Tn(X,A),H===null)throw Tn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let xt,gt,Ze,Dt,Ye,L,b,J,ge,Se,de,$e,Re,et,Qe,Ee,Be,rt,st,ze,vt,lt,Nt,j;function Pe(){xt=new A1(H),xt.init(),lt=new cC(H,xt),gt=new y1(H,xt,e,lt),Ze=new aC(H,xt),gt.reverseDepthBuffer&&y&&Ze.buffers.depth.setReversed(!0),Dt=new P1(H),Ye=new $A,L=new lC(H,xt,Ze,Ye,gt,lt,Dt),b=new E1(R),J=new T1(R),ge=new Ow(H),Nt=new _1(H,ge),Se=new C1(H,ge,Dt,Nt),de=new L1(H,Se,ge,Dt),st=new N1(H,gt,L),Ee=new S1(Ye),$e=new qA(R,b,J,xt,gt,Nt,Ee),Re=new mC(R,Ye),et=new KA,Qe=new nC(xt),rt=new v1(R,b,J,Ze,de,S,f),Be=new sC(R,de,gt),j=new gC(H,Dt,gt,Ze),ze=new x1(H,xt,Dt),vt=new R1(H,xt,Dt),Dt.programs=$e.programs,R.capabilities=gt,R.extensions=xt,R.properties=Ye,R.renderLists=et,R.shadowMap=Be,R.state=Ze,R.info=Dt}Pe();const ae=new hC(R,H);this.xr=ae,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=xt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(A){A!==void 0&&(I=A,this.setSize(se,ce,!1))},this.getSize=function(A){return A.set(se,ce)},this.setSize=function(A,X,te=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,ce=X,t.width=Math.floor(A*I),t.height=Math.floor(X*I),te===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(se*I,ce*I).floor()},this.setDrawingBufferSize=function(A,X,te){se=A,ce=X,I=te,t.width=Math.floor(A*te),t.height=Math.floor(X*te),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,X,te,K){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,X,te,K),Ze.viewport(G.copy(O).multiplyScalar(I).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,X,te,K){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,X,te,K),Ze.scissor(le.copy(ne).multiplyScalar(I).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(A){Ze.setScissorTest(Ae=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){oe=A},this.getClearColor=function(A){return A.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,te=!0){let K=0;if(A){let q=!1;if(k!==null){const be=k.texture.format;q=be===ah||be===oh||be===sh}if(q){const be=k.texture.type,Ne=be===er||be===ms||be===da||be===fa||be===ih||be===rh,Ie=rt.getClearColor(),He=rt.getClearAlpha(),ot=Ie.r,it=Ie.g,je=Ie.b;Ne?(E[0]=ot,E[1]=it,E[2]=je,E[3]=He,H.clearBufferuiv(H.COLOR,0,E)):(M[0]=ot,M[1]=it,M[2]=je,M[3]=He,H.clearBufferiv(H.COLOR,0,M))}else K|=H.COLOR_BUFFER_BIT}X&&(K|=H.DEPTH_BUFFER_BIT),te&&(K|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",De,!1),rt.dispose(),et.dispose(),Qe.dispose(),Ye.dispose(),b.dispose(),J.dispose(),de.dispose(),Nt.dispose(),j.dispose(),$e.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ys),ae.removeEventListener("sessionend",ir),Ni.stop()};function ve(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const A=Dt.autoReset,X=Be.enabled,te=Be.autoUpdate,K=Be.needsUpdate,q=Be.type;Pe(),Dt.autoReset=A,Be.enabled=X,Be.autoUpdate=te,Be.needsUpdate=K,Be.type=q}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ct(A){const X=A.target;X.removeEventListener("dispose",ct),Bt(X)}function Bt(A){tn(A),Ye.remove(A)}function tn(A){const X=Ye.get(A).programs;X!==void 0&&(X.forEach(function(te){$e.releaseProgram(te)}),A.isShaderMaterial&&$e.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,te,K,q,be){X===null&&(X=Pt);const Ne=q.isMesh&&q.matrixWorld.determinant()<0,Ie=Aa(A,X,te,K,q);Ze.setMaterial(K,Ne);let He=te.index,ot=1;if(K.wireframe===!0){if(He=Se.getWireframeAttribute(te),He===void 0)return;ot=2}const it=te.drawRange,je=te.attributes.position;let St=it.start*ot,ut=(it.start+it.count)*ot;be!==null&&(St=Math.max(St,be.start*ot),ut=Math.min(ut,(be.start+be.count)*ot)),He!==null?(St=Math.max(St,0),ut=Math.min(ut,He.count)):je!=null&&(St=Math.max(St,0),ut=Math.min(ut,je.count));const Xt=ut-St;if(Xt<0||Xt===1/0)return;Nt.setup(q,K,Ie,te,He);let Vt,Mt=ze;if(He!==null&&(Vt=ge.get(He),Mt=vt,Mt.setIndex(Vt)),q.isMesh)K.wireframe===!0?(Ze.setLineWidth(K.wireframeLinewidth*pt()),Mt.setMode(H.LINES)):Mt.setMode(H.TRIANGLES);else if(q.isLine){let Je=K.linewidth;Je===void 0&&(Je=1),Ze.setLineWidth(Je*pt()),q.isLineSegments?Mt.setMode(H.LINES):q.isLineLoop?Mt.setMode(H.LINE_LOOP):Mt.setMode(H.LINE_STRIP)}else q.isPoints?Mt.setMode(H.POINTS):q.isSprite&&Mt.setMode(H.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)fc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Je=q._multiDrawStarts,qt=q._multiDrawCounts,yt=q._multiDrawCount,vn=He?ge.get(He).bytesPerElement:1,sr=Ye.get(K).currentProgram.getUniforms();for(let Cn=0;Cn<yt;Cn++)sr.setValue(H,"_gl_DrawID",Cn),Mt.render(Je[Cn]/vn,qt[Cn])}else if(q.isInstancedMesh)Mt.renderInstances(St,Xt,q.count);else if(te.isInstancedBufferGeometry){const Je=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,qt=Math.min(te.instanceCount,Je);Mt.renderInstances(St,Xt,qt)}else Mt.render(St,Xt)};function wt(A,X,te){A.transparent===!0&&A.side===Ki&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,Ss(A,X,te),A.side=Fr,A.needsUpdate=!0,Ss(A,X,te),A.side=Ki):Ss(A,X,te)}this.compile=function(A,X,te=null){te===null&&(te=A),x=Qe.get(te),x.init(X),N.push(x),te.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),A!==te&&A.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),x.setupLights();const K=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const be=q.material;if(be)if(Array.isArray(be))for(let Ne=0;Ne<be.length;Ne++){const Ie=be[Ne];wt(Ie,te,q),K.add(Ie)}else wt(be,te,q),K.add(be)}),x=N.pop(),K},this.compileAsync=function(A,X,te=null){const K=this.compile(A,X,te);return new Promise(q=>{function be(){if(K.forEach(function(Ne){Ye.get(Ne).currentProgram.isReady()&&K.delete(Ne)}),K.size===0){q(A);return}setTimeout(be,10)}xt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Dn=null;function An(A){Dn&&Dn(A)}function ys(){Ni.stop()}function ir(){Ni.start()}const Ni=new D_;Ni.setAnimationLoop(An),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(A){Dn=A,ae.setAnimationLoop(A),A===null?Ni.stop():Ni.start()},ae.addEventListener("sessionstart",ys),ae.addEventListener("sessionend",ir),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(X),X=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,X,k),x=Qe.get(A,N.length),x.init(X),N.push(x),Ce.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Y.setFromProjectionMatrix(Ce),we=this.localClippingEnabled,pe=Ee.init(this.clippingPlanes,we),_=et.get(A,D.length),_.init(),D.push(_),ae.enabled===!0&&ae.isPresenting===!0){const be=R.xr.getDepthSensingMesh();be!==null&&Li(be,X,-1/0,R.sortObjects)}Li(A,X,0,R.sortObjects),_.finish(),R.sortObjects===!0&&_.sort(ue,oe),Rt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Rt&&rt.addToRenderList(_,A),this.info.render.frame++,pe===!0&&Ee.beginShadows();const te=x.state.shadowsArray;Be.render(te,A,X),pe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=_.opaque,q=_.transmissive;if(x.setupLights(),X.isArrayCamera){const be=X.cameras;if(q.length>0)for(let Ne=0,Ie=be.length;Ne<Ie;Ne++){const He=be[Ne];Br(K,q,A,He)}Rt&&rt.render(A);for(let Ne=0,Ie=be.length;Ne<Ie;Ne++){const He=be[Ne];kr(_,A,He,He.viewport)}}else q.length>0&&Br(K,q,A,X),Rt&&rt.render(A),kr(_,A,X);k!==null&&F===0&&(L.updateMultisampleRenderTarget(k),L.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(R,A,X),Nt.resetDefaultState(),P=-1,C=null,N.pop(),N.length>0?(x=N[N.length-1],pe===!0&&Ee.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?_=D[D.length-1]:_=null};function Li(A,X,te,K){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){K&&ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ce);const Ne=de.update(A),Ie=A.material;Ie.visible&&_.push(A,Ne,Ie,te,ke.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const Ne=de.update(A),Ie=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ke.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ke.copy(Ne.boundingSphere.center)),ke.applyMatrix4(A.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ie)){const He=Ne.groups;for(let ot=0,it=He.length;ot<it;ot++){const je=He[ot],St=Ie[je.materialIndex];St&&St.visible&&_.push(A,Ne,St,te,ke.z,je)}}else Ie.visible&&_.push(A,Ne,Ie,te,ke.z,null)}}const be=A.children;for(let Ne=0,Ie=be.length;Ne<Ie;Ne++)Li(be[Ne],X,te,K)}function kr(A,X,te,K){const q=A.opaque,be=A.transmissive,Ne=A.transparent;x.setupLightsView(te),pe===!0&&Ee.setGlobalState(R.clippingPlanes,te),K&&Ze.viewport(G.copy(K)),q.length>0&&rr(q,X,te),be.length>0&&rr(be,X,te),Ne.length>0&&rr(Ne,X,te),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function Br(A,X,te,K){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[K.id]===void 0&&(x.state.transmissionRenderTarget[K.id]=new gs(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?xa:er,minFilter:ds,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const be=x.state.transmissionRenderTarget[K.id],Ne=K.viewport||G;be.setSize(Ne.z*R.transmissionResolutionScale,Ne.w*R.transmissionResolutionScale);const Ie=R.getRenderTarget();R.setRenderTarget(be),R.getClearColor(fe),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),Rt&&rt.render(te);const He=R.toneMapping;R.toneMapping=Or;const ot=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),x.setupLightsView(K),pe===!0&&Ee.setGlobalState(R.clippingPlanes,K),rr(A,te,K),L.updateMultisampleRenderTarget(be),L.updateRenderTargetMipmap(be),xt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let je=0,St=X.length;je<St;je++){const ut=X[je],Xt=ut.object,Vt=ut.geometry,Mt=ut.material,Je=ut.group;if(Mt.side===Ki&&Xt.layers.test(K.layers)){const qt=Mt.side;Mt.side=Gn,Mt.needsUpdate=!0,ba(Xt,te,K,Vt,Mt,Je),Mt.side=qt,Mt.needsUpdate=!0,it=!0}}it===!0&&(L.updateMultisampleRenderTarget(be),L.updateRenderTargetMipmap(be))}R.setRenderTarget(Ie),R.setClearColor(fe,he),ot!==void 0&&(K.viewport=ot),R.toneMapping=He}function rr(A,X,te){const K=X.isScene===!0?X.overrideMaterial:null;for(let q=0,be=A.length;q<be;q++){const Ne=A[q],Ie=Ne.object,He=Ne.geometry,ot=Ne.group;let it=Ne.material;it.allowOverride===!0&&K!==null&&(it=K),Ie.layers.test(te.layers)&&ba(Ie,X,te,He,it,ot)}}function ba(A,X,te,K,q,be){A.onBeforeRender(R,X,te,K,q,be),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(R,X,te,K,A,be),q.transparent===!0&&q.side===Ki&&q.forceSinglePass===!1?(q.side=Gn,q.needsUpdate=!0,R.renderBufferDirect(te,X,K,q,A,be),q.side=Fr,q.needsUpdate=!0,R.renderBufferDirect(te,X,K,q,A,be),q.side=Ki):R.renderBufferDirect(te,X,K,q,A,be),A.onAfterRender(R,X,te,K,q,be)}function Ss(A,X,te){X.isScene!==!0&&(X=Pt);const K=Ye.get(A),q=x.state.lights,be=x.state.shadowsArray,Ne=q.state.version,Ie=$e.getParameters(A,q.state,be,X,te),He=$e.getProgramCacheKey(Ie);let ot=K.programs;K.environment=A.isMeshStandardMaterial?X.environment:null,K.fog=X.fog,K.envMap=(A.isMeshStandardMaterial?J:b).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,ot===void 0&&(A.addEventListener("dispose",ct),ot=new Map,K.programs=ot);let it=ot.get(He);if(it!==void 0){if(K.currentProgram===it&&K.lightsStateVersion===Ne)return Si(A,Ie),it}else Ie.uniforms=$e.getUniforms(A),A.onBeforeCompile(Ie,R),it=$e.acquireProgram(Ie,He),ot.set(He,it),K.uniforms=Ie.uniforms;const je=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Ee.uniform),Si(A,Ie),K.needsLights=Nc(A),K.lightsStateVersion=Ne,K.needsLights&&(je.ambientLightColor.value=q.state.ambient,je.lightProbe.value=q.state.probe,je.directionalLights.value=q.state.directional,je.directionalLightShadows.value=q.state.directionalShadow,je.spotLights.value=q.state.spot,je.spotLightShadows.value=q.state.spotShadow,je.rectAreaLights.value=q.state.rectArea,je.ltc_1.value=q.state.rectAreaLTC1,je.ltc_2.value=q.state.rectAreaLTC2,je.pointLights.value=q.state.point,je.pointLightShadows.value=q.state.pointShadow,je.hemisphereLights.value=q.state.hemi,je.directionalShadowMap.value=q.state.directionalShadowMap,je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,je.spotShadowMap.value=q.state.spotShadowMap,je.spotLightMatrix.value=q.state.spotLightMatrix,je.spotLightMap.value=q.state.spotLightMap,je.pointShadowMap.value=q.state.pointShadowMap,je.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=it,K.uniformsList=null,it}function Ta(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=hc.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Si(A,X){const te=Ye.get(A);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Aa(A,X,te,K,q){X.isScene!==!0&&(X=Pt),L.resetTextureUnits();const be=X.fog,Ne=K.isMeshStandardMaterial?X.environment:null,Ie=k===null?R.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:fo,He=(K.isMeshStandardMaterial?J:b).get(K.envMap||Ne),ot=K.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,it=!!te.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),je=!!te.morphAttributes.position,St=!!te.morphAttributes.normal,ut=!!te.morphAttributes.color;let Xt=Or;K.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Xt=R.toneMapping);const Vt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Mt=Vt!==void 0?Vt.length:0,Je=Ye.get(K),qt=x.state.lights;if(pe===!0&&(we===!0||A!==C)){const pn=A===C&&K.id===P;Ee.setState(K,A,pn)}let yt=!1;K.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==qt.state.version||Je.outputColorSpace!==Ie||q.isBatchedMesh&&Je.batching===!1||!q.isBatchedMesh&&Je.batching===!0||q.isBatchedMesh&&Je.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Je.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Je.instancing===!1||!q.isInstancedMesh&&Je.instancing===!0||q.isSkinnedMesh&&Je.skinning===!1||!q.isSkinnedMesh&&Je.skinning===!0||q.isInstancedMesh&&Je.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Je.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Je.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Je.instancingMorph===!1&&q.morphTexture!==null||Je.envMap!==He||K.fog===!0&&Je.fog!==be||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ee.numPlanes||Je.numIntersection!==Ee.numIntersection)||Je.vertexAlphas!==ot||Je.vertexTangents!==it||Je.morphTargets!==je||Je.morphNormals!==St||Je.morphColors!==ut||Je.toneMapping!==Xt||Je.morphTargetsCount!==Mt)&&(yt=!0):(yt=!0,Je.__version=K.version);let vn=Je.currentProgram;yt===!0&&(vn=Ss(K,X,q));let sr=!1,Cn=!1,Di=!1;const Ft=vn.getUniforms(),_n=Je.uniforms;if(Ze.useProgram(vn.program)&&(sr=!0,Cn=!0,Di=!0),K.id!==P&&(P=K.id,Cn=!0),sr||C!==A){Ze.buffers.depth.getReversed()?(me.copy(A.projectionMatrix),ZM(me),JM(me),Ft.setValue(H,"projectionMatrix",me)):Ft.setValue(H,"projectionMatrix",A.projectionMatrix),Ft.setValue(H,"viewMatrix",A.matrixWorldInverse);const cn=Ft.map.cameraPosition;cn!==void 0&&cn.setValue(H,qe.setFromMatrixPosition(A.matrixWorld)),gt.logarithmicDepthBuffer&&Ft.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ft.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Cn=!0,Di=!0)}if(q.isSkinnedMesh){Ft.setOptional(H,q,"bindMatrix"),Ft.setOptional(H,q,"bindMatrixInverse");const pn=q.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ft.setValue(H,"boneTexture",pn.boneTexture,L))}q.isBatchedMesh&&(Ft.setOptional(H,q,"batchingTexture"),Ft.setValue(H,"batchingTexture",q._matricesTexture,L),Ft.setOptional(H,q,"batchingIdTexture"),Ft.setValue(H,"batchingIdTexture",q._indirectTexture,L),Ft.setOptional(H,q,"batchingColorTexture"),q._colorsTexture!==null&&Ft.setValue(H,"batchingColorTexture",q._colorsTexture,L));const ln=te.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&st.update(q,te,vn),(Cn||Je.receiveShadow!==q.receiveShadow)&&(Je.receiveShadow=q.receiveShadow,Ft.setValue(H,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(_n.envMap.value=He,_n.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&X.environment!==null&&(_n.envMapIntensity.value=X.environmentIntensity),Cn&&(Ft.setValue(H,"toneMappingExposure",R.toneMappingExposure),Je.needsLights&&Ca(_n,Di),be&&K.fog===!0&&Re.refreshFogUniforms(_n,be),Re.refreshMaterialUniforms(_n,K,I,ce,x.state.transmissionRenderTarget[A.id]),hc.upload(H,Ta(Je),_n,L)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(hc.upload(H,Ta(Je),_n,L),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ft.setValue(H,"center",q.center),Ft.setValue(H,"modelViewMatrix",q.modelViewMatrix),Ft.setValue(H,"normalMatrix",q.normalMatrix),Ft.setValue(H,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const pn=K.uniformsGroups;for(let cn=0,bt=pn.length;cn<bt;cn++){const Ei=pn[cn];j.update(Ei,vn),j.bind(Ei,vn)}}return vn}function Ca(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Nc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,X,te){const K=Ye.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Ye.get(A.texture).__webglTexture=X,Ye.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:te,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const te=Ye.get(A);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0};const Ra=H.createFramebuffer();this.setRenderTarget=function(A,X=0,te=0){k=A,z=X,F=te;let K=!0,q=null,be=!1,Ne=!1;if(A){const He=Ye.get(A);if(He.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(H.FRAMEBUFFER,null),K=!1;else if(He.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(He.__hasExternalTextures)L.rebindTextures(A,Ye.get(A.texture).__webglTexture,Ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if(He.__boundDepthTexture!==je){if(je!==null&&Ye.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const ot=A.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ne=!0);const it=Ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[X])?q=it[X][te]:q=it[X],be=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?q=Ye.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?q=it[te]:q=it,G.copy(A.viewport),le.copy(A.scissor),Q=A.scissorTest}else G.copy(O).multiplyScalar(I).floor(),le.copy(ne).multiplyScalar(I).floor(),Q=Ae;if(te!==0&&(q=Ra),Ze.bindFramebuffer(H.FRAMEBUFFER,q)&&K&&Ze.drawBuffers(A,q),Ze.viewport(G),Ze.scissor(le),Ze.setScissorTest(Q),be){const He=Ye.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,He.__webglTexture,te)}else if(Ne){const He=Ye.get(A.texture),ot=X;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.__webglTexture,te,ot)}else if(A!==null&&te!==0){const He=Ye.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,He.__webglTexture,te)}P=-1},this.readRenderTargetPixels=function(A,X,te,K,q,be,Ne){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ie=Ie[Ne]),Ie){Ze.bindFramebuffer(H.FRAMEBUFFER,Ie);try{const He=A.texture,ot=He.format,it=He.type;if(!gt.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-K&&te>=0&&te<=A.height-q&&H.readPixels(X,te,K,q,lt.convert(ot),lt.convert(it),be)}finally{const He=k!==null?Ye.get(k).__webglFramebuffer:null;Ze.bindFramebuffer(H.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,X,te,K,q,be,Ne){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ie=Ie[Ne]),Ie)if(X>=0&&X<=A.width-K&&te>=0&&te<=A.height-q){Ze.bindFramebuffer(H.FRAMEBUFFER,Ie);const He=A.texture,ot=He.format,it=He.type;if(!gt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.bufferData(H.PIXEL_PACK_BUFFER,be.byteLength,H.STREAM_READ),H.readPixels(X,te,K,q,lt.convert(ot),lt.convert(it),0);const St=k!==null?Ye.get(k).__webglFramebuffer:null;Ze.bindFramebuffer(H.FRAMEBUFFER,St);const ut=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await KM(H,ut,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,be),H.deleteBuffer(je),H.deleteSync(ut),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,te=0){const K=Math.pow(2,-te),q=Math.floor(A.image.width*K),be=Math.floor(A.image.height*K),Ne=X!==null?X.x:0,Ie=X!==null?X.y:0;L.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,te,0,0,Ne,Ie,q,be),Ze.unbindTexture()};const Pa=H.createFramebuffer(),Na=H.createFramebuffer();this.copyTextureToTexture=function(A,X,te=null,K=null,q=0,be=null){be===null&&(q!==0?(fc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=q,q=0):be=0);let Ne,Ie,He,ot,it,je,St,ut,Xt;const Vt=A.isCompressedTexture?A.mipmaps[be]:A.image;if(te!==null)Ne=te.max.x-te.min.x,Ie=te.max.y-te.min.y,He=te.isBox3?te.max.z-te.min.z:1,ot=te.min.x,it=te.min.y,je=te.isBox3?te.min.z:0;else{const ln=Math.pow(2,-q);Ne=Math.floor(Vt.width*ln),Ie=Math.floor(Vt.height*ln),A.isDataArrayTexture?He=Vt.depth:A.isData3DTexture?He=Math.floor(Vt.depth*ln):He=1,ot=0,it=0,je=0}K!==null?(St=K.x,ut=K.y,Xt=K.z):(St=0,ut=0,Xt=0);const Mt=lt.convert(X.format),Je=lt.convert(X.type);let qt;X.isData3DTexture?(L.setTexture3D(X,0),qt=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),qt=H.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),qt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const yt=H.getParameter(H.UNPACK_ROW_LENGTH),vn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),sr=H.getParameter(H.UNPACK_SKIP_PIXELS),Cn=H.getParameter(H.UNPACK_SKIP_ROWS),Di=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Vt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Vt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ot),H.pixelStorei(H.UNPACK_SKIP_ROWS,it),H.pixelStorei(H.UNPACK_SKIP_IMAGES,je);const Ft=A.isDataArrayTexture||A.isData3DTexture,_n=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const ln=Ye.get(A),pn=Ye.get(X),cn=Ye.get(ln.__renderTarget),bt=Ye.get(pn.__renderTarget);Ze.bindFramebuffer(H.READ_FRAMEBUFFER,cn.__webglFramebuffer),Ze.bindFramebuffer(H.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Ei=0;Ei<He;Ei++)Ft&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(A).__webglTexture,q,je+Ei),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(X).__webglTexture,be,Xt+Ei)),H.blitFramebuffer(ot,it,Ne,Ie,St,ut,Ne,Ie,H.DEPTH_BUFFER_BIT,H.NEAREST);Ze.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Ye.has(A)){const ln=Ye.get(A),pn=Ye.get(X);Ze.bindFramebuffer(H.READ_FRAMEBUFFER,Pa),Ze.bindFramebuffer(H.DRAW_FRAMEBUFFER,Na);for(let cn=0;cn<He;cn++)Ft?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ln.__webglTexture,q,je+cn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ln.__webglTexture,q),_n?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,be,Xt+cn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,be),q!==0?H.blitFramebuffer(ot,it,Ne,Ie,St,ut,Ne,Ie,H.COLOR_BUFFER_BIT,H.NEAREST):_n?H.copyTexSubImage3D(qt,be,St,ut,Xt+cn,ot,it,Ne,Ie):H.copyTexSubImage2D(qt,be,St,ut,ot,it,Ne,Ie);Ze.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else _n?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(qt,be,St,ut,Xt,Ne,Ie,He,Mt,Je,Vt.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(qt,be,St,ut,Xt,Ne,Ie,He,Mt,Vt.data):H.texSubImage3D(qt,be,St,ut,Xt,Ne,Ie,He,Mt,Je,Vt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,be,St,ut,Ne,Ie,Mt,Je,Vt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,be,St,ut,Vt.width,Vt.height,Mt,Vt.data):H.texSubImage2D(H.TEXTURE_2D,be,St,ut,Ne,Ie,Mt,Je,Vt);H.pixelStorei(H.UNPACK_ROW_LENGTH,yt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,sr),H.pixelStorei(H.UNPACK_SKIP_ROWS,Cn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Di),be===0&&X.generateMipmaps&&H.generateMipmap(qt),Ze.unbindTexture()},this.copyTextureToTexture3D=function(A,X,te=null,K=null,q=0){return fc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,te,K,q)},this.initRenderTarget=function(A){Ye.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Ze.unbindTexture()},this.resetState=function(){z=0,F=0,k=null,Ze.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}const _C=`
    void main() {
        gl_Position = vec4( position, 1.0 );
    }
`,xC=`
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
`;function yC(){const i=_e.useRef(null);return _e.useEffect(()=>{let e,t,s,o,l;(async()=>{e=new uh,e.position.z=1,t=new ww;const d=new wa(2,2),f=new Lw;f.setCrossOrigin("anonymous");const p=await new Promise(M=>{f.load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png",_=>{_.wrapS=ua,_.wrapT=ua,_.minFilter=vi,M(_)})});o={u_time:{type:"f",value:1},u_resolution:{type:"v2",value:new Ut},u_noise:{type:"t",value:p},u_mouse:{type:"v2",value:new Ut}};const m=new nr({uniforms:o,vertexShader:_C,fragmentShader:xC});m.extensions.derivatives=!0;const g=new Ri(d,m);t.add(g),s=new vC,s.setPixelRatio(window.devicePixelRatio),i.current&&i.current.appendChild(s.domElement);const y=()=>{i.current&&(s.setSize(i.current.clientWidth,i.current.clientHeight),o.u_resolution.value.x=s.domElement.width,o.u_resolution.value.y=s.domElement.height)};window.addEventListener("resize",y),y();const S=M=>{const _=window.innerHeight/window.innerWidth;o.u_mouse.value.x=(M.pageX-window.innerWidth/2)/window.innerWidth/_,o.u_mouse.value.y=(M.pageY-window.innerHeight/2)/window.innerHeight*-1};window.addEventListener("pointermove",S);const E=()=>{l=requestAnimationFrame(E),o.u_time.value=-1e4+performance.now()*5e-4,s.render(t,e)};return E(),()=>{window.removeEventListener("resize",y),window.removeEventListener("pointermove",S),l&&cancelAnimationFrame(l),i.current&&s.domElement&&i.current.removeChild(s.domElement),s.dispose()}})()},[]),T.jsx("div",{ref:i,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,overflow:"hidden"}})}const SC=()=>{const[i,e]=_e.useState({}),[t,s]=_e.useState(null),[o,l]=_e.useState(""),[c,d]=_e.useState({});_e.useEffect(()=>{fetch("/books/bookToc.json").then(p=>p.json()).then(e)},[]),_e.useEffect(()=>{t&&fetch(t.path).then(p=>p.text()).then(l)},[t]);const f=p=>{d(m=>({...m,[p]:!m[p]}))};return T.jsxs("div",{className:"books-container",children:[T.jsxs("div",{className:"table-of-contents",children:[T.jsx("h1",{children:"Sacred Texts"}),T.jsx("nav",{children:T.jsx("ul",{children:Object.values(i).map(p=>T.jsxs("li",{children:[T.jsxs("button",{onClick:()=>f(p.slug),className:c[p.slug]?"active":"",children:[p.title," ",c[p.slug]?"▼":"►"]}),c[p.slug]&&p.sections&&T.jsx("ul",{children:p.sections.map(m=>T.jsxs("li",{children:[T.jsxs("button",{onClick:()=>f(`${p.slug}:${m.slug}`),className:c[`${p.slug}:${m.slug}`]?"active":"",children:[m.title," ",c[`${p.slug}:${m.slug}`]?"▼":"►"]}),c[`${p.slug}:${m.slug}`]&&T.jsx("ul",{children:m.chapters.map(g=>T.jsx("li",{children:T.jsx("button",{onClick:()=>s({path:`/books/${p.slug}/${m.slug}/${g.filename}`,title:g.title}),children:g.title})},g.slug))})]},m.slug))})]},p.slug))})})]}),T.jsx("div",{className:"chapter-content",children:t?T.jsxs(T.Fragment,{children:[T.jsx("h2",{children:t.title}),T.jsx("div",{className:"chapter-text",children:o})]}):T.jsxs("div",{className:"welcome-message",children:[T.jsx("h2",{children:"Welcome to the Sacred Texts"}),T.jsx("p",{children:"Select a chapter from the table of contents to begin reading."})]})})]})};function EC(){const[i,e]=_e.useState(!1);return T.jsx(Ty,{children:T.jsxs("div",{className:"min-h-screen bg-cover bg-center text-white relative",style:{backgroundImage:"url('/background.jpg')"},children:[T.jsx(yC,{}),T.jsxs("header",{className:"bg-transparent backdrop-blur-sm py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50",children:[T.jsxs("div",{className:"relative",children:[T.jsx(ic,{onClick:()=>e(!i),variant:"ghost",className:"text-white hover:bg-white/10",children:"Home"}),i&&T.jsxs("div",{className:"absolute mt-2 bg-black/90 backdrop-blur-md rounded-lg shadow-xl border border-white/10 w-48",children:[T.jsx(Vi,{to:"/",className:"block px-4 py-2 hover:bg-white/10 text-white",children:"Home"}),T.jsx(Vi,{to:"/about",className:"block px-4 py-2 hover:bg-white/10 text-white",children:"About"}),T.jsx(Vi,{to:"/books",className:"block px-4 py-2 hover:bg-white/10 text-white",children:"Books"}),T.jsx(Vi,{to:"/referral",className:"block px-4 py-2 hover:bg-white/10 text-white",children:"Referral"}),T.jsx(Vi,{to:"/community",className:"block px-4 py-2 hover:bg-white/10 text-white",children:"Community"}),T.jsx(Vi,{to:"/ranks",className:"block px-4 py-2 hover:bg-white/10 text-white",children:"Ranks and Roles"}),T.jsx(Vi,{to:"/purpose",className:"block px-4 py-2 hover:bg-white/10 text-white",children:"Statement of Purpose"})]})]}),T.jsxs("div",{children:[T.jsx(Vi,{to:"/login",children:T.jsx(ic,{variant:"ghost",className:"text-white hover:bg-white/10 mr-2",children:"Login"})}),T.jsx(Vi,{to:"/signup",children:T.jsx(ic,{variant:"ghost",className:"text-white hover:bg-white/10 border border-white/50",children:"Sign Up"})})]})]}),T.jsxs("div",{className:"pt-16",children:[" ",T.jsx("main",{className:"p-6 relative z-10",children:T.jsxs(xy,{children:[T.jsx(pi,{path:"/admin",element:T.jsx(sM,{})}),T.jsx(pi,{path:"/signup",element:T.jsx(rM,{})}),T.jsx(pi,{path:"/login",element:T.jsx(iM,{})}),T.jsx(pi,{path:"/",element:T.jsx(SS,{})}),T.jsx(pi,{path:"/about",element:T.jsx(ES,{})}),T.jsx(pi,{path:"/books/*",element:T.jsx(SC,{})}),T.jsx(pi,{path:"/referral",element:T.jsx(QE,{})}),T.jsx(pi,{path:"/community",element:T.jsx(eM,{})}),T.jsx(pi,{path:"/ranks",element:T.jsx(tM,{})}),T.jsx(pi,{path:"/purpose",element:T.jsx(nM,{})})]})})]})]})})}A0.createRoot(document.getElementById("root")).render(T.jsx(EC,{}));
