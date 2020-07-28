(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{218:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,b=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var o=n(2),r=n(6),i=(n(0),n(218)),a={title:"Deployment",description:"Geocortex Mobile - Deploy a Geocortex Mobile Application"},c={unversionedId:"mobile/sdk-deployment",id:"mobile/sdk-deployment",isDocsHomePage:!1,title:"Deployment",description:"Geocortex Mobile - Deploy a Geocortex Mobile Application",source:"@site/docs/mobile/sdk-deployment.mdx",permalink:"/docs/mobile/sdk-deployment",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-deployment.mdx",sidebar:"mobile",previous:{title:"SDK Samples",permalink:"/docs/mobile/sdk-samples"},next:{title:"Commands and Operations",permalink:"/docs/mobile/sdk-commands-operations"}},p=[{value:"Application with Custom Code",id:"application-with-custom-code",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you only need to modify the app config and layout of a Geocortex Mobile application, you can use the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://apps.geocortex.com/mobileviewer/designer/"}),"Geocortex Mobile Designer")," interface. However, if you need to write custom code, you will need to deploy and manage a custom application."),Object(i.b)("h3",{id:"application-with-custom-code"},"Application with Custom Code"),Object(i.b)("p",null,"The Quickstart provided is a standard Xamarin Forms application, and can be deployed in accordance to the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/deploy-test/"}),"Xamarin Forms deployment guidelines"),"."))}s.isMDXComponent=!0}}]);