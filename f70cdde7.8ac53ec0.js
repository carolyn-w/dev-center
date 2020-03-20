/*! For license information please see f70cdde7.8ac53ec0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(9),o=(n(0),n(185)),i=n(190),c=n(191),s={title:"Components and Services"},l={id:"mobile/concepts-components-services",title:"Components and Services",description:'import UseCaseCard from "../../src/components/UseCaseCard";',source:"@site/docs/mobile/concepts-components-services.mdx",permalink:"/dev-center/docs/mobile/concepts-components-services",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/concepts-components-services.mdx",sidebar:"mobile",previous:{title:"Events",permalink:"/dev-center/docs/mobile/concepts-events"},next:{title:"Advanced Layout",permalink:"/dev-center/docs/mobile/concepts-advanced-layout"}},p=[{value:"Components",id:"components",children:[]},{value:"Services",id:"services",children:[]},{value:"Creation and Initialization",id:"creation-and-initialization",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],d={rightToc:p};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Components")," and ",Object(o.b)("strong",{parentName:"p"},"services")," are the two basic building blocks of Geocortex Mobile. Components power the UI experience of Geocortex Mobile, and services provide the shared infrastructure and core logic that power app behaviour."),Object(o.b)("h2",{id:"components"},"Components"),Object(o.b)("p",null,"In Geocortex Mobile, components are entities which implement UI/UX experiences and the associated logic. An example of a component is a I Want to Menu (IWTM). IWTMs participate in layout, implement custom behaviour (display a list when clicked), and participate in app config."),Object(o.b)("p",null,"Components are only ",Object(o.b)("strong",{parentName:"p"},"created")," if they participate in the layout - if no component definition exists in the layout, none will be created. Components are ",Object(o.b)("strong",{parentName:"p"},"initialized")," when they are activated."),Object(o.b)("h2",{id:"services"},"Services"),Object(o.b)("p",null,"In Geocortex Mobile, services are entities which provide a shared service or behaviour to other components. Two key differences between components are services are..."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Services do not participate in layout, and do not power UI (except indirectly)."),Object(o.b)("li",{parentName:"ol"},"Services are created ",Object(o.b)("strong",{parentName:"li"},"and")," initialized on startup, before any components are created.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This means any service is always available to any component")))),Object(o.b)("p",null,'An example of a service would be a "SettingsService", which provides global settings that other components can consume.'),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Services are not intended to directly interact with eachother. Instead, services should ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-command-operation"}),"implement operations")," which can be called by other services to indirectly interact."))),Object(o.b)("h2",{id:"creation-and-initialization"},"Creation and Initialization"),Object(o.b)("p",null,"This is the order of operations for component and service creation and initialization on app startup."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create all services"),Object(o.b)("li",{parentName:"ol"},"Initialize all services"),Object(o.b)("li",{parentName:"ol"},"Create all components consumed by the layout"),Object(o.b)("li",{parentName:"ol"},"Activate the necessary components, depending on the layout and user interaction. Components are initialized during activation.")),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)(c.a,{mdxType:"UseCaseContainer"},Object(o.b)(i.a,{title:"Implement a Custom Component",description:"Learn how to implement a custom component using the Geocortex Mobile SDK",link:"implement-component-with-ui",mdxType:"UseCaseCard"}),Object(o.b)(i.a,{title:"Implement a Custom Service",description:"Learn how to implement a custom service using the Geocortex Mobile SDK",link:"implement-service",mdxType:"UseCaseCard"})))}m.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?a.a.createElement(b,c({ref:t},l,{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},186:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},188:function(e,t,n){"use strict";n(189)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},189:function(e,t,n){var r=n(17),a=n(18),o=n(23),i=/"/g,c=function(e,t,n,r){var a=String(o(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(188);var r=n(0),a=n.n(r),o=n(186),i=n.n(o),c=n(127),s=n.n(c);function l(e){var t=e.title,n=e.description,r=e.link;return a.a.createElement("div",{className:i()("card-demo",s.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,t)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,n)),a.a.createElement("div",{className:"card__footer"},a.a.createElement("a",{className:"button button--secondary button--block",href:r},"Get Started"))))}},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),o=n(186),i=n.n(o),c=n(128),s=n.n(c);function l(e){var t=e.children;return a.a.createElement("div",{className:i()(s.a.root)},t)}}}]);