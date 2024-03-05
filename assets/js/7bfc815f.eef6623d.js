"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96996],{26517:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>_,contentTitle:()=>b,default:()=>q,frontMatter:()=>y,metadata:()=>N,toc:()=>k});var a=i(85893),r=i(11151),n=i(58219),l=i.n(n),t=(i(62316),i(51039)),d=i.n(t),p=(i(82723),i(9487)),c=i.n(p),o=i(41429),m=i.n(o),h=i(5397),u=i.n(h),j=i(4667),x=i.n(j),f=i(9472),g=i.n(f),v=(i(1176),i(12005),i(85162));const y={id:"update-user-filter-using-put",title:"Update specified user filter",description:"Update specified user filter",sidebar_label:"Update specified user filter",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1z2zYQ/SucPSUZSLQzbQ88VdU4U087sWtHJ0UHiFxRSEEAAUDLGg7/e2YJfkpynMQnGdyPt7tvH1CB57mDZA2lQzvbCenRzlKtvNVSooUNA23Qci+0us0ggdJk3OPKof3QGK+cUPn96hMwMNzyAj1aCliB4gVCAiHmbQYMhIIEDPd7YJChS60wFHdqZPFrKSxmkHhbIgOX7rHgkFTgj4YCCuUxRwsMdtoW3IejP36DumZ9VmP1F0z9R/rve4mndq/mdt4KlUNdb4IxOv+Xzo5kMY0b2vTwHzCgbqLyZMONkSJtmhl/cWRYjXMILynJ6qTFTZQB2poiZoKCOGChYAbaZtR4FpBuWIdYb6k+mo6lQXqBjnKNQgzVcWv5kdrlsXATRD2WZef3EiQaS2MpVP5BoKSRPnFZ/gymCw0/i3rJJOS5MK26Ppn7BedAnAsf2s7+QJvuyPKkMcItXAoMnLZeqHypZVmo13sR3IacW60lckV4ppFeqDacnX5jgKosCJbkpUppHTw6T4UAA6lz2NTBf7oJzYEzWrmA7v3V1Tnl7/6Zkv1d/O4yv+86QVnqwkikXw+P8FpHCnSO5y+Mt52wsZhyT6h3XDpk8DxLdYY5qlm7rbOtzo6zViRGSzotJWxg5AymYicwi0gdo8BAauKzR+XC8qwr+B+PkHw3VU/NISUpSIF+r0lUTdnUSwKVQPx0HVcjXarjkDiuOpWsiU9onzqlLa2EBMjH61TLOonjipd+r63wxzrmRpxV+IBGW3+vrecyCrEalFbwrQwN78KFSe94KUlq994bdxbuvrMdGEaGwFr7Tc2gR3ROnb+18xF1KuIqiwhZ9EbsIoWYYfY20rso4I1OAQ+4Miz03DZWpjGaC03U2FCr0jLkXVewRW7RLkpq9Xoz/vxIRA2lj416urUFNXxuVrIxolsHSMsfhuvg5pkTsU91dj2RuGEnT5Vt+NKxpmP65rTvvWXL6P7/TrTWvZS0N9pUPMaR2zJbZajp1tzp8d5OZvACo7oJLe5vo0ynZYHK8/ZeIG3gaaMNLdzH0pATsabggkjswsmfZ5NkIEWKyuHIfWF4usfo/fwKWLsENKQkjg+Hw5w3X+fa5nHr6uJ/b5c3Hx9vZuRCFwZaF9D/Pr++ml/TmdHOF1yN0ryiBpcvFo/PPjaSi0azG3BVu+FreLoGBsn07dHHS/rH0IbBXjtPHlW15Q5XVtY1HX8t0RKfN8PONrPOhKPfgwCegOvlGd48tAr/Nho9vi6C7649dRxRElire703vb5+Kf+0D78AYRygJqnZI6ebeBDnZcg7+0Rxhghn7zGqIXgs0hSNH9nSdTYR7fDo3bbPv0JnZGX5gR4A/AAJfIbPhFGb/p3VnFcgucrL5i6DkJX+vgHSTf0t",sidebar_class_name:"put api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},b=void 0,N={id:"api/service-api/update-user-filter-using-put",title:"Update specified user filter",description:"Update specified user filter",source:"@site/docs/api/service-api/update-user-filter-using-put.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/update-user-filter-using-put",permalink:"/docs/api/service-api/update-user-filter-using-put",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-user-filter-using-put",title:"Update specified user filter",description:"Update specified user filter",sidebar_label:"Update specified user filter",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1z2zYQ/SucPSUZSLQzbQ88VdU4U087sWtHJ0UHiFxRSEEAAUDLGg7/e2YJfkpynMQnGdyPt7tvH1CB57mDZA2lQzvbCenRzlKtvNVSooUNA23Qci+0us0ggdJk3OPKof3QGK+cUPn96hMwMNzyAj1aCliB4gVCAiHmbQYMhIIEDPd7YJChS60wFHdqZPFrKSxmkHhbIgOX7rHgkFTgj4YCCuUxRwsMdtoW3IejP36DumZ9VmP1F0z9R/rve4mndq/mdt4KlUNdb4IxOv+Xzo5kMY0b2vTwHzCgbqLyZMONkSJtmhl/cWRYjXMILynJ6qTFTZQB2poiZoKCOGChYAbaZtR4FpBuWIdYb6k+mo6lQXqBjnKNQgzVcWv5kdrlsXATRD2WZef3EiQaS2MpVP5BoKSRPnFZ/gymCw0/i3rJJOS5MK26Ppn7BedAnAsf2s7+QJvuyPKkMcItXAoMnLZeqHypZVmo13sR3IacW60lckV4ppFeqDacnX5jgKosCJbkpUppHTw6T4UAA6lz2NTBf7oJzYEzWrmA7v3V1Tnl7/6Zkv1d/O4yv+86QVnqwkikXw+P8FpHCnSO5y+Mt52wsZhyT6h3XDpk8DxLdYY5qlm7rbOtzo6zViRGSzotJWxg5AymYicwi0gdo8BAauKzR+XC8qwr+B+PkHw3VU/NISUpSIF+r0lUTdnUSwKVQPx0HVcjXarjkDiuOpWsiU9onzqlLa2EBMjH61TLOonjipd+r63wxzrmRpxV+IBGW3+vrecyCrEalFbwrQwN78KFSe94KUlq994bdxbuvrMdGEaGwFr7Tc2gR3ROnb+18xF1KuIqiwhZ9EbsIoWYYfY20rso4I1OAQ+4Miz03DZWpjGaC03U2FCr0jLkXVewRW7RLkpq9Xoz/vxIRA2lj416urUFNXxuVrIxolsHSMsfhuvg5pkTsU91dj2RuGEnT5Vt+NKxpmP65rTvvWXL6P7/TrTWvZS0N9pUPMaR2zJbZajp1tzp8d5OZvACo7oJLe5vo0ynZYHK8/ZeIG3gaaMNLdzH0pATsabggkjswsmfZ5NkIEWKyuHIfWF4usfo/fwKWLsENKQkjg+Hw5w3X+fa5nHr6uJ/b5c3Hx9vZuRCFwZaF9D/Pr++ml/TmdHOF1yN0ryiBpcvFo/PPjaSi0azG3BVu+FreLoGBsn07dHHS/rH0IbBXjtPHlW15Q5XVtY1HX8t0RKfN8PONrPOhKPfgwCegOvlGd48tAr/Nho9vi6C7649dRxRElire703vb5+Kf+0D78AYRygJqnZI6ebeBDnZcg7+0Rxhghn7zGqIXgs0hSNH9nSdTYR7fDo3bbPv0JnZGX5gR4A/AAJfIbPhFGb/p3VnFcgucrL5i6DkJX+vgHSTf0t",sidebar_class_name:"put api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get specified user filter by id",permalink:"/docs/api/service-api/get-filter-using-get"},next:{title:"Delete specified user filter by id",permalink:"/docs/api/service-api/delete-filter-using-delete"}},_={},k=[{value:"Request",id:"request",level:2}];function w(e){const s={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(s.p,{children:"Update specified user filter"})}),"\n",(0,a.jsx)(d(),{method:"put",path:"/v1/{projectName}/filter/{filterId}"}),"\n",(0,a.jsx)(s.p,{children:"Update specified user filter"}),"\n",(0,a.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)(m(),{className:"paramsItem",param:{name:"filterId",in:"path",description:"filterId",required:!0,schema:{type:"integer",format:"int64"}}}),(0,a.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,a.jsx)(c(),{className:"openapi-tabs__mime",children:(0,a.jsx)(v.default,{label:"application/json",value:"application/json-schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,a.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,a.jsx)(s.p,{children:"Body"})}),(0,a.jsx)("strong",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,a.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,a.jsx)(s.p,{children:"updateRQ"})})}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"conditions"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object[]"})}),(0,a.jsx)("span",{className:"openapi-schema__divider"}),(0,a.jsx)("span",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(x(),{collapsible:!1,name:"condition",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(x(),{collapsible:!1,name:"filteringField",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(x(),{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(x(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(x(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"orders"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object[]"})}),(0,a.jsx)("span",{className:"openapi-schema__divider"}),(0,a.jsx)("span",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(x(),{collapsible:!1,name:"isAsc",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,a.jsx)(x(),{collapsible:!1,name:"sortingColumn",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(x(),{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`launch`, `testitem`, `log`]",schema:{type:"string",enum:["launch","testitem","log"]}})]})]})})}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(l(),{label:void 0,id:void 0,children:(0,a.jsxs)(v.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(v.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)(x(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,a.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(u(),{responseExample:'{\n  "message": "string"\n}',language:"json"})})]})})})})]})})})})]})}function q(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(w,{...e})}):w(e)}}}]);