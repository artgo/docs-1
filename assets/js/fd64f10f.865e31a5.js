"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18467],{32604:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(85893),n=t(11151);const a={sidebar_position:1},i="Java",s={id:"log-data-in-reportportal/test-framework-integration/Java/index",title:"Java",description:"To integrate your Java test framework with ReportPortal, you need to create a file named reportportal.properties in your in your Java project in a source folder src/main/resources or src/test/resources (depending on where your tests are located):",source:"@site/docs/log-data-in-reportportal/test-framework-integration/Java/index.md",sourceDirName:"log-data-in-reportportal/test-framework-integration/Java",slug:"/log-data-in-reportportal/test-framework-integration/Java/",permalink:"/docs/log-data-in-reportportal/test-framework-integration/Java/",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/log-data-in-reportportal/test-framework-integration/Java/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Test Framework Integration",permalink:"/docs/log-data-in-reportportal/test-framework-integration/"},next:{title:"JUnit5",permalink:"/docs/log-data-in-reportportal/test-framework-integration/Java/JUnit5"}},c={},p=[];function d(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"java",children:"Java"}),"\n",(0,o.jsxs)(r.p,{children:["To integrate your Java test framework with ReportPortal, you need to create a file named ",(0,o.jsx)(r.code,{children:"reportportal.properties"})," in your in your Java project in a source folder ",(0,o.jsx)(r.code,{children:"src/main/resources"})," or ",(0,o.jsx)(r.code,{children:"src/test/resources"})," (depending on where your tests are located):"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"reportportal.properties"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"rp.endpoint={RP_SERVER_URL}\n\nrp.api.key={YOUR_TOKEN}\n\nrp.project={YOUR_PROJECT}\n\nrp.launch={NAME_OF_YOUR_LAUNCH}\n"})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Property description"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"rp.endpoint"})," - the URL for the report portal server (actual link)."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"rp.api.key"})," - an access token for Report Portal which is used for user identification. It can be found on your report portal user profile page."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"rp.project"})," - a project code on which the agent will report test launches. Must be set to one of your assigned projects."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"rp.launch"})," - a user-selected identifier of test launches."]}),"\n",(0,o.jsx)(r.admonition,{type:"note",children:(0,o.jsxs)(r.p,{children:["Starting from the Service Release 23.1++, ",(0,o.jsx)(r.code,{children:"rp.uuid"})," was renamed to ",(0,o.jsx)(r.code,{children:"rp.api.key"}),"."]})}),"\n",(0,o.jsxs)(r.p,{children:["This set of properties will allow you to report your tests. And there are more properties available for fine grain tuning of integration. Details available ",(0,o.jsx)(r.a,{href:"https://github.com/reportportal/client-java#property-file",children:"here"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"If you need a sophisticated and full-featured integration with a test framework, you can configure it by your self."}),"\n",(0,o.jsxs)(r.p,{children:["All agents use ",(0,o.jsx)(r.a,{href:"https://github.com/reportportal/client-java",children:"client-java"})," to communicate with ReportPortal API and as common code library. Also you can use any combination of agent and logger."]})]})}function l(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>i});var o=t(67294);const n={},a=o.createContext(n);function i(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);