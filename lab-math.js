(function(root){
  const math={
    normalPDF:(x,mu,sigma)=>Math.exp(-.5*((x-mu)/sigma)**2)/(sigma*Math.sqrt(2*Math.PI)),
    normalCDF(x,mu=0,sigma=1){const z=(x-mu)/(sigma*Math.sqrt(2)),a=Math.abs(z),t=1/(1+.3275911*a);const erf=1-(((((1.061405429*t-1.453152027)*t)+1.421413741)*t-.284496736)*t+.254829592)*t*Math.exp(-a*a);return .5*(1+Math.sign(z)*erf);},
    rcVoltage:(t,r,c,v)=>v*(1-Math.exp(-t/(r*c))),
    fullAdder:(a,b,c)=>({sum:a^b^c,carry:(a&b)|(a&c)|(b&c)}),
    complexSquare:(x,y)=>[x*x-y*y,2*x*y],
    complexExp:(x,y)=>[Math.exp(x)*Math.cos(y),Math.exp(x)*Math.sin(y)],
    riemannRight:n=>8/3+4/n+4/(3*n*n),
    surface:(x,y,kind,a)=>kind==='bowl'?a*(x*x+y*y)/4:kind==='saddle'?a*(x*x-y*y)/4:a*Math.sin(x)*Math.cos(y)
  };
  if(typeof module!=='undefined'&&module.exports)module.exports=math;else root.LAB_MATH=math;
})(typeof window!=='undefined'?window:globalThis);
