"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33421],{67232:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>k,contentTitle:()=>q,default:()=>z,frontMatter:()=>v,metadata:()=>b,toc:()=>w});var t=s(85893),a=s(11151),n=s(58219),r=s.n(n),l=(s(62316),s(51039)),d=s.n(l),o=(s(82723),s(9487)),c=s.n(o),m=s(41429),p=s.n(m),h=s(5397),f=s.n(h),u=s(4667),x=s.n(u),g=s(9472),y=s.n(g),j=(s(1176),s(12005),s(85162));const v={id:"get-set-of-integration-system-fields-using-get",title:"Get list of fields required for posting ticket",description:"Get list of fields required for posting ticket",sidebar_label:"Get list of fields required for posting ticket",hide_title:!0,hide_table_of_contents:!0,api:"eJylVk2P0zwQ/ivRnAClzS4CDjlRoQUqEKwovJeqBzeZJGYd29iTXaoo//3VOGmbNl0+xCnSfD7z8YzTAonSQ7qGbVPOyInsTupy5neesJ5lRpMzSqGDTQzGohMkjV7mkEKJtEL6XCw1YdnLV8HrrUSV+29e6vLdzVeIwQonaiR0nKcFLWqEFOTRb5lDDFJDClZQBTHk6DMnLesuWDr80UiHOaTkGozBZxXWAtIWaGcPodFBDIVxtaBe9OoFdF18zO99g1/ZYcj9o0G3myYfmf02sScndQldt2Fjb4326Fn//OqKP6ehP3+AGLjFqIm1z5Jn/JlEFc4JBiYJ6xCNJClW3BpPb43rO36Cbw3yRBDDvVAN8hSHoGb7HTPi6TieK8keaI6F1Jj/x9b+TzAslDIPgwP8LnoAwdsz6dgA8FOYzbSfXRdDwVU+YjBow5wuaeXlnMeGHZRbYxQKfUD0yx5MUHY91Bytw0wQRy6E8ni+Ve+QIiU9RaaIAnIf7bFEhXGRNZ6kLiOS2R1yH2ukygy0C5SiClJI7q+TLfmkPaFIl/QhZz7YenT3e+41TkEKrXWGTGZUlyZJKxqqjJO06xJh5YQAX9AaR7fGkVBRHyusk5Niq/qx7sMNCyQaxZSriKyfhLvd28aAuql5VdkQ4sF+08VwQDTlzHvjKWIGR0LnESOLnsgi0og55k+5nT3e6BzwEVeOtZm7YGWD0VwaHt6GW5U1fd51C1sUDt2i4U6vN2P1ihnalz42OizEUFAgctipYMTXB6QuzJg+J2gf6f2+lsXtMspN1tSoKYx6OB8iC+djuGurxrIT97cWksfte8nrSc0xKJmh9jhyX1iRVRg9n19BPKwLl5MmycPDw1wE7dy4MhlcffJx+ebm0+pmxi7MGnS+R/9yfn01v2YZr3Mt9CjNXxPgpDGHThP+pMQqIQNhA9x2IMca7q8hhi3xDqbnb8iIIZsYKuOJPdp2Kzx+c6rrWNy/CLwLufS87Y/QuT1ecXjyZSjjaTR+Oi7ivcPd2QsznBwAXrc9x/4BwVnVF1Hsr5vejQEc0J2E6JieFYocXUDV2yyyDC2NvPkl4woOV4t/BLruf/jP6Hw=",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},q=void 0,b={id:"api/service-api/get-set-of-integration-system-fields-using-get",title:"Get list of fields required for posting ticket",description:"Get list of fields required for posting ticket",source:"@site/docs/api/service-api/get-set-of-integration-system-fields-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-set-of-integration-system-fields-using-get",permalink:"/docs/api/service-api/get-set-of-integration-system-fields-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-set-of-integration-system-fields-using-get",title:"Get list of fields required for posting ticket",description:"Get list of fields required for posting ticket",sidebar_label:"Get list of fields required for posting ticket",hide_title:!0,hide_table_of_contents:!0,api:"eJylVk2P0zwQ/ivRnAClzS4CDjlRoQUqEKwovJeqBzeZJGYd29iTXaoo//3VOGmbNl0+xCnSfD7z8YzTAonSQ7qGbVPOyInsTupy5neesJ5lRpMzSqGDTQzGohMkjV7mkEKJtEL6XCw1YdnLV8HrrUSV+29e6vLdzVeIwQonaiR0nKcFLWqEFOTRb5lDDFJDClZQBTHk6DMnLesuWDr80UiHOaTkGozBZxXWAtIWaGcPodFBDIVxtaBe9OoFdF18zO99g1/ZYcj9o0G3myYfmf02sScndQldt2Fjb4326Fn//OqKP6ehP3+AGLjFqIm1z5Jn/JlEFc4JBiYJ6xCNJClW3BpPb43rO36Cbw3yRBDDvVAN8hSHoGb7HTPi6TieK8keaI6F1Jj/x9b+TzAslDIPgwP8LnoAwdsz6dgA8FOYzbSfXRdDwVU+YjBow5wuaeXlnMeGHZRbYxQKfUD0yx5MUHY91Bytw0wQRy6E8ni+Ve+QIiU9RaaIAnIf7bFEhXGRNZ6kLiOS2R1yH2ukygy0C5SiClJI7q+TLfmkPaFIl/QhZz7YenT3e+41TkEKrXWGTGZUlyZJKxqqjJO06xJh5YQAX9AaR7fGkVBRHyusk5Niq/qx7sMNCyQaxZSriKyfhLvd28aAuql5VdkQ4sF+08VwQDTlzHvjKWIGR0LnESOLnsgi0og55k+5nT3e6BzwEVeOtZm7YGWD0VwaHt6GW5U1fd51C1sUDt2i4U6vN2P1ihnalz42OizEUFAgctipYMTXB6QuzJg+J2gf6f2+lsXtMspN1tSoKYx6OB8iC+djuGurxrIT97cWksfte8nrSc0xKJmh9jhyX1iRVRg9n19BPKwLl5MmycPDw1wE7dy4MhlcffJx+ebm0+pmxi7MGnS+R/9yfn01v2YZr3Mt9CjNXxPgpDGHThP+pMQqIQNhA9x2IMca7q8hhi3xDqbnb8iIIZsYKuOJPdp2Kzx+c6rrWNy/CLwLufS87Y/QuT1ecXjyZSjjaTR+Oi7ivcPd2QsznBwAXrc9x/4BwVnVF1Hsr5vejQEc0J2E6JieFYocXUDV2yyyDC2NvPkl4woOV4t/BLruf/jP6Hw=",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"bug-tracking-system-controller",permalink:"/docs/api/service-api/bug-tracking-system-controller"},next:{title:"Get list of existed issue types in bts",permalink:"/docs/api/service-api/get-allowable-issue-types-using-get"}},k={},w=[{value:"Request",id:"request",level:2}];function G(e){const i={h2:"h2",p:"p",...(0,a.a)(),...e.components},{Details:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"openapi__heading",children:(0,t.jsx)(i.p,{children:"Get list of fields required for posting ticket"})}),"\n",(0,t.jsx)(d(),{method:"get",path:"/v1/bts/{integrationId}/fields-set"}),"\n",(0,t.jsx)(i.p,{children:"Get list of fields required for posting ticket"}),"\n",(0,t.jsx)(i.h2,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(i.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(p(),{className:"paramsItem",param:{name:"integrationId",in:"path",description:"integrationId",required:!0,schema:{type:"integer",format:"int64"}}})})})]}),"\n",(0,t.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(i.p,{children:"Query Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(p(),{className:"paramsItem",param:{name:"issueType",in:"query",description:"issueType",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(r(),{label:void 0,id:void 0,children:(0,t.jsxs)(j.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(i.p,{children:"OK"})}),(0,t.jsx)("div",{children:(0,t.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(j.default,{label:"*/*",value:"*/*",children:(0,t.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(i.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,t.jsx)(i.p,{children:"Array ["})})}),(0,t.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsxs)("span",{className:"openapi-schema__container",children:[(0,t.jsx)("strong",{className:"openapi-schema__property",children:(0,t.jsx)(i.p,{children:"definedValues"})}),(0,t.jsx)("span",{className:"openapi-schema__name",children:(0,t.jsx)(i.p,{children:"object[]"})})]})}),(0,t.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,t.jsx)(i.p,{children:"Array ["})})}),(0,t.jsx)(x(),{collapsible:!1,name:"valueId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"valueName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,t.jsx)(i.p,{children:"]"})})})]})]})}),(0,t.jsx)(x(),{collapsible:!1,name:"fieldName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"fieldType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"required",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,t.jsx)(x(),{collapsible:!1,name:"value",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}}),(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,t.jsx)(i.p,{children:"]"})})})]})]})}),(0,t.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(f(),{responseExample:'[\n  {\n    "definedValues": [\n      {\n        "valueId": "string",\n        "valueName": "string"\n      }\n    ],\n    "fieldName": "string",\n    "fieldType": "string",\n    "id": "string",\n    "required": true,\n    "value": [\n      "string"\n    ]\n  }\n]',language:"json"})})]})})})})]})})})})]})}function z(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(G,{...e})}):G(e)}}}]);