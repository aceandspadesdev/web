import{g as o,o as s,c as n,a as e}from"./entry.aaa78311.js";const a=()=>{Pace.on("start",function(){document.querySelector("#preloader").classList.remove("isdone"),document.querySelector(".loading").classList.remove("isdone")}),Pace.on("done",function(){document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone")}),document.querySelector("body").classList.contains("pace-done")&&(document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone")),document.addEventListener("load",()=>{document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone")})},d={class:"showX"},t=e("div",{class:"loading"},[e("span",null,"L"),e("span",null,"o"),e("span",null,"a"),e("span",null,"d"),e("span",null,"i"),e("span",null,"n"),e("span",null,"g")],-1),c=e("div",{id:"preloader"},null,-1),l=[t,c],_={__name:"Loading",setup(i){return o(()=>{typeof Pace<"u"&&a()}),(r,u)=>(s(),n("div",d,l))}},m=""+globalThis.__publicAssetsURL("img/logo-dark.png");export{_,m as a};
