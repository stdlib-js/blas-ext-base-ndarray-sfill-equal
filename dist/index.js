"use strict";var s=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var n=s(function(g,u){
var v=require('@stdlib/ndarray-base-numel-dimension/dist'),l=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),c=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/blas-ext-base-sfill-equal/dist').ndarray,t=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function f(a){var r,i,e;return e=a[0],r=t(a[1]),i=t(a[2]),d(v(e,0),r,i,c(e),l(e,0),q(e)),e}u.exports=f
});var m=n();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
