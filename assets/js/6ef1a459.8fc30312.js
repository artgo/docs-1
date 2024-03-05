"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86027],{25333:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(85893),o=n(11151);const i={sidebar_label:"Okta SAML"},a="Okta SAML",s={id:"reportportal-configuration/authorization/SAMLProvider/OktaSAML",title:"Okta SAML",description:"SAML plugin is available in ReportPortal on the Plugins page.",source:"@site/docs/reportportal-configuration/authorization/SAMLProvider/OktaSAML.mdx",sourceDirName:"reportportal-configuration/authorization/SAMLProvider",slug:"/reportportal-configuration/authorization/SAMLProvider/OktaSAML",permalink:"/docs/reportportal-configuration/authorization/SAMLProvider/OktaSAML",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/reportportal-configuration/authorization/SAMLProvider/OktaSAML.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Okta SAML"},sidebar:"docs",previous:{title:"Azure SAML",permalink:"/docs/reportportal-configuration/authorization/SAMLProvider/AzureSAML"},next:{title:"User account",permalink:"/docs/category/user-account"}},l={},c=[];function d(t){const e={br:"br",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...t.components},{MediaViewer:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"okta-saml",children:"Okta SAML"}),"\n",(0,r.jsx)(e.p,{children:"SAML plugin is available in ReportPortal on the Plugins page."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"If you have a pre-created Internal user, you can't log in by SAML using their credentials (Email or Name)."})})}),"\n",(0,r.jsx)(n,{src:"https://youtu.be/ljXvCVWG4mQ",alt:"Okta SAML authorization in our open source test reporting tool",type:"video"}),"\n",(0,r.jsx)(e.p,{children:"To set up access with SAML:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Log in to the ReportPortal as an ADMIN user"}),"\n",(0,r.jsx)(e.li,{children:"Then open the list on the right of the user's image."}),"\n",(0,r.jsx)(e.li,{children:"Click the 'Administrative' link"}),"\n",(0,r.jsx)(e.li,{children:"Click the 'Plugins' from the left-hand sidebar"}),"\n",(0,r.jsx)(e.li,{children:"Click on the'SAML' tab."}),"\n",(0,r.jsx)(e.li,{children:"Click on Add new integration"}),"\n",(0,r.jsx)(e.li,{children:"The next fields should be present:"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"'Identity provider name ID*': text\n'Provider name*': text\n'Metadata URL*': URL\n'RP callback URL': URL - RP host/uat\n'Email attribute*': text\n'Name attributes mode' : \n'Last name attribute' text\n'First name attribute' text\nor\n'Full name attribute' : text\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Mandatory fields are marked with red.\nClick the 'Submit' button.\nAll users of SAML will have access to the ReportPortal instance.",(0,r.jsx)(e.br,{}),"\n","Just click on the button 'Login with SAML' and choose a needed integration from the drop-down"]}),"\n",(0,r.jsx)(e.p,{children:"On Octa side you should to specify SSO url. The format for url is the next:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"https://your domain adress/uat/saml/sp/SSO/alias/report-portal-sp\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u201cRP callback URL\u201d field is an optional field to provide a redirect base path right in SAML integration settings. Fill in the field in format \u201cRP host/uat\u201d. The format for url is the next:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"https://reportportal.com/uat\n"})}),"\n",(0,r.jsx)(e.p,{children:"Once you have submitted an integration with \u201cRP callback URL\u201d, the URL will be applied to all SAML integrations."})]})}function u(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>a});var r=n(67294);const o={},i=r.createContext(o);function a(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);