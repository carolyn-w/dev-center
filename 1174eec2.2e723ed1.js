(window.webpackJsonp=window.webpackJsonp||[]).push([[12,79,138],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var o=n(2),a=n(9),r=(n(0),n(293)),c={},i={id:"web/snippets/prereqs-custom-code",title:"prereqs-custom-code",description:"-   Download and setup the Geocortex Web SDK.",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",permalink:"/docs/web/snippets/prereqs-custom-code",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx"},s=[],p={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Download and setup the ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK"),"."),Object(r.b)("li",{parentName:"ul"},"Check out the ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app"}),"deployment instructions")," to learn more about deploying custom code to a Geocortex Web App.")))}d.isMDXComponent=!0},132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var o=n(2),a=n(9),r=(n(0),n(293)),c={},i={id:"web/snippets/framework-components",title:"framework-components",description:"This example uses Geocortex Web layout components",source:"@site/docs/web/snippets/framework-components.mdx",permalink:"/docs/web/snippets/framework-components",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/framework-components.mdx"},s=[],p={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This example uses Geocortex Web layout components"))))}d.isMDXComponent=!0},168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return h}));var o=n(2),a=n(9),r=(n(0),n(293)),c=n(300),i=n(299),s=n(298),p=n(296),d=n(295),l=(n(128),n(132),{title:"Component Interactions",description:"Geocortex Web - Learn how to make custom components interact in with the larger application"}),m={id:"web/sdk-components-interactions",title:"Component Interactions",description:"Geocortex Web - Learn how to make custom components interact in with the larger application",source:"@site/docs/web/sdk-components-interactions.mdx",permalink:"/docs/web/sdk-components-interactions",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-components-interactions.mdx",sidebar:"web",previous:{title:"Commands and Operations in Components",permalink:"/docs/web/sdk-components-commands-operations"},next:{title:"Service Injection",permalink:"/docs/web/sdk-components-injecting-services"}},b=[{value:"Interacting with Components through Models",id:"interacting-with-components-through-models",children:[{value:"Importing Models",id:"importing-models",children:[]},{value:"Exporting Models",id:"exporting-models",children:[]}]},{value:"Interacting with Application Services with Dependency Injection",id:"interacting-with-application-services-with-dependency-injection",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],u={rightToc:b};function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Components have multiple ways of interacting with other components and services. When possible, interaction through ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-components-commands-operations#running-commands-and-operations"}),"commands and operations")," should be preferred, as this introduces the loosest coupling. When you need stronger coupling and direct access to the API, then ",Object(r.b)("strong",{parentName:"p"},"model imports")," or ",Object(r.b)("strong",{parentName:"p"},"service injection")," can be used. A good example of this is needing direct access to the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html"}),"ArcGIS Map"),", which can be exposed by importing the map model."),Object(r.b)("h2",{id:"interacting-with-components-through-models"},"Interacting with Components through Models"),Object(r.b)("p",null,"Components can interact with each other through their ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-components-reference#models"}),"respective models"),". A model can either declare that it is exported, like the map model, or that it imports a model."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Declaring a model as exported exposes it to other components for importing.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Using the ",Object(r.b)("inlineCode",{parentName:"p"},"@importModel")," decorator will tell the component to attempt to retrieve a reference to the given model type, according to the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-advanced-model-binding"}),"model binding rules")))),Object(r.b)("p",null,"Components like the ",Object(r.b)("inlineCode",{parentName:"p"},"<scalebar>")," or ",Object(r.b)("inlineCode",{parentName:"p"},"<compass>")," import the map model, and this allows them to respond to changes in the maps state ",Object(r.b)("strong",{parentName:"p"},"through")," the map model."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'@exportModel\nexport class MapModel implements ComponentModel {\n    // ... map stuff ...\n}\n\nexport class ScaleBarModel implements ComponentModel {\n    @importModel("map-extension")\n    map: MapExtension | undefined;\n\n    // ... scale bar stuff ...\n}\n')),Object(r.b)("h3",{id:"importing-models"},"Importing Models"),Object(r.b)("p",null,"Custom components can also import models and interact with them. The import must be done in the model of the component. This tight coupling can allow deeper access to other components models, but also negates the advantages of the abstraction of commands and operations."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The property decorated by ",Object(r.b)("inlineCode",{parentName:"p"},"@importModel")," is completely managed by Geocortex Web and should never be modified or serialized in app config. Its value can change at any time, e.g. to and from undefined, or from one model instance to a completely different one. The component needs to react appropriately to these changes and not make any assumptions about its current value."))),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'import {\n    ComponentModelBase,\n    serializable,\n    importModel,\n} from "@geocortex/web/models";\nimport { MapExtension } from "@geocortex/api/mapping/MapExtension";\n\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase {\n    @importModel("map-extension")\n    mapModel: MapExtension | undefined;\n\n    logMapViewMode() {\n        if (this.mapModel.viewMode === "map") {\n            console.log("Map is 2d");\n        } else {\n            console.log("Map is 3d");\n        }\n    }\n}\n')),Object(r.b)("h3",{id:"exporting-models"},"Exporting Models"),Object(r.b)("p",null,"You can mark a model as exported by adding the ",Object(r.b)("inlineCode",{parentName:"p"},"@exportModel")," decorator to the model class. The following example shows a model that is exported, and then imported by another model and used."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Models are imported with the ",Object(r.b)("inlineCode",{parentName:"p"},"itemType")," name that they are registered with."))),Object(r.b)(i.a,{defaultValue:"exportedModel",values:[{label:"Exported Model",value:"exportedModel"},{label:"Importing Model",value:"importingModel"},{label:"Importing Model Component",value:"importingModelComponent"},{label:"Layout",value:"layout"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"exportedModel",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/ExportedModel/ExportedModel.ts"',title:'"src/components/ExportedModel/ExportedModel.ts"'}),'import {\n    ComponentModelBase,\n    serializable,\n    exportModel,\n} from "@geocortex/web/models";\n\n@exportModel\n@serializable\nexport default class ExportedModel extends ComponentModelBase {\n    someCustomModelProperty: string = "Some Text";\n}\n'))),Object(r.b)(s.a,{value:"importingModel",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/CustomComponent/CustomModel.ts"',title:'"src/components/CustomComponent/CustomModel.ts"'}),'import {\n    ComponentModelBase,\n    serializable,\n    importModel,\n} from "@geocortex/web/models";\nimport { ExportedModel } from "../ExportedModel";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    @importModel("exported-model")\n    exportedModel: ExportedModel | undefined;\n\n    getContentText() {\n        if (this.exportedModel) {\n            return this.exportedModel.someCustomModelProperty;\n        } else {\n            console.warn(\n                "Could not import required model \'exported-model\' for \'CustomModel\'"\n            );\n            return "";\n        }\n    }\n}\n'))),Object(r.b)(s.a,{value:"importingModelComponent",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/components/importedModel/ExportedModelComponent.tsx"',title:'"src/components/importedModel/ExportedModelComponent.tsx"'}),'import React from "react";\nimport Typography from "@geocortex/web/ui/typography";\n\nimport {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@geocortex/web/components";\nimport { CustomModel } from ".";\n\nexport default function CustomComponent(\n    props: LayoutElementProperties<CustomModel>\n) {\n    return (\n        <LayoutElement {...props} style={{ backgroundColor: "white" }}>\n            <Typography variant="h1">\n                {`Text From the imported Model: "${props.model.getContentText()}"`}\n            </Typography>\n        </LayoutElement>\n    );\n}\n'))),Object(r.b)(s.a,{value:"layout",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace">\n    <stack padding="2">\n        <custom:custom-component />\n        <custom:exported-model-component />\n    </stack>\n</layout>\n')))),Object(r.b)("h2",{id:"interacting-with-application-services-with-dependency-injection"},"Interacting with Application Services with Dependency Injection"),Object(r.b)("p",null,"Components can interact with built-in Geocortex Web ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-services-overview"}),"services"),". Through services, they can interact with the map, application context, workflows, and more. Services can only be injected into a components through their ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-components-reference#models"}),"associated models"),". Learn more about how to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-components-injecting-services"}),"inject a service into a component"),"."),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)(d.a,{mdxType:"UseCaseContainer"},Object(r.b)(p.a,{title:"Build a Custom Component that Imports the Map Model",description:"Follow step by step instructions to import the map model into a custom component",link:Object(c.a)("docs/web/tutorial-import-map-model"),mdxType:"UseCaseCard"}),Object(r.b)(p.a,{title:"Learn how to Interact with Services",description:"Learn about how components can interact with built-in or custom services",link:Object(c.a)("docs/web/sdk-components-injecting-services"),mdxType:"UseCaseCard"}),Object(r.b)(p.a,{title:"Learn how Components are Bound to Models in the Layout",description:"Learn how layout structure can be used to bind components to their required models",link:Object(c.a)("docs/web/configuration-advanced-model-binding"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},295:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(0),a=n.n(o),r=n(294),c=n.n(r),i=n(125),s=n.n(i);function p(e){var t=e.children;return a.a.createElement("div",{className:c()(s.a.root)},t)}},296:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(302);var o=n(301),a=n(0),r=n.n(a),c=n(294),i=n.n(c),s=n(126),p=n.n(s);function d(e){var t=e.title,n=e.description,a=e.link;return r.a.createElement("div",{className:i()("card-demo",p.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(o.a,{className:"button button--secondary button--block",to:a},"Get Started"))))}},297:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=a},298:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}},299:function(e,t,n){"use strict";n(24),n(19),n(18);var o=n(0),a=n.n(o),r=n(297);var c=function(){return Object(o.useContext)(r.a)},i=n(294),s=n.n(i),p=n(127),d=n.n(p),l=37,m=39;t.a=function(e){var t=e.block,n=e.children,r=e.defaultValue,i=e.values,p=e.groupId,b=c(),u=b.tabGroupChoices,h=b.setTabGroupChoices,g=Object(o.useState)(r),j=g[0],v=g[1];if(null!=p){var O=u[p];null!=O&&O!==j&&v(O)}var f=function(e){v(e),null!=p&&h(p,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":j===t,className:s()("tabs__item",d.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case m:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return f(t)},onClick:function(){return f(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}}}]);