"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18778],{57555:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>G,contentTitle:()=>v,default:()=>E,frontMatter:()=>y,metadata:()=>b,toc:()=>q});var a=i(85893),r=i(11151),n=i(58219),t=i.n(n),l=(i(62316),i(51039)),d=i.n(l),c=(i(82723),i(9487)),m=i.n(c),p=i(41429),o=i.n(p),h=i(5397),u=i.n(h),x=i(4667),f=i.n(x),g=i(9472),j=i.n(g),N=(i(1176),i(12005),i(85162));const y={id:"get-filter-using-get",title:"Get specified user filter by id",description:"Get specified user filter by id",sidebar_label:"Get specified user filter by id",hide_title:!0,hide_table_of_contents:!0,api:"eJydVsFu2zgQ/RVhTm3BWEmx3YNONYK0Dbpog6Q5GT7Q0tjirkSyw1FSQ9C/L0aUbTlWNtmebJMzj2/eDB/dAutNgGwBTUA6W5uKkc5yZ5lcVSHBUoHzSJqNs9cFZLBB/tRH3QdjN5+vfoACr0nXyEiC1ILVNUIGEey6AAXGQgZecwkKCgw5GS+Ax0GEPxtDWEDG1KCCkJdYa8ha4K0XQGMZN0igYO2o1hyX/vwDuk7tT/Xk/sacv8mv/zr4OO7FswOTsRvouqUEB+9swCD778/P5eMY/PtXUCAqomXZfZe+k48RquFKYO8DUpTzFoNrKD8msxCQwghqkGpEJhsZOypEbwXu0faa9ESXakfYraQ8aQ5JA9lEuiO8Q3GaSG8Fn7EO0/Qud3nP8ZOu9JHGbj4ZrITqg66a/8NpQu8T1KmQeM5Es7ruSdsnkk3xqhEbhJ9CGFrxCj2/S+QTBU2YhxwUBEds7ObSVU1tXxYtph3OXDlXobbC5xjpGVni2EyVExemsgY9PWGuWdivdRXw6c36jJwEj7lZGywS8ZUk9jBZbZN+hGvk0g1m0tsHl5BB+nCRtqNr2aUxLW13JtGJTEgPO6NpqIIMJIdd7qouS9NWN1w6MrztUu3NybW/Re+IbxyxrpKI1Q8qGb2qorI7uHit17qpZAxKZh9O4G52sQrQNrX0UwJBDfHLTsGe0alPfHGBE5mrRNsiEWbJG7NOLGKBxdvErZPIN3lK+MCrwNrNqI/yfdDMOGnWUqTKm3juooUVakKaNyL1YjnevhNXiqWPg/YDMBTUm1c/aX2QmC4Yu3bj+T5i+4z2u1rmN9dJ4fKmRst6cBCxTJ33ljnY+V3jJUn0rbWRdoe48vGkZgWVydEGHKXPvc5LTN7PzkEN4yLlZGn6+Pg40/3uzNEmHVJD+tf15dW3u6szSRFrQQqR/YfZxfnsQta8C1xrOzrm5ZGfdiHGX5z6Spv+3vb82uE6LODhAhRkx+9URJX1/cO5VFC6wJLRtisd8J6qrpPlnw2SNH95GPB+FAoT5Psz97c9PFzw5nYwqrfJ6KGeJL+zPrvdG38GoOAf3I6feXmpf+v8Yx1+g8IYoJN7WaIWNxZFYsQ8z9HzKFeebbkpe7+Svztd9y+ZsSkY",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},v=void 0,b={id:"api/service-api/get-filter-using-get",title:"Get specified user filter by id",description:"Get specified user filter by id",source:"@site/docs/api/service-api/get-filter-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-filter-using-get",permalink:"/docs/api/service-api/get-filter-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-filter-using-get",title:"Get specified user filter by id",description:"Get specified user filter by id",sidebar_label:"Get specified user filter by id",hide_title:!0,hide_table_of_contents:!0,api:"eJydVsFu2zgQ/RVhTm3BWEmx3YNONYK0Dbpog6Q5GT7Q0tjirkSyw1FSQ9C/L0aUbTlWNtmebJMzj2/eDB/dAutNgGwBTUA6W5uKkc5yZ5lcVSHBUoHzSJqNs9cFZLBB/tRH3QdjN5+vfoACr0nXyEiC1ILVNUIGEey6AAXGQgZecwkKCgw5GS+Ax0GEPxtDWEDG1KCCkJdYa8ha4K0XQGMZN0igYO2o1hyX/vwDuk7tT/Xk/sacv8mv/zr4OO7FswOTsRvouqUEB+9swCD778/P5eMY/PtXUCAqomXZfZe+k48RquFKYO8DUpTzFoNrKD8msxCQwghqkGpEJhsZOypEbwXu0faa9ESXakfYraQ8aQ5JA9lEuiO8Q3GaSG8Fn7EO0/Qud3nP8ZOu9JHGbj4ZrITqg66a/8NpQu8T1KmQeM5Es7ruSdsnkk3xqhEbhJ9CGFrxCj2/S+QTBU2YhxwUBEds7ObSVU1tXxYtph3OXDlXobbC5xjpGVni2EyVExemsgY9PWGuWdivdRXw6c36jJwEj7lZGywS8ZUk9jBZbZN+hGvk0g1m0tsHl5BB+nCRtqNr2aUxLW13JtGJTEgPO6NpqIIMJIdd7qouS9NWN1w6MrztUu3NybW/Re+IbxyxrpKI1Q8qGb2qorI7uHit17qpZAxKZh9O4G52sQrQNrX0UwJBDfHLTsGe0alPfHGBE5mrRNsiEWbJG7NOLGKBxdvErZPIN3lK+MCrwNrNqI/yfdDMOGnWUqTKm3juooUVakKaNyL1YjnevhNXiqWPg/YDMBTUm1c/aX2QmC4Yu3bj+T5i+4z2u1rmN9dJ4fKmRst6cBCxTJ33ljnY+V3jJUn0rbWRdoe48vGkZgWVydEGHKXPvc5LTN7PzkEN4yLlZGn6+Pg40/3uzNEmHVJD+tf15dW3u6szSRFrQQqR/YfZxfnsQta8C1xrOzrm5ZGfdiHGX5z6Spv+3vb82uE6LODhAhRkx+9URJX1/cO5VFC6wJLRtisd8J6qrpPlnw2SNH95GPB+FAoT5Psz97c9PFzw5nYwqrfJ6KGeJL+zPrvdG38GoOAf3I6feXmpf+v8Yx1+g8IYoJN7WaIWNxZFYsQ8z9HzKFeebbkpe7+Svztd9y+ZsSkY",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get available filter names",permalink:"/docs/api/service-api/get-all-filters-names-using-get"},next:{title:"Update specified user filter",permalink:"/docs/api/service-api/update-user-filter-using-put"}},G={},q=[{value:"Request",id:"request",level:2}];function _(e){const s={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(s.p,{children:"Get specified user filter by id"})}),"\n",(0,a.jsx)(d(),{method:"get",path:"/v1/{projectName}/filter/{filterId}"}),"\n",(0,a.jsx)(s.p,{children:"Get specified user filter by id"}),"\n",(0,a.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)(o(),{className:"paramsItem",param:{name:"filterId",in:"path",description:"filterId",required:!0,schema:{type:"integer",format:"int64"}}}),(0,a.jsx)(o(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(t(),{label:void 0,id:void 0,children:(0,a.jsxs)(N.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(N.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(N.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)(f(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"conditions"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object[]"})}),(0,a.jsx)("span",{className:"openapi-schema__divider"}),(0,a.jsx)("span",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(f(),{collapsible:!1,name:"condition",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"filteringField",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(f(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"id",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,a.jsx)(f(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"orders"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object[]"})}),(0,a.jsx)("span",{className:"openapi-schema__divider"}),(0,a.jsx)("span",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(f(),{collapsible:!1,name:"isAsc",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,a.jsx)(f(),{collapsible:!1,name:"sortingColumn",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(f(),{collapsible:!1,name:"owner",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,a.jsx)(N.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(u(),{responseExample:'{\n  "conditions": [\n    {\n      "condition": "string",\n      "filteringField": "string",\n      "value": "string"\n    }\n  ],\n  "description": "string",\n  "id": 0,\n  "name": "string",\n  "orders": [\n    {\n      "isAsc": true,\n      "sortingColumn": "string"\n    }\n  ],\n  "owner": "string",\n  "type": "string"\n}',language:"json"})})]})})})})]})})})})]})}function E(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(_,{...e})}):_(e)}}}]);