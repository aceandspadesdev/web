import{_ as m}from"./client-only.e244b9ab.js";import{k as g,o as c,j as f,w as i,d as o,t as _,aT as w,c as p,a as t,b as a,f as v,h as u,F as y,i as b,n as x,g as h}from"./entry.b1a7a51e.js";import{f as A}from"./features.2fd8146f.js";import{_ as U}from"./nuxt-link.de41078b.js";import{i as $}from"./initIsotope.f37c57b2.js";import{_ as k}from"./4.dd859992.js";const j=""+globalThis.__publicAssetsURL("img/hero.jpg"),T=(e,l)=>{const n=e.__vccOpts||e;for(const[s,d]of l)n[s]=d;return n};async function r(e){return new Promise(l=>setTimeout(l,e))}const D=g({name:"AutoTyperVue",emits:["finished"],props:{componentTag:{type:String,default:"span",validator(e){return/^(span)|(h\d)|(p)|(a)$/.test(e)}},beginningWord:{type:String,default:""},writtenBeginningWord:{type:String,default:""},text:{type:[String,Array],required:!0,validator(e){return typeof e=="string"?e.length>0:e.every(l=>typeof l=="string"&&l.length>0)}},startDelay:{type:Number,default:500,validator(e){return e>=0}},betweenWordDelay:{type:Number,default:500,validator(e){return e>=0}},typingDelay:{type:Number,default:150,validator(e){return e>=0}},deletingDelay:{type:Number,default:100,validator(e){return e>=0}},waitBeforeDeleteDelay:{type:Number,default:500,validator(e){return e>=0}},startByDefault:{type:Boolean,default:!0},repeat:{type:Boolean,default:!0},removeAfterRepeat:{type:Boolean,default:!1}},data(){return{currentText:"",typedBeginningWord:"",textFeed:[]}},mounted(){this.startByDefault&&this.begin()},methods:{async begin(){typeof this.text=="string"?this.textFeed=[this.text]:this.textFeed=[...this.text],await r(this.startDelay),await this.writeBeginningWord(),this.autoType()},async writeBeginningWord(){if(this.writtenBeginningWord.length)for(let e of[...this.writtenBeginningWord])this.typedBeginningWord+=e,await r(this.typingDelay)},async autoType(){for(let e of this.textFeed){if(await this.writeWord(e),await r(this.waitBeforeDeleteDelay),!this.repeat&&!this.removeAfterRepeat&&this.textFeed.indexOf(e)===this.textFeed.length-1)break;await this.removeWord(e),await r(this.betweenWordDelay)}this.repeat?this.autoType():this.$emit("finished")},async writeWord(e){for(let l of[...e])this.currentText+=l,await r(this.typingDelay)},async removeWord(e){for(let l=0;l<e.length;l++)this.currentText=this.currentText.slice(0,-1),await r(this.deletingDelay)}}});function W(e,l,n,s,d,Xt){return c(),f(w(e.componentTag),{class:"auto-typer-vue blink"},{default:i(()=>[o(_(e.beginningWord)+_(e.typedBeginningWord)+_(e.currentText),1)]),_:1})}const B=T(D,[["render",W]]);const C={class:"freelancre valign"},I={class:"container"},F={class:"row"},S=t("div",{class:"col-lg-4"},[t("div",{class:"img"},[t("img",{src:j,alt:""})])],-1),L={class:"col-lg-8 valign"},N={class:"cont"},M={class:"cd-headline clip"},R={class:"cd-words-wrapper"},V=u('<div class="states"><div class="container"><ul class="flex"><li class="flex"><div class="numb valign"><h3>12</h3></div><div class="text valign"><p> Years <br> Of Experience </p></div></li><li class="flex"><div class="numb valign"><h3>165</h3></div><div class="text valign"><p> Projects Completed <br> In 19 Countries </p></div></li><li class="mail-us"><a href="mailto:your@email.com?subject=Subject"><div class="flex"><div class="text valign"><div class="full-width"><p>Get In Touch</p><h6>Vie_Support@Gmail.Com</h6></div></div><div class="mail-icon"><div class="icon-box"><span class="icon color-font pe-7s-mail"></span></div></div></div></a></li></ul></div></div>',1),P=t("div",{class:"line bottom left"},null,-1),ee={__name:"FreelanceHeader",setup(e){return(l,n)=>{const s=m;return c(),p("header",C,[t("div",I,[t("div",F,[S,t("div",L,[t("div",N,[t("h1",M,[o(" Hello, My name is hisham i love design and i hope to make awesome designs and also i create a "),t("span",R,[a(s,null,{default:i(()=>[a(v(B),{text:["Mobile Apps","Landing Pages","Awesome Design"],repeat:1/0,"initial-action":"erasing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":2e3,"erase-delay":250,"erase-style":"backspace","caret-animation":"smooth",class:"color-font fw-600"})]),_:1})])])])])]),V]),P])}}},O={class:"services box lficon section-padding position-re"},q={class:"container"},E=u('<div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h6 class="wow fadeIn" data-wow-delay=".5s">Best Features</h6><h3 class="wow color-font"> We are a new digital product development agency </h3></div></div></div>',1),z={class:"row"},H=["data-wow-delay"],G={class:"item-box no-curve"},X={class:"cont"},Y=t("div",{class:"line bottom right"},null,-1),se={__name:"Services5",setup(e){return(l,n)=>(c(),p("section",O,[t("div",q,[E,t("div",z,[(c(!0),p(y,null,b(v(A),(s,d)=>(c(),p("div",{class:"col-lg-6 wow fadeInLeft","data-wow-delay":d==0?".5s":d==1?".7s":d===2?".9s":".5s",key:s.id},[t("div",G,[t("div",null,[t("span",{class:x(`icon color-font ${s.icon}`)},null,2)]),t("div",X,[t("h6",null,_(s.title),1),t("p",null,_(s.content),1)])])],8,H))),128))])]),Y]))}},J=""+globalThis.__publicAssetsURL("img/portfolio/freelancer/1.jpg"),K=""+globalThis.__publicAssetsURL("img/portfolio/freelancer/2.jpg"),Q=""+globalThis.__publicAssetsURL("img/portfolio/freelancer/3.jpg"),Z=""+globalThis.__publicAssetsURL("img/portfolio/freelancer/4.jpg"),tt=""+globalThis.__publicAssetsURL("img/portfolio/freelancer/5.jpg"),et=""+globalThis.__publicAssetsURL("img/portfolio/freelancer/6.jpg"),st={class:"portfolio-frl section-padding pb-70"},it=u('<div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h6 class="wow fadeIn" data-wow-delay=".5s">Portfolio</h6><h3 class="wow color-font"> Our Recent Web Design &amp; <br> Some Past Projects. </h3></div></div></div></div>',1),at={class:"container"},ot={class:"row"},lt=u('<div class="filtering col-12"><div class="filter wow fadeIn" data-wow-delay=".5s"><span data-filter="*" class="active"> All </span><span data-filter=".brand">Branding</span><span data-filter=".web">Mobile App</span><span data-filter=".graphic">Creative</span></div></div>',1),nt={class:"gallery full-width"},ct={class:"col-md-6 items graphic lg-mr wow fadeInUp","data-wow-delay":".4s"},dt={class:"item-img"},rt=t("div",{class:"cont"},[t("h6",null,"Creative Mobile App"),t("p",null,"Ui / Ux creative mobile app design")],-1),pt=t("img",{src:J,alt:"image"},null,-1),_t=t("div",{class:"item-img-overlay"},null,-1),ut={class:"tags"},vt={class:"col-md-6 items web wow fadeInUp","data-wow-delay":".4s"},ht={class:"item-img"},mt=t("div",{class:"cont"},[t("h6",null,"Creative Mobile App"),t("p",null,"Ui / Ux creative mobile app design")],-1),gt=t("img",{src:K,alt:"image"},null,-1),ft=t("div",{class:"item-img-overlay"},null,-1),wt={class:"tags"},yt={class:"col-md-6 items web wow fadeInUp","data-wow-delay":".4s"},bt={class:"item-img"},xt=t("div",{class:"cont"},[t("h6",null,"Creative Mobile App"),t("p",null,"Ui / Ux creative mobile app design")],-1),At=t("img",{src:Q,alt:"image"},null,-1),Ut=t("div",{class:"item-img-overlay"},null,-1),$t={class:"tags"},kt={class:"col-md-6 items web graphic wow fadeInUp","data-wow-delay":".4s"},jt={class:"item-img"},Tt=t("div",{class:"cont"},[t("h6",null,"Creative Mobile App"),t("p",null,"Ui / Ux creative mobile app design")],-1),Dt=t("img",{src:Z,alt:"image"},null,-1),Wt=t("div",{class:"item-img-overlay"},null,-1),Bt={class:"tags"},Ct={class:"col-md-6 items brand wow fadeInUp","data-wow-delay":".4s"},It={class:"item-img"},Ft=t("div",{class:"cont"},[t("h6",null,"Creative Mobile App"),t("p",null,"Ui / Ux creative mobile app design")],-1),St=t("img",{src:tt,alt:"image"},null,-1),Lt=t("div",{class:"item-img-overlay"},null,-1),Nt={class:"tags"},Mt={class:"col-md-6 items brand wow fadeInUp","data-wow-delay":".4s"},Rt={class:"item-img"},Vt=t("div",{class:"cont"},[t("h6",null,"Creative Mobile App"),t("p",null,"Ui / Ux creative mobile app design")],-1),Pt=t("img",{src:et,alt:"image"},null,-1),Ot=t("div",{class:"item-img-overlay"},null,-1),qt={class:"tags"},ie={__name:"Works5",setup(e){return h(()=>{setTimeout(()=>{$()},500)}),(l,n)=>{const s=U;return c(),p("section",st,[it,t("div",at,[t("div",ot,[lt,t("div",nt,[t("div",ct,[t("div",dt,[rt,a(s,{class:"rota",to:"/project-details2/project-details2-dark"},{default:i(()=>[pt,_t]),_:1}),t("div",ut,[t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("App")]),_:1})]),t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("Fitnes")]),_:1})]),t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("Creative")]),_:1})])])])]),t("div",vt,[t("div",ht,[mt,a(s,{class:"rota",to:"/project-details2/project-details2-dark"},{default:i(()=>[gt,ft]),_:1}),t("div",wt,[t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("App")]),_:1})]),t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("Fitnes")]),_:1})]),t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("Creative")]),_:1})])])])]),t("div",yt,[t("div",bt,[xt,a(s,{class:"rota",to:"/project-details2/project-details2-dark"},{default:i(()=>[At,Ut]),_:1}),t("div",$t,[t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("App")]),_:1})]),t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("Fitnes")]),_:1})]),t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("Creative")]),_:1})])])])]),t("div",kt,[t("div",jt,[Tt,a(s,{class:"rota",to:"/project-details2/project-details2-dark"},{default:i(()=>[Dt,Wt]),_:1}),t("div",Bt,[t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("App")]),_:1})]),t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("Fitnes")]),_:1})]),t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("Creative")]),_:1})])])])]),t("div",Ct,[t("div",It,[Ft,a(s,{class:"rota",to:"/project-details2/project-details2-dark"},{default:i(()=>[St,Lt]),_:1}),t("div",Nt,[t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("App")]),_:1})]),t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("Fitnes")]),_:1})]),t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("Creative")]),_:1})])])])]),t("div",Mt,[t("div",Rt,[Vt,a(s,{class:"rota",to:"/project-details2/project-details2-dark"},{default:i(()=>[Pt,Ot]),_:1}),t("div",qt,[t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("App")]),_:1})]),t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("Fitnes")]),_:1})]),t("span",null,[a(s,{to:"#0"},{default:i(()=>[o("Creative")]),_:1})])])])])])])])])}}},Et=()=>{document.querySelector(".about-cr .skills-box")&&window.addEventListener("scroll",()=>{document.querySelectorAll(".skill-progress .progres").forEach(l=>{let n=l.getAttribute("data-value");window.pageYOffset>document.querySelector(".about-cr").offsetTop-200&&(l.style.width=n)})})},zt={class:"about-cr"},Ht=u('<div class="container-fluid"><div class="row"><div class="col-lg-6 img md-mb50"><img src="'+k+'" alt=""></div><div class="col-lg-5 valign"><div class="cont full-width"><h3 class="color-font">UI / UX Designer</h3><h5 class="co-tit mb-15">We help to create visual strategies.</h5><p> We are Vie. We create award-winning websites, remarkable brands and cutting-edge apps.Nullam imperdie. </p><div class="skills-box mt-40"><div class="skill-item"><h5 class="fz-14 mb-15">UI / UX Design</h5><div class="skill-progress"><div class="progres" data-value="90%"></div></div></div><div class="skill-item"><h5 class="fz-14 mb-15">Apps Development</h5><div class="skill-progress"><div class="progres" data-value="80%"></div></div></div></div></div></div></div></div>',1),Gt=[Ht],ae={__name:"AboutUs5",setup(e){return h(()=>{Et()}),(l,n)=>(c(),p("section",zt,Gt))}};export{ee as _,se as a,ie as b,ae as c};
