"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52281],{52650:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>P,contentTitle:()=>N,default:()=>C,frontMatter:()=>y,metadata:()=>b,toc:()=>W});var a=s(85893),i=s(11151),n=s(58219),t=s.n(n),c=(s(62316),s(51039)),m=s.n(c),d=(s(82723),s(9487)),l=s.n(d),o=s(41429),p=s.n(o),u=s(5397),v=s.n(u),h=s(4667),j=s.n(h),f=s(9472),g=s.n(f),x=(s(1176),s(12005),s(85162));const y={id:"remove-user-preference-using-delete",title:"removeUserPreference",description:"removeUserPreference",sidebar_label:"removeUserPreference",hide_title:!0,hide_table_of_contents:!0,api:"eJydVUtP3DAQ/ivRnACZDaC2h5yK6EpFRYCgnNAeTDK7cevYZjxZiqL892ryWLK8WrGXbOyZ75vHN5MGWK8iZLcQyP/CnPdz75i8tUiwUOADkmbj3WkBGRBWfo03EemScImELsebaNzq2/xs/nMOCoImXSEjCWYDTlcIGSyNZaTTAhQYBxkEzSUoKDDmZILAbxsR3teGsICMqUYFMS+x0pA1wI9BAI1jXCGBgqWnSnN/9OUTtK3asFq/Mu5dytHin3yRybjVFvpQr3N5e49j2+7/mRZiHIN3EaPcHx0cyGMb/OIHKJCOoWO53Uv35DFBNWwF9mLs44mvgkX5d3UNamT1dxKj9I+k42x6zgpj1Ct8LbzuJ7kGwlyzZLTUNuLz9F+TDCiokEsvkirQImOnHC4hg3R9mA4lS5tJ7do0bPzTpmtcmzajZlpQEJHWo+5qspCB+LPPvW2zNG10zaUnw49tqoN50acrDJ740hNrm/RYoGCtyeg725djhOv7sNS1FeGVzCG+gLscbRWgqyuZMDEENdgvWgWbiF429ruPnIjSEu2KRCJLdswycYgFFruJXyZ9vMnzgJ/iKrDyM+qsQmc0M14at5BS5XXPe9vAHWpCOq6l/LeL6fW1yKhPfWq0EcOQUKc2ee+NZErAuKWf6m8r2jdqP+ZyfHmaFD6vK3TcaXbQuM47jQ/zd10HcZL6VtpIu2N/8vVFzgqsydFFnLgfB52XmBzNDkANcpF0sjR9eHiY6e525mmVDq4xPTs9mZ9fz/fFpVUgWuuj/zw7PJgdylnwkSvtJjRvyH8r/U09Gf9wGqw2TsC6oJphLm5hfdiP5zCo2fZeCVP0bNxr2WanLhSUPrIANc2djnhDtm3l+L5GEiEsnsTeyaIwUf6/MdfN09aBnathqe0mkx3+ak7DoXaP3WzZWt5AwW98nH4BZM1+iH9M/APkveuHmbfb8QH+KUAr26FEXSB1vegtjvMcA098ZdvLvG6W6fAZbtu/XYSxow==",sidebar_class_name:"delete api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},N=void 0,b={id:"api/service-api/remove-user-preference-using-delete",title:"removeUserPreference",description:"removeUserPreference",source:"@site/docs/api/service-api/remove-user-preference-using-delete.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/remove-user-preference-using-delete",permalink:"/docs/api/service-api/remove-user-preference-using-delete",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"remove-user-preference-using-delete",title:"removeUserPreference",description:"removeUserPreference",sidebar_label:"removeUserPreference",hide_title:!0,hide_table_of_contents:!0,api:"eJydVUtP3DAQ/ivRnACZDaC2h5yK6EpFRYCgnNAeTDK7cevYZjxZiqL892ryWLK8WrGXbOyZ75vHN5MGWK8iZLcQyP/CnPdz75i8tUiwUOADkmbj3WkBGRBWfo03EemScImELsebaNzq2/xs/nMOCoImXSEjCWYDTlcIGSyNZaTTAhQYBxkEzSUoKDDmZILAbxsR3teGsICMqUYFMS+x0pA1wI9BAI1jXCGBgqWnSnN/9OUTtK3asFq/Mu5dytHin3yRybjVFvpQr3N5e49j2+7/mRZiHIN3EaPcHx0cyGMb/OIHKJCOoWO53Uv35DFBNWwF9mLs44mvgkX5d3UNamT1dxKj9I+k42x6zgpj1Ct8LbzuJ7kGwlyzZLTUNuLz9F+TDCiokEsvkirQImOnHC4hg3R9mA4lS5tJ7do0bPzTpmtcmzajZlpQEJHWo+5qspCB+LPPvW2zNG10zaUnw49tqoN50acrDJ740hNrm/RYoGCtyeg725djhOv7sNS1FeGVzCG+gLscbRWgqyuZMDEENdgvWgWbiF429ruPnIjSEu2KRCJLdswycYgFFruJXyZ9vMnzgJ/iKrDyM+qsQmc0M14at5BS5XXPe9vAHWpCOq6l/LeL6fW1yKhPfWq0EcOQUKc2ee+NZErAuKWf6m8r2jdqP+ZyfHmaFD6vK3TcaXbQuM47jQ/zd10HcZL6VtpIu2N/8vVFzgqsydFFnLgfB52XmBzNDkANcpF0sjR9eHiY6e525mmVDq4xPTs9mZ9fz/fFpVUgWuuj/zw7PJgdylnwkSvtJjRvyH8r/U09Gf9wGqw2TsC6oJphLm5hfdiP5zCo2fZeCVP0bNxr2WanLhSUPrIANc2djnhDtm3l+L5GEiEsnsTeyaIwUf6/MdfN09aBnathqe0mkx3+ak7DoXaP3WzZWt5AwW98nH4BZM1+iH9M/APkveuHmbfb8QH+KUAr26FEXSB1vegtjvMcA098ZdvLvG6W6fAZbtu/XYSxow==",sidebar_class_name:"delete api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"addUserPreference",permalink:"/docs/api/service-api/add-user-preference-using-put"},next:{title:"Un assign users",permalink:"/docs/api/service-api/unassign-project-users-using-put"}},P={},W=[{value:"Request",id:"request",level:2}];function U(e){const r={h2:"h2",p:"p",...(0,i.a)(),...e.components},{Details:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(r.p,{children:"removeUserPreference"})}),"\n",(0,a.jsx)(m(),{method:"delete",path:"/v1/project/{projectName}/preference/{login}/{filterId}"}),"\n",(0,a.jsx)(r.p,{children:"removeUserPreference"}),"\n",(0,a.jsx)(r.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(r.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)(p(),{className:"paramsItem",param:{name:"filterId",in:"path",description:"filterId",required:!0,schema:{type:"integer",format:"int64"}}}),(0,a.jsx)(p(),{className:"paramsItem",param:{name:"login",in:"path",description:"login",required:!0,schema:{type:"string"}}}),(0,a.jsx)(p(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(t(),{label:void 0,id:void 0,children:(0,a.jsxs)(x.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(r.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(l(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(x.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(x.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(r.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,a.jsx)(x.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(v(),{responseExample:'{\n  "message": "string"\n}',language:"json"})})]})})})})]})})})})]})}function C(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(U,{...e})}):U(e)}}}]);