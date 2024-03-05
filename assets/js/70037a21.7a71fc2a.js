"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97370],{51383:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>k,contentTitle:()=>b,default:()=>q,frontMatter:()=>N,metadata:()=>g,toc:()=>_});var a=i(85893),t=i(11151),r=i(58219),p=i.n(r),l=(i(62316),i(51039)),n=i.n(l),c=(i(82723),i(9487)),d=i.n(c),o=i(41429),m=i.n(o),u=i(5397),h=i.n(u),j=i(4667),x=i.n(j),y=i(9472),f=i.n(y),v=(i(1176),i(12005),i(85162));const N={id:"update-project-issue-sub-type-using-put",title:"Update of custom project specific issue sub-type",description:"Update of custom project specific issue sub-type",sidebar_label:"Update of custom project specific issue sub-type",hide_title:!0,hide_table_of_contents:!0,api:"eJydVsFu2zgQ/RVhTm1BW0mBvei02SDABrtovHZycn2gqbHNrkSy5CiOIejfF0NKthy7LbA6SeRw5s3Me0O1QHIboFiC8/YbKpoEJNJmGybKGvK2qtDDSoB16CVpax5LKKBxpSScpSOPITS4aNbPB4cvQZvt7OUZBDjpZY2Ent23YGSNUAxhvvCXAG14SdIOBJQYlNeOY1zYefzeaI8lFOQbFBDUDmsJRQt0cOw2kNdmC123SsYY6A9bHtji3G+/CQI4PzTEJtK5SquYXv4tsF07DqGp4hgvMelxtvN/zrAtQZeBi9WDsmtOgUvhuXykMbA/Njohl97LA5eCsA6X4Z7MzyNWVkmyHlLQOW5+HV/ZyvortRNHZ9f3zDZ249pm2FlPP9wdkF1pV3reNzguBGdNSIg/39xcdvLpr/Mmfso/Xe/b00Dde1u7CvltvoBfVanGEOT2WkID5hKdRyWJUW9kFVDA20TZErdoJj3PJmtbHiY990/cO88kdTqzm0w1gWyd9eTPgkOlN1plmimQhWY9iVgE4BuhCdqaJK5/8QDFT6MLeJVVM0bBUqmRdpYF7ZpYAVZiAfnrbd6OBNjlw1DIRxAC+tdB3I2voAA+Q1bZqivyvJUN7azXdOhy6fRF0nN01tPMepJVlnxFkF7LdZVaMLhLvd/IpiIoYEfkwoW72WArAE1TszTYEERvv+oEHBFdkulPGyjjQmXSlBkjyz7oTWYQSyw/cmsS3uw94BOuEms79dHKRaOptkyWFZdKNSnusoU1So/+ruFSL1fj7QVTN6U+NjoSsE8oMpy/kxEwF3lqzU9z7+FNMtWP02Z5VP3A4pHYx0uDxk9rI2mfFo+KPoqC66vNxo6Fd1ayHxBgKOjd7DErrWpqNBTF2otbqijuXkGLxvEhbnItNXMupJXfLwovoNIKTcDR8Tsn1Q6zz9MbED1nuaZFnu/3+6mMu1Prt3l/NOR/P94/fFk8TPhIJ4AJn9D/Nr29md7ymrOBamlGYf6Hns9Kc2w44RvlrpLacKAIuO1FuoTXWxBQnN+Tg075dXC+ErCzgfhI265lwBdfdR0vf2/QMydXJ91FqpQ68PtprL1Ddxy68GHez+2P2TmQqwkMN545jMYRiH56jR1EOu1QluhH8+0+xZ08p5oNHi5u704MJ+6UQkcjW74kzgZf+ldZ9/8KtS3jiJR7vmblHgr4Cl8Zo43ZR23G9RYqabZNvCEgReXnP+XRPC0=",sidebar_class_name:"put api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},b=void 0,g={id:"api/service-api/update-project-issue-sub-type-using-put",title:"Update of custom project specific issue sub-type",description:"Update of custom project specific issue sub-type",source:"@site/docs/api/service-api/update-project-issue-sub-type-using-put.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/update-project-issue-sub-type-using-put",permalink:"/docs/api/service-api/update-project-issue-sub-type-using-put",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-project-issue-sub-type-using-put",title:"Update of custom project specific issue sub-type",description:"Update of custom project specific issue sub-type",sidebar_label:"Update of custom project specific issue sub-type",hide_title:!0,hide_table_of_contents:!0,api:"eJydVsFu2zgQ/RVhTm1BW0mBvei02SDABrtovHZycn2gqbHNrkSy5CiOIejfF0NKthy7LbA6SeRw5s3Me0O1QHIboFiC8/YbKpoEJNJmGybKGvK2qtDDSoB16CVpax5LKKBxpSScpSOPITS4aNbPB4cvQZvt7OUZBDjpZY2Ent23YGSNUAxhvvCXAG14SdIOBJQYlNeOY1zYefzeaI8lFOQbFBDUDmsJRQt0cOw2kNdmC123SsYY6A9bHtji3G+/CQI4PzTEJtK5SquYXv4tsF07DqGp4hgvMelxtvN/zrAtQZeBi9WDsmtOgUvhuXykMbA/Njohl97LA5eCsA6X4Z7MzyNWVkmyHlLQOW5+HV/ZyvortRNHZ9f3zDZ249pm2FlPP9wdkF1pV3reNzguBGdNSIg/39xcdvLpr/Mmfso/Xe/b00Dde1u7CvltvoBfVanGEOT2WkID5hKdRyWJUW9kFVDA20TZErdoJj3PJmtbHiY990/cO88kdTqzm0w1gWyd9eTPgkOlN1plmimQhWY9iVgE4BuhCdqaJK5/8QDFT6MLeJVVM0bBUqmRdpYF7ZpYAVZiAfnrbd6OBNjlw1DIRxAC+tdB3I2voAA+Q1bZqivyvJUN7azXdOhy6fRF0nN01tPMepJVlnxFkF7LdZVaMLhLvd/IpiIoYEfkwoW72WArAE1TszTYEERvv+oEHBFdkulPGyjjQmXSlBkjyz7oTWYQSyw/cmsS3uw94BOuEms79dHKRaOptkyWFZdKNSnusoU1So/+ruFSL1fj7QVTN6U+NjoSsE8oMpy/kxEwF3lqzU9z7+FNMtWP02Z5VP3A4pHYx0uDxk9rI2mfFo+KPoqC66vNxo6Fd1ayHxBgKOjd7DErrWpqNBTF2otbqijuXkGLxvEhbnItNXMupJXfLwovoNIKTcDR8Tsn1Q6zz9MbED1nuaZFnu/3+6mMu1Prt3l/NOR/P94/fFk8TPhIJ4AJn9D/Nr29md7ymrOBamlGYf6Hns9Kc2w44RvlrpLacKAIuO1FuoTXWxBQnN+Tg075dXC+ErCzgfhI265lwBdfdR0vf2/QMydXJ91FqpQ68PtprL1Ddxy68GHez+2P2TmQqwkMN545jMYRiH56jR1EOu1QluhH8+0+xZ08p5oNHi5u704MJ+6UQkcjW74kzgZf+ldZ9/8KtS3jiJR7vmblHgr4Cl8Zo43ZR23G9RYqabZNvCEgReXnP+XRPC0=",sidebar_class_name:"put api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Delete pattern template for items' log messages pattern analysis",permalink:"/docs/api/service-api/delete-pattern-template-using-delete"},next:{title:"Creation of custom project specific issue sub-type",permalink:"/docs/api/service-api/create-project-issue-sub-type-using-post"}},k={},_=[{value:"Request",id:"request",level:2}];function F(e){const s={h2:"h2",p:"p",...(0,t.a)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(s.p,{children:"Update of custom project specific issue sub-type"})}),"\n",(0,a.jsx)(n(),{method:"put",path:"/v1/{projectName}/settings/sub-type"}),"\n",(0,a.jsx)(s.p,{children:"Update of custom project specific issue sub-type"}),"\n",(0,a.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,a.jsx)(d(),{className:"openapi-tabs__mime",children:(0,a.jsx)(v.default,{label:"application/json",value:"application/json-schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,a.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,a.jsx)(s.p,{children:"Body"})}),(0,a.jsx)("strong",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,a.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,a.jsx)(s.p,{children:"request"})})}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"ids"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object[]"})}),(0,a.jsx)("span",{className:"openapi-schema__divider"}),(0,a.jsx)("span",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(x(),{collapsible:!1,name:"color",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(x(),{collapsible:!1,name:"locator",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(x(),{collapsible:!1,name:"longName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(x(),{collapsible:!1,name:"shortName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(x(),{collapsible:!1,name:"typeRef",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})})})]})})}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(p(),{label:void 0,id:void 0,children:(0,a.jsxs)(v.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(v.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)(x(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,a.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(h(),{responseExample:'{\n  "message": "string"\n}',language:"json"})})]})})})})]})})})})]})}function q(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(F,{...e})}):F(e)}}}]);