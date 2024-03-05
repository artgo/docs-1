(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20332],{92146:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=o(85893),r=o(11151),a=(o(39620),o(9472)),i=o.n(a),l=o(85162);o(3158);const s={id:"report-portal",title:"Report Portal",description:"Report Portal API documentation",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},c=void 0,d={id:"api/service-api/report-portal",title:"Report Portal",description:"Report Portal API documentation",source:"@site/docs/api/service-api/report-portal.info.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/report-portal",permalink:"/docs/api/service-api/report-portal",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"report-portal",title:"Report Portal",description:"Report Portal API documentation",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Service API",permalink:"/docs/category/api/service-api"},next:{title:"activity-controller",permalink:"/docs/api/service-api/activity-controller"}},p={},u=[];function f(e){const t={a:"a",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:(0,n.jsx)(t.p,{children:"Version: 5.10.1"})}),"\n",(0,n.jsx)("h1",{className:"openapi__heading",children:(0,n.jsx)(t.p,{children:"Report Portal"})}),"\n",(0,n.jsx)(t.p,{children:"Report Portal API documentation"}),"\n",(0,n.jsxs)("div",{style:{marginBottom:"2rem"},children:[(0,n.jsx)("h2",{id:"authentication",style:{marginBottom:"1rem"},children:(0,n.jsx)(t.p,{children:"Authentication"})}),(0,n.jsx)(i(),{className:"openapi-tabs__security-schemes",children:(0,n.jsx)(l.default,{label:"HTTP: Bearer Auth",value:"bearerAuth",children:(0,n.jsx)("div",{children:(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Security Scheme Type:"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"http"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"HTTP Authorization Scheme:"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"bearer"})})]})]})})})})})]}),"\n",(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"},children:[(0,n.jsx)("h3",{style:{marginBottom:"0.25rem"},children:(0,n.jsx)(t.p,{children:"Contact"})}),(0,n.jsx)("span",{children:(0,n.jsxs)(t.p,{children:["Support: ",(0,n.jsx)(t.a,{href:"mailto:support@reportportal.io",children:"support@reportportal.io"})]})})]}),"\n",(0,n.jsxs)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"},children:[(0,n.jsx)("h3",{style:{marginBottom:"0.25rem"},children:(0,n.jsx)(t.p,{children:"License"})}),(0,n.jsx)("a",{href:"http://www.apache.org/licenses/LICENSE-2.0",children:(0,n.jsx)(t.p,{children:"Apache 2.0"})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},3158:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(67294)),a=n(o(93162));t.default=function(e){let{url:t,proxy:o}=e;return r.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},r.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),r.default.createElement("ul",{className:"export-dropdown dropdown__menu"},r.default.createElement("li",null,r.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),a.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},39620:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(67294)),a=o(65094),i=n(o(44996)),l=n(o(59637));t.default=function(e){const{colorMode:t}=(0,a.useColorMode)(),{logo:o,darkLogo:n}=e,s=()=>"dark"===t?n?.altText??o?.altText:o?.altText,c=(0,i.default)(o?.url),d=(0,i.default)(n?.url);return o&&n?r.default.createElement(l.default,{alt:s(),sources:{light:c,dark:d},className:"openapi__logo"}):o||n?r.default.createElement(l.default,{alt:s(),sources:{light:c??d,dark:c??d},className:"openapi__logo"}):void 0}},93162:function(e,t,o){var n,r,a,i=o(25108);r=[],void 0===(a="function"==typeof(n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(i.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){c(n.response,t,o)},n.onerror=function(){i.error("could not download file")},n.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,s=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,o){var i=l.URL||l.webkitURL,s=document.createElement("a");t=t||e.name||"download",s.download=t,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?a(s):r(s.href)?n(e,t,o):a(s,s.target="_blank")):(s.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(s.href)}),4e4),setTimeout((function(){a(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,i){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),o);else if(r(e))n(e,o,i);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){a(l)}))}}:function(e,t,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var a="application/octet-stream"===e.type,i=/constructor/i.test(l.HTMLElement)||l.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||a&&i||s)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},d.readAsDataURL(e)}else{var p=l.URL||l.webkitURL,u=p.createObjectURL(e);r?r.location=u:location.href=u,r=null,setTimeout((function(){p.revokeObjectURL(u)}),4e4)}});l.saveAs=c.saveAs=c,e.exports=c})?n.apply(t,r):n)||(e.exports=a)}}]);