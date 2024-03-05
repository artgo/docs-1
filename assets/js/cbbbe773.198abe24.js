"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16438],{19746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var i=n(85893),s=n(11151),r=n(52991),c=n(53438);const a={id:"user-api-keys",title:"User API Keys",description:"User API Keys",custom_edit_url:null},o=void 0,d={id:"api/api-design/user-api-keys",title:"User API Keys",description:"User API Keys",source:"@site/docs/api/api-design/user-api-keys.tag.mdx",sourceDirName:"api/api-design",slug:"/api/api-design/user-api-keys",permalink:"/docs/api/api-design/user-api-keys",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"user-api-keys",title:"User API Keys",description:"User API Keys",custom_edit_url:null},sidebar:"apiDesign",previous:{title:"Introduction",permalink:"/docs/api/api-design/reportportal-api"},next:{title:"Get user's API Keys",permalink:"/docs/api/api-design/get-user-api-keys"}},l={},u=[];function p(e){const t={p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"API Keys management"}),"\n","\n","\n",(0,i.jsx)(r.Z,{items:(0,c.jA)().items})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>g});n(67294);var i=n(90512),s=n(53438),r=n(33692),c=n(13919),a=n(95999),o=n(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(85893);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(r.default,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:r}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(o.default,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),r&&(0,l.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:r,children:r})]})}function m(e){let{item:t}=e;const n=(0,s.LM)(t);return n?(0,l.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.xz)(t.docId??void 0);return(0,l.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(f,{item:t});case"category":return(0,l.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.jA)();return(0,l.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(x,{...e});const r=(0,s.MN)(t);return(0,l.jsx)("section",{className:(0,i.Z)("row",n),children:r.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(h,{item:e})},t)))})}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var i=n(67294);const s={},r=i.createContext(s);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);