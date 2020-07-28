(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),i=(n(0),n(218)),a=n(219),c=n(225),s=n(224),l={title:"Services Overview",sidebar_label:"Overview",description:"Geocortex Mobile - Overview of services",hide_table_of_contents:!0},u={unversionedId:"mobile/sdk-services-overview",id:"mobile/sdk-services-overview",isDocsHomePage:!1,title:"Services Overview",description:"Geocortex Mobile - Overview of services",source:"@site/docs/mobile/sdk-services-overview.mdx",permalink:"/docs/mobile/sdk-services-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-services-overview.mdx",sidebar_label:"Overview",sidebar:"mobile",previous:{title:"Internationalization",permalink:"/docs/mobile/sdk-components-internationalization"},next:{title:"Create a Service",permalink:"/docs/mobile/sdk-services-create"}},d=[{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:d};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In Geocortex Mobile, services represent a shared application-wide concern that needs to be accessed by many components or other services. There is only one instance of each service in the application. Interactions with services usually happen through the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/sdk-commands-operations#implementing-commands-and-operations"}),"commands and operations they implement"),", but services can also be ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/sdk-dependency-injection"}),"directly injected")," into other services and components."),Object(i.b)("p",null,"Two key differences between components are services are..."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Services do not participate in layout, and do not power UI (except indirectly)."),Object(i.b)("li",{parentName:"ol"},"Services are created ",Object(i.b)("strong",{parentName:"li"},"and")," initialized on startup, before any components are created.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This means any service is always available to any component.")))),Object(i.b)("p",null,'An example of a service would be a "SettingsService", which provides global settings that other components can consume.'),Object(i.b)("p",null,"Services can be optionally ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/sdk-services-reference#configuration-models"}),"consume configuration through app items"),"."),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)(s.a,{mdxType:"UseCaseContainer"},Object(i.b)(c.a,{title:"Create a Service",description:"Learn how to create a basic service",link:Object(a.a)("docs/mobile/sdk-services-create"),mdxType:"UseCaseCard"}),Object(i.b)(c.a,{title:"Check out the Service Reference",description:"Take a deep dive into services in the Geocortex Mobile SDK",link:Object(a.a)("docs/mobile/sdk-services-reference"),mdxType:"UseCaseCard"})))}p.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,f=d["".concat(a,".").concat(p)]||d[p]||b[p]||i;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},219:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(222),o=n(220);function i(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var u=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+u:u}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},220:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},221:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},222:function(e,t,n){"use strict";var r=n(0),o=n(18);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},223:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(13),a=n(220),c=n(8),s=Object(r.createContext)({collectLink:function(){}}),l=n(219),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,d=e.isNavLink,b=e.to,p=e.href,f=e.activeClassName,v=e["data-noBrokenLinkCheck"],m=u(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),O=Object(l.b)().withBaseUrl,y=Object(r.useContext)(s),h=b||p,j=void 0!==h?O(h):void 0,w=Object(a.a)(j),g=Object(r.useRef)(!1),k=d?i.e:i.c,x=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!x&&w&&window.docusaurus.prefetch(j),function(){x&&n&&n.disconnect()}}),[j,x,w]);var E=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,N=!j||!w||E;return j&&w&&!E&&!v&&y.collectLink(j),N?o.a.createElement("a",Object.assign({href:j},!w&&{target:"_blank",rel:"noopener noreferrer"},m)):o.a.createElement(k,Object.assign({},m,{onMouseEnter:function(){g.current||(window.docusaurus.preload(j),g.current=!0)},innerRef:function(e){var t,r;x&&e&&w&&(t=e,r=function(){window.docusaurus.prefetch(j)},(n=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),r())}))}))).observe(t))},to:j},d&&{activeClassName:f}))}},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),i=n(46),a=n.n(i);function c(e){var t=e.children;return o.a.createElement("div",{className:a.a.root},t)}},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(223),o=n(0),i=n.n(o),a=n(221),c=n(47),s=n.n(c);function l(e){var t=e.title,n=e.description,o=e.link;return i.a.createElement("div",{className:Object(a.a)("card-demo",s.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,n)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(r.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}}}]);