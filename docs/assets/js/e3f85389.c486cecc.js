"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[142],{9613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=p(n),u=r,c=k["".concat(d,".").concat(u)]||k[u]||m[u]||l;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5254:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=n(2848),r=n(9213),l=(n(9496),n(9613)),i=["components"],o={sidebar_position:1},d="Core Concepts",p={unversionedId:"csf/general",id:"csf/general",title:"Core Concepts",description:'The "Common Spreadsheet Format" (CSF) is the object model used by SheetJS.',source:"@site/docs/07-csf/01-general.md",sourceDirName:"07-csf",slug:"/csf/general",permalink:"/docs/csf/general",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Data Export",permalink:"/docs/solutions/output"},next:{title:"Sheet Objects",permalink:"/docs/csf/sheet"}},s={},m=[{value:"Cell Addresses and Ranges",id:"cell-addresses-and-ranges",level:2},{value:"Cell Object",id:"cell-object",level:2},{value:"Data Types",id:"data-types",level:3},{value:"Dates",id:"dates",level:4}],k={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"core-concepts"},"Core Concepts"),(0,l.kt)("p",null,'The "Common Spreadsheet Format" (CSF) is the object model used by SheetJS.'),(0,l.kt)("h2",{id:"cell-addresses-and-ranges"},"Cell Addresses and Ranges"),(0,l.kt)("p",null,"Cell address objects are stored as ",(0,l.kt)("inlineCode",{parentName:"p"},"{c:C, r:R}")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"C")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"R")," are 0-indexed\ncolumn and row numbers, respectively.  For example, the cell address ",(0,l.kt)("inlineCode",{parentName:"p"},"B5")," is\nrepresented by the object ",(0,l.kt)("inlineCode",{parentName:"p"},"{c:1, r:4}"),"."),(0,l.kt)("p",null,"Cell range objects are stored as ",(0,l.kt)("inlineCode",{parentName:"p"},"{s:S, e:E}")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"S")," is the first cell and\n",(0,l.kt)("inlineCode",{parentName:"p"},"E")," is the last cell in the range.  The ranges are inclusive.  For example, the\nrange ",(0,l.kt)("inlineCode",{parentName:"p"},"A3:B7")," is represented by the object ",(0,l.kt)("inlineCode",{parentName:"p"},"{s:{c:0, r:2}, e:{c:1, r:6}}"),".\nUtility functions perform a row-major order walk traversal of a sheet range:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"for(var R = range.s.r; R <= range.e.r; ++R) {\n  for(var C = range.s.c; C <= range.e.c; ++C) {\n    var cell_address = {c:C, r:R};\n    /* if an A1-style address is needed, encode the address */\n    var cell_ref = XLSX.utils.encode_cell(cell_address);\n  }\n}\n")),(0,l.kt)("h2",{id:"cell-object"},"Cell Object"),(0,l.kt)("p",null,"Cell objects are plain JS objects with keys and values following the convention:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Core Cell Properties")," (",(0,l.kt)("a",{parentName:"td",href:"#data-types"},"More Info"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"v")),(0,l.kt)("td",{parentName:"tr",align:null},"raw value (number, string, Date object, boolean)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"t")),(0,l.kt)("td",{parentName:"tr",align:null},"type: ",(0,l.kt)("inlineCode",{parentName:"td"},"b")," Boolean, ",(0,l.kt)("inlineCode",{parentName:"td"},"e")," Error, ",(0,l.kt)("inlineCode",{parentName:"td"},"n")," Number, ",(0,l.kt)("inlineCode",{parentName:"td"},"d")," Date, ",(0,l.kt)("inlineCode",{parentName:"td"},"s")," Text, ",(0,l.kt)("inlineCode",{parentName:"td"},"z")," Stub")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Number Formats")," (",(0,l.kt)("a",{parentName:"td",href:"./features#number-formats"},"More Info"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"z")),(0,l.kt)("td",{parentName:"tr",align:null},"number format string associated with the cell (if requested)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"w")),(0,l.kt)("td",{parentName:"tr",align:null},"formatted text (if applicable)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Formulae")," (",(0,l.kt)("a",{parentName:"td",href:"./features/formulae"},"More Info"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f")),(0,l.kt)("td",{parentName:"tr",align:null},"cell formula encoded as an A1-style string (if applicable)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"F")),(0,l.kt)("td",{parentName:"tr",align:null},"range of enclosing array if formula is array formula (if applicable)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"D")),(0,l.kt)("td",{parentName:"tr",align:null},"if true, array formula is dynamic (if applicable)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Other Cell Properties")," (",(0,l.kt)("a",{parentName:"td",href:"./features"},"More Info"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"l")),(0,l.kt)("td",{parentName:"tr",align:null},"cell hyperlink and tooltip (",(0,l.kt)("a",{parentName:"td",href:"./features/hyperlinks"},"More Info"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c")),(0,l.kt)("td",{parentName:"tr",align:null},"cell comments (",(0,l.kt)("a",{parentName:"td",href:"./features#cell-comments"},"More Info"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"r")),(0,l.kt)("td",{parentName:"tr",align:null},"rich text encoding (if applicable)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"h")),(0,l.kt)("td",{parentName:"tr",align:null},"HTML rendering of the rich text (if applicable)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s")),(0,l.kt)("td",{parentName:"tr",align:null},"the style/theme of the cell (if applicable)")))),(0,l.kt)("p",null,"Built-in export utilities (such as the CSV exporter) will use the ",(0,l.kt)("inlineCode",{parentName:"p"},"w")," text if it\nis available.  To change a value, be sure to delete ",(0,l.kt)("inlineCode",{parentName:"p"},"cell.w")," (or set it to\n",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),") before attempting to export.  The utilities will regenerate the ",(0,l.kt)("inlineCode",{parentName:"p"},"w"),"\ntext from the number format (",(0,l.kt)("inlineCode",{parentName:"p"},"cell.z"),") and the raw value if possible."),(0,l.kt)("p",null,"The actual array formula is stored in the ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," field of the first cell in the\narray range.  Other cells in the range will omit the ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," field."),(0,l.kt)("h3",{id:"data-types"},"Data Types"),(0,l.kt)("p",null,"The raw value is stored in the ",(0,l.kt)("inlineCode",{parentName:"p"},"v")," value property, interpreted based on the ",(0,l.kt)("inlineCode",{parentName:"p"},"t"),"\ntype property.  This separation allows for representation of numbers as well as\nnumeric text.  There are 6 valid cell types:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"b")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean: value interpreted as JS ",(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"e")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Error: value is a numeric code and ",(0,l.kt)("inlineCode",{parentName:"td"},"w")," property stores common name **")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"n")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number: value is a JS ",(0,l.kt)("inlineCode",{parentName:"td"},"number")," **")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"d")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Date: value is a JS ",(0,l.kt)("inlineCode",{parentName:"td"},"Date")," object or string to be parsed as Date **")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"s")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Text: value interpreted as JS ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," and written as text **")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"z")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stub: blank stub cell that is ignored by data processing utilities **")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Error values and interpretation")," (click to show)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Error Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"0x00")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"#NULL!"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"0x07")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"#DIV/0!"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"0x0F")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"#VALUE!"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"0x17")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"#REF!"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"0x1D")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"#NAME?"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"0x24")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"#NUM!"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"0x2A")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"#N/A"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"0x2B")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"#GETTING_DATA")))))),(0,l.kt)("p",null,"Type ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," is the Number type. This includes all forms of data that Excel stores\nas numbers, such as dates/times and Boolean fields.  Excel exclusively uses data\nthat can be fit in an IEEE754 floating point number, just like JS Number, so the\n",(0,l.kt)("inlineCode",{parentName:"p"},"v")," field holds the raw number.  The ",(0,l.kt)("inlineCode",{parentName:"p"},"w")," field holds formatted text.  Dates are\nstored as numbers by default and converted with ",(0,l.kt)("inlineCode",{parentName:"p"},"XLSX.SSF.parse_date_code"),"."),(0,l.kt)("p",null,"Type ",(0,l.kt)("inlineCode",{parentName:"p"},"d")," is the Date type, generated only when the option ",(0,l.kt)("inlineCode",{parentName:"p"},"cellDates")," is passed.\nSince JSON does not have a natural Date type, parsers are generally expected to\nstore ISO 8601 Date strings like you would get from ",(0,l.kt)("inlineCode",{parentName:"p"},"date.toISOString()"),".  On\nthe other hand, writers and exporters should be able to handle date strings and\nJS Date objects.  Note that Excel disregards timezone modifiers and treats all\ndates in the local timezone.  The library does not correct for this error."),(0,l.kt)("p",null,"Type ",(0,l.kt)("inlineCode",{parentName:"p"},"s"),' is the String type.  Values are explicitly stored as text.  Excel will\ninterpret these cells as "number stored as text".  Generated Excel files\nautomatically suppress that class of error, but other formats may elicit errors.'),(0,l.kt)("p",null,"Type ",(0,l.kt)("inlineCode",{parentName:"p"},"z")," represents blank stub cells.  They are generated in cases where cells\nhave no assigned value but hold comments or other metadata. They are ignored by\nthe core library data processing utility functions.  By default these cells are\nnot generated; the parser ",(0,l.kt)("inlineCode",{parentName:"p"},"sheetStubs")," option must be set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("h4",{id:"dates"},"Dates"),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Excel Date Code details")," (click to show)"),(0,l.kt)("p",null,"By default, Excel stores dates as numbers with a format code that specifies date\nprocessing.  For example, the date ",(0,l.kt)("inlineCode",{parentName:"p"},"19-Feb-17")," is stored as the number ",(0,l.kt)("inlineCode",{parentName:"p"},"42785"),"\nwith a number format of ",(0,l.kt)("inlineCode",{parentName:"p"},"d-mmm-yy"),".  The ",(0,l.kt)("inlineCode",{parentName:"p"},"SSF")," module understands number formats\nand performs the appropriate conversion."),(0,l.kt)("p",null,"XLSX also supports a special date type ",(0,l.kt)("inlineCode",{parentName:"p"},"d")," where the data is an ISO 8601 date\nstring.  The formatter converts the date back to a number."),(0,l.kt)("p",null,"The default behavior for all parsers is to generate number cells.  Setting\n",(0,l.kt)("inlineCode",{parentName:"p"},"cellDates")," to true will force the generators to store dates.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Time Zones and Dates")," (click to show)"),(0,l.kt)("p",null,"Excel has no native concept of universal time.  All times are specified in the\nlocal time zone.  Excel limitations prevent specifying true absolute dates."),(0,l.kt)("p",null,"Following Excel, this library treats all dates as relative to local time zone.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Epochs: 1900 and 1904")," (click to show)"),(0,l.kt)("p",null,"Excel supports two epochs (January 1 1900 and January 1 1904).\nThe workbook's epoch can be determined by examining the workbook's\n",(0,l.kt)("inlineCode",{parentName:"p"},"wb.Workbook.WBProps.date1904")," property:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"!!(((wb.Workbook||{}).WBProps||{}).date1904)\n"))))}u.isMDXComponent=!0}}]);