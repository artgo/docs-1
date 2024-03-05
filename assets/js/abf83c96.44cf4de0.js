"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88633],{32722:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var o=n(85893),s=n(11151);const a={},r="Attachments (Screenshots) Guide",c={id:"dev-guides/AttachmentsGuide",title:"Attachments (Screenshots) Guide",description:"The Attachments feature allows you to add any file or screenshot to the test case logs. It can be useful for further test failure analysis.",source:"@site/docs/dev-guides/AttachmentsGuide.mdx",sourceDirName:"dev-guides",slug:"/dev-guides/AttachmentsGuide",permalink:"/docs/dev-guides/AttachmentsGuide",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/dev-guides/AttachmentsGuide.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Asynchronous reporting",permalink:"/docs/dev-guides/AsynchronousReporting"},next:{title:"Back-end Java contribution guide",permalink:"/docs/dev-guides/BackEndJavaContributionGuide"}},i={},h=[{value:"How to log attachments (Screenshots) on Java agents?",id:"how-to-log-attachments-screenshots-on-java-agents",level:2},{value:"How to log attachments (Screenshots) on Python agents?",id:"how-to-log-attachments-screenshots-on-python-agents",level:2},{value:"How to log attachments (Screenshots) on JavaScript agents?",id:"how-to-log-attachments-screenshots-on-javascript-agents",level:2},{value:"How to log attachments (Screenshots) on .Net agents?",id:"how-to-log-attachments-screenshots-on-net-agents",level:2}];function l(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...t.components},{MediaViewer:a}=e;return a||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"attachments-screenshots-guide",children:"Attachments (Screenshots) Guide"}),"\n",(0,o.jsx)(e.p,{children:"The Attachments feature allows you to add any file or screenshot to the test case logs. It can be useful for further test failure analysis."}),"\n",(0,o.jsx)(e.p,{children:"An example of image attachment:"}),"\n",(0,o.jsx)(a,{src:n(74165),alt:"Image Attachment in our test reporting tool"}),"\n",(0,o.jsx)(e.p,{children:"An example of file attachment:"}),"\n",(0,o.jsx)(a,{src:n(38189),alt:"File Attachment in our open source test reporting tool"}),"\n",(0,o.jsx)(a,{src:n(94885),alt:"Attachment Details in our multi-language test reporting tool"}),"\n",(0,o.jsx)(e.h2,{id:"how-to-log-attachments-screenshots-on-java-agents",children:"How to log attachments (Screenshots) on Java agents?"}),"\n",(0,o.jsxs)(e.p,{children:["Java agents have numerous methods to log attachments, the easiest one is calling ",(0,o.jsx)(e.code,{children:"ReportPortal#emitLog"})," static method:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"import com.epam.reportportal.listeners.LogLevel;\nimport com.epam.reportportal.service.ReportPortal;\n\nimport java.util.Date;\nimport java.io.File;\n\nclass Test {\n\tpublic static void log(String message, File file) {\n\t\tReportPortal.emitLog(message, LogLevel.INFO.name(), new Date(), file);\n\t}\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"If you don't want to put ReportPortal dependencies in your code, there is a way to pass attachments through your logger."}),"\n",(0,o.jsx)(e.p,{children:"Check out our loggers' documentation:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/reportportal/logger-java-log4j#attaching-files-screenshots-videos-archives-reports-etc",children:"Log4j"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/reportportal/logger-java-logback#attaching-files-screenshots-videos-archives-reports-etc",children:"Logback"})}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"how-to-log-attachments-screenshots-on-python-agents",children:"How to log attachments (Screenshots) on Python agents?"}),"\n",(0,o.jsx)(e.p,{children:"To log attachments in Python you first need to configure a logger, depending on your current test framework. These are the instructions:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-python-pytest#examples",children:"Pytest"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-Python-RobotFramework#logging",children:"Robot Framework"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-python-behave#logging",children:"Behave"})}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Then you can use common method to attach any files to logs which is described ",(0,o.jsx)(e.a,{href:"https://github.com/reportportal/client-Python#send-attachment-screenshots",children:"here"}),"."]}),"\n",(0,o.jsx)(e.h2,{id:"how-to-log-attachments-screenshots-on-javascript-agents",children:"How to log attachments (Screenshots) on JavaScript agents?"}),"\n",(0,o.jsxs)(e.p,{children:["Attachment reports are supported by our ",(0,o.jsx)(e.a,{href:"https://github.com/reportportal/client-javascript",children:"client-javascript"}),". The attachment file can be added as a part of a log request, see the ",(0,o.jsx)(e.a,{href:"https://github.com/reportportal/client-javascript#sendlog",children:"link"})," for details."]}),"\n",(0,o.jsx)(e.p,{children:"The implementation of attachments reporting varies from agent to agent."}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-playwright",children:"agent-js-playwright"}),":\nThe attachment can be added via built-in ",(0,o.jsx)(e.a,{href:"https://playwright.dev/docs/api/class-testinfo#test-info-attachments",children:"playwright testInfo attachments"})," or ",(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-playwright#log",children:"ReportingAPI"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-webdriverio",children:"agent-js-webdriverio"}),":\nThe attachment can be added via ReportingAPI, follow ",(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-webdriverio#log",children:"docs"})," for details."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-testcafe",children:"agent-js-testcafe"}),":\nThe attachment can be added via ReportingAPI, follow ",(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-testcafe#log",children:"docs"})," for details."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-codecept",children:"agent-js-codecept"}),":\nThe attachment can be added via ReportPortal plugin reportPortal.addLog, captured screenshots will be also attached to the report, see ",(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-codecept#add-log-message",children:"add-log-message"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-cucumber",children:"agent-js-cucumber"}),":\nThe attachment can be added via this.attach Cucumber feature, captured screenshots will be also attached to the report, see ",(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-cucumber#attachments",children:"attachments"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-cypress",children:"agent-js-cypress"}),":\nThe attachment can be added via ReportPortal logging custom commands for Cypress, see ",(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-cypress#logging",children:"logging"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-mocha",children:"agent-js-mocha"}),":\nThe attachment can be added via PublicReportingAPI, follow ",(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-mocha#report-logs-and-attachments",children:"docs"})," for details."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-jasmine",children:"agent-js-jasmine"}),":\nThe attachment can be added via PublicReportingAPI, follow ",(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-jasmine#report-logs-and-attachments",children:"docs"})," for details."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-jest",children:"agent-js-jest"}),":\nThere is no built-in capability to send attachments during test execution as the Jest Reporter works post-factum and does not allow to provide specific data to the report."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-postman",children:"agent-js-postman"}),":\nThere is no built-in capability at the moment to send attachments during test execution due to the specifics of postman nature."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-nightwatch",children:"agent-js-nightwatch"}),":\nThe attachment can be added via ReportingAPI, follow ",(0,o.jsx)(e.a,{href:"https://github.com/reportportal/agent-js-nightwatch#log",children:"docs"})," for details."]}),"\n",(0,o.jsxs)(e.p,{children:["An example for each agent can be found ",(0,o.jsx)(e.a,{href:"https://github.com/reportportal/examples-js",children:"here"}),"."]}),"\n",(0,o.jsx)(e.h2,{id:"how-to-log-attachments-screenshots-on-net-agents",children:"How to log attachments (Screenshots) on .Net agents?"}),"\n",(0,o.jsxs)(e.p,{children:["General documentation on this in .net-commons: ",(0,o.jsx)(e.a,{href:"https://github.com/reportportal/commons-net/blob/develop/docs/Logging.md",children:"https://github.com/reportportal/commons-net/blob/develop/docs/Logging.md"})]}),"\n",(0,o.jsx)(e.p,{children:"You can attach any binary content:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'Context.Current.Log.Info("my binary", "image/png", bytes);\n// where bytes is byte[] and image/png is mime type of content\n'})}),"\n",(0,o.jsx)(e.p,{children:"Or use file instead:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'Context.Current.Log.Info("my file", new FileInfo(filePath));\n// where filePath is relative/absolute path to your file\n// mime type is determined automatically \n'})})]})}function d(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},74165:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});const o=n.p+"assets/images/AttachmentsGuide1-955c856446d2a4dffa1ea3bcabcf84f4.png"},38189:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});const o=n.p+"assets/images/AttachmentsGuide2-78e48fba7944c828ccec650930c99008.png"},94885:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});const o=n.p+"assets/images/AttachmentsGuide3-a75cd2b213a78c4235704623d6cc265e.png"},11151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>r});var o=n(67294);const s={},a=o.createContext(s);function r(t){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),o.createElement(a.Provider,{value:e},t.children)}}}]);