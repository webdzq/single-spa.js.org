(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{219:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(1),o=a(9),i=(a(0),a(289)),r={id:"recommended-setup",title:"The Recommended Setup",sidebar_label:"Overview"},l=[{value:"Overview",id:"overview",children:[]},{value:"Alternatives",id:"alternatives",children:[]},{value:"In-browser versus build-time modules",id:"in-browser-versus-build-time-modules",children:[]},{value:"Import Maps",id:"import-maps",children:[]},{value:"SystemJS",id:"systemjs",children:[]},{value:"Lazy loading",id:"lazy-loading",children:[]},{value:"Local development",id:"local-development",children:[]},{value:"Build tools (Webpack / Rollup)",id:"build-tools-webpack--rollup",children:[]},{value:"Utility modules (styleguide, API, etc)",id:"utility-modules-styleguide-api-etc",children:[]},{value:"Shared dependencies",id:"shared-dependencies",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Continuous Integration (CI)",id:"continuous-integration-ci",children:[]},{value:"Applications versus parcels",id:"applications-versus-parcels",children:[]},{value:"Inter-app communication",id:"inter-app-communication",children:[]},{value:"State management",id:"state-management",children:[]}],s={rightToc:l},c="wrapper";function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(c,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'Single-spa itself is not opinionated about your build tools, CI process, or local development workflow. However, to implement single-spa you will have to figure all of those things out (and more). To help you decide how to approach these problems, the single-spa core team has put together a "recommended setup" that gives an opinionated approach to solving the practical problems of microfrontends.'),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"We recommend a setup that uses in-browser ES modules + import maps (or SystemJS to polyfill these if you need better browser support). This setup has several advantages:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Common libraries are easy to manage, and are only downloaded once. If you're using SystemJS, you can also preload them for a speed boost as well."),Object(i.b)("li",{parentName:"ol"},"Sharing code / functions / variables is as easy as import/export, just like in a monolithic setup"),Object(i.b)("li",{parentName:"ol"},"Lazy loading applications is easy, which enables you to speed up initial load times"),Object(i.b)("li",{parentName:"ol"},"Each application (AKA microservice, AKA ES module) can be independently developed and deployed. Teams are enabled to work at their own speed, experiment (within reason as defined by the organization), QA, and deploy on thier own schedules. This usually also means that release cycles can be decreased to days instead of weeks or months"),Object(i.b)("li",{parentName:"ol"},"A great developer experience (DX): go to your dev environment and add an import map that points the application's url to your localhost. See sections below for details")),Object(i.b)("h2",{id:"alternatives"},"Alternatives"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/umijs/qiankun"}),"qiankun")," is a popular alternative to this recommended setup."),Object(i.b)("h2",{id:"in-browser-versus-build-time-modules"},"In-browser versus build-time modules"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=Jxqiu6pdMSU&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=2"}),"Tutorial video")),Object(i.b)("h2",{id:"import-maps"},"Import Maps"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=Lfm2Ge_RUxs&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=3"}),"Tutorial video")),Object(i.b)("h2",{id:"systemjs"},"SystemJS"),Object(i.b)("h2",{id:"lazy-loading"},"Lazy loading"),Object(i.b)("h2",{id:"local-development"},"Local development"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=vjjcuIxqIzY&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=4"}),"Tutorial video")),Object(i.b)("h2",{id:"build-tools-webpack--rollup"},"Build tools (Webpack / Rollup)"),Object(i.b)("h2",{id:"utility-modules-styleguide-api-etc"},"Utility modules (styleguide, API, etc)"),Object(i.b)("h2",{id:"shared-dependencies"},"Shared dependencies"),Object(i.b)("h2",{id:"deployment"},"Deployment"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=QHunH3MFPZs&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=5"}),"Tutorial video")),Object(i.b)("h2",{id:"continuous-integration-ci"},"Continuous Integration (CI)"),Object(i.b)("h2",{id:"applications-versus-parcels"},"Applications versus parcels"),Object(i.b)("h2",{id:"inter-app-communication"},"Inter-app communication"),Object(i.b)("h2",{id:"state-management"},"State management"))}d.isMDXComponent=!0},289:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return p}));var n=a(0),o=a.n(n),i=o.a.createContext({}),r=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},l=function(e){var t=r(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),d=r(a),p=n,u=d[l+"."+p]||d[p]||c[p]||i;return a?o.a.createElement(u,Object.assign({},{ref:t},s,{components:a})):o.a.createElement(u,Object.assign({},{ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:n,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);