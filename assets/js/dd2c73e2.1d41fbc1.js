"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58660],{93339:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>f,contentTitle:()=>x,default:()=>U,frontMatter:()=>j,metadata:()=>b,toc:()=>N});var i=a(85893),t=a(11151),n=a(58219),l=a.n(n),r=(a(62316),a(51039)),d=a.n(r),c=(a(82723),a(9487)),p=a.n(c),m=(a(41429),a(5397)),o=a.n(m),u=a(4667),h=a.n(u),g=a(9472),y=a.n(g),v=(a(1176),a(12005),a(85162));const j={id:"save-analytics-settings-using-put",title:"Update analytics settings",description:"Update analytics settings",sidebar_label:"Update analytics settings",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVUtv2zAM/isGT9ugxO2AXXxaVhRYsWErmvXU5sDYTKJNljSJThoY/u8DZTuPZQ+fDPH1kfo+qgXGdYTiCSIxa7uOk9JZDs4YCrBQ4DwFZO3sXQUFRNzSzKLZsy7jfIh4jNqu7x+/gYJAPxuK/MFVeyhaqCiWQXsJh2I0ggIpQZbFBb03ukwV8u9R/FqI5YZqlD/WbAgKONR8oOiaUBIo4L0Xk1t+p1KS+iBYWVOUSLK4NFSlJL3j0jlDaKEbQw+WyEHbNXTy9T3oIKEcGkoH0Tsb+7xvr64uO/v66bypN/mbP/fxdZzmjau9Ifl7mP+3l5pixPXfEAvminygEllQr9BEUvAyKV1Fa7KTYe6Tpav2E4s1nd3FeSePvkKmDMd5ZyMtQAG9MNmonRW+tPCD9lD8s4yCLZrmtFy3UFATb5yQyTepVeQNFJBvr/OxVn4oDwoihS2FvmQTDBTQ+uDYlc50RZ632PDGBc37LkevLxp6IO8C37vAaLI+V8IVtPAjjXdM19/rChvDUMCG2ceLdPejrwKyTS3CEUdQg/+iU3BAdEmUjy5yJrPJ0FaZIMte6VVmiSqqXmdulfV4s98BH3FVVLtpSF4+OU21EyIsZFRl09d9amFJGCjMGpnu0+LUPBda9q2fOh3INTSU2JuEk5xAeCYKfThq/PYFhcZnehPRqN95qkDblTtVwlmff7m1cQqz+7uscmVTk+WknkFtWCa1DZSeN16C5GZq1EKU2J+8v5iWAqNLspFOwmceyw1lb6dXoAaiySCKPN/tdlNM1qkL63wIjfnnu5vbL/PbiYR0CoSlPfp30+ur6bWceRe5RntS5l8CO5vB4TqYXjj3BnVaXQlZO6jmCbbXSSKHFEflLBRsXGRxatslRnoMpuvk+GdDQTiyOOogUUTBhrCicKLum36nTb4JlKOcL5Z2p8aIWVmS5xNf2YVnsu9fiuXwRNSuSgsCd/J84A4KeIZnAHl5uN81bX/egkG7btIihL6qfL8AU0BZ0g==",sidebar_class_name:"put api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},x=void 0,b={id:"api/service-api/save-analytics-settings-using-put",title:"Update analytics settings",description:"Update analytics settings",source:"@site/docs/api/service-api/save-analytics-settings-using-put.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/save-analytics-settings-using-put",permalink:"/docs/api/service-api/save-analytics-settings-using-put",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"save-analytics-settings-using-put",title:"Update analytics settings",description:"Update analytics settings",sidebar_label:"Update analytics settings",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVUtv2zAM/isGT9ugxO2AXXxaVhRYsWErmvXU5sDYTKJNljSJThoY/u8DZTuPZQ+fDPH1kfo+qgXGdYTiCSIxa7uOk9JZDs4YCrBQ4DwFZO3sXQUFRNzSzKLZsy7jfIh4jNqu7x+/gYJAPxuK/MFVeyhaqCiWQXsJh2I0ggIpQZbFBb03ukwV8u9R/FqI5YZqlD/WbAgKONR8oOiaUBIo4L0Xk1t+p1KS+iBYWVOUSLK4NFSlJL3j0jlDaKEbQw+WyEHbNXTy9T3oIKEcGkoH0Tsb+7xvr64uO/v66bypN/mbP/fxdZzmjau9Ifl7mP+3l5pixPXfEAvminygEllQr9BEUvAyKV1Fa7KTYe6Tpav2E4s1nd3FeSePvkKmDMd5ZyMtQAG9MNmonRW+tPCD9lD8s4yCLZrmtFy3UFATb5yQyTepVeQNFJBvr/OxVn4oDwoihS2FvmQTDBTQ+uDYlc50RZ632PDGBc37LkevLxp6IO8C37vAaLI+V8IVtPAjjXdM19/rChvDUMCG2ceLdPejrwKyTS3CEUdQg/+iU3BAdEmUjy5yJrPJ0FaZIMte6VVmiSqqXmdulfV4s98BH3FVVLtpSF4+OU21EyIsZFRl09d9amFJGCjMGpnu0+LUPBda9q2fOh3INTSU2JuEk5xAeCYKfThq/PYFhcZnehPRqN95qkDblTtVwlmff7m1cQqz+7uscmVTk+WknkFtWCa1DZSeN16C5GZq1EKU2J+8v5iWAqNLspFOwmceyw1lb6dXoAaiySCKPN/tdlNM1qkL63wIjfnnu5vbL/PbiYR0CoSlPfp30+ur6bWceRe5RntS5l8CO5vB4TqYXjj3BnVaXQlZO6jmCbbXSSKHFEflLBRsXGRxatslRnoMpuvk+GdDQTiyOOogUUTBhrCicKLum36nTb4JlKOcL5Z2p8aIWVmS5xNf2YVnsu9fiuXwRNSuSgsCd/J84A4KeIZnAHl5uN81bX/egkG7btIihL6qfL8AU0BZ0g==",sidebar_class_name:"put api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get server settings",permalink:"/docs/api/service-api/get-server-settings-using-get"},next:{title:"Update analytics settings",permalink:"/docs/api/service-api/save-analytics-settings-using-post"}},f={},N=[{value:"Request",id:"request",level:2}];function T(e){const s={h2:"h2",p:"p",...(0,t.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Update analytics settings"})}),"\n",(0,i.jsx)(d(),{method:"put",path:"/v1/settings/analytics"}),"\n",(0,i.jsx)(s.p,{children:"Update analytics settings"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsx)(p(),{className:"openapi-tabs__mime",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"request"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(h(),{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)(h(),{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(l(),{label:void 0,id:void 0,children:(0,i.jsxs)(v.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(o(),{responseExample:'{\n  "message": "string"\n}',language:"json"})})]})})})})]})})})})]})}function U(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(T,{...e})}):T(e)}}}]);