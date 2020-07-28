(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),r=(n(0),n(218)),i={title:"Advanced Model Binding",description:"Geocortex Mobile - Learn about advanced model binding with layout"},c={unversionedId:"mobile/configuration-advanced-model-binding",id:"mobile/configuration-advanced-model-binding",isDocsHomePage:!1,title:"Advanced Model Binding",description:"Geocortex Mobile - Learn about advanced model binding with layout",source:"@site/docs/mobile/configuration-advanced-model-binding.mdx",permalink:"/docs/mobile/configuration-advanced-model-binding",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/configuration-advanced-model-binding.mdx",sidebar:"mobile",previous:{title:"Layout Reference",permalink:"/docs/mobile/configuration-layout-reference"},next:{title:"App Config",permalink:"/docs/mobile/configuration-app-config-getting-started"}},l=[{value:"Nested Model Imports",id:"nested-model-imports",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The scale bar component displays information about a particular map. More specifically, it is ",Object(r.b)("strong",{parentName:"p"},"dependent")," on the data of a map model to display its values."),Object(r.b)("p",null,"Components express this data dependency through interactions ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-component-service-interactions#interacting-with-the-mapview"}),"through injecting the ",Object(r.b)("inlineCode",{parentName:"a"},"MapView")),".\nThe specific map view that is injected is resolved through a model binding based on the layout hierarchy."),Object(r.b)("h2",{id:"nested-model-imports"},"Nested Model Imports"),Object(r.b)("p",null,"In previous layout examples, layouts were shown where components related to a map, such as zoom buttons, were nested within a map. It was assumed that the component would bind to the map it was placed in, but why?"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),'    <map config="map-1" slot="main">\n      <stack margin="0.5" slot="bottom-right" halign="end">\n        <zoom margin="0.8"/>\n        <geolocate margin="0.5" config="geolocate" /  >\n      </stack>\n    </map>\n')),Object(r.b)("p",null,"Certain components, such as ",Object(r.b)("inlineCode",{parentName:"p"},"<zoom/>")," or ",Object(r.b)("inlineCode",{parentName:"p"},"<geolocate/>"),", require a ",Object(r.b)("inlineCode",{parentName:"p"},"Map Model")," to function. To locate a ",Object(r.b)("inlineCode",{parentName:"p"},"Map Model"),", the layout tree hierarchy will be searched upwards, starting at the requesting component. When a element in the layout is found that provides the required model, (in this case, the ",Object(r.b)("inlineCode",{parentName:"p"},"<map/>")," component provides a Map Model), the requesting component will import the model. If the correct model is not found on an upwards search, a breadth first search will be performed from the root of the layout tree."),Object(r.b)("p",null,"Take this more complicated layout for example."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../../../../ViewerSpec/layout/layout-mobile.xsd\n      https://geocortex.com/layout/v1 ../../../layout-custom.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n\n    \x3c!-- Taskbar main content --\x3e\n    <map config="map1" slot="main">\n      <gxm:geometry-toolbar slot="top-center-visible" config="geometry" margin="0.8" style="map-widget" active="false" />\n      <search-new-extent config="search" margin="0.8" slot="top-center-visible" active="false" />\n      <stack margin="0.8" slot="top-right" halign="end">\n        <iwtm config="iwtm">\n          <user slot="bottom"/>\n        </iwtm>\n      </stack>\n      <stack margin="0.5" slot="bottom-right" halign="end">\n        <zoom margin="0.5"/>\n        <button config="measure-action" icon="measure" style="map-widget" margin="0.5"/>\n        <geolocate margin="0.5" config="geolocate" />\n      </stack>\n      <gxm:version slot="bottom-left" margin="0.8"/>\n    </map>\n\n    \x3c!-- Taskbar / search --\x3e\n    <panel>\n      <stack >\n        <search config="search"/>\n        <results-list config="results" active="false" />\n      </stack>\n      <feature-details config="feature-details"/>\n      <gxm:update-feature/>\n      <gxm:add-related-feature />\n    </panel>\n\n    \x3c!-- Taskbar / layers --\x3e\n    <panel>\n      <layer-list />\n    </panel>\n\n    \x3c!-- Taskbar / add feature --\x3e\n    <panel>\n      <gxm:add-feature-select-layer config="edit"/>\n      <gxm:add-feature/>\n    </panel>\n</layout>\n')),Object(r.b)("p",null,"This layout has components such as ",Object(r.b)("inlineCode",{parentName:"p"},"<search/>")," or ",Object(r.b)("inlineCode",{parentName:"p"},"<gxm:add-feature/>")," which require the context of a specific map to function. However, these components are ",Object(r.b)("strong",{parentName:"p"},"not")," nested within the ",Object(r.b)("inlineCode",{parentName:"p"},"<map/>")," component in the app. Therefore, they will start a breadth first search to discover a map model import it."))}p.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||r;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);