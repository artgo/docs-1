"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87759],{97285:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>_,contentTitle:()=>v,default:()=>I,frontMatter:()=>y,metadata:()=>q,toc:()=>z});var i=a(85893),t=a(11151),r=a(58219),l=a.n(r),n=(a(62316),a(51039)),o=a.n(n),c=(a(82723),a(9487)),p=a.n(c),d=a(41429),m=a.n(d),u=a(5397),h=a.n(u),g=a(4667),j=a.n(g),x=a(9472),f=a.n(x),b=(a(1176),a(12005),a(85162));const y={id:"create-log-using-post-1",title:"Create log (batching operation)",description:"Create log (batching operation)",sidebar_label:"Create log (batching operation)",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVcFu2zAM/RWDp3ZQ43bALj6tKwqs2LAWTXcKgkKRGVubLGkSnS4w/O8DbSdx4gybT7ZMPj6Sj1QDJIsI2QKMK66UsxScMRhgKcB5DJK0sw85ZKACSsKvrvgetS2eHucvrzcgwMsgKyQMDNKAlRVCBj64H6joG38J0JaPJJUgIMeogvYMO7EL+KvWAXPIKNQoIKoSKwlZA7T1DBspaFtA2y57Y4z0yeVbtmDqaIlfq9qQ9jJQunahusoldRgHtEOcBfyIzr4OWK/sxJkP4dyKyXGSgWtBGiO7T12y5iSvqUnLz2mK3UH0zsYe+f319RTr8QuIcXrv0nfH6ZAmw3Q/SVLlXG7wsW+cLZ7n8K9kjuIPpjIEueW+EVZxEuHeYIWW7jo95P8RQudnWiigwhhlgWf/RZLq50uQ6tzv/cNq8gEV84BsLU3EU4H1LBPjiuRixey1LZK9sC+BaVDpWODexY476zSDdHOTNiN5tqlxBQiIGDY7sdfBQAZsRU4502Zp2siaShc0bdtUej0R/DN6F+jJBZIm6bFAwEYGLVemL9cOrlfCWtaGIIOSyMcJ3NPOVgDaumJBsyGIwX7ZCtgzmkrrs4uU8Mgm0uYJM0su9DqxiDnml4lbJz3f5JTwgVeOlZuFzsp3RjPtuEVLLpWq+7iLBlYoA4bbmou7WI5/z1nIfepjo33bh4Q6vfN3bwTcfm3XbqzPI7Z/qf0ul9unhyR3qmYtd2IYpkyqbsqGRTavPTtxfSupud2xP/k4yVmA0QptxJH7rZeqxOT97BrEIBdOJ0vTt7e3mez+zlwo0sE1pl8f7u6/ze+v2KUVwFrr2X+Y3VzPbviMhVpJOwrzb5UfVWJfWsLflHojtWXcjl8zDMACNrzes+MNzTOwFFDyqGQLaJqVjPg9mLbl4181Bu728qDorve5jvz+lxkd7W64eB7242VyHPgs4d26sttuhkzNXyDgJ25P7paWB6FEmWPoGPUWd33cqxfGOSCcuz9asXO6VQo9jcx5H7Oe94uE70YQsBpupsrlbMZYHZQ4vPIktO0fo02aug==",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},v=void 0,q={id:"api/service-api/create-log-using-post-1",title:"Create log (batching operation)",description:"Create log (batching operation)",source:"@site/docs/api/service-api/create-log-using-post-1.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/create-log-using-post-1",permalink:"/docs/api/service-api/create-log-using-post-1",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-log-using-post-1",title:"Create log (batching operation)",description:"Create log (batching operation)",sidebar_label:"Create log (batching operation)",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVcFu2zAM/RWDp3ZQ43bALj6tKwqs2LAWTXcKgkKRGVubLGkSnS4w/O8DbSdx4gybT7ZMPj6Sj1QDJIsI2QKMK66UsxScMRhgKcB5DJK0sw85ZKACSsKvrvgetS2eHucvrzcgwMsgKyQMDNKAlRVCBj64H6joG38J0JaPJJUgIMeogvYMO7EL+KvWAXPIKNQoIKoSKwlZA7T1DBspaFtA2y57Y4z0yeVbtmDqaIlfq9qQ9jJQunahusoldRgHtEOcBfyIzr4OWK/sxJkP4dyKyXGSgWtBGiO7T12y5iSvqUnLz2mK3UH0zsYe+f319RTr8QuIcXrv0nfH6ZAmw3Q/SVLlXG7wsW+cLZ7n8K9kjuIPpjIEueW+EVZxEuHeYIWW7jo95P8RQudnWiigwhhlgWf/RZLq50uQ6tzv/cNq8gEV84BsLU3EU4H1LBPjiuRixey1LZK9sC+BaVDpWODexY476zSDdHOTNiN5tqlxBQiIGDY7sdfBQAZsRU4502Zp2siaShc0bdtUej0R/DN6F+jJBZIm6bFAwEYGLVemL9cOrlfCWtaGIIOSyMcJ3NPOVgDaumJBsyGIwX7ZCtgzmkrrs4uU8Mgm0uYJM0su9DqxiDnml4lbJz3f5JTwgVeOlZuFzsp3RjPtuEVLLpWq+7iLBlYoA4bbmou7WI5/z1nIfepjo33bh4Q6vfN3bwTcfm3XbqzPI7Z/qf0ul9unhyR3qmYtd2IYpkyqbsqGRTavPTtxfSupud2xP/k4yVmA0QptxJH7rZeqxOT97BrEIBdOJ0vTt7e3mez+zlwo0sE1pl8f7u6/ze+v2KUVwFrr2X+Y3VzPbviMhVpJOwrzb5UfVWJfWsLflHojtWXcjl8zDMACNrzes+MNzTOwFFDyqGQLaJqVjPg9mLbl4181Bu728qDorve5jvz+lxkd7W64eB7242VyHPgs4d26sttuhkzNXyDgJ25P7paWB6FEmWPoGPUWd33cqxfGOSCcuz9asXO6VQo9jcx5H7Oe94uE70YQsBpupsrlbMZYHZQ4vPIktO0fo02aug==",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get logs by filter",permalink:"/docs/api/service-api/get-logs-using-get"},next:{title:"Create log",permalink:"/docs/api/service-api/create-log-entry-using-post-1"}},_={},z=[{value:"Request",id:"request",level:2}];function N(e){const s={h2:"h2",p:"p",...(0,t.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Create log (batching operation)"})}),"\n",(0,i.jsx)(o(),{method:"post",path:"/v1/{projectName}/log"}),"\n",(0,i.jsx)(s.p,{children:"Create log (batching operation)"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(p(),{className:"openapi-tabs__mime",children:(0,i.jsx)(b.default,{label:"multipart/form-data",value:"multipart/form-data-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!1,name:"json_request_part",required:!0,schemaName:"",qualifierMessage:void 0,schema:{description:"json_request_part"}})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(l(),{label:void 0,id:void 0,children:(0,i.jsxs)(b.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"responses"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"stackTrace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(h(),{responseExample:'{\n  "responses": [\n    {\n      "id": "string",\n      "message": "string",\n      "stackTrace": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]})})})})]})}function I(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(N,{...e})}):N(e)}}}]);