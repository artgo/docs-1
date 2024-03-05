"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91763],{70209:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>q,contentTitle:()=>g,default:()=>k,frontMatter:()=>v,metadata:()=>N,toc:()=>G});var t=i(85893),a=i(11151),r=i(58219),n=i.n(r),o=(i(62316),i(51039)),p=i.n(o),c=(i(82723),i(9487)),l=i.n(c),d=i(41429),m=i.n(d),u=i(5397),h=i.n(u),j=i(4667),x=i.n(j),y=i(9472),f=i.n(y),b=(i(1176),i(12005),i(85162));const v={id:"create-project-issue-sub-type-using-post",title:"Creation of custom project specific issue sub-type",description:"Creation of custom project specific issue sub-type",sidebar_label:"Creation of custom project specific issue sub-type",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk2PGjkQ/SutOiWRoYdodw99ymQ00o60yrIwOREOxl2As922Y7uHQa3+76uy3WAGdlcKJyjXx6vnemV68HznoFqBsfo7Cj9x6L1UOzcRWnmrmwYtrBlog5Z7qdVTDRUIi9zjPIY8Odfhsts8Hw1+dVLt5n8un4GB4Za36NFS/h4UbxGqsc4X+sVAKjJxvwcGNTphpaEiV34Wf3TSYg2Vtx0ycGKPLYeqB380lNZ5K9UOhmEdndH5z7o+ksdl3nQIDKhBVJ5cuDGNFKG/8rsjvz4vIX1DNR5C13m7i78usK1A6EZbYNBotUvQ3V7bsQ0Cu8AtEZpw6w11SWxZothLdFQy5rluL8t86/Bc69bpWP0Ga8MwvCU5GJzRykVIH+9m12xGSupLNj+UH24TmFOXIhdL+D8uZJ0hlsrjDonirbYt99H02y+RGsH9TdqG1GGNxqIIiKstbxwyeJ0IXeMO1SRNxmSj6+MkTet5Wm70LbUq9LYQnfO6LdLAFs6gkFspCkndFq7bTAIaBvjqUTmpVRTE33iE6j/rM3jhTZfjoPFu0e81qdDogCzIp4LyZVb2mWqGcpRymWFwaF9GRXa2gQooxmuhm6Eqy553fq+t9Meh5EZe9b1Ao62fa+t5U8RcAaWVfNPE6xrTxWHZ8q6hS9p7b9xVuvnoywBV15KCyBFY8l8PDE6Irqfvd+18QUwVXNUFISveyW2hEGus39PdRLzFW8BnXDW2emqDlwlOU6lpXtZElehi3VUPG+QW7X1HVK/W+fGSxjy2njudZjA1FNRAv6MT0DjSqlmcl9XjK29Ng5n+xwHOZX+2ZWo/G08iz4Qv1VbnOrxg5V/ueOTsfv5U1Fp0LSofRj5pnYug9aSTZWcoiO6x5ZLGykXLpytuGTRSoHKYhd8bLvZYfJzeAUtjSbRVZXk4HKY8nE613ZUp1JV/PD08flk+TihkYEAzHdH/Op3dTWdkI3m0XGVlfkq1F+ScbtXjqy9Nw6WiUgFyn5S4gpcZMKguX7BRjPR1TL5msCcNVyvo+w13+NU2w0DmHx1aGrz1WVxhDGvp6Pt5fb1Bd9rC8G6Rtvn74hLIzQaSkatjtnSApR2VJxhIk3vkNdpsiz3EupPnyNmY4epdHdgYcS8EGp/50qtxsd7S34hNesZbXYdNyA/05vIDVPANvhFIHdoPCgz2Hhqudh3fkX8sS59/AMHYGLE=",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},g=void 0,N={id:"api/service-api/create-project-issue-sub-type-using-post",title:"Creation of custom project specific issue sub-type",description:"Creation of custom project specific issue sub-type",source:"@site/docs/api/service-api/create-project-issue-sub-type-using-post.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/create-project-issue-sub-type-using-post",permalink:"/docs/api/service-api/create-project-issue-sub-type-using-post",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-project-issue-sub-type-using-post",title:"Creation of custom project specific issue sub-type",description:"Creation of custom project specific issue sub-type",sidebar_label:"Creation of custom project specific issue sub-type",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk2PGjkQ/SutOiWRoYdodw99ymQ00o60yrIwOREOxl2As922Y7uHQa3+76uy3WAGdlcKJyjXx6vnemV68HznoFqBsfo7Cj9x6L1UOzcRWnmrmwYtrBlog5Z7qdVTDRUIi9zjPIY8Odfhsts8Hw1+dVLt5n8un4GB4Za36NFS/h4UbxGqsc4X+sVAKjJxvwcGNTphpaEiV34Wf3TSYg2Vtx0ycGKPLYeqB380lNZ5K9UOhmEdndH5z7o+ksdl3nQIDKhBVJ5cuDGNFKG/8rsjvz4vIX1DNR5C13m7i78usK1A6EZbYNBotUvQ3V7bsQ0Cu8AtEZpw6w11SWxZothLdFQy5rluL8t86/Bc69bpWP0Ga8MwvCU5GJzRykVIH+9m12xGSupLNj+UH24TmFOXIhdL+D8uZJ0hlsrjDonirbYt99H02y+RGsH9TdqG1GGNxqIIiKstbxwyeJ0IXeMO1SRNxmSj6+MkTet5Wm70LbUq9LYQnfO6LdLAFs6gkFspCkndFq7bTAIaBvjqUTmpVRTE33iE6j/rM3jhTZfjoPFu0e81qdDogCzIp4LyZVb2mWqGcpRymWFwaF9GRXa2gQooxmuhm6Eqy553fq+t9Meh5EZe9b1Ao62fa+t5U8RcAaWVfNPE6xrTxWHZ8q6hS9p7b9xVuvnoywBV15KCyBFY8l8PDE6Irqfvd+18QUwVXNUFISveyW2hEGus39PdRLzFW8BnXDW2emqDlwlOU6lpXtZElehi3VUPG+QW7X1HVK/W+fGSxjy2njudZjA1FNRAv6MT0DjSqlmcl9XjK29Ng5n+xwHOZX+2ZWo/G08iz4Qv1VbnOrxg5V/ueOTsfv5U1Fp0LSofRj5pnYug9aSTZWcoiO6x5ZLGykXLpytuGTRSoHKYhd8bLvZYfJzeAUtjSbRVZXk4HKY8nE613ZUp1JV/PD08flk+TihkYEAzHdH/Op3dTWdkI3m0XGVlfkq1F+ScbtXjqy9Nw6WiUgFyn5S4gpcZMKguX7BRjPR1TL5msCcNVyvo+w13+NU2w0DmHx1aGrz1WVxhDGvp6Pt5fb1Bd9rC8G6Rtvn74hLIzQaSkatjtnSApR2VJxhIk3vkNdpsiz3EupPnyNmY4epdHdgYcS8EGp/50qtxsd7S34hNesZbXYdNyA/05vIDVPANvhFIHdoPCgz2Hhqudh3fkX8sS59/AMHYGLE=",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Update of custom project specific issue sub-type",permalink:"/docs/api/service-api/update-project-issue-sub-type-using-put"},next:{title:"Delete custom project specific issue sub-type",permalink:"/docs/api/service-api/delete-project-issue-sub-type-using-delete"}},q={},G=[{value:"Request",id:"request",level:2}];function V(e){const s={h2:"h2",p:"p",...(0,a.a)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"openapi__heading",children:(0,t.jsx)(s.p,{children:"Creation of custom project specific issue sub-type"})}),"\n",(0,t.jsx)(p(),{method:"post",path:"/v1/{projectName}/settings/sub-type"}),"\n",(0,t.jsx)(s.p,{children:"Creation of custom project specific issue sub-type"}),"\n",(0,t.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(s.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,t.jsx)(l(),{className:"openapi-tabs__mime",children:(0,t.jsx)(b.default,{label:"application/json",value:"application/json-schema",children:(0,t.jsxs)(i,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,t.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,t.jsx)(s.p,{children:"Body"})}),(0,t.jsx)("strong",{className:"openapi-schema__required",children:(0,t.jsx)(s.p,{children:"required"})})]}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,t.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,t.jsx)(s.p,{children:"request"})})}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(x(),{collapsible:!1,name:"color",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"longName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"shortName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"typeRef",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(n(),{label:void 0,id:void 0,children:(0,t.jsxs)(b.default,{label:"201",value:"201",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"Created"})}),(0,t.jsx)("div",{children:(0,t.jsx)(l(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(b.default,{label:"*/*",value:"*/*",children:(0,t.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,t.jsx)(x(),{collapsible:!1,name:"locator",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,t.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(h(),{responseExample:'{\n  "id": 0,\n  "locator": "string"\n}',language:"json"})})]})})})})]})})})})]})}function k(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(V,{...e})}):V(e)}}}]);