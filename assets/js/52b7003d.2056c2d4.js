"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99883],{29979:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>q,contentTitle:()=>b,default:()=>_,frontMatter:()=>y,metadata:()=>N,toc:()=>k});var i=a(85893),t=a(11151),r=a(58219),n=a.n(r),l=(a(62316),a(51039)),c=a.n(l),p=(a(82723),a(9487)),o=a.n(p),d=a(41429),m=a.n(d),h=a(5397),j=a.n(h),u=a(4667),g=a.n(u),x=a(9472),v=a.n(x),f=(a(1176),a(12005),a(85162));const y={id:"get-project-settings-using-get",title:"Get project specific issue sub-types",description:"Only for users that are assigned to the project",sidebar_label:"Get project specific issue sub-types",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v4zYQ/SvEnHYXjJUs2h50alAE26DF1oh3T4EPtDSS2FIkdzhKagj678VIsi07SbFYX2RyPvje8M2wBzZ1gvwRIoW/seCrhMzW1+mqCJ4pOIcEWw0lpoJsZBs85PCXd3tVBVJdQkqKG8PKECqTkq09loqD4gbVnBQ0hIhkJPq+hBxq5PVk2szHfU3W15/uvoCGaMi0yEiCqwdvWoT8gO+zrDRYQRENN3AJ7dyP8FtnCUvImTrUkIoGWwN5D7yPkjYxWV/DMGzFOcXgEyaxf7y+ls8F7z9AgxQGPYv1Q/ZBPouslp2kvWD3gCl0VJwjOtYcNKRu92UfMUmpZ2RhN9siSfHYTrgOMScK1jPWSKChCtQanrZ++QmGRd6T+zGvKUsrvIxbn50w+xkis5dSM7Zpye0+pQ43U+IFsf+HXQQX6JW6a7Dld3JxoTD8RhIXfD1e+WvG1ATiN6080qhe08TxJyKLhIVhubjKuIQaWuQmzGoeZcsN5JA93WT9QoRDdugouWakp4OuO3KQg7hyKIIb8izrTcdNIMv7ITPRvtD2A8ZAvA7ExqkpF2h4MmTNzh3lMaabtFuZzkkNG+aYXqRbH3w1oO9aUaQ4gp79t4OGI6KXzfB7SKykO5XxpRJk6p2tlEcssXyvQqUmvOoS8AlXiW1Y0egVR6eVDVL3rZSq6KZzH3vYoSGk204q/LhdmjfSehP1pdPxLmdCY4fKenICuVLrq7DU9RnaN2p/4HK7vldlKLoWPY9jbZ4LZurMeWZtuihBUt/WWLnuNO38+oKzBmcL9AkX4bfRFA2qj6tr0LNchE6eZc/PzyszWleB6mwOTdmf97/dfd7cXUnIoEG0NqH/eXVzvbqRvRgSt8YvjvmEfBjUKkUsbGULZaXJVep2VzzOj4ty9Kcp+AOPwXw3jP9yFp2xXoCNBPu5jR7h6QY05OfT/NhJWw1NSCx+fb8zCb+SGwbZ/tYhiWa2p74YFVTaJP9P3fsmnXcP84R+r85PfxX1YVj6/diJrpMVaPgH9xeP0SDt1KApkUZEk8dtUWDkRaw8KSLw43SRR3EY/gPhwqb1",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},b=void 0,N={id:"api/service-api/get-project-settings-using-get",title:"Get project specific issue sub-types",description:"Only for users that are assigned to the project",source:"@site/docs/api/service-api/get-project-settings-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-project-settings-using-get",permalink:"/docs/api/service-api/get-project-settings-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-project-settings-using-get",title:"Get project specific issue sub-types",description:"Only for users that are assigned to the project",sidebar_label:"Get project specific issue sub-types",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v4zYQ/SvEnHYXjJUs2h50alAE26DF1oh3T4EPtDSS2FIkdzhKagj678VIsi07SbFYX2RyPvje8M2wBzZ1gvwRIoW/seCrhMzW1+mqCJ4pOIcEWw0lpoJsZBs85PCXd3tVBVJdQkqKG8PKECqTkq09loqD4gbVnBQ0hIhkJPq+hBxq5PVk2szHfU3W15/uvoCGaMi0yEiCqwdvWoT8gO+zrDRYQRENN3AJ7dyP8FtnCUvImTrUkIoGWwN5D7yPkjYxWV/DMGzFOcXgEyaxf7y+ls8F7z9AgxQGPYv1Q/ZBPouslp2kvWD3gCl0VJwjOtYcNKRu92UfMUmpZ2RhN9siSfHYTrgOMScK1jPWSKChCtQanrZ++QmGRd6T+zGvKUsrvIxbn50w+xkis5dSM7Zpye0+pQ43U+IFsf+HXQQX6JW6a7Dld3JxoTD8RhIXfD1e+WvG1ATiN6080qhe08TxJyKLhIVhubjKuIQaWuQmzGoeZcsN5JA93WT9QoRDdugouWakp4OuO3KQg7hyKIIb8izrTcdNIMv7ITPRvtD2A8ZAvA7ExqkpF2h4MmTNzh3lMaabtFuZzkkNG+aYXqRbH3w1oO9aUaQ4gp79t4OGI6KXzfB7SKykO5XxpRJk6p2tlEcssXyvQqUmvOoS8AlXiW1Y0egVR6eVDVL3rZSq6KZzH3vYoSGk204q/LhdmjfSehP1pdPxLmdCY4fKenICuVLrq7DU9RnaN2p/4HK7vldlKLoWPY9jbZ4LZurMeWZtuihBUt/WWLnuNO38+oKzBmcL9AkX4bfRFA2qj6tr0LNchE6eZc/PzyszWleB6mwOTdmf97/dfd7cXUnIoEG0NqH/eXVzvbqRvRgSt8YvjvmEfBjUKkUsbGULZaXJVep2VzzOj4ty9Kcp+AOPwXw3jP9yFp2xXoCNBPu5jR7h6QY05OfT/NhJWw1NSCx+fb8zCb+SGwbZ/tYhiWa2p74YFVTaJP9P3fsmnXcP84R+r85PfxX1YVj6/diJrpMVaPgH9xeP0SDt1KApkUZEk8dtUWDkRaw8KSLw43SRR3EY/gPhwqb1",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"project-settings-controller",permalink:"/docs/api/service-api/project-settings-controller"},next:{title:"Create pattern template for items' log messages pattern analysis",permalink:"/docs/api/service-api/create-pattern-template-using-post"}},q={},k=[{value:"Request",id:"request",level:2}];function P(e){const s={h2:"h2",p:"p",...(0,t.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Get project specific issue sub-types"})}),"\n",(0,i.jsx)(c(),{method:"get",path:"/v1/{projectName}/settings"}),"\n",(0,i.jsx)(s.p,{children:"Only for users that are assigned to the project"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(n(),{label:void 0,id:void 0,children:(0,i.jsxs)(f.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(g(),{collapsible:!1,name:"project",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"subTypes"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"property name*"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(g(),{collapsible:!1,name:"color",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(g(),{collapsible:!1,name:"locator",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"longName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"shortName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"typeRef",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})})]})})]})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(j(),{responseExample:'{\n  "project": 0,\n  "subTypes": {}\n}',language:"json"})})]})})})})]})})})})]})}function _(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(P,{...e})}):P(e)}}}]);