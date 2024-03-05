"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4953],{86916:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>A,frontMatter:()=>b,metadata:()=>K,toc:()=>E});var a=s(85893),i=s(11151),n=s(58219),r=s.n(n),l=(s(62316),s(51039)),d=s.n(l),o=(s(82723),s(9487)),m=s.n(o),c=s(41429),p=s.n(c),h=s(5397),u=s.n(h),g=s(4667),x=s.n(g),v=s(9472),f=s.n(v),j=(s(1176),s(12005),s(85162));const b={id:"get-settings",title:"Retrieves auth settings",description:"Retrieves auth settings",sidebar_label:"Retrieves auth settings",hide_title:!0,hide_table_of_contents:!0,api:"eJx1VMFu2zAM/RWDp7ZQ46zALjotGIqt2LAVTXsKfFBsJtZmS6pEtSsM//tAy3HcZDtZlh6fHskndmAdekXamrsKJOyR1kikzT6AAKe8apHQB5CbDrQBCU5RDQKMahEkqEj145tDEODxOWqPFUjyEQWEssZWgeyAGCAhkNdmDwLQxBbkBlQFAppKORAQVNtA0fcFEwVnTcDAsTfLJX9KawgN8fIqv+LPGb3d/sKSWLXnnEgngnR6KqLvBZCmhrdW20BelbSKVD9gsNGXCD0jKgyl146rAxJ+fkthah8G9ZHq69Kand7HVMFrNJWz2hAUp7EPSF7jC4aMw7JwrHGLVNux9EPJqQYJ+QGRMz7vDnXuuVToXw4tib4BCZ3zlmxpm17mCWu9prc+j4o5T6U46+neelJN9rR6zBIfCHhRXqttk+p2oOR1hTsVGwIJNZELZ5T3B+yxtwwEMeKLXsCkKhHOw7/aQBkbKlOmylhddqF3mUGssLrM7C5LmrNR9CT4qKvC1i78gHIDaKEt97DgcpUx3bvpYIvKo+dOg9wU8+M1+ymlPgdNxhkTGmzH/wk0OEKbnT2YVJWDSbFVmjsTomM9n06lTQ9onQBw5rb3KXOfKlvGFg0NXuOXo0s0YTD3SLZyqqwxu1ksQYzWYNkyz19fXxdqOF1Yv8/H0JB/v/t8+2N9e80hsyfx7nJ2BvqQZH1cfFgmrLOBWmVm1//f5O9Sm0pK+Idy1yhtmG/Q240PYAOzaGYDAXIaNoWA2gZiWNdtVcAn3/Q9bz9H9Nzp4ujmoe+VDryuQO5UE/BM0TRf4OJhnGOXGYh/Kx03lXkbHk0T+Q8E/Ma3+Ujs2fY1qgr9oCEdr8oSHc0CeZ6xEadB8OX2Efr+L4bK7NE=",sidebar_class_name:"get api-method",info_path:"api/service-uat/report-portal",custom_edit_url:null},y=void 0,K={id:"api/service-uat/get-settings",title:"Retrieves auth settings",description:"Retrieves auth settings",source:"@site/docs/api/service-uat/get-settings.api.mdx",sourceDirName:"api/service-uat",slug:"/api/service-uat/get-settings",permalink:"/docs/api/service-uat/get-settings",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-settings",title:"Retrieves auth settings",description:"Retrieves auth settings",sidebar_label:"Retrieves auth settings",hide_title:!0,hide_table_of_contents:!0,api:"eJx1VMFu2zAM/RWDp7ZQ46zALjotGIqt2LAVTXsKfFBsJtZmS6pEtSsM//tAy3HcZDtZlh6fHskndmAdekXamrsKJOyR1kikzT6AAKe8apHQB5CbDrQBCU5RDQKMahEkqEj145tDEODxOWqPFUjyEQWEssZWgeyAGCAhkNdmDwLQxBbkBlQFAppKORAQVNtA0fcFEwVnTcDAsTfLJX9KawgN8fIqv+LPGb3d/sKSWLXnnEgngnR6KqLvBZCmhrdW20BelbSKVD9gsNGXCD0jKgyl146rAxJ+fkthah8G9ZHq69Kand7HVMFrNJWz2hAUp7EPSF7jC4aMw7JwrHGLVNux9EPJqQYJ+QGRMz7vDnXuuVToXw4tib4BCZ3zlmxpm17mCWu9prc+j4o5T6U46+neelJN9rR6zBIfCHhRXqttk+p2oOR1hTsVGwIJNZELZ5T3B+yxtwwEMeKLXsCkKhHOw7/aQBkbKlOmylhddqF3mUGssLrM7C5LmrNR9CT4qKvC1i78gHIDaKEt97DgcpUx3bvpYIvKo+dOg9wU8+M1+ymlPgdNxhkTGmzH/wk0OEKbnT2YVJWDSbFVmjsTomM9n06lTQ9onQBw5rb3KXOfKlvGFg0NXuOXo0s0YTD3SLZyqqwxu1ksQYzWYNkyz19fXxdqOF1Yv8/H0JB/v/t8+2N9e80hsyfx7nJ2BvqQZH1cfFgmrLOBWmVm1//f5O9Sm0pK+Idy1yhtmG/Q240PYAOzaGYDAXIaNoWA2gZiWNdtVcAn3/Q9bz9H9Nzp4ujmoe+VDryuQO5UE/BM0TRf4OJhnGOXGYh/Kx03lXkbHk0T+Q8E/Ma3+Ujs2fY1qgr9oCEdr8oSHc0CeZ6xEadB8OX2Efr+L4bK7NE=",sidebar_class_name:"get api-method",info_path:"api/service-uat/report-portal",custom_edit_url:null},sidebar:"serviceUat",previous:{title:"auth-configuration-endpoint",permalink:"/docs/api/service-uat/auth-configuration-endpoint"},next:{title:"Create new auth integration",permalink:"/docs/api/service-uat/create-auth-integration"}},k={},E=[{value:"Request",id:"request",level:2}];function N(e){const t={h2:"h2",p:"p",...(0,i.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(t.p,{children:"Retrieves auth settings"})}),"\n",(0,a.jsx)(d(),{method:"get",path:"/settings/auth/{authType}"}),"\n",(0,a.jsx)(t.p,{children:"Retrieves auth settings"}),"\n",(0,a.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(t.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(p(),{className:"paramsItem",param:{in:"path",name:"authType",required:!0,schema:{type:"string",enum:["ad","ldap","saml"]}}})})})]}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(r(),{label:void 0,id:void 0,children:(0,a.jsxs)(j.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(t.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(j.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(t.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)(x(),{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,a.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(u(),{responseExample:'{\n  "type": "string"\n}',language:"json"})})]})})})})]})})})})]})}function A(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(N,{...e})}):N(e)}}}]);