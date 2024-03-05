"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51028],{51124:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>q,contentTitle:()=>g,default:()=>W,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var i=a(85893),s=a(11151),r=a(58219),l=a.n(r),n=(a(62316),a(51039)),o=a.n(n),u=(a(82723),a(9487)),c=a.n(u),d=a(41429),p=a.n(d),m=a(5397),h=a.n(m),j=(a(4667),a(9472)),x=a.n(j),v=(a(1176),a(12005),a(85162));const f={id:"get-attribute-values-using-get",title:"Get all unique attribute values of project launches",description:"Get all unique attribute values of project launches",sidebar_label:"Get all unique attribute values of project launches",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1P3DAQ/SvWnAC5CSD1klNXFaKIiiIovaz24E1mN24d29iTpaso/72aJPtFoCD2EiWejzdvnt82QGoZIZuCUbXNy0+5sxScMRhgJsF5DIq0s1cFZLBEmhAFPa8JfylTY3yI2i4vL36CBK+CqpAwcLUGrKoQMlhoQxiS3FKiDlJBgraQwWONYQ0SCox50J57vZEW8LHWAQvIKNQoIeYlVgqyBmjtuWekoO0S2lY+h4GPu3LXuH4XhnHOexr64H5jTjf8NnTxispRk8O494824+DonY0Y+fz89JQfh8V/XIMEXiha4tOT9IQfo6oqBNWRQVjFl7rxj5H7gLkixrdQJuLzYS6RhDJG1FY/1ii2tIlVJxbhFmKYV/RqwwgSKqTSDfLqdEQlZJCuztJmj5027VPSbdW0r8oLwbDa6K4OBjLgTHK5M22Wpo2qqXRB07pNldejHdyhd4FuXSBlRF8LJKxU0Gpueno35XqOF6o2BBmURD6Oyt1uYiWgrSu+WxwIcoiftRK2iMZL++YiCVaRULYQjEwc6YWwiAUWx8xhj1c8B7zDVWDlktBF+S4o0Y63OGOq8rrvO21gjipgmNRM+HS2f3zPEulH3w/aKmMYqFMSv/dBfANA24XrIjUZ3LI7oH2F+80sk9srUbi8rtBSZzuDflXe6Xe4W/e15yTmt1Ka1x37L19GM0swOkcbcS994lVeojhPTkEOcuFxsjR9enpKVHeauLBMh9SYfr/6enFzf/GJU1oJrLUe/efk7DQ542/eRaqU3WvzsctwwM6WbsK/lHqjtOVeHeZmuChTWJ2BhOzQSPqKIGHbtlN0d19mEkoXiVObZq4iPgTTtvy590FWRqEja/+Vi97sTAWO7gbPOhb/M+0XB/mD6ze8voMMGQBb6/tBvWrdb8MY5+wwzHau8HGWDhf1IqCNLduD9hug+wVaNpMSVYGhQ9RHTPIcPe3lsvEz+q3V8l922/4DSHPG5w==",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},g=void 0,b={id:"api/service-api/get-attribute-values-using-get",title:"Get all unique attribute values of project launches",description:"Get all unique attribute values of project launches",source:"@site/docs/api/service-api/get-attribute-values-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-attribute-values-using-get",permalink:"/docs/api/service-api/get-attribute-values-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-attribute-values-using-get",title:"Get all unique attribute values of project launches",description:"Get all unique attribute values of project launches",sidebar_label:"Get all unique attribute values of project launches",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1P3DAQ/SvWnAC5CSD1klNXFaKIiiIovaz24E1mN24d29iTpaso/72aJPtFoCD2EiWejzdvnt82QGoZIZuCUbXNy0+5sxScMRhgJsF5DIq0s1cFZLBEmhAFPa8JfylTY3yI2i4vL36CBK+CqpAwcLUGrKoQMlhoQxiS3FKiDlJBgraQwWONYQ0SCox50J57vZEW8LHWAQvIKNQoIeYlVgqyBmjtuWekoO0S2lY+h4GPu3LXuH4XhnHOexr64H5jTjf8NnTxispRk8O494824+DonY0Y+fz89JQfh8V/XIMEXiha4tOT9IQfo6oqBNWRQVjFl7rxj5H7gLkixrdQJuLzYS6RhDJG1FY/1ii2tIlVJxbhFmKYV/RqwwgSKqTSDfLqdEQlZJCuztJmj5027VPSbdW0r8oLwbDa6K4OBjLgTHK5M22Wpo2qqXRB07pNldejHdyhd4FuXSBlRF8LJKxU0Gpueno35XqOF6o2BBmURD6Oyt1uYiWgrSu+WxwIcoiftRK2iMZL++YiCVaRULYQjEwc6YWwiAUWx8xhj1c8B7zDVWDlktBF+S4o0Y63OGOq8rrvO21gjipgmNRM+HS2f3zPEulH3w/aKmMYqFMSv/dBfANA24XrIjUZ3LI7oH2F+80sk9srUbi8rtBSZzuDflXe6Xe4W/e15yTmt1Ka1x37L19GM0swOkcbcS994lVeojhPTkEOcuFxsjR9enpKVHeauLBMh9SYfr/6enFzf/GJU1oJrLUe/efk7DQ542/eRaqU3WvzsctwwM6WbsK/lHqjtOVeHeZmuChTWJ2BhOzQSPqKIGHbtlN0d19mEkoXiVObZq4iPgTTtvy590FWRqEja/+Vi97sTAWO7gbPOhb/M+0XB/mD6ze8voMMGQBb6/tBvWrdb8MY5+wwzHau8HGWDhf1IqCNLduD9hug+wVaNpMSVYGhQ9RHTPIcPe3lsvEz+q3V8l922/4DSHPG5w==",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get all unique attribute keys of project launches",permalink:"/docs/api/service-api/get-attribute-keys-using-get"},next:{title:"Create launch clusters",permalink:"/docs/api/service-api/create-clusters-using-post"}},q={},y=[{value:"Request",id:"request",level:2}];function S(e){const t={h2:"h2",p:"p",...(0,s.a)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(t.p,{children:"Get all unique attribute values of project launches"})}),"\n",(0,i.jsx)(o(),{method:"get",path:"/v1/{projectName}/launch/attribute/values"}),"\n",(0,i.jsx)(t.p,{children:"Get all unique attribute values of project launches"}),"\n",(0,i.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(t.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(t.p,{children:"Query Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"filter.cnt.attributeValue",in:"query",description:"filter.cnt.attributeValue",required:!0,schema:{type:"string"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"filter.eq.attributeKey",in:"query",description:"filter.eq.attributeKey",schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(l(),{label:void 0,id:void 0,children:(0,i.jsxs)(v.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(t.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(t.p,{children:"Array ["})})}),(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"},children:(0,i.jsx)(t.p,{children:"string"})}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(t.p,{children:"]"})})})]})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(h(),{responseExample:'[\n  "string"\n]',language:"json"})})]})})})})]})})})})]})}function W(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(S,{...e})}):S(e)}}}]);