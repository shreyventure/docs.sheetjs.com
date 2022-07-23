"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2700],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7073:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(9496),r=n(1626),l="tabItem_XTJJ";function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},7632:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(2848),r=n(9496),l=n(8745),s=n(2586),o=n(1060),i=n(2876),p=n(1626),u="tabList_ECWZ",d="tabItem_T58J";function m(e){var t,n,l,m=e.lazy,c=e.block,h=e.defaultValue,k=e.values,b=e.groupId,w=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=k?k:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),x=(0,s.l)(f,(function(e,t){return e.value===t.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===h?h:null!=(t=null!=h?h:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.U)(),N=y.tabGroupChoices,j=y.setTabGroupChoices,T=(0,r.useState)(v),Z=T[0],_=T[1],S=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var E=N[b];null!=E&&E!==Z&&f.some((function(e){return e.value===E}))&&_(E)}var I=function(e){var t=e.currentTarget,n=S.indexOf(t),a=f[n].value;a!==Z&&(C(t),_(a),null!=b&&j(b,a))},z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var r=S.indexOf(e.currentTarget)-1;n=S[r]||S[S.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,p.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":c},w)},f.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:function(e){return S.push(e)},onKeyDown:z,onFocus:I,onClick:I},l,{className:(0,p.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":Z===t})}),null!=n?n:t)}))),m?(0,r.cloneElement)(g.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function c(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},9812:function(e,t){t.Z="0.18.9"},561:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return h}});var a=n(2848),r=n(9213),l=(n(9496),n(9613)),s=n(9812),o=n(7632),i=n(7073),p=["components"],u={sidebar_position:9,title:"Bundlers"},d=void 0,m={unversionedId:"getting-started/demos/bundler",id:"getting-started/demos/bundler",title:"Bundlers",description:"SheetJS predates ECMAScript modules and bundler tools like Webpack. As best",source:"@site/docs/04-getting-started/03-demos/09-bundler.md",sourceDirName:"04-getting-started/03-demos",slug:"/getting-started/demos/bundler",permalink:"/docs/getting-started/demos/bundler",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Bundlers"},sidebar:"tutorialSidebar",previous:{title:"Typed Arrays and ML",permalink:"/docs/getting-started/demos/ml"},next:{title:"Databases",permalink:"/docs/getting-started/demos/database"}},c={},h=[{value:"Browserify",id:"browserify",level:2},{value:"Bun",id:"bun",level:2},{value:"ESBuild",id:"esbuild",level:2},{value:"Parcel",id:"parcel",level:2}],k={toc:h};function b(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"SheetJS predates ECMAScript modules and bundler tools like Webpack. As best\npractices have evolved, stress testing SheetJS libraries have revealed bugs in\nthe respective bundlers.  This demo collects various notes and provides basic\nexamples."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Issues should be reported to the respective bundler projects.  Typically it is\nconsidered a bundler bug if the tool cannot properly handle JS libraries."))),(0,l.kt)("h2",{id:"browserify"},"Browserify"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"browserify"),' is compatible with the library and should "just work" with the\n',(0,l.kt)("inlineCode",{parentName:"p"},"require")," form in a main page or in a web worker:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'var XLSX = require("xlsx");\n// ... use XLSX ...\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../../installation/nodejs"},"After installing the module"),", bundling is easy:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"browserify app.js > browserify.js\nuglifyjs browserify.js > browserify.min.js\n")),(0,l.kt)("p",null,"Web Worker scripts can be bundled using the same approach."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Complete Example")," (click to show)"),(0,l.kt)("p",null,"1) Install the tarball using a package manager:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install --save https://cdn.sheetjs.com/xlsx-"+s.Z+"/xlsx-"+s.Z+".tgz"))),(0,l.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm install --save https://cdn.sheetjs.com/xlsx-"+s.Z+"/xlsx-"+s.Z+".tgz"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add --save https://cdn.sheetjs.com/xlsx-"+s.Z+"/xlsx-"+s.Z+".tgz")))),(0,l.kt)("p",null,"2) Download the following files:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"pathname:///browserify/app.js"},(0,l.kt)("inlineCode",{parentName:"a"},"app.js"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"pathname:///browserify/index.html"},(0,l.kt)("inlineCode",{parentName:"a"},"index.html"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"pathname:///browserify/xlsxworker.js"},(0,l.kt)("inlineCode",{parentName:"a"},"xlsxworker.js")))),(0,l.kt)("p",null,"3) Bundle the scripts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx browserify app.js > browserify.js\nnpx browserify xlsxworker.js > worker.js\n")),(0,l.kt)("p",null,"4) Spin up a local web server:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npx http-server \n")),(0,l.kt)("p",null,"5) Access the site ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/")," and use the file input element to\nselect a spreadsheet.")),(0,l.kt)("h2",{id:"bun"},"Bun"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bun bun")," is capable of optimizing imported libraries in ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),".  In\nlocal testing, a bundled script can save tens of milliseconds per run."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Complete Example")," (click to show)"),(0,l.kt)("p",null,"1) Install the tarball using a package manager:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install --save https://cdn.sheetjs.com/xlsx-"+s.Z+"/xlsx-"+s.Z+".tgz"))),(0,l.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm install --save https://cdn.sheetjs.com/xlsx-"+s.Z+"/xlsx-"+s.Z+".tgz"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add --save https://cdn.sheetjs.com/xlsx-"+s.Z+"/xlsx-"+s.Z+".tgz")))),(0,l.kt)("p",null,"2) Save the following script to ",(0,l.kt)("inlineCode",{parentName:"p"},"bun.js"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="bun.js"',title:'"bun.js"'},'// highlight-next-line\nimport * as XLSX from \'xlsx/xlsx.mjs\';\n// highlight-next-line\nimport * as fs from \'fs\';\n// highlight-next-line\nXLSX.set_fs(fs);\n\n/* fetch JSON data and parse */\nconst url = "https://sheetjs.com/executive.json";\nconst raw_data = await (await fetch(url)).json();\n\n/* filter for the Presidents */\nconst prez = raw_data.filter((row) => row.terms.some((term) => term.type === "prez"));\n\n/* flatten objects */\nconst rows = prez.map((row) => ({\n  name: row.name.first + " " + row.name.last,\n  birthday: row.bio.birthday\n}));\n\n/* generate worksheet and workbook */\nconst worksheet = XLSX.utils.json_to_sheet(rows);\nconst workbook = XLSX.utils.book_new();\nXLSX.utils.book_append_sheet(workbook, worksheet, "Dates");\n\n/* fix headers */\nXLSX.utils.sheet_add_aoa(worksheet, [["Name", "Birthday"]], { origin: "A1" });\n\n/* calculate column width */\nconst max_width = rows.reduce((w, r) => Math.max(w, r.name.length), 10);\nworksheet["!cols"] = [ { wch: max_width } ];\n\n/* create an XLSX file and try to save to Presidents.xlsx */\nXLSX.writeFile(workbook, "Presidents.xlsx");\n')),(0,l.kt)("p",null,"3) Bundle the script with ",(0,l.kt)("inlineCode",{parentName:"p"},"bun bun"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bun bun bun.js\n")),(0,l.kt)("p",null,"This procedure will generate ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules.bun"),"."),(0,l.kt)("p",null,"4) Run the script"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bun bun.js\n"))),(0,l.kt)("h2",{id:"esbuild"},"ESBuild"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"xlsx.mjs")," source file are written in a subset of ES6 that ESBuild\nunderstands and is able to transpile down for older browsers."),(0,l.kt)("p",null,"Both the ",(0,l.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"browser")," platforms work out of the box."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Complete Example")," (click to show)"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"browser",label:"Browser",mdxType:"TabItem"},(0,l.kt)("p",null,"1) Install the tarball using a package manager:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install --save https://cdn.sheetjs.com/xlsx-"+s.Z+"/xlsx-"+s.Z+".tgz"))),(0,l.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm install --save https://cdn.sheetjs.com/xlsx-"+s.Z+"/xlsx-"+s.Z+".tgz"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add --save https://cdn.sheetjs.com/xlsx-"+s.Z+"/xlsx-"+s.Z+".tgz")))),(0,l.kt)("p",null,"2) Save the following to ",(0,l.kt)("inlineCode",{parentName:"p"},"esbrowser.js"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="esbrowser.js"',title:'"esbrowser.js"'},'// highlight-next-line\nimport { set_fs, utils, version, writeFile } from \'xlsx/xlsx.mjs\';\n\n(async() => {\n/* fetch JSON data and parse */\nconst url = "https://sheetjs.com/executive.json";\nconst raw_data = await (await fetch(url)).json();\n\n/* filter for the Presidents */\nconst prez = raw_data.filter(row => row.terms.some(term => term.type === "prez"));\n\n/* flatten objects */\nconst rows = prez.map(row => ({\n  name: row.name.first + " " + row.name.last,\n  birthday: row.bio.birthday\n}));\n\n/* generate worksheet and workbook */\nconst worksheet = utils.json_to_sheet(rows);\nconst workbook = utils.book_new();\nutils.book_append_sheet(workbook, worksheet, "Dates");\n\n/* fix headers */\nutils.sheet_add_aoa(worksheet, [["Name", "Birthday"]], { origin: "A1" });\n\n/* calculate column width */\nconst max_width = rows.reduce((w, r) => Math.max(w, r.name.length), 10);\nworksheet["!cols"] = [ { wch: max_width } ];\n\n/* create an XLSX file and try to save to Presidents.xlsx */\nwriteFile(workbook, "Presidents.xlsx");\n})();\n')),(0,l.kt)("p",null,"3) Create a small HTML page that loads the script.  Save to ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<body><script src="esb.browser.js"><\/script></body>\n')),(0,l.kt)("p",null,"4) Create bundle:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx esbuild esbrowser.js --bundle --outfile=esb.browser.js\n")),(0,l.kt)("p",null,"5) Start a local HTTP server, then go to http://localhost:8080/"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx http-server .\n"))),(0,l.kt)(i.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,l.kt)("p",null,"1) Install the tarball using a package manager:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install --save https://cdn.sheetjs.com/xlsx-"+s.Z+"/xlsx-"+s.Z+".tgz"))),(0,l.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm install --save https://cdn.sheetjs.com/xlsx-"+s.Z+"/xlsx-"+s.Z+".tgz"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add --save https://cdn.sheetjs.com/xlsx-"+s.Z+"/xlsx-"+s.Z+".tgz")))),(0,l.kt)("p",null,"2) Save the following to ",(0,l.kt)("inlineCode",{parentName:"p"},"esbnode.js"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="esbnode.js"',title:'"esbnode.js"'},'// highlight-next-line\nimport { set_fs, utils, version, writeFile } from \'xlsx/xlsx.mjs\';\n// highlight-next-line\nimport * as fs from \'fs\';\n// highlight-next-line\nset_fs(fs);\n\n(async() => {\n/* fetch JSON data and parse */\nconst url = "https://sheetjs.com/executive.json";\nconst raw_data = await (await fetch(url)).json();\n\n/* filter for the Presidents */\nconst prez = raw_data.filter(row => row.terms.some(term => term.type === "prez"));\n\n/* flatten objects */\nconst rows = prez.map(row => ({\n  name: row.name.first + " " + row.name.last,\n  birthday: row.bio.birthday\n}));\n\n/* generate worksheet and workbook */\nconst worksheet = utils.json_to_sheet(rows);\nconst workbook = utils.book_new();\nutils.book_append_sheet(workbook, worksheet, "Dates");\n\n/* fix headers */\nutils.sheet_add_aoa(worksheet, [["Name", "Birthday"]], { origin: "A1" });\n\n/* calculate column width */\nconst max_width = rows.reduce((w, r) => Math.max(w, r.name.length), 10);\nworksheet["!cols"] = [ { wch: max_width } ];\n\n/* create an XLSX file and try to save to Presidents.xlsx */\nwriteFile(workbook, "Presidents.xlsx");\n})();\n')),(0,l.kt)("p",null,"3) Create bundle:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx esbuild esbnode.js --bundle --platform=node --outfile=esb.node.js\n")),(0,l.kt)("p",null,"4) Run the bundle:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"node esb.node.js\n"))))),(0,l.kt)("h2",{id:"parcel"},"Parcel"),(0,l.kt)("p",null,"Parcel Bundler should play nice with SheetJS out of the box."),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Parcel Bug")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Errors of the form ",(0,l.kt)("inlineCode",{parentName:"p"},"Could not statically evaluate fs call")," stem from a\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/parcel-bundler/parcel/pull/523"},"parcel bug"),". Upgrade to\nParcel version 1.5.0 or later."))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Complete Example")," (click to show)"),(0,l.kt)("p",null,"This demo follows the ",(0,l.kt)("a",{parentName:"p",href:"../../example"},"Presidents Example"),"."),(0,l.kt)("p",null,"1) Save the following to ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<body>\n<h3>SheetJS <span id="vers"></span> export demo</h3>\n<button id="xport">Click to Export!</button>\n\x3c!-- the script tag must be marked as `type="module"` --\x3e\n\x3c!-- highlight-next-line --\x3e\n<script type="module">\n// ESM-style import from "xlsx"\n// highlight-next-line\nimport { utils, version, writeFile } from \'xlsx\';\n\ndocument.getElementById("vers").innerText = version;\ndocument.getElementById("xport").onclick = async() => {\n  /* fetch JSON data and parse */\n  const url = "https://sheetjs.com/executive.json";\n  const raw_data = await (await fetch(url)).json();\n\n  /* filter for the Presidents */\n  const prez = raw_data.filter(row => row.terms.some(term => term.type === "prez"));\n\n  /* flatten objects */\n  const rows = prez.map(row => ({\n    name: row.name.first + " " + row.name.last,\n    birthday: row.bio.birthday\n  }));\n\n  /* generate worksheet and workbook */\n  const worksheet = utils.json_to_sheet(rows);\n  const workbook = utils.book_new();\n  utils.book_append_sheet(workbook, worksheet, "Dates");\n\n  /* fix headers */\n  utils.sheet_add_aoa(worksheet, [["Name", "Birthday"]], { origin: "A1" });\n\n  /* calculate column width */\n  const max_width = rows.reduce((w, r) => Math.max(w, r.name.length), 10);\n  worksheet["!cols"] = [ { wch: max_width } ];\n\n  /* create an XLSX file and try to save to Presidents.xlsx */\n  writeFile(workbook, "Presidents.xlsx");\n};\n<\/script>\n<body>\n')),(0,l.kt)("p",null,"2) Install the SheetJS node module:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install --save https://cdn.sheetjs.com/xlsx-"+s.Z+"/xlsx-"+s.Z+".tgz"))),(0,l.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm install --save https://cdn.sheetjs.com/xlsx-"+s.Z+"/xlsx-"+s.Z+".tgz"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add --save https://cdn.sheetjs.com/xlsx-"+s.Z+"/xlsx-"+s.Z+".tgz")))),(0,l.kt)("p",null,"3) Run the Parcel CLI tool:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx -y parcel index.html\n")),(0,l.kt)("p",null,"4) Access the page listed in the output (typically ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:1234"),') and\nclick the "Click to Export!" button to generate a file.')))}b.isMDXComponent=!0}}]);