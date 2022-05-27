"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[790],{9613:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return N}});var n=a(9496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(a),N=r,f=k["".concat(o,".").concat(N)]||k[N]||s[N]||i;return a?n.createElement(f,l(l({ref:e},m),{},{components:a})):n.createElement(f,l({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9177:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return N},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s}});var n=a(2848),r=a(9213),i=(a(9496),a(9613)),l=["components"],p={sidebar_position:5,hide_table_of_contents:!0,title:"Reading Files"},o="Parsing Options",d={unversionedId:"api/parse-options",id:"api/parse-options",title:"Reading Files",description:"XLSX.read(data, read_opts) attempts to parse data.",source:"@site/docs/08-api/05-parse-options.md",sourceDirName:"08-api",slug:"/api/parse-options",permalink:"/docs/api/parse-options",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,hide_table_of_contents:!0,title:"Reading Files"},sidebar:"tutorialSidebar",previous:{title:"Hyperlinks",permalink:"/docs/csf/features/hyperlinks"},next:{title:"Writing Files",permalink:"/docs/api/write-options"}},m={},s=[{value:"Input Type",id:"input-type",level:3},{value:"Guessing File Type",id:"guessing-file-type",level:3}],k={toc:s};function N(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"parsing-options"},"Parsing Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.read(data, read_opts)")," attempts to parse ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.readFile(filename, read_opts)")," attempts to read ",(0,i.kt)("inlineCode",{parentName:"p"},"filename")," and parse."),(0,i.kt)("p",null,"The read functions accept an options argument:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Option Name"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Input data encoding (see Input Type below)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"raw")),(0,i.kt)("td",{parentName:"tr",align:"right"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If true, plain text parsing will not parse values **")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"codepage")),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"If specified, use code page when appropriate **")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cellFormula")),(0,i.kt)("td",{parentName:"tr",align:"right"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Save formulae to the .f field")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cellHTML")),(0,i.kt)("td",{parentName:"tr",align:"right"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Parse rich text and save HTML to the ",(0,i.kt)("inlineCode",{parentName:"td"},".h")," field")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cellNF")),(0,i.kt)("td",{parentName:"tr",align:"right"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Save number format string to the ",(0,i.kt)("inlineCode",{parentName:"td"},".z")," field")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cellStyles")),(0,i.kt)("td",{parentName:"tr",align:"right"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Save style/theme info to the ",(0,i.kt)("inlineCode",{parentName:"td"},".s")," field")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cellText")),(0,i.kt)("td",{parentName:"tr",align:"right"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Generated formatted text to the ",(0,i.kt)("inlineCode",{parentName:"td"},".w")," field")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cellDates")),(0,i.kt)("td",{parentName:"tr",align:"right"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Store dates as type ",(0,i.kt)("inlineCode",{parentName:"td"},"d")," (default is ",(0,i.kt)("inlineCode",{parentName:"td"},"n"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dateNF")),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"If specified, use the string for date code 14 **")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sheetStubs")),(0,i.kt)("td",{parentName:"tr",align:"right"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Create cell objects of type ",(0,i.kt)("inlineCode",{parentName:"td"},"z")," for stub cells")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sheetRows")),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If >0, read the first ",(0,i.kt)("inlineCode",{parentName:"td"},"sheetRows")," rows **")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bookDeps")),(0,i.kt)("td",{parentName:"tr",align:"right"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If true, parse calculation chains")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bookFiles")),(0,i.kt)("td",{parentName:"tr",align:"right"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If true, add raw files to book object **")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bookProps")),(0,i.kt)("td",{parentName:"tr",align:"right"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If true, only parse enough to get book metadata **")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bookSheets")),(0,i.kt)("td",{parentName:"tr",align:"right"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If true, only parse enough to get the sheet names")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bookVBA")),(0,i.kt)("td",{parentName:"tr",align:"right"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If true, copy VBA blob to ",(0,i.kt)("inlineCode",{parentName:"td"},"vbaraw")," field **")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"password")),(0,i.kt)("td",{parentName:"tr",align:"right"},'""'),(0,i.kt)("td",{parentName:"tr",align:"left"},"If defined and file is encrypted, use password **")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"WTF")),(0,i.kt)("td",{parentName:"tr",align:"right"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If true, throw errors on unexpected file features **")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sheets")),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"If specified, only parse specified sheets **")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PRN")),(0,i.kt)("td",{parentName:"tr",align:"right"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If true, allow parsing of PRN files **")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"xlfn")),(0,i.kt)("td",{parentName:"tr",align:"right"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If true, preserve ",(0,i.kt)("inlineCode",{parentName:"td"},"_xlfn.")," prefixes in formulae **")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"FS")),(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"DSV Field Separator override")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Even if ",(0,i.kt)("inlineCode",{parentName:"li"},"cellNF")," is false, formatted text will be generated and saved to ",(0,i.kt)("inlineCode",{parentName:"li"},".w")),(0,i.kt)("li",{parentName:"ul"},"In some cases, sheets may be parsed even if ",(0,i.kt)("inlineCode",{parentName:"li"},"bookSheets")," is false."),(0,i.kt)("li",{parentName:"ul"},"Excel aggressively tries to interpret values from CSV and other plain text.\nThis leads to surprising behavior! The ",(0,i.kt)("inlineCode",{parentName:"li"},"raw")," option suppresses value parsing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bookSheets")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"bookProps")," combine to give both sets of information"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Deps")," will be an empty object if ",(0,i.kt)("inlineCode",{parentName:"li"},"bookDeps")," is false"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bookFiles")," behavior depends on file type:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keys")," array (paths in the ZIP) for ZIP-based formats"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"files")," hash (mapping paths to objects representing the files) for ZIP"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cfb")," object for formats using CFB containers"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sheetRows-1")," rows will be generated when looking at the JSON object output\n(since the header row is counted as a row when parsing the data)"),(0,i.kt)("li",{parentName:"ul"},"By default all worksheets are parsed.  ",(0,i.kt)("inlineCode",{parentName:"li"},"sheets")," restricts based on input type:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"number: zero-based index of worksheet to parse (",(0,i.kt)("inlineCode",{parentName:"li"},"0")," is first worksheet)"),(0,i.kt)("li",{parentName:"ul"},"string: name of worksheet to parse (case insensitive)"),(0,i.kt)("li",{parentName:"ul"},"array of numbers and strings to select multiple worksheets."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bookVBA")," merely exposes the raw VBA CFB object.  It does not parse the data.\nXLSM and XLSB store the VBA CFB object in ",(0,i.kt)("inlineCode",{parentName:"li"},"xl/vbaProject.bin"),". BIFF8 XLS mixes\nthe VBA entries alongside the core Workbook entry, so the library generates a\nnew XLSB-compatible blob from the XLS CFB container."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"codepage")," is applied to BIFF2 - BIFF5 files without ",(0,i.kt)("inlineCode",{parentName:"li"},"CodePage")," records and to\nCSV files without BOM in ",(0,i.kt)("inlineCode",{parentName:"li"},'type:"binary"'),".  BIFF8 XLS always defaults to 1200."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PRN")," affects parsing of text files without a common delimiter character."),(0,i.kt)("li",{parentName:"ul"},"Currently only XOR encryption is supported.  Unsupported error will be thrown\nfor files employing other encryption methods."),(0,i.kt)("li",{parentName:"ul"},"Newer Excel functions are serialized with the ",(0,i.kt)("inlineCode",{parentName:"li"},"_xlfn.")," prefix, hidden from the\nuser. SheetJS will strip ",(0,i.kt)("inlineCode",{parentName:"li"},"_xlfn.")," normally. The ",(0,i.kt)("inlineCode",{parentName:"li"},"xlfn")," option preserves them."),(0,i.kt)("li",{parentName:"ul"},"WTF is mainly for development.  By default, the parser will suppress read\nerrors on single worksheets, allowing you to read from the worksheets that do\nparse properly. Setting ",(0,i.kt)("inlineCode",{parentName:"li"},"WTF:true")," forces those errors to be thrown.")),(0,i.kt)("h3",{id:"input-type"},"Input Type"),(0,i.kt)("p",null,"Strings can be interpreted in multiple ways.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," parameter for ",(0,i.kt)("inlineCode",{parentName:"p"},"read"),"\ntells the library how to parse the data argument:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"type")),(0,i.kt)("th",{parentName:"tr",align:null},"expected input"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"base64"')),(0,i.kt)("td",{parentName:"tr",align:null},"string: Base64 encoding of the file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"binary"')),(0,i.kt)("td",{parentName:"tr",align:null},"string: binary string (byte ",(0,i.kt)("inlineCode",{parentName:"td"},"n")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"data.charCodeAt(n)"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"string"')),(0,i.kt)("td",{parentName:"tr",align:null},"string: JS string (characters interpreted as UTF8)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"buffer"')),(0,i.kt)("td",{parentName:"tr",align:null},"nodejs Buffer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"array"')),(0,i.kt)("td",{parentName:"tr",align:null},"array: array of 8-bit unsigned int (byte ",(0,i.kt)("inlineCode",{parentName:"td"},"n")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"data[n]"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"file"')),(0,i.kt)("td",{parentName:"tr",align:null},"string: path of file that will be read (nodejs only)")))),(0,i.kt)("h3",{id:"guessing-file-type"},"Guessing File Type"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Implementation Details")," (click to show)"),(0,i.kt)("p",null,"Excel and other spreadsheet tools read the first few bytes and apply other\nheuristics to determine a file type.  This enables file type punning: renaming\nfiles with the ",(0,i.kt)("inlineCode",{parentName:"p"},".xls")," extension will tell your computer to use Excel to open the\nfile but Excel will know how to handle it.  This library applies similar logic:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Byte 0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Raw File Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Spreadsheet Types"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0xD0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"CFB Container"),(0,i.kt)("td",{parentName:"tr",align:"left"},"BIFF 5/8 or protected XLSX/XLSB or WQ3/QPW or XLR")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x09")),(0,i.kt)("td",{parentName:"tr",align:"left"},"BIFF Stream"),(0,i.kt)("td",{parentName:"tr",align:"left"},"BIFF 2/3/4/5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x3C")),(0,i.kt)("td",{parentName:"tr",align:"left"},"XML/HTML"),(0,i.kt)("td",{parentName:"tr",align:"left"},"SpreadsheetML / Flat ODS / UOS1 / HTML / plain text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x50")),(0,i.kt)("td",{parentName:"tr",align:"left"},"ZIP Archive"),(0,i.kt)("td",{parentName:"tr",align:"left"},"XLSB or XLSX/M or ODS or UOS2 or NUMBERS or text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x49")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plain Text"),(0,i.kt)("td",{parentName:"tr",align:"left"},"SYLK or plain text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x54")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plain Text"),(0,i.kt)("td",{parentName:"tr",align:"left"},"DIF or plain text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0xEF")),(0,i.kt)("td",{parentName:"tr",align:"left"},"UTF8 Encoded"),(0,i.kt)("td",{parentName:"tr",align:"left"},"SpreadsheetML / Flat ODS / UOS1 / HTML / plain text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0xFF")),(0,i.kt)("td",{parentName:"tr",align:"left"},"UTF16 Encoded"),(0,i.kt)("td",{parentName:"tr",align:"left"},"SpreadsheetML / Flat ODS / UOS1 / HTML / plain text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x00")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Record Stream"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Lotus WK","*"," or Quattro Pro or plain text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x7B")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plain text"),(0,i.kt)("td",{parentName:"tr",align:"left"},"RTF or plain text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x0A")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plain text"),(0,i.kt)("td",{parentName:"tr",align:"left"},"SpreadsheetML / Flat ODS / UOS1 / HTML / plain text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x0D")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plain text"),(0,i.kt)("td",{parentName:"tr",align:"left"},"SpreadsheetML / Flat ODS / UOS1 / HTML / plain text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x20")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plain text"),(0,i.kt)("td",{parentName:"tr",align:"left"},"SpreadsheetML / Flat ODS / UOS1 / HTML / plain text")))),(0,i.kt)("p",null,"DBF files are detected based on the first byte as well as the third and fourth\nbytes (corresponding to month and day of the file date)"),(0,i.kt)("p",null,"Works for Windows files are detected based on the BOF record with type ",(0,i.kt)("inlineCode",{parentName:"p"},"0xFF")),(0,i.kt)("p",null,"Plain text format guessing follows the priority order:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Format"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Test"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"XML"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<?xml")," appears in the first 1024 characters")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"HTML"),(0,i.kt)("td",{parentName:"tr",align:"left"},"starts with ",(0,i.kt)("inlineCode",{parentName:"td"},"<")," and HTML tags appear in the first 1024 characters *")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"XML"),(0,i.kt)("td",{parentName:"tr",align:"left"},"starts with ",(0,i.kt)("inlineCode",{parentName:"td"},"<")," and the first tag is valid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"RTF"),(0,i.kt)("td",{parentName:"tr",align:"left"},"starts with ",(0,i.kt)("inlineCode",{parentName:"td"},"{\\rt"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"DSV"),(0,i.kt)("td",{parentName:"tr",align:"left"},"starts with ",(0,i.kt)("inlineCode",{parentName:"td"},"/sep=.$/"),", separator is the specified character")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"DSV"),(0,i.kt)("td",{parentName:"tr",align:"left"},"more unquoted `")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"DSV"),(0,i.kt)("td",{parentName:"tr",align:"left"},"more unquoted ",(0,i.kt)("inlineCode",{parentName:"td"},";")," chars than ",(0,i.kt)("inlineCode",{parentName:"td"},"\\t")," or ",(0,i.kt)("inlineCode",{parentName:"td"},",")," in the first 1024")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"TSV"),(0,i.kt)("td",{parentName:"tr",align:"left"},"more unquoted ",(0,i.kt)("inlineCode",{parentName:"td"},"\\t")," chars than ",(0,i.kt)("inlineCode",{parentName:"td"},",")," chars in the first 1024")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"CSV"),(0,i.kt)("td",{parentName:"tr",align:"left"},"one of the first 1024 characters is a comma ",(0,i.kt)("inlineCode",{parentName:"td"},'","'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ETH"),(0,i.kt)("td",{parentName:"tr",align:"left"},"starts with ",(0,i.kt)("inlineCode",{parentName:"td"},"socialcalc:version:"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"PRN"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PRN")," option is set to true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"CSV"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(fallback)")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTML tags include: ",(0,i.kt)("inlineCode",{parentName:"li"},"html"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"table"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"head"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"meta"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"script"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"style"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"div")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Why are random text files valid?")," (click to show)"),(0,i.kt)("p",null,"Excel is extremely aggressive in reading files.  Adding an XLS extension to any\ndisplay text file  (where the only characters are ANSI display chars) tricks\nExcel into thinking that the file is potentially a CSV or TSV file, even if it\nis only one column!  This library attempts to replicate that behavior."),(0,i.kt)("p",null,"The best approach is to validate the desired worksheet and ensure it has the\nexpected number of rows or columns.  Extracting the range is extremely simple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var range = XLSX.utils.decode_range(worksheet['!ref']);\nvar ncols = range.e.c - range.s.c + 1, nrows = range.e.r - range.s.r + 1;\n"))))}N.isMDXComponent=!0}}]);