(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),i=(n(0),n(218)),c=(n(219),n(228),n(229),{title:"Service Injection",description:"Geocortex Web - Injecting services into component models"}),a={unversionedId:"web/sdk-components-injecting-services",id:"web/sdk-components-injecting-services",isDocsHomePage:!1,title:"Service Injection",description:"Geocortex Web - Injecting services into component models",source:"@site/docs/web/sdk-components-injecting-services.mdx",permalink:"/docs/web/sdk-components-injecting-services",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-components-injecting-services.mdx",sidebar:"web",previous:{title:"Component Interactions",permalink:"/docs/web/sdk-components-interactions"},next:{title:"Component Styling",permalink:"/docs/web/sdk-components-styling"}},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Geocortex Web uses dependency injection as a way to obtain a reference to Geocortex Web ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/sdk-services-overview"}),"services")," in your application. Services can be referenced from within a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/sdk-components-reference#models"}),"component model"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/sdk-commands-operations#implementing-commands-and-operations"}),"custom command or operation")," can accomplish the behavior you need without a direct service reference, this is preferred to decrease the degree of coupling."))),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@inject")," decorator can be used to reference a service from within your component model. The following example demonstrates injecting the ",Object(i.b)("inlineCode",{parentName:"p"},"RegionService")," into a custom component model."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import { ComponentModelBase } from "@vertigis/web/models";\nimport { RegionService } from "@vertigis/web/region";\n// highlight-next-line\nimport { FrameworkServiceType, inject } from "@vertigis/web/services";\n\nexport default class ExampleComponentModel extends ComponentModelBase {\n    // NOTE: This property isn\'t populated until the model is `initialized`.\n    // It is not available in the constructor of this model.\n    // highlight-start\n    @inject(FrameworkServiceType.REGION)\n    regionService: RegionService | undefined;\n    // highlight-end\n\n    private _distance = "100";\n\n    get distance(): string {\n        return this.regionService &&\n            this.regionService.measurementSystem === "metric"\n            ? `${this._distance} m`\n            : `${this._distance} ft`;\n    }\n}\n')),Object(i.b)("p",null,"The property that the ",Object(i.b)("inlineCode",{parentName:"p"},"@inject")," decorator is bound to ",Object(i.b)("strong",{parentName:"p"},"will be populated during the ",Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"/docs/web/sdk-components-reference#initialization-and-teardown"}),"initialization process"))," of the component model that the decorator was used in. The property value will be ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," until the component model is initialized."))}l.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||i;return n?o.a.createElement(m,a(a({ref:t},u),{},{components:n})):o.a.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},219:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(222),o=n(220);function i(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,c=i.forcePrependBaseUrl,a=void 0!==c&&c,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;var l=!n.startsWith(t)?t+n.replace(/^\//,""):n;return u?e+l:l}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},220:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},221:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},222:function(e,t,n){"use strict";var r=n(0),o=n(18);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},226:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},227:function(e,t,n){"use strict";var r=n(0),o=n(226);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},228:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(227),c=n(221),a=n(48),s=n.n(a),u=37,l=39;t.a=function(e){var t=e.block,n=e.children,a=e.defaultValue,p=e.values,d=e.groupId,b=Object(i.a)(),m=b.tabGroupChoices,f=b.setTabGroupChoices,v=Object(r.useState)(a),h=v[0],j=v[1];if(null!=d){var g=m[d];null!=g&&g!==h&&p.some((function(e){return e.value===g}))&&j(g)}var O=function(e){j(e),null!=d&&f(d,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return O(t)},onClick:function(){return O(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},229:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);