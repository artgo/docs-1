"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18911],{41797:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>f,contentTitle:()=>N,default:()=>Q,frontMatter:()=>v,metadata:()=>W,toc:()=>y});var a=s(85893),i=s(11151),r=s(58219),n=s.n(r),l=(s(62316),s(51039)),d=s.n(l),p=(s(82723),s(9487)),o=s.n(p),c=s(41429),m=s.n(c),j=s(5397),g=s.n(j),h=(s(4667),s(9472)),u=s.n(h),x=(s(1176),s(12005),s(85162));const v={id:"get-project-widget-using-get",title:"getProjectWidget",description:"getProjectWidget",sidebar_label:"getProjectWidget",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v2zAM/SsGT22h2kmHXXxaUBRbsa0L2hU7BDkoNhNrsyVVopMFhv/7QH8kdtMOW30xLD2Sj48froDkxkO8AOvMT0zoMjGanMlzdLAUYCw6Scro2xRi2CDNW9gPlW6QHr3Sm48330GAlU4WSOjYWQVaFggxKE3otjIHAUpDDE8luj0ISNEnTll2PEb5JMNCQlwB7S178OSU3jQma1nmBDG8+wp1LQ4xOuJ3/NWFsZKykyhjnMOnUjlMISZX4uuBh5F2TdLXJv17oBHs3+MsGeyt0R49319NJvwa+/72GQRwiVAT315EF/w68WpWnCvU/DA/6zCRxDTWMvf4nPLzwoKAAikzXdGb+lIGMUTbadQJGVUDReuozTqqjtnXXE90274nSpdDDGxFJjF5HUdRJUvKjFO0ryNp1YmU92iNo7lxJPOg9QUCttIpucpbmXp3rVZ9j2RE1p+4m/dYAajLgtuegSA6/LIWcGB0Kv4n4yngXgikTgNmFpypdaARU0zPA7MOWr7Bc8JHXikWJnQNyjagUBmu0pKlSso27qKCFUqHblay6Ivl8PqBS92mPgQdKt8l1HQEf7cg7mNQem0apKIcD+p2bF/Rvs9lNr8NUpOUBWpqFkLXhzJp+rCbkIfSshHrW0jF5fbtyYeTnAXkKkHtcWA+szLJMLgKJyC6duF04ija7XahbG5D4zZRZ+qjL7fXN3cPN5dsUgvgXmvZvw+nk3DKZ9Z4KqQehHmh20epH7Qk/E2RzaXS7KghVHWTsIDtlMei9QMC4vF+2fWe48E6WArIjCe2rqqV9Pjo8rrm43YxcuVT5bm3X5nU6jj8w7X5It9fuB+jtjIvGQbcT/0Q/WfQs/tuoZ0H44RfpNAdSr0fhu+pDR3wmn0Ti9G2fQOJgX3N85+hTNE1qrSAWZKgpYEp71xW8LAh+Q9Y138ATyqBSQ==",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},N=void 0,W={id:"api/service-api/get-project-widget-using-get",title:"getProjectWidget",description:"getProjectWidget",source:"@site/docs/api/service-api/get-project-widget-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-project-widget-using-get",permalink:"/docs/api/service-api/get-project-widget-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-project-widget-using-get",title:"getProjectWidget",description:"getProjectWidget",sidebar_label:"getProjectWidget",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v2zAM/SsGT22h2kmHXXxaUBRbsa0L2hU7BDkoNhNrsyVVopMFhv/7QH8kdtMOW30xLD2Sj48froDkxkO8AOvMT0zoMjGanMlzdLAUYCw6Scro2xRi2CDNW9gPlW6QHr3Sm48330GAlU4WSOjYWQVaFggxKE3otjIHAUpDDE8luj0ISNEnTll2PEb5JMNCQlwB7S178OSU3jQma1nmBDG8+wp1LQ4xOuJ3/NWFsZKykyhjnMOnUjlMISZX4uuBh5F2TdLXJv17oBHs3+MsGeyt0R49319NJvwa+/72GQRwiVAT315EF/w68WpWnCvU/DA/6zCRxDTWMvf4nPLzwoKAAikzXdGb+lIGMUTbadQJGVUDReuozTqqjtnXXE90274nSpdDDGxFJjF5HUdRJUvKjFO0ryNp1YmU92iNo7lxJPOg9QUCttIpucpbmXp3rVZ9j2RE1p+4m/dYAajLgtuegSA6/LIWcGB0Kv4n4yngXgikTgNmFpypdaARU0zPA7MOWr7Bc8JHXikWJnQNyjagUBmu0pKlSso27qKCFUqHblay6Ivl8PqBS92mPgQdKt8l1HQEf7cg7mNQem0apKIcD+p2bF/Rvs9lNr8NUpOUBWpqFkLXhzJp+rCbkIfSshHrW0jF5fbtyYeTnAXkKkHtcWA+szLJMLgKJyC6duF04ija7XahbG5D4zZRZ+qjL7fXN3cPN5dsUgvgXmvZvw+nk3DKZ9Z4KqQehHmh20epH7Qk/E2RzaXS7KghVHWTsIDtlMei9QMC4vF+2fWe48E6WArIjCe2rqqV9Pjo8rrm43YxcuVT5bm3X5nU6jj8w7X5It9fuB+jtjIvGQbcT/0Q/WfQs/tuoZ0H44RfpNAdSr0fhu+pDR3wmn0Ti9G2fQOJgX3N85+hTNE1qrSAWZKgpYEp71xW8LAh+Q9Y138ATyqBSQ==",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get users assigned on current project",permalink:"/docs/api/service-api/get-project-users-using-get-1"},next:{title:"project-settings-controller",permalink:"/docs/api/service-api/project-settings-controller"}},f={},y=[{value:"Request",id:"request",level:2}];function b(e){const t={h2:"h2",p:"p",...(0,i.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(t.p,{children:"getProjectWidget"})}),"\n",(0,a.jsx)(d(),{method:"get",path:"/v1/project/{projectName}/widget/{widgetCode}"}),"\n",(0,a.jsx)(t.p,{children:"getProjectWidget"}),"\n",(0,a.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(t.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}}),(0,a.jsx)(m(),{className:"paramsItem",param:{name:"widgetCode",in:"path",description:"widgetCode",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,a.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(t.p,{children:"Query Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(m(),{className:"paramsItem",param:{name:"interval",in:"query",description:"interval",schema:{type:"string",default:"3M"}}})})})]}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(n(),{label:void 0,id:void 0,children:(0,a.jsxs)(x.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(t.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(x.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(x.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(t.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"},children:(0,a.jsx)(t.p,{children:"object"})})})]})}),(0,a.jsx)(x.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(g(),{responseExample:"{}",language:"json"})})]})})})})]})})})})]})}function Q(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}}}]);