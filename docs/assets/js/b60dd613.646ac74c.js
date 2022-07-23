"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5032],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7073:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(9496),a=n(1626),o="tabItem_XTJJ";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},7632:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(2848),a=n(9496),o=n(8745),l=n(2586),s=n(1060),i=n(2876),u=n(1626),c="tabList_ECWZ",p="tabItem_T58J";function d(e){var t,n,o,d=e.lazy,m=e.block,b=e.defaultValue,f=e.values,v=e.groupId,h=e.className,w=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:w.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===b?b:null!=(t=null!=b?b:null==(n=w.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=w[0])?void 0:o.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,s.U)(),S=x.tabGroupChoices,E=x.setTabGroupChoices,j=(0,a.useState)(y),N=j[0],L=j[1],T=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var X=S[v];null!=X&&X!==N&&g.some((function(e){return e.value===X}))&&L(X)}var C=function(e){var t=e.currentTarget,n=T.indexOf(t),r=g[n].value;r!==N&&(O(t),L(r),null!=v&&E(v,r))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,u.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},h)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return T.push(e)},onKeyDown:_,onFocus:C,onClick:C},o,{className:(0,u.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),d?(0,a.cloneElement)(w.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},w.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},2656:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(2848),a=n(9213),o=(n(9496),n(9613)),l=n(7632),s=n(7073),i=["components"],u={sidebar_position:9,title:"Databases"},c=void 0,p={unversionedId:"getting-started/demos/database",id:"getting-started/demos/database",title:"Databases",description:"SQLite",source:"@site/docs/04-getting-started/03-demos/10-database.md",sourceDirName:"04-getting-started/03-demos",slug:"/getting-started/demos/database",permalink:"/docs/getting-started/demos/database",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Databases"},sidebar:"tutorialSidebar",previous:{title:"Bundlers",permalink:"/docs/getting-started/demos/bundler"},next:{title:"Interface Summary",permalink:"/docs/interface"}},d={},m=[{value:"SQLite",id:"sqlite",level:2}],b={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"sqlite"},"SQLite"),(0,o.kt)("p",null,"Most platforms offer a simple way to query ",(0,o.kt)("inlineCode",{parentName:"p"},".sqlite")," databases."),(0,o.kt)("p",null,"The following example shows how to query for each table in an SQLite database,\nquery for the data for each table, add each non-empty table to a workbook, and\nexport as XLSX."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/jpwhite3/northwind-SQLite3/raw/master/Northwind_large.sqlite.zip"},"The Northwind database is available in SQLite form"),".\nDownload and expand the zip archive to reveal ",(0,o.kt)("inlineCode",{parentName:"p"},"Northwind_large.sqlite")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,o.kt)("p",null,"1) Install the dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i --save https://cdn.sheetjs.com/xlsx-latest/xlsx-latest.tgz better-sqlite3\n")),(0,o.kt)("p",null,"2) Save the following to ",(0,o.kt)("inlineCode",{parentName:"p"},"node.mjs"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="node.mjs"',title:'"node.mjs"'},'/* Load SQLite3 connector library */\nimport Database from "better-sqlite3";\n\n/* Load SheetJS library */\nimport * as XLSX from \'xlsx/xlsx.mjs\';\nimport * as fs from \'fs\';\nXLSX.set_fs(fs);\n\n/* Initialize database */\nvar db = Database("Northwind_large.sqlite");\n\n/* Create new workbook */\nvar wb = XLSX.utils.book_new();\n\n/* Get list of table names */\nvar sql = db.prepare("SELECT name FROM sqlite_master WHERE type=\'table\'");\nvar result = sql.all();\n\n/* Loop across each name */\nresult.forEach(function(row) {\n  /* Get first 100K rows */\n    var aoo = db.prepare("SELECT * FROM \'" + row.name + "\' LIMIT 100000").all();\n    if(aoo.length > 0) {\n    /* Create Worksheet from the row objects */\n    var ws = XLSX.utils.json_to_sheet(aoo, {dense: true});\n    /* Add to Workbook */\n    XLSX.utils.book_append_sheet(wb, ws, row.name);\n  }\n});\n\n/* Write File */\nXLSX.writeFile(wb, "node.xlsx");\n')),(0,o.kt)("p",null,"3) Run ",(0,o.kt)("inlineCode",{parentName:"p"},"node node.mjs")," and open ",(0,o.kt)("inlineCode",{parentName:"p"},"node.xlsx"))),(0,o.kt)(s.Z,{value:"bun",label:"Bun",mdxType:"TabItem"},(0,o.kt)("p",null,"1) Install the dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i --save https://cdn.sheetjs.com/xlsx-latest/xlsx-latest.tgz\n")),(0,o.kt)("p",null,"2) Save the following to ",(0,o.kt)("inlineCode",{parentName:"p"},"bun.mjs"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="bun.mjs"',title:'"bun.mjs"'},'/* Load SQLite3 connector library */\nimport { Database } from "bun:sqlite";\n\n/* Load SheetJS library */\nimport * as XLSX from \'xlsx/xlsx.mjs\';\nimport * as fs from \'fs\';\nXLSX.set_fs(fs);\n\n/* Initialize database */\nvar db = Database.open("Northwind_large.sqlite");\n\n/* Create new workbook */\nvar wb = XLSX.utils.book_new();\n\n/* Get list of table names */\nvar sql = db.prepare("SELECT name FROM sqlite_master WHERE type=\'table\'");\nvar result = sql.all();\n\n/* Loop across each name */\nresult.forEach(function(row) {\n  /* Get first 100K rows */\n    var aoo = db.prepare("SELECT * FROM \'" + row.name + "\' LIMIT 100000").all();\n    if(aoo.length > 0) {\n    /* Create Worksheet from the row objects */\n    var ws = XLSX.utils.json_to_sheet(aoo, {dense: true});\n    /* Add to Workbook */\n    XLSX.utils.book_append_sheet(wb, ws, row.name);\n  }\n});\n\n/* Write File */\nXLSX.writeFile(wb, "bun.xlsx");\n')),(0,o.kt)("p",null,"3) Run ",(0,o.kt)("inlineCode",{parentName:"p"},"bun bun.mjs")," and open ",(0,o.kt)("inlineCode",{parentName:"p"},"bun.xlsx")))))}f.isMDXComponent=!0}}]);