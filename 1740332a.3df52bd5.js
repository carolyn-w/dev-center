(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{218:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(c,".").concat(p)]||d[p]||b[p]||r;return n?i.a.createElement(m,o(o({ref:t},l),{},{components:n})):i.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<r;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},219:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=n(222),i=n(220);function r(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,c=r.forcePrependBaseUrl,o=void 0!==c&&c,s=r.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(o)return t+n;var u=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+u:u}(r,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},220:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},221:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},222:function(e,t,n){"use strict";var a=n(0),i=n(18);t.a=function(){var e=Object(a.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},223:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(13),c=n(220),o=n(8),s=Object(a.createContext)({collectLink:function(){}}),l=n(219),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};t.a=function(e){var t,n,d=e.isNavLink,b=e.to,p=e.href,m=e.activeClassName,v=e["data-noBrokenLinkCheck"],f=u(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),h=Object(l.b)().withBaseUrl,O=Object(a.useContext)(s),g=b||p,j=void 0!==g?h(g):void 0,y=Object(c.a)(j),w=Object(a.useRef)(!1),N=d?r.e:r.c,C=o.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!C&&y&&window.docusaurus.prefetch(j),function(){C&&n&&n.disconnect()}}),[j,C,y]);var x=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,S=!j||!y||x;return j&&y&&!x&&!v&&O.collectLink(j),S?i.a.createElement("a",Object.assign({href:j},!y&&{target:"_blank",rel:"noopener noreferrer"},f)):i.a.createElement(N,Object.assign({},f,{onMouseEnter:function(){w.current||(window.docusaurus.preload(j),w.current=!0)},innerRef:function(e){var t,a;C&&e&&y&&(t=e,a=function(){window.docusaurus.prefetch(j)},(n=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())}))}))).observe(t))},to:j},d&&{activeClassName:m}))}},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),i=n.n(a),r=n(46),c=n.n(r);function o(e){var t=e.children;return i.a.createElement("div",{className:c.a.root},t)}},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(223),i=n(0),r=n.n(i),c=n(221),o=n(47),s=n.n(o);function l(e){var t=e.title,n=e.description,i=e.link;return r.a.createElement("div",{className:Object(c.a)("card-demo",s.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(a.a,{className:"button button--secondary button--block",to:i},"Get Started"))))}},226:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},227:function(e,t,n){"use strict";var a=n(0),i=n(226);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},228:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(227),c=n(221),o=n(48),s=n.n(o),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,d=e.values,b=e.groupId,p=Object(r.a)(),m=p.tabGroupChoices,v=p.setTabGroupChoices,f=Object(a.useState)(o),h=f[0],O=f[1];if(null!=b){var g=m[b];null!=g&&g!==h&&d.some((function(e){return e.value===g}))&&O(g)}var j=function(e){O(e),null!=b&&v(b,e)},y=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return j(t)},onClick:function(){return j(t)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},229:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return v}));var a=n(2),i=n(6),r=(n(0),n(218)),c=n(219),o=n(225),s=n(224),l=n(228),u=n(229),d={title:"Service Reference",description:"Geocortex Web - Service Reference"},b={unversionedId:"web/sdk-services-reference",id:"web/sdk-services-reference",isDocsHomePage:!1,title:"Service Reference",description:"Geocortex Web - Service Reference",source:"@site/docs/web/sdk-services-reference.mdx",permalink:"/docs/web/sdk-services-reference",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-services-reference.mdx",sidebar:"web",previous:{title:"Create a Service",permalink:"/docs/web/sdk-services-create"},next:{title:"Service Injection",permalink:"/docs/web/sdk-services-injecting-services"}},p=[{value:"Service Registration",id:"service-registration",children:[]},{value:"Service Lifecycle",id:"service-lifecycle",children:[]},{value:"Service Anatomy",id:"service-anatomy",children:[{value:"Initialization and Cleanup",id:"initialization-and-cleanup",children:[]},{value:"Message Bus",id:"message-bus",children:[]}]},{value:"Models and Configuration",id:"models-and-configuration",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],m={rightToc:p};function v(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Services act as a repository of accessible behavior and data, and can be used for a variety of purposes, from implementing commands and operations, to managing shared data, to interfacing with the REST API of an external service."),Object(r.b)("h2",{id:"service-registration"},"Service Registration"),Object(r.b)("p",null,"All services need to be registered with Geocortex Web. Services can optionally use the ",Object(r.b)("inlineCode",{parentName:"p"},"itemType")," property to bind to an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-reference#app-items"}),"item in the app config"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'export default function(registry: LibraryRegistry) {\n    ...\n    registry.registerService({\n        id: "custom-service",\n        getService: (config) => new CustomService(config),\n        // Use this setting if you want your service to load an\n        // item from the app config.\n        itemType: "custom-service-model",\n        // Use this setting if you want your service to load on\n        // application startup. Defaults to `false`.\n        loadOnStartup: true,\n    })\n    ...\n}\n')),Object(r.b)("h2",{id:"service-lifecycle"},"Service Lifecycle"),Object(r.b)("p",null,"On application load, all services that are configured to automatically load on startup are created and initialized ",Object(r.b)("strong",{parentName:"p"},"in parallel"),", along with core services like the message bus."),Object(r.b)("p",null,"All other services are created and initialized (i.e. the ",Object(r.b)("inlineCode",{parentName:"p"},"_onInitialize")," method is called) when they are first invoked. This can happen in multiple ways."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If a command or operation implemented by the service is executed, then the service will be created and initialized to run that command."),Object(r.b)("li",{parentName:"ul"},"If a different component or service injects the service, then the service will be created and initialized to fulfill that dependency.")),Object(r.b)("p",null,"Services are destroyed (i.e. the ",Object(r.b)("inlineCode",{parentName:"p"},"_onDestroy")," method is invoked) when the application is destroyed."),Object(r.b)("h2",{id:"service-anatomy"},"Service Anatomy"),Object(r.b)("p",null,"All services have access to initialization and cleanup methods, as well as the ",Object(r.b)("inlineCode",{parentName:"p"},"messages")," property that allows for the registration and execution of commands and operations."),Object(r.b)("h3",{id:"initialization-and-cleanup"},"Initialization and Cleanup"),Object(r.b)("p",null,"Sometimes, a service is required to perform initialization and cleanup actions, for example, to initialize dynamic data and cleanup dangling references. The ",Object(r.b)("inlineCode",{parentName:"p"},"ServiceBase")," class has two methods to achieve this:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"_onInitialize()"),", which can be overridden with additional initialization logic,"),Object(r.b)("li",{parentName:"ul"},"and ",Object(r.b)("inlineCode",{parentName:"li"},"_onDestroy()"),", which can be overridden to facilitate cleanup.")),Object(r.b)("p",null,"The following service uses these methods to subscribe to an event and cleanup the event handler afterwards."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Always call ",Object(r.b)("inlineCode",{parentName:"p"},"super._onInitialize()")," before any custom initialization logic."))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import { ServiceBase } from "@vertigis/web/services";\nimport { MapEvent } from "@vertigis/viewer-spec/messaging/registry/map";\n\nexport default class CustomService extends ServiceBase {\n    handles: IHandle[] = [];\n\n    protected async _onInitialize(): Promise<void> {\n        await super._onInitialize();\n        this.handles.push(\n            this.messages.events.map.initialized.subscribe((e: MapEvent) => {\n                console.log(\n                    "Map Initialized, do your map dependent model setup here."\n                );\n            })\n        );\n    }\n\n    protected async _onDestroy(): Promise<void> {\n        await super._onDestroy();\n        this.handles.forEach((h) => h.remove());\n    }\n}\n')),Object(r.b)("h3",{id:"message-bus"},"Message Bus"),Object(r.b)("p",null,"All services have access to the ",Object(r.b)("inlineCode",{parentName:"p"},"messages")," property on the class instance, which gives access to all ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-commands-operations#running-commands-and-operations"}),"commands, operations, and events in the application"),"."),Object(r.b)("h2",{id:"models-and-configuration"},"Models and Configuration"),Object(r.b)("p",null,"Like components, services can be configured through the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-getting-started"}),"app config"),". A service can participate in the config by extending the ",Object(r.b)("inlineCode",{parentName:"p"},"ConfigurableServiceBase")," class. For more information on the relationship between services and configuration, check out ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-serializable-properties"}),"this article"),". The following example demonstrates a service with one configurable property, ",Object(r.b)("inlineCode",{parentName:"p"},"name"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The service is linked to the config through the ",Object(r.b)("inlineCode",{parentName:"p"},"itemType")," and ",Object(r.b)("inlineCode",{parentName:"p"},"id")," properties."))),Object(r.b)(l.a,{defaultValue:"service",values:[{label:"Service",value:"service"},{label:"Registration",value:"registration"},{label:"App Config",value:"config"}],mdxType:"Tabs"},Object(r.b)(u.a,{value:"service",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'export interface CustomServiceProperties extends ServiceModelProperties {\n    name: string;\n}\n\n@serializable\nexport default class CustomServiceWithConfig extends ConfigurableServiceBase<\n    CustomServiceProperties\n> {\n    // highlight-next-line\n    id: "my-unique-id";\n\n    name: string;\n\n    async sayHello(): Promise<string> {\n        return `Hello, ${this.name}`;\n    }\n\n    protected _getSerializableProperties(): PropertyDefs<\n        CustomServiceProperties\n    > {\n        return {\n            ...super._getSerializableProperties(),\n            name: {\n                serializeModes: ["initial"],\n                default: "Ian",\n            },\n        };\n    }\n}\n'))),Object(r.b)(u.a,{value:"registration",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'export default function (registry: LibraryRegistry) {\n    registry.registerService({\n        id: "custom-service",\n        title: "Custom Service",\n        getService: (config) => new CustomServiceWithConfig(config),\n        // highlight-next-line\n        itemType: "custom-service-model",\n    });\n}\n'))),Object(r.b)(u.a,{value:"config",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "custom-service-model",\n            // highlight-next-line\n            "id": "my-unique-id",\n            "name": "Noah"\n        }\n    ]\n}\n')))),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)(s.a,{mdxType:"UseCaseContainer"},Object(r.b)(o.a,{title:"Learn how to use Commands and Operations with Services",description:"Learn how to run and implement commands and operations with custom services",link:Object(c.a)("docs/web/sdk-commands-operations"),mdxType:"UseCaseCard"}),Object(r.b)(o.a,{title:"Learn about Service Interactions",description:"Learn about how services can directly interact through dependency injection",link:Object(c.a)("docs/web/sdk-services-injecting-services"),mdxType:"UseCaseCard"}),Object(r.b)(o.a,{title:"Build a Custom Command with a Custom Service",description:"Follow a step by step guide to building a custom command with a custom service",link:Object(c.a)("docs/web/tutorial-implement-command-operation"),mdxType:"UseCaseCard"}),Object(r.b)(o.a,{title:"Build a Service that Manages Dynamic Data",description:"Built a service that manages a dynamic data source and exposes it to components",link:Object(c.a)("docs/web/tutorial-service-dynamic-data"),mdxType:"UseCaseCard"})))}v.isMDXComponent=!0}}]);