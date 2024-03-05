"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75511],{33107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=r(85893),i=r(11151),o=r(52991),s=r(53438);const c={id:"dashboard-controller",title:"dashboard-controller",description:"dashboard-controller",custom_edit_url:null},a=void 0,l={id:"api/service-api/dashboard-controller",title:"dashboard-controller",description:"dashboard-controller",source:"@site/docs/api/service-api/dashboard-controller.tag.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/dashboard-controller",permalink:"/docs/api/service-api/dashboard-controller",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"dashboard-controller",title:"dashboard-controller",description:"dashboard-controller",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Post ticket to the bts integration",permalink:"/docs/api/service-api/create-issue-using-post"},next:{title:"Get all permitted dashboard resources for specified project",permalink:"/docs/api/service-api/get-all-dashboards-using-get"}},d={},u=[];function p(e){const t={p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Dashboard Controller"}),"\n","\n","\n",(0,n.jsx)(o.Z,{items:(0,s.jA)().items})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},52991:(e,t,r)=>{r.d(t,{Z:()=>b});r(67294);var n=r(90512),i=r(53438),o=r(33692),s=r(13919),c=r(95999),a=r(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(85893);function u(e){let{href:t,children:r}=e;return(0,d.jsx)(o.default,{href:t,className:(0,n.Z)("card padding--lg",l.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:i,description:o}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.default,{as:"h2",className:(0,n.Z)("text--truncate",l.cardTitle),title:i,children:[r," ",i]}),o&&(0,d.jsx)("p",{className:(0,n.Z)("text--truncate",l.cardDescription),title:o,children:o})]})}function m(e){let{item:t}=e;const r=(0,i.LM)(t);return r?(0,d.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,i.jA)();return(0,d.jsx)(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(x,{...e});const o=(0,i.MN)(t);return(0,d.jsx)("section",{className:(0,n.Z)("row",r),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>s});var n=r(67294);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);