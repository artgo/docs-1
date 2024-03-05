(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24708],{85162:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});r(67294);var n=r(90512);const a={tabItem:"tabItem_Ymn6"};var o=r(85893);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:r,children:t})}},65130:(e,t,r)=>{"use strict";r.d(t,{b:()=>l,k:()=>i});var n=r(67294),a=r(902),o=r(85893);const s=n.createContext(null);function l(e){let{children:t,content:r}=e;const a=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(r);return(0,o.jsx)(s.Provider,{value:a,children:t})}function i(){const e=(0,n.useContext)(s);if(null===e)throw new a.i6("DocProvider");return e}},14353:(e,t,r)=>{"use strict";r.d(t,{D:()=>i,f:()=>u});var n=r(67294),a=r(902),o=r(85893);const s=Symbol("EmptyContext"),l=n.createContext(s);function i(e){let{children:t}=e;const[r,a]=(0,n.useState)(null),s=(0,n.useMemo)((()=>({expandedItem:r,setExpandedItem:a})),[r]);return(0,o.jsx)(l.Provider,{value:s,children:t})}function u(){const e=(0,n.useContext)(l);if(e===s)throw new a.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,r)=>{"use strict";r.d(t,{a:()=>s});var n=r(67294),a=r(12466),o=r(85936);function s(e){let{threshold:t}=e;const[r,s]=(0,n.useState)(!1),l=(0,n.useRef)(!1),{startScroll:i,cancelScroll:u}=(0,a.Ct)();return(0,a.RF)(((e,r)=>{let{scrollY:n}=e;const a=r?.scrollY;a&&(l.current?l.current=!1:n>=a?(u(),s(!1)):n<t?s(!1):n+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,o.S)((e=>{e.location.hash&&(l.current=!0,s(!1))})),{shown:r,scrollToTop:()=>i(0)}}},85448:(e,t,r)=>{"use strict";r.d(t,{F:()=>l});var n=r(67294),a=r(902);const o={attributes:!0,characterData:!0,childList:!0,subtree:!0};function s(e,t){const[r,s]=(0,n.useState)(),l=(0,n.useCallback)((()=>{s(e.current?.closest("[role=tabpanel][hidden]"))}),[e,s]);(0,n.useEffect)((()=>{l()}),[l]),function(e,t,r){void 0===r&&(r=o);const s=(0,a.zX)(t),l=(0,a.Ql)(r);(0,n.useEffect)((()=>{const t=new MutationObserver(s);return e&&t.observe(e,l),()=>t.disconnect()}),[e,s,l])}(r,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),l())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function l(){const[e,t]=(0,n.useState)(!1),[r,a]=(0,n.useState)(!1),o=(0,n.useRef)(null),l=(0,n.useCallback)((()=>{const r=o.current.querySelector("code");e?r.removeAttribute("style"):(r.style.whiteSpace="pre-wrap",r.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),i=(0,n.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,r=e>t||o.current.querySelector("code").hasAttribute("style");a(r)}),[o]);return s(o,i),(0,n.useEffect)((()=>{i()}),[e,i]),(0,n.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:r,toggle:l}}},66412:(e,t,r)=>{"use strict";r.d(t,{p:()=>o});var n=r(92949),a=r(86668);function o(){const{prism:e}=(0,a.L)(),{colorMode:t}=(0,n.I)(),r=e.theme,o=e.darkTheme||r;return"dark"===t?o:r}},96841:(e,t,r)=>{"use strict";r.d(t,{S:()=>i});var n=r(67294),a=r(86668);function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function s(e,t){let{anchorTopOffset:r}=t;const n=e.find((e=>o(e).top>=r));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function l(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function i(e){const t=(0,n.useRef)(void 0),r=l();(0,n.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:r}=e;const n=[];for(let a=t;a<=r;a+=1)n.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),u=s(i,{anchorTopOffset:r.current}),c=e.find((e=>u&&u.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,r){r?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,r])}},65094:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Collapsible:()=>u.z,ErrorBoundaryError:()=>L.aG,ErrorBoundaryErrorMessageFallback:()=>L.Ac,ErrorBoundaryTryAgainButton:()=>L.Cw,ErrorCauseBoundary:()=>L.QW,HtmlClassNameProvider:()=>m.FG,NavbarSecondaryMenuFiller:()=>h.Zo,PageMetadata:()=>m.d,ReactContextError:()=>f.i6,SkipToContentFallbackId:()=>w.u,SkipToContentLink:()=>w.l,ThemeClassNames:()=>c.k,ThemedComponent:()=>a.Z,UnlistedBannerMessage:()=>j.eU,UnlistedBannerTitle:()=>j.cI,UnlistedMetadata:()=>j.T$,composeProviders:()=>f.Qc,createStorageSlot:()=>o.WA,duplicates:()=>x.l,filterDocCardListItems:()=>l.MN,isMultiColumnFooterLinks:()=>S.a,isRegexpStringMatch:()=>E.F,listStorageKeys:()=>o._f,listTagsByLetters:()=>y,prefersReducedMotion:()=>d.n,processAdmonitionProps:()=>k.X,translateTagsPageTitle:()=>v,uniq:()=>x.j,useCollapsible:()=>u.u,useColorMode:()=>p.I,useContextualSearchFilters:()=>s._q,useCurrentSidebarCategory:()=>l.jA,useDocsPreferredVersion:()=>P.J,useEvent:()=>f.zX,usePluralForm:()=>i.c,usePrevious:()=>f.D9,usePrismTheme:()=>T.p,useSearchLinkCreator:()=>C.M,useSearchQueryString:()=>C.K,useStorageSlot:()=>o.Nk,useThemeConfig:()=>n.L,useWindowSize:()=>b.i});var n=r(86668),a=r(18431),o=r(50012),s=r(43320),l=r(53438),i=r(88824),u=r(86043),c=r(35281),d=r(91442),f=r(902),m=r(10833),p=r(92949),h=r(13102),b=r(87524),g=r(95999);const v=()=>(0,g.translate)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function y(e){const t={};return Object.values(e).forEach((e=>{const r=function(e){return e[0].toUpperCase()}(e.label);t[r]??=[],t[r].push(e)})),Object.entries(t).sort(((e,t)=>{let[r]=e,[n]=t;return r.localeCompare(n)})).map((e=>{let[t,r]=e;return{letter:t,tags:r.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}var C=r(66177),S=r(42489),E=r(98022),x=r(67392),T=r(66412),P=r(60373),k=r(94697),w=r(55225),j=r(35835),L=r(69690)},29517:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AnnouncementBarProvider:()=>h.pl,BlogPostProvider:()=>f,Collapsible:()=>n.Collapsible,ColorModeProvider:()=>j.S,DEFAULT_SEARCH_TAG:()=>B.HX,DocProvider:()=>l.b,DocSidebarItemsExpandedStateProvider:()=>a.D,DocsPreferredVersionContextProvider:()=>p.L5,DocsSidebarProvider:()=>s.b,DocsVersionProvider:()=>o.q,ErrorBoundaryError:()=>n.ErrorBoundaryError,ErrorBoundaryErrorMessageFallback:()=>n.ErrorBoundaryErrorMessageFallback,ErrorBoundaryTryAgainButton:()=>n.ErrorBoundaryTryAgainButton,ErrorCauseBoundary:()=>n.ErrorCauseBoundary,HtmlClassNameProvider:()=>n.HtmlClassNameProvider,NavbarProvider:()=>H.V,NavbarSecondaryMenuFiller:()=>n.NavbarSecondaryMenuFiller,PageMetadata:()=>n.PageMetadata,PluginHtmlClassNameProvider:()=>V.VC,ReactContextError:()=>n.ReactContextError,ScrollControllerProvider:()=>F.OC,SkipToContentFallbackId:()=>n.SkipToContentFallbackId,SkipToContentLink:()=>n.SkipToContentLink,ThemeClassNames:()=>n.ThemeClassNames,ThemedComponent:()=>n.ThemedComponent,UnlistedBannerMessage:()=>n.UnlistedBannerMessage,UnlistedBannerTitle:()=>n.UnlistedBannerTitle,UnlistedMetadata:()=>n.UnlistedMetadata,composeProviders:()=>n.composeProviders,containsLineNumbers:()=>M.nt,createStorageSlot:()=>n.createStorageSlot,docVersionSearchTag:()=>B.os,duplicates:()=>n.duplicates,filterDocCardListItems:()=>n.filterDocCardListItems,findFirstSidebarItemLink:()=>N.LM,findSidebarCategory:()=>N.em,getPrismCssVariables:()=>M.QC,isActiveSidebarItem:()=>N._F,isDocsPluginEnabled:()=>N.cE,isMultiColumnFooterLinks:()=>n.isMultiColumnFooterLinks,isRegexpStringMatch:()=>n.isRegexpStringMatch,isSamePath:()=>_.Mg,isVisibleSidebarItem:()=>N.pC,keyboardFocusedClassName:()=>U.h,listStorageKeys:()=>n.listStorageKeys,listTagsByLetters:()=>n.listTagsByLetters,parseCodeBlockTitle:()=>M.bc,parseLanguage:()=>M.Vo,parseLines:()=>M.nZ,prefersReducedMotion:()=>n.prefersReducedMotion,processAdmonitionProps:()=>n.processAdmonitionProps,sanitizeTabsChildren:()=>S,splitNavbarItems:()=>H.A,translateTagsPageTitle:()=>n.translateTagsPageTitle,uniq:()=>n.uniq,useAlternatePageUtils:()=>L.l,useAnnouncementBar:()=>h.nT,useBackToTopButton:()=>Q.a,useBlogPost:()=>m,useCodeWordWrap:()=>W.F,useCollapsible:()=>n.useCollapsible,useColorMode:()=>n.useColorMode,useContextualSearchFilters:()=>n.useContextualSearchFilters,useCurrentSidebarCategory:()=>n.useCurrentSidebarCategory,useDoc:()=>l.k,useDocById:()=>N.xz,useDocRootMetadata:()=>N.SN,useDocSidebarItemsExpandedState:()=>a.f,useDocsPreferredVersion:()=>n.useDocsPreferredVersion,useDocsPreferredVersionByPluginId:()=>p.Oh,useDocsSidebar:()=>s.V,useDocsVersion:()=>o.E,useDocsVersionCandidates:()=>N.lO,useEvent:()=>n.useEvent,useFilteredAndTreeifiedTOC:()=>A.b,useHideableNavbar:()=>q.c,useHistoryPopHandler:()=>v.Rb,useHistorySelector:()=>v.xL,useHomePageRoute:()=>_.Ns,useKeyboardNavigation:()=>U.t,useLayoutDoc:()=>N.vY,useLayoutDocsSidebar:()=>N.oz,useLocalPathname:()=>D.b,useLocationChange:()=>O.S,useLockBodyScroll:()=>z.N,useNavbarMobileSidebar:()=>k.e,useNavbarSecondaryMenu:()=>w.Y,usePluralForm:()=>n.usePluralForm,usePrevious:()=>n.usePrevious,usePrismTheme:()=>n.usePrismTheme,useQueryStringValue:()=>v._X,useScrollController:()=>F.sG,useScrollPosition:()=>F.RF,useScrollPositionBlocker:()=>F.o5,useSearchLinkCreator:()=>n.useSearchLinkCreator,useSearchQueryString:()=>n.useSearchQueryString,useSidebarBreadcrumbs:()=>N.s1,useSmoothScrollTo:()=>F.Ct,useStorageSlot:()=>n.useStorageSlot,useTOCHighlight:()=>R.S,useTabs:()=>P,useThemeConfig:()=>n.useThemeConfig,useTitleFormatter:()=>I.p,useTreeifiedTOC:()=>A.a,useVisibleBlogSidebarItems:()=>$,useVisibleSidebarItems:()=>N.f,useWindowSize:()=>n.useWindowSize});var n=r(65094),a=r(14353),o=r(74477),s=r(1116),l=r(65130),i=r(67294),u=r(902),c=r(85893);const d=i.createContext(null);function f(e){let{children:t,content:r,isBlogPostPage:n=!1}=e;const a=function(e){let{content:t,isBlogPostPage:r}=e;return(0,i.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:r})),[t,r])}({content:r,isBlogPostPage:n});return(0,c.jsx)(d.Provider,{value:a,children:t})}function m(){const e=(0,i.useContext)(d);if(null===e)throw new u.i6("BlogPostProvider");return e}var p=r(60373),h=r(59689),b=r(16550),g=r(20469),v=r(91980),y=r(67392),C=r(50012);function S(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function E(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return S(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,y.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function T(e){let{queryString:t=!1,groupId:r}=e;const n=(0,b.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,v._X)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function P(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=E(e),[o,s]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[l,u]=T({queryString:r,groupId:n}),[c,d]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,C.Nk)(r);return[n,(0,i.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),f=(()=>{const e=l??c;return x({value:e,tabValues:a})?e:null})();(0,g.Z)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),d(e)}),[u,d,a]),tabValues:a}}var k=r(93163),w=r(76857),j=r(92949),L=r(94711),M=r(37016),B=r(43320),N=r(53438),I=r(82128),O=r(85936),D=r(51753),A=r(39665),F=r(12466),_=r(48596),V=r(10833),H=r(58978),R=r(96841);function $(e){const{pathname:t}=(0,b.TH)();return(0,i.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,_.Mg)(e.permalink,t))}(e,t)))),[e,t])}var q=r(99445),U=r(19727),z=r(69800),W=r(85448),Q=r(2730)},94697:(e,t,r)=>{"use strict";r.d(t,{X:()=>o});var n=r(67294),a=r(85893);function o(e){const{mdxAdmonitionTitle:t,rest:r}=function(e){const t=n.Children.toArray(e),r=t.find((e=>n.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==r)),s=r?.props.children;return{mdxAdmonitionTitle:s,rest:o.length>0?(0,a.jsx)(a.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:r}}},37016:(e,t,r)=>{"use strict";r.d(t,{QC:()=>h,Vo:()=>m,bc:()=>d,nZ:()=>p,nt:()=>f});var n=r(87594),a=r.n(n);const o=/title=(?<quote>["'])(?<title>.*?)\1/,s=/\{(?<range>[\d,-]+)\}/,l={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},i={...l,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},u=Object.keys(l);function c(e,t){const r=e.map((e=>{const{start:r,end:n}=i[e];return`(?:${r}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${n})`})).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)}function d(e){return e?.match(o)?.groups.title??""}function f(e){return Boolean(e?.includes("showLineNumbers"))}function m(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}function p(e,t){let r=e.replace(/\n$/,"");const{language:n,magicComments:o,metastring:l}=t;if(l&&s.test(l)){const e=l.match(s).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${l}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,n=a()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(n),code:r}}if(void 0===n)return{lineClassNames:{},code:r};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return c(["js","jsBlock"],t);case"jsx":case"tsx":return c(["js","jsBlock","jsx"],t);case"html":return c(["js","jsBlock","html"],t);case"python":case"py":case"bash":return c(["bash"],t);case"markdown":case"md":return c(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return c(["tex"],t);case"lua":case"haskell":case"sql":return c(["lua"],t);case"wasm":return c(["wasm"],t);case"vb":case"vba":case"visual-basic":return c(["vb","rem"],t);case"vbnet":return c(["vbnet","rem"],t);case"batch":return c(["rem"],t);case"basic":return c(["rem","f90"],t);case"fsharp":return c(["js","ml"],t);case"ocaml":case"sml":return c(["ml"],t);case"fortran":return c(["f90"],t);case"cobol":return c(["cobol"],t);default:return c(u,t)}}(n,o),d=r.split("\n"),f=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),m=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:r}=e;return[r,t]}))),p=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:r}=e;return[r.start,t]}))),h=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:r}=e;return[r.end,t]})));for(let a=0;a<d.length;){const e=d[a].match(i);if(!e){a+=1;continue}const t=e.slice(1).find((e=>void 0!==e));m[t]?f[m[t]].range+=`${a},`:p[t]?f[p[t]].start=a:h[t]&&(f[h[t]].range+=`${f[h[t]].start}-${a-1},`),d.splice(a,1)}r=d.join("\n");const b={};return Object.entries(f).forEach((e=>{let[t,{range:r}]=e;a()(r).forEach((e=>{b[e]??=[],b[e].push(t)}))})),{lineClassNames:b,code:r}}function h(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},r={};return Object.entries(e.plain).forEach((e=>{let[n,a]=e;const o=t[n];o&&"string"==typeof a&&(r[o]=a)})),r}},39665:(e,t,r)=>{"use strict";r.d(t,{a:()=>o,b:()=>l});var n=r(67294);function a(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),r=Array(7).fill(-1);t.forEach(((e,t)=>{const n=r.slice(2,e.level);e.parentIndex=Math.max(...n),r[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:r,...a}=e;r>=0?t[r].children.push(a):n.push(a)})),n}function o(e){return(0,n.useMemo)((()=>a(e)),[e])}function s(e){let{toc:t,minHeadingLevel:r,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:r,maxHeadingLevel:n});return function(e){return e.level>=r&&e.level<=n}(e)?[{...e,children:t}]:t}))}function l(e){let{toc:t,minHeadingLevel:r,maxHeadingLevel:o}=e;return(0,n.useMemo)((()=>s({toc:a(t),minHeadingLevel:r,maxHeadingLevel:o})),[t,r,o])}},35835:(e,t,r)=>{"use strict";r.d(t,{T$:()=>i,cI:()=>s,eU:()=>l});r(67294);var n=r(95999),a=r(35742),o=r(85893);function s(){return(0,o.jsx)(n.default,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,o.jsx)(n.default,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function i(){return(0,o.jsx)(a.Z,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}},88824:(e,t,r)=>{"use strict";r.d(t,{c:()=>c});var n=r(67294),a=r(52263),o=r(25108);const s=["zero","one","two","few","many","other"];function l(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,a.default)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return o.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=u();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&o.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const a=r.select(t),s=r.pluralForms.indexOf(a);return n[Math.min(s,n.length-1)]}(r,t,e)}}},9472:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return a(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(r(67294)),i=r(29517),u=s(r(72389)),c=s(r(58258)),d=s(r(85564));function f(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.useScrollPositionBlocker)(),d=e=>{const t=e.currentTarget,r=s.indexOf(t),l=o[r].value;l!==n&&(u(t),a(l))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;t=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;t=s[r]??s[s.length-1];break}}t?.focus()},m=(0,l.useRef)(null),[p,h]=(0,l.useState)(!1);(0,l.useEffect)((()=>{const e=new ResizeObserver((e=>{for(let t of e)t.target.clientWidth<t.target.scrollWidth?h(!0):h(!1)}));return e.observe(m.current),()=>{e.disconnect()}}),[]);return l.default.createElement("div",{className:"openapi-tabs__schema-tabs-container"},p&&l.default.createElement("button",{className:"openapi-tabs__arrow left",onClick:()=>{m.current.scrollLeft-=90}}),l.default.createElement("ul",{ref:m,role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("openapi-tabs__schema-list-container","tabs",{"tabs--block":r},t)},o.map((e=>{let{value:t,label:r,attributes:a}=e;return l.default.createElement("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:e=>s.push(e),onKeyDown:f,onClick:d,...a,className:(0,c.default)("tabs__item","openapi-tabs__schema-item",a?.className,{active:n===t})},l.default.createElement("span",{className:"openapi-tabs__schema-label"},r??t))}))),p&&l.default.createElement("button",{className:"openapi-tabs__arrow right",onClick:()=>{m.current.scrollLeft+=90}}))}function m(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean),o=(0,d.default)(a);if(t){const e=o.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.default.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function p(e){const t=(0,i.useTabs)(e);return l.default.createElement("div",{className:"openapi-tabs__schema-container"},l.default.createElement(f,{...e,...t}),l.default.createElement(m,{...e,...t}))}t.default=function(e){const t=(0,u.default)();return l.default.createElement(p,{key:String(t),...e},(0,i.sanitizeTabsChildren)(e.children))}},58258:(e,t,r)=>{"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.r(t),r.d(t,{clsx:()=>a,default:()=>o});const o=a},62705:(e,t,r)=>{var n=r(55639).Symbol;e.exports=n},62488:e=>{e.exports=function(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e}},21078:(e,t,r)=>{var n=r(62488),a=r(37285);e.exports=function e(t,r,o,s,l){var i=-1,u=t.length;for(o||(o=a),l||(l=[]);++i<u;){var c=t[i];r>0&&o(c)?r>1?e(c,r-1,o,s,l):n(l,c):s||(l[l.length]=c)}return l}},44239:(e,t,r)=>{var n=r(62705),a=r(89607),o=r(2333),s=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?a(e):o(e)}},9454:(e,t,r)=>{var n=r(44239),a=r(37005);e.exports=function(e){return a(e)&&"[object Arguments]"==n(e)}},31957:(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},89607:(e,t,r)=>{var n=r(62705),a=Object.prototype,o=a.hasOwnProperty,s=a.toString,l=n?n.toStringTag:void 0;e.exports=function(e){var t=o.call(e,l),r=e[l];try{e[l]=void 0;var n=!0}catch(i){}var a=s.call(e);return n&&(t?e[l]=r:delete e[l]),a}},37285:(e,t,r)=>{var n=r(62705),a=r(35694),o=r(1469),s=n?n.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||a(e)||!!(s&&e&&e[s])}},2333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:(e,t,r)=>{var n=r(31957),a="object"==typeof self&&self&&self.Object===Object&&self,o=n||a||Function("return this")();e.exports=o},85564:(e,t,r)=>{var n=r(21078);e.exports=function(e){return(null==e?0:e.length)?n(e,1):[]}},35694:(e,t,r)=>{var n=r(9454),a=r(37005),o=Object.prototype,s=o.hasOwnProperty,l=o.propertyIsEnumerable,i=n(function(){return arguments}())?n:function(e){return a(e)&&s.call(e,"callee")&&!l.call(e,"callee")};e.exports=i},1469:e=>{var t=Array.isArray;e.exports=t},37005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},87594:(e,t)=>{function r(e){let t,r=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))r.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,a,o]=t;if(n&&o){n=parseInt(n),o=parseInt(o);const e=n<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=n;t!==o;t+=e)r.push(t)}}return r}t.default=r,e.exports=r},11151:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l,a:()=>s});var n=r(67294);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);