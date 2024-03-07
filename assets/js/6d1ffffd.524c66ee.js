"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25966],{77021:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>k,contentTitle:()=>v,default:()=>w,frontMatter:()=>f,metadata:()=>N,toc:()=>I});var s=i(85893),t=i(11151),n=i(58219),r=i.n(n),l=(i(62316),i(51039)),o=i.n(l),c=(i(82723),i(9487)),p=i.n(c),m=i(41429),d=i.n(m),h=i(5397),g=i.n(h),u=i(4667),j=i.n(u),x=i(9472),y=i.n(x),b=(i(1176),i(12005),i(85162));const f={id:"get-project-integrations-using-get",title:"Get available project integrations for plugin",description:"Get available project integrations for plugin",sidebar_label:"Get available project integrations for plugin",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1z0zAQ/SuePQGjxi0DHHwiQIEM0Gb6cerkoNibWCBLRlqnZDz+78zKTmw3oRRy8UT7obdPu0+qgeTaQ3IHyhCunSRlzUlqDTmrNTpYCLAltuuzDBJYI82d/Y4pzfoIf+uVWX86vwEBpXSyQELHaWswskBIoNTVWpkL/iNAGV6RlIOADH3qVMlZHro5/Fkphxkk5CoU4NMcCwlJDbQtOaknp8wamkb0+7TY/r7RyO/pOy3Y2ZfWePRsf3l6yp9x8ssvIIBJRENsfRG/4M9BVumc3DJMwiJkI0WaDQNqr9DbyqWMsouyS0bOTDs+GlItktRhCPggCQ+RC1hZV0iCBDJJeEKqQGhEG2XdkVIFoJFLzaTsbUtrNUrDRjVcD82DbriLMvTmVXDsa5kPWqN+vJxmHHkTfI8SxKYnkyQryj9qe3+MIDRVwZNwOb29+QwC3k2vZ+9BwM3ll/MLEPDx8uobCPj6YTqHxY66fyY8Q5JKP42ARw9g7WxV7nl5eHbtOBwx0DjizyfXPJalG5/Z05qg+3HxpcNUEte0ktrjw7H8hBTJjVSaC4+6XaJBI/hoZV3UygQIKJBy28lS0B7KIYF4cxYPYuIuT1wPpr6JpdZx3QtOAwI8us1OuCqnIQEOIZta3SRxXHP7WKdo28SyVAeicoWldTS3jqSO2lwgYCOd4nLCme/StaKxkpVmnnKi0h+km+98+95kRxCdPzfhHtGhCn22niI+wUiaLGJk0TO1igxihtnzyK6iFm/0EHCPK8PCTlzwKoPTRFk+zgVTlVbtvnc1LFE6dNOK2b9bDM3XrHlt6UOnfdN0BQVpDA0enKAd/5UdzvwI7R+439Uync+izKZVgYZCD3SCLNMgyN1lcV2VHMT8FlLxcft25e1BzQK0StF4HIRPS5nmGL2cnILo2oXLSeL4/v5+IoN1Yt067kJ9/HX2/vzi+vyEQxoB3Gst+teTs9PJWZgs66mQZrDNv87EiJc90YS/KC61VEE8Atq6m5c72JzBSG5hP+EgIBnflVLrsNjf1AsBufXEiep6KT3eOt00vPyzQscdsuinIPRLpnynbMdUoO7vTnh21V3Nz6PR2+BoVbtr1WzD2OmK/4GAH7gdvy34wfB/GEZU/A+IQYKGBzhHmaELrLQe0zTFkgax/HrgkdprHb+zmuY3wv9ZSw==",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},v=void 0,N={id:"api/service-api/get-project-integrations-using-get",title:"Get available project integrations for plugin",description:"Get available project integrations for plugin",source:"@site/docs/api/service-api/get-project-integrations-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-project-integrations-using-get",permalink:"/docs/api/service-api/get-project-integrations-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-project-integrations-using-get",title:"Get available project integrations for plugin",description:"Get available project integrations for plugin",sidebar_label:"Get available project integrations for plugin",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1z0zAQ/SuePQGjxi0DHHwiQIEM0Gb6cerkoNibWCBLRlqnZDz+78zKTmw3oRRy8UT7obdPu0+qgeTaQ3IHyhCunSRlzUlqDTmrNTpYCLAltuuzDBJYI82d/Y4pzfoIf+uVWX86vwEBpXSyQELHaWswskBIoNTVWpkL/iNAGV6RlIOADH3qVMlZHro5/Fkphxkk5CoU4NMcCwlJDbQtOaknp8wamkb0+7TY/r7RyO/pOy3Y2ZfWePRsf3l6yp9x8ssvIIBJRENsfRG/4M9BVumc3DJMwiJkI0WaDQNqr9DbyqWMsouyS0bOTDs+GlItktRhCPggCQ+RC1hZV0iCBDJJeEKqQGhEG2XdkVIFoJFLzaTsbUtrNUrDRjVcD82DbriLMvTmVXDsa5kPWqN+vJxmHHkTfI8SxKYnkyQryj9qe3+MIDRVwZNwOb29+QwC3k2vZ+9BwM3ll/MLEPDx8uobCPj6YTqHxY66fyY8Q5JKP42ARw9g7WxV7nl5eHbtOBwx0DjizyfXPJalG5/Z05qg+3HxpcNUEte0ktrjw7H8hBTJjVSaC4+6XaJBI/hoZV3UygQIKJBy28lS0B7KIYF4cxYPYuIuT1wPpr6JpdZx3QtOAwI8us1OuCqnIQEOIZta3SRxXHP7WKdo28SyVAeicoWldTS3jqSO2lwgYCOd4nLCme/StaKxkpVmnnKi0h+km+98+95kRxCdPzfhHtGhCn22niI+wUiaLGJk0TO1igxihtnzyK6iFm/0EHCPK8PCTlzwKoPTRFk+zgVTlVbtvnc1LFE6dNOK2b9bDM3XrHlt6UOnfdN0BQVpDA0enKAd/5UdzvwI7R+439Uync+izKZVgYZCD3SCLNMgyN1lcV2VHMT8FlLxcft25e1BzQK0StF4HIRPS5nmGL2cnILo2oXLSeL4/v5+IoN1Yt067kJ9/HX2/vzi+vyEQxoB3Gst+teTs9PJWZgs66mQZrDNv87EiJc90YS/KC61VEE8Atq6m5c72JzBSG5hP+EgIBnflVLrsNjf1AsBufXEiep6KT3eOt00vPyzQscdsuinIPRLpnynbMdUoO7vTnh21V3Nz6PR2+BoVbtr1WzD2OmK/4GAH7gdvy34wfB/GEZU/A+IQYKGBzhHmaELrLQe0zTFkgax/HrgkdprHb+zmuY3wv9ZSw==",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get available project integrations",permalink:"/docs/api/service-api/get-project-integrations-using-get-1"},next:{title:"Get global Report Portal integration instance",permalink:"/docs/api/service-api/get-global-integration-using-get"}},k={},I=[{value:"Request",id:"request",level:2}];function T(e){const a={h2:"h2",p:"p",...(0,t.a)(),...e.components},{Details:i}=a;return i||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"openapi__heading",children:(0,s.jsx)(a.p,{children:"Get available project integrations for plugin"})}),"\n",(0,s.jsx)(o(),{method:"get",path:"/v1/integration/project/{projectName}/all/{pluginName}"}),"\n",(0,s.jsx)(a.p,{children:"Get available project integrations for plugin"}),"\n",(0,s.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,s.jsx)(a.p,{children:"Path Parameters"})})}),(0,s.jsx)("div",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)(d(),{className:"paramsItem",param:{name:"pluginName",in:"path",description:"pluginName",required:!0,schema:{type:"string"}}}),(0,s.jsx)(d(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsx)(r(),{label:void 0,id:void 0,children:(0,s.jsxs)(b.default,{label:"200",value:"200",children:[(0,s.jsx)("div",{children:(0,s.jsx)(a.p,{children:"OK"})}),(0,s.jsx)("div",{children:(0,s.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,s.jsx)(b.default,{label:"*/*",value:"*/*",children:(0,s.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,s.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,s.jsx)("strong",{children:(0,s.jsx)(a.p,{children:"Schema"})})}),(0,s.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,s.jsx)("li",{children:(0,s.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,s.jsx)(a.p,{children:"Array ["})})}),(0,s.jsx)(j(),{collapsible:!1,name:"creationDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,s.jsx)(j(),{collapsible:!1,name:"creator",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(j(),{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,s.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,s.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"integrationParameters"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,s.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"integrationType"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,s.jsx)(j(),{collapsible:!1,name:"authFlow",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`OAUTH`, `BASIC`, `TOKEN`, `FORM`, `LDAP`]",schema:{type:"string",enum:["OAUTH","BASIC","TOKEN","FORM","LDAP"]}}),(0,s.jsx)(j(),{collapsible:!1,name:"creationDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,s.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"details"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,s.jsx)(j(),{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,s.jsx)(j(),{collapsible:!1,name:"groupType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(j(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(j(),{collapsible:!1,name:"type",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})]})]})}),(0,s.jsx)(j(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(j(),{collapsible:!1,name:"projectId",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,s.jsx)("li",{children:(0,s.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,s.jsx)(a.p,{children:"]"})})})]})]})}),(0,s.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,s.jsx)(g(),{responseExample:'[\n  {\n    "creationDate": "2024-03-07T13:10:35.690Z",\n    "creator": "string",\n    "enabled": true,\n    "id": 0,\n    "integrationParameters": {},\n    "integrationType": {\n      "authFlow": "OAUTH",\n      "creationDate": "2024-03-07T13:10:35.690Z",\n      "details": {},\n      "enabled": true,\n      "groupType": "string",\n      "name": "string",\n      "type": 0\n    },\n    "name": "string",\n    "projectId": 0\n  }\n]',language:"json"})})]})})})})]})})})})]})}function w(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(T,{...e})}):T(e)}}}]);