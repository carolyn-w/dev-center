/*! For license information please see fc883e07.14bb54f8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[46,27],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(1),o=r(9),n=(r(0),r(185)),i={},c={id:"mobile/snippets/prereqs",title:"prereqs",description:"## Prerequisites",source:"@site/docs/mobile/snippets/prereqs.mdx",permalink:"/docs/mobile/snippets/prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/prereqs.mdx"},l=[{value:"Prerequisites",id:"prerequisites",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(n.b)("p",null,"Download the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/quick-start"}),"Quick Start")," application and open it in Visual Studio."))}u.isMDXComponent=!0},181:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return h})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return d}));var a=r(1),o=r(9),n=(r(0),r(185)),i=r(190),c=r(189),l=r(188),s=r(126),u={title:"Change Mobile's Default Search Behaviour",description:"Geocortex Mobile - Learn how to override Geocortex Mobile's default search behaviour with a workflow"},h={id:"mobile/change-default-search-behaviour",title:"Change Mobile's Default Search Behaviour",description:"Geocortex Mobile - Learn how to override Geocortex Mobile's default search behaviour with a workflow",source:"@site/docs/mobile/change-default-search-behaviour.mdx",permalink:"/docs/mobile/change-default-search-behaviour",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/change-default-search-behaviour.mdx",sidebar:"mobile",previous:{title:"Display a Custom Form with Geocortex Workflow",permalink:"/docs/mobile/display-custom-form"},next:{title:"Mobile Specific Custom Form Elements",permalink:"/docs/mobile/implement-custom-workflow-form-element"}},p=[{value:"What you&#39;re Building",id:"what-youre-building",children:[]},{value:"Initial Setup",id:"initial-setup",children:[]},{value:"Setup the Workflow to Run on Search",id:"setup-the-workflow-to-run-on-search",children:[]},{value:"Extend the Workflow to Filter the Results.",id:"extend-the-workflow-to-filter-the-results",children:[]}],b={rightToc:p};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Geocortex Mobile comes with search functionality out of the box. The default behaviour will return results from all enabled layers that can be searched on the map. What if you want to replace the functionality with your own search? Or filter the results returned by the default search? ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://apps.geocortex.com/mobileviewer/designer/"}),"Geocortex Mobile Designer")," can't accomplish this, but it can be accomplished by leveraging ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://apps.geocortex.com/workflow/designer/"}),"Geocortex Workflow")," and editing the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/concepts-app-config"}),"app config"),"."),Object(n.b)("h2",{id:"what-youre-building"},"What you're Building"),Object(n.b)("p",null,"We will modify the default search behaviour of the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/quick-start"}),"Quick Start")," application on the Fire Hydrants layer have have an optional filter that will only show fire hydrants without a hydrants survey."),Object(n.b)("img",{src:Object(i.a)("img/custom-search-workflow-finished.png"),alt:"Search Workflow with Alert"}),Object(n.b)(s.default,{mdxType:"PrereqsSnippet"}),Object(n.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Run the Quick Start"),Object(n.b)("li",{parentName:"ol"},'Turn off visibility for all Feature Layers except for "Fire Hydrants"'),Object(n.b)("li",{parentName:"ol"},'Run "Return to Default Map View" in the I Want to Menu if you panned or zoomed the map.'),Object(n.b)("li",{parentName:"ol"},"Open the search panel and search for ",Object(n.b)("inlineCode",{parentName:"li"},"active"),".")),Object(n.b)("p",null,"You should see some number of results. If you look at the details for some of the Fire Hydrants, you'll notice some have Fire Hydrant Surveys and some don't. We will build a workflow that will only return the Fire Hydrants without a related survey when you search for ",Object(n.b)("inlineCode",{parentName:"p"},"active filter:nosurveys"),"."),Object(n.b)("h2",{id:"setup-the-workflow-to-run-on-search"},"Setup the Workflow to Run on Search"),Object(n.b)("p",null,'The first thing we need to do is override the default search behaviour. We can do this by editing the "Search" component of the ',Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/quick-start#editing-the-layout-and-app-config"}),"app config"),". The default behaviour for search is a command chain that runs ",Object(n.b)("inlineCode",{parentName:"p"},"tasks.search")," and then ",Object(n.b)("inlineCode",{parentName:"p"},"results.display"),"."),Object(n.b)("h6",{id:"default-search-config"},"Default Search Config"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "search",\n    "id": "search",\n    "onSearch": ["tasks.search", "results.display"],\n    "onClear": ["search.clear", "results.clear"],\n    "maxResults": 50\n}\n')),Object(n.b)("p",null,"We are going to replace the command chain with a ",Object(n.b)("inlineCode",{parentName:"p"},"workflow.run")," command that replicates this behaviour."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Open up ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://apps.geocortex.com/workflow/designer/"}),"Geocortex Workflow Designer")," and create and save a new workflow."),Object(n.b)("li",{parentName:"ol"},'Add an "Alert" activity as a test.'),Object(n.b)("li",{parentName:"ol"},"Copy the ID of the the workflow from the URL")),Object(n.b)("img",{src:Object(i.a)("img/custom-search-workflow-url.png"),alt:"Workflow URL with ID"}),Object(n.b)("ol",{start:4},Object(n.b)("li",{parentName:"ol"},"Add the workflow as an app item to your ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/mobile/quick-start#editing-the-layout-and-app-config"}),"app config"),".")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "workflow",\n            "id": "filterSearchWorkflow",\n            "title": "Filter Search Workflow",\n            "portalItem": "<your-workflow-id-here>"\n        },\n        ...\n    ]\n}\n')),Object(n.b)("ol",{start:5},Object(n.b)("li",{parentName:"ol"},"Configure the ",Object(n.b)("inlineCode",{parentName:"li"},"onSearch")," property of the Search Component in the app config to run the workflow.")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "search",\n    "id": "search",\n    "onSearch": [\n        {\n            "name": "workflow.run",\n            "arguments": {\n                "id": "filterSearchWorkflow"\n            }\n        }\n    ],\n    "onClear": ["search.clear", "results.clear"],\n    "maxResults": 50\n}\n')),Object(n.b)("ol",{start:6},Object(n.b)("li",{parentName:"ol"},"Run the app and test your workflow. You should see your alert pop up when you try to search for something.")),Object(n.b)("img",{src:Object(i.a)("img/custom-search-workflow-alert.png"),alt:"Search Workflow with Alert"}),Object(n.b)("ol",{start:7},Object(n.b)("li",{parentName:"ol"},"Open up your Workflow in the Workflow Designer again. The default behaviour we just overode can be recreated with the use of ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-command.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____169"}),"RunCommand")," and ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-operation.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____173"}),"RunOperation")," activities. ",Object(n.b)("inlineCode",{parentName:"li"},"tasks.search")," is an operation, so it needs a RunOperation Activity, and ",Object(n.b)("inlineCode",{parentName:"li"},"results.display")," is a command so it needs a RunCommand Activity. Chain these two activities together, passing the ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input%3FTocPath%3DConfiguration%7CAdd%2520a%2520Workflow%2520to%2520an%2520App%7C_____4"}),"workflow context")," to ",Object(n.b)("inlineCode",{parentName:"li"},"tasks.search")," and then passing the output of that operation to ",Object(n.b)("inlineCode",{parentName:"li"},"results.display"),".")),Object(n.b)("img",{src:Object(i.a)("img/custom-search-workflow-recreated.png"),alt:"Search Workflow with Original Operations"}),Object(n.b)("ol",{start:8},Object(n.b)("li",{parentName:"ol"},"Save the workflow and reload the application. Test the search functionality and ensure it works as it originally did.")),Object(n.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(n.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Check out ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/change-default-behaviour"}),"Change Default Application Behaviour")," for more ways to override default behaviour like search."))),Object(n.b)("h2",{id:"extend-the-workflow-to-filter-the-results"},"Extend the Workflow to Filter the Results."),Object(n.b)("p",null,'At this point, you can choose to extend the search behaviour with Geocortex Workflow in whatever way is appropiate for your usecase. You could execute a different search for external results and add them to the set of results displayed, you could filter out specific results from the search, or you could replace the default search operation with an entirely different search operation. For this example, a workflow was created which checks the incoming search text for the text "filter:nosurvey" and then filters results to Fire Hydrants without a survey. The workflow ',Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://latitudegeo.maps.arcgis.com/home/item.html?id=bc7647d4485743e98ea42cd69ee4aa66"}),"can be found here"),"."),Object(n.b)("h1",{id:"next-steps"},"Next Steps"),Object(n.b)("p",null,"This pattern of configuring behaviour with a workflow can be applied throughout configuration on numerous components. You can use a workflow to control the behaviour of the Map, Feature Details, Geolocate, Custom Components, and more. Often, a workflow can be created and used to execute custom behaviour instead of a custom command or operation."),Object(n.b)(c.a,{mdxType:"UseCaseContainer"},Object(n.b)(l.a,{title:"Geocortex Workflow",description:"Learn more about Geocortex Workflow",link:"../workflow/overview",mdxType:"UseCaseCard"}),Object(n.b)(l.a,{title:"Change Default Behaviour",description:"Learn more about overriding default behaviours",link:"./change-default-behaviour",mdxType:"UseCaseCard"}),Object(n.b)(l.a,{title:"SDK Sample for Overriding Default Behaviours",description:"Check out the SDK Sample for overriding default behaviours",link:"https://github.com/geocortex/mobile-sdk-samples/MapAndFeatureCommands",mdxType:"UseCaseCard"}),Object(n.b)(l.a,{title:"Implement Custom Command or Operation",description:"Implement a custom command or operation with the Mobile SDK",link:"./implement-command-operation",mdxType:"UseCaseCard"}),Object(n.b)(l.a,{title:"Custom Search Workflow with Filter",description:"The custom search workflow with a filter used in this example",link:"https://latitudegeo.maps.arcgis.com/home/item.html?id=bc7647d4485743e98ea42cd69ee4aa66#",mdxType:"UseCaseCard"})))}d.isMDXComponent=!0},185:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return d}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},h=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=u(r),b=a,d=h["".concat(i,".").concat(b)]||h[b]||p[b]||n;return r?o.a.createElement(d,c({ref:t},s,{components:r})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<n;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},186:function(e,t,r){var a;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===n)for(var c in a)r.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},187:function(e,t,r){"use strict";var a=r(0),o=r(50);t.a=function(){return Object(a.useContext)(o.a)}},188:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(0),o=r.n(a),n=r(186),i=r.n(n),c=r(127),l=r.n(c);function s({title:e,description:t,link:r}){return o.a.createElement("div",{className:i()("card-demo",l.a.root)},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card__header"},o.a.createElement("h3",null,e)),o.a.createElement("div",{className:"card__body"},o.a.createElement("p",null,t)),o.a.createElement("div",{className:"card__footer"},o.a.createElement("a",{className:"button button--secondary button--block",href:r},"Get Started"))))}},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(0),o=r.n(a),n=r(186),i=r.n(n),c=r(128),l=r.n(c);function s({children:e}){return o.a.createElement("div",{className:i()(l.a.root)},e)}},190:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(191);var a=r(187);function o(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},191:function(e,t,r){"use strict";var a=r(17),o=r(36),n=r(192),i="".startsWith;a(a.P+a.F*r(193)("startsWith"),"String",{startsWith:function(e){var t=n(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return i?i.call(t,a,r):t.slice(r,r+a.length)===a}})},192:function(e,t,r){var a=r(69),o=r(23);e.exports=function(e,t,r){if(a(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},193:function(e,t,r){var a=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);