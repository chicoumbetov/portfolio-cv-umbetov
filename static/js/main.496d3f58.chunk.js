(this["webpackJsonpportfolio-cv-umbetov"]=this["webpackJsonpportfolio-cv-umbetov"]||[]).push([[0],[,,,,,,,,,,function(e,a,t){},,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(0),c=t(2),n=t.n(c),i=t(11),l=t.n(i),r=(t(18),t(19),t(20),t(21),t(22),t(23),t(1)),o=t.n(r);o.a.easing.jswing=o.a.easing.swing,o.a.extend(o.a.easing,{def:"easeOutQuad",swing:function(e,a,t,s,c){return o.a.easing[o.a.easing.def](e,a,t,s,c)},easeInQuad:function(e,a,t,s,c){return s*(a/=c)*a+t},easeOutQuad:function(e,a,t,s,c){return-s*(a/=c)*(a-2)+t},easeInOutQuad:function(e,a,t,s,c){return(a/=c/2)<1?s/2*a*a+t:-s/2*(--a*(a-2)-1)+t},easeInCubic:function(e,a,t,s,c){return s*(a/=c)*a*a+t},easeOutCubic:function(e,a,t,s,c){return s*((a=a/c-1)*a*a+1)+t},easeInOutCubic:function(e,a,t,s,c){return(a/=c/2)<1?s/2*a*a*a+t:s/2*((a-=2)*a*a+2)+t},easeInQuart:function(e,a,t,s,c){return s*(a/=c)*a*a*a+t},easeOutQuart:function(e,a,t,s,c){return-s*((a=a/c-1)*a*a*a-1)+t},easeInOutQuart:function(e,a,t,s,c){return(a/=c/2)<1?s/2*a*a*a*a+t:-s/2*((a-=2)*a*a*a-2)+t},easeInQuint:function(e,a,t,s,c){return s*(a/=c)*a*a*a*a+t},easeOutQuint:function(e,a,t,s,c){return s*((a=a/c-1)*a*a*a*a+1)+t},easeInOutQuint:function(e,a,t,s,c){return(a/=c/2)<1?s/2*a*a*a*a*a+t:s/2*((a-=2)*a*a*a*a+2)+t},easeInSine:function(e,a,t,s,c){return-s*Math.cos(a/c*(Math.PI/2))+s+t},easeOutSine:function(e,a,t,s,c){return s*Math.sin(a/c*(Math.PI/2))+t},easeInOutSine:function(e,a,t,s,c){return-s/2*(Math.cos(Math.PI*a/c)-1)+t},easeInExpo:function(e,a,t,s,c){return 0===a?t:s*Math.pow(2,10*(a/c-1))+t},easeOutExpo:function(e,a,t,s,c){return a===c?t+s:s*(1-Math.pow(2,-10*a/c))+t},easeInOutExpo:function(e,a,t,s,c){return 0===a?t:a===c?t+s:(a/=c/2)<1?s/2*Math.pow(2,10*(a-1))+t:s/2*(2-Math.pow(2,-10*--a))+t},easeInCirc:function(e,a,t,s,c){return-s*(Math.sqrt(1-(a/=c)*a)-1)+t},easeOutCirc:function(e,a,t,s,c){return s*Math.sqrt(1-(a=a/c-1)*a)+t},easeInOutCirc:function(e,a,t,s,c){return(a/=c/2)<1?-s/2*(Math.sqrt(1-a*a)-1)+t:s/2*(Math.sqrt(1-(a-=2)*a)+1)+t},easeInElastic:function(e,a,t,s,c){var n=0,i=s;if(0===a)return t;if(1===(a/=c))return t+s;if(n||(n=.3*c),i<Math.abs(s)){i=s;var l=n/4}else l=n/(2*Math.PI)*Math.asin(s/i);return-i*Math.pow(2,10*(a-=1))*Math.sin((a*c-l)*(2*Math.PI)/n)+t},easeOutElastic:function(e,a,t,s,c){var n=0,i=s;if(0===a)return t;if(1===(a/=c))return t+s;if(n||(n=.3*c),i<Math.abs(s)){i=s;var l=n/4}else l=n/(2*Math.PI)*Math.asin(s/i);return i*Math.pow(2,-10*a)*Math.sin((a*c-l)*(2*Math.PI)/n)+s+t},easeInOutElastic:function(e,a,t,s,c){var n=0,i=s;if(0===a)return t;if(2===(a/=c/2))return t+s;if(n||(n=c*(.3*1.5)),i<Math.abs(s)){i=s;var l=n/4}else l=n/(2*Math.PI)*Math.asin(s/i);return a<1?i*Math.pow(2,10*(a-=1))*Math.sin((a*c-l)*(2*Math.PI)/n)*-.5+t:i*Math.pow(2,-10*(a-=1))*Math.sin((a*c-l)*(2*Math.PI)/n)*.5+s+t},easeInBack:function(e,a,t,s,c,n){return void 0===n&&(n=1.70158),s*(a/=c)*a*((n+1)*a-n)+t},easeOutBack:function(e,a,t,s,c,n){return void 0===n&&(n=1.70158),s*((a=a/c-1)*a*((n+1)*a+n)+1)+t},easeInOutBack:function(e,a,t,s,c,n){return void 0===n&&(n=1.70158),(a/=c/2)<1?s/2*(a*a*((1+(n*=1.525))*a-n))+t:s/2*((a-=2)*a*((1+(n*=1.525))*a+n)+2)+t},easeInBounce:function(e,a,t,s,c){return s-o.a.easing.easeOutBounce(e,c-a,0,s,c)+t},easeOutBounce:function(e,a,t,s,c){return(a/=c)<1/2.75?s*(7.5625*a*a)+t:a<2/2.75?s*(7.5625*(a-=1.5/2.75)*a+.75)+t:a<2.5/2.75?s*(7.5625*(a-=2.25/2.75)*a+.9375)+t:s*(7.5625*(a-=2.625/2.75)*a+.984375)+t},easeInOutBounce:function(e,a,t,s,c){return a<c/2?.5*o.a.easing.easeInBounce(e,2*a,0,s,c)+t:.5*o.a.easing.easeOutBounce(e,2*a-c,0,s,c)+.5*s+t}});t(25);var d=t(3),j=t(4),h=t(6),b=t(5),u=t.p+"static/media/male1.33b5179e.png",m=t.p+"static/media/male.cadeca2c.png",x=function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).state={logo:u},e}return Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=o()("nav").outerHeight();o()(".navbar-toggler").on("click",(function(){o()("#mainNav").hasClass("navbar-reduce")||o()("#mainNav").addClass("navbar-reduce")})),o()("body").scrollspy({target:"#mainNav",offset:a}),o()(".js-scroll").on("click",(function(){o()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({logo:m})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({logo:u}))})),o()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=o()(this.hash);if((e=e.length?e:o()("[name="+this.hash.slice(1)+"]")).length)return o()("html, body").animate({scrollTop:e.offset().top-a+5},1e3,"easeInExpo"),!1}})),o()(".js-scroll").on("click",(function(){o()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return Object(s.jsx)("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("a",{className:"navbar-brand js-scroll",href:"#page-top",children:Object(s.jsx)("img",{src:this.state.logo,alt:"logo",style:{maxWidth:"100px"}})}),Object(s.jsxs)("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(s.jsx)("span",{}),Object(s.jsx)("span",{}),Object(s.jsx)("span",{})]}),Object(s.jsx)("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault",children:Object(s.jsxs)("ul",{className:"navbar-nav",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link js-scroll active",href:"#home",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link js-scroll",href:"#about",children:"Skills and Experience"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link js-scroll",href:"#work",children:"Projects"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link js-scroll",href:"#education",children:"Education"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link js-scroll",href:"#contact",children:"Contact"})})]})})]})})}}]),t}(n.a.Component),p=(t(26),t(12)),O=t.n(p),g=(t(10),function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(s.jsxs)("div",{id:"home",className:"intro route bg-image background",children:[Object(s.jsx)("div",{id:"stars"}),Object(s.jsx)("div",{id:"stars2"}),Object(s.jsx)("div",{id:"stars3"}),Object(s.jsx)("div",{className:"intro-content display-table",children:Object(s.jsx)("div",{className:"table-cell",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{className:"intro-title mb-4",children:"Hello, My name is Shynggys."}),Object(s.jsxs)("p",{className:"intro-subtitle",children:[Object(s.jsx)("span",{className:"text-slider-items"}),Object(s.jsx)("strong",{className:"text-slider",children:Object(s.jsx)(O.a,{strings:["This is my portfolio website","I am React JS Front End Developer","Click on 'View projects' to check portfolio "],typeSpeed:75,backDelay:1100,backSpeed:30,loop:!0})})]}),Object(s.jsx)("p",{className:"pt-3",children:Object(s.jsx)("a",{className:"btn btn-primary btn js-scroll px-4",href:"#work",role:"button",children:"View projects"})}),Object(s.jsx)("a",{class:"primary_btn",href:"ReactJS_CV_UMBETOV.pdf",children:Object(s.jsx)("span",{children:"Download CV"})})]})})})]})}}]),t}(n.a.Component)),v=(t.p,function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).state={skills:[{id:"HTML5_skill",content:"HTML5",porcentage:"80%",value:"80"},{id:"CSS3_skill",content:"CSS3",porcentage:"75%",value:"75"},{id:"JavaScript_skill",content:"JavaScript",porcentage:"30%",value:"30"},{id:"ReactJS_skill",content:"ReactJS",porcentage:"80%",value:"80"},{id:"Python_skill",content:"Python",porcentage:"30%",value:"30"},{id:"Bootstrap_skill",content:"Bootstrap",porcentage:"85%",value:"85"},{id:"Typescript_skill",content:"Typescript",porcentage:"10%",value:"10"},{id:"Github_skill",content:"Github",porcentage:"80%",value:"80"},{id:"Trello_skill",content:"Trello & Office tools",porcentage:"90%",value:"90"},{id:"Laptop_mechanical_reparation_skill",content:"Laptop mechanical reparation",porcentage:"70%",value:"70"}],about_me:[{id:"first-p-about",content:"2021: Belorussian online shop project in Minsk."},{id:"second-p-about",content:"2019-2021 : Responsible of automated machines. Previously electrician in automobile industry - Lydall company"},{id:"third-p-about",content:"2017-2018 : Junior Developer at Codebusters. Mainly in HTML5 & CSS3, React JS 1fit.app project"}]},e}return Object(j.a)(t,[{key:"render",value:function(){return Object(s.jsx)("section",{id:"about",className:"about-mf sect-pt4 route",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsx)("div",{className:"box-shadow-full",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-md-6",children:[Object(s.jsx)("div",{className:"title-box-2",children:Object(s.jsx)("h5",{className:"title-left",children:"Skills"})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"},children:Object(s.jsx)("div",{className:"about-img",style:{textAlign:"center"},children:Object(s.jsx)("img",{className:"img-fluid rounded b-shadow-a",alt:""})})})}),Object(s.jsx)("div",{className:"skill-mf",children:this.state.skills.map((function(e){return Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)("span",{children:e.content})," ",Object(s.jsx)("span",{className:"pull-right",children:e.porcentage}),Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:e.porcentage},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})})]},e.id)}))})]}),Object(s.jsx)("div",{className:"col-md-6",children:Object(s.jsxs)("div",{className:"about-me pt-4 pt-md-0",children:[Object(s.jsx)("div",{className:"title-box-2",children:Object(s.jsx)("h5",{className:"title-left",children:"Experiences"})}),Object(s.jsx)("div",{children:Object(s.jsx)("h6",{children:"Experience"})}),this.state.about_me.map((function(e){return Object(s.jsx)("p",{className:"lead",children:e.content},e.id)}))]})})]})})})})})})}}]),t}(n.a.Component)),f=(t(27),t(28),t.p+"static/media/1fit.app.b54ad5fa.png"),y=t.p+"static/media/1fit.app2.3e377871.png",N=t.p+"static/media/1fit.app3.cf5f87be.png",w=t.p+"static/media/page.0c58537e.png",k=t.p+"static/media/shoepage.ccf06924.png",M=t.p+"static/media/5sformat.0310f6f8.png",I=t.p+"static/media/2.312c2300.JPG",S=t.p+"static/media/3.2e79e9ab.JPG",C=t.p+"static/media/1.f4ac1837.png",P=t.p+"static/media/home.6aabdad8.png",_=t.p+"static/media/contactus.22086f52.png",B=t.p+"static/media/1.c1c8709a.png",E=t.p+"static/media/2.c1272ba6.png",L=t.p+"static/media/simple-project.c6cb208e.png",T=function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("section",{id:"work",className:"portfolio-mf sect-pt4 route",children:[Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsxs)("div",{className:"title-box text-center",children:[Object(s.jsx)("h3",{className:"title-a",children:"Portfolio"}),Object(s.jsx)("p",{className:"subtitle-a",children:"I've done React JS, HTML5 & CSS3 front - end part of projects. Back-end is done by my team mates. Connecting API we did in cooperation."}),Object(s.jsx)("div",{className:"line-mf"})]})})})}),Object(s.jsx)("div",{class:"col-md-12 content-right",children:Object(s.jsxs)("ul",{class:"portfolio-image",children:[Object(s.jsxs)("li",{class:"col-md-4 col-xs-4",children:[Object(s.jsxs)("a",{href:f,"data-lightbox":"gallery-vmarine",children:[Object(s.jsx)("img",{alt:"foto",src:f,className:"img-fluid"}),Object(s.jsx)("div",{class:"decription-wrap",children:Object(s.jsx)("div",{class:"image-bg",children:Object(s.jsx)("p",{class:"desc",children:"Request demo for TrustedCompany"})})})]}),Object(s.jsx)("a",{href:y,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(s.jsx)("a",{href:N,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]}),Object(s.jsxs)("li",{class:"col-md-4 col-xs-4",children:[Object(s.jsxs)("a",{href:w,"data-lightbox":"gallery-vmarine",children:[Object(s.jsx)("img",{alt:"foto",src:w,className:"img-fluid"}),Object(s.jsx)("div",{class:"decription-wrap",children:Object(s.jsx)("div",{class:"image-bg",children:Object(s.jsx)("p",{class:"desc",children:"Landing Page"})})})]}),Object(s.jsx)("a",{href:k,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(s.jsx)("a",{href:M,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]}),Object(s.jsxs)("li",{class:"col-md-4 col-xs-4",children:[Object(s.jsxs)("a",{href:L,"data-lightbox":"gallery-vmarine",children:[Object(s.jsx)("img",{alt:"foto",src:L,className:"img-fluid"}),Object(s.jsx)("div",{class:"decription-wrap",children:Object(s.jsx)("div",{class:"image-bg",children:Object(s.jsx)("p",{class:"desc",children:"Landing Page"})})})]}),Object(s.jsx)("a",{href:L,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(s.jsx)("a",{href:L,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]}),Object(s.jsxs)("li",{class:"col-md-4 col-xs-4",children:[Object(s.jsxs)("a",{href:B,"data-lightbox":"gallery-vmarine",children:[Object(s.jsx)("img",{alt:"foto",src:B,className:"img-fluid"}),Object(s.jsx)("div",{class:"decription-wrap",children:Object(s.jsx)("div",{class:"image-bg",children:Object(s.jsx)("p",{class:"desc",children:"Business page for TrustedCompany"})})})]}),Object(s.jsx)("a",{href:E,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(s.jsx)("a",{href:E,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]}),Object(s.jsxs)("li",{class:"col-md-4 col-xs-4",children:[Object(s.jsxs)("a",{href:P,"data-lightbox":"gallery-vmarine",children:[Object(s.jsx)("img",{alt:"foto",src:P,className:"img-fluid"}),Object(s.jsx)("div",{class:"decription-wrap",children:Object(s.jsx)("div",{class:"image-bg",children:Object(s.jsx)("p",{class:"desc",children:"Landing Page"})})})]}),Object(s.jsx)("a",{href:_,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(s.jsx)("a",{href:_,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]}),Object(s.jsxs)("li",{class:"col-md-4 col-xs-4",children:[Object(s.jsxs)("a",{href:I,"data-lightbox":"gallery-vmarine",children:[Object(s.jsx)("img",{alt:"foto",src:I,className:"img-fluid"}),Object(s.jsx)("div",{class:"decription-wrap",children:Object(s.jsx)("div",{class:"image-bg",children:Object(s.jsx)("p",{class:"desc",children:"FAQ Landing Page"})})})]}),Object(s.jsx)("a",{href:S,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(s.jsx)("a",{href:C,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]})]})})]})})}}]),t}(n.a.Component),J=t.p+"static/media/earth.a08c82a6.jpg",Q=function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(s.jsxs)("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url("+J+")"},children:[Object(s.jsx)("div",{className:"overlay-mf"}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsx)("div",{className:"contact-mf",children:Object(s.jsx)("div",{id:"contact",className:"box-shadow-full",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col-md",children:[Object(s.jsx)("div",{className:"title-box-2 pt-4 pt-md-0",children:Object(s.jsx)("h5",{className:"title-left",children:"Get in Touch"})}),Object(s.jsx)("div",{className:"more-info",children:Object(s.jsxs)("p",{className:"lead",children:["Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",Object(s.jsx)("br",{}),"Simply call me or send me an email."]})}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h6",{children:"Phone: +33 07 66 198985"}),Object(s.jsx)("h6",{children:"E-mail: shynggys.umbetov@yahoo.com"})]}),Object(s.jsx)("div",{className:"socials",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://github.com/chicoumbetov?tab=repositories",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("span",{className:"ico-circle",children:Object(s.jsx)("i",{className:"ion-social-github"})})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.linkedin.com/in/shynggys-umbetov-638762132/",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("span",{className:"ico-circle",children:Object(s.jsx)("i",{className:"ion-social-linkedin"})})})})]})})]})})})})})})}),Object(s.jsx)("footer",{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsx)("div",{className:"copyright-box"})})})})})]})}}]),t}(n.a.Component),q=(t(29),function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).state={skills:[{id:"HTML5_skill",content:"HTML5",porcentage:"80%",value:"80"},{id:"CSS3_skill",content:"CSS3",porcentage:"75%",value:"75"},{id:"ReactJS_skill",content:"React JS Web dev - coursera",porcentage:"100%",value:"30"},{id:"Bootstrap_skill",content:"Bootstrap coursera certificate",porcentage:"80%",value:"80"}],about_me:[{id:"first-p-about",content:"2019   Master Degree in Science & Technologies at Universit\xe9 de Poitiers"},{id:"second-p-about",content:"2016 : Bachelor Degree in Hydro Energy Generation & Management at UniSalle Institut Politechnique of Beauvais (Paris), France"},{id:"third-p-about",content:"2013 : Electrical Engineering at Kazakh National University"}]},e}return Object(j.a)(t,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"edu",children:Object(s.jsx)("section",{id:"education",className:"about-mf sect-pt4 route",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsx)("div",{className:"box-shadow-full",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-md-6",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"},children:Object(s.jsx)("div",{className:"about-img",style:{textAlign:"center"},children:Object(s.jsx)("img",{className:"img-fluid rounded b-shadow-a",alt:""})})})}),Object(s.jsxs)("div",{className:"skill-mf",children:[Object(s.jsx)("p",{className:"title-s",children:"Certificates"}),this.state.skills.map((function(e){return Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)("span",{children:e.content})," ",Object(s.jsx)("span",{className:"pull-right",children:e.porcentage}),Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:e.porcentage},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})})]},e.id)}))]})]}),Object(s.jsx)("div",{className:"col-md-6",children:Object(s.jsxs)("div",{className:"about-me pt-4 pt-md-0",children:[Object(s.jsx)("div",{className:"title-box-2",children:Object(s.jsx)("h5",{className:"title-left",children:"Education"})}),this.state.about_me.map((function(e){return Object(s.jsx)("p",{className:"lead",children:e.content},e.id)}))]})})]})})})})})})})}}]),t}(n.a.Component));l.a.render(Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)(x,{}),Object(s.jsx)(g,{}),Object(s.jsx)(v,{}),Object(s.jsx)(T,{}),Object(s.jsx)(q,{}),Object(s.jsx)(Q,{})]}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.496d3f58.chunk.js.map