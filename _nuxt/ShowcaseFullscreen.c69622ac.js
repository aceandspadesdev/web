import{_ as u}from"./nuxt-link.098516a2.js";import{S as v,a as f}from"./swiper-slide.bea4ba80.js";import"./core.95d71c40.js";import{M as _}from"./mousewheel.4c763d6b.js";import{r as g,N as h}from"./removeSlashpagination.23a3d923.js";import{P as w}from"./parallax.5562413a.js";import{g as x,o as a,c as l,a as s,b as n,w as o,F as b,i as S,f as r,j as k,q as N,t as d,s as j,h as y}from"./entry.07a47089.js";const D=[{id:1,title:{first:"Midnight",second:"Snack"},image:"/img/portfolio/full/1.jpg",sub:"Design"},{id:2,title:{first:"Fisherman",second:"Portrait"},image:"/img/portfolio/full/2.jpg",sub:"Design"},{id:3,title:{first:"Tribos",second:"Urbanas"},image:"/img/portfolio/full/3.jpg",sub:"Design"},{id:4,title:{first:"Monsoon",second:"in the city"},image:"/img/portfolio/full/3.jpg",sub:"Design"}],P={class:"swiper-container parallax-slider"},B={class:"container"},F={class:"row"},M={class:"col-lg-12"},V={class:"caption"},E={class:"stroke","data-swiper-parallax":"-2000"},L={"data-swiper-parallax":"-5000"},R=s("div",{class:"bord"},null,-1),T=y('<div class="txt-botm"><div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"><div><span>Next Slide</span></div><div><i class="fas fa-chevron-right"></i></div></div><div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"><div><i class="fas fa-chevron-left"></i></div><div><span>Prev Slide</span></div></div><div class="swiper-pagination dots"></div></div>',1),G={__name:"ShowcaseFullscreen",props:["sliderRef"],setup(c){const p={modules:[w,h,_],speed:1e3,slidesPerView:1,mousewheel:!0,parallax:!0,navigation:{prevEl:".txt-botm .swiper-button-prev",nextEl:".txt-botm .swiper-button-next"},onSwiper:e=>{setTimeout(()=>{for(var t=0;t<e.slides.length;t++)e.slides[t].childNodes[0].setAttribute("data-swiper-parallax",.75*e.width)})}};return x(()=>{g()}),(e,t)=>{const m=u;return a(),l("header",{ref:c.sliderRef,class:"slider showcase-full"},[s("div",P,[n(r(f),j(p,{class:"swiper-wrapper"}),{default:o(()=>[(a(!0),l(b,null,S(r(D),i=>(a(),k(r(v),{key:i.id,class:"swiper-slide"},{default:o(()=>[s("div",{class:"bg-img valign",style:N(`background-image: url(${i.image})`),"data-overlay-dark":"4"},[s("div",B,[s("div",F,[s("div",M,[s("div",V,[s("h1",null,[n(m,{to:"/project-details2/project-details2-dark"},{default:o(()=>[s("div",E,d(i.title.first),1),s("span",L,d(i.title.second),1)]),_:2},1024),R])])])])])],4)]),_:2},1024))),128))]),_:1},16),T])],512)}}};export{G as _};
