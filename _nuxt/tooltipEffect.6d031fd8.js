var a=0,i=0;function l(t,e){setInterval(p(t),e)}function p(t){a=Number(window.getComputedStyle(t).getPropertyValue("opacity")),a<1?(a=a+1,t.style.opacity=a):clearInterval(i)}function n(t,e){setInterval(r(t),e)}function r(t){a=Number(window.getComputedStyle(t).getPropertyValue("opacity")),a>0?(a=0,t.style.opacity=a):clearInterval(i)}const s=()=>{let t=document.createElement("div");t.classList.add("div-tooltip-tit"),document.body.appendChild(t);let e=document.createElement("div");e.classList.add("div-tooltip-sub"),document.body.appendChild(e),document.querySelectorAll("[data-tooltip-tit]").forEach(o=>{t=document.querySelector(".div-tooltip-tit"),o.addEventListener("mouseover",()=>{t.innerText=o.getAttribute("data-tooltip-tit")}),o.addEventListener("mousemove",d=>{l(t,800),t.style.top=d.pageY+10+"px",t.style.left=d.pageX+20+"px",t.style.padding="0px 10px"}),o.addEventListener("mouseleave",()=>{n(t,800),t.style.padding=0})}),document.querySelectorAll("[data-tooltip-sub]").forEach(o=>{e=document.querySelector(".div-tooltip-sub"),o.addEventListener("mouseover",()=>{e.innerText=o.getAttribute("data-tooltip-sub")}),o.addEventListener("mousemove",d=>{l(e,800),e.style.top=d.pageY-15+"px",e.style.left=d.pageX+30+"px",e.style.padding="5px 10px"}),o.addEventListener("mouseleave",()=>{n(e,800),e.style.padding=0})})};export{s as t};
