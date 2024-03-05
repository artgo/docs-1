"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57434],{1266:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=i(85893),r=i(11151),c=i(52991),o=i(53438);const s={id:"activity-controller",title:"activity-controller",description:"activity-controller",custom_edit_url:null},a=void 0,l={id:"api/service-api/activity-controller",title:"activity-controller",description:"activity-controller",source:"@site/docs/api/service-api/activity-controller.tag.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/activity-controller",permalink:"/docs/api/service-api/activity-controller",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"activity-controller",title:"activity-controller",description:"activity-controller",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Introduction",permalink:"/docs/api/service-api/report-portal"},next:{title:"Get activities for test item",permalink:"/docs/api/service-api/get-test-item-activities-using-get"}},d={},u=[];function p(t){const e={p:"p",...(0,r.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"Activity Controller"}),"\n","\n","\n",(0,n.jsx)(c.Z,{items:(0,o.jA)().items})]})}function m(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(p,{...t})}):p(t)}},52991:(t,e,i)=>{i.d(e,{Z:()=>x});i(67294);var n=i(90512),r=i(53438),c=i(33692),o=i(13919),s=i(95999),a=i(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(85893);function u(t){let{href:e,children:i}=t;return(0,d.jsx)(c.default,{href:e,className:(0,n.Z)("card padding--lg",l.cardContainer),children:i})}function p(t){let{href:e,icon:i,title:r,description:c}=t;return(0,d.jsxs)(u,{href:e,children:[(0,d.jsxs)(a.default,{as:"h2",className:(0,n.Z)("text--truncate",l.cardTitle),title:r,children:[i," ",r]}),c&&(0,d.jsx)("p",{className:(0,n.Z)("text--truncate",l.cardDescription),title:c,children:c})]})}function m(t){let{item:e}=t;const i=(0,r.LM)(e);return i?(0,d.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,s.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){let{item:e}=t;const i=(0,o.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.xz)(e.docId??void 0);return(0,d.jsx)(p,{href:e.href,icon:i,title:e.label,description:e.description??n?.description})}function v(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(f,{item:e});case"category":return(0,d.jsx)(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function h(t){let{className:e}=t;const i=(0,r.jA)();return(0,d.jsx)(x,{items:i.items,className:e})}function x(t){const{items:e,className:i}=t;if(!e)return(0,d.jsx)(h,{...t});const c=(0,r.MN)(e);return(0,d.jsx)("section",{className:(0,n.Z)("row",i),children:c.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(v,{item:t})},e)))})}},11151:(t,e,i)=>{i.d(e,{Z:()=>s,a:()=>o});var n=i(67294);const r={},c=n.createContext(r);function o(t){const e=n.useContext(c);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),n.createElement(c.Provider,{value:e},t.children)}}}]);