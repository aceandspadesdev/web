import{_ as u}from"./nuxt-link.816b196a.js";import{S as v,a as f}from"./swiper-slide.04926bf5.js";import{M as _}from"./mousewheel.1272a684.js";import{r as h,N as w}from"./removeSlashpagination.ded5a082.js";import{P as b}from"./parallax.78d813b1.js";import{f as x,o as i,c as l,a as s,b as n,w as r,F as k,h as S,e as o,i as P,m as j,t as d,p as y,g as D}from"./entry.c7e4c2b9.js";const N=[{id:1,title:{first:"Bahumukam",second:""},image:"/img/posters/Bahumukham_Landscape1.jpg",sub:"Design"},{id:2,title:{first:"Kaliyugam",second:"Pattanamulo"},image:"/img/posters/kaliyugam-pattanamulo.jpg",sub:"Design"},{id:3,title:{first:"Paagal",second:""},image:"/img/posters/Paagal.jpg",sub:"Design"},{id:4,title:{first:"Premkumar",second:""},image:"/img/posters/prem-kumar_Landscape.jpg",sub:"Design"},{id:5,title:{first:"Sarvam",second:"ShaktiMayam"},image:"/img/posters/sharvamshakti.jpg",sub:"Design"},{id:6,title:{first:"Sindhooram",second:""},image:"/img/posters/sindhooram.jpg",sub:"Design"},{id:7,title:{first:"Skylab",second:""},image:"/img/posters/skylab_landscape.jpg",sub:"Design"},{id:8,title:{first:"SPY",second:""},image:"/img/posters/SPY-Landscape.jpg",sub:"Design"}],B={class:"swiper-container parallax-slider"},L={class:"container"},F={class:"row"},M={class:"col-lg-12"},V={class:"caption"},E={class:"stroke","data-swiper-parallax":"-2000"},R={"data-swiper-parallax":"-5000"},T={__name:"ShowcaseFullscreen",props:["sliderRef"],setup(p){const c={modules:[b,w,_],speed:1e3,slidesPerView:1,mousewheel:!0,parallax:!0,navigation:{prevEl:".txt-botm .swiper-button-prev",nextEl:".txt-botm .swiper-button-next"},onSwiper:a=>{setTimeout(()=>{for(var e=0;e<a.slides.length;e++)a.slides[e].childNodes[0].setAttribute("data-swiper-parallax",.75*a.width)})}},{sliderRef:m}=p;return x(()=>{h()}),(a,e)=>{const g=u;return i(),l("header",{ref:m,class:"slider showcase-full"},[s("div",B,[n(o(f),y(c,{class:"swiper-wrapper"}),{default:r(()=>[(i(!0),l(k,null,S(o(N),t=>(i(),P(o(v),{key:t.id,class:"swiper-slide"},{default:r(()=>[s("div",{class:"bg-img valign",style:j(`background-image: url(${t.image})`),"data-overlay-dark":"4"},[s("div",L,[s("div",F,[s("div",M,[s("div",V,[s("h1",null,[n(g,{to:"/project-details2/project-details2-dark"},{default:r(()=>[s("div",E,d(t.title.first),1),s("span",R,d(t.title.second),1)]),_:2},1024),e[0]||(e[0]=s("div",{class:"bord"},null,-1))])])])])])],4)]),_:2},1024))),128))]),_:1},16),e[1]||(e[1]=D('<div class="txt-botm"><div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"><div><span>Next Slide</span></div><div><i class="fas fa-chevron-right"></i></div></div><div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"><div><i class="fas fa-chevron-left"></i></div><div><span>Prev Slide</span></div></div><div class="swiper-pagination dots"></div></div>',1))])])}}};export{T as _};