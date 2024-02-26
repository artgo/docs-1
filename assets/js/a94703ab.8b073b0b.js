"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4368],{12674:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var a=n(67294),o=n(90512),s=n(10833),i=n(35281),r=n(52802),l=n(1116),c=n(95999),d=n(12466),u=n(85936);const m={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var b=n(85893);function h(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),s=(0,a.useRef)(!1),{startScroll:i,cancelScroll:r}=(0,d.Ct)();return(0,d.RF)(((e,n)=>{let{scrollY:a}=e;const i=n?.scrollY;i&&(s.current?s.current=!1:a>=i?(r(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.S)((e=>{e.location.hash&&(s.current=!0,o(!1))})),{shown:n,scrollToTop:()=>i(0)}}({threshold:300});return(0,b.jsx)("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",i.k.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(91442),x=n(16550),f=n(87524),j=n(86668),k=n(21327);function C(e){return(0,b.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const v={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function _(e){let{onClick:t}=e;return(0,b.jsx)("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",v.collapseSidebarButton),onClick:t,children:(0,b.jsx)(C,{className:v.collapseSidebarButtonIcon})})}var g=n(59689),S=n(902);const I=Symbol("EmptyContext"),N=a.createContext(I);function B(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),s=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,b.jsx)(N.Provider,{value:s,children:t})}var T=n(86043),y=n(48596),Z=n(33692),A=n(72389);function L(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,b.jsx)("button",{"aria-label":t?(0,c.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function w(e){let{item:t,onItemClick:n,activePath:s,level:l,index:c,...d}=e;const{items:u,label:m,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,j.L)(),k=function(e){const t=(0,A.Z)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,r.LM)(e):void 0),[e,t])}(t),C=(0,r._F)(t,s),v=(0,y.Mg)(x,s),{collapsed:_,setCollapsed:g}=(0,T.u)({initialState:()=>!!h&&(!C&&t.collapsed)}),{expandedItem:B,setExpandedItem:w}=function(){const e=(0,a.useContext)(N);if(e===I)throw new S.i6("DocSidebarItemsExpandedStateProvider");return e}(),E=function(e){void 0===e&&(e=!_),w(e?null:c),g(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const s=(0,S.D9)(t);(0,a.useEffect)((()=>{t&&!s&&n&&o(!1)}),[t,s,n,o])}({isActive:C,collapsed:_,updateCollapsed:E}),(0,a.useEffect)((()=>{h&&null!=B&&B!==c&&f&&g(!0)}),[h,B,c,g,f]),(0,b.jsxs)("li",{className:(0,o.Z)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":_},p),children:[(0,b.jsxs)("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v}),children:[(0,b.jsx)(Z.Z,{className:(0,o.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":C}),onClick:h?e=>{n?.(t),x?E(!1):(e.preventDefault(),E())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":h?!_:void 0,href:h?k??"#":k,...d,children:m}),x&&h&&(0,b.jsx)(L,{collapsed:_,categoryLabel:m,onClick:e=>{e.preventDefault(),E()}})]}),(0,b.jsx)(T.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_,children:(0,b.jsx)(V,{items:u,tabIndex:_?-1:0,onItemClick:n,activePath:s,level:l+1})})]})}var E=n(13919),H=n(39471);const M={menuExternalLink:"menuExternalLink_NmtK"};function P(e){let{item:t,onItemClick:n,activePath:a,level:s,index:l,...c}=e;const{href:d,label:u,className:m,autoAddBaseUrl:h}=t,p=(0,r._F)(t,a),x=(0,E.Z)(d);return(0,b.jsx)("li",{className:(0,o.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(s),"menu__list-item",m),children:(0,b.jsxs)(Z.Z,{className:(0,o.Z)("menu__link",!x&&M.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...c,children:[u,!x&&(0,b.jsx)(H.Z,{})]})},u)}const R={menuHtmlItem:"menuHtmlItem_M9Kj"};function F(e){let{item:t,level:n,index:a}=e;const{value:s,defaultStyle:r,className:l}=t;return(0,b.jsx)("li",{className:(0,o.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(n),r&&[R.menuHtmlItem,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:s}},a)}function W(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,b.jsx)(w,{item:t,...n});case"html":return(0,b.jsx)(F,{item:t,...n});default:return(0,b.jsx)(P,{item:t,...n})}}function D(e){let{items:t,...n}=e;const a=(0,r.f)(t,n.activePath);return(0,b.jsx)(B,{children:a.map(((e,t)=>(0,b.jsx)(W,{item:e,index:t,...n},t)))})}const V=(0,a.memo)(D),U={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function Y(e){let{path:t,sidebar:n,className:s}=e;const r=function(){const{isActive:e}=(0,g.nT)(),[t,n]=(0,a.useState)(e);return(0,d.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,b.jsx)("nav",{"aria-label":(0,c.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",U.menu,r&&U.menuWithAnnouncementBar,s),children:(0,b.jsx)("ul",{className:(0,o.Z)(i.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(V,{items:n,activePath:t,level:1})})})}const K="sidebar_njMd",z="sidebarWithHideableNavbar_wUlq",G="sidebarHidden_VK0M",O="sidebarLogo_isFc";function q(e){let{path:t,sidebar:n,onCollapse:a,isHidden:s}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:r}}}=(0,j.L)();return(0,b.jsxs)("div",{className:(0,o.Z)(K,i&&z,s&&G),children:[i&&(0,b.jsx)(k.Z,{tabIndex:-1,className:O}),(0,b.jsx)(Y,{path:t,sidebar:n}),r&&(0,b.jsx)(_,{onClick:a})]})}const J=a.memo(q);var Q=n(13102),X=n(93163);const $=e=>{let{sidebar:t,path:n}=e;const a=(0,X.e)();return(0,b.jsx)("ul",{className:(0,o.Z)(i.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(V,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ee(e){return(0,b.jsx)(Q.Zo,{component:$,props:e})}const te=a.memo(ee);function ne(e){const t=(0,f.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,b.jsxs)(b.Fragment,{children:[n&&(0,b.jsx)(J,{...e}),a&&(0,b.jsx)(te,{...e})]})}const ae={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function oe(e){let{toggleSidebar:t}=e;return(0,b.jsx)("div",{className:ae.expandButton,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,b.jsx)(C,{className:ae.expandButtonIcon})})}const se={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function ie(e){let{children:t}=e;const n=(0,l.V)();return(0,b.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function re(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:s}=e;const{pathname:r}=(0,x.TH)(),[l,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{l&&c(!1),!l&&(0,p.n)()&&c(!0),s((e=>!e))}),[s,l]);return(0,b.jsx)("aside",{className:(0,o.Z)(i.k.docs.docSidebarContainer,se.docSidebarContainer,n&&se.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(se.docSidebarContainer)&&n&&c(!0)},children:(0,b.jsx)(ie,{children:(0,b.jsxs)("div",{className:(0,o.Z)(se.sidebarViewport,l&&se.sidebarViewportHidden),children:[(0,b.jsx)(ne,{sidebar:t,path:r,onCollapse:d,isHidden:l}),l&&(0,b.jsx)(oe,{toggleSidebar:d})]})})})}const le={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function ce(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,l.V)();return(0,b.jsx)("main",{className:(0,o.Z)(le.docMainContainer,(t||!a)&&le.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",le.docItemWrapper,t&&le.docItemWrapperEnhanced),children:n})})}const de={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ue(e){let{children:t}=e;const n=(0,l.V)(),[o,s]=(0,a.useState)(!1);return(0,b.jsxs)("div",{className:de.docsWrapper,children:[(0,b.jsx)(h,{}),(0,b.jsxs)("div",{className:de.docRoot,children:[n&&(0,b.jsx)(re,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:s}),(0,b.jsx)(ce,{hiddenSidebarContainer:o,children:t})]})]})}var me=n(40674);function be(e){const t=(0,r.SN)(e);if(!t)return(0,b.jsx)(me.Z,{});const{docElement:n,sidebarName:a,sidebarItems:c}=t;return(0,b.jsx)(s.FG,{className:(0,o.Z)(i.k.page.docsDocPage),children:(0,b.jsx)(l.b,{name:a,items:c,children:(0,b.jsx)(ue,{children:n})})})}},40674:(e,t,n)=>{n.d(t,{Z:()=>L});var a=n(10833),o=n(67294),s=n(92503);const i="not-found-content_BtrZ",r="not-found-title_K9jB",l="not-found-text_yyzJ",c="not-found-img__KqI",d="search-button-wrapper_Mh6v";var u=n(73935),m=n(57052),b=n(26731),h=n(33692),p=n(16550),x=n(66177),f=n(98022),j=n(239),k=n(37006),C=n(95999),v=n(52263),_=n(28364),g=n(45697),S=n.n(g);const I="button_IjDh";var N=n(85893);const B=(0,o.forwardRef)(((e,t)=>{let{children:n,ariaLabel:a,onClick:o}=e;return(0,N.jsx)("button",{type:"button","aria-label":a,onClick:o,className:I,ref:t,children:n})}));B.propTypes={children:S().node,ariaLabel:S().string,onClick:S().func},B.defaultProps={children:null,ariaLabel:"",onClick:()=>{}};const T={"search-icon":"search-icon_u_mf"};function y(e){let{hit:t,children:n}=e;return(0,N.jsx)(h.Z,{to:t.url,children:n})}function Z(e){let{state:t,onClose:n}=e;const a=(0,x.M)();return(0,N.jsx)(h.Z,{to:a(t.query),onClick:n,children:(0,N.jsx)(C.Z,{id:"theme.SearchBar.seeAll",values:{count:t.context.nbHits},children:"See all {count} results"})})}function A(){const{siteConfig:e}=(0,v.Z)(),t=e.themeConfig.algolia,{siteMetadata:n}=(0,v.Z)(),a=(0,j.l)(),s=(0,k.r)(),i=t.searchParameters?.facetFilters??[],r=t.contextualSearch?function(e,t){const n=e=>"string"==typeof e?[e]:e;return[...n(e),...n(t)]}(s,i):i,l={...t.searchParameters,facetFilters:r},c=(0,p.k6)(),d=(0,o.useRef)(null),h=(0,o.useRef)(null),[x,C]=(0,o.useState)(!1),[g,S]=(0,o.useState)(void 0),I=(0,o.useCallback)((()=>{C(!0)}),[C]),A=(0,o.useCallback)((()=>{C(!1),d.current?.remove()}),[C]),L=(0,o.useCallback)((e=>{C(!0),S(e.key)}),[C,S]),w=(0,o.useRef)({navigate(e){let{itemUrl:n}=e;(0,f.F)(t.externalUrlRegex,n)?window.location.href=n:c.push(n)}}).current,E=(0,o.useRef)((e=>t.transformItems?t.transformItems(e):e.map((e=>({...e,url:a(e.url)}))))).current,H=(0,o.useMemo)((()=>function(e){return(0,N.jsx)(Z,{...e,onClose:A})}),[A]),M=(0,o.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",n.docusaurusVersion),e)),[n.docusaurusVersion]);(0,m.D)({isOpen:x,onOpen:I,onClose:A,onInput:L,searchButtonRef:h});const{buttonText:P="Search",buttonAriaLabel:R="Search"}=_.default.button;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(B,{ref:h,onClick:I,ariaLabel:R,children:[(0,N.jsx)("i",{className:T["search-icon"]}),P]}),x&&(0,u.createPortal)((0,N.jsx)(b.H,{onClose:A,initialScrollY:window.scrollY,initialQuery:g,navigator:w,transformItems:E,hitComponent:y,transformSearchClient:M,...t.searchPagePath&&{resultsFooterComponent:H},...t,searchParameters:l,placeholder:_.default.placeholder,translations:_.default.modal}),document.body)]})}const L=function(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(a.d,{title:"Page Not Found"}),(0,N.jsxs)("div",{className:i,children:[(0,N.jsx)("div",{className:c}),(0,N.jsx)(s.Z,{as:"h1",className:r,children:"Page Not Found"}),(0,N.jsx)("p",{className:l,children:"You may have used an outdated link as there have been some changes in the structure of documentation."}),(0,N.jsxs)("p",{className:l,children:["But it/'s clearly here somewhere! ",(0,N.jsx)("br",{}),"Please, use the ",(0,N.jsx)("strong",{children:"keyword search"})," to find it!"]}),(0,N.jsx)("div",{className:d,children:(0,N.jsx)(A,{})})]})]})}}}]);