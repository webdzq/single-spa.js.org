(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{263:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(1),o=n(9),r=(n(0),n(286)),l={id:"parcels-overview",title:"Parcels",sidebar_label:"Overview"},c=[{value:"Quick Example",id:"quick-example",children:[]},{value:"Parcel configuration",id:"parcel-configuration",children:[]},{value:"Parcel Lifecycles",id:"parcel-lifecycles",children:[{value:"Bootstrap",id:"bootstrap",children:[]},{value:"Mount",id:"mount",children:[]},{value:"Unmount",id:"unmount",children:[]},{value:"Update (optional)",id:"update-optional",children:[]}]},{value:"Example use cases",id:"example-use-cases",children:[{value:"Modals",id:"modals",children:[]}]},{value:"<code>mountRootParcel</code> vs <code>mountParcel</code>",id:"mountrootparcel-vs-mountparcel",children:[{value:"Which should I use?",id:"which-should-i-use",children:[]},{value:"How do I get the <code>mountParcel</code> API?",id:"how-do-i-get-the-mountparcel-api",children:[]}]}],i={rightToc:c},p="wrapper";function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(p,Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Parcels are an advanced feature of single-spa. Avoid using them until you have a better understanding of single-spa's registerApplication api."),"\nA single-spa parcel is a framework agnostic component. It is a chunk of functionality meant to be mounted manually by an application, without having to worry about which framework was used to implement the parcel or application. Parcels use similar methodology as registered applications but are mounted by a manual function call rather than the activity function.\nA parcel can be as large as an application or as small as a component and written in\nany language as long as it exports the correct lifecycle events. In a single-spa world, your SPA contains\nmany registered applications and potentially many parcels. Typically we recommend you mount a parcel within\nthe context of an application because the parcel will be unmounted with the application."),Object(r.b)("h2",{id:"quick-example"},"Quick Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// The parcel implementation\nconst parcelConfig = {\n  bootstrap() {\n    // one time initialization\n    return Promise.resolve()\n  },\n  mount() {\n    // use a framework to create dom nodes and mount the parcel\n    return Promise.resolve()\n  },\n  unmount() {\n    // use a framework to unmount dom nodes and perform other cleanup\n    return Promise.resolve()\n  }\n}\n\n// How to mount the parcel\nconst domElement = document.getElementById('place-in-dom-to-mount-parcel')\nconst parcelProps = {domElement, customProp1: 'foo'}\nconst parcel = singleSpa.mountRootParcel(parcelConfig, parcelProps)\n\n// The parcel is being mounted. We can wait for it to finish with the mountPromise.\nparcel.mountPromise.then(() => {\n  console.log('finished mounting parcel!')\n  // If we want to re-render the parcel, we can call the update lifecycle method, which returns a promise\n  parcelProps.customProp1 = 'bar'\n  return parcel.update(parcelProps)\n})\n.then(() => {\n  // Call the unmount lifecycle when we need the parcel to unmount. This function also returns a promise\n  return parcel.unmount()\n})\n")),Object(r.b)("h2",{id:"parcel-configuration"},"Parcel configuration"),Object(r.b)("p",null,"A parcel is just an object with 3 or 4 functions on it. When mounting a parcel, you can provide either the object itself or a loading function that asynchronously downloads the parcel object.\nEach function on a parcel object is a lifecycle method, which is a function that returns a promise. Parcels have three required lifecycle methods (bootstrap, mount, and unmount) and one optional lifecycle method (update).\nWhen implementing a parcel, it's strongly recommended that you use the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/ecosystem#help-for-frameworks"}),"lifecycle helper methods"),".\nAn example of a parcel written in React would look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// myParcel.js\nimport React from 'react'\nimport ReactDom from 'react-dom'\nimport singleSpaReact from 'single-spa-react'\nimport MyParcelComponent from './my-parcel-component.component.js'\nexport const MyParcel = singleSpaReact({\n  React,\n  ReactDom,\n  rootComponent: MyParcelComponent\n})\n\n// in this case singleSpaReact is taking our inputs and generating an object with the required lifecycles.\n")),Object(r.b)("p",null,"Then to use the parcel you just created all you need to do is use the ",Object(r.b)("inlineCode",{parentName:"p"},"Parcel")," component provided in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"single-spa-react.md#parcels"}),"single-spa-react")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// mycomponent.js\nimport Parcel from 'single-spa-react/parcel'\nimport MyParcel from './myparcel.js'\n\nexport class myComponent extends React.Component {\n  render () {\n    return (\n      <Parcel\n        config={MyParcel}\n        { /* optional props */ }\n        { /* and any extra props you want here */ }\n      />\n    )\n  }\n}\n")),Object(r.b)("p",null,"Note that in some cases the optional props are required ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"single-spa-react.md#examples"}),"(see additional examples)"),"."),Object(r.b)("h2",{id:"parcel-lifecycles"},"Parcel Lifecycles"),Object(r.b)("p",null,"Start with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api#registered-application-lifecycle"}),"applications")," to learn more about the functionality of single-spa's lifecycle methods."),Object(r.b)("h3",{id:"bootstrap"},"Bootstrap"),Object(r.b)("p",null,"This lifecycle function will be called once, right before the parcel is\nmounted for the first time."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function bootstrap(props) {\n  return Promise\n    .resolve()\n    .then(() => {\n      // This is where you do one-time initialization\n      console.log('bootstrapped!')\n    });\n}\n")),Object(r.b)("h3",{id:"mount"},"Mount"),Object(r.b)("p",null,"If the parcel is not mounted this lifecycle function is called when ever ",Object(r.b)("inlineCode",{parentName:"p"},"mountParcel")," is called. When\ncalled, this function should create DOM elements, DOM event listeners, etc. to render content to the user."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function mount(props) {\n  return Promise\n    .resolve()\n    .then(() => {\n      // This is where you tell a framework (e.g., React) to render some ui to the dom\n      console.log('mounted!')\n    });\n}\n")),Object(r.b)("h3",{id:"unmount"},"Unmount"),Object(r.b)("p",null,"This lifecycle function will be called whenever the parcel is mounted and one of the following cases is true:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"unmount()")," is called"),Object(r.b)("li",{parentName:"ul"},"The parent parcel or application is unmounted")),Object(r.b)("p",null,"When called, this function should clean up all DOM elements, DOM event listeners, leaked memory, globals,\nobservable subscriptions, etc. that were created at any point when the parcel was mounted."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function unmount(props) {\n  return Promise\n    .resolve()\n    .then(() => {\n      // This is where you tell a framework (e.g., React) to unrender some ui from the dom\n      console.log('unmounted!');\n    });\n}\n")),Object(r.b)("h3",{id:"update-optional"},"Update (optional)"),Object(r.b)("p",null,"The update lifecycle function will be called whenever the user of the parcel calls ",Object(r.b)("inlineCode",{parentName:"p"},"parcel.update()"),".\nSingle this lifecycle is optional, the user of a parcel needs to check whether the parcel has implemented the update lifecycle before attempting to make the call."),Object(r.b)("h2",{id:"example-use-cases"},"Example use cases"),Object(r.b)("h3",{id:"modals"},"Modals"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"App1")," handles everything related to contacts (highly cohesive) but somewhere in ",Object(r.b)("inlineCode",{parentName:"p"},"App2")," we need to create a contact.\nWe could do any number of things to share the functionality between application 1 and 2:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If both are written in the same framework we could export/import components."),Object(r.b)("li",{parentName:"ul"},"We could reimplement creating a contact (loss of cohesion)"),Object(r.b)("li",{parentName:"ul"},"We could use single-spa parcels.")),Object(r.b)("p",null,"Exporting a parcel from ",Object(r.b)("inlineCode",{parentName:"p"},"App1")," that wraps the createContact modal component gives us the ability to share components and behavior across disparate frameworks, without losing application cohesion.\nApp1 can export a modal as a single-spa parcel and App2 can import the parcel and use it easily. One major advantage is that in the below example\nthe parcel/modal from App1 that is being used by App2 will also be unmounted, without unmounting/mounting of App1."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// App1\nexport const AddContactParcel = {\n  bootstrap: bootstrapFn,\n  mount: mountFn,\n  unmount: unmountFn,\n}\n\n// App2\n// get the parcel configuration in this case I'm using systemJS and react\n...\ncomponentDidMount() {\n  SystemJS.import('App1').then(App1 => {\n    const domElement = document.body\n    App2MountProps.mountParcel(App1.AddContactParcel, {domElement})\n  })\n}\n...\n")),Object(r.b)("h2",{id:"mountrootparcel-vs-mountparcel"},Object(r.b)("inlineCode",{parentName:"h2"},"mountRootParcel")," vs ",Object(r.b)("inlineCode",{parentName:"h2"},"mountParcel")),Object(r.b)("p",null,"Single spa exposes two APIs for working with parcels. These API's are differentiated primarily by the context in which the parcel is created and how to access the API's"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"mountRootParcel"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"mountParcel"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"context"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"singleSpa"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"application")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"unmount condition"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"manual only"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"manual + application unmount")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"api location"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"singleSpa named export"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"provided in lifecycle prop")))),Object(r.b)("h3",{id:"which-should-i-use"},"Which should I use?"),Object(r.b)("p",null,"In general we suggest using the application-aware ",Object(r.b)("inlineCode",{parentName:"p"},"mountParcel")," API. ",Object(r.b)("inlineCode",{parentName:"p"},"mountParcel")," allows you to treat the parcel just like a component inside your application without considering what framework it was written in and being forced to remember to call unmount."),Object(r.b)("h3",{id:"how-do-i-get-the-mountparcel-api"},"How do I get the ",Object(r.b)("inlineCode",{parentName:"h3"},"mountParcel")," API?"),Object(r.b)("p",null,"In order to keep the function contextually bound to an application it is provided to the application as a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/building-applications#lifecyle-props"}),"lifecycle prop"),". You will need to store and manage that function yourself in your application. "),Object(r.b)("p",null,"Example of storing the application specific ",Object(r.b)("inlineCode",{parentName:"p"},"mountParcel")," API:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// App1\nlet mountParcel\nexport const bootstrap = [\n  (props) => {\n    mountParcel = props.mountParcel\n    return Promise.resolve()\n  },\n  // more bootstrap lifecycles if necessary\n]\n...\n")),Object(r.b)("p",null,"note: some libraries (such as react) support a framework specific context that makes it easy to store/manage. In those cases we've written some helper methods to abstract away the need to manage and store the ",Object(r.b)("inlineCode",{parentName:"p"},"mountParcel")," method."))}s.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a),r=o.a.createContext({}),l=function(e){var t=o.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=l(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=l(n),u=a,m=s[c+"."+u]||s[u]||p[u]||r;return n?o.a.createElement(m,Object.assign({},{ref:t},i,{components:n})):o.a.createElement(m,Object.assign({},{ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[i]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<r;u++)l[u]=n[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);