import{c as k}from"./create-element-if-not-defined.f74098f9.js";import{$ as f}from"./swiper-slide.04926bf5.js";function $({swiper:a,extendParams:b,on:t,emit:s}){b({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function r(n){let l;return n&&(l=f(n),a.params.uniqueNavElements&&typeof n=="string"&&l.length>1&&a.$el.find(n).length===1&&(l=a.$el.find(n))),l}function m(n,l){const i=a.params.navigation;n&&n.length>0&&(n[l?"addClass":"removeClass"](i.disabledClass),n[0]&&n[0].tagName==="BUTTON"&&(n[0].disabled=l),a.params.watchOverflow&&a.enabled&&n[a.isLocked?"addClass":"removeClass"](i.lockClass))}function e(){if(a.params.loop)return;const{$nextEl:n,$prevEl:l}=a.navigation;m(l,a.isBeginning&&!a.params.rewind),m(n,a.isEnd&&!a.params.rewind)}function C(n){n.preventDefault(),!(a.isBeginning&&!a.params.loop&&!a.params.rewind)&&(a.slidePrev(),s("navigationPrev"))}function u(n){n.preventDefault(),!(a.isEnd&&!a.params.loop&&!a.params.rewind)&&(a.slideNext(),s("navigationNext"))}function g(){const n=a.params.navigation;if(a.params.navigation=k(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(n.nextEl||n.prevEl))return;const l=r(n.nextEl),i=r(n.prevEl);l&&l.length>0&&l.on("click",u),i&&i.length>0&&i.on("click",C),Object.assign(a.navigation,{$nextEl:l,nextEl:l&&l[0],$prevEl:i,prevEl:i&&i[0]}),a.enabled||(l&&l.addClass(n.lockClass),i&&i.addClass(n.lockClass))}function v(){const{$nextEl:n,$prevEl:l}=a.navigation;n&&n.length&&(n.off("click",u),n.removeClass(a.params.navigation.disabledClass)),l&&l.length&&(l.off("click",C),l.removeClass(a.params.navigation.disabledClass))}t("init",()=>{a.params.navigation.enabled===!1?E():(g(),e())}),t("toEdge fromEdge lock unlock",()=>{e()}),t("destroy",()=>{v()}),t("enable disable",()=>{const{$nextEl:n,$prevEl:l}=a.navigation;n&&n[a.enabled?"removeClass":"addClass"](a.params.navigation.lockClass),l&&l[a.enabled?"removeClass":"addClass"](a.params.navigation.lockClass)}),t("click",(n,l)=>{const{$nextEl:i,$prevEl:o}=a.navigation,d=l.target;if(a.params.navigation.hideOnClick&&!f(d).is(o)&&!f(d).is(i)){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===d||a.pagination.el.contains(d)))return;let c;i?c=i.hasClass(a.params.navigation.hiddenClass):o&&(c=o.hasClass(a.params.navigation.hiddenClass)),s(c===!0?"navigationShow":"navigationHide"),i&&i.toggleClass(a.params.navigation.hiddenClass),o&&o.toggleClass(a.params.navigation.hiddenClass)}});const h=()=>{a.$el.removeClass(a.params.navigation.navigationDisabledClass),g(),e()},E=()=>{a.$el.addClass(a.params.navigation.navigationDisabledClass),v()};Object.assign(a.navigation,{enable:h,disable:E,update:e,init:g,destroy:v})}const N=()=>{document.querySelectorAll(".swiper-pagination")&&document.querySelectorAll(".swiper-pagination").forEach(a=>{a.innerHTML=a.innerHTML.replace(" / ","")})};export{$ as N,N as r};
