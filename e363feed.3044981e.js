/*! For license information please see e363feed.3044981e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{172:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return m}));var n=r(1),o=r(9),a=(r(0),r(185)),c=r(190),i=r(191),l={title:"SDK Samples",description:"Geocortex Mobile - Learn about the Geocortex Mobile SDK Samples project"},s={id:"mobile/samples",title:"SDK Samples",description:"Geocortex Mobile - Learn about the Geocortex Mobile SDK Samples project",source:"@site/docs/mobile/samples.mdx",permalink:"/dev-center/docs/mobile/samples",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/samples.mdx",sidebar:"mobile",previous:{title:"Quick Start",permalink:"/dev-center/docs/mobile/quick-start"},next:{title:"Dependency Injection",permalink:"/dev-center/docs/mobile/dependency-injection"}},u=[],p={rightToc:u};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Alongside the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/quick-start"}),"Quick Start Project"),", a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/sdk-samples"}),"SDK Samples project")," has been created which contains a number of examples of using the SDK to extend Geocortex Mobile. Running the project displays a selector which lets you explore the live samples."),Object(a.b)(i.a,{mdxType:"UseCaseContainer"},Object(a.b)(c.a,{title:"Quick Start",description:"Check out the Geocortex Mobile SDK Quick Start Project.",link:"https://github.com/geocortex/mobile-quick-start",mdxType:"UseCaseCard"}),Object(a.b)(c.a,{title:"SDK Samples",description:"Check out the Geocortex Mobile SDK Samples Project.",link:"https://github.com/geocortex/mobile-sdk-samples",mdxType:"UseCaseCard"})))}m.isMDXComponent=!0},185:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return r?o.a.createElement(d,i({ref:t},s,{components:r})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},186:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var c=o.apply(null,n);c&&e.push(c)}else if("object"===a)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},188:function(e,t,r){"use strict";r(189)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},189:function(e,t,r){var n=r(17),o=r(18),a=r(23),c=/"/g,i=function(e,t,r,n){var o=String(a(e)),i="<"+t;return""!==r&&(i+=" "+r+'="'+String(n).replace(c,"&quot;")+'"'),i+">"+o+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(i),n(n.P+n.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},190:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r(188);var n=r(0),o=r.n(n),a=r(186),c=r.n(a),i=r(127),l=r.n(i);function s(e){var t=e.title,r=e.description,n=e.link;return o.a.createElement("div",{className:c()("card-demo",l.a.root)},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card__header"},o.a.createElement("h3",null,t)),o.a.createElement("div",{className:"card__body"},o.a.createElement("p",null,r)),o.a.createElement("div",{className:"card__footer"},o.a.createElement("a",{className:"button button--secondary button--block",href:n},"Get Started"))))}},191:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(0),o=r.n(n),a=r(186),c=r.n(a),i=r(128),l=r.n(i);function s(e){var t=e.children;return o.a.createElement("div",{className:c()(l.a.root)},t)}}}]);