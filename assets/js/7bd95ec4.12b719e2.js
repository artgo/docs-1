"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3360],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(k,i(i({ref:e},u),{},{components:r})):n.createElement(k,i({ref:e},u))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[d]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18593:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_label:"Active Directory"},i="Active Directory",l={unversionedId:"reportportal-configuration/authorization/ActiveDirectory",id:"reportportal-configuration/authorization/ActiveDirectory",title:"Active Directory",description:"Active Directory plugin is available in ReportPortal on the Plugins page.",source:"@site/docs/reportportal-configuration/authorization/ActiveDirectory.md",sourceDirName:"reportportal-configuration/authorization",slug:"/reportportal-configuration/authorization/ActiveDirectory",permalink:"/docs/reportportal-configuration/authorization/ActiveDirectory",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/reportportal-configuration/authorization/ActiveDirectory.md",tags:[],version:"current",frontMatter:{sidebar_label:"Active Directory"},sidebar:"defaultSidebar",previous:{title:"Authorization",permalink:"/docs/reportportal-configuration/authorization/"},next:{title:"GitHub",permalink:"/docs/reportportal-configuration/authorization/GitHub"}},c={},p=[],u={toc:p},d="wrapper";function s(t){let{components:e,...r}=t;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"active-directory"},"Active Directory"),(0,a.kt)("p",null,"Active Directory plugin is available in ReportPortal on the Plugins page."),(0,a.kt)("p",null,"To set up access with Active Directory:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log in to the ReportPortal as an ADMIN user"),(0,a.kt)("li",{parentName:"ol"},"Then open the list on the right of the user's image."),(0,a.kt)("li",{parentName:"ol"},"Click the 'Administrative' link"),(0,a.kt)("li",{parentName:"ol"},"Click the 'Plugins' from the left-hand sidebar"),(0,a.kt)("li",{parentName:"ol"},"Click on the'Activate Directory' tab."),(0,a.kt)("li",{parentName:"ol"},"Click on Add new integration"),(0,a.kt)("li",{parentName:"ol"},"The next fields should be present:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"'Domain*': text\n'URL*': text\n'Base DN*': text\n'Email attribute*': text\n'Full name attribute' : text\n'Photo attribute' : text\n'UserSearchFilter' (the same as for LDAP): text \n")),(0,a.kt)("p",null,"Mandatory fields are marked with red.\nClick the 'Submit' button.\nAll users of Active Directory will have access to the ReportPortal instance.",(0,a.kt)("br",{parentName:"p"}),"\n","For entrance to ReportPortal, the user should use their domain credentials (Login and password)."),(0,a.kt)("p",null,"Please find the example with configurations for Microsoft Active Directory that worked successfully provided by our user:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Table with properties and values for LDAP Microsoft Active Directory")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Url"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"auth-servers.domain.org.int:3358"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Base DN"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"OU=MAIN,DC=DOMAIN,DC=ORG,DC=INT"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Manager DN"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"cn=Service UserBind,ou=Service Accounts,ou=Colombia,ou=America,ou=ServiceAccounts,dc=DOMAIN,dc=ORG,dc=INT"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"User search filter"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"(&(objectClass=user)(sAMAccountName={0}))"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Password encoder type"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"NO"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Email attribute"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"mail"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Full name attribute"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"displayName"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Photo attribute"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"thumbnailPhoto"))))))}s.isMDXComponent=!0}}]);