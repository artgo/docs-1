"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5400],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:23,sidebar_label:"Component health check"},i="Component health check",s={unversionedId:"dashboards-and-widgets/ComponentHealthCheck",id:"dashboards-and-widgets/ComponentHealthCheck",title:"Component health check",description:"Shows the passing rate of the application components which are indicated by the specified attributes.",source:"@site/docs/dashboards-and-widgets/ComponentHealthCheck.mdx",sourceDirName:"dashboards-and-widgets",slug:"/dashboards-and-widgets/ComponentHealthCheck",permalink:"/docs/dashboards-and-widgets/ComponentHealthCheck",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/dashboards-and-widgets/ComponentHealthCheck.mdx",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23,sidebar_label:"Component health check"},sidebar:"defaultSidebar",previous:{title:"Most popular pattern table (TOP-20)",permalink:"/docs/dashboards-and-widgets/MostPopularPatternTableTop20"},next:{title:"Table Component health check",permalink:"/docs/dashboards-and-widgets/TableComponentHealthCheck"}},l={},p=[],d={toc:p},c="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"component-health-check"},"Component health check"),(0,r.kt)("p",null,"Shows the passing rate of the application components which are indicated by the specified attributes."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For using this widget you need to report (or add manually) attributes to test items.")),(0,r.kt)("media-view",{thumbnail:a(1077),src:"https://youtu.be/T98iy0mJk0s",alt:"Component Health Check Video",type:"video"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Widget's parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Filter"),(0,r.kt)("li",{parentName:"ul"},"Parameters: All launches/ Latest launches"),(0,r.kt)("li",{parentName:"ul"},"The min allowable passing rate for the component: Possible value from 50 - 100%. Default value 100%."),(0,r.kt)("li",{parentName:"ul"},"Attribute key for the first level (mandatory)"),(0,r.kt)("li",{parentName:"ul"},"Attribute key for the 2-10 levels (optional)")),(0,r.kt)("media-view",{src:a(19900),alt:"Component Health Check Creation"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Widget view")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Use case:")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Situation:")," As a Project Manager or Test Lead, I want to see the most unstable place in my product ( application)."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Solution:")," All test cases in my project in ReportPortal have attributes. For example ",(0,r.kt)("inlineCode",{parentName:"p"},"function: (order, team, configure, administrative)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"type: (backend, API, Unit, UI)"),", ...., ",(0,r.kt)("inlineCode",{parentName:"p"},"market state: (open, close)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"role: (ProjectManager, Member, Admin)")," and other. The attributes can be different and dependent on your project needs."),(0,r.kt)("p",{parentName:"blockquote"},"A user  can create a Component Health Check Widget and set attribute key = ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," for the 1st level, for the 2nd -",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and the 3rd - ",(0,r.kt)("inlineCode",{parentName:"p"},"market state")),(0,r.kt)("p",{parentName:"blockquote"},"So that a user will see on the first level several groups: order, team, configure, administrative.  All groups will contain only\ntest cases with an attribute that contains attribute key ",(0,r.kt)("inlineCode",{parentName:"p"},"function"),". Each group has been grouped by attribute value: order, team,\nconfigure, administrative.\nIf a user clicks on the group ",(0,r.kt)("inlineCode",{parentName:"p"},"function: order"),", the system will show the second level of the widget. All test items on the second\nlevel will contain the attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"function: order")," and attributes that contain attribute key: ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),". And these items will be\ngrouped by attribute values: backend, API, Unit, UI.\nThe same logic will be applied for the next levels.")),(0,r.kt)("media-view",{src:a(24358),alt:"All launches in ReportPortal"}),(0,r.kt)("media-view",{src:a(51898),alt:"Take launches from the filter"}),(0,r.kt)("media-view",{src:a(91864),alt:"Combine all test cases"}),(0,r.kt)("media-view",{src:a(73011),alt:"Leave test cases with attributes key for 1 level"}),(0,r.kt)("media-view",{src:a(27377),alt:"Group by unique attribute with attributes key for 1 level"}),(0,r.kt)("media-view",{src:a(76025),alt:"Calculated a passing rate for each group"}),(0,r.kt)("media-view",{src:a(51887),alt:"Choose one group"}),(0,r.kt)("media-view",{src:a(40730),alt:"Leave test cases with attributes key for 2 level"}),(0,r.kt)("media-view",{src:a(69263),alt:"Group by unique attribute with attributes key for 2 level"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Widget level"),"\nEach level shows all available attributes with corresponded to his level attribute key.\nFor each level system analyze the last 600 launches."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Widget section"),"\nThe widget has two sections: Passed and Failed\n",(0,r.kt)("strong",{parentName:"p"},"Failed section has:")," all groups (test cases with the same attribute) which have passing rate less than passing rated which has been specified on widget wizard"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Passed section has:")," all groups which have a passing rate higher than passing rated which has been specified on widget wizard"),(0,r.kt)("p",null,"Each group on the widget has a name which equals to attribute value, passing rate = passed test cases with attribute / total test cases with attribute\nnumber of test cases with attribute\nlink to the widget list view: Filter list view + test method: Test + status: Passed, Failed, Skipped, Interrupted, InProgress; the number of items is equal to the number of Test cases in the widget\na color line which depends on passing rate (see section Widget legend)\nWidget legend"),(0,r.kt)("p",null,"Widget legend has two lines: Passed and Failed"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Failed")),(0,r.kt)("p",null,"The failed line has four colors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"light red"),(0,r.kt)("li",{parentName:"ul"},"regular red"),(0,r.kt)("li",{parentName:"ul"},"strong red"),(0,r.kt)("li",{parentName:"ul"},"dark red")),(0,r.kt)("p",null,"And have values - less than specified on widget wizard -1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Passed")),(0,r.kt)("p",null,"The passing line has only two colors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"slightly green"),(0,r.kt)("li",{parentName:"ul"},"green = Passed")),(0,r.kt)("p",null,"And have values - from specified on widget wizard to 100%. Depends on this color scheme each group on the widget has its own color."),(0,r.kt)("p",null,"Let's say we set 'The min allowable passing rate for the component' to be 90%."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"passed green: groups which have passing rate 100%."),(0,r.kt)("li",{parentName:"ul"},"slightly green: groups which passing rate from 99 - specified on widget wizard."),(0,r.kt)("li",{parentName:"ul"},"light red: from 3* (90% - 1)/4  to (90% - 1)"),(0,r.kt)("li",{parentName:"ul"},"strong red: from (90% - 1)/2  to 3* (90% - 1)/4"),(0,r.kt)("li",{parentName:"ul"},"regular red: from  (90% - 1)/4 to  2*(90% - 1)/4"),(0,r.kt)("li",{parentName:"ul"},"dark red: 0  - ((90% - 1)/4 -1)")),(0,r.kt)("media-view",{src:a(1077),alt:"Data visualization in test automation: Component Health Check "}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The widget doesn't contain 'IN PROGRESS\" launches.")))}h.isMDXComponent=!0},19900:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/ComponentHealthCheckCreation-a813f9348f0d31e666acef9ac21f4667.png"},24358:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/ComponentHealthCheckScheme1-3a71761b014a7ac1762bf24682a0abe5.png"},51898:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/ComponentHealthCheckScheme2-8a8c43efeddeaac22eaa77989bc207cc.png"},91864:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/ComponentHealthCheckScheme3-79df7fad9ba68dce72fd7be92136a2e8.png"},73011:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/ComponentHealthCheckScheme4-5775aae8aa5e555137b1e40a96e3183b.png"},27377:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/ComponentHealthCheckScheme5-9114a37c7eb48d687e34ad69004682d6.png"},76025:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/ComponentHealthCheckScheme6-afabc68a007cb329da34a2ef276c54af.png"},51887:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/ComponentHealthCheckScheme7-7257e471d1dc56d8edf622604fbe4fa8.png"},40730:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/ComponentHealthCheckScheme8-c5d37d8f47bb9e2e792ab734875f67c9.png"},69263:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/ComponentHealthCheckScheme9-d771099d41244ebb60c00694c7639e42.png"},1077:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/ComponentHealthCheckView-985d44d9e4f130dac59d3d0143b00dd7.png"}}]);