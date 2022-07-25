"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[628],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7073:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(9496),r=n(1626),l="tabItem_XTJJ";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},7632:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(2848),r=n(9496),l=n(8745),o=n(2586),s=n(1060),i=n(2876),u=n(1626),p="tabList_ECWZ",d="tabItem_T58J";function c(e){var t,n,l,c=e.lazy,m=e.block,f=e.defaultValue,v=e.values,h=e.groupId,b=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),x=(0,o.l)(k,(function(e,t){return e.value===t.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),T=N.tabGroupChoices,Z=N.setTabGroupChoices,j=(0,r.useState)(y),w=j[0],O=j[1],E=[],S=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=T[h];null!=C&&C!==w&&k.some((function(e){return e.value===C}))&&O(C)}var I=function(e){var t=e.currentTarget,n=E.indexOf(t),a=k[n].value;a!==w&&(S(t),O(a),null!=h&&Z(h,a))},z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},b)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return E.push(e)},onKeyDown:z,onFocus:I,onClick:I},l,{className:(0,u.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},9812:function(e,t){t.Z="0.18.9"},4146:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return f}});var a=n(2848),r=n(9213),l=(n(9496),n(9613)),o=n(9812),s=n(7632),i=n(7073),u=["components"],p={sidebar_position:4,sidebar_custom_props:{summary:"Server-side and other frameworks using NodeJS modules"}},d="NodeJS",c={unversionedId:"installation/nodejs",id:"installation/nodejs",title:"NodeJS",description:"Tarballs are available on .",source:"@site/docs/02-installation/04-nodejs.md",sourceDirName:"02-installation",slug:"/installation/nodejs",permalink:"/docs/installation/nodejs",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_custom_props:{summary:"Server-side and other frameworks using NodeJS modules"}},sidebar:"tutorialSidebar",previous:{title:"Deno",permalink:"/docs/installation/deno"},next:{title:"ExtendScript",permalink:"/docs/installation/extendscript"}},m={},f=[{value:"Installation",id:"installation",level:2},{value:"Vendoring",id:"vendoring",level:3},{value:"Usage",id:"usage",level:2},{value:"CommonJS <code>require</code>",id:"commonjs-require",level:4},{value:"ESM <code>import</code>",id:"esm-import",level:4}],v={toc:f};function h(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nodejs"},"NodeJS"),(0,l.kt)("p",null,"Tarballs are available on ",(0,l.kt)("a",{parentName:"p",href:"https://cdn.sheetjs.com"},"https://cdn.sheetjs.com"),"."),(0,l.kt)("div",null,"Each individual version can be referenced using a similar URL pattern.",(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://cdn.sheetjs.com/xlsx-"+o.Z+"/xlsx-"+o.Z+".tgz"},"https://cdn.sheetjs.com/xlsx-",o.Z,"/xlsx-",o.Z,".tgz")," is the URL for ",o.Z),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Tarballs can be directly installed using a package manager:"),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i --save https://cdn.sheetjs.com/xlsx-"+o.Z+"/xlsx-"+o.Z+".tgz"))),(0,l.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm install https://cdn.sheetjs.com/xlsx-"+o.Z+"/xlsx-"+o.Z+".tgz"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add https://cdn.sheetjs.com/xlsx-"+o.Z+"/xlsx-"+o.Z+".tgz")))),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Older releases are technically available on the public npm registry as ",(0,l.kt)("inlineCode",{parentName:"p"},"xlsx"),",\nbut the registry is out of date.  The latest version on that registry is 0.18.5"),(0,l.kt)("p",{parentName:"div"},"This is a known registry bug"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"https://cdn.sheetjs.com/"},"https://cdn.sheetjs.com/")," is the authoritative source for SheetJS scripts."),(0,l.kt)("p",{parentName:"div"},"For existing projects, the easiest approach is to uninstall and reinstall:"),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm rm --save xlsx\n$ npm i --save file:vendor/xlsx-"+o.Z+".tgz"))),(0,l.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm rm xlsx\n$ pnpm install file:vendor/xlsx-"+o.Z+".tgz"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn remove xlsx\n$ yarn add file:vendor/xlsx-"+o.Z+".tgz")))))),(0,l.kt)("h3",{id:"vendoring"},"Vendoring"),(0,l.kt)("p",null,'For general stability, "vendoring" modules is the recommended approach:'),(0,l.kt)("div",null,"1) Download the tarball (",(0,l.kt)("code",{parentName:"pre"},"xlsx-",o.Z,".tgz"),") for the desired version. The current version is available at ",(0,l.kt)("a",{href:"https://cdn.sheetjs.com/xlsx-"+o.Z+"/xlsx-"+o.Z+".tgz"},"https://cdn.sheetjs.com/xlsx-",o.Z,"/xlsx-",o.Z,".tgz")),(0,l.kt)("br",null),(0,l.kt)("p",null,"2) Create a ",(0,l.kt)("inlineCode",{parentName:"p"},"vendor")," subdirectory at the root of your project and move the\ntarball to that folder.  Add it to your project repository."),(0,l.kt)("p",null,"3) Install the tarball using a package manager:"),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i --save file:vendor/xlsx-"+o.Z+".tgz"))),(0,l.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm install file:vendor/xlsx-"+o.Z+".tgz"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add  file:vendor/xlsx-"+o.Z+".tgz")))),(0,l.kt)("p",null,"The package will be installed and accessible as ",(0,l.kt)("inlineCode",{parentName:"p"},"xlsx"),"."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h4",{id:"commonjs-require"},"CommonJS ",(0,l.kt)("inlineCode",{parentName:"h4"},"require")),(0,l.kt)("p",null,"By default, the module supports ",(0,l.kt)("inlineCode",{parentName:"p"},"require")," and it will automatically add support\nfor streams and filesystem access:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'var XLSX = require("xlsx");\n')),(0,l.kt)("h4",{id:"esm-import"},"ESM ",(0,l.kt)("inlineCode",{parentName:"h4"},"import")),(0,l.kt)("p",null,"The module also ships with ",(0,l.kt)("inlineCode",{parentName:"p"},"xlsx.mjs")," for use with ",(0,l.kt)("inlineCode",{parentName:"p"},"import"),".  The ",(0,l.kt)("inlineCode",{parentName:"p"},"mjs")," version\ndoes not automatically load native node modules, so they must be added manually:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import * as XLSX from 'xlsx/xlsx.mjs';\n\n/* load 'fs' for readFile and writeFile support */\nimport * as fs from 'fs';\nXLSX.set_fs(fs);\n\n/* load 'stream' for stream support */\nimport { Readable } from 'stream';\nXLSX.stream.set_readable(Readable);\n\n/* load the codepage support library for extended support with older formats  */\nimport * as cpexcel from 'xlsx/dist/cpexcel.full.mjs';\nXLSX.set_cptable(cpexcel);\n")))}h.isMDXComponent=!0}}]);