"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56686],{22047:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>E,frontMatter:()=>g,metadata:()=>v,toc:()=>q});var s=i(85893),a=i(11151),r=i(58219),n=i.n(r),l=(i(62316),i(51039)),p=i.n(l),c=(i(82723),i(9487)),d=i.n(c),o=i(41429),m=i.n(o),u=i(5397),h=i.n(u),f=(i(4667),i(9472)),x=i.n(f),j=(i(1176),i(12005),i(85162));const g={id:"get-attribute-keys-using-get-2",title:"Get all unique attribute keys of step items under specified project",description:"Get all unique attribute keys of step items under specified project",sidebar_label:"Get all unique attribute keys of step items under specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJytVU1v2zAM/SsCT2uh2m2BXXxaMARd0aEr+nEqgkGxmVirLakSnS4w/N8H2o7jJG1XDPPFsMSPx0fyuQZSywDJIxAGOtGE5UlqDXlbFOhhJsE69Iq0NZcZJLBEmhB5Pa8Ir3AdHoI2y4vp/c9zkOCUVyUSeg5Yg1ElQgILXRD6KDUUqZErSNAGEniu0PNHhiH12nGmd508PlfaYwYJ+QolhDTHUkFSA60d5wvktVlC08h9CPgctQcfyby1/UgC5+0vTOl6FN0pyg+C79p9vJQZGwdnTcDA9+enp/zaDf7jCiRw89AQ3x7Hx/w6iKq8Vy39hGV4LRs/jNx5TBUxvoUqAu4Xc4EkVFGIyujnCsXQJ/GE6yDsQgRCJ9osojIZehEcpnqhMRM9ESChRMptP1rtDFEOCcSrs7gesdXEHCfmiPGQKOZE3CH0q83QVb6ABNiVbGqLJonjWlWUW69p3cTK6YOm3KKznm6sJ1WILhZIWCmv1bzo+N6E60hfqKogSCAncuEg3M3GVgKaquTdYkOQvf2skTAgOuziNxtI8FgJZTLByMQnvRAGMcPsiGnt8Ip9wFtcGZY28q2Va40ibbmtM6Yqrbq8jzXMUXn0k4oZf5yNr+94ZrrSx0bDqPQFtaPF350RrwRos7CtpaYCB3Z7tG9wv6llcnMpMptWJRpqNacfaJW2A90v213l2In5LZXmdofu5MtBzRIKnaIJOHKfOJXmKM6jU5D9uHA5SRy/vLxEqr2NrF/GvWuIv19+nV7fTU/YpZHAs9ah/xydnUZnfOZsoFKZUZr/sx07bA30E/6m2BVKG87d1lD3m/MIqzOQkOwpEmHJ/SLktg1YQEK7QjMJuQ3E3nU9VwEffNE0fNxpJA9LpgOvwxtiUG+FBz7d9rp2JN6W8VcrecL1u9q/UkXFXsDS+3FAB5L+9+Rb223O2VYU/p2R3b68CmQj02an5A3AcYCGtSRHlaFvEXUWkzRFRyNf/hEw+kFqL6b30DR/ALZdw54=",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},y=void 0,v={id:"api/service-api/get-attribute-keys-using-get-2",title:"Get all unique attribute keys of step items under specified project",description:"Get all unique attribute keys of step items under specified project",source:"@site/docs/api/service-api/get-attribute-keys-using-get-2.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-attribute-keys-using-get-2",permalink:"/docs/api/service-api/get-attribute-keys-using-get-2",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-attribute-keys-using-get-2",title:"Get all unique attribute keys of step items under specified project",description:"Get all unique attribute keys of step items under specified project",sidebar_label:"Get all unique attribute keys of step items under specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJytVU1v2zAM/SsCT2uh2m2BXXxaMARd0aEr+nEqgkGxmVirLakSnS4w/N8H2o7jJG1XDPPFsMSPx0fyuQZSywDJIxAGOtGE5UlqDXlbFOhhJsE69Iq0NZcZJLBEmhB5Pa8Ir3AdHoI2y4vp/c9zkOCUVyUSeg5Yg1ElQgILXRD6KDUUqZErSNAGEniu0PNHhiH12nGmd508PlfaYwYJ+QolhDTHUkFSA60d5wvktVlC08h9CPgctQcfyby1/UgC5+0vTOl6FN0pyg+C79p9vJQZGwdnTcDA9+enp/zaDf7jCiRw89AQ3x7Hx/w6iKq8Vy39hGV4LRs/jNx5TBUxvoUqAu4Xc4EkVFGIyujnCsXQJ/GE6yDsQgRCJ9osojIZehEcpnqhMRM9ESChRMptP1rtDFEOCcSrs7gesdXEHCfmiPGQKOZE3CH0q83QVb6ABNiVbGqLJonjWlWUW69p3cTK6YOm3KKznm6sJ1WILhZIWCmv1bzo+N6E60hfqKogSCAncuEg3M3GVgKaquTdYkOQvf2skTAgOuziNxtI8FgJZTLByMQnvRAGMcPsiGnt8Ip9wFtcGZY28q2Va40ibbmtM6Yqrbq8jzXMUXn0k4oZf5yNr+94ZrrSx0bDqPQFtaPF350RrwRos7CtpaYCB3Z7tG9wv6llcnMpMptWJRpqNacfaJW2A90v213l2In5LZXmdofu5MtBzRIKnaIJOHKfOJXmKM6jU5D9uHA5SRy/vLxEqr2NrF/GvWuIv19+nV7fTU/YpZHAs9ah/xydnUZnfOZsoFKZUZr/sx07bA30E/6m2BVKG87d1lD3m/MIqzOQkOwpEmHJ/SLktg1YQEK7QjMJuQ3E3nU9VwEffNE0fNxpJA9LpgOvwxtiUG+FBz7d9rp2JN6W8VcrecL1u9q/UkXFXsDS+3FAB5L+9+Rb223O2VYU/p2R3b68CmQj02an5A3AcYCGtSRHlaFvEXUWkzRFRyNf/hEw+kFqL6b30DR/ALZdw54=",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Find accumulated statistics of items by specified filter",permalink:"/docs/api/service-api/get-test-items-using-get-1"},next:{title:"Get all unique attribute values of step items under specified project",permalink:"/docs/api/service-api/get-attribute-values-using-get-2"}},b={},q=[{value:"Request",id:"request",level:2}];function k(e){const t={h2:"h2",p:"p",...(0,a.a)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"openapi__heading",children:(0,s.jsx)(t.p,{children:"Get all unique attribute keys of step items under specified project"})}),"\n",(0,s.jsx)(p(),{method:"get",path:"/v1/{projectName}/item/step/attribute/keys"}),"\n",(0,s.jsx)(t.p,{children:"Get all unique attribute keys of step items under specified project"}),"\n",(0,s.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,s.jsx)(t.p,{children:"Path Parameters"})})}),(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:(0,s.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,s.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,s.jsx)(t.p,{children:"Query Parameters"})})}),(0,s.jsx)("div",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)(m(),{className:"paramsItem",param:{name:"filter.cnt.attributeKey",in:"query",description:"filter.cnt.attributeKey",required:!0,schema:{type:"string"}}}),(0,s.jsx)(m(),{className:"paramsItem",param:{name:"filter.eq.name",in:"query",description:"filter.eq.name",schema:{type:"string"}}})]})})]}),"\n",(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsx)(n(),{label:void 0,id:void 0,children:(0,s.jsxs)(j.default,{label:"200",value:"200",children:[(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"OK"})}),(0,s.jsx)("div",{children:(0,s.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,s.jsx)(j.default,{label:"*/*",value:"*/*",children:(0,s.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,s.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,s.jsx)("strong",{children:(0,s.jsx)(t.p,{children:"Schema"})})}),(0,s.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,s.jsx)("li",{children:(0,s.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,s.jsx)(t.p,{children:"Array ["})})}),(0,s.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"},children:(0,s.jsx)(t.p,{children:"string"})}),(0,s.jsx)("li",{children:(0,s.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,s.jsx)(t.p,{children:"]"})})})]})]})}),(0,s.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,s.jsx)(h(),{responseExample:'[\n  "string"\n]',language:"json"})})]})})})})]})})})})]})}function E(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}}}]);