(this["webpackJsonpportfolio-cv-umbetov"]=this["webpackJsonpportfolio-cv-umbetov"]||[]).push([[0],[,,,,,,,,,,,function(e,c,t){},function(e,c,t){},,,,,,,,,function(e,c,t){},function(e,c,t){},,function(e,c,t){},,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var a=t(0),s=t(2),i=t.n(s),n=t(13),r=t.n(n),l=(t(20),t(21),t(22),t(23),t(24),t(25),t(26),t(27),t(1)),o=t.n(l);o.a.easing.jswing=o.a.easing.swing,o.a.extend(o.a.easing,{def:"easeOutQuad",swing:function(e,c,t,a,s){return o.a.easing[o.a.easing.def](e,c,t,a,s)},easeInQuad:function(e,c,t,a,s){return a*(c/=s)*c+t},easeOutQuad:function(e,c,t,a,s){return-a*(c/=s)*(c-2)+t},easeInOutQuad:function(e,c,t,a,s){return(c/=s/2)<1?a/2*c*c+t:-a/2*(--c*(c-2)-1)+t},easeInCubic:function(e,c,t,a,s){return a*(c/=s)*c*c+t},easeOutCubic:function(e,c,t,a,s){return a*((c=c/s-1)*c*c+1)+t},easeInOutCubic:function(e,c,t,a,s){return(c/=s/2)<1?a/2*c*c*c+t:a/2*((c-=2)*c*c+2)+t},easeInQuart:function(e,c,t,a,s){return a*(c/=s)*c*c*c+t},easeOutQuart:function(e,c,t,a,s){return-a*((c=c/s-1)*c*c*c-1)+t},easeInOutQuart:function(e,c,t,a,s){return(c/=s/2)<1?a/2*c*c*c*c+t:-a/2*((c-=2)*c*c*c-2)+t},easeInQuint:function(e,c,t,a,s){return a*(c/=s)*c*c*c*c+t},easeOutQuint:function(e,c,t,a,s){return a*((c=c/s-1)*c*c*c*c+1)+t},easeInOutQuint:function(e,c,t,a,s){return(c/=s/2)<1?a/2*c*c*c*c*c+t:a/2*((c-=2)*c*c*c*c+2)+t},easeInSine:function(e,c,t,a,s){return-a*Math.cos(c/s*(Math.PI/2))+a+t},easeOutSine:function(e,c,t,a,s){return a*Math.sin(c/s*(Math.PI/2))+t},easeInOutSine:function(e,c,t,a,s){return-a/2*(Math.cos(Math.PI*c/s)-1)+t},easeInExpo:function(e,c,t,a,s){return 0===c?t:a*Math.pow(2,10*(c/s-1))+t},easeOutExpo:function(e,c,t,a,s){return c===s?t+a:a*(1-Math.pow(2,-10*c/s))+t},easeInOutExpo:function(e,c,t,a,s){return 0===c?t:c===s?t+a:(c/=s/2)<1?a/2*Math.pow(2,10*(c-1))+t:a/2*(2-Math.pow(2,-10*--c))+t},easeInCirc:function(e,c,t,a,s){return-a*(Math.sqrt(1-(c/=s)*c)-1)+t},easeOutCirc:function(e,c,t,a,s){return a*Math.sqrt(1-(c=c/s-1)*c)+t},easeInOutCirc:function(e,c,t,a,s){return(c/=s/2)<1?-a/2*(Math.sqrt(1-c*c)-1)+t:a/2*(Math.sqrt(1-(c-=2)*c)+1)+t},easeInElastic:function(e,c,t,a,s){var i=0,n=a;if(0===c)return t;if(1===(c/=s))return t+a;if(i||(i=.3*s),n<Math.abs(a)){n=a;var r=i/4}else r=i/(2*Math.PI)*Math.asin(a/n);return-n*Math.pow(2,10*(c-=1))*Math.sin((c*s-r)*(2*Math.PI)/i)+t},easeOutElastic:function(e,c,t,a,s){var i=0,n=a;if(0===c)return t;if(1===(c/=s))return t+a;if(i||(i=.3*s),n<Math.abs(a)){n=a;var r=i/4}else r=i/(2*Math.PI)*Math.asin(a/n);return n*Math.pow(2,-10*c)*Math.sin((c*s-r)*(2*Math.PI)/i)+a+t},easeInOutElastic:function(e,c,t,a,s){var i=0,n=a;if(0===c)return t;if(2===(c/=s/2))return t+a;if(i||(i=s*(.3*1.5)),n<Math.abs(a)){n=a;var r=i/4}else r=i/(2*Math.PI)*Math.asin(a/n);return c<1?n*Math.pow(2,10*(c-=1))*Math.sin((c*s-r)*(2*Math.PI)/i)*-.5+t:n*Math.pow(2,-10*(c-=1))*Math.sin((c*s-r)*(2*Math.PI)/i)*.5+a+t},easeInBack:function(e,c,t,a,s,i){return void 0===i&&(i=1.70158),a*(c/=s)*c*((i+1)*c-i)+t},easeOutBack:function(e,c,t,a,s,i){return void 0===i&&(i=1.70158),a*((c=c/s-1)*c*((i+1)*c+i)+1)+t},easeInOutBack:function(e,c,t,a,s,i){return void 0===i&&(i=1.70158),(c/=s/2)<1?a/2*(c*c*((1+(i*=1.525))*c-i))+t:a/2*((c-=2)*c*((1+(i*=1.525))*c+i)+2)+t},easeInBounce:function(e,c,t,a,s){return a-o.a.easing.easeOutBounce(e,s-c,0,a,s)+t},easeOutBounce:function(e,c,t,a,s){return(c/=s)<1/2.75?a*(7.5625*c*c)+t:c<2/2.75?a*(7.5625*(c-=1.5/2.75)*c+.75)+t:c<2.5/2.75?a*(7.5625*(c-=2.25/2.75)*c+.9375)+t:a*(7.5625*(c-=2.625/2.75)*c+.984375)+t},easeInOutBounce:function(e,c,t,a,s){return c<s/2?.5*o.a.easing.easeInBounce(e,2*c,0,a,s)+t:.5*o.a.easing.easeOutBounce(e,2*c-s,0,a,s)+.5*a+t}});t(29),t(30);var j=t(3),d=t(4),b=t(6),h=t(5),m=t.p+"static/media/LisbonWebSummit.42ff8eb0.jpg",u=t.p+"static/media/3x4.a8e44bf6.jpg",p=function(e){Object(b.a)(t,e);var c=Object(h.a)(t);function t(){var e;return Object(j.a)(this,t),(e=c.call(this)).state={logo:m},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,c=o()("nav").outerHeight();o()(".navbar-toggler").on("click",(function(){o()("#mainNav").hasClass("navbar-reduce")||o()("#mainNav").addClass("navbar-reduce")})),o()("body").scrollspy({target:"#mainNav",offset:c}),o()(".js-scroll").on("click",(function(){o()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({logo:u})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({logo:m}))})),o()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=o()(this.hash);if((e=e.length?e:o()("[name="+this.hash.slice(1)+"]")).length)return o()("html, body").animate({scrollTop:e.offset().top-c+5},1e3,"easeInExpo"),!1}})),o()(".js-scroll").on("click",(function(){o()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return Object(a.jsx)("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("a",{className:"navbar-brand js-scroll",href:"#page-top",children:Object(a.jsx)("img",{src:this.state.logo,alt:"logo",style:{maxWidth:"50px",borderRadius:"10px"}})}),Object(a.jsxs)("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{})]}),Object(a.jsx)("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault",children:Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link js-scroll active",href:"#home",children:"Home"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link js-scroll",href:"#about",children:"Skills and Experience"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link js-scroll",href:"#work",children:"Projects"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link js-scroll",href:"#projectlinks",children:"Projects Links"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link js-scroll",href:"#education",children:"Education"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link js-scroll",href:"#certificats",children:"Certificats"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link js-scroll",href:"#contact",children:"Contact"})})]})})]})})}}]),t}(i.a.Component),x=(t(31),t(14)),O=t.n(x),f=(t(11),t.p+"static/media/CV_Dev_UMBETOV.6fe2f01b.pdf"),v=function(e){Object(b.a)(t,e);var c=Object(h.a)(t);function t(){return Object(j.a)(this,t),c.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"home",className:"intro route bg-image background",children:[Object(a.jsx)("div",{id:"stars"}),Object(a.jsx)("div",{id:"stars2"}),Object(a.jsx)("div",{id:"stars3"}),Object(a.jsx)("div",{className:"intro-content display-table",children:Object(a.jsx)("div",{className:"table-cell",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h6",{className:"intro-title mb-4",children:"Welcome"}),Object(a.jsx)("h6",{className:"intro-title mb-4",children:"Shynggys UMBETOV's portfolio"}),Object(a.jsxs)("p",{className:"intro-subtitle",children:[Object(a.jsx)("span",{className:"text-slider-items"}),Object(a.jsx)("strong",{className:"text-slider",children:Object(a.jsx)(O.a,{strings:["Website developed using React JS","I am React Mobile Developer","As well as React JS, AWS Fullstack Dev","Click on check portfolio "],typeSpeed:90,backDelay:800,backSpeed:90,loop:!0})})]}),Object(a.jsx)("p",{className:"pt-3",children:Object(a.jsx)("a",{className:"primary_btn",href:"#work",role:"button",children:Object(a.jsx)("span",{children:"Check portfolio"})})}),Object(a.jsx)("a",{className:"primary_btn",href:f,target:"blank",children:Object(a.jsx)("span",{children:"Download CV"})})]})})})]})}}]),t}(i.a.Component),g=t(8),N=[{id:"first-p-about",content:"2021: Belorussian online shop project in Minsk."},{id:"second-p-about",content:"2019-2021 : Responsible of automated machines. Previously electrician in automobile industry - Lydall company"},{id:"third-p-about",content:"Jan. 2017 - Aug. 2018 : Junior Developer at Codebusters. Mainly in HTML5 & CSS3, React JS 1fit.app project"},{id:"forth-p-about",content:"2017 : Project Manager on International Exhibition Astana-Expo 2017 "}],y=[{id:"HTML5_skill",content:"HTML5",porcentage:"90%",value:90},{id:"CSS3_skill",content:"CSS3",porcentage:"90%",value:90},{id:"JavaScript_skill",content:"JavaScript",porcentage:"80%",value:90},{id:"ReactJS_skill",content:"ReactJS",porcentage:"80%",value:80},{id:"Typescript_skill",content:"Typescript",porcentage:"80%",value:80}],k=[{id:"French",content:"French",porcentage:"80%",value:"80"},{id:"English",content:"English",porcentage:"90%",value:"90"},{id:"Russian",content:"Russian",porcentage:"98%",value:"98"},{id:"Spanish",content:"Spanish",porcentage:"30%",value:"30"},{id:"Kazakh",content:"Kazakh",porcentage:"90%",value:"90"}],w=function(){var e=Object(s.useState)(y),c=Object(g.a)(e,2),t=c[0],n=(c[1],Object(s.useState)(k)),r=Object(g.a)(n,2),l=r[0],o=(r[1],Object(s.useState)(N)),j=Object(g.a)(o,2),d=j[0];j[1];return Object(a.jsx)("div",{id:"about",className:"about-mf sect-pt4 route",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12",children:Object(a.jsx)("div",{className:"box-shadow-full",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("div",{className:"title-box-2",children:Object(a.jsx)("h5",{className:"title-left",children:"Competences"})}),Object(a.jsx)("div",{className:"skill-mf",children:t.map((function(e){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("span",{children:e.content})," ",Object(a.jsx)("span",{className:"pull-right",children:e.porcentage}),Object(a.jsx)("div",{className:"progress",children:Object(a.jsx)("div",{className:"progress-bar animate-positive",role:"progressbar",style:{width:e.porcentage},"aria-valuenow":e.value,"aria-valuemin":0,"aria-valuemax":100})})]},e.id)}))})]}),Object(a.jsx)("div",{className:"col-md-6",children:Object(a.jsxs)("div",{className:"about-me pt-4 pt-md-0",children:[Object(a.jsx)("div",{className:"title-box-2",children:Object(a.jsx)("h5",{className:"title-left",children:"Experiences"})}),d.map((function(e){return Object(a.jsx)("p",{className:"lead",children:e.content},e.id)})),Object(a.jsx)("h5",{className:"title-left",children:"Languages"}),l.map((function(e){return Object(a.jsx)("a",{children:"".concat(e.content,";   ")},e.id)}))]})})]})})})})})})},S=(t(32),t(33),t(34),t.p+"static/media/1fit.app.b54ad5fa.png"),_=t.p+"static/media/1fit.app2.3e377871.png",I=t.p+"static/media/1fit.app3.cf5f87be.png",M=t.p+"static/media/page.0c58537e.png",C=t.p+"static/media/shoepage.ccf06924.png",P=t.p+"static/media/5sformat.0310f6f8.png",J=t.p+"static/media/2.312c2300.JPG",L=t.p+"static/media/3.2e79e9ab.JPG",R=t.p+"static/media/1.f4ac1837.png",E=t.p+"static/media/home.6aabdad8.png",D=t.p+"static/media/contactus.22086f52.png",T=t.p+"static/media/1.c1c8709a.png",q=t.p+"static/media/2.c1272ba6.png",B=t.p+"static/media/simple-project.c6cb208e.png",A=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"about-mf sect-pt4 route",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12",children:Object(a.jsx)("div",{className:"box-shadow-full",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-6 col-md-12",children:Object(a.jsxs)("section",{id:"work",className:"portfolio-mf sect-pt4 route",children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-6 col-md-12",children:Object(a.jsxs)("div",{className:"title-box text-center",children:[Object(a.jsx)("h5",{className:"title-a",children:"Portfolio"}),Object(a.jsx)("p",{className:"subtitle-a",children:"I've done React JS, HTML5 & CSS3 front - end part of projects. Back-end is done by my team mates. Connecting API we did in cooperation."}),Object(a.jsx)("a",{href:"#projectlinks",children:Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"Links to projects are in separate section below"})})}),Object(a.jsx)("div",{className:"line-mf"})]})})})}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("ul",{className:"portfolio-image",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("li",{className:"col-md-3 col-xs-4",children:[Object(a.jsxs)("a",{href:S,"data-lightbox":"gallery-vmarine",children:[Object(a.jsx)("img",{alt:"foto",src:S,className:"img-fluid"}),Object(a.jsx)("div",{class:"decription-wrap",children:Object(a.jsx)("div",{class:"image-bg",children:Object(a.jsx)("p",{class:"desc",children:"1fit.app Sport application in App Store and Play Market"})})})]}),Object(a.jsx)("a",{href:_,"data-lightbox":"gallery-vmarine",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(a.jsx)("a",{href:I,"data-lightbox":"gallery-vmarine",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]}),Object(a.jsx)("div",{className:"projectsquare"}),Object(a.jsxs)("li",{className:"col-md-3 col-xs-4",children:[Object(a.jsxs)("a",{href:M,"data-lightbox":"gallery-todo",children:[Object(a.jsx)("img",{alt:"foto",src:M,className:"img-fluid"}),Object(a.jsx)("div",{class:"decription-wrap",children:Object(a.jsx)("div",{class:"image-bg",children:Object(a.jsx)("p",{class:"desc",children:"Landing Page. International Project with Minsk(Belorussia)"})})})]}),Object(a.jsx)("a",{href:C,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(a.jsx)("a",{href:P,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]}),Object(a.jsx)("div",{className:"projectsquare"}),Object(a.jsxs)("li",{className:"col-md-3 col-xs-4",children:[Object(a.jsxs)("a",{href:B,"data-lightbox":"gallery-smth",children:[Object(a.jsx)("img",{alt:"foto",src:B,className:"img-fluid"}),Object(a.jsx)("div",{class:"decription-wrap",children:Object(a.jsx)("div",{class:"image-bg",children:Object(a.jsx)("p",{class:"desc",children:"Landing Page"})})})]}),Object(a.jsx)("a",{href:B,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(a.jsx)("a",{href:B,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]})]}),Object(a.jsx)("div",{className:"projectsquare"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("li",{className:"col-md-3 col-xs-4",children:[Object(a.jsxs)("a",{href:T,"data-lightbox":"gallery-four",children:[Object(a.jsx)("img",{alt:"foto",src:T,className:"img-fluid"}),Object(a.jsx)("div",{class:"decription-wrap",children:Object(a.jsx)("div",{class:"image-bg",children:Object(a.jsx)("p",{class:"desc",children:"Langind page. Photo gallery"})})})]}),Object(a.jsx)("a",{href:q,"data-lightbox":"gallery-four",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(a.jsx)("a",{href:q,"data-lightbox":"gallery-four",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]}),Object(a.jsx)("div",{className:"projectsquare"}),Object(a.jsxs)("li",{className:"col-md-3 col-xs-4",children:[Object(a.jsxs)("a",{href:E,"data-lightbox":"gallery-five",children:[Object(a.jsx)("img",{alt:"foto",src:E,className:"img-fluid"}),Object(a.jsx)("div",{class:"decription-wrap",children:Object(a.jsx)("div",{class:"image-bg",children:Object(a.jsx)("p",{class:"desc",children:"Restaurant page with local json-server"})})})]}),Object(a.jsx)("a",{href:D,"data-lightbox":"gallery-five",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]}),Object(a.jsx)("div",{className:"projectsquare"}),Object(a.jsxs)("li",{className:"col-md-3 col-xs-4",children:[Object(a.jsxs)("a",{href:J,"data-lightbox":"gallery-six",children:[Object(a.jsx)("img",{alt:"foto",src:J,className:"img-fluid"}),Object(a.jsx)("div",{class:"decription-wrap",children:Object(a.jsx)("div",{class:"image-bg",children:Object(a.jsx)("p",{class:"desc",children:"Landing Page. Scroll"})})})]}),Object(a.jsx)("a",{href:L,"data-lightbox":"gallery-six",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(a.jsx)("a",{href:R,"data-lightbox":"gallery-six",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]})]})]})})})]})})})})})})})})})},F=t.p+"static/media/earth.a08c82a6.jpg",Q=function(e){Object(b.a)(t,e);var c=Object(h.a)(t);function t(){return Object(j.a)(this,t),c.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url("+F+")"},children:[Object(a.jsx)("div",{className:"overlay-mf"}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12",children:Object(a.jsx)("div",{className:"contact-mf",children:Object(a.jsx)("div",{id:"contact",className:"box-shadow-full",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md",children:[Object(a.jsx)("div",{className:"title-box-2 pt-4 pt-md-0",children:Object(a.jsx)("h5",{className:"title-left",children:"Get in Touch"})}),Object(a.jsx)("div",{className:"more-info",children:Object(a.jsxs)("p",{className:"lead",children:["Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",Object(a.jsx)("br",{}),"Simply call me or send me an email."]})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h6",{children:"Phone: +33 07 66 19 89 85"}),Object(a.jsx)("h6",{children:"E-mail: shynggys.umbetov@yahoo.com"})]}),Object(a.jsx)("div",{className:"socials",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://github.com/chicoumbetov?tab=repositories",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("span",{className:"ico-circle",children:Object(a.jsx)("i",{className:"ion-social-github"})})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://www.linkedin.com/in/shynggys-u/",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("span",{className:"ico-circle",children:Object(a.jsx)("i",{className:"ion-social-linkedin"})})})})]})})]})})})})})})}),Object(a.jsx)("footer",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12",children:Object(a.jsx)("div",{className:"copyright-box"})})})})})]})}}]),t}(i.a.Component),z=function(e){Object(b.a)(t,e);var c=Object(h.a)(t);function t(){return Object(j.a)(this,t),c.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidMount",value:function(){o()(".back-to-top").click((function(){return o()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return Object(a.jsx)("a",{href:"#home",className:"back-to-top animated",children:Object(a.jsx)("i",{className:"fa fa-chevron-up"})})}}]),t}(i.a.Component),H=function(e){Object(b.a)(t,e);var c=Object(h.a)(t);function t(){return Object(j.a)(this,t),c.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidMount",value:function(){o()(window).on("load",(function(){o()("#preloader").length&&o()("#preloader").delay(100).fadeOut("slow",(function(){o()(this).remove()}))}))}},{key:"render",value:function(){return Object(a.jsx)("div",{id:"preloader"})}}]),t}(i.a.Component),W=(t(12),function(e){Object(b.a)(t,e);var c=Object(h.a)(t);function t(){var e;return Object(j.a)(this,t),(e=c.call(this)).state={skills:[{id:"HTML5_skill",content:"HTML5",porcentage:"90%",value:"80"},{id:"CSS3_skill",content:"CSS3",porcentage:"75%",value:"75"},{id:"ReactJS_skill",content:"React JS Web Dev - coursera",porcentage:"100%",value:"30"},{id:"Bootstrap_skill",content:"Bootstrap coursera certificate",porcentage:"100%",value:"80"}],about_me:[{id:"first-p-about",content:"2019   Master Degree in Science & Technologies at Universit\xe9 de Poitiers"},{id:"second-p-about",content:"2016 : Bachelor Degree in Hydro Energy Generation & Management at UniSalle Institut Politechnique of Beauvais (Paris), France"},{id:"third-p-about",content:"2013 : Electrical Engineering at Kazakh National University"}]},e}return Object(d.a)(t,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"edu",children:Object(a.jsx)("section",{id:"education",className:"about-mf sect-pt4 route",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12",children:Object(a.jsx)("div",{className:"box-shadow-full",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("div",{className:"title-box-2",children:Object(a.jsx)("h2",{className:"title-left",children:"Education"})}),Object(a.jsx)("div",{className:"row"}),Object(a.jsxs)("div",{className:"skill-mf",children:[Object(a.jsx)("p",{className:"title-s",children:"Certificates"}),this.state.skills.map((function(e){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("span",{children:e.content})," ",Object(a.jsx)("span",{className:"pull-right",children:e.porcentage}),Object(a.jsx)("div",{className:"progress",children:Object(a.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:e.porcentage},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})})]},e.id)}))]})]}),Object(a.jsx)("div",{className:"col-md-6",children:Object(a.jsxs)("div",{className:"about-me pt-4 pt-md-0",children:[Object(a.jsx)("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"},children:Object(a.jsx)("div",{className:"about-img",style:{textAlign:"center"},children:Object(a.jsx)("img",{className:"img-fluid rounded b-shadow-a",alt:""})})}),Object(a.jsx)("p",{className:"title-s",children:"Education"}),this.state.about_me.map((function(e){return Object(a.jsx)("p",{className:"lead",children:e.content},e.id)}))]})})]})})})})})})})}}]),t}(i.a.Component)),G=(t(35),function(){return Object(a.jsx)("div",{id:"projectlinks",className:"about-mf sect-pt4 route",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12",children:Object(a.jsx)("div",{className:"box-shadow-full",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-6 col-md-12",children:[Object(a.jsx)("div",{className:"projectlinks-title",children:Object(a.jsx)("h3",{children:"Check out code of around 20 realized projects of different size"})}),Object(a.jsx)("div",{className:"socials",children:Object(a.jsxs)("ul",{class:"projectlinks-image",children:[Object(a.jsx)("div",{className:"projectlinks",children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://1fit.app/en",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("span",{className:"ico-circle",children:Object(a.jsx)("i",{className:"ion-social-github"})}),Object(a.jsx)("h6",{children:"1. 1fit.app - sport app. you can download from App Store, Play Market or visit site"})]})})})}),Object(a.jsx)("div",{className:"projectlinks",children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://chicoumbetov.github.io/minsk/",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("span",{className:"ico-circle",children:Object(a.jsx)("i",{className:"ion-social-github"})}),Object(a.jsx)("h6",{children:"2. Current International project on online shopping with Belorussia(capital city - Minsk)"})]})})})}),Object(a.jsx)("div",{className:"projectlinks",children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://github.com/chicoumbetov/smooth-scroll-project/tree/master",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("span",{className:"ico-circle",children:Object(a.jsx)("i",{className:"ion-social-github"})}),Object(a.jsx)("h6",{children:"3. Landing Page"})]})})})}),Object(a.jsx)("div",{className:"projectlinks",children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://github.com/chicoumbetov/ReactJS_photojournal_project",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("span",{className:"ico-circle",children:Object(a.jsx)("i",{className:"ion-social-github"})}),Object(a.jsx)("h6",{children:"4. Photojournal. Login: Harry Kong  Password: 12345 "})]})})})}),Object(a.jsx)("div",{className:"projectlinks",children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://github.com/chicoumbetov/restoGostoso",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("span",{className:"ico-circle",children:Object(a.jsx)("i",{className:"ion-social-github"})}),Object(a.jsx)("h6",{children:"5. Restaurant web site using local json-server "})]})})})}),Object(a.jsx)("div",{className:"projectlinks",children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://github.com/chicoumbetov/smooth-scroll-project/tree/master",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("span",{className:"ico-circle",children:Object(a.jsx)("i",{className:"ion-social-github"})}),Object(a.jsx)("h6",{children:"6. Smooth scroll project "})]})})})}),Object(a.jsx)("div",{className:"projectlinks",children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://chicoumbetov.github.io/social_media/",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("span",{className:"ico-circle",children:Object(a.jsx)("i",{className:"ion-social-github"})}),Object(a.jsx)("h6",{children:"7. Social media project based on React JS, Redux,Typescript."}),Object(a.jsx)("h6",{children:" REST API connected to server from : "}),Object(a.jsx)("h6",{children:"https://social-network.samuraijs.com/"})]})})})}),Object(a.jsx)("div",{className:"projectlinks",children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://github.com/chicoumbetov/portfolio-cv-umbetov",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("span",{className:"ico-circle",children:Object(a.jsx)("i",{className:"ion-social-github"})}),Object(a.jsx)("h6",{children:"8. Link to React JS code of this actual portfolio-cv web site"})]})})})}),Object(a.jsx)("div",{className:"projectlinks",children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://chicoumbetov.github.io/todo-react-typescript/",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("span",{className:"ico-circle",children:Object(a.jsx)("i",{className:"ion-social-github"})}),Object(a.jsx)("h6",{children:"9. Typescript To do app"})]})})})}),Object(a.jsx)("div",{className:"projectlinks",children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://chicoumbetov.github.io/react-typescript-quiz/",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("span",{className:"ico-circle",children:Object(a.jsx)("i",{className:"ion-social-github"})}),Object(a.jsx)("h6",{children:"10. Typescript Quiz app. Fetch data from opentdb.com(Trivia database)"})]})})})}),Object(a.jsx)("div",{className:"projectlinks",children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://chicoumbetov.github.io/keep-in-touch/",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("span",{className:"ico-circle",children:Object(a.jsx)("i",{className:"ion-social-github"})}),Object(a.jsx)("h6",{children:"11. Angular, Typescript keep-in-touch social media"})]})})})})]})})]})})})})})})})}),U=t.p+"static/media/1.Front-end Web Development-coursera_certificateReactJS.be1eb903.pdf",K=t.p+"static/media/2.D\xe9couvrez les librairies Python pour la Data Science.2e0d9bed.pdf",V=t.p+"static/media/3.Linux_Certificate.3c8bd0d9.pdf",Y=t.p+"static/media/4.Think_like_a_computer_certificate.1d5c3ebc.pdf",X=t.p+"static/media/5.Quick resumeCreator_with_JS-coursera_certificate.d4fa39c5.pdf",Z=t.p+"static/media/6.D\xe9couvrez la programmation orient\xe9e objet avec Python-openclassrom.0f96e38c.pdf",$=t.p+"static/media/7.CertificateCSSAnimatedComponentsReactJS.63a1ff1d.pdf",ee=t.p+"static/media/8.I_Certificate_Coursera_ReactJS.9390ec07.pdf",ce=t.p+"static/media/9.II_certificate_ReactJS_Coursera.c61b9463.pdf",te=t.p+"static/media/10.Introduction to Front-end Development with ReactJS-coursera_certificate.d580a2f0.pdf",ae=function(e){Object(b.a)(t,e);var c=Object(h.a)(t);function t(){return Object(j.a)(this,t),c.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"edu",children:Object(a.jsx)("section",{id:"certificats",className:"about-mf sect-pt4 route",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12",children:Object(a.jsx)("div",{className:"box-shadow-full",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-12",children:[Object(a.jsx)("div",{className:"title-box-2",children:Object(a.jsx)("h2",{className:"title-left",children:"CERTIFICATES TO DOWNLOAD"})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("a",{class:"primary_btn",href:U,target:"blank",children:Object(a.jsx)("span",{children:"Front-End Web Development ReactJS - Coursera"})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("a",{class:"primary_btn",href:K,target:"blank",children:Object(a.jsx)("span",{children:"D\xe9couvrez les librairies Python pour la Data Science"})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("a",{class:"primary_btn",href:V,target:"blank",children:Object(a.jsx)("span",{children:"Linux Certificate"})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("a",{class:"primary_btn",href:Y,target:"blank",children:Object(a.jsx)("span",{children:"Think like a computer certificate"})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("a",{class:"primary_btn",href:X,target:"blank",children:Object(a.jsx)("span",{children:"Quick resumeCreator with JS coursera_certificate"})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("a",{class:"primary_btn",href:Z,target:"blank",children:Object(a.jsx)("span",{children:"D\xe9couvrez la programmation orient\xe9e objet avec Python"})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("a",{class:"primary_btn",href:$,target:"blank",children:Object(a.jsx)("span",{children:"CSS Animated Components ReactJS"})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("a",{class:"primary_btn",href:ee,target:"blank",children:Object(a.jsx)("span",{children:"I_Certificate Coursera_ReactJS"})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("a",{class:"primary_btn",href:ce,target:"blank",children:Object(a.jsx)("span",{children:"II_Certificate Coursera_ReactJS"})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("a",{class:"primary_btn",href:te,target:"blank",children:Object(a.jsx)("span",{children:"Introduction to Front-end Development with ReactJS"})})})]})})})})})})})})}}]),t}(i.a.Component);r.a.render(Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(p,{}),Object(a.jsx)(v,{}),Object(a.jsx)(w,{}),Object(a.jsx)(A,{}),Object(a.jsx)(G,{}),Object(a.jsx)(W,{}),Object(a.jsx)(ae,{}),Object(a.jsx)(z,{}),Object(a.jsx)(Q,{}),Object(a.jsx)(H,{})]}),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.b789c2fa.chunk.js.map