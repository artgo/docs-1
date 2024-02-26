"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2629],{93972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(85893),a=t(11151);const s={sidebar_position:10,sidebar_label:"Sauce Labs"},o="Sauce Labs",r={id:"plugins/SauceLabs",title:"Sauce Labs",description:"To install the Sauce Labs plugin, see Upload plugin section.",source:"@site/docs/plugins/SauceLabs.mdx",sourceDirName:"plugins",slug:"/plugins/SauceLabs",permalink:"/docs/plugins/SauceLabs",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/plugins/SauceLabs.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"Sauce Labs"},sidebar:"defaultSidebar",previous:{title:"E-mail server",permalink:"/docs/plugins/EmailServer"},next:{title:"Quality Gates",permalink:"/docs/category/quality-gates"}},l={},c=[{value:"Add the Sauce Labs integration",id:"add-the-sauce-labs-integration",level:2},{value:"Global Sauce Labs integration",id:"global-sauce-labs-integration",level:2},{value:"Project Sauce Labs integration",id:"project-sauce-labs-integration",level:2},{value:"How to use the Sauce Labs integration",id:"how-to-use-the-sauce-labs-integration",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{MediaViewer:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"sauce-labs",children:"Sauce Labs"}),"\n",(0,i.jsxs)(n.p,{children:["To install the Sauce Labs plugin, see ",(0,i.jsx)(n.a,{href:"/plugins/ManagePlugins#upload-plugin",children:"Upload plugin"})," section."]}),"\n",(0,i.jsx)(n.h2,{id:"add-the-sauce-labs-integration",children:"Add the Sauce Labs integration"}),"\n",(0,i.jsx)(n.p,{children:"Configure the integration with Sauce Labs to watch a video of test executions in the our centralized test automation tool."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Permissions:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["User with account role ",(0,i.jsx)(n.em,{children:"ADMINISTRATOR"})," can configure the integration for the whole instance or per project."]}),"\n",(0,i.jsxs)(n.li,{children:["User with account role ",(0,i.jsx)(n.em,{children:"PROJECT MANAGER"})," can configure the integration only on a project where they are assigned on as Project Manager."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"global-sauce-labs-integration",children:"Global Sauce Labs integration"}),"\n",(0,i.jsx)(n.p,{children:"To configure Sauce Labs for the whole instance:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Log in to ReportPortal as an ADMIN user."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Open the list on the right of the user's image."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click the 'Administrative' link."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click 'Plugins' from the left-hand sidebar."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click the 'Sauce Labs' tab."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click 'Add integration'."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The following fields should be present:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"`User name`: <host_name_of_email_server>\n`Access token`: <your access token>\n`Data center`: <Europe, USA>\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsx)(n.li,{children:"Confirm data in the form."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After you've added the Sauce Labs integration, you can use the Sauce Labs in ReportPortal."}),"\n",(0,i.jsx)(n.h2,{id:"project-sauce-labs-integration",children:"Project Sauce Labs integration"}),"\n",(0,i.jsx)(n.p,{children:"If the plugin is configured on the global level, then all projects at this instance will use this configuration by default."}),"\n",(0,i.jsx)(n.p,{children:"However, you can unlink the integration from the global level and use a project level configuration instead."}),"\n",(0,i.jsx)(n.p,{children:"To unlink the integration, click 'Unlink & Setup Manually', then follow the on-screen instructions."}),"\n",(0,i.jsx)(s,{src:t(60400),alt:"Sauce Labs Unlink Global integration"}),"\n",(0,i.jsx)(n.h2,{id:"how-to-use-the-sauce-labs-integration",children:"How to use the Sauce Labs integration"}),"\n",(0,i.jsxs)(n.p,{children:["Before using this feature, you should report test results to ReportPortal with the attribute: ",(0,i.jsx)(n.code,{children:"SLID: XXXXXXXX"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Where: SLID = ",(0,i.jsx)(n.code,{children:"Sauce Labs ID"})," and XXXXXXXX = ",(0,i.jsx)(n.code,{children:"# of job in Sauce Labs"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"SLID: XXXXXXXX"})," attribute links the execution in ReportPortal and a job in Sauce Labs. If a test item has attribute ",(0,i.jsx)(n.code,{children:"SLID: XXXXXXXX"}),", and there is a global or project integration with Sauce Labs, a user will be able to view a video from Sauce Labs for the appropriate job in ReportPortal on a log view."]}),"\n",(0,i.jsx)(s,{src:"https://youtu.be/RQAxGz6koh0",alt:"How to use Sauce Labs Integration with our centralized test automation tool",type:"video"})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},60400:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});const i=t.p+"assets/images/SauceLabsUnlinkGlobal-864989b2c497130411e245ceabafa897.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(67294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);