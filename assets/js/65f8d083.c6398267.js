"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46601],{70959:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>U,contentTitle:()=>f,default:()=>I,frontMatter:()=>v,metadata:()=>N,toc:()=>q});var i=a(85893),t=a(11151),n=a(58219),r=a.n(n),l=(a(62316),a(51039)),d=a.n(l),m=(a(82723),a(9487)),c=a.n(m),o=a(41429),p=a.n(o),h=a(5397),g=a.n(h),u=a(4667),y=a.n(u),j=a(9472),x=a.n(j),b=(a(1176),a(12005),a(85162));const v={id:"get-log-by-uuid-using-get",title:"Get log by UUID",description:"Get log by UUID",sidebar_label:"Get log by UUID",hide_title:!0,hide_table_of_contents:!0,api:"eJydVsFu2zgQ/RVhTm3BWEmx3YNOm7ZBa2zQBkl9MnygpbHEliJVcmivIejfF0PJthS7RdCTI3LmzePjvGFaIFl6yJagbXmVW0POao0OVgJsg06SsmZeQAYl0r0t3+8XQRULr0z56e4bCGikkzUSOgZpwcgaIWOweQEClIEMGkkVCCjQ5041DDiKcPgzKIcFZOQCCvB5hbWErAXaNwzlySlTQteJI3rj7HfM6Qt//a7GNO7llVYc7BtrPHref3t9zT9T8K//ggAWDA3x7pv0Df+MUBVphr235SN6G1w+ZbEExQKEoApWeyBh10yZhXWsP6mewloZ6fYfTuUO6O8nG1P8gd03RhZ9NapCvTZS6fkLio7zz2WKiJeWxzUuqPs8URnCEh0I2FhXS+qX/v4rViCs5y8N1jKYvHp5OG5RnxMUgCbULB86Zzl1J52JfbaxscXWgaPIyXihG0lS8z2aH8buDKw6ATV6L8vLoh3Vubyr6gtpI/qFJLyKUd3QO5ck7qLMBTYOc0ncDRupPT43yCekRNsyWe+TxWL+EZg5VXawe3Q3VZBBur1J25GbulTbMuXqaRuN3IEAj257GAPBaciAU8jmVndZmrYyUGWdon2XykadmfURG+vowTqSOumxQMBWOiXXuu/HA1xvxo0MmhWpiBp/BvdwiD3dJweCGOL5mo6Mzt392XpKeNwk0hQJM0teqU1iEAssXid2k/R8k+eET7wKrO3MxagmBs2U5btZsVR56OsuW1ijdOhuAyu9XI23n3iWDP4fBR3vezhQHDn83QdBdBg362hMTNj+QvvDWW4f5klh81CjoTj/h0En8zh5hiH8FBpOYn3r2M3g+5V/zs4sQKscjcdR+m0j8wqTt7Nr9k5sFz5Olqa73W4m4+7MujIdUn16P/9w9+Xp7opTOgHcaz37d7Ob69kNrzXWUy3NqMx5h09OfpSS8D9KGy2Vib5yscf67l/C9gYEZNPXRNvyMLwFZP1rthJQWU+c0rZr6XHhdNfx8s+Ajm97deroePeF8vz3L/zZnt4XePU4DPbXyeHpvEh9WJRmH92jA3+BgB+4P766/JT+UeWpBH9QfwzQsQUrlAW6qEUfcZvn2NAol99VNsVxMvH/HV33PyGR9ek=",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},f=void 0,N={id:"api/service-api/get-log-by-uuid-using-get",title:"Get log by UUID",description:"Get log by UUID",source:"@site/docs/api/service-api/get-log-by-uuid-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-log-by-uuid-using-get",permalink:"/docs/api/service-api/get-log-by-uuid-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-log-by-uuid-using-get",title:"Get log by UUID",description:"Get log by UUID",sidebar_label:"Get log by UUID",hide_title:!0,hide_table_of_contents:!0,api:"eJydVsFu2zgQ/RVhTm3BWEmx3YNOm7ZBa2zQBkl9MnygpbHEliJVcmivIejfF0PJthS7RdCTI3LmzePjvGFaIFl6yJagbXmVW0POao0OVgJsg06SsmZeQAYl0r0t3+8XQRULr0z56e4bCGikkzUSOgZpwcgaIWOweQEClIEMGkkVCCjQ5041DDiKcPgzKIcFZOQCCvB5hbWErAXaNwzlySlTQteJI3rj7HfM6Qt//a7GNO7llVYc7BtrPHref3t9zT9T8K//ggAWDA3x7pv0Df+MUBVphr235SN6G1w+ZbEExQKEoApWeyBh10yZhXWsP6mewloZ6fYfTuUO6O8nG1P8gd03RhZ9NapCvTZS6fkLio7zz2WKiJeWxzUuqPs8URnCEh0I2FhXS+qX/v4rViCs5y8N1jKYvHp5OG5RnxMUgCbULB86Zzl1J52JfbaxscXWgaPIyXihG0lS8z2aH8buDKw6ATV6L8vLoh3Vubyr6gtpI/qFJLyKUd3QO5ck7qLMBTYOc0ncDRupPT43yCekRNsyWe+TxWL+EZg5VXawe3Q3VZBBur1J25GbulTbMuXqaRuN3IEAj257GAPBaciAU8jmVndZmrYyUGWdon2XykadmfURG+vowTqSOumxQMBWOiXXuu/HA1xvxo0MmhWpiBp/BvdwiD3dJweCGOL5mo6Mzt392XpKeNwk0hQJM0teqU1iEAssXid2k/R8k+eET7wKrO3MxagmBs2U5btZsVR56OsuW1ijdOhuAyu9XI23n3iWDP4fBR3vezhQHDn83QdBdBg362hMTNj+QvvDWW4f5klh81CjoTj/h0En8zh5hiH8FBpOYn3r2M3g+5V/zs4sQKscjcdR+m0j8wqTt7Nr9k5sFz5Olqa73W4m4+7MujIdUn16P/9w9+Xp7opTOgHcaz37d7Ob69kNrzXWUy3NqMx5h09OfpSS8D9KGy2Vib5yscf67l/C9gYEZNPXRNvyMLwFZP1rthJQWU+c0rZr6XHhdNfx8s+Ajm97deroePeF8vz3L/zZnt4XePU4DPbXyeHpvEh9WJRmH92jA3+BgB+4P766/JT+UeWpBH9QfwzQsQUrlAW6qEUfcZvn2NAol99VNsVxMvH/HV33PyGR9ek=",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get logs under items",permalink:"/docs/api/service-api/get-logs-under-using-post"},next:{title:"Get log by ID",permalink:"/docs/api/service-api/get-log-using-get"}},U={},q=[{value:"Request",id:"request",level:2}];function W(e){const s={h2:"h2",p:"p",...(0,t.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Get log by UUID"})}),"\n",(0,i.jsx)(d(),{method:"get",path:"/v1/{projectName}/log/uuid/{logId}"}),"\n",(0,i.jsx)(s.p,{children:"Get log by UUID"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"logId",in:"path",description:"logId",required:!0,schema:{type:"string"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(r(),{label:void 0,id:void 0,children:(0,i.jsxs)(b.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(y(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"binaryContent"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(y(),{collapsible:!1,name:"contentType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(y(),{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(y(),{collapsible:!1,name:"thumbnailId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,i.jsx)(y(),{collapsible:!1,name:"id",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(y(),{collapsible:!1,name:"itemId",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(y(),{collapsible:!1,name:"launchId",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(y(),{collapsible:!1,name:"level",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`error`, `warn`, `info`, `debug`, `trace`, `fatal`, `unknown`]",schema:{type:"string",enum:["error","warn","info","debug","trace","fatal","unknown"]}}),(0,i.jsx)(y(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(y(),{collapsible:!1,name:"thumbnail",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(y(),{collapsible:!1,name:"time",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(y(),{collapsible:!1,name:"uuid",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(g(),{responseExample:'{\n  "binaryContent": {\n    "contentType": "string",\n    "id": "string",\n    "thumbnailId": "string"\n  },\n  "id": 0,\n  "itemId": 0,\n  "launchId": 0,\n  "level": "error",\n  "message": "string",\n  "thumbnail": "string",\n  "time": "2024-03-05T18:13:10.049Z",\n  "uuid": "string"\n}',language:"json"})})]})})})})]})})})})]})}function I(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(W,{...e})}):W(e)}}}]);