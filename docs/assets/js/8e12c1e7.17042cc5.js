"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[283],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),h=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=h(n),p=o,m=u["".concat(i,".").concat(p)]||u[p]||d[p]||s;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var h=2;h<s;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8264:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(9496),o=n(1626),s="tabItem_ZP9l";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(s,r),hidden:n},t)}},114:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(2848),o=n(9496),s=n(3026),r=n(8658),l=n(1823),i=n(4807),h=n(1626),c="tabList_XleC",d="tabItem_hpFr";function u(e){var t,n,s,u=e.lazy,p=e.block,m=e.defaultValue,k=e.values,g=e.groupId,w=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),S=(0,r.l)(b,(function(e,t){return e.value===t.value}));if(S.length>0)throw new Error('Docusaurus error: Duplicate values "'+S.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(s=f[0])?void 0:s.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),y=N.tabGroupChoices,x=N.setTabGroupChoices,j=(0,o.useState)(v),X=j[0],C=j[1],D=[],I=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var _=y[g];null!=_&&_!==X&&b.some((function(e){return e.value===_}))&&C(_)}var L=function(e){var t=e.currentTarget,n=D.indexOf(t),a=b[n].value;a!==X&&(I(t),C(a),null!=g&&x(g,a))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var o=D.indexOf(e.currentTarget)-1;n=D[o]||D[D.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,h.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,h.Z)("tabs",{"tabs--block":p},w)},b.map((function(e){var t=e.value,n=e.label,s=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:X===t?0:-1,"aria-selected":X===t,key:t,ref:function(e){return D.push(e)},onKeyDown:T,onFocus:L,onClick:L},s,{className:(0,h.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":X===t})}),null!=n?n:t)}))),u?(0,o.cloneElement)(f.filter((function(e){return e.props.value===X}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==X})}))))}function p(e){var t=(0,s.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},1964:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return h},metadata:function(){return d},toc:function(){return p}});var a=n(2848),o=n(9213),s=(n(9496),n(9613)),r=n(114),l=n(8264),i=["components"],h={sidebar_position:2},c="Google Sheets",d={unversionedId:"getting-started/demos/gsheet",id:"getting-started/demos/gsheet",title:"Google Sheets",description:"",source:"@site/docs/04-getting-started/03-demos/01-gsheet.md",sourceDirName:"04-getting-started/03-demos",slug:"/getting-started/demos/gsheet",permalink:"/docs/getting-started/demos/gsheet",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Demo Projects",permalink:"/docs/getting-started/demos/"},next:{title:"Adobe Apps",permalink:"/docs/getting-started/demos/extendscript"}},u={},p=[{value:"Initial Configuration",id:"initial-configuration",level:2},{value:"Exporting Document Data to a File",id:"exporting-document-data-to-a-file",level:2},{value:"Connecting to the Document",id:"connecting-to-the-document",level:3},{value:"Creating a New Workbook",id:"creating-a-new-workbook",level:3},{value:"Looping across the Document",id:"looping-across-the-document",level:3},{value:"Convert a Google Sheets sheet to a SheetJS Worksheet",id:"convert-a-google-sheets-sheet-to-a-sheetjs-worksheet",level:3},{value:"Generating an XLSB file",id:"generating-an-xlsb-file",level:3},{value:"How to Run Export Example",id:"how-to-run-export-example",level:3},{value:"Updating a Document from a Local File",id:"updating-a-document-from-a-local-file",level:2},{value:"Reading the Workbook File",id:"reading-the-workbook-file",level:3},{value:"Connecting to the Document",id:"connecting-to-the-document-1",level:3},{value:"Clearing the Document",id:"clearing-the-document",level:3},{value:"Update First Worksheet",id:"update-first-worksheet",level:3},{value:"Update Sheet Name",id:"update-sheet-name",level:4},{value:"Update Worksheet Data",id:"update-worksheet-data",level:4},{value:"Add the Other Worksheets",id:"add-the-other-worksheets",level:3},{value:"Appending a Worksheet to the Document",id:"appending-a-worksheet-to-the-document",level:4},{value:"Update Worksheet Data",id:"update-worksheet-data-1",level:4},{value:"How to Run Update Example",id:"how-to-run-update-example",level:3},{value:"Using the Raw File Exports",id:"using-the-raw-file-exports",level:2}],m={toc:p};function k(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"google-sheets"},"Google Sheets"),(0,s.kt)("p",null,"This demo uses ",(0,s.kt)("a",{parentName:"p",href:"https://theoephraim.github.io/node-google-spreadsheet"},(0,s.kt)("inlineCode",{parentName:"a"},"node-google-spreadsheet")),"\nto interact with Google Sheets v4 API."),(0,s.kt)("p",null,'Code that does not directly relate to SheetJS APIs are tucked away.  Click on\nthe "click to show" blocks to see the code snippets.'),(0,s.kt)("h2",{id:"initial-configuration"},"Initial Configuration"),(0,s.kt)("p",null,"Install the dependencies:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm i https://cdn.sheetjs.com/xlsx-latest/xlsx-latest.tgz google-spreadsheet@3.3.0\n")),(0,s.kt)("p",null,"The library README has a ",(0,s.kt)("a",{parentName:"p",href:"https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication"},"guide"),"\nfor configuring a service worker with write access to the document.  Following\nthe service worker guide, the JSON key should be saved to ",(0,s.kt)("inlineCode",{parentName:"p"},"key.json"),"."),(0,s.kt)("p",null,"The following helper function attempts to authenticate and access the specified\nsheet by ID.  The code should be copied and saved to ",(0,s.kt)("inlineCode",{parentName:"p"},"common.js"),":"),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Code")," (click to show)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=common.js",title:"common.js"},"const fs = require(\"fs\");\nconst { GoogleSpreadsheet } = require('google-spreadsheet');\n\nmodule.exports = async(ID) => {\n  /* get credentials */\n  const creds = JSON.parse(fs.readFileSync('key.json'));\n\n  /* initialize sheet and authenticate */\n  const doc = new GoogleSpreadsheet(ID);\n  await doc.useServiceAccountAuth(creds);\n  await doc.loadInfo();\n  return doc;\n}\n"))),(0,s.kt)("h2",{id:"exporting-document-data-to-a-file"},"Exporting Document Data to a File"),(0,s.kt)("p",null,"The goal is to create an XLSB export from a Google Sheet.  Google Sheets does\nnot natively support the XLSB format.  SheetJS fills the gap.  ",(0,s.kt)("a",{parentName:"p",href:"#how-to-run-export-example"},"The last subsection")," includes detailed instructions for running locally."),(0,s.kt)("h3",{id:"connecting-to-the-document"},"Connecting to the Document"),(0,s.kt)("p",null,"This uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"common.js")," helper from above:"),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Code")," (click to show)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'/* Connect to Google Sheet */\nconst ID = "<google sheet id>";\nconst doc = await require("./common")(ID);\n'))),(0,s.kt)("h3",{id:"creating-a-new-workbook"},"Creating a New Workbook"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"XLSX.utils.book_new()")," creates an empty workbook with no worksheets:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"/* create a blank workbook */\nconst wb = XLSX.utils.book_new();\n")),(0,s.kt)("h3",{id:"looping-across-the-document"},"Looping across the Document"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"doc.sheetsByIndex")," is an array of worksheets in the Google Sheet Document."),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Code")," (click to show)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"/* Loop across the Document sheets */\nfor(let i = 0; i < doc.sheetsByIndex.length; ++i) {\n  const sheet = doc.sheetsByIndex[i];\n  /* Get the worksheet name */\n  const name = sheet.title;\n  /* ... */\n}\n"))),(0,s.kt)("h3",{id:"convert-a-google-sheets-sheet-to-a-sheetjs-worksheet"},"Convert a Google Sheets sheet to a SheetJS Worksheet"),(0,s.kt)("p",null,"The idea is to extract the raw data from the Google Sheet headers and combine\nwith the raw data rows to produce a large array of arrays."),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Code")," (click to show)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"  /* get the header and data rows */\n  await sheet.loadHeaderRow();\n  const header = sheet.headerValues;\n  const rows = await sheet.getRows();\n\n  /* construct the array of arrays */\n  const aoa = [header].concat(rows.map(r => r._rawData));\n"))),(0,s.kt)("p",null,"This can be converted to a SheetJS worksheet using ",(0,s.kt)("inlineCode",{parentName:"p"},"XLSX.utils.aoa_to_sheet"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"  /* generate a SheetJS Worksheet */\n  const ws = XLSX.utils.aoa_to_sheet(aoa);\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"XLSX.utils.book_append_sheet")," will add the worksheet to the workbook:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"  /* add to workbook */\n  XLSX.utils.book_append_sheet(wb, ws, name);\n")),(0,s.kt)("h3",{id:"generating-an-xlsb-file"},"Generating an XLSB file"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"XLSX.writeFile")," will write a file in the filesystem:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'/* write to SheetJS.xlsb */\nXLSX.writeFile(wb, "SheetJS.xlsb");\n')),(0,s.kt)("h3",{id:"how-to-run-export-example"},"How to Run Export Example"),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"How to run locally")," (click to show)"),(0,s.kt)("p",null,"0) Follow the ",(0,s.kt)("a",{parentName:"p",href:"https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication"},"Authentication and Service Account"),"\ninstructions.  At the end, you should have"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Created a project and enabled the Sheets API"),(0,s.kt)("li",{parentName:"ul"},"Created a service account with a JSON key")),(0,s.kt)("p",null,"Move the generated JSON key to ",(0,s.kt)("inlineCode",{parentName:"p"},"key.json")," in your project folder."),(0,s.kt)("p",null,'1) Create a new Google Sheet and share with the generated service account.  It\nshould be granted the "Editor" role'),(0,s.kt)("p",null,"2) Install the dependencies:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm i https://cdn.sheetjs.com/xlsx-latest/xlsx-latest.tgz google-spreadsheet@3.3.0\n")),(0,s.kt)("p",null,"2) Save the following snippet to ",(0,s.kt)("inlineCode",{parentName:"p"},"common.js"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=common.js",title:"common.js"},"const fs = require(\"fs\");\nconst { GoogleSpreadsheet } = require('google-spreadsheet');\n\nmodule.exports = async(ID) => {\n  /* get credentials */\n  const creds = JSON.parse(fs.readFileSync('key.json'));\n\n  /* initialize sheet and authenticate */\n  const doc = new GoogleSpreadsheet(ID);\n  await doc.useServiceAccountAuth(creds);\n  await doc.loadInfo();\n  return doc;\n}\n")),(0,s.kt)("p",null,"3) Save the following snippet to ",(0,s.kt)("inlineCode",{parentName:"p"},"pull.js"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=pull.js",title:"pull.js"},'const XLSX = require("xlsx");\n\n/* create a blank workbook */\nconst wb = XLSX.utils.book_new();\n\nconst init = require("./common");\nconst ID = "<google sheet ID>";\n\n(async() => {\n\n  const doc = await init(ID);\n\n  for(let i = 0; i < doc.sheetsByIndex.length; ++i) {\n    const sheet = doc.sheetsByIndex[i];\n    const name = sheet.title;\n\n    /* get the header and data rows */\n    await sheet.loadHeaderRow();\n    const header = sheet.headerValues;\n    const rows = await sheet.getRows();\n    const aoa = [header].concat(rows.map(r => r._rawData));\n\n    /* generate a SheetJS Worksheet */\n    const ws = XLSX.utils.aoa_to_sheet(aoa);\n\n    /* add to workbook */\n    XLSX.utils.book_append_sheet(wb, ws, name);\n  }\n\n  /* write to SheetJS.xlsb */\n  XLSX.writeFile(wb, "SheetJS.xlsb");\n\n})();\n')),(0,s.kt)("p",null,"4) Replace ",(0,s.kt)("inlineCode",{parentName:"p"},"<google sheet ID>")," with the ID of the actual document."),(0,s.kt)("p",null,"5) Run ",(0,s.kt)("inlineCode",{parentName:"p"},"node pull.js")," once. It will create ",(0,s.kt)("inlineCode",{parentName:"p"},"SheetJS.xlsb"),"."),(0,s.kt)("p",null,"6) Open ",(0,s.kt)("inlineCode",{parentName:"p"},"SheetJS.xlsb")," and confirm the contents are the same as Google Sheets."),(0,s.kt)("p",null,"7) Change some cells in the Google Sheets Document."),(0,s.kt)("p",null,"8) Run ",(0,s.kt)("inlineCode",{parentName:"p"},"node pull.js")," again and reopen ",(0,s.kt)("inlineCode",{parentName:"p"},"SheetJS.xlsb")," to confirm value changes.")),(0,s.kt)("h2",{id:"updating-a-document-from-a-local-file"},"Updating a Document from a Local File"),(0,s.kt)("p",null,"The goal is to refresh a Google Sheet based on a local file.  The problem can\nbe broken down into a few steps.  ",(0,s.kt)("a",{parentName:"p",href:"#how-to-run-update-example"},"The last subsection"),"\nincludes detailed instructions for running locally."),(0,s.kt)("h3",{id:"reading-the-workbook-file"},"Reading the Workbook File"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"XLSX.readFile")," can read files from the filesystem.  The following line reads\n",(0,s.kt)("inlineCode",{parentName:"p"},"sheetjs.xlsx")," from the current directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const XLSX = require("xlsx");\nconst wb = XLSX.readFile("sheetjs.xlsx");\n')),(0,s.kt)("h3",{id:"connecting-to-the-document-1"},"Connecting to the Document"),(0,s.kt)("p",null,"This uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"common.js")," helper from above:"),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Code")," (click to show)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'/* Connect to Google Sheet */\nconst ID = "<google sheet id>";\nconst doc = await require("./common")(ID);\n'))),(0,s.kt)("h3",{id:"clearing-the-document"},"Clearing the Document"),(0,s.kt)("p",null,"Google Sheets does not allow users to delete every worksheet.  The snippet\ndeletes every worksheet after the first, then clears the first worksheet."),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Code")," (click to show)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"/* clear workbook */\n{\n  /* delete all sheets after the first sheet */\n  const old_sheets = doc.sheetsByIndex;\n  for(let i = 1; i < old_sheets.length; ++i) {\n    await old_sheets[i].delete();\n  }\n  /* clear first worksheet */\n  old_sheets[0].clear();\n}\n"))),(0,s.kt)("h3",{id:"update-first-worksheet"},"Update First Worksheet"),(0,s.kt)("p",null,"In the SheetJS workbook object, worksheet names are stored in the ",(0,s.kt)("inlineCode",{parentName:"p"},"SheetNames"),"\nproperty.  The first worksheet name is ",(0,s.kt)("inlineCode",{parentName:"p"},"wb.SheetNames[0]"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const name = wb.SheetNames[0];\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Sheets")," property is an object whose keys are sheet names and whose values\nare worksheet objects."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const ws = wb.Sheets[name];\n")),(0,s.kt)("p",null,"In the Google Sheet, ",(0,s.kt)("inlineCode",{parentName:"p"},"doc.sheetsByIndex[0]")," is a reference to the first sheet:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const sheet = doc.sheetsByIndex[0];\n")),(0,s.kt)("h4",{id:"update-sheet-name"},"Update Sheet Name"),(0,s.kt)("p",null,"The worksheet name is assigned by using the ",(0,s.kt)("inlineCode",{parentName:"p"},"updateProperties")," method.  The\ndesired sheet name is the name of the first worksheet from the file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"/* update worksheet name */\nawait sheet.updateProperties({title: name});\n")),(0,s.kt)("h4",{id:"update-worksheet-data"},"Update Worksheet Data"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"sheet.addRows")," reads an Array of Arrays of values. ",(0,s.kt)("inlineCode",{parentName:"p"},"XLSX.utils.sheet_to_json"),"\ncan generate this exact shape with the option ",(0,s.kt)("inlineCode",{parentName:"p"},"header: 1"),'.  Unfortunately\nGoogle Sheets requires at least one "Header Row".  This can be implemented by\nconverting the entire worksheet to an Array of Arrays and setting the header\nrow to the first row of the result:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"/* generate array of arrays from the first worksheet */\nconst aoa = XLSX.utils.sheet_to_json(ws, {header: 1});\n\n/* set document header row to first row of the AOA */\nawait sheet.setHeaderRow(aoa[0]);\n\n/* add the remaining rows */\nawait sheet.addRows(aoa.slice(1));\n")),(0,s.kt)("h3",{id:"add-the-other-worksheets"},"Add the Other Worksheets"),(0,s.kt)("p",null,"Each name in the SheetJS Workbook ",(0,s.kt)("inlineCode",{parentName:"p"},"SheetNames")," array maps to a worksheet.  The\nloop over the remaining worksheet names looks like"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"for(let i = 1; i < wb.SheetNames.length; ++i) {\n  /* wb.SheetNames[i] is the sheet name */\n  const name = wb.SheetNames[i];\n  /* wb.Sheets[name] is the worksheet object */\n  const ws = wb.Sheets[name];\n  /* ... */\n}\n")),(0,s.kt)("h4",{id:"appending-a-worksheet-to-the-document"},"Appending a Worksheet to the Document"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"doc.addSheet")," accepts a properties object that includes the worksheet name:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"  const sheet = await doc.addSheet({title: name});\n")),(0,s.kt)("p",null,"This creates a new worksheet, sets the tab name, and returns a reference to the\ncreated worksheet."),(0,s.kt)("h4",{id:"update-worksheet-data-1"},"Update Worksheet Data"),(0,s.kt)("p",null,"This is identical to the first worksheet code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"  /* generate array of arrays from the first worksheet */\n  const aoa = XLSX.utils.sheet_to_json(ws, {header: 1});\n\n  /* set document header row to first row of the AOA */\n  await sheet.setHeaderRow(aoa[0]);\n\n  /* add the remaining rows */\n  await sheet.addRows(aoa.slice(1));\n")),(0,s.kt)("h3",{id:"how-to-run-update-example"},"How to Run Update Example"),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"How to run locally")," (click to show)"),(0,s.kt)("p",null,"0) Follow the ",(0,s.kt)("a",{parentName:"p",href:"https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication"},"Authentication and Service Account"),"\ninstructions.  At the end, you should have"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Created a project and enabled the Sheets API"),(0,s.kt)("li",{parentName:"ul"},"Created a service account with a JSON key")),(0,s.kt)("p",null,"Move the generated JSON key to ",(0,s.kt)("inlineCode",{parentName:"p"},"key.json")," in your project folder."),(0,s.kt)("p",null,'1) Create a new Google Sheet and share with the generated service account.  It\nshould be granted the "Editor" role'),(0,s.kt)("p",null,"2) Install the dependencies:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm i https://cdn.sheetjs.com/xlsx-latest/xlsx-latest.tgz google-spreadsheet@3.3.0\n")),(0,s.kt)("p",null,"2) Save the following snippet to ",(0,s.kt)("inlineCode",{parentName:"p"},"common.js"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=common.js",title:"common.js"},"const fs = require(\"fs\");\nconst { GoogleSpreadsheet } = require('google-spreadsheet');\n\nmodule.exports = async(ID) => {\n  /* get credentials */\n  const creds = JSON.parse(fs.readFileSync('key.json'));\n\n  /* initialize sheet and authenticate */\n  const doc = new GoogleSpreadsheet(ID);\n  await doc.useServiceAccountAuth(creds);\n  await doc.loadInfo();\n  return doc;\n}\n")),(0,s.kt)("p",null,"3) Save the following snippet to ",(0,s.kt)("inlineCode",{parentName:"p"},"push.js"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=push.js",title:"push.js"},'const XLSX = require("xlsx");\nconst fs = require("fs");\n/* create dummy worksheet if `sheetjs.xlsx` does not exist */\nif(!fs.existsSync("sheetjs.xlsx")) {\n  const wb = XLSX.utils.book_new();\n  const ws1 = XLSX.utils.aoa_to_sheet([["a","b","c"],[1,2,3]]); XLSX.utils.book_append_sheet(wb, ws1, "Sheet1");\n  const ws2 = XLSX.utils.aoa_to_sheet([["a","b","c"],[4,5,6]]); XLSX.utils.book_append_sheet(wb, ws2, "Sheet2");\n  XLSX.writeFile(wb, "sheetjs.xlsx");\n}\n/* read and parse sheetjs.xlsx */\nconst wb = XLSX.readFile("sheetjs.xlsx");\n\nconst init = require("./common");\nconst ID = "<google sheet ID>";\n\n(async() => {\n\n  const doc = await init(ID);\n\n  /* clear workbook */\n  {\n    /* delete all sheets after the first sheet */\n    const old_sheets = doc.sheetsByIndex;\n    for(let i = 1; i < old_sheets.length; ++i) {\n      await old_sheets[i].delete();\n    }\n    /* clear first worksheet */\n    old_sheets[0].clear();\n  }\n\n  /* write worksheets */\n  {\n    const name = wb.SheetNames[0];\n    const ws = wb.Sheets[name];\n    /* first worksheet already exists */\n    const sheet = doc.sheetsByIndex[0];\n\n    /* update worksheet name */\n    await sheet.updateProperties({title: name});\n\n    /* generate array of arrays from the first worksheet */\n    const aoa = XLSX.utils.sheet_to_json(ws, {header: 1});\n\n    /* set document header row to first row of the AOA */\n    await sheet.setHeaderRow(aoa[0])\n\n    /* add the remaining rows */\n    await sheet.addRows(aoa.slice(1));\n\n    /* the other worksheets must be created manually */\n    for(let i = 1; i < wb.SheetNames.length; ++i) {\n      const name = wb.SheetNames[i];\n      const ws = wb.Sheets[name];\n\n      const sheet = await doc.addSheet({title: name});\n      const aoa = XLSX.utils.sheet_to_json(ws, {header: 1});\n      await sheet.setHeaderRow(aoa[0])\n      await sheet.addRows(aoa.slice(1));\n    }\n  }\n\n})();\n')),(0,s.kt)("p",null,"4) Replace ",(0,s.kt)("inlineCode",{parentName:"p"},"<google sheet ID>")," with the ID of the actual document."),(0,s.kt)("p",null,"5) Run ",(0,s.kt)("inlineCode",{parentName:"p"},"node push.js")," once. It will create ",(0,s.kt)("inlineCode",{parentName:"p"},"sheetjs.xlsx")," and update the sheet."),(0,s.kt)("p",null,"6) Edit ",(0,s.kt)("inlineCode",{parentName:"p"},"sheetjs.xlsx")," with some new data"),(0,s.kt)("p",null,"7) Run ",(0,s.kt)("inlineCode",{parentName:"p"},"node push.js")," again and watch the Google Sheet update!")),(0,s.kt)("h2",{id:"using-the-raw-file-exports"},"Using the Raw File Exports"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"node-google-spreadsheet")," can download the XLSX or ODS export of the document.\nThe functions return NodeJS ",(0,s.kt)("inlineCode",{parentName:"p"},"Buffer")," data that can be parsed using SheetJS."),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Sample Code")," (click to show)"),(0,s.kt)("p",null,"SheetJS can read data from XLSX files and ODS files.  This example prints the\nworksheet names and CSV exports of each sheet."),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"xlsx",label:"XLSX",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const XLSX = require("xlsx");\n\n/* Connect to Google Sheet */\nconst ID = "<google sheet id>";\nconst doc = await require("./common")(ID);\n\n/* Get XLSX export */\nconst buf = await doc.downloadAsXLSX();\n\n/* Parse with SheetJS */\nconst wb = XLSX.read(buf);\n\n/* Loop over the worksheet names */\nwb.SheetNames.forEach(name => {\n  /* Print the name to the console */\n  console.log(name);\n\n  /* Get the corresponding worksheet object */\n  const sheet = wb.Sheets[name];\n\n  /* Print a CSV export of the worksheet */\n  console.log(XLSX.utils.sheet_to_csv(sheet));\n});\n'))),(0,s.kt)(l.Z,{value:"ods",label:"ODS",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const XLSX = require("xlsx");\n\n/* Connect to Google Sheet */\nconst ID = "<google sheet id>";\nconst doc = await require("./common")(ID);\n\n/* Get XLSX export */\nconst buf = await doc.downloadAsODS();\n\n/* Parse with SheetJS */\nconst wb = XLSX.read(buf);\n\n/* Loop over the worksheet names */\nwb.SheetNames.forEach(name => {\n  /* Print the name to the console */\n  console.log(name);\n\n  /* Get the corresponding worksheet object */\n  const sheet = wb.Sheets[name];\n\n  /* Print a CSV export of the worksheet */\n  console.log(XLSX.utils.sheet_to_csv(sheet));\n});\n'))))))}k.isMDXComponent=!0}}]);