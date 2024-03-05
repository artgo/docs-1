"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38094],{79491:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>k,contentTitle:()=>b,default:()=>R,frontMatter:()=>N,metadata:()=>v,toc:()=>_});var i=a(85893),n=a(11151),r=a(58219),l=a.n(r),t=(a(62316),a(51039)),o=a.n(t),c=(a(82723),a(9487)),d=a.n(c),p=a(41429),m=a.n(p),h=a(5397),u=a.n(h),g=a(4667),j=a.n(g),x=a(9472),f=a.n(x),y=(a(1176),a(12005),a(85162));const N={id:"get-user-using-get",title:"Return information about specified user",description:"Only for administrators and profile's owner",sidebar_label:"Return information about specified user",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVU2P2zYQ/SvCXJoEirUbtD3oVCNYtEaD1NjNngwfaHFkMaU4DDnarSHovxdDyV557UXRk2zOB988zpvpgdU+QrmBLmL4WJHjQNZigG0OGmMVjGdDDkr4y9lDVlPIlG6NM5GDYgoxU05nPlBtLP4UM3p2GCAH8hiURK40lLBHfowYHqNx+9/vvkEOXgXVImOQy3twqkUowdLeOMjByIVecQOvURw9Av7oTEANJYcOc4hVg62Csgc+eEkVORi3h2HYinP05CJGsX+6uZHPq+L+hBykenQs1g/FB/nMshq2klbKuMdIXajwDMYGsFXGCngNeaJzpYXFCQ/tvmPFUnkQbtiMaFRVUef4W3K6AJ+DitHsHep1IImPM6dTRqW1kTqUXZ/lPmJenueA/8KEjsPhTUR+zHJP9pp9GIZ8YuJacN1Z+zW99RWj0bNj4xj3qZVqCq3i8ejXn8WxRVZasbpGxlkpAsY3xLTS12sR2xdSGuf2HZFF5cRhesZrsWJ6m4TEg0YfsFIs2WtlIyboDU2SSDLgBkoonm4LyVf0qb8HyCFieDqqowsWSuh9IKaK7FAWRa86bigYPgyF8uZCJ/foKfCaAiubjbkghycVjNrZ8ZmP6UY11KqzQnLD7ONFuvXRNwd0XSvtLo6QT/5badUjokt5/UGRM9H4OC0ocPbO1JlD1KjfZ1RnI97sNeAXXBpbWoTk5ZPTwpAwvRWqqm68d9PDDlXAsOyE1812bn4QMY+lz51OrzcVlDSf2iA5gTykcTXNFXWG9g3uj7Us16tMU9W16DhNxGnSqCpNmmnyPXReguAkHojjyW8XNedgTYUu4ix86VXVYPZpcSOzJ7WLlFMWxfPz80Il64LCvphCY/Fl9fnu68PdRwkZcpBeG9H/sri9WdwmdVDkVrnZNffIXXCZ0CGaNOQytaOOs+ixMrVBnUkbv2akfxmt/3ONTE/D+A8X3iozijKknh21s4Gn22neQg7luB+2OTQUWax9v1MRH4MdBjn+0WGQRtm+iCG1jTZRfr8I9c0C3t1PM/99dlxGV1FOh8odkvBsJ/8gh7/xcNpjg+imQaUxJBSjbVlV6HkWJdtIOvk0PGSHDsO//jKrHg==",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},b=void 0,v={id:"api/service-api/get-user-using-get",title:"Return information about specified user",description:"Only for administrators and profile's owner",source:"@site/docs/api/service-api/get-user-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-user-using-get",permalink:"/docs/api/service-api/get-user-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-user-using-get",title:"Return information about specified user",description:"Only for administrators and profile's owner",sidebar_label:"Return information about specified user",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVU2P2zYQ/SvCXJoEirUbtD3oVCNYtEaD1NjNngwfaHFkMaU4DDnarSHovxdDyV557UXRk2zOB988zpvpgdU+QrmBLmL4WJHjQNZigG0OGmMVjGdDDkr4y9lDVlPIlG6NM5GDYgoxU05nPlBtLP4UM3p2GCAH8hiURK40lLBHfowYHqNx+9/vvkEOXgXVImOQy3twqkUowdLeOMjByIVecQOvURw9Av7oTEANJYcOc4hVg62Csgc+eEkVORi3h2HYinP05CJGsX+6uZHPq+L+hBykenQs1g/FB/nMshq2klbKuMdIXajwDMYGsFXGCngNeaJzpYXFCQ/tvmPFUnkQbtiMaFRVUef4W3K6AJ+DitHsHep1IImPM6dTRqW1kTqUXZ/lPmJenueA/8KEjsPhTUR+zHJP9pp9GIZ8YuJacN1Z+zW99RWj0bNj4xj3qZVqCq3i8ejXn8WxRVZasbpGxlkpAsY3xLTS12sR2xdSGuf2HZFF5cRhesZrsWJ6m4TEg0YfsFIs2WtlIyboDU2SSDLgBkoonm4LyVf0qb8HyCFieDqqowsWSuh9IKaK7FAWRa86bigYPgyF8uZCJ/foKfCaAiubjbkghycVjNrZ8ZmP6UY11KqzQnLD7ONFuvXRNwd0XSvtLo6QT/5badUjokt5/UGRM9H4OC0ocPbO1JlD1KjfZ1RnI97sNeAXXBpbWoTk5ZPTwpAwvRWqqm68d9PDDlXAsOyE1812bn4QMY+lz51OrzcVlDSf2iA5gTykcTXNFXWG9g3uj7Us16tMU9W16DhNxGnSqCpNmmnyPXReguAkHojjyW8XNedgTYUu4ix86VXVYPZpcSOzJ7WLlFMWxfPz80Il64LCvphCY/Fl9fnu68PdRwkZcpBeG9H/sri9WdwmdVDkVrnZNffIXXCZ0CGaNOQytaOOs+ixMrVBnUkbv2akfxmt/3ONTE/D+A8X3iozijKknh21s4Gn22neQg7luB+2OTQUWax9v1MRH4MdBjn+0WGQRtm+iCG1jTZRfr8I9c0C3t1PM/99dlxGV1FOh8odkvBsJ/8gh7/xcNpjg+imQaUxJBSjbVlV6HkWJdtIOvk0PGSHDsO//jKrHg==",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Delete specified user",permalink:"/docs/api/service-api/delete-user-using-delete"},next:{title:"Edit specified user",permalink:"/docs/api/service-api/edit-user-using-put"}},k={},_=[{value:"Request",id:"request",level:2}];function q(e){const s={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Return information about specified user"})}),"\n",(0,i.jsx)(o(),{method:"get",path:"/v1/user/{login}"}),"\n",(0,i.jsx)(s.p,{children:"Only for administrators and profile's owner"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(m(),{className:"paramsItem",param:{name:"login",in:"path",description:"login",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(l(),{label:void 0,id:void 0,children:(0,i.jsxs)(y.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(y.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!1,name:"accountType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"assignedProjects"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"property name*"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"AssignedProject"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!1,name:"entryType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"projectRole",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})})]})}),(0,i.jsx)(j(),{collapsible:!1,name:"email",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"fullName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"id",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"metadata"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,i.jsx)(j(),{collapsible:!1,name:"photoId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"photoLoaded",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)(j(),{collapsible:!1,name:"userId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"userRole",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,i.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "accountType": "string",\n  "assignedProjects": {},\n  "email": "string",\n  "fullName": "string",\n  "id": 0,\n  "metadata": {},\n  "photoId": "string",\n  "photoLoaded": true,\n  "userId": "string",\n  "userRole": "string"\n}',language:"json"})})]})})})})]})})})})]})}function R(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(q,{...e})}):q(e)}}}]);