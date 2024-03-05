"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12064],{15182:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>y,default:()=>D,frontMatter:()=>g,metadata:()=>U,toc:()=>V});var i=a(85893),d=a(11151),t=a(58219),r=a.n(t),o=(a(62316),a(51039)),n=a.n(o),l=(a(82723),a(9487)),c=a.n(l),p=a(41429),m=a.n(p),h=a(5397),u=a.n(h),f=a(4667),b=a.n(f),j=a(9472),v=a.n(j),x=(a(1176),a(12005),a(85162));const g={id:"delete-dashboard-using-delete",title:"Delete specified dashboard by ID for specified project",description:"Delete specified dashboard by ID for specified project",sidebar_label:"Delete specified dashboard by ID for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v2kAQ/SurOTXRBkPU9uBTUUAqapREoTkhDos94G3t3c3umBRZ/u/V2AZMSFopXGzvvvl682aogNQmQLyAVIVsZZVPrxJryNs8Rw9LCdahV6StmaUQQ4o5Ek722KegzWYyvZ3+nIIEp7wqkNCzwwqMKpBN9uBZChK0gRicogwkpBgSrx07P8N5fC61xxRi8iVKCEmGhYK4Ato5dqsN4QY9SFhbXyhqj75+hrqWh9jO21+Y0B1//Sv2Ke6/sQN5bTZQ10sGB2dNwMD318MhP06d3/8ACUwqGuLby+iSHz2vmnJ2e7+n+sYWLkd+e5yD3Ee1K86RefbcFNJtzAJDUBt8K73mx7U6j4kirmit8oCvy580XRXBYaLXGlNx6IVY7cRsItbW9247tkBCgZTZoy4aDVAGMUTbUVT1WK2jg8uo6nW6BgkB/XavmdLnEANbkk1sXsdRVKmSMus17epIOX3Wu0d01tOD9aRy0foCCVvltVrlLUV7d21v1qrMWS4ZkQtn7h72WAloyoJHg4EgO/yylnDI6LzZ320gweoTyqSCMxOf9FoYxBTTC2HXos1XvE74mFeKhR34BuUa0EBbbuaSqUrKNu6ighUqj35cMuGLZf96ztJqS++DDgLpCmoUyN8tiCcHtFnbviZPsn2H+30t44eZSG1SFmio0XGne5U0uu9mcl46NmJ+C6W53aE9+XZWs4RcJ2gC9szHTiUZiuvBEGQnFy4njqKXl5eBam4H1m+izjREt7Ob6d18esUmtQTWWpv9l8FoOBjxmbOBCmV6YT48EicEHRgn/EORy5U2HK5Ju+pmZQHbEUiIT3fQIRxf9VfjUkJmA7FdVa1UwCef1zUfP5foWRnLo/obnaQ68Ps7w18dVxN8euw234U43cZvVtEdKrNr5i0v+Qsk/Mbdq3XOG/lDWZxy8oEs+g5qHt0MVYq+4aVFjJMEHfVseT3zMB12W/f/Vtd/AUWveFc=",sidebar_class_name:"delete api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},y=void 0,U={id:"api/service-api/delete-dashboard-using-delete",title:"Delete specified dashboard by ID for specified project",description:"Delete specified dashboard by ID for specified project",source:"@site/docs/api/service-api/delete-dashboard-using-delete.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/delete-dashboard-using-delete",permalink:"/docs/api/service-api/delete-dashboard-using-delete",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-dashboard-using-delete",title:"Delete specified dashboard by ID for specified project",description:"Delete specified dashboard by ID for specified project",sidebar_label:"Delete specified dashboard by ID for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v2kAQ/SurOTXRBkPU9uBTUUAqapREoTkhDos94G3t3c3umBRZ/u/V2AZMSFopXGzvvvl682aogNQmQLyAVIVsZZVPrxJryNs8Rw9LCdahV6StmaUQQ4o5Ek722KegzWYyvZ3+nIIEp7wqkNCzwwqMKpBN9uBZChK0gRicogwkpBgSrx07P8N5fC61xxRi8iVKCEmGhYK4Ato5dqsN4QY9SFhbXyhqj75+hrqWh9jO21+Y0B1//Sv2Ke6/sQN5bTZQ10sGB2dNwMD318MhP06d3/8ACUwqGuLby+iSHz2vmnJ2e7+n+sYWLkd+e5yD3Ee1K86RefbcFNJtzAJDUBt8K73mx7U6j4kirmit8oCvy580XRXBYaLXGlNx6IVY7cRsItbW9247tkBCgZTZoy4aDVAGMUTbUVT1WK2jg8uo6nW6BgkB/XavmdLnEANbkk1sXsdRVKmSMus17epIOX3Wu0d01tOD9aRy0foCCVvltVrlLUV7d21v1qrMWS4ZkQtn7h72WAloyoJHg4EgO/yylnDI6LzZ320gweoTyqSCMxOf9FoYxBTTC2HXos1XvE74mFeKhR34BuUa0EBbbuaSqUrKNu6ighUqj35cMuGLZf96ztJqS++DDgLpCmoUyN8tiCcHtFnbviZPsn2H+30t44eZSG1SFmio0XGne5U0uu9mcl46NmJ+C6W53aE9+XZWs4RcJ2gC9szHTiUZiuvBEGQnFy4njqKXl5eBam4H1m+izjREt7Ob6d18esUmtQTWWpv9l8FoOBjxmbOBCmV6YT48EicEHRgn/EORy5U2HK5Ju+pmZQHbEUiIT3fQIRxf9VfjUkJmA7FdVa1UwCef1zUfP5foWRnLo/obnaQ68Ps7w18dVxN8euw234U43cZvVtEdKrNr5i0v+Qsk/Mbdq3XOG/lDWZxy8oEs+g5qHt0MVYq+4aVFjJMEHfVseT3zMB12W/f/Vtd/AUWveFc=",sidebar_class_name:"delete api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Update specified dashboard for specified project",permalink:"/docs/api/service-api/update-dashboard-using-put"},next:{title:"Add widget to specified dashboard",permalink:"/docs/api/service-api/add-widget-using-put"}},N={},V=[{value:"Request",id:"request",level:2}];function B(e){const s={h2:"h2",p:"p",...(0,d.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Delete specified dashboard by ID for specified project"})}),"\n",(0,i.jsx)(n(),{method:"delete",path:"/v1/{projectName}/dashboard/{dashboardId}"}),"\n",(0,i.jsx)(s.p,{children:"Delete specified dashboard by ID for specified project"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(m(),{className:"paramsItem",param:{name:"dashboardId",in:"path",description:"dashboardId",required:!0,schema:{type:"integer",format:"int64"}}}),(0,i.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(r(),{label:void 0,id:void 0,children:(0,i.jsxs)(x.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(x.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(x.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(b(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(x.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "message": "string"\n}',language:"json"})})]})})})})]})})})})]})}function D(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(B,{...e})}):B(e)}}}]);