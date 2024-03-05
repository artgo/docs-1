"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51772],{51772:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});n(67294);var a=n(95999),s=n(10833),r=n(30570),o=n(40674),l=n(85893);function c(){const e=(0,a.translate)({id:"theme.NotFound.title",message:"Page Not Found"});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.d,{title:e}),(0,l.jsx)(r.Z,{children:(0,l.jsx)(o.Z,{})})]})}},40674:(e,t,n)=>{n.d(t,{Z:()=>B});var a=n(10833),s=n(67294),r=n(92503);const o="not-found-content_BtrZ",l="not-found-title_K9jB",c="not-found-text_yyzJ",u="not-found-img__KqI",i="search-button-wrapper_Mh6v";var d=n(73935),h=n(57052),f=n(26731),m=n(33692),x=n(16550),j=n(66177),b=n(98022),p=n(239),g=n(37006),C=n(95999),k=n(52263),v=n(28364),y=n(45697),N=n.n(y);const F="button_IjDh";var P=n(85893);const w=(0,s.forwardRef)(((e,t)=>{let{children:n,ariaLabel:a,onClick:s}=e;return(0,P.jsx)("button",{type:"button","aria-label":a,onClick:s,className:F,ref:t,children:n})}));w.propTypes={children:N().node,ariaLabel:N().string,onClick:N().func},w.defaultProps={children:null,ariaLabel:"",onClick:()=>{}};const S={"search-icon":"search-icon_u_mf"};function _(e){let{hit:t,children:n}=e;return(0,P.jsx)(m.default,{to:t.url,children:n})}function R(e){let{state:t,onClose:n}=e;const a=(0,j.M)();return(0,P.jsx)(m.default,{to:a(t.query),onClick:n,children:(0,P.jsx)(C.default,{id:"theme.SearchBar.seeAll",values:{count:t.context.nbHits},children:"See all {count} results"})})}function I(){const{siteConfig:e}=(0,k.default)(),t=e.themeConfig.algolia,{siteMetadata:n}=(0,k.default)(),a=(0,p.l)(),r=(0,g.r)(),o=t.searchParameters?.facetFilters??[],l=t.contextualSearch?function(e,t){const n=e=>"string"==typeof e?[e]:e;return[...n(e),...n(t)]}(r,o):o,c={...t.searchParameters,facetFilters:l},u=(0,x.k6)(),i=(0,s.useRef)(null),m=(0,s.useRef)(null),[j,C]=(0,s.useState)(!1),[y,N]=(0,s.useState)(void 0),F=(0,s.useCallback)((()=>{C(!0)}),[C]),I=(0,s.useCallback)((()=>{C(!1),i.current?.remove()}),[C]),B=(0,s.useCallback)((e=>{C(!0),N(e.key)}),[C,N]),L=(0,s.useRef)({navigate(e){let{itemUrl:n}=e;(0,b.F)(t.externalUrlRegex,n)?window.location.href=n:u.push(n)}}).current,A=(0,s.useRef)((e=>t.transformItems?t.transformItems(e):e.map((e=>({...e,url:a(e.url)}))))).current,M=(0,s.useMemo)((()=>function(e){return(0,P.jsx)(R,{...e,onClose:I})}),[I]),Z=(0,s.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",n.docusaurusVersion),e)),[n.docusaurusVersion]);(0,h.D)({isOpen:j,onOpen:F,onClose:I,onInput:B,searchButtonRef:m});const{buttonText:Y="Search",buttonAriaLabel:q="Search"}=v.default.button;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(w,{ref:m,onClick:F,ariaLabel:q,children:[(0,P.jsx)("i",{className:S["search-icon"]}),Y]}),j&&(0,d.createPortal)((0,P.jsx)(f.H,{onClose:I,initialScrollY:window.scrollY,initialQuery:y,navigator:L,transformItems:A,hitComponent:_,transformSearchClient:Z,...t.searchPagePath&&{resultsFooterComponent:M},...t,searchParameters:c,placeholder:v.default.placeholder,translations:v.default.modal}),document.body)]})}const B=function(){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(a.d,{title:"Page Not Found"}),(0,P.jsxs)("div",{className:o,children:[(0,P.jsx)("div",{className:u}),(0,P.jsx)(r.default,{as:"h1",className:l,children:"Page Not Found"}),(0,P.jsx)("p",{className:c,children:"You may have used an outdated link as there have been some changes in the structure of documentation."}),(0,P.jsxs)("p",{className:c,children:["But it/'s clearly here somewhere! ",(0,P.jsx)("br",{}),"Please, use the ",(0,P.jsx)("strong",{children:"keyword search"})," to find it!"]}),(0,P.jsx)("div",{className:i,children:(0,P.jsx)(I,{})})]})]})}}}]);