"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5607],{27995:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>y,contentTitle:()=>X,default:()=>O,frontMatter:()=>N,metadata:()=>b,toc:()=>k});var t=a(85893),i=a(11151),n=a(58219),r=a.n(n),l=(a(62316),a(51039)),d=a.n(l),c=(a(82723),a(9487)),o=a.n(c),p=a(41429),m=a.n(p),u=a(5397),h=a.n(u),g=a(4667),x=a.n(g),j=a(9472),f=a.n(j),v=(a(1176),a(12005),a(85162));const N={id:"get-statuses-using-get",title:"getStatuses",description:"getStatuses",sidebar_label:"getStatuses",hide_title:!0,hide_table_of_contents:!0,api:"eJydVcFu2zAM/RWDp7VQ46TYdvBpwVBsxYYuaNZTkANjM7E2W1IlOm1g+N8H2o7rNO1lvhiWHslH8pGugXEXIFlBgZVJ86vUGva2KMjDWoF15JG1NbcZJLAjXjJyFSg8BG12325+gwKHHkti8uKmBoMlQQI6C6BAG0jgsSJ/AAUZhdRrJ+4GgKfHSnvKIGFfkYLAh0LMt9aXoICeXWEzGm7TnEqEpAY+OIGh9yiuNVMZRufaMO3Ig2odIXdHnz9C0zRq4Oi8/UMp38lXz9Uh52dUT3FnlF+TCuy12UHTrAUcnDWBWnLX06m8Tp3/+gEKpOpkWG4v40t5nXm1G+EACjDLtNhisfDSH9YU3oouj2TiPKXIwneLRaDXyY2aCgpK4tz2vW57yzkkEO9ncT2qQhN3aolDawkKAvn9UQGVLyABwbNNbdEkcVxjxbn1mg9NjE6fVfienPW8sJ6xiDpfoGCPXuOm6NI7uusquMWqkK7mzC6cuVscsQrIVKXIW4Cgevy6UTAwOm/Jdxs4Eo1EaLJImEUf9DYyRBllF5HdRh3f6DXhF14ZlXbiW5RrQRNtpSdrKVVadXFXNWwIPfl5JWVercfXSxFAl/oYNPS5T6jViXx3IJCea7O1LVJzO0wnbN+p/TGX+eI2ymxalWS4nfxenZi26uwnZ1k5MZL6lqil3aE7+XKWs4JCp2QCjcznDtOcouvJFFQvF0knieOnp6cJtrcT63dxbxrin7dfb+6WN1di0igQrXXsP01m08lMzpwNXKIZhTmV9knWQxmZnjl2BWojPloudS/7FexnoCA5Hf9O+VL5TvtrBbkNLPC63mCgB180jRx3e0+6nOkgOn5nBOuX8YcP9/12uYi6Bfkmzb90GDboHotKECDiOU7M/0c9TfbN6Mfdaw7j8EdWYweNDFpOmJFvGXWIeZqS45GtrDxhPywf+bE0zT8rPkRO",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},X=void 0,b={id:"api/service-api/get-statuses-using-get",title:"getStatuses",description:"getStatuses",source:"@site/docs/api/service-api/get-statuses-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-statuses-using-get",permalink:"/docs/api/service-api/get-statuses-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-statuses-using-get",title:"getStatuses",description:"getStatuses",sidebar_label:"getStatuses",hide_title:!0,hide_table_of_contents:!0,api:"eJydVcFu2zAM/RWDp7VQ46TYdvBpwVBsxYYuaNZTkANjM7E2W1IlOm1g+N8H2o7rNO1lvhiWHslH8pGugXEXIFlBgZVJ86vUGva2KMjDWoF15JG1NbcZJLAjXjJyFSg8BG12325+gwKHHkti8uKmBoMlQQI6C6BAG0jgsSJ/AAUZhdRrJ+4GgKfHSnvKIGFfkYLAh0LMt9aXoICeXWEzGm7TnEqEpAY+OIGh9yiuNVMZRufaMO3Ig2odIXdHnz9C0zRq4Oi8/UMp38lXz9Uh52dUT3FnlF+TCuy12UHTrAUcnDWBWnLX06m8Tp3/+gEKpOpkWG4v40t5nXm1G+EACjDLtNhisfDSH9YU3oouj2TiPKXIwneLRaDXyY2aCgpK4tz2vW57yzkkEO9ncT2qQhN3aolDawkKAvn9UQGVLyABwbNNbdEkcVxjxbn1mg9NjE6fVfienPW8sJ6xiDpfoGCPXuOm6NI7uusquMWqkK7mzC6cuVscsQrIVKXIW4Cgevy6UTAwOm/Jdxs4Eo1EaLJImEUf9DYyRBllF5HdRh3f6DXhF14ZlXbiW5RrQRNtpSdrKVVadXFXNWwIPfl5JWVercfXSxFAl/oYNPS5T6jViXx3IJCea7O1LVJzO0wnbN+p/TGX+eI2ymxalWS4nfxenZi26uwnZ1k5MZL6lqil3aE7+XKWs4JCp2QCjcznDtOcouvJFFQvF0knieOnp6cJtrcT63dxbxrin7dfb+6WN1di0igQrXXsP01m08lMzpwNXKIZhTmV9knWQxmZnjl2BWojPloudS/7FexnoCA5Hf9O+VL5TvtrBbkNLPC63mCgB180jRx3e0+6nOkgOn5nBOuX8YcP9/12uYi6Bfkmzb90GDboHotKECDiOU7M/0c9TfbN6Mfdaw7j8EdWYweNDFpOmJFvGXWIeZqS45GtrDxhPywf+bE0zT8rPkRO",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get all unique owners of project launches",permalink:"/docs/api/service-api/get-all-owners-using-get"},next:{title:"Force finish launch",permalink:"/docs/api/service-api/bulk-force-finish-using-put"}},y={},k=[{value:"Request",id:"request",level:2}];function W(e){const s={h2:"h2",p:"p",...(0,i.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"openapi__heading",children:(0,t.jsx)(s.p,{children:"getStatuses"})}),"\n",(0,t.jsx)(d(),{method:"get",path:"/v1/{projectName}/launch/status"}),"\n",(0,t.jsx)(s.p,{children:"getStatuses"}),"\n",(0,t.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(s.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,t.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(s.p,{children:"Query Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(m(),{className:"paramsItem",param:{name:"ids",in:"query",description:"ids",required:!0,style:"form",explode:!0,schema:{type:"array",items:{type:"integer",format:"int64"}}}})})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(r(),{label:void 0,id:void 0,children:(0,t.jsxs)(v.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"OK"})}),(0,t.jsx)("div",{children:(0,t.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(v.default,{label:"*/*",value:"*/*",children:(0,t.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)(x(),{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1})})]})}),(0,t.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(h(),{responseExample:"{}",language:"json"})})]})})})})]})})})})]})}function O(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(W,{...e})}):W(e)}}}]);