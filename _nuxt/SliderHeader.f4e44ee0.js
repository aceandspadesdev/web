import{S as u,a as g}from"./swiper-slide.04926bf5.js";import{r as m,N as v}from"./removeSlashpagination.ded5a082.js";import{P as h}from"./pagination.ccb686fe.js";import{P as w}from"./parallax.78d813b1.js";import{f as _}from"./fadeWhenScroll.56bb7870.js";import{l as x,f as b,o as i,c as o,a as e,b as y,w as l,F as S,h as k,e as r,i as N,m as j,t as c,W as B,p as P,g as R}from"./entry.c7e4c2b9.js";const D=[{id:1,title:"Original Solutions",content:"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.",image:"/img/slid/02.jpg"},{id:2,title:"Digital Design Awards",content:"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.",image:"/img/slid/03.jpg"},{id:3,title:"Business value through digital products",content:"",image:"/img/slid/01.jpg"}],V={class:"swiper-container parallax-slider"},A={class:"container"},E={class:"row justify-content-center"},F={class:"col-lg-8 col-md-10"},C={class:"caption center mt-30"},I={class:"color-font"},L={key:0},M={class:"setone setwo"},O={ref:"navigationNextRef",class:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"},W={ref:"navigationPrevRef",class:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"},q={ref:"paginationRef",class:"swiper-pagination top botm"},Q={__name:"SliderHeader",props:["sliderRef"],setup(z,{expose:d}){const n=x();d({fixedSlider:n});const p={modules:[w,v,h],speed:1e3,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},parallax:!0,pagination:{type:"fraction",clickable:!0,el:".swiper-pagination"},onSwiper:f};function f(s){setTimeout(()=>{for(var t=0;t<s.slides.length;t++)s.slides[t].childNodes[0].setAttribute("data-swiper-parallax",.75*s.width)},0)}return b(()=>{m(),_(document.querySelectorAll(".fixed-slider .caption"))}),(s,t)=>(i(),o("header",{ref_key:"fixedSlider",ref:n,class:"slider slider-prlx fixed-slider text-center"},[e("div",V,[y(r(g),P(p,{class:"swiper-wrapper"}),{default:l(()=>[(i(!0),o(S,null,k(r(D),a=>(i(),N(r(u),{key:a.id,class:"swiper-slide"},{default:l(()=>[e("div",{class:"bg-img valign",style:j(`background-image: url(${a.image})`),"data-overlay-dark":"6"},[e("div",A,[e("div",E,[e("div",F,[e("div",C,[e("h1",I,c(a.title),1),a.content?(i(),o("p",L,c(a.content),1)):B("",!0),t[0]||(t[0]=e("a",{href:"#",class:"butn bord curve mt-30"},[e("span",null,"Look More")],-1))])])])])],4)]),_:2},1024))),128))]),_:1},16),e("div",M,[e("div",O,t[1]||(t[1]=[e("i",{class:"fas fa-chevron-right"},null,-1)]),512),e("div",W,t[2]||(t[2]=[e("i",{class:"fas fa-chevron-left"},null,-1)]),512)]),e("div",q,null,512),t[3]||(t[3]=R('<div class="social-icon"><a href="#"><i class="fab fa-facebook-f"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-behance"></i></a><a href="#"><i class="fab fa-pinterest-p"></i></a></div>',1))])],512))}};export{Q as _};