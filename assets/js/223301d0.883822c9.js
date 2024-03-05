"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59709],{78487:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=i(85893),s=i(11151);const r={sidebar_position:4,sidebar_label:"Version 5.7.2"},o="Version 5.7.2",l={id:"releases/Version5.7.2",title:"Version 5.7.2",description:"What's Changed:",source:"@site/docs/releases/Version5.7.2.md",sourceDirName:"releases",slug:"/releases/Version5.7.2",permalink:"/docs/releases/Version5.7.2",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/releases/Version5.7.2.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Version 5.7.2"},sidebar:"docs",previous:{title:"Version 5.7.3",permalink:"/docs/releases/Version5.7.3"},next:{title:"Version 5.7.1",permalink:"/docs/releases/Version5.7.1"}},a={},c=[{value:"What&#39;s Changed:",id:"whats-changed",level:2},{value:"New features",id:"new-features",level:2},{value:"New plugins",id:"new-plugins",level:2},{value:"Small but nice updates",id:"small-but-nice-updates",level:2},{value:"Technical updates",id:"technical-updates",level:2},{value:"Logs into Elastic",id:"logs-into-elastic",level:2},{value:"New Contributors",id:"new-contributors",level:2},{value:"Bugfixing:",id:"bugfixing",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"version-572",children:"Version 5.7.2"}),"\n",(0,t.jsx)(n.h2,{id:"whats-changed",children:"What's Changed:"}),"\n",(0,t.jsx)(n.p,{children:"ReportPortal Release 5.7.2 aimed on enabling log messages to be saved into ElasticSearch"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"We now save logs into 2 sources: DB and Elastic (via DataStreams)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"new-features",children:"New features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A possibility to see all unique errors for a launch (click the launch name and see tab Unique Errors on the top"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/reportportal/reportportal/issues/1268",children:"#1268"}),". Support of Azure SAML authorization"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"new-plugins",children:"New plugins"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/reportportal/plugin-bts-jira-cloud/packages/1366483",children:"Jira Cloud"})," plugin for posting new bugs into Jira Cloud"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/reportportal/plugin-bts-azure/packages/1366495",children:"Azure DevOps"})," plugin for posting new bugs into ADO Bug tracking"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"small-but-nice-updates",children:"Small but nice updates"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"New design for Make decision modal (previously Edit defect modal)"}),"\n",(0,t.jsx)(n.li,{children:"Help & Support functionality for newly deployed instances"}),"\n",(0,t.jsx)(n.li,{children:"Additional configuration for Similar \u201cTo Investigate\u201d functionality (\u201cMin Should Match\u201d)"}),"\n",(0,t.jsx)(n.li,{children:"Default State for Auto-Analysis is ON"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"technical-updates",children:"Technical updates"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Performance improvements (powerful as a hell)"}),"\n",(0,t.jsx)(n.li,{children:"Functionality to configure virtual hosts in RabbitMQ for Analyzer"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"logs-into-elastic",children:"Logs into Elastic"}),"\n",(0,t.jsx)(n.p,{children:"With the version 5.7.2 we bring a fundamental change for ReportPortal to store and manage test logs inside Elastic (via Data Streams).\nThe transition of full logging to elastic will consist of 2 steps:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"version 5.7.2 introduces double logging: both in PG Database and Elastic in parallel"}),"\n",(0,t.jsx)(n.li,{children:"version 5.8 switch off database logging for logs and will store logs only inside Elastic"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The release timeline between 5.7.2 and 5.8 will be about 3 months.\nthis period will be enough for the vast of project to generate enough logs history inside elastic, and by switching to version 5.8 after 5.7.2 will eliminate the need for the data migration efforts.\nWhich means, that if you update to version 5.7.2, use it for 3-4 months before version 5.8, and then update to version 5.8 once it available, there will no  any effort required to do the migration. Since all logs will already be stored in Elastic.\nAlong with version 5.8 we will distribute migration script and instructions for data migration. So that you can easily migration from early 5.x version.\nThe reason of the switch and performance results will be a subject of separate article.\nIn a few words: it reduces the DB footprint in almost x10 times, improves speed of logging, and minimizes computation power to clean-up data. And  also brings Full text search capabilities."}),"\n",(0,t.jsx)(n.h2,{id:"new-contributors",children:"New Contributors"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["@raikbitters made their first contribution in ",(0,t.jsx)(n.a,{href:"https://github.com/reportportal/reportportal/pull/1749",children:"#1749"})]}),"\n",(0,t.jsxs)(n.li,{children:["@tsteenbe made their first contribution in ",(0,t.jsx)(n.a,{href:"https://github.com/reportportal/reportportal/pull/1757",children:"#1757"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Full Changelog"}),": ",(0,t.jsx)(n.a,{href:"https://github.com/reportportal/reportportal/compare/5.7.1...5.7.2",children:"5.7.1...5.7.2"})]}),"\n",(0,t.jsx)(n.h2,{id:"bugfixing",children:"Bugfixing:"}),"\n",(0,t.jsx)(n.p,{children:'Bug connected to filtering by attributes with "any" and "without any" conditions was fixed'})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var t=i(67294);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);