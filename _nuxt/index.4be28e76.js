import{_ as h}from"./nuxt-link.bf128ed5.js";import{_ as C,o as t,c as i,a as e,g as D,F as c,h as u,n as d,e as o,t as l,d as p,b as _,w as x}from"./entry.989f6207.js";const k={},P={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"};function y(b,n){return t(),i("svg",P,n[0]||(n[0]=[e("path",{d:"M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"},null,-1)]))}const w=C(k,[["render",y]]),g=[{id:1,title:"Free Package",price:0,description:"Get Free 7 Days Trial",status:"idle",features:[{title:"Design & Development",disabled:!1},{title:"Clean Code & Easy",disabled:!1},{title:"Modern UI Design",disabled:!1},{title:"350 GB Hosting Free",disabled:!0},{title:"24/7 Hour Support",disabled:!0},{title:"Upload Modern Design",disabled:!0}]},{id:2,title:"Premium Package",price:59,description:"Choose Package",status:"active",features:[{title:"Design & Development",disabled:!1},{title:"Clean Code & Easy",disabled:!1},{title:"Modern UI Design",disabled:!1},{title:"350 GB Hosting Free",disabled:!1},{title:"24/7 Hour Support",disabled:!1},{title:"Upload Modern Design",disabled:!0}]},{id:3,title:"Golden Package",price:99,description:"Choose Package",status:"Idle",features:[{title:"Design & Development",disabled:!1},{title:"Clean Code & Easy",disabled:!1},{title:"Modern UI Design",disabled:!1},{title:"350 GB Hosting Free",disabled:!1},{title:"24/7 Hour Support",disabled:!1},{title:"Upload Modern Design",disabled:!1}]}],M={class:d("app-price section-padding")},B={class:"container"},F={class:"pric-tables"},H={class:"row"},$={class:"type text-center mb-15"},L={class:"amount text-center mb-40"},U={class:"order mb-40"},G={class:"feat"},I={class:"icon"},E={__name:"index",setup(b){return(n,a)=>{const f=h;return t(),i("section",M,[e("div",B,[a[1]||(a[1]=D('<div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="s-head text-center mb-80"><h6 class="stit mb-30"><span class="left"></span> Pricing Package <span class="Right"></span></h6><h2>Popular Pricing Package for Design Mobile Application </h2></div></div></div>',1)),e("div",F,[e("div",H,[(t(!0),i(c,null,u(o(g),(s,m)=>(t(),i("div",{class:"col-lg-4",key:s.id},[e("div",{class:d(`item sm-padding ${m!==o(g).length-1?"sm-mb50":""} ${s.status==="active"?"active":""}`)},[e("div",$,[e("h5",null,l(s.title),1)]),e("div",L,[e("h3",null,[a[0]||(a[0]=e("span",null,"$",-1)),p(" "+l(s.price),1)])]),e("div",U,[_(f,{to:"#0",class:d(`${s.status==="active"?"butn-gr":"butn-gray"} rounded buton`)},{default:x(()=>[e("span",null,l(s.description),1)]),_:2},1032,["class"])]),e("div",G,[e("ul",null,[(t(!0),i(c,null,u(s.features,(r,v)=>(t(),i("li",{key:v,class:d(`${r.disabled?"disbl":""}`)},[e("i",I,[_(o(w))]),p(" "+l(r.title),1)],2))),128))])])],2)]))),128))])])])])}}};export{E as _};
