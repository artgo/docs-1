"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79356],{13256:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>I,contentTitle:()=>b,default:()=>B,frontMatter:()=>N,metadata:()=>y,toc:()=>q});var i=s(85893),n=s(11151),r=s(58219),l=s.n(r),t=(s(62316),s(51039)),o=s.n(t),c=(s(82723),s(9487)),d=s.n(c),p=s(41429),m=s.n(p),h=s(5397),g=s.n(h),u=s(4667),f=s.n(u),x=s(9472),j=s.n(x),v=(s(1176),s(12005),s(85162));const N={id:"create-log-entry-using-post-1",title:"Create log",description:"Create log",sidebar_label:"Create log",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVsGO2zYQ/RVhTklAWfZukwA6dbvdogsE6dZeX+oYBS2NJSYUqZCUvYagfy+Gki1p5TQ+WdRw5s3wvSfW4HhmId6A1FmYaOWMlhINbBnoEg13QqvHFGJIDHKHn3T2oJw5ra1Q2dNfq+d/F8Cg5IYX6NBQphoULxBiKI3+ion7TE8MhKIl7nJgkKJNjCgp9yTO4PdKGEwhdqZCBjbJseAQ1+BOJaW1zgiVQdNs22C07jednihinPeCePk3MKDeUDkK42UpReJbi75aiq2HZYSTVGfFD5fNPagNSF6pJF9XIgUGThRIs+qw6R11QhMxND0n0FLKvaCMfeo/6Plnm9opTttuGAiHhQcwef16tuv14++B3gcOrQtoW6CPCtPA5cIGUmfQsGFD03IMJB5QXquEqipoIGiMNsDgyI3yB73XHseuoihneELN7rnjEhhU6pvSRwXbhkGB1vLsWpfdZK9U3WtTcAcxpNxh6KMaBtV19I0f15hSfsGWWtl2zjfzxZQ795476Zg376J316niJdFtubMnlSxXPz3eH+IlxCmWBhOPIN5zaZHBS5joFDNUYUf6cKfTU9hpbcz1a73402aALw6VFVq1Uv2GJ4j/NzeDA5fV6xokvgJdrskaSm19fyTuGKLDIqoHmm4iqbMIaUTAwKI5nH2iMhJioFinEy2bOIpqXrlcG+FOTcRLMelliaU27kkbx2XQ5vIIjeA72Q72nK491D2vJLEld660k3RP59iezRQIrIsnkl4QTVnyp7YuoCkFXKUBIQveiH2gEFNM35LuWrzBa8A9rhQLPTM+qvRBM6GJB1saVVK1dTc17JAbNHcVjXizHb5eER3b1odBF251DXnW0nMbBEQzMr9lb6EPL7woW6c6O1ZHr16WvfX0khwayGC19Y2LPVzE3oe0Goeb+c0v4fw2nH98XtzGi3l8+3724cPHf+Cs62F9cpeB9EYD/gFdzuO/e3oMUp1UBSrn3b+TN0/coNdVVdImokTBBXVg25VfJ8fEQIoElR2O6q7kSY7BzWxO8D3D6QTiKDoejzPu3860yaJuq40+Pd4/fF49hLSlYUDyaNG/ny3mswWtkcIKrgZlRqIeNX05eIcvLiolF8o7pPGKaEW6gQN9t+Pxp7dzCK/ULYOcZB1voK533OLayKah5e8VGuLkttedZ2gqLP3vHesVqouRwptlZ8hvgzGAq8C7Ra5OAy8C1lnXMEFDcs2Rp2gG5nbf1g2fKU+fYXIJaNh5x12SYOkGsWT8I8ejmw8w2HX3jkKnFGb4ke4K/AgxfIEvBFL79r04/XoNkqusanXQlqXff4ufQIY=",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},b=void 0,y={id:"api/service-api/create-log-entry-using-post-1",title:"Create log",description:"Create log",source:"@site/docs/api/service-api/create-log-entry-using-post-1.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/create-log-entry-using-post-1",permalink:"/docs/api/service-api/create-log-entry-using-post-1",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-log-entry-using-post-1",title:"Create log",description:"Create log",sidebar_label:"Create log",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVsGO2zYQ/RVhTklAWfZukwA6dbvdogsE6dZeX+oYBS2NJSYUqZCUvYagfy+Gki1p5TQ+WdRw5s3wvSfW4HhmId6A1FmYaOWMlhINbBnoEg13QqvHFGJIDHKHn3T2oJw5ra1Q2dNfq+d/F8Cg5IYX6NBQphoULxBiKI3+ion7TE8MhKIl7nJgkKJNjCgp9yTO4PdKGEwhdqZCBjbJseAQ1+BOJaW1zgiVQdNs22C07jednihinPeCePk3MKDeUDkK42UpReJbi75aiq2HZYSTVGfFD5fNPagNSF6pJF9XIgUGThRIs+qw6R11QhMxND0n0FLKvaCMfeo/6Plnm9opTttuGAiHhQcwef16tuv14++B3gcOrQtoW6CPCtPA5cIGUmfQsGFD03IMJB5QXquEqipoIGiMNsDgyI3yB73XHseuoihneELN7rnjEhhU6pvSRwXbhkGB1vLsWpfdZK9U3WtTcAcxpNxh6KMaBtV19I0f15hSfsGWWtl2zjfzxZQ795476Zg376J316niJdFtubMnlSxXPz3eH+IlxCmWBhOPIN5zaZHBS5joFDNUYUf6cKfTU9hpbcz1a73402aALw6VFVq1Uv2GJ4j/NzeDA5fV6xokvgJdrskaSm19fyTuGKLDIqoHmm4iqbMIaUTAwKI5nH2iMhJioFinEy2bOIpqXrlcG+FOTcRLMelliaU27kkbx2XQ5vIIjeA72Q72nK491D2vJLEld660k3RP59iezRQIrIsnkl4QTVnyp7YuoCkFXKUBIQveiH2gEFNM35LuWrzBa8A9rhQLPTM+qvRBM6GJB1saVVK1dTc17JAbNHcVjXizHb5eER3b1odBF251DXnW0nMbBEQzMr9lb6EPL7woW6c6O1ZHr16WvfX0khwayGC19Y2LPVzE3oe0Goeb+c0v4fw2nH98XtzGi3l8+3724cPHf+Cs62F9cpeB9EYD/gFdzuO/e3oMUp1UBSrn3b+TN0/coNdVVdImokTBBXVg25VfJ8fEQIoElR2O6q7kSY7BzWxO8D3D6QTiKDoejzPu3860yaJuq40+Pd4/fF49hLSlYUDyaNG/ny3mswWtkcIKrgZlRqIeNX05eIcvLiolF8o7pPGKaEW6gQN9t+Pxp7dzCK/ULYOcZB1voK533OLayKah5e8VGuLkttedZ2gqLP3vHesVqouRwptlZ8hvgzGAq8C7Ra5OAy8C1lnXMEFDcs2Rp2gG5nbf1g2fKU+fYXIJaNh5x12SYOkGsWT8I8ejmw8w2HX3jkKnFGb4ke4K/AgxfIEvBFL79r04/XoNkqusanXQlqXff4ufQIY=",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Create log (batching operation)",permalink:"/docs/api/service-api/create-log-using-post-1"},next:{title:"Get next or previous log in test item",permalink:"/docs/api/service-api/get-error-page-using-get"}},I={},q=[{value:"Request",id:"request",level:2}];function k(e){const a={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(a.p,{children:"Create log"})}),"\n",(0,i.jsx)(o(),{method:"post",path:"/v1/{projectName}/log/entry"}),"\n",(0,i.jsx)(a.p,{children:"Create log"}),"\n",(0,i.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(d(),{className:"openapi-tabs__mime",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(a.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(a.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(a.p,{children:"createLogRQ"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(f(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(a.p,{children:"file"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(a.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(f(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(f(),{collapsible:!1,name:"itemUuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"UUID of test item owned this log"}}),(0,i.jsx)(f(),{collapsible:!1,name:"launchUuid",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(f(),{collapsible:!1,name:"level",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`error`, `warn`, `info`, `debug`, `trace`, `fatal`, `unknown`]",schema:{type:"string",enum:["error","warn","info","debug","trace","fatal","unknown"]}}),(0,i.jsx)(f(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(f(),{collapsible:!1,name:"time",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(f(),{collapsible:!1,name:"uuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(l(),{label:void 0,id:void 0,children:(0,i.jsxs)(v.default,{label:"201",value:"201",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Created"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(f(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(g(),{responseExample:'{\n  "id": "string"\n}',language:"json"})})]})})})})]})})})})]})}function B(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}}}]);