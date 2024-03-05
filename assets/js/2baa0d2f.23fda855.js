"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95400],{37621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=n(85893),a=n(11151);const i={sidebar_position:23,sidebar_label:"Component health check"},o="Component health check",r={id:"dashboards-and-widgets/ComponentHealthCheck",title:"Component health check",description:"Shows the passing rate of the application components which are indicated by the specified attributes.",source:"@site/docs/dashboards-and-widgets/ComponentHealthCheck.mdx",sourceDirName:"dashboards-and-widgets",slug:"/dashboards-and-widgets/ComponentHealthCheck",permalink:"/docs/dashboards-and-widgets/ComponentHealthCheck",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/dashboards-and-widgets/ComponentHealthCheck.mdx",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23,sidebar_label:"Component health check"},sidebar:"docs",previous:{title:"Most popular pattern table (TOP-20)",permalink:"/docs/dashboards-and-widgets/MostPopularPatternTableTop20"},next:{title:"Table Component health check",permalink:"/docs/dashboards-and-widgets/TableComponentHealthCheck"}},l={},d=[];function c(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{MediaViewer:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"component-health-check",children:"Component health check"}),"\n",(0,s.jsx)(t.p,{children:"Shows the passing rate of the application components which are indicated by the specified attributes."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"For using this widget you need to report (or add manually) attributes to test items."})}),"\n",(0,s.jsx)(i,{src:"https://youtu.be/T98iy0mJk0s",alt:"Component Health Check Video",type:"video"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Widget's parameters:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Filter"}),"\n",(0,s.jsx)(t.li,{children:"Parameters: All launches/ Latest launches"}),"\n",(0,s.jsx)(t.li,{children:"The min allowable passing rate for the component: Possible value from 50 - 100%. Default value 100%."}),"\n",(0,s.jsx)(t.li,{children:"Attribute key for the first level (mandatory)"}),"\n",(0,s.jsx)(t.li,{children:"Attribute key for the 2-10 levels (optional)"}),"\n"]}),"\n",(0,s.jsx)(i,{src:n(19900),alt:"Component Health Check Creation"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Widget view"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Use case:"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Situation:"})," As a Project Manager or Test Lead, I want to see the most unstable place in my product ( application)."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Solution:"})," All test cases in my project in ReportPortal have attributes. For example ",(0,s.jsx)(t.code,{children:"function: (order, team, configure, administrative)"}),", ",(0,s.jsx)(t.code,{children:"type: (backend, API, Unit, UI)"}),", ...., ",(0,s.jsx)(t.code,{children:"market state: (open, close)"}),", ",(0,s.jsx)(t.code,{children:"role: (ProjectManager, Member, Admin)"})," and other. The attributes can be different and dependent on your project needs."]}),"\n",(0,s.jsxs)(t.p,{children:["A user  can create a Component Health Check Widget and set attribute key = ",(0,s.jsx)(t.code,{children:"function"})," for the 1st level, for the 2nd -",(0,s.jsx)(t.code,{children:"type"})," and the 3rd - ",(0,s.jsx)(t.code,{children:"market state"})]}),"\n",(0,s.jsxs)(t.p,{children:["So that a user will see on the first level several groups: order, team, configure, administrative.  All groups will contain only\ntest cases with an attribute that contains attribute key ",(0,s.jsx)(t.code,{children:"function"}),". Each group has been grouped by attribute value: order, team,\nconfigure, administrative.\nIf a user clicks on the group ",(0,s.jsx)(t.code,{children:"function: order"}),", the system will show the second level of the widget. All test items on the second\nlevel will contain the attribute ",(0,s.jsx)(t.code,{children:"function: order"})," and attributes that contain attribute key: ",(0,s.jsx)(t.code,{children:"type"}),". And these items will be\ngrouped by attribute values: backend, API, Unit, UI.\nThe same logic will be applied for the next levels."]}),"\n"]}),"\n",(0,s.jsx)(i,{src:n(24358),alt:"All launches in ReportPortal"}),"\n",(0,s.jsx)(i,{src:n(51898),alt:"Take launches from the filter"}),"\n",(0,s.jsx)(i,{src:n(91864),alt:"Combine all test cases"}),"\n",(0,s.jsx)(i,{src:n(73011),alt:"Leave test cases with attributes key for 1 level"}),"\n",(0,s.jsx)(i,{src:n(27377),alt:"Group by unique attribute with attributes key for 1 level"}),"\n",(0,s.jsx)(i,{src:n(76025),alt:"Calculated a passing rate for each group"}),"\n",(0,s.jsx)(i,{src:n(51887),alt:"Choose one group"}),"\n",(0,s.jsx)(i,{src:n(40730),alt:"Leave test cases with attributes key for 2 level"}),"\n",(0,s.jsx)(i,{src:n(69263),alt:"Group by unique attribute with attributes key for 2 level"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Widget level"}),"\nEach level shows all available attributes with corresponded to his level attribute key.\nFor each level system analyze the last 600 launches."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Widget section"}),"\nThe widget has two sections: Passed and Failed\n",(0,s.jsx)(t.strong,{children:"Failed section has:"})," all groups (test cases with the same attribute) which have passing rate less than passing rated which has been specified on widget wizard"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Passed section has:"})," all groups which have a passing rate higher than passing rated which has been specified on widget wizard"]}),"\n",(0,s.jsx)(t.p,{children:"Each group on the widget has a name which equals to attribute value, passing rate = passed test cases with attribute / total test cases with attribute\nnumber of test cases with attribute\nlink to the widget list view: Filter list view + test method: Test + status: Passed, Failed, Skipped, Interrupted, InProgress; the number of items is equal to the number of Test cases in the widget\na color line which depends on passing rate (see section Widget legend)\nWidget legend"}),"\n",(0,s.jsx)(t.p,{children:"Widget legend has two lines: Passed and Failed"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Failed"})}),"\n",(0,s.jsx)(t.p,{children:"The failed line has four colors:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"light red"}),"\n",(0,s.jsx)(t.li,{children:"regular red"}),"\n",(0,s.jsx)(t.li,{children:"strong red"}),"\n",(0,s.jsx)(t.li,{children:"dark red"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"And have values - less than specified on widget wizard -1"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Passed"})}),"\n",(0,s.jsx)(t.p,{children:"The passing line has only two colors:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"slightly green"}),"\n",(0,s.jsx)(t.li,{children:"green = Passed"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"And have values - from specified on widget wizard to 100%. Depends on this color scheme each group on the widget has its own color."}),"\n",(0,s.jsx)(t.p,{children:"Let's say we set 'The min allowable passing rate for the component' to be 90%."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"passed green: groups which have passing rate 100%."}),"\n",(0,s.jsx)(t.li,{children:"slightly green: groups which passing rate from 99 - specified on widget wizard."}),"\n",(0,s.jsx)(t.li,{children:"light red: from 3* (90% - 1)/4  to (90% - 1)"}),"\n",(0,s.jsx)(t.li,{children:"strong red: from (90% - 1)/2  to 3* (90% - 1)/4"}),"\n",(0,s.jsx)(t.li,{children:"regular red: from  (90% - 1)/4 to  2*(90% - 1)/4"}),"\n",(0,s.jsx)(t.li,{children:"dark red: 0  - ((90% - 1)/4 -1)"}),"\n"]}),"\n",(0,s.jsx)(i,{src:n(1077),alt:"Data visualization in test automation: Component Health Check "}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"The widget doesn't contain 'IN PROGRESS\" launches."})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},19900:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/ComponentHealthCheckCreation-a813f9348f0d31e666acef9ac21f4667.png"},24358:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/ComponentHealthCheckScheme1-3a71761b014a7ac1762bf24682a0abe5.png"},51898:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/ComponentHealthCheckScheme2-8a8c43efeddeaac22eaa77989bc207cc.png"},91864:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/ComponentHealthCheckScheme3-79df7fad9ba68dce72fd7be92136a2e8.png"},73011:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/ComponentHealthCheckScheme4-5775aae8aa5e555137b1e40a96e3183b.png"},27377:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/ComponentHealthCheckScheme5-9114a37c7eb48d687e34ad69004682d6.png"},76025:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/ComponentHealthCheckScheme6-afabc68a007cb329da34a2ef276c54af.png"},51887:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/ComponentHealthCheckScheme7-7257e471d1dc56d8edf622604fbe4fa8.png"},40730:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/ComponentHealthCheckScheme8-c5d37d8f47bb9e2e792ab734875f67c9.png"},69263:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/ComponentHealthCheckScheme9-d771099d41244ebb60c00694c7639e42.png"},1077:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/ComponentHealthCheckView-985d44d9e4f130dac59d3d0143b00dd7.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);