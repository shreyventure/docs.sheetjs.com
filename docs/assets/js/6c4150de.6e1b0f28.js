"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[501],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(n),d=l,h=k["".concat(s,".").concat(d)]||k[d]||u[d]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7450:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],i={sidebar_position:2},s="Hyperlinks",p={unversionedId:"csf/features/hyperlinks",id:"csf/features/hyperlinks",title:"Hyperlinks",description:"Format Support (click to show)",source:"@site/docs/07-csf/07-features/02-hyperlinks.md",sourceDirName:"07-csf/07-features",slug:"/csf/features/hyperlinks",permalink:"/docs/csf/features/hyperlinks",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Formulae",permalink:"/docs/csf/features/formulae"},next:{title:"Dates and Times",permalink:"/docs/csf/features/dates"}},c={},u=[{value:"Remote Links",id:"remote-links",level:2},{value:"Local Links",id:"local-links",level:2},{value:"Internal Links",id:"internal-links",level:2},{value:"HTML",id:"html",level:2}],k={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hyperlinks"},"Hyperlinks"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Format Support")," (click to show)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cell Hyperlinks"),": XLSX/M, XLSB, BIFF8 XLS, XLML, ODS, HTML"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tooltips"),": XLSX/M, XLSB, BIFF8 XLS, XLML")),(0,a.kt)("p",null,"Hyperlinks are stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"l")," key of cell objects.  The ",(0,a.kt)("inlineCode",{parentName:"p"},"Target")," field of the\nhyperlink object is the target of the link, including the URI fragment. Tooltips\nare stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Tooltip")," field and are displayed when hovering over the text."),(0,a.kt)("p",null,"For example, the following snippet creates a link from cell ",(0,a.kt)("inlineCode",{parentName:"p"},"A3")," to\n",(0,a.kt)("a",{parentName:"p",href:"https://sheetjs.com"},"https://sheetjs.com")," with the tip ",(0,a.kt)("inlineCode",{parentName:"p"},'"Find us @ SheetJS.com!"'),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'ws["A1"].l = { Target: "https://sheetjs.com", Tooltip: "Find us @ SheetJS.com!" };\n')),(0,a.kt)("p",null,"Note that Excel does not automatically style hyperlinks.  They will be displayed\nusing default style. ",(0,a.kt)("a",{href:"https://sheetjs.com/pro"},"SheetJS Pro Basic"),"\nextends this export with support for hyperlink styling."),(0,a.kt)("h2",{id:"remote-links"},"Remote Links"),(0,a.kt)("p",null,"HTTP / HTTPS links can be used directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'ws["A2"].l = { Target: "https://docs.sheetjs.com/#hyperlinks" };\nws["A3"].l = { Target: "http://localhost:7262/yes_localhost_works" };\n')),(0,a.kt)("p",null,"Excel also supports ",(0,a.kt)("inlineCode",{parentName:"p"},"mailto")," email links with subject line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'ws["A4"].l = { Target: "mailto:ignored@dev.null" };\nws["A5"].l = { Target: "mailto:ignored@dev.null?subject=Test Subject" };\n')),(0,a.kt)("h2",{id:"local-links"},"Local Links"),(0,a.kt)("p",null,"Links to absolute paths should use the ",(0,a.kt)("inlineCode",{parentName:"p"},"file://")," URI scheme:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'ws["B1"].l = { Target: "file:///SheetJS/t.xlsx" }; /* Link to /SheetJS/t.xlsx */\nws["B2"].l = { Target: "file:///c:/SheetJS.xlsx" }; /* Link to c:\\SheetJS.xlsx */\n')),(0,a.kt)("p",null,"Links to relative paths can be specified without a scheme:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'ws["B3"].l = { Target: "SheetJS.xlsb" }; /* Link to SheetJS.xlsb */\nws["B4"].l = { Target: "../SheetJS.xlsm" }; /* Link to ../SheetJS.xlsm */\n')),(0,a.kt)("p",null,"Relative Paths have undefined behavior in the SpreadsheetML 2003 format.  Excel\n2019 will treat a ",(0,a.kt)("inlineCode",{parentName:"p"},"..\\")," parent mark as two levels up."),(0,a.kt)("h2",{id:"internal-links"},"Internal Links"),(0,a.kt)("p",null,'Links where the target is a cell or range or defined name in the same workbook\n("Internal Links") are marked with a leading hash character:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'ws["C1"].l = { Target: "#E2" }; /* Link to cell E2 */\nws["C2"].l = { Target: "#Sheet2!E2" }; /* Link to cell E2 in sheet Sheet2 */\nws["C3"].l = { Target: "#SomeDefinedName" }; /* Link to Defined Name */\n')),(0,a.kt)("h2",{id:"html"},"HTML"),(0,a.kt)("p",null,"The HTML DOM parser will process ",(0,a.kt)("inlineCode",{parentName:"p"},"<a>")," links in the table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'/* The live editor requires this function wrapper */\nfunction ExportHyperlink(props) {\n\n  /* Callback invoked when the button is clicked */\n  const xport = React.useCallback(() => {\n    /* Create worksheet from HTML DOM TABLE */\n    const table = document.getElementById("TableLink");\n    const wb = XLSX.utils.table_to_book(table);\n\n    /* Export to file (start a download) */\n    XLSX.writeFile(wb, "SheetJSHyperlink1.xlsx");\n  });\n\n  return (<>\n    <button onClick={xport}><b>Export XLSX!</b></button>\n    <table id="TableLink"><tbody><tr><td>\n      Do not click here, for it is link-less.\n    </td></tr><tr><td>\n      <a href="https://sheetjs.com">Click here for more info</a>\n    </td></tr></tbody></table>\n  </>);\n}\n')))}d.isMDXComponent=!0}}]);