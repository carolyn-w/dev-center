(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return r})),t.d(n,"default",(function(){return p}));var a=t(2),i=t(9),o=(t(0),t(293)),s={},c={id:"mobile/snippets/cleanup-handles",title:"cleanup-handles",description:"It is vital that subscription handles are cleaned up when the object is cleaned up, otherwise dangling references can occur. This can be done by implementing the IDisposable and IDisposableTracker interface, and then providing this as the second argument to a call to subscribe. ServiceBase and ComponentBase already implement these interfaces so you don't have to.",source:"@site/docs/mobile/snippets/cleanup-handles.mdx",permalink:"/docs/mobile/snippets/cleanup-handles",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/cleanup-handles.mdx"},r=[],d={rightToc:r};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"It is vital that subscription handles are cleaned up when the object is cleaned up, otherwise dangling references can occur. This can be done by implementing the ",Object(o.b)("inlineCode",{parentName:"p"},"IDisposable")," and ",Object(o.b)("inlineCode",{parentName:"p"},"IDisposableTracker")," interface, and then providing ",Object(o.b)("inlineCode",{parentName:"p"},"this")," as the second argument to a call to subscribe. ",Object(o.b)("inlineCode",{parentName:"p"},"ServiceBase")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ComponentBase")," already implement these interfaces so you don't have to."))))}p.isMDXComponent=!0}}]);