"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59671],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},59881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Intro",sidebar_position:1},i="Getting started with Nevermore",l={unversionedId:"intro",id:"intro",title:"Intro",description:"Here are some quick links to get started with Nevermore:",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/NevermoreEngine/docs/intro",draft:!1,editUrl:"https://github.com/Quenty/NevermoreEngine/edit/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Intro",sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Install",permalink:"/NevermoreEngine/docs/install"}},s={},p=[{value:"Why should I use Nevermore?",id:"why-should-i-use-nevermore",level:2},{value:"Nevermore has significant packages that have had cultural impact",id:"nevermore-has-significant-packages-that-have-had-cultural-impact",level:2},{value:"Nevermore can by used in many cases",id:"nevermore-can-by-used-in-many-cases",level:2},{value:"Why NPM or a package manager at all?",id:"why-npm-or-a-package-manager-at-all",level:2},{value:"Why a mono repo?",id:"why-a-mono-repo",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started-with-nevermore"},"Getting started with Nevermore"),(0,n.kt)("p",null,"Here are some quick links to get started with Nevermore:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/install"},"Installation guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/AccelTween"},"API docs"))),(0,n.kt)("p",null,"Nevermore is a portable ModuleScript loader for Roblox, as well as the name for the collection of utility libraries that come with it. These libraries are separated into packages that can be consumed individually using npm."),(0,n.kt)("h2",{id:"why-should-i-use-nevermore"},"Why should I use Nevermore?"),(0,n.kt)("p",null,"Nevermore provides a variety of easy-to-use utility modules that provide a shared language to build a game with. This includes both conceptual modules, as well as modules for common things you may find difficult to program in a game. Nevermore will not make a game for you, but it can provide or deeply accelerate the creation of a game on Roblox, allowing you to focus on important parts of making a game, such as game design, progression, user experience, and more."),(0,n.kt)("h2",{id:"nevermore-has-significant-packages-that-have-had-cultural-impact"},"Nevermore has significant packages that have had cultural impact"),(0,n.kt)("p",null,"Nevermore has had significant cultural impact. There are some packages this repository is known for containing, and have had significant cultural impact on Roblox."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/Maid"},"Maid")," - Utility object to clean up connections"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/Rx"},"Rx")," - Reactive programming implementation"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/Binder"},"Binder")," - Bind Roblox objects and instances"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/Spring"},"Spring")," and ",(0,n.kt)("a",{parentName:"li",href:"/api/AccelTween"},"AccelTween")," - Animation objects"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/Signal"},"Signal")," - Signal implementation"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/Promise"},"Promise")," - Promise implementation on Roblox"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/Octree"},"Octree")," - Spatial data structure that helps with performance"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/Blend"},"Blend")," - Declarative UI framework that makes animations and state-management easy"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/DataStore"},"DataStore")," - Battle-tested datastore wrapper"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/CameraStackService"},"Camera")," - Layered camera system that interops with Roblox's cameras")),(0,n.kt)("h2",{id:"nevermore-can-by-used-in-many-cases"},"Nevermore can by used in many cases"),(0,n.kt)("p",null,"While Nevermore was originally designed to make games, in general Nevermore is now a collection of utility libraries that can be used in the following. These use cases have been carefully battle tested. Nevermore is in many top games, gamejams, plugins, and other components across Roblox."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Top Games")," - Both built originally with Nevermore, or games that use other systems and frameworks but may want to include Nevermore"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Plugins")," - Roblox Studio plugins that want to use UI, techniques, and other approaches."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Stand alone models")," - Models that need to operate but still may want to consume dependencies.")),(0,n.kt)("p",null,"To learn more about the design philosophy of Nevermore see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/design"},"Design")," guide."),(0,n.kt)("h2",{id:"why-npm-or-a-package-manager-at-all"},"Why NPM or a package manager at all?"),(0,n.kt)("p",null,"NPM is a package manager originally intended for JavaScript and node. The alternative option is Wally, Roblox's packages or another package manager. NPM was selected after careful consideration. NPM works best for now, because it has a significant amount of CI/CD pipeline support for monorepos. It works well with the existing Roblox Typescript community, and it was easy to refactor. A package manager is very important because it allows us to consume code without breaking things. This allows for code reuse."),(0,n.kt)("p",null,"There is no silver bullet for code reuse, but it is better to pay for the cost of code-reuse through the complexity of a package manager, than it is to pay for the cost of maintaining multiple codebases. Nevermore's code-reuse strategy allows for us to invest deeper in marginal systems and bring up the quality of all games at once."),(0,n.kt)("p",null,"NPM helps deduplicate dependencies and handle conflicts with dependencies."),(0,n.kt)("h2",{id:"why-a-mono-repo"},"Why a mono repo?"),(0,n.kt)("p",null,"A mono-repo is a repository with many packages in it. Nevermore is a mono-repo."))}m.isMDXComponent=!0}}]);