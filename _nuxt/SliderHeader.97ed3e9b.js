import{S as u,a as g}from"./swiper-slide.c0e015d2.js";import{r as m,N as v}from"./removeSlashpagination.e8e9ca89.js";import{P as w}from"./pagination.19322a1b.js";import{P as h}from"./parallax.3482f5ef.js";import{f as _}from"./fadeWhenScroll.56bb7870.js";import{p as x,i as b,o as i,c as o,a as e,b as y,w as l,F as S,k,e as r,g as N,q as j,t as c,X as B,s as P,j as R}from"./entry.f679ae41.js";const D=[{id:1,title:"Original Solutions",content:"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.",image:"/img/slid/02.jpg"},{id:2,title:"Digital Design Awards",content:"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.",image:"/img/slid/03.jpg"},{id:3,title:"Business value through digital products",content:"",image:"/img/slid/01.jpg"}],V={class:"swiper-container parallax-slider"},A={class:"container"},E={class:"row justify-content-center"},F={class:"col-lg-8 col-md-10"},q={class:"caption center mt-30"},C={class:"color-font"},I={key:0},L={class:"setone setwo"},M={ref:"navigationNextRef",class:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"},O={ref:"navigationPrevRef",class:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"},z={ref:"paginationRef",class:"swiper-pagination top botm"},K={__name:"SliderHeader",props:["sliderRef"],setup(H,{expose:d}){const n=x();d({fixedSlider:n});const p={modules:[h,v,w],speed:1e3,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},parallax:!0,pagination:{type:"fraction",clickable:!0,el:".swiper-pagination"},onSwiper:f};function f(a){setTimeout(()=>{for(var t=0;t<a.slides.length;t++)a.slides[t].childNodes[0].setAttribute("data-swiper-parallax",.75*a.width)},0)}return b(()=>{m(),_(document.querySelectorAll(".fixed-slider .caption"))}),(a,t)=>(i(),o("header",{ref_key:"fixedSlider",ref:n,class:"slider slider-prlx fixed-slider text-center"},[e("div",V,[y(r(g),P(p,{class:"swiper-wrapper"}),{default:l(()=>[(i(!0),o(S,null,k(r(D),s=>(i(),N(r(u),{key:s.id,class:"swiper-slide"},{default:l(()=>[e("div",{class:"bg-img valign",style:j(`background-image: url(${s.image})`),"data-overlay-dark":"6"},[e("div",A,[e("div",E,[e("div",F,[e("div",q,[e("h1",C,c(s.title),1),s.content?(i(),o("p",I,c(s.content),1)):B("",!0),t[0]||(t[0]=e("a",{href:"#",class:"butn bord curve mt-30"},[e("span",null,"Look More")],-1))])])])])],4)]),_:2},1024))),128))]),_:1},16),e("div",L,[e("div",M,t[1]||(t[1]=[e("i",{class:"fas fa-chevron-right"},null,-1)]),512),e("div",O,t[2]||(t[2]=[e("i",{class:"fas fa-chevron-left"},null,-1)]),512)]),e("div",z,null,512),t[3]||(t[3]=R('<div class="social-icon"><a href="#"><i class="fab fa-facebook-f"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-behance"></i></a><a href="#"><i class="fab fa-pinterest-p"></i></a></div>',1))])],512))}};export{K as _};
