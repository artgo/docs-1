"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49483],{72731:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>k,contentTitle:()=>y,default:()=>M,frontMatter:()=>b,metadata:()=>N,toc:()=>B});var a=r(85893),i=r(11151),t=r(58219),l=r.n(t),n=(r(62316),r(51039)),c=r.n(n),p=(r(82723),r(9487)),d=r.n(p),m=r(41429),o=r.n(m),u=r(5397),h=r.n(u),j=r(4667),x=r.n(j),g=r(9472),f=r.n(g),v=(r(1176),r(12005),r(85162));const b={id:"get-user-projects-using-get",title:"getUserProjects",description:"getUserProjects",sidebar_label:"getUserProjects",hide_title:!0,hide_table_of_contents:!0,api:"eJx1VE1v2zAM/SsGT22hxkmBXXxaMBRbsaEL+nEKclBsJtYmS6pEpwsM//eBspM4ceuLbfGRIvke2QDJbYBsCXVAf5tbQ95qjR5WAqxDL0lZ81BABluk14B+4e0fzCm8BmW23+9fQICTXlZI6DlQA0ZWCFkM+MifApSBDJykEgQUGHKvHIc9B3l8q5XHAjLyNQoIeYmVhKwB2jsOGMgrs4W2XTE4OGsCBrbfTaf8Oo/8+ycI4HrQEFtv0ht+jaLaNZcDAmRRKPaVeuG5clJddFKkGTgPQW0NFn0DQIwiuDM/NOT3LxEyKiFi2evJ6o/s/cPdch5zSdyWjdQBLxt4wQoIqJBK2xMWyaESMkh3s5SbnTaHlrepOzkF9LsDf7XXkEHjvCWbW91madrImkrrFe3bVDo1ovEJnfW0sJ6kTrpYIGAnvZJr3bXjEK5jaiNrTZBBSeTCKNzigBWApq5YngwE0eNXrYBjRmPqf9hACaswkaZIOLPkSm0Sg1hgcZ3YTdLlm1wmfMqrwMpOfES5CJooy7SsuFV53d27bGCN0qOf19zj5WpofmahdaUPQUeq+4KiHvm/AwGTrszGDpV3lu0nvT/UMl88JIXN6woNxdntp0DmcQr62XyuHTtxfyupmO7QnXwd1SxAqxxNwIH73Mm8xORuMgXRy4XLydL0/f19IqN1Yv027V1D+uvh2/3j8/0tu7QCWGtd9l8ms+lkFifCBqqkGVwz1vZZ5cdWEv6j1GmpDMeJ+TS97pewm3GOIfKbDdbNUfwrAaUNxNimWcuAr163LR+/1eiZ5tVJypH0QgX+/mQkm9PWgaunfqldJ4OrP0y7P5RmHydH1/wHAv7ifrgnW9Z+ibJAH3PpzPM8R0cDR952rMbjMuBN3bb/AaBDC/8=",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},y=void 0,N={id:"api/service-api/get-user-projects-using-get",title:"getUserProjects",description:"getUserProjects",source:"@site/docs/api/service-api/get-user-projects-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-user-projects-using-get",permalink:"/docs/api/service-api/get-user-projects-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-user-projects-using-get",title:"getUserProjects",description:"getUserProjects",sidebar_label:"getUserProjects",hide_title:!0,hide_table_of_contents:!0,api:"eJx1VE1v2zAM/SsGT22hxkmBXXxaMBRbsaEL+nEKclBsJtYmS6pEpwsM//eBspM4ceuLbfGRIvke2QDJbYBsCXVAf5tbQ95qjR5WAqxDL0lZ81BABluk14B+4e0fzCm8BmW23+9fQICTXlZI6DlQA0ZWCFkM+MifApSBDJykEgQUGHKvHIc9B3l8q5XHAjLyNQoIeYmVhKwB2jsOGMgrs4W2XTE4OGsCBrbfTaf8Oo/8+ycI4HrQEFtv0ht+jaLaNZcDAmRRKPaVeuG5clJddFKkGTgPQW0NFn0DQIwiuDM/NOT3LxEyKiFi2evJ6o/s/cPdch5zSdyWjdQBLxt4wQoIqJBK2xMWyaESMkh3s5SbnTaHlrepOzkF9LsDf7XXkEHjvCWbW91madrImkrrFe3bVDo1ovEJnfW0sJ6kTrpYIGAnvZJr3bXjEK5jaiNrTZBBSeTCKNzigBWApq5YngwE0eNXrYBjRmPqf9hACaswkaZIOLPkSm0Sg1hgcZ3YTdLlm1wmfMqrwMpOfES5CJooy7SsuFV53d27bGCN0qOf19zj5WpofmahdaUPQUeq+4KiHvm/AwGTrszGDpV3lu0nvT/UMl88JIXN6woNxdntp0DmcQr62XyuHTtxfyupmO7QnXwd1SxAqxxNwIH73Mm8xORuMgXRy4XLydL0/f19IqN1Yv027V1D+uvh2/3j8/0tu7QCWGtd9l8ms+lkFifCBqqkGVwz1vZZ5cdWEv6j1GmpDMeJ+TS97pewm3GOIfKbDdbNUfwrAaUNxNimWcuAr163LR+/1eiZ5tVJypH0QgX+/mQkm9PWgaunfqldJ4OrP0y7P5RmHydH1/wHAv7ifrgnW9Z+ibJAH3PpzPM8R0cDR952rMbjMuBN3bb/AaBDC/8=",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Delete specified Api Key",permalink:"/docs/api/service-api/delete-api-key-using-delete"},next:{title:"user-filter-controller",permalink:"/docs/api/service-api/user-filter-controller"}},k={},B=[{value:"Request",id:"request",level:2}];function w(e){const s={h2:"h2",p:"p",...(0,i.a)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(s.p,{children:"getUserProjects"})}),"\n",(0,a.jsx)(c(),{method:"get",path:"/v1/user/{userName}/projects"}),"\n",(0,a.jsx)(s.p,{children:"getUserProjects"}),"\n",(0,a.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(r,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(o(),{className:"paramsItem",param:{name:"userName",in:"path",description:"userName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(l(),{label:void 0,id:void 0,children:(0,a.jsxs)(v.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(v.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(r,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(r,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"property name*"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"AssignedProject"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)(x(),{collapsible:!1,name:"entryType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(x(),{collapsible:!1,name:"projectRole",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})})]})}),(0,a.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(h(),{responseExample:"{}",language:"json"})})]})})})})]})})})})]})}function M(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(w,{...e})}):w(e)}}}]);