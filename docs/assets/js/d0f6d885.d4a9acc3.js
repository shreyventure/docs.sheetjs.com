"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=s,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),s=(n(7294),n(3905));const a={sidebar_position:23,title:"HTTP Server Processing"},o=void 0,i={unversionedId:"demos/server",id:"demos/server",title:"HTTP Server Processing",description:"Server-Side JS platforms like NodeJS and Deno have built-in APIs for listening",source:"@site/docs/03-demos/24-server.md",sourceDirName:"03-demos",slug:"/demos/server",permalink:"/docs/demos/server",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23,title:"HTTP Server Processing"},sidebar:"tutorialSidebar",previous:{title:"Angular",permalink:"/docs/demos/angular"},next:{title:"Data Import",permalink:"/docs/solutions/input"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Reading Data",id:"reading-data",level:4},{value:"Writing Data",id:"writing-data",level:4},{value:"Deno",id:"deno",level:2},{value:"Drash",id:"drash",level:3}],d={toc:p};function h(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Server-Side JS platforms like NodeJS and Deno have built-in APIs for listening\non network interfaces.  They provide wrappers for requests and responses."),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("h4",{id:"reading-data"},"Reading Data"),(0,s.kt)("p",null,"Typically servers receive form data with content type ",(0,s.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," or\n",(0,s.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded"),'. The platforms themselves typically do not\nprovide "body parsing" functions, instead leaning on the community to supply\nmodules to take the encoded data and split into form fields and files.'),(0,s.kt)("p",null,"NodeJS servers typically use a parser like ",(0,s.kt)("inlineCode",{parentName:"p"},"formidable"),". In the example below,\n",(0,s.kt)("inlineCode",{parentName:"p"},"formidable")," will write to file and ",(0,s.kt)("inlineCode",{parentName:"p"},"XLSX.readFile")," will read the file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'var XLSX = require("xlsx"); // This is using the CommonJS build\nvar formidable = require("formidable");\n\nrequire("http").createServer(function(req, res) {\n  if(req.method !== "POST") return res.end("");\n\n  /* parse body and implement logic in callback */\n  // highlight-next-line\n  (new formidable.IncomingForm()).parse(req, function(err, fields, files) {\n    /* if successful, files is an object whose keys are param names */\n    // highlight-next-line\n    var file = files["upload"]; // <input type="file" id="upload" name="upload">\n    /* file.path is a location in the filesystem, usually in a temp folder */\n    // highlight-next-line\n    var wb = XLSX.readFile(file.filepath);\n    // print the first worksheet back as a CSV\n    res.end(XLSX.utils.sheet_to_csv(wb.Sheets[wb.SheetNames[0]]));\n  });\n}).listen(process.env.PORT || 3000);\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"XLSX.read")," will accept NodeJS buffers as well as ",(0,s.kt)("inlineCode",{parentName:"p"},"Uint8Array"),", Base64 strings,\nbinary strings, and plain Arrays of bytes.  This covers the interface types of\na wide variety of frameworks."),(0,s.kt)("h4",{id:"writing-data"},"Writing Data"),(0,s.kt)("p",null,"Typically server libraries use a response API that accepts ",(0,s.kt)("inlineCode",{parentName:"p"},"Uint8Array")," data.\n",(0,s.kt)("inlineCode",{parentName:"p"},"XLSX.write")," with the option ",(0,s.kt)("inlineCode",{parentName:"p"},'type: "buffer"')," will generate data.  To force the\nresponse to be treated as an attachment, set the ",(0,s.kt)("inlineCode",{parentName:"p"},"Content-Disposition")," header:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'var XLSX = require("xlsx"); // This is using the CommonJS build\n\nrequire("http").createServer(function(req, res) {\n  if(req.method !== "GET") return res.end("");\n  var wb = XLSX.read("S,h,e,e,t,J,S\\n5,4,3,3,7,9,5", {type: "binary"});\n  // highlight-start\n  res.setHeader(\'Content-Disposition\', \'attachment; filename="SheetJS.xlsx"\');\n  res.end(XLSX.write(wb, {type:"buffer", bookType: "xlsx"}));\n  // highlight-end\n}).listen(process.env.PORT || 3000);\n')),(0,s.kt)("h2",{id:"deno"},"Deno"),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Many hosted services like Deno Deploy do not offer filesystem access."),(0,s.kt)("p",{parentName:"admonition"},"This breaks web frameworks that use the filesystem in body parsing.")),(0,s.kt)("p",null,"Deno provides the basic elements to implement a server.  It does not provide a\nbody parser out of the box."),(0,s.kt)("h3",{id:"drash"},"Drash"),(0,s.kt)("p",null,"In testing, ",(0,s.kt)("a",{parentName:"p",href:"https://drash.land/drash/"},"Drash")," had an in-memory body parser\nwhich could handle file uploads on hosted services like Deno Deploy."),(0,s.kt)("p",null,"The service ",(0,s.kt)("a",{parentName:"p",href:"https://s2c.sheetjs.com"},"https://s2c.sheetjs.com")," is hosted on Deno Deploy using Drash!"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Reading Data")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Request#bodyParam")," reads body parameters.  For uploaded files, the ",(0,s.kt)("inlineCode",{parentName:"p"},"content"),"\nproperty is a ",(0,s.kt)("inlineCode",{parentName:"p"},"Uint8Array"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'// @deno-types="https://cdn.sheetjs.com/xlsx-latest/package/types/index.d.ts"\nimport { read, utils } from \'https://cdn.sheetjs.com/xlsx-latest/package/xlsx.mjs\';\n\nimport * as Drash from "https://deno.land/x/drash@v2.5.4/mod.ts";\n\nclass ParseResource extends Drash.Resource {\n  public paths = ["/"];\n\n  public POST(request: Drash.Request, response: Drash.Response) {\n    // assume a form upload like <input type="file" id="upload" name="upload">\n    // highlight-next-line\n    const file = request.bodyParam<Drash.Types.BodyFile>("upload");\n    if (!file) throw new Error("File is required!");\n    // highlight-next-line\n    var wb = read(file.content, {type: "buffer"});\n    return response.html( utils.sheet_to_html(wb.Sheets[wb.SheetNames[0]]));\n  }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Writing Data")),(0,s.kt)("p",null,"Headers are manually set with ",(0,s.kt)("inlineCode",{parentName:"p"},"Response#headers.set")," while the raw body is set\nwith ",(0,s.kt)("inlineCode",{parentName:"p"},"Response#send"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'// @deno-types="https://cdn.sheetjs.com/xlsx-latest/package/types/index.d.ts"\nimport { read, utils } from \'https://cdn.sheetjs.com/xlsx-latest/package/xlsx.mjs\';\n\nimport * as Drash from "https://deno.land/x/drash@v2.5.4/mod.ts";\n\nclass WriteResource extends Drash.Resource {\n  public paths = ["/export"];\n\n  public GET(request: Drash.Request, response: Drash.Response): void {\n    // create some fixed workbook\n    const data = ["SheetJS".split(""), [5,4,3,3,7,9,5]];\n    const ws = utils.aoa_to_sheet(data);\n    const wb = utils.book_new(); utils.book_append_sheet(wb, ws, "data");\n    // write the workbook to XLSX as a Uint8Array\n    // highlight-next-line\n    const file = write(wb, { bookType: "xlsx", type: "buffer"});\n    // set headers\n    response.headers.set("Content-Disposition", \'attachment; filename="SheetJSDrash.xlsx"\');\n    // send data\n    // highlight-next-line\n    return response.send("application/vnd.ms-excel", file);\n  }\n}\n')),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Complete Example")," (click to show)"),(0,s.kt)("p",null,"1) Save the following script to ",(0,s.kt)("inlineCode",{parentName:"p"},"SheetJSDrash.ts"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="SheetJSDrash.ts"',title:'"SheetJSDrash.ts"'},'/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */\n// @deno-types="https://cdn.sheetjs.com/xlsx-latest/package/types/index.d.ts"\nimport { read, utils, set_cptable } from \'https://cdn.sheetjs.com/xlsx-latest/package/xlsx.mjs\';\nimport * as cptable from \'https://cdn.sheetjs.com/xlsx-latest/package/dist/cpexcel.full.mjs\';\nset_cptable(cptable);\n\nimport * as Drash from "https://deno.land/x/drash@v2.5.4/mod.ts";\n\nclass ParseResource extends Drash.Resource {\n  public paths = ["/"];\n\n  public POST(request: Drash.Request, response: Drash.Response) {\n    const file = request.bodyParam<Drash.Types.BodyFile>("file");\n    if (!file) throw new Error("File is required!");\n    var wb = read(file.content, {type: "buffer"});\n    return response.html( utils.sheet_to_html(wb.Sheets[wb.SheetNames[0]]));\n  }\n\n  public GET(request: Drash.Request, response: Drash.Response): void {\n    return response.html(`\\\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>SheetJS Spreadsheet to HTML Conversion Service</title>\n    <meta charset="utf-8" />\n  </head>\n  <body>\n<pre><h3><a href="//sheetjs.com/">SheetJS</a> Spreadsheet Conversion Service</h3>\n<b>API</b>\n\nSend a POST request to https://s2c.sheetjs.com/ with the file in the "file" body parameter:\n\n$ curl -X POST -F"file=@test.xlsx" https://s2c.sheetjs.com/\n\nThe response will be an HTML TABLE generated from the first worksheet.\n\n<b>Try it out!</b><form action="/" method="post" enctype="multipart/form-data">\n\n<input type="file" name="file" />\n\nUse the file input element to select a file, then click "Submit"\n\n<button type="submit">Submit</button>\n</form>\n</pre>\n  </body>\n</html>`,\n    );\n  }\n}\n\nconst server = new Drash.Server({\n  hostname: "",\n  port: 3000,\n  protocol: "http",\n  resources: [ ParseResource ],\n});\n\nserver.run();\n\nconsole.log(`Server running at ${server.address}.`);\n')),(0,s.kt)("p",null,"2) Run the server:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"deno run --allow-net SheetJSDrash.ts\n")),(0,s.kt)("p",null,"3) Download the test file ",(0,s.kt)("a",{parentName:"p",href:"https://sheetjs.com/pres.numbers"},"https://sheetjs.com/pres.numbers")),(0,s.kt)("p",null,"4) Open http://localhost:3000/ in your browser."),(0,s.kt)("p",null,'Click "Choose File" and select ',(0,s.kt)("inlineCode",{parentName:"p"},"pres.numbers"),'.  Then click "Submit"'),(0,s.kt)("p",null,"The page should show the contents of the file as an HTML table.")))}h.isMDXComponent=!0}}]);