(window.webpackJsonp=window.webpackJsonp||[]).push([[120,77],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(9),i=(n(0),n(293)),s={},r={id:"mobile/snippets/quickstart-prereqs",title:"quickstart-prereqs",description:"Checkout and setup the Geocortex Mobile SDK Quickstart project.",source:"@site/docs/mobile/snippets/quickstart-prereqs.mdx",permalink:"/docs/mobile/snippets/quickstart-prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/quickstart-prereqs.mdx"},c=[],m={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Checkout and setup the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-overview"}),"Geocortex Mobile SDK Quickstart project"),"."))}p.isMDXComponent=!0},267:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return C}));var o=n(2),a=n(9),i=(n(0),n(293)),s=n(300),r=n(299),c=n(298),m=n(322),p=n(129),l=n(296),b=n(295),u={title:"Build a Custom Component with UI",description:"Geocortex Mobile - Learn how to implement a custom component with UI"},d={id:"mobile/tutorial-implement-component-with-ui",title:"Build a Custom Component with UI",description:"Geocortex Mobile - Learn how to implement a custom component with UI",source:"@site/docs/mobile/tutorial-implement-component-with-ui.mdx",permalink:"/docs/mobile/tutorial-implement-component-with-ui",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/tutorial-implement-component-with-ui.mdx",sidebar:"mobile",previous:{title:"Build a Custom Command",permalink:"/docs/mobile/tutorial-implement-command-operation"},next:{title:"Pull Component Data from App Config",permalink:"/docs/mobile/tutorial-implement-component-participate-app-config"}},h=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create a Component Skeleton",id:"create-a-component-skeleton",children:[]},{value:"Add the Component to your Layout",id:"add-the-component-to-your-layout",children:[]},{value:"Use XAML to define your UI",id:"use-xaml-to-define-your-ui",children:[]},{value:"Extend your Component with Custom Code",id:"extend-your-component-with-custom-code",children:[{value:"Example: Progress Bar",id:"example-progress-bar",children:[]}]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],g={rightToc:h};function C(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Did you know Geocortex Workflow allows you to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/forms.htm#Overview_of_Forms%3FTocPath%3DForms%7COverview%2520of%2520Forms%7C_____0"}),"create custom forms")," you can present to an end user?"))),Object(i.b)("p",null,"Implementing a custom component in Geocortex Mobile gives you the highest degree of flexibility with what you can do. ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-components-overview"}),"Components")," can display custom, dynamic UI, register operation implementations, store persistent data, and more. They are also one of the most complex ways of customizing your Geocortex Mobile app, so it might be worthwhile to review simpler options like ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/configuration-commands-operations"}),"Commands and Operations")," or ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/tutorial-display-custom-form"}),"Workflow")," first."),Object(i.b)("p",null,"By the end of this article, you'll have the knowledge to build a component that displays a progress bar that is advanced by a button."),Object(i.b)(m.a,{src:Object(s.a)("video/component-with-ui-demo.webm"),mdxType:"DemoVideo"}),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)(p.default,{mdxType:"QuickstartPrereqsSnippet"}),Object(i.b)("h2",{id:"create-a-component-skeleton"},"Create a Component Skeleton"),Object(i.b)("p",null,"Create a new file ",Object(i.b)("inlineCode",{parentName:"p"},"components/CustomComponent.cs")," under the platform agnostic project.\nIn the file, add a new component class ",Object(i.b)("inlineCode",{parentName:"p"},"CustomComponent")," and ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-dependency-injection"}),"register it with ",Object(i.b)("strong",{parentName:"a"},"Autofac")),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/components/CustomComponent.cs"',title:'"App1/App1/components/CustomComponent.cs"'}),'using App1;\nusing App1.Components;\nusing Geocortex.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n// highlight-next-line\n[assembly: Component(typeof(CustomComponent), "custom-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    // highlight-next-line\n    class CustomComponent : ComponentBase\n    {\n        protected override VisualElement Create(XNode node)\n        {\n            return new Label(){ Text = "My Custom Component" };\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"add-the-component-to-your-layout"},"Add the Component to your Layout"),Object(i.b)("p",null,"First, the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/configuration-layout-getting-started"}),"layout")," needs to be told where to find your component. In the assembly attribute of the ",Object(i.b)("inlineCode",{parentName:"p"},"CustomComponent"),", we declared it to be part of the ",Object(i.b)("inlineCode",{parentName:"p"},"App1Namespace")," which is defined in ",Object(i.b)("inlineCode",{parentName:"p"},"XmlNamespaces.cs")," We need to add this ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/configuration-layout-getting-started#namespaces"}),"xml namespace")," as an attribute on the layout. In this example, it's added with the alias ",Object(i.b)("inlineCode",{parentName:"p"},"custom"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/layout-large.xml',title:'"App1/App1/layout-large.xml'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerFramework/layout/layout-mobile.xsd"\n    // highlight-next-line\n    xmlns:custom="https://your.org/layout/app1">\n    <gxm:taskbar>\n        <map slot="main"/>\n    </gxm:taskbar>\n</layout>\n')),Object(i.b)("p",null,"Now that the ",Object(i.b)("inlineCode",{parentName:"p"},"custom")," namespace has been added, the component can be added to the layout. For this example, it was added into a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/configuration-layout-reference#panels"}),"Panel")," that lives in the taskbar."),Object(i.b)(r.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"layout",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerFramework/layout/layout-mobile.xsd"\n    xmlns:custom="https://your.org/layout/app1">\n    <gxm:taskbar>\n        \x3c!--Taskbar / custom component--\x3e\n        <panel>\n            // highlight-next-line\n            <custom:custom-component icon="info"/>\n        </panel>\n        <map slot="main"/>\n    </gxm:taskbar>\n</layout>\n'))),Object(i.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(s.a)("img/mobile-custom-component-simple.png"),alt:"Custom Component with Text Block"}))),Object(i.b)("h2",{id:"use-xaml-to-define-your-ui"},"Use XAML to define your UI"),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/xaml-basics/"}),"XAML is a markup language created by Microsoft"),", and one of the recommended patterns for defining UI in Xamarin Forms. We can modify our component to reference a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/user-interface/controls/views"}),"XAML view"),"."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Right click on the ",Object(i.b)("inlineCode",{parentName:"li"},"Components"),' folder and select "Add" > "New Item" > "Content View"'),Object(i.b)("li",{parentName:"ol"},"Rename the files and classes within to ",Object(i.b)("inlineCode",{parentName:"li"},"CustomComponentView.xaml")," and ",Object(i.b)("inlineCode",{parentName:"li"},"CustomComponentView.xaml.cs")),Object(i.b)("li",{parentName:"ol"},"Modify the ",Object(i.b)("inlineCode",{parentName:"li"},"CustomComponent")," to return this new view for its content.")),Object(i.b)(r.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"View",value:"view"},{label:"Code Behind",value:"code-behind"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"component",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/components/CustomComponent.cs"',title:'"App1/App1/components/CustomComponent.cs"'}),'using App1;\nusing App1.Components;\nusing Geocortex.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n[assembly: Component(typeof(CustomComponent), "custom-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    class CustomComponent : ComponentBase\n    {\n        protected override VisualElement Create(XNode node)\n        {\n            // highlight-next-line\n            return new CustomComponentView();\n        }\n    }\n}\n\n'))),Object(i.b)(c.a,{value:"view",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/components/CustomComponentView.xaml"',title:'"App1/App1/components/CustomComponentView.xaml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<ContentView xmlns="http://xamarin.com/schemas/2014/forms"\n             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n             xmlns:d="http://xamarin.com/schemas/2014/forms/design"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             mc:Ignorable="d"\n             x:Class="App1.Components.CustomComponentView">\n  <ContentView.Content>\n      <StackLayout>\n          <Label Text="Hello Xamarin.Forms!" />\n      </StackLayout>\n  </ContentView.Content>\n</ContentView>\n'))),Object(i.b)(c.a,{value:"code-behind",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/components/CustomComponentView.xaml.cs"',title:'"App1/App1/components/CustomComponentView.xaml.cs"'}),"using App1.Components;\nusing Geocortex.Mobile.Composition;\nusing Xamarin.Forms;\nusing Xamarin.Forms.Xaml;\n\n[assembly: View(typeof(CustomComponentView))]\nnamespace App1.Components\n{\n    [XamlCompilation(XamlCompilationOptions.Compile)]\n    public partial class CustomComponentView : ContentView\n    {\n        public CustomComponentView()\n        {\n            InitializeComponent();\n        }\n    }\n}\n"))),Object(i.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(s.a)("img/mobile-custom-component-xamarin-view.png"),alt:"Custom Component with Text Block"}))),Object(i.b)("p",null,"Congratulations! You've built a working component with UI that is exposed in Mobile."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Learn about how to extend this component to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/tutorial-implement-component-participate-app-config"}),"participate in app config"),"."))),Object(i.b)("h2",{id:"extend-your-component-with-custom-code"},"Extend your Component with Custom Code"),Object(i.b)("p",null,"From here, you can implement your own business logic and interfaces, create custom ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-commands-operations#implementing-commands-and-operations"}),"Commands and Operations")," that are powered by and/or interact with your component, and much more. The ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/"}),"Xamarin Forms Documentation")," has excellent guides to implementing user interfaces in Xaml."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Geocortex Mobile comes with built-in ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/GeocortexMobileElements"}),"Enhanced Components")," that can ease development and styling of custom UI."))),Object(i.b)("h3",{id:"example-progress-bar"},"Example: Progress Bar"),Object(i.b)("p",null,"Here's an example of a component with a progress bar that is advanced on a button click. It uses a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/xaml-basics/data-bindings-to-mvvm"}),"MVVM pattern")," to power the user interface, as is best practice recommended by Xamarin."),Object(i.b)(r.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"View",value:"view"},{label:"Code Behind",value:"code-behind"},{label:"View Model",value:"view-model"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"component",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/components/ProgressBarComponent.cs"',title:'"App1/App1/components/ProgressBarComponent.cs"'}),'using App1;\nusing App1.Components;\nusing Geocortex.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n[assembly: Component(typeof(ProgressBarComponent), "progress-bar-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    class ProgressBarComponent : ComponentBase\n    {\n        private View _view;\n\n        // The view is injected as a dependency\n        // highlight-next-line\n        public ProgressBarComponent(ProgressBarComponentView view)\n        {\n            _view = view;\n        }\n        protected override VisualElement Create(XNode node)\n        {\n            return _view;\n        }\n    }\n}\n'))),Object(i.b)(c.a,{value:"view",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/components/ProgressBarComponentView.xaml',title:'"App1/App1/components/ProgressBarComponentView.xaml'}),'<?xml version="1.0" encoding="UTF-8"?>\n<ContentView xmlns="http://xamarin.com/schemas/2014/forms"\n             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n             xmlns:d="http://xamarin.com/schemas/2014/forms/design"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             mc:Ignorable="d"\n             x:Class="App1.Components.ProgressBarComponentView">\n    <ContentView.Content>\n        <StackLayout Margin="20">\n            <StackLayout Spacing="20" IsVisible="{Binding WorkNotComplete}">\n                <Label Text="Click the button to advance the progress bar."></Label>\n                <Button Text="Do some work." Clicked="DoWork_Clicked"></Button>\n                <ProgressBar ProgressColor="Red" Progress="{Binding Progress}" />\n            </StackLayout>\n            <StackLayout Spacing="20" IsVisible="{Binding WorkComplete}">\n                <Label  Text="Work Complete"></Label>\n                <Button Text="Reset" Clicked="Reset_Clicked"></Button>\n            </StackLayout>\n        </StackLayout>\n    </ContentView.Content>\n</ContentView>\n'))),Object(i.b)(c.a,{value:"code-behind",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/components/ProgressBarComponentView.xaml.cs"',title:'"App1/App1/components/ProgressBarComponentView.xaml.cs"'}),'using App1.Components;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Infrastructure.Messaging;\nusing System;\nusing Xamarin.Forms;\nusing Xamarin.Forms.Xaml;\n\n// Here, the view is registered with Autofac so it can be injected.\n// highlight-next-line\n[assembly: View(typeof(ProgressBarComponentView))]\nnamespace App1.Components\n{\n    [XamlCompilation(XamlCompilationOptions.Compile)]\n    public partial class ProgressBarComponentView : ContentView\n    {\n        private UIOperations _uiOperations;\n        public ProgressBarComponentViewModel ViewModel => BindingContext as ProgressBarComponentViewModel;\n        public ProgressBarComponentView(ProgressBarComponentViewModel viewModel, UIOperations uiOperations)\n        {\n            _uiOperations = uiOperations;\n            BindingContext = viewModel;\n            InitializeComponent();\n        }\n\n        private void DoWork_Clicked(object sender, EventArgs e)\n        {\n            if (!ViewModel.WorkComplete)\n            {\n                ViewModel.Progress += 0.2;\n                if (ViewModel.Progress >= 1.0)\n                {\n                    ViewModel.WorkComplete = true;\n                    _uiOperations.Alert.Execute(new UIAlertArgs() { Title = "Success", Message = "Work Complete", ButtonText = "Ok" });\n                }\n            }\n        }\n\n        private void Reset_Clicked(object sender, EventArgs e)\n        {\n            ViewModel.Progress = 0;\n            ViewModel.WorkComplete = false;\n        }\n    }\n}\n'))),Object(i.b)(c.a,{value:"view-model",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/components/ProgressBarComponentViewModel.cs"',title:'"App1/App1/components/ProgressBarComponentViewModel.cs"'}),"using App1.Components;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Composition.Views;\n\n// Here, the view model is registered with autofac so it can be injected\n// highlight-next-line\n[assembly: ViewModel(typeof(ProgressBarComponentViewModel))]\nnamespace App1.Components\n{\n    public class ProgressBarComponentViewModel : NotifyPropertyBase\n    {\n        private double _progress = 0;\n\n        private bool _workComplete = false;\n\n        public double Progress\n        {\n            get => _progress;\n            set => SetProperty(ref _progress, value);\n        }\n\n        public bool WorkComplete\n        {\n            get => _workComplete;\n            set\n            {\n                SetProperty(ref _workComplete, value);\n                OnPropertyChanged(nameof(WorkNotComplete));\n            }\n        }\n\n        public bool WorkNotComplete => !WorkComplete;\n    }\n}\n"))),Object(i.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(i.b)(m.a,{src:Object(s.a)("video/component-with-ui-demo.webm"),mdxType:"DemoVideo"}))),Object(i.b)("p",null,"This example refactored the original example to use ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://autofaccn.readthedocs.io/en/latest/register/registration.html"}),"Autofac dependency injection")," to instantiate the View and ViewModel. Setting up your classes so dependencies are handled by Autofac in the constructor allows you to allow inject other Geocortex Mobile classes registered with Autofac, like how the ",Object(i.b)("inlineCode",{parentName:"p"},"UIOperations")," class is injected into the view."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Learn more of this ViewModel's use of the Geocortex Mobile helper class ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-components-viewmodel-helper-class"}),Object(i.b)("inlineCode",{parentName:"a"},"NotifyPropertyBase")),"."))),Object(i.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(i.b)("p",null,"Check out the relevant Geocortex Mobile SDK Samples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Component"}),"Custom Component"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/XamlComponent"}),"Custom Component with XAML")))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)(b.a,{mdxType:"UseCaseContainer"},Object(i.b)(l.a,{title:"Component Reference",description:"Learn more about components in Geocortex Mobile",link:Object(s.a)("docs/mobile/sdk-components-reference"),mdxType:"UseCaseCard"}),Object(i.b)(l.a,{title:"Component and Service Interactions",description:"Learn how components and services interact in Geocortex Mobile",link:Object(s.a)("docs/mobile/sdk-component-service-interactions"),mdxType:"UseCaseCard"}),Object(i.b)(l.a,{title:"Implement a Custom Service",description:"Learn how to implement a custom service using the Geocortex Mobile SDK",link:Object(s.a)("docs/mobile/sdk-services-create"),mdxType:"UseCaseCard"})))}C.isMDXComponent=!0},295:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var o=n(0),a=n.n(o),i=n(294),s=n.n(i),r=n(125),c=n.n(r);function m(e){var t=e.children;return a.a.createElement("div",{className:s()(c.a.root)},t)}},296:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(302);var o=n(301),a=n(0),i=n.n(a),s=n(294),r=n.n(s),c=n(126),m=n.n(c);function p(e){var t=e.title,n=e.description,a=e.link;return i.a.createElement("div",{className:r()("card-demo",m.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,n)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(o.a,{className:"button button--secondary button--block",to:a},"Get Started"))))}},297:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=a},298:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}},299:function(e,t,n){"use strict";n(24),n(19),n(18);var o=n(0),a=n.n(o),i=n(297);var s=function(){return Object(o.useContext)(i.a)},r=n(294),c=n.n(r),m=n(127),p=n.n(m),l=37,b=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,r=e.values,m=e.groupId,u=s(),d=u.tabGroupChoices,h=u.setTabGroupChoices,g=Object(o.useState)(i),C=g[0],O=g[1];if(null!=m){var j=d[m];null!=j&&j!==C&&O(j)}var v=function(e){O(e),null!=m&&h(m,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},r.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":C===t,className:c()("tabs__item",p.a.tabItem,{"tabs__item--active":C===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return v(t)},onClick:function(){return v(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===C}))[0]))}},322:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(0),a=n.n(o),i=n(149),s=n.n(i);function r(e){var t=e.src;return a.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,className:s.a.video},a.a.createElement("source",{src:t,type:"video/webm"}),"Your browser does not support the video tag.")}}}]);