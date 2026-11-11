"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var f=c(function(k,d){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-clip-index/dist'),m=require('@stdlib/ndarray-base-stride/dist'),p=require('@stdlib/ndarray-base-offset/dist'),x=require('@stdlib/ndarray-base-data-buffer/dist'),v=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),g=require('@stdlib/blas-ext-base-sfill-equal/dist').ndarray;function h(e){var r,i,s,l,t,u,n,a;return a=e[0],r=v(e[1]),l=v(e[2]),n=o(a,0),t=q(v(e[3]),n),u=q(v(e[4]),n),t>=u||(i=m(a,0),s=p(a)+i*t,g(u-t,r,l,x(a),i,s)),a}d.exports=h
});var D=f();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
