import{a as h}from"./logo-dark.df291689.js";import{_ as p}from"./final_logo.303d432b.js";import{g as m}from"./getSiblings.1c1fe1d0.js";import{i as f,o as c,c as r,a as t,n as g,j as y,F as k}from"./entry.2caa0cb9.js";const d=(i,n)=>{function s(){i.style.left=n}s()},v=(i,n)=>{setTimeout(function(){},i)},S=()=>{function i(){window.scrollTo(0,0)}let n=!1,s=document.querySelector(".topnav.dark"),e=document.querySelector(".topnav.dark .logo img"),u=document.querySelector(".topnav .menu-icon"),a=document.querySelector(".topnav .menu-icon .text");u&&(u.addEventListener("click",function(){n=!n,document.querySelector(".hamenu").classList.toggle("open"),n?(d(document.querySelector(".hamenu"),"0px"),a.classList.add("open"),s&&s.classList.add("navlit"),e&&e.setAttribute("src","/img/logo-light.png"),window.addEventListener("scroll",i)):(v(300,d(document.querySelector(".hamenu"),"-100%")),a.classList.remove("open"),s&&s.classList.remove("navlit"),e&&e.setAttribute("src","/img/logo-dark.png"),window.removeEventListener("scroll",i))}),document.querySelectorAll(".main-menu a").forEach(o=>{o.addEventListener("click",()=>{v(300,d(document.querySelector(".hamenu"),"-100%")),a.classList.remove("open"),s&&s.classList.remove("navlit"),e&&e.setAttribute("src","/img/logo-dark.png"),window.removeEventListener("scroll",i)})})),document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach(o=>{o.addEventListener("mouseenter",function(){this.style.opacity="1",m(this).forEach(l=>{l.style.opacity=".5"})}),o.addEventListener("mouseleave",function(){document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach(l=>{l.style.opacity="1"})})}),document.querySelectorAll(".main-menu > li .dmenu").length&&document.querySelectorAll(".main-menu > li .dmenu").forEach(o=>{o.addEventListener("click",function(){document.querySelector(".main-menu").classList.add("gosub"),m(this.parentNode.parentNode).forEach(l=>{l.childNodes[1]&&l.childNodes[1].classList.remove("sub-open")}),this.parentNode.parentNode.childNodes[1].classList.add("sub-open")})}),document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length&&document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").forEach(o=>{o.addEventListener("click",function(){document.querySelector(".main-menu").classList.remove("gosub"),document.querySelector(".main-menu").classList.remove("sub-open")})})},b={class:"container-fluid"},L={class:"logo"},E={href:"/"},q={key:0,src:h,alt:"logo"},_={key:1,src:p,alt:"logo"},F={__name:"NavbarFullMenu",props:["theme"],setup(i){const{theme:n}=i;return f(()=>{S()}),(s,e)=>(c(),r(k,null,[t("div",{id:"navi",class:g(`topnav ${n&&n==="light"?"light":""}`)},[t("div",b,[t("div",L,[t("a",E,[n==="light"?(c(),r("img",q)):(c(),r("img",_))])]),e[0]||(e[0]=t("div",{class:"menu-icon"},[t("span",{class:"icon"},[t("i"),t("i")]),t("span",{class:"text","data-splitting":""},[t("span",{class:"menu-text"},"Menu")])],-1))])],2),e[1]||(e[1]=y('<div class="hamenu"><div class="container"><div class="row"><div class="col-lg-9 col-md-8"><div class="menu-links"><ul class="main-menu"><li><div class="o-hidden"><a class="link" href="/"> Home </a></div></li><li><div class="o-hidden"><a class="link" href="/about"> About Us </a></div></li><li><div class="o-hidden"><a class="link" href="/services"> Services </a></div></li><li><div class="o-hidden"><a class="link" href="/contact"> Contact </a></div></li></ul></div></div><div class="col-lg-3 col-md-4"><div class="cont-info"><div class="item"><h6>Phone :</h6><p>9542708232, 9885177710</p></div><div class="item"><h6>Address :</h6><p> Plot no 58, Nagarjuna Hills, Punjagutta, Hyderabad, Telangana 500082.</p></div><div class="item"><h6>Email :</h6><p><a href="#0">info@aceandspades.in</a></p></div></div></div></div></div></div>',1))],64))}};export{F as _};