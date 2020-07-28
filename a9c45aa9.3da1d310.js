(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(2),r=n(6),c=(n(0),n(218)),a={title:"UIContext",description:"Geocortex Web - Accessing the UIContext in Components"},i={unversionedId:"web/sdk-components-ui-context",id:"web/sdk-components-ui-context",isDocsHomePage:!1,title:"UIContext",description:"Geocortex Web - Accessing the UIContext in Components",source:"@site/docs/web/sdk-components-ui-context.mdx",permalink:"/docs/web/sdk-components-ui-context",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-components-ui-context.mdx",sidebar:"web",previous:{title:"Component Hooks",permalink:"/docs/web/sdk-components-hooks"},next:{title:"Component Interactions",permalink:"/docs/web/sdk-components-interactions"}},s=[{value:"Accessing the UIContext",id:"accessing-the-uicontext",children:[]},{value:"hostElement",id:"hostelement",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-components-create"}),"Custom components")," often need to access the application context to run ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-commands-operations"}),"commands and operations"),", subscribe and publish to ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-events-overview"}),"events"),", and more. A component has two ways of accessing the application context."),Object(c.b)("p",null,"First, every component has a ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-components-reference#models"}),"model")," which in turn has a ",Object(c.b)("inlineCode",{parentName:"p"},"messages")," property that can be used to access commands, operations, and events. All application level interactions should be facilitated by the model."),Object(c.b)("p",null,"Optionally, a component can use the ",Object(c.b)("inlineCode",{parentName:"p"},"UIContext")," to access commands, operations and events, as well as use the ",Object(c.b)("inlineCode",{parentName:"p"},"translate")," function to take advantage of our internationalization features."),Object(c.b)("h2",{id:"accessing-the-uicontext"},"Accessing the UIContext"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"UIContext")," is injected into a component with the ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html#usecontext"}),"React ",Object(c.b)("inlineCode",{parentName:"a"},"useContext")," hook"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import { UIContext } from "@vertigis/web/ui";\nimport { useContext } from "react";\n\nexport default function CustomComponent(props) {\n    const { command, event, operation, translate, hostElement } = useContext(\n        UIContext\n    );\n    // ...\n}\n')),Object(c.b)("p",null,"Once you have reference to the ",Object(c.b)("inlineCode",{parentName:"p"},"UIContext"),", you can access its properties and interact with the application context in your custom component."),Object(c.b)("h2",{id:"hostelement"},"hostElement"),Object(c.b)("p",null,"The UIContext provides access to the DOM through the ",Object(c.b)("inlineCode",{parentName:"p"},"hostElement")," property. However, this is meant to be a last resort, intended for enabling complex third party libraries. The DOM should only be interacted with through the abstraction of React components whenever possible."))}l.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=o,d=b["".concat(a,".").concat(m)]||b[m]||u[m]||c;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);