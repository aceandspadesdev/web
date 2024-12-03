import{_ as $}from"./nuxt-link.bf128ed5.js";import{f as D,o as a,c as p,a as s,g as A,F as b,h,b as d,w as f,d as x,t as n,e as l}from"./entry.989f6207.js";const C={class:"col-lg-3"},w={class:"sidebar md-mb50"},y={class:"row"},M={class:"col-lg-12 col-md-6"},j={class:"box gat mb-30"},F={class:"col-lg-12 col-md-6"},S={class:"box filter-price mb-30"},k={class:"range-slider mb-30"},B=["step","value","min","max"],N={class:"start-pointe"},T={class:"col-lg-12 col-md-6"},V={class:"box tags"},L={__name:"Sidebar",props:["categories","tags","priceFilter"],setup(g){const{categories:m,tags:v,priceFilter:i}=g;function u(){const t=document.querySelector("#range"),e=Number((t.value-t.min)*100/(t.max-t.min)),c=16-e*.32,o=document.getElementById("tooltip");o.innerHTML=`<span>${t.value}</span>`,o.style.left=`calc(${e}% + (${c}px))`,document.documentElement.style.setProperty("--range-progress",`calc(${e}% + (${c}px))`);let r=t.value;t.value=r}return D(()=>{u()}),(t,e)=>{const c=$;return a(),p("div",C,[s("div",w,[s("div",y,[e[5]||(e[5]=A('<div class="col-lg-12 col-md-6"><div class="search mb-30"><form><div class="form-group"><input type="text" name="shop-search" placeholder="Search"><button><span class="icon pe-7s-search"></span></button></div></form></div></div>',1)),s("div",M,[s("div",j,[e[1]||(e[1]=s("h6",{class:"title mb-30"},"Category",-1)),s("ul",null,[(a(),p(b,null,h(m,(o,r)=>s("li",{key:r},[d(c,{to:"#0"},{default:f(()=>[x(n(o.title)+" ",1),s("span",null,n(o.productsCount>10?o.productsCount:"0"+o.productsCount),1)]),_:2},1024)])),64))])])]),s("div",F,[s("div",S,[e[3]||(e[3]=s("h6",{class:"title mb-30"},"Filter By Price",-1)),s("div",k,[e[2]||(e[2]=s("div",{id:"tooltip"},null,-1)),s("input",{id:"range",type:"range",step:i.step,value:i.value,min:i.min,max:i.max,onInput:e[0]||(e[0]=o=>u())},null,40,B),s("div",N,"$ "+n(i.min),1)])])]),s("div",T,[s("div",V,[e[4]||(e[4]=s("h6",{class:"title mb-30"},"Popular Tags",-1)),s("div",null,[(a(),p(b,null,h(v,(o,r)=>d(c,{to:"#0",key:r},{default:f(()=>[x(n(o),1)]),_:2},1024)),64))])])])])])])}}},P={class:"col-lg-9"},E={class:"store"},I={class:"row"},O={class:"item"},W={class:"img"},q=["src"],H={class:"tag"},R={class:"add"},z={class:"info"},G={__name:"Products",props:["products"],setup(g){const{products:m}=g;return(v,i)=>{const u=$;return a(),p("div",P,[s("div",E,[i[1]||(i[1]=A('<div class="top-area"><div class="row"><div class="col-lg-4 valign"><div class="result-text"><span>Showing 1 - 12 of 30 Results</span></div></div><div class="col-lg-8 d-flex justify-content-end"><div class="filter-select"><select class="form-select" aria-label="Default select example"><option selected>Open this select menu</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div></div></div></div>',1)),s("div",I,[(a(),p(b,null,h(m,t=>s("div",{class:"col-lg-4 col-md-6",key:t.id},[s("div",O,[s("div",W,[s("img",{src:t.image,alt:""},null,8,q),s("span",H,n(t.tag),1),s("div",R,[d(u,{to:"#0"},{default:f(()=>i[0]||(i[0]=[x("Add To Cart "),s("span",{class:"pe-7s-angle-right"},null,-1)])),_:1})])]),s("div",z,[s("h6",null,n(t.name),1),s("span",null,"$"+n(t.price),1)])])])),64))])])])}}},J=[{title:"App Design",productsCount:5},{title:"Development",productsCount:3},{title:"Web Design",productsCount:7},{title:"Dashboard",productsCount:4},{title:"Logo Design",productsCount:9},{title:"Branding",productsCount:14}],K=["Apps","Design","Branding","Software","Development","Web"],Q={min:5,max:800,step:10,value:200},U=[{id:1,image:"/mobile-app/img/shop/1.jpg",tag:"Apps",name:"Mobile Apps Design",price:1253},{id:2,image:"/mobile-app/img/shop/2.jpg",tag:"Apps",name:"Mobile Apps Design",price:1253},{id:3,image:"/mobile-app/img/shop/3.jpg",tag:"Apps",name:"Mobile Apps Design",price:1253},{id:4,image:"/mobile-app/img/shop/4.jpg",tag:"Apps",name:"Mobile Apps Design",price:1253},{id:5,image:"/mobile-app/img/shop/5.jpg",tag:"Apps",name:"Mobile Apps Design",price:1253},{id:6,image:"/mobile-app/img/shop/6.jpg",tag:"Apps",name:"Mobile Apps Design",price:1253},{id:7,image:"/mobile-app/img/shop/7.jpg",tag:"Apps",name:"Mobile Apps Design",price:1253},{id:8,image:"/mobile-app/img/shop/8.jpg",tag:"Apps",name:"Mobile Apps Design",price:1253},{id:9,image:"/mobile-app/img/shop/9.jpg",tag:"Apps",name:"Mobile Apps Design",price:1253}],_={categories:J,tags:K,priceFilter:Q,products:U},X={class:"shop section-padding"},Y={class:"container"},Z={class:"row"},ts={__name:"index",setup(g){return(m,v)=>(a(),p("section",X,[s("div",Y,[s("div",Z,[d(l(L),{categories:l(_).categories,tags:l(_).tags,priceFilter:l(_).priceFilter},null,8,["categories","tags","priceFilter"]),d(l(G),{products:l(_).products},null,8,["products"])])])]))}};export{ts as _};
