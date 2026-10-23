(function(root){const M={
 parallel:(a,b)=>a*b/(a+b),
 bjt(kind,ic,load,re,beta=100){const gm=ic/.025,rpi=beta/gm;return{gm,rpi,gain:kind==='ce'?-beta*load/(rpi+(beta+1)*re):kind==='cb'?gm*load:((beta+1)*load)/(rpi+(beta+1)*load)};},
 cascade:(a,b,ro,ri)=>({loaded:a*ri/(ro+ri),gain:a*b*ri/(ro+ri)}),
 differential:(vd,it,rc)=>({i1:it*(1+Math.tanh(vd/.05))/2,i2:it*(1-Math.tanh(vd/.05))/2,vo:-rc*it*Math.tanh(vd/.05)}),
 darlington:(a,b)=>a*b+a+b,
 feedback:(a,b)=>({gain:a/(1+a*b),sensitivity:1/(1+a*b),loop:a*b}),
 timer:(ra,rb,c)=>({high:Math.LN2*(ra+rb)*c,low:Math.LN2*rb*c,period:Math.LN2*(ra+2*rb)*c}),
 mono:(r,c)=>Math.log(3)*r*c,
 ttl:v=>v<=.8?0:v>=2?1:null,
 logic(type,a,b){if(type==='nand')return a===0||b===0?1:a===1&&b===1?0:null;if(type==='and')return a===0||b===0?0:a===1&&b===1?1:null;if(type==='or')return a===1||b===1?1:a===0&&b===0?0:null;return a===null||b===null?null:a^b;},
 adc:(v,n,ref)=>Math.max(0,Math.min(2**n-1,Math.floor(v/ref*2**n))),
 dac:(d,n,ref)=>d*ref/2**n,
 gradient:(x,y,a)=>[2*x,2*a*y],
 doubleExact:(a,b)=>a*a*a*b/3+a*b*b*b/3,
 doubleMid(a,b,n){let sum=0;for(let i=0;i<n;i++)for(let j=0;j<n;j++)sum+=(((i+.5)*a/n)**2+((j+.5)*b/n)**2)*a*b/n**2;return sum;},
 circulation:(r,angle,direction=1,field='rotation')=>field==='rotation'?direction*r*r*angle:0,
 nextFF:(kind,q,a,b)=>kind==='d'?a:kind==='t'?(q^a):(a===0&&b===0?q:a===0?0:b===0?1:1-q)
};if(typeof module!=='undefined'&&module.exports)module.exports=M;else root.SPECIAL_MATH=M;})(typeof window!=='undefined'?window:globalThis);
