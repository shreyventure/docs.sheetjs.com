"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[924],{9613:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return u}});var a=n(9496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=d(n),u=r,N=k["".concat(p,".").concat(u)]||k[u]||s[u]||i;return n?a.createElement(N,l(l({ref:e},m),{},{components:n})):a.createElement(N,l({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8264:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(9496),r=n(1626),i="tabItem_ZP9l";function l(t){var e=t.children,n=t.hidden,l=t.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},e)}},114:function(t,e,n){n.d(e,{Z:function(){return u}});var a=n(2848),r=n(9496),i=n(3026),l=n(8658),o=n(1823),p=n(4807),d=n(1626),m="tabList_XleC",s="tabItem_hpFr";function k(t){var e,n,i,k=t.lazy,u=t.block,N=t.defaultValue,g=t.values,c=t.groupId,f=t.className,h=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:h.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),y=(0,l.l)(b,(function(t,e){return t.value===e.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var C=null===N?N:null!=(e=null!=N?N:null==(n=h.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(i=h[0])?void 0:i.props.value;if(null!==C&&!b.some((function(t){return t.value===C})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+C+'" but none of its children has the corresponding value. Available values are: '+b.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),x=w.tabGroupChoices,v=w.setTabGroupChoices,S=(0,r.useState)(C),X=S[0],T=S[1],L=[],E=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var O=x[c];null!=O&&O!==X&&b.some((function(t){return t.value===O}))&&T(O)}var F=function(t){var e=t.currentTarget,n=L.indexOf(e),a=b[n].value;a!==X&&(E(e),T(a),null!=c&&v(c,a))},Z=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=L.indexOf(t.currentTarget)+1;n=L[a]||L[0];break;case"ArrowLeft":var r=L.indexOf(t.currentTarget)-1;n=L[r]||L[L.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,d.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":u},f)},b.map((function(t){var e=t.value,n=t.label,i=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:X===e?0:-1,"aria-selected":X===e,key:e,ref:function(t){return L.push(t)},onKeyDown:Z,onFocus:F,onClick:F},i,{className:(0,d.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":X===e})}),null!=n?n:e)}))),k?(0,r.cloneElement)(h.filter((function(t){return t.props.value===X}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==X})}))))}function u(t){var e=(0,i.Z)();return r.createElement(k,(0,a.Z)({key:String(e)},t))}},4154:function(t,e){e.Z="0.18.8"},6219:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return N}});var a=n(2848),r=n(9213),i=(n(9496),n(9613)),l=n(4154),o=n(114),p=n(8264),d=["components"],m={sidebar_position:7,hide_table_of_contents:!0,title:"Writing Files"},s="Writing Options",k={unversionedId:"api/write-options",id:"api/write-options",title:"Writing Files",description:"XLSX.write(wb, write_opts) attempts to write the workbook wb",source:"@site/docs/08-api/07-write-options.md",sourceDirName:"08-api",slug:"/api/write-options",permalink:"/docs/api/write-options",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,hide_table_of_contents:!0,title:"Writing Files"},sidebar:"tutorialSidebar",previous:{title:"Reading Files",permalink:"/docs/api/parse-options"},next:{title:"Utility Functions",permalink:"/docs/api/utilities"}},u={},N=[{value:"Supported Output Formats",id:"supported-output-formats",level:2},{value:"Output Type",id:"output-type",level:2}],g={toc:N};function c(t){var e=t.components,n=(0,r.Z)(t,d);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"writing-options"},"Writing Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.write(wb, write_opts)")," attempts to write the workbook ",(0,i.kt)("inlineCode",{parentName:"p"},"wb")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.writeFile(wb, filename, write_opts)")," attempts to write ",(0,i.kt)("inlineCode",{parentName:"p"},"wb")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"filename"),".\nIn browser-based environments, it will attempt to force a client-side download."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.writeFileAsync(filename, wb, o, cb)")," attempts to write ",(0,i.kt)("inlineCode",{parentName:"p"},"wb")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"filename"),".\nIf ",(0,i.kt)("inlineCode",{parentName:"p"},"o")," is omitted, the writer will use the third argument as the callback."),(0,i.kt)("p",null,"The write functions accept an options argument:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Option Name"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Output data encoding (see Output Type below)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cellDates")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Store dates as type ",(0,i.kt)("inlineCode",{parentName:"td"},"d")," (default is ",(0,i.kt)("inlineCode",{parentName:"td"},"n"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bookSST")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Generate Shared String Table **")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bookType")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},'"xlsx"')),(0,i.kt)("td",{parentName:"tr",align:"left"},"Type of Workbook (see below for supported formats)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sheet")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},'""')),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of Worksheet for single-sheet formats **")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"compression")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Use ZIP compression for ZIP-based formats **")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Props")),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Override workbook properties when writing **")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"themeXLSX")),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Override theme XML when writing XLSX/XLSB/XLSM **")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ignoreEC")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},'Suppress "number as text" errors **')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"numbers")),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Payload for NUMBERS export **")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bookSST")," is slower and more memory intensive, but has better compatibility\nwith older versions of iOS Numbers"),(0,i.kt)("li",{parentName:"ul"},"The raw data is the only thing guaranteed to be saved.  Features not described\nin this README may not be serialized."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cellDates")," only applies to XLSX output and is not guaranteed to work with\nthird-party readers.  Excel itself does not usually write cells with type ",(0,i.kt)("inlineCode",{parentName:"li"},"d"),"\nso non-Excel tools may ignore the data or error in the presence of dates."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Props")," is an object mirroring the workbook ",(0,i.kt)("inlineCode",{parentName:"li"},"Props")," field.  See the table from\nthe ",(0,i.kt)("a",{parentName:"li",href:"../csf/book#file-properties"},"Workbook File Properties")," section."),(0,i.kt)("li",{parentName:"ul"},"if specified, the string from ",(0,i.kt)("inlineCode",{parentName:"li"},"themeXLSX")," will be saved as the primary theme\nfor XLSX/XLSB/XLSM files (to ",(0,i.kt)("inlineCode",{parentName:"li"},"xl/theme/theme1.xml")," in the ZIP)"),(0,i.kt)("li",{parentName:"ul"},'Due to a bug in the program, some features like "Text to Columns" will crash\nExcel on worksheets where error conditions are ignored.  The writer will mark\nfiles to ignore the error by default.  Set ',(0,i.kt)("inlineCode",{parentName:"li"},"ignoreEC")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," to suppress.")),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,(0,i.kt)("b",null,"Exporting NUMBERS files")," (click to show)"),(0,i.kt)("p",null,"The NUMBERS writer requires a fairly large base.  The supplementary ",(0,i.kt)("inlineCode",{parentName:"p"},"xlsx.zahl"),"\nscripts provide support.  ",(0,i.kt)("inlineCode",{parentName:"p"},"xlsx.zahl.js")," is designed for standalone and NodeJS\nuse, while ",(0,i.kt)("inlineCode",{parentName:"p"},"xlsx.zahl.mjs")," is suitable for ESM."),(0,i.kt)("p",null,"Adding NUMBERS export support involves two steps:"),(0,i.kt)("p",null,"1) Load the ",(0,i.kt)("inlineCode",{parentName:"p"},"xlsx.zahl")," script"),(0,i.kt)("p",null,"2) Pass the payload into the ",(0,i.kt)("inlineCode",{parentName:"p"},"numbers")," option to ",(0,i.kt)("inlineCode",{parentName:"p"},"write")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"writeFile"),"."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"browser",label:"Browser",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://cdn.sheetjs.com/xlsx-"+l.Z+"/package/dist/xlsx.zahl.js"},"https://cdn.sheetjs.com/xlsx-",l.Z,"/package/dist/xlsx.zahl.js")," is the URL for ",l.Z),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<meta charset="utf8">\n<body>\n<script src="https://cdn.sheetjs.com/xlsx-'+l.Z+'/package/dist/xlsx.full.min.js"><\/script>\n<script src="https://cdn.sheetjs.com/xlsx-'+l.Z+'/package/dist/xlsx.zahl.js"><\/script>\n<script>\nvar wb = XLSX.utils.book_new(); var ws = XLSX.utils.aoa_to_sheet([\n  ["SheetJS", "<3","\u0bb5\u0bbf\u0bb0\u0bbf\u0ba4\u0bbe\u0bb3\u0bcd"],\n  [72,,"Arbeitsbl\xe4tter"],\n  [,62,"\u6570\u636e"],\n  [true,false,],\n]); XLSX.utils.book_append_sheet(wb, ws, "Sheet1");\nXLSX.writeFile(wb, "textport.numbers", {numbers: XLSX_ZAHL_PAYLOAD, compression: true});\n<\/script>\n</body>'))),(0,i.kt)(p.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,i.kt)("p",null,"After installing the package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install --save https://cdn.sheetjs.com/xlsx-"+l.Z+"/xlsx-"+l.Z+".tgz")),(0,i.kt)("p",null,"The scripts will be available at ",(0,i.kt)("inlineCode",{parentName:"p"},"xlsx/dist/xlsx.zahl")," (CommonJS) and\n",(0,i.kt)("inlineCode",{parentName:"p"},"xlsx/dist/xlsx.zahl.mjs")," (ESM)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'var XLSX = require("xlsx");\nvar XLSX_ZAHL_PAYLOAD = require("xlsx/dist/xlsx.zahl");\nvar wb = XLSX.utils.book_new(); var ws = XLSX.utils.aoa_to_sheet([\n  ["SheetJS", "<3","\u0bb5\u0bbf\u0bb0\u0bbf\u0ba4\u0bbe\u0bb3\u0bcd"],\n  [72,,"Arbeitsbl\xe4tter"],\n  [,62,"\u6570\u636e"],\n  [true,false,],\n]); XLSX.utils.book_append_sheet(wb, ws, "Sheet1");\nXLSX.writeFile(wb, "textport.numbers", {numbers: XLSX_ZAHL_PAYLOAD, compression: true});\n'))),(0,i.kt)(p.Z,{value:"deno",label:"Deno",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://cdn.sheetjs.com/xlsx-"+l.Z+"/package/dist/xlsx.zahl.mjs"},"https://cdn.sheetjs.com/xlsx-",l.Z,"/package/dist/xlsx.zahl.mjs")," is the URL for ",l.Z),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import * as XLSX from 'https://cdn.sheetjs.com/xlsx-"+l.Z+"/package/xlsx.mjs';\nimport XLSX_ZAHL_PAYLOAD from 'https://cdn.sheetjs.com/xlsx-"+l.Z+'/package/dist/xlsx.zahl.mjs\';\n\nvar wb = XLSX.utils.book_new(); var ws = XLSX.utils.aoa_to_sheet([\n  ["SheetJS", "<3","\u0bb5\u0bbf\u0bb0\u0bbf\u0ba4\u0bbe\u0bb3\u0bcd"],\n  [72,,"Arbeitsbl\xe4tter"],\n  [,62,"\u6570\u636e"],\n  [true,false,],\n]); XLSX.utils.book_append_sheet(wb, ws, "Sheet1");\nXLSX.writeFile(wb, "textport.numbers", {numbers: XLSX_ZAHL_PAYLOAD, compression: true});\n'))))),(0,i.kt)("h2",{id:"supported-output-formats"},"Supported Output Formats"),(0,i.kt)("p",null,"For broad compatibility with third-party tools, this library supports many\noutput formats.  The specific file type is controlled with ",(0,i.kt)("inlineCode",{parentName:"p"},"bookType")," option:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"th"},"bookType")),(0,i.kt)("th",{parentName:"tr",align:"right"},"file ext"),(0,i.kt)("th",{parentName:"tr",align:"center"},"container"),(0,i.kt)("th",{parentName:"tr",align:"left"},"sheets"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"xlsx")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".xlsx")),(0,i.kt)("td",{parentName:"tr",align:"center"},"ZIP"),(0,i.kt)("td",{parentName:"tr",align:"left"},"multi"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Excel 2007+ XML Format")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"xlsm")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".xlsm")),(0,i.kt)("td",{parentName:"tr",align:"center"},"ZIP"),(0,i.kt)("td",{parentName:"tr",align:"left"},"multi"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Excel 2007+ Macro XML Format")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"xlsb")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".xlsb")),(0,i.kt)("td",{parentName:"tr",align:"center"},"ZIP"),(0,i.kt)("td",{parentName:"tr",align:"left"},"multi"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Excel 2007+ Binary Format")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"biff8")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".xls")),(0,i.kt)("td",{parentName:"tr",align:"center"},"CFB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"multi"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Excel 97-2004 Workbook Format")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"biff5")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".xls")),(0,i.kt)("td",{parentName:"tr",align:"center"},"CFB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"multi"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Excel 5.0/95 Workbook Format")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"biff4")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".xls")),(0,i.kt)("td",{parentName:"tr",align:"center"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"single"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Excel 4.0 Worksheet Format")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"biff3")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".xls")),(0,i.kt)("td",{parentName:"tr",align:"center"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"single"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Excel 3.0 Worksheet Format")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"biff2")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".xls")),(0,i.kt)("td",{parentName:"tr",align:"center"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"single"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Excel 2.0 Worksheet Format")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"xlml")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".xls")),(0,i.kt)("td",{parentName:"tr",align:"center"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"multi"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Excel 2003-2004 (SpreadsheetML)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"numbers")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".numbers")),(0,i.kt)("td",{parentName:"tr",align:"center"},"ZIP"),(0,i.kt)("td",{parentName:"tr",align:"left"},"single"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Numbers 3.0+ Spreadsheet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ods")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".ods")),(0,i.kt)("td",{parentName:"tr",align:"center"},"ZIP"),(0,i.kt)("td",{parentName:"tr",align:"left"},"multi"),(0,i.kt)("td",{parentName:"tr",align:"left"},"OpenDocument Spreadsheet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fods")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".fods")),(0,i.kt)("td",{parentName:"tr",align:"center"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"multi"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Flat OpenDocument Spreadsheet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"wk3")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".wk3")),(0,i.kt)("td",{parentName:"tr",align:"center"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"multi"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Lotus Workbook (WK3)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"csv")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".csv")),(0,i.kt)("td",{parentName:"tr",align:"center"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"single"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Comma Separated Values")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"txt")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".txt")),(0,i.kt)("td",{parentName:"tr",align:"center"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"single"),(0,i.kt)("td",{parentName:"tr",align:"left"},"UTF-16 Unicode Text (TXT)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sylk")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".sylk")),(0,i.kt)("td",{parentName:"tr",align:"center"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"single"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Symbolic Link (SYLK)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"html")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".html")),(0,i.kt)("td",{parentName:"tr",align:"center"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"single"),(0,i.kt)("td",{parentName:"tr",align:"left"},"HTML Document")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dif")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".dif")),(0,i.kt)("td",{parentName:"tr",align:"center"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"single"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Data Interchange Format (DIF)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dbf")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".dbf")),(0,i.kt)("td",{parentName:"tr",align:"center"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"single"),(0,i.kt)("td",{parentName:"tr",align:"left"},"dBASE II + VFP Extensions (DBF)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"wk1")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".wk1")),(0,i.kt)("td",{parentName:"tr",align:"center"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"single"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Lotus Worksheet (WK1)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"rtf")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".rtf")),(0,i.kt)("td",{parentName:"tr",align:"center"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"single"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Rich Text Format (RTF)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prn")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".prn")),(0,i.kt)("td",{parentName:"tr",align:"center"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"single"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Lotus Formatted Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eth")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".eth")),(0,i.kt)("td",{parentName:"tr",align:"center"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"single"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ethercalc Record Format (ETH)")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compression")," only applies to formats with ZIP containers."),(0,i.kt)("li",{parentName:"ul"},"Formats that only support a single sheet require a ",(0,i.kt)("inlineCode",{parentName:"li"},"sheet")," option specifying\nthe worksheet.  If the string is empty, the first worksheet is used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"writeFile")," will automatically guess the output file format based on the file\nextension if ",(0,i.kt)("inlineCode",{parentName:"li"},"bookType")," is not specified.  It will choose the first format in\nthe aforementioned table that matches the extension.")),(0,i.kt)("h2",{id:"output-type"},"Output Type"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," argument for ",(0,i.kt)("inlineCode",{parentName:"p"},"write")," mirrors the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," argument for ",(0,i.kt)("inlineCode",{parentName:"p"},"read"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"type")),(0,i.kt)("th",{parentName:"tr",align:null},"output"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"base64"')),(0,i.kt)("td",{parentName:"tr",align:null},"string: Base64 encoding of the file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"binary"')),(0,i.kt)("td",{parentName:"tr",align:null},"string: binary string (byte ",(0,i.kt)("inlineCode",{parentName:"td"},"n")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"data.charCodeAt(n)"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"string"')),(0,i.kt)("td",{parentName:"tr",align:null},"string: JS string (characters interpreted as UTF8)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"buffer"')),(0,i.kt)("td",{parentName:"tr",align:null},"nodejs Buffer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"array"')),(0,i.kt)("td",{parentName:"tr",align:null},"ArrayBuffer, fallback array of 8-bit unsigned int")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"file"')),(0,i.kt)("td",{parentName:"tr",align:null},"string: path of file that will be created (nodejs only)")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For compatibility with Excel, ",(0,i.kt)("inlineCode",{parentName:"li"},"csv")," output will always include the UTF-8 byte\norder mark.")))}c.isMDXComponent=!0}}]);