import{_ as y}from"./nuxt-link.816b196a.js";import{a as P}from"./logo-dark.670c1adb.js";import{_ as A}from"./logo-light.ff0526b5.js";import{g as M}from"./getSiblings.1c1fe1d0.js";import{l as I,f as x,aQ as D,o as n,c as d,a as s,b as o,w as t,g,F as L,h as U,e as u,i as T,m as N,t as w,d as l,W as B,p as $,_ as b}from"./entry.c7e4c2b9.js";import{S as _,a as j}from"./swiper-slide.04926bf5.js";import{r as C,N as S}from"./removeSlashpagination.ded5a082.js";import{P as V}from"./pagination.ccb686fe.js";import{P as H}from"./parallax.78d813b1.js";import{f as E}from"./fadeWhenScroll.56bb7870.js";import{i as O}from"./initIsotope.f37c57b2.js";import{E as q}from"./effect-fade.2f69f50f.js";import{A as W}from"./autoplay.5b8e8cd1.js";import{_ as F}from"./1.8b401423.js";import{_ as Y}from"./2.3e21db4d.js";const G={class:"container"},z={key:0,ref:"lr",src:P,alt:"logo"},J={key:1,ref:"lr",src:A,alt:"logo"},Q={key:2,ref:"lr",src:A,alt:"logo"},Vi={__name:"NavbarArch",props:["lr","theme"],setup(v){const{lr:a,theme:i}=v;function e(c){if(M(c.target.parentElement).filter(r=>r.classList.contains("show")).map(r=>{r.classList.remove("show"),r.childNodes[0]&&r.childNodes[0].setAttribute("aria-expanded",!1),r.childNodes[1]&&r.childNodes[1].classList.remove("show")}),c.target.setAttribute("aria-expanded",!0),c.target.parentElement){c.target.parentElement.classList.toggle("show");let r=c.target.parentElement.childNodes[1];r&&r.classList.toggle("show")}}function f(){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}function p(c){c.preventDefault();const r=c.currentTarget.dataset.scrollTo;setTimeout(()=>{document.querySelector(r).scrollIntoView({behavior:"smooth"})},300)}const h=I();function m(){window.scrollY>300?h.value.classList.add("nav-scroll"):h.value.classList.remove("nav-scroll")}return x(()=>{m(),window.addEventListener("scroll",m)}),D(()=>{window.removeEventListener("scroll",m)}),(c,r)=>{const R=y;return n(),d("nav",{class:"navbar navbar-expand-lg",ref_key:"navbar",ref:h},[s("div",G,[o(R,{to:"/",class:"logo"},{default:t(()=>[i==="light"?(n(),d("img",z,null,512)):i==="themeD"?(n(),d("img",J,null,512)):(n(),d("img",Q,null,512))]),_:1}),s("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse",onClick:f,"data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r[0]||(r[0]=[s("span",{class:"icon-bar"},[s("i",{class:"fas fa-bars"})],-1)])),s("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},[s("ul",{class:"navbar-nav ml-auto"},[s("li",{class:"nav-item dropdown",onClick:e},r[1]||(r[1]=[g('<span class="nav-link dropdown-toggle" data-toggle="dropdown" data-scroll-nav="0"> Home </span><div class="dropdown-menu"><a class="dropdown-item" href="/homepage/home1-dark"> Main Home </a><a class="dropdown-item" href="/homepage/home2-dark"> Creative Agency </a><a class="dropdown-item" href="/homepage/home5-dark"> Digital Agency </a><a class="dropdown-item" href="/homepage/home4-dark"> Business One Page </a><a class="dropdown-item" href="/homepage/home3-dark"> Corporate Business </a><a class="dropdown-item" href="/homepage/home6-dark"> Modern Agency </a><a class="dropdown-item" href="/homepage/home7-dark"> Freelancer </a><a class="dropdown-item" href="/homepage/home8-dark"> Architecture </a></div>',2)])),s("li",{class:"nav-item"},[s("a",{class:"nav-link",onClick:p,"data-scroll-to":"#about"},"About ")]),s("li",{class:"nav-item"},[s("a",{class:"nav-link",onClick:p,"data-scroll-to":"#works"}," Works ")]),s("li",{class:"nav-item"},[s("a",{class:"nav-link",onClick:p,"data-scroll-to":"#team"}," Team ")]),s("li",{class:"nav-item"},[s("a",{class:"nav-link",onClick:p,"data-scroll-to":"#testimonials"}," Testimonials ")]),s("li",{class:"nav-item"},[s("a",{class:"nav-link",onClick:p,"data-scroll-to":"#blogs"}," Blog ")]),s("li",{class:"nav-item"},[s("a",{class:"nav-link",onClick:p,"data-scroll-to":"#contact"}," Contact ")])])])])],512)}}},K=[{id:1,title:{first:"Private",second:"Houses Turnkey"},content:"We developed strong relationships with contractors and specialist companies offering discounted prices.",image:"/img/arch/slid/1.jpg"},{id:2,title:"Dustin Villa, Spain",content:"We developed strong relationships with contractors and specialist companies offering discounted prices.",image:"/img/arch/slid/3.jpg"},{id:3,title:{first:"Innovative",second:"Architectures"},content:"We developed strong relationships with contractors and specialist companies offering discounted prices.",image:"/img/arch/slid/2.jpg"}],X={class:"swiper-container parallax-slider"},Z={class:"container"},ss={class:"row"},is={class:"col-lg-6"},es={class:"caption mt-30"},as={key:0},ts={key:1},os={key:0},Hi={__name:"Header5",props:["sliderRef"],setup(v,{expose:a}){const{sliderRef:i}=v,e=I();a({fixedSlider:e});const f={modules:[H,S,V],speed:1e3,navigation:{prevEl:".setting .controls .swiper-button-prev",nextEl:".setting .controls .swiper-button-next"},parallax:!0,pagination:{clickable:!0,el:".setting .swiper-pagination"},onSwiper:p};function p(h){setTimeout(()=>{for(var m=0;m<h.slides.length;m++)h.slides[m].childNodes[0].setAttribute("data-swiper-parallax",.75*h.width)},0)}return x(()=>{C(),E(document.querySelectorAll(".fixed-slider .caption"))}),(h,m)=>(n(),d("header",{ref:i,id:"arch-slider",class:"slider arch-slider"},[s("div",X,[o(u(j),$(f,{class:"swiper-wrapper"}),{default:t(()=>[(n(!0),d(L,null,U(u(K),(c,r)=>(n(),T(u(_),{key:c.id,class:"swiper-slide"},{default:t(()=>[s("div",{class:"bg-img valign",style:N(`background-image: url(${c.image})`),"data-overlay-dark":"6"},[s("div",Z,[s("div",ss,[s("div",is,[s("div",es,[s("h5",null,"0"+w(r+1)+" .",1),s("h1",null,[typeof c.title=="object"?(n(),d("div",as,[l(w(c.title.first)+" ",1),m[0]||(m[0]=s("br",null,null,-1)),l(" "+w(c.title.second),1)])):(n(),d("div",ts,w(c.title),1))]),c.content?(n(),d("p",os,w(c.content),1)):B("",!0)])]),m[1]||(m[1]=s("div",{class:"col-lg-4 valign"},[s("div",{class:"explore"},[s("a",{href:"#0"},[l(" Explore Project "),s("i",{class:"ion-chevron-right"})])])],-1))])])],4)]),_:2},1024))),128))]),_:1},16),m[2]||(m[2]=g('<div class="setting"><div class="controls"><div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"><i class="ion-chevron-right"></i></div><div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"><i class="ion-chevron-left"></i></div></div><div class="swiper-pagination"></div></div>',1))])]))}},ls={},ns={id:"about",class:"about-ar section-padding"},rs={class:"container"},ds={class:"row"},cs={class:"col-lg-6 valign"},ms={class:"content"};function ps(v,a){const i=y;return n(),d("section",ns,[s("div",rs,[s("div",ds,[a[4]||(a[4]=g('<div class="col-lg-6 valign"><div class="img"><div class="bg-img bg-fixed hero-bg" style="background-image:url(/img/arch/hero.jpg);"></div><div class="exp valign text-center"><div class="full-width"><h2 class="bg-img bg-fixed" style="background-image:url(/img/arch/hero.jpg);"> 25 </h2><p>Years Of Experience</p></div></div></div></div>',1)),s("div",cs,[s("div",ms,[a[1]||(a[1]=s("h6",{class:"sub-title main-color ls10 text-u"},"About Us",-1)),a[2]||(a[2]=s("h3",null,"Best Designers Architectures for You.",-1)),a[3]||(a[3]=s("p",null," Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum sit amet bibendum nisl. ",-1)),o(i,{class:"butn bord mt-30",to:"/about/about-dark"},{default:t(()=>a[0]||(a[0]=[s("span",null,"About Us",-1)])),_:1})])])])])])}const Oi=b(ls,[["render",ps]]),vs={},gs={class:"serv-arch"};function us(v,a){return n(),d("section",gs,a[0]||(a[0]=[g('<div class="container-fluid"><div class="row justify-content-center"><div class="col-lg col-md-6 item bg-img" style="background-image:url(/img/arch/s2.jpg);"><h6 class="numb">01</h6><h5>Architecture</h5><p> We provide all equipment and services, etc and ensure a safe and secure project site. </p><a href="#0" class="custom-font more main-color"> Read More </a></div><div class="col-lg col-md-6 item bg-img" style="background-image:url(/img/arch/s1.jpg);"><h6 class="numb">02</h6><h5>Interior Design</h5><p> We provide all equipment and services, etc and ensure a safe and secure project site. </p><a href="#0" class="custom-font more main-color"> Read More </a></div><div class="col-lg col-md-6 item bg-img" style="background-image:url(/img/arch/s3.jpg);"><h6 class="numb">03</h6><h5>3D Modeling</h5><p> We provide all equipment and services, etc and ensure a safe and secure project site. </p><a href="#0" class="custom-font more main-color"> Read More </a></div><div class="col-lg col-md-6 item bg-img" style="background-image:url(/img/arch/s4.jpg);"><h6 class="numb">04</h6><h5>Furniture Design</h5><p> We provide all equipment and services, etc and ensure a safe and secure project site. </p><a href="#0" class="custom-font more main-color"> Read More </a></div><div class="col-lg col-md-6 item bg-img" style="background-image:url(/img/arch/s5.jpg);"><h6 class="numb">05</h6><h5>Urban Design</h5><p> We provide all equipment and services, etc and ensure a safe and secure project site. </p><a href="#0" class="custom-font more main-color"> Read More </a></div></div></div>',1)]))}const qi=b(vs,[["render",us]]),fs=""+globalThis.__publicAssetsURL("img/arch/work/1.jpg"),hs=""+globalThis.__publicAssetsURL("img/arch/work/2.jpg"),ws=""+globalThis.__publicAssetsURL("img/arch/work/5.jpg"),_s=""+globalThis.__publicAssetsURL("img/arch/work/3.jpg"),bs=""+globalThis.__publicAssetsURL("img/arch/work/4.jpg"),xs=""+globalThis.__publicAssetsURL("img/arch/work/6.jpg"),ks={class:"portfolio po-arch section-padding pb-70",id:"works"},ys={class:"container"},As={class:"row"},$s={class:"gallery full-width"},js={class:"col-md-6 items graphic lg-mr wow fadeInUp","data-wow-delay":".4s"},Cs={class:"item-img"},Ss={class:"cont"},Is={class:"tags main-color custom-font"},Ls={class:"col-md-6 items web wow fadeInUp","data-wow-delay":".4s"},Us={class:"item-img"},Ts={class:"cont"},Ns={class:"tags main-color custom-font"},Es={class:"col-md-6 items web wow fadeInUp","data-wow-delay":".4s"},Rs={class:"item-img"},Ps={class:"cont"},Ms={class:"tags main-color custom-font"},Ds={class:"col-md-6 items web graphic wow fadeInUp","data-wow-delay":".4s"},Bs={class:"item-img"},Vs={class:"cont"},Hs={class:"tags main-color custom-font"},Os={class:"col-md-6 items brand wow fadeInUp","data-wow-delay":".4s"},qs={class:"item-img"},Ws={class:"cont"},Fs={class:"tags main-color custom-font"},Ys={class:"col-md-6 items brand wow fadeInUp","data-wow-delay":".4s"},Gs={class:"item-img"},zs={class:"cont"},Js={class:"tags main-color custom-font"},Wi={__name:"Works6",setup(v){return x(()=>{setTimeout(()=>{O()},500)}),(a,i)=>{const e=y;return n(),d("section",ks,[i[31]||(i[31]=g('<div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h2 class="wow fadeIn" data-wow-delay=".3s">Projects</h2></div></div></div></div>',1)),s("div",ys,[s("div",As,[i[30]||(i[30]=g('<div class="filtering col-12"><div class="filter custom-font wow fadeIn" data-wow-delay=".5s"><span data-filter="*" class="active"> All </span><span data-filter=".brand">Interior</span><span data-filter=".web">Architecture</span><span data-filter=".graphic">Residential</span></div></div>',1)),s("div",$s,[s("div",js,[s("div",Cs,[o(e,{class:"imago wow",to:"/project-details2/project-details2-dark"},{default:t(()=>i[0]||(i[0]=[s("img",{src:fs,alt:"image"},null,-1),s("div",{class:"item-img-overlay"},null,-1)])),_:1})]),s("div",Ss,[i[4]||(i[4]=s("h5",null,"BUGANVILLA HOUSE",-1)),s("span",Is,[o(e,{to:"#0"},{default:t(()=>i[1]||(i[1]=[l("Arch")])),_:1}),i[3]||(i[3]=l(", ")),o(e,{to:"#0"},{default:t(()=>i[2]||(i[2]=[l("Interior")])),_:1})])])]),s("div",Ls,[s("div",Us,[o(e,{class:"imago wow",to:"/project-details2/project-details2-dark"},{default:t(()=>i[5]||(i[5]=[s("img",{src:hs,alt:"image"},null,-1),s("div",{class:"item-img-overlay"},null,-1)])),_:1})]),s("div",Ts,[i[9]||(i[9]=s("h5",null,"The Concept",-1)),s("span",Ns,[o(e,{to:"#0"},{default:t(()=>i[6]||(i[6]=[l("Arch")])),_:1}),i[8]||(i[8]=l(", ")),o(e,{to:"#0"},{default:t(()=>i[7]||(i[7]=[l("Interior")])),_:1})])])]),s("div",Es,[s("div",Rs,[o(e,{class:"imago wow",to:"/project-details2/project-details2-dark"},{default:t(()=>i[10]||(i[10]=[s("img",{src:ws,alt:"image"},null,-1),s("div",{class:"item-img-overlay"},null,-1)])),_:1})]),s("div",Ps,[i[14]||(i[14]=s("h5",null,"Private House",-1)),s("span",Ms,[o(e,{to:"#0"},{default:t(()=>i[11]||(i[11]=[l("Arch")])),_:1}),i[13]||(i[13]=l(", ")),o(e,{to:"#0"},{default:t(()=>i[12]||(i[12]=[l("Interior")])),_:1})])])]),s("div",Ds,[s("div",Bs,[o(e,{class:"imago wow",to:"/project-details2/project-details2-dark"},{default:t(()=>i[15]||(i[15]=[s("img",{src:_s,alt:"image"},null,-1),s("div",{class:"item-img-overlay"},null,-1)])),_:1})]),s("div",Vs,[i[19]||(i[19]=s("h5",null,"Floating House Messinia",-1)),s("span",Hs,[o(e,{to:"#0"},{default:t(()=>i[16]||(i[16]=[l("Arch")])),_:1}),i[18]||(i[18]=l(", ")),o(e,{to:"#0"},{default:t(()=>i[17]||(i[17]=[l("Interior")])),_:1})])])]),s("div",Os,[s("div",qs,[o(e,{class:"imago wow",to:"/project-details2/project-details2-dark"},{default:t(()=>i[20]||(i[20]=[s("img",{src:bs,alt:"image"},null,-1),s("div",{class:"item-img-overlay"},null,-1)])),_:1})]),s("div",Ws,[i[24]||(i[24]=s("h5",null,"IN THE PINE FOREST",-1)),s("span",Fs,[o(e,{to:"#0"},{default:t(()=>i[21]||(i[21]=[l("Arch")])),_:1}),i[23]||(i[23]=l(", ")),o(e,{to:"#0"},{default:t(()=>i[22]||(i[22]=[l("Interior")])),_:1})])])]),s("div",Ys,[s("div",Gs,[o(e,{class:"imago wow",to:"/project-details2/project-details2-dark"},{default:t(()=>i[25]||(i[25]=[s("img",{src:xs,alt:"image"},null,-1),s("div",{class:"item-img-overlay"},null,-1)])),_:1})]),s("div",zs,[i[29]||(i[29]=s("h5",null,"VILLAS IN SOCHI",-1)),s("span",Js,[o(e,{to:"#0"},{default:t(()=>i[26]||(i[26]=[l("Arch")])),_:1}),i[28]||(i[28]=l(", ")),o(e,{to:"#0"},{default:t(()=>i[27]||(i[27]=[l("Interior")])),_:1})])])])])])])])}}},Qs=""+globalThis.__publicAssetsURL("img/team/a1.jpg"),Ks=""+globalThis.__publicAssetsURL("img/team/a2.jpg"),Xs=""+globalThis.__publicAssetsURL("img/team/a3.jpg"),Zs={},si={id:"team",class:"team section-padding"};function ii(v,a){return n(),d("section",si,a[0]||(a[0]=[g('<div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h2 class="wow fadeIn" data-wow-delay=".3s">Our Team</h2></div></div></div></div>',1),s("div",{class:"container"},[s("div",{class:"row"},[s("div",{class:"col-lg-4"},[s("div",{class:"item cir md-mb50"},[s("div",{class:"img"},[s("img",{src:Qs,alt:""}),s("div",{id:"circle"},[s("svg",{version:"1.1",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve"},[s("defs",null,[s("path",{id:"circlePath",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})]),s("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),s("g",null,[s("use",{"xlink:href":"#circlePath",fill:"none"}),s("text",{fill:"#c5a47e",class:"custom-font"},[s("textPath",{"xlink:href":"#circlePath"}," CEO Manager - CEO Manager - CEO Manager - ")])])])]),s("div",{class:"info"},[s("h6",{class:"ls3"},"Ryan Hicks"),s("span",{class:"main-color fw-600"},"Client Manager")])])])]),s("div",{class:"col-lg-4"},[s("div",{class:"item cir md-mb50"},[s("div",{class:"img"},[s("img",{src:Ks,alt:""}),s("div",{id:"circle"},[s("svg",{version:"1.1",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve"},[s("defs",null,[s("path",{id:"circlePath",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})]),s("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),s("g",null,[s("use",{"xlink:href":"#circlePath",fill:"none"}),s("text",{fill:"#c5a47e",class:"custom-font"},[s("textPath",{"xlink:href":"#circlePath"}," Interior Designer Interior Designer Interior Designer ")])])])]),s("div",{class:"info"},[s("h6",{class:"ls3"},"Ryan Hicks"),s("span",{class:"main-color fw-600"},"Client Manager")])])])]),s("div",{class:"col-lg-4"},[s("div",{class:"item cir sm-mb50"},[s("div",{class:"img"},[s("img",{src:Xs,alt:""}),s("div",{id:"circle"},[s("svg",{version:"1.1",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve"},[s("defs",null,[s("path",{id:"circlePath",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})]),s("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),s("g",null,[s("use",{"xlink:href":"#circlePath",fill:"none"}),s("text",{fill:"#c5a47e",class:"custom-font"},[s("textPath",{"xlink:href":"#circlePath"}," Landscape Designer Landscape Designer Landscape Designer ")])])])]),s("div",{class:"info"},[s("h6",{class:"ls3"},"Ryan Hicks"),s("span",{class:"main-color fw-600"},"Client Manager")])])])])])],-1)]))}const Fi=b(Zs,[["render",ii]]),ei=[{id:1,image:"/img/arch/slid/3.jpg",title:"FLOATING HOUSE MESSINIA",date:"14 Sep 2023"},{id:2,image:"/img/arch/slid/2.jpg",title:"IN THE PINE FOREST",date:"14 Sep 2023"},{id:3,image:"/img/arch/slid/1.jpg",title:"BUGANVILLA HOUSE",date:"14 Sep 2023"}],ai={class:"case-study"},ti={id:"content-carousel-container-unq-1",class:"swiper-container","data-swiper":"container"},oi={class:"container d-flex align-items-end"},li={class:"cont"},ni={class:"main-color"},Yi={__name:"CaseStudy",setup(v){const a={modules:[S,q],speed:1e3,effect:"fade",navigation:{prevEl:".controls .swiper-button-prev",nextEl:".controls .swiper-button-next"}};return x(()=>{C(),E(document.querySelectorAll(".fixed-slider .caption"))}),(i,e)=>{const f=y;return n(),d("section",ai,[s("div",ti,[o(u(j),$(a,{class:"swiper-wrapper"}),{default:t(()=>[(n(!0),d(L,null,U(u(ei),p=>(n(),T(u(_),{key:p.id,class:"swiper-slide bg-img",style:N(`background-image: url(${p.image}) `),"data-overlay-dark":"7"},{default:t(()=>[s("div",oi,[s("div",li,[o(f,{to:"#"},{default:t(()=>[e[0]||(e[0]=s("span",null,"Case Study",-1)),s("h6",ni,w(p.date),1),s("h4",null,w(p.title),1)]),_:2},1024)])])]),_:2},1032,["style"]))),128))]),_:1},16),e[1]||(e[1]=g('<div class="controls"><div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"><i class="fas fa-chevron-right"></i></div><div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"><i class="fas fa-chevron-left"></i></div></div>',1))])])}}},k=""+globalThis.__publicAssetsURL("img/clients/1.jpg"),ri={id:"testimonials",class:"testimonials section-padding position-re"},di={class:"container-fluid position-re"},ci={class:"row wow fadeInUp","data-wow-delay":".5s"},mi={class:"col-lg-12"},pi={class:"arrows"},vi={class:"container"},Gi={__name:"TestimonialsArcho",setup(v){const a={modules:[W,S],loop:!0,navigation:{prevEl:".arrows .prev",nextEl:".arrows .next"},centeredSlides:!0,autoplay:!0,slidesPerView:3,spaceBetween:60,breakpoints:{1024:{slidesPerView:3,centeredSlides:!1},767:{slidesPerView:1,centeredSlides:!1},480:{slidesPerView:1,centeredSlides:!1}}};return x(()=>{C()}),(i,e)=>(n(),d("section",ri,[e[8]||(e[8]=g('<div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h2 class="wow fadeIn" data-wow-delay=".3s">Testimonials</h2></div></div></div></div>',1)),s("div",di,[s("div",ci,[s("div",mi,[o(u(j),$(a,{class:"slic-item","data-wow-delay":".5s"}),{default:t(()=>[o(u(_),{class:"item"},{default:t(()=>e[2]||(e[2]=[s("div",{class:"info inf-lrg valign"},[s("div",{class:"cont"},[s("div",{class:"author"},[s("div",{class:"img"},[s("img",{src:k,alt:""})]),s("h6",{class:"author-name color-font"},"Alex Regelman"),s("span",{class:"author-details"}," Co-founder, Colabrio ")])])],-1),s("div",{class:"valign"},[s("p",{class:"fz-20 fw-200"}," I would highly recommend Vie Digital. I worked with the team on an animation for our 'Click & Collect' service. ")],-1)])),_:1}),o(u(_),{class:"item"},{default:t(()=>e[3]||(e[3]=[s("div",{class:"info inf-lrg valign"},[s("div",{class:"cont"},[s("div",{class:"author"},[s("div",{class:"img"},[s("img",{src:k,alt:""})]),s("h6",{class:"author-name color-font"},"Alex Regelman"),s("span",{class:"author-details"}," Co-founder, Colabrio ")])])],-1),s("div",{class:"valign"},[s("p",{class:"fz-20 fw-200"}," I would highly recommend Vie Digital. I worked with the team on an animation for our 'Click & Collect' service. ")],-1)])),_:1}),o(u(_),{class:"item"},{default:t(()=>e[4]||(e[4]=[s("div",{class:"info inf-lrg valign"},[s("div",{class:"cont"},[s("div",{class:"author"},[s("div",{class:"img"},[s("img",{src:k,alt:""})]),s("h6",{class:"author-name color-font"},"Alex Regelman"),s("span",{class:"author-details"}," Co-founder, Colabrio ")])])],-1),s("div",{class:"valign"},[s("p",{class:"fz-20 fw-200"}," I would highly recommend Vie Digital. I worked with the team on an animation for our 'Click & Collect' service. ")],-1)])),_:1}),o(u(_),{class:"item"},{default:t(()=>e[5]||(e[5]=[s("div",{class:"info inf-lrg valign"},[s("div",{class:"cont"},[s("div",{class:"author"},[s("div",{class:"img"},[s("img",{src:k,alt:""})]),s("h6",{class:"author-name color-font"},"Alex Regelman"),s("span",{class:"author-details"}," Co-founder, Colabrio ")])])],-1),s("div",{class:"valign"},[s("p",{class:"fz-20 fw-200"}," I would highly recommend Vie Digital. I worked with the team on an animation for our 'Click & Collect' service. ")],-1)])),_:1})]),_:1},16)])]),s("div",pi,[s("div",vi,[s("div",{onClick:e[0]||(e[0]=(...f)=>i.showNext&&i.showNext(...f)),class:"next cursor-pointer"},e[6]||(e[6]=[s("span",{class:"pe-7s-angle-right"},null,-1)])),s("div",{onClick:e[1]||(e[1]=(...f)=>i.showPrev&&i.showPrev(...f)),class:"prev cursor-pointer"},e[7]||(e[7]=[s("span",{class:"pe-7s-angle-left"},null,-1)]))])])]),e[9]||(e[9]=s("div",{class:"line-v top"},null,-1)),e[10]||(e[10]=s("div",{class:"line-v bottom"},null,-1))]))}},gi=""+globalThis.__publicAssetsURL("img/arch/blog/1.jpg"),ui=""+globalThis.__publicAssetsURL("img/arch/blog/2.jpg"),fi={},hi={class:"blog section-padding",id:"blogs"};function wi(v,a){return n(),d("section",hi,a[0]||(a[0]=[g('<div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h2 class="wow fadeIn" data-wow-delay=".3s">Latest News</h2></div></div></div><div class="row"><div class="col-lg-6"><div class="item md-mb50 wow fadeInUp" data-wow-delay=".3s"><div class="img"><img src="'+gi+'" alt=""></div><div class="cont"><div><div class="info"><a href="#0" class="date"><span><i>06</i> August </span></a><span>/</span><a href="#0" class="tag"><span class="main-color">Architecture</span></a></div><h5><a href="#0"> How to use solid color combine with simple furnitures. </a></h5><div class="btn-more"><a href="#0" class="simple-btn main-color"> Read More </a></div></div></div></div></div><div class="col-lg-6"><div class="item md-mb50 wow fadeInUp" data-wow-delay=".5s"><div class="img"><img src="'+ui+'" alt=""></div><div class="cont"><div><div class="info"><a href="#0" class="date"><span><i>06</i> August </span></a><span>/</span><a href="#0" class="tag"><span class="main-color">Architecture</span></a></div><h5><a href="#0"> How to use solid color combine with simple furnitures. </a></h5><div class="btn-more"><a href="#0" class="simple-btn main-color"> Read More </a></div></div></div></div></div></div></div>',1)]))}const zi=b(fi,[["render",wi]]),_i={},bi={id:"contact",class:"contact-sec style2 section-padding position-re bg-img",style:{"background-image":"url('/img/patrn1.png')"}};function xi(v,a){return n(),d("section",bi,a[0]||(a[0]=[g('<div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h2 class="wow fadeIn" data-wow-delay=".3s">Contact Us</h2></div></div></div><div class="row justify-content-center"><div class="col-lg-10"><div class="form wow fadeInUp" data-wow-delay=".5s"><form id="contact-form"><div class="messages"></div><div class="controls"><div class="row"><div class="col-lg-4"><div class="form-group"><input id="form_name" type="text" name="name" placeholder="Name" required="true"></div></div><div class="col-lg-4"><div class="form-group"><input id="form_email" type="email" name="email" placeholder="Email" required="true"></div></div><div class="col-lg-4"><div class="form-group"><input id="form_name" type="text" name="name" placeholder="Name" required="true"></div></div><div class="col-12"><div class="form-group"><textarea id="form_message" name="message" placeholder="Message" rows="4" required="true"></textarea></div></div><div class="col-12"><div class="text-center"><a href="#0" class="butn light mt-30 full-width"><h6 class="ls3 text-u">Send Massege</h6></a></div></div></div></div></form></div></div></div></div>',1)]))}const Ji=b(_i,[["render",xi]]),ki={},yi={class:"sub-bg"};function Ai(v,a){return n(),d("footer",yi,a[0]||(a[0]=[g('<div class="container"><div class="row"><div class="col-lg-4"><div class="item md-mb50"><div class="title"><h5>Contact Us</h5></div><ul><li><span class="icon pe-7s-map-marker"></span><div class="cont"><h6>Officeal Address</h6><p>504 White St . Dawsonville, GA 30534 , New York</p></div></li><li><span class="icon pe-7s-mail"></span><div class="cont"><h6>Email Us</h6><p>support@gmail.com</p></div></li><li><span class="icon pe-7s-call"></span><div class="cont"><h6>Call Us</h6><p>+87986451666</p></div></li></ul></div></div><div class="col-lg-4"><div class="item md-mb50"><div class="title"><h5>Recent News</h5></div><ul><li><div class="img"><img src="'+F+'" alt=""></div><div class="sm-post"><p> The Start-Up Ultimate Guide to Make Your WordPress Journal. </p><span class="date main-color">14 sep 2023</span></div></li><li><div class="img"><img src="'+Y+'" alt=""></div><div class="sm-post"><p> The Start-Up Ultimate Guide to Make Your WordPress Journal. </p><span class="date main-color">14 sep 2023</span></div></li><li><div class="subscribe"><input type="text" placeholder="Type Your Email"><span class="subs pe-7s-paper-plane back-color"></span></div></li></ul></div></div><div class="col-lg-4"><div class="item"><div class="logo"><img src="'+A+'" alt=""></div><div class="social"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-twitter"></i></a><a href="#0"><i class="fab fa-instagram"></i></a><a href="#0"><i class="fab fa-youtube"></i></a></div><div class="copy-right"><p> © 2023, Vie Template. Made with passion by <a href="#0" class="main-color"> ThemesCamp </a> . </p></div></div></div></div></div>',1)]))}const Qi=b(ki,[["render",Ai]]);export{Oi as A,Ji as C,Qi as F,zi as L,qi as S,Fi as T,Vi as _,Hi as a,Wi as b,Yi as c,Gi as d};
