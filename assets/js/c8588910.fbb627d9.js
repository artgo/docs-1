"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8834],{78193:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=n(85893),a=n(11151);const i={sidebar_position:18,sidebar_label:"Passing rate per launch"},r="Passing rate per launch",o={id:"dashboards-and-widgets/PassingRatePerLaunch",title:"Passing rate per launch",description:"Shows the percentage ratio of Passed test cases to Total test cases for the last run of selected launch.",source:"@site/docs/dashboards-and-widgets/PassingRatePerLaunch.mdx",sourceDirName:"dashboards-and-widgets",slug:"/dashboards-and-widgets/PassingRatePerLaunch",permalink:"/docs/dashboards-and-widgets/PassingRatePerLaunch",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/dashboards-and-widgets/PassingRatePerLaunch.mdx",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18,sidebar_label:"Passing rate per launch"},sidebar:"defaultSidebar",previous:{title:"Different launches comparison chart",permalink:"/docs/dashboards-and-widgets/DifferentLaunchesComparisonChart"},next:{title:"Passing rate summary",permalink:"/docs/dashboards-and-widgets/PassingRateSummary"}},d={},c=[];function l(e){const s={admonition:"admonition",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{MediaViewer:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"passing-rate-per-launch",children:"Passing rate per launch"}),"\n",(0,t.jsx)(s.p,{children:"Shows the percentage ratio of Passed test cases to Total test cases for the last run of selected launch."}),"\n",(0,t.jsxs)(s.admonition,{type:"note",children:[(0,t.jsx)(s.p,{children:"Total test cases = Passed + Not Passed, while Not Passed = Failed + Skipped + Interrupted"}),(0,t.jsx)(s.p,{children:"Thus, Passing rate = Passed / (Passed + Failed + Skipped + Interrupted)"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Widget's parameters:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Launch Name: the name of any finished launch"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Mode: Bar View/Pie View"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Widget name: any text"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Description: any text"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Please find below an example of configuration:"}),"\n",(0,t.jsx)(i,{src:n(12689),alt:"Configuration Passing Rate Per Launch Widget"}),"\n",(0,t.jsx)(s.p,{children:"As you can see, this widget was built based on the test results of the last run of the Daily Smoke Suite:"}),"\n",(0,t.jsx)(i,{src:n(72605),alt:"Last run of the Daily Smoke Suite"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Widget view"})}),"\n",(0,t.jsx)(s.p,{children:"The widget can be displayed in two options as shown on the pictures below:"}),"\n",(0,t.jsx)(s.p,{children:"Bar View"}),"\n",(0,t.jsx)(i,{src:n(6084),alt:"Dashboard to manage test results: Passing Rate Per Launch Bar View"}),"\n",(0,t.jsx)(s.p,{children:"Pie View"}),"\n",(0,t.jsx)(i,{src:n(69015),alt:"Passing Rate Per Launch Pie View"}),"\n",(0,t.jsx)(s.p,{children:"The tooltip on mouse hover over chart area shows the quantity of Passed/Failed test cases and percentage ratio of Passed/Failed test cases to Total cases for the last run."}),"\n",(0,t.jsx)(i,{src:n(89752),alt:"Percentage ratio for the last run"}),"\n",(0,t.jsx)(s.p,{children:"The widget has clickable sections. When you click on a specific section in the widget, the system forwards you to the launch view for appropriate selection."}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"The widget doesn't contain 'IN PROGRESS\" launches."})})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},12689:(e,s,n)=>{n.r(s),n.d(s,{default:()=>t});const t=n.p+"assets/images/PassingRatePerLaunch1-1d8dee8e82f006fabe3abcb4c417dfd1.png"},72605:(e,s,n)=>{n.r(s),n.d(s,{default:()=>t});const t=n.p+"assets/images/PassingRatePerLaunch2-f37957e93a484e162c89ef71e99c1bb1.png"},6084:(e,s,n)=>{n.r(s),n.d(s,{default:()=>t});const t=n.p+"assets/images/PassingRatePerLaunch3-e5ecfbc4952a2ffe0a685e74e93d8c5f.png"},69015:(e,s,n)=>{n.r(s),n.d(s,{default:()=>t});const t=n.p+"assets/images/PassingRatePerLaunch4-cbb834e6cf76ca08aad10f0927cf4586.png"},89752:(e,s,n)=>{n.r(s),n.d(s,{default:()=>t});const t=n.p+"assets/images/PassingRatePerLaunch5-98828b5bf82992690e02c9c2cd0e0663.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>r});var t=n(67294);const a={},i=t.createContext(a);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);