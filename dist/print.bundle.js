!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,n){if(!O[e]||!w[e])return;for(var r in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(h[r]=n[r]);0==--v&&0===b&&D()}(e,r),n&&n(e,r)};var r,t=!0,o="9eb31f1db356f9b8b6d7",c=1e4,i={},d=[],a=[];function s(e){var n=P[e];if(!n)return H;var t=function(t){return n.hot.active?(P[t]?-1===P[t].parents.indexOf(e)&&P[t].parents.push(e):(d=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),d=[]),H(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(n){H[e]=n}}};for(var c in H)Object.prototype.hasOwnProperty.call(H,c)&&"e"!==c&&Object.defineProperty(t,c,o(c));return t.e=function(e){return"ready"===p&&u("prepare"),b++,H.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===p&&(m[e]||j(e),0===b&&0===v&&D())}},t}var l=[],p="idle";function u(e){p=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var f,h,y,v=0,b=0,m={},w={},O={};function g(e){return+e+""===e?+e:e}function _(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return t=e,u("check"),(n=c,n=n||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,c=H.p+""+o+".hot-update.json";t.open("GET",c,!0),t.timeout=n,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+c+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+c+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(e){return void r(e)}e(n)}}})).then(function(e){if(!e)return u("idle"),null;w={},m={},O=e.c,y=e.h,u("prepare");var n=new Promise(function(e,n){f={resolve:e,reject:n}});h={};return j(0),"prepare"===p&&0===b&&0===v&&D(),n});var n}function j(e){O[e]?(w[e]=!0,v++,function(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.charset="utf-8",r.src=H.p+""+e+"."+o+".hot-update.js",n.appendChild(r)}(e)):m[e]=!0}function D(){u("ready");var e=f;if(f=null,e)if(t)Promise.resolve().then(function(){return E(t)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&n.push(g(r));e.resolve(n)}}function E(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var r,t,c,a,s;function l(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),c=o.id,i=o.chain;if((a=P[c])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(a.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var d=0;d<a.parents.length;d++){var s=a.parents[d],l=P[s];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([s]),moduleId:c,parentId:s};-1===n.indexOf(s)&&(l.hot._acceptedDependencies[c]?(r[s]||(r[s]=[]),f(r[s],[c])):(delete r[s],n.push(s),t.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function f(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var v={},b=[],m={},w=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var _ in h)if(Object.prototype.hasOwnProperty.call(h,_)){var j;s=g(_);var D=!1,E=!1,x=!1,I="";switch((j=h[_]?l(s):{type:"disposed",moduleId:_}).chain&&(I="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(D=new Error("Aborted because of self decline: "+j.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(j),n.ignoreUnaccepted||(D=new Error("Aborted because "+s+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(j),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(j),x=!0;break;default:throw new Error("Unexception type "+j.type)}if(D)return u("abort"),Promise.reject(D);if(E)for(s in m[s]=h[s],f(b,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,s)&&(v[s]||(v[s]=[]),f(v[s],j.outdatedDependencies[s]));x&&(f(b,[j.moduleId]),m[s]=w)}var k,M=[];for(t=0;t<b.length;t++)s=b[t],P[s]&&P[s].hot._selfAccepted&&M.push({module:s,errorHandler:P[s].hot._selfAccepted});u("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete installedChunks[e]}(e)});for(var A,S,U=b.slice();U.length>0;)if(s=U.pop(),a=P[s]){var q={},T=a.hot._disposeHandlers;for(c=0;c<T.length;c++)(r=T[c])(q);for(i[s]=q,a.hot.active=!1,delete P[s],delete v[s],c=0;c<a.children.length;c++){var R=P[a.children[c]];R&&((k=R.parents.indexOf(s))>=0&&R.parents.splice(k,1))}}for(s in v)if(Object.prototype.hasOwnProperty.call(v,s)&&(a=P[s]))for(S=v[s],c=0;c<S.length;c++)A=S[c],(k=a.children.indexOf(A))>=0&&a.children.splice(k,1);for(s in u("apply"),o=y,m)Object.prototype.hasOwnProperty.call(m,s)&&(e[s]=m[s]);var N=null;for(s in v)if(Object.prototype.hasOwnProperty.call(v,s)&&(a=P[s])){S=v[s];var C=[];for(t=0;t<S.length;t++)if(A=S[t],r=a.hot._acceptedDependencies[A]){if(-1!==C.indexOf(r))continue;C.push(r)}for(t=0;t<C.length;t++){r=C[t];try{r(S)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:S[t],error:e}),n.ignoreErrored||N||(N=e)}}}for(t=0;t<M.length;t++){var L=M[t];s=L.module,d=[s];try{H(s)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:r,originalError:e}),n.ignoreErrored||N||(N=r),N||(N=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:e}),n.ignoreErrored||N||(N=e)}}return N?(u("fail"),Promise.reject(N)):(u("idle"),new Promise(function(e){e(b)}))}var P={};function H(n){if(P[n])return P[n].exports;var t=P[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:_,apply:E,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:i[e]};return r=void 0,n}(n),parents:(a=d,d=[],a),children:[]};return e[n].call(t.exports,t,t.exports,s(n)),t.l=!0,t.exports}H.m=e,H.c=P,H.d=function(e,n,r){H.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},H.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,n){if(1&n&&(e=H(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(H.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)H.d(r,t,function(n){return e[n]}.bind(null,t));return r},H.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(n,"a",n),n},H.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},H.p="/",H.h=function(){return o},s("./src/print.js")(H.s="./src/print.js")}({"./src/print.js":function(e,n,r){"use strict";console.log("**test**","print test")}});