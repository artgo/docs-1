"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80225],{60466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=n(85893),o=n(11151);const s={sidebar_position:3,sidebar_label:"Project configuration"},r="Project configuration",a={id:"reportportal-configuration/ProjectConfiguration",title:"Project configuration",description:"To see the list of available projects and open a project, click the drop-down list in the top of the left menu.",source:"@site/docs/reportportal-configuration/ProjectConfiguration.mdx",sourceDirName:"reportportal-configuration",slug:"/reportportal-configuration/ProjectConfiguration",permalink:"/docs/reportportal-configuration/ProjectConfiguration",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/reportportal-configuration/ProjectConfiguration.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Project configuration"},sidebar:"docs",previous:{title:"Creation of project and adding users",permalink:"/docs/reportportal-configuration/CreationOfProjectAndAddingUsers"},next:{title:"ReportPortal jobs configuration",permalink:"/docs/reportportal-configuration/ReportPortalJobsConfiguration"}},l={},c=[{value:"Project settings",id:"project-settings",level:2},{value:"General settings",id:"general-settings",level:3},{value:"Integrations",id:"integrations",level:3},{value:"E-mail notifications",id:"e-mail-notifications",level:3},{value:"Custom defect types",id:"custom-defect-types",level:3},{value:"Auto-analysis and Pattern analysis",id:"auto-analysis-and-pattern-analysis",level:3},{value:"Demo data",id:"demo-data",level:3},{value:"Management of users on the project",id:"management-of-users-on-the-project",level:2},{value:"Invite user on a project",id:"invite-user-on-a-project",level:3},{value:"Project role",id:"project-role",level:3},{value:"Edit project role",id:"edit-project-role",level:3},{value:"Unassign user from the project",id:"unassign-user-from-the-project",level:3}];function d(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{MediaViewer:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"project-configuration",children:"Project configuration"}),"\n",(0,i.jsx)(t.p,{children:"To see the list of available projects and open a project, click the drop-down list in the top of the left menu."}),"\n",(0,i.jsx)(t.p,{children:"ReportPortal supports customization of the default settings."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Permission:"}),'\nUsers with the Administrator role can edit project settings on the project "Settings" page in Administrate section and on the Project space.\nUsers with the ',(0,i.jsx)(t.code,{children:"PROJECT_MANAGER"})," role can edit the settings on the project space only.\n",(0,i.jsx)(t.code,{children:"MEMBER"}),"/ ",(0,i.jsx)(t.code,{children:"OPERATOR"}),"/ ",(0,i.jsx)(t.code,{children:"CUSTOMER"})," can only view applied project settings."]}),"\n",(0,i.jsx)(t.h2,{id:"project-settings",children:"Project settings"}),"\n",(0,i.jsx)(t.p,{children:'To go to the project settings page, click the "Project Settings" icon in the left menu.'}),"\n",(0,i.jsx)(t.p,{children:"The project configuration page will be opened."}),"\n",(0,i.jsxs)(t.p,{children:['The project settings are divided into following tabs: "General", "Integrations", "Notifications", "Defect Types", "Analyzer", "Pattern Analysis", "Demo Data" and "Quality Gates" (if you have our ',(0,i.jsx)(t.a,{href:"/category/quality-gates",children:"premium feature"}),")."]}),"\n",(0,i.jsx)(t.h3,{id:"general-settings",children:"General settings"}),"\n",(0,i.jsx)(t.p,{children:"Our test automation results dashboard allows you to control the amount of the stored data (launches, test items, logs and attachments) by removing outdated elements using Quartz jobs.\nFunctionality of data removing depends on two configurations."}),"\n",(0,i.jsxs)(t.p,{children:["The first one is API service back-end environment variables that are described in ",(0,i.jsx)(t.a,{href:"/reportportal-configuration/ReportPortalJobsConfiguration",children:"ReportPortal jobs configuration"})]}),"\n",(0,i.jsx)(t.p,{children:'The second one is the "General" tab you can configure parameter of data storage in ReportPortal for this project:'}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Name \u2013 is a disabled field as the project name cannot be changed."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Launch inactivity timeout"})," - this parameter specifies the scheduled time for a job to interrupt inactive launches (launches which have the status 'in progress', but there is no any items during the chosen period). There are six options:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"1 hour,"}),"\n",(0,i.jsx)(t.li,{children:"3 hours,"}),"\n",(0,i.jsx)(t.li,{children:"6 hours,"}),"\n",(0,i.jsx)(t.li,{children:"12 hours,"}),"\n",(0,i.jsx)(t.li,{children:"1 day,"}),"\n",(0,i.jsx)(t.li,{children:"7 days."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Keep launches"})," - this parameter specifies how long the system will keep old launches in the data base. There are five options:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"7 days,"}),"\n",(0,i.jsx)(t.li,{children:"14 days,"}),"\n",(0,i.jsx)(t.li,{children:"21 days,"}),"\n",(0,i.jsx)(t.li,{children:"30 days,"}),"\n",(0,i.jsx)(t.li,{children:"90 days."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"After this period a launch will be deleted, and you can not see it in ReportPortal."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Keep logs"})," - this parameter specifies how long the system will keep old logs in launches. Related launch structures will be saved, to keep statistics. There are five options:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"7 days,"}),"\n",(0,i.jsx)(t.li,{children:"14 days,"}),"\n",(0,i.jsx)(t.li,{children:"21 days,"}),"\n",(0,i.jsx)(t.li,{children:"30 days,"}),"\n",(0,i.jsx)(t.li,{children:"90 days."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Keep attachments"})," - this parameter specifies how long to keep binary data (screenshots, files, video, and others attachments)\nin the system. There are five options:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"7 days,"}),"\n",(0,i.jsx)(t.li,{children:"14 days,"}),"\n",(0,i.jsx)(t.li,{children:"21 days,"}),"\n",(0,i.jsx)(t.li,{children:"30 days,"}),"\n",(0,i.jsx)(t.li,{children:"90 days."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n,{src:"https://youtu.be/ih-ECyC29f0",alt:"Project settings in our real time dashboard open source",type:"video"}),"\n",(0,i.jsx)(t.h3,{id:"integrations",children:"Integrations"}),"\n",(0,i.jsx)(t.p,{children:'The "Integration" tab can allow the project to connect ReportPortal with external systems or rewrite global configurations for third party systems.'}),"\n",(0,i.jsxs)(t.p,{children:["For more information on this topic, please refer to ",(0,i.jsx)(t.a,{href:"/reportportal-configuration/IntegrationViaPlugin",children:"Integration with external systems"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"e-mail-notifications",children:"E-mail notifications"}),"\n",(0,i.jsx)(t.p,{children:'The "Notifications" tab provides the administrator with the ability to activate e-mail notifications on the project.'}),"\n",(0,i.jsx)(t.p,{children:"ReportPortal provides a way to add multiple rules with specific conditions. The Notification rule should be unique per project, have a unique parameter set, and specify recipients. For Example: In case, Launch names, attributes)."}),"\n",(0,i.jsxs)(t.p,{children:["Permissions:\nUsers with ",(0,i.jsx)(t.code,{children:"ADMINISTRATOR"}),' a role can configure "Notifications" in the Administrate section.\nUsers with ',(0,i.jsx)(t.code,{children:"PROJECT_MANAGER"})," roles can edit the settings on the project space only."]}),"\n",(0,i.jsx)(t.p,{children:"To do that, perform the following steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Login to the ReportPortal."}),"\n",(0,i.jsx)(t.li,{children:'Navigate to the Project -> Project "Settings" page.'}),"\n",(0,i.jsx)(t.li,{children:'Open the "Notifications" tab and click on a button "Create new notification rule"'}),"\n",(0,i.jsx)(t.li,{children:'Enter your email into the "From" field. This email will be used as a notification sender.'}),"\n",(0,i.jsx)(t.li,{children:'Select recipients. To do that, start typing any symbols into the "Recipients" field.\nYou can select an item from the auto-complete tool-tip using the\nkeyboard (use the "Up" and "Down" arrows and "Enter" button). You can also enter a custom email into the "Recipients" field. To add a custom\nemail, just enter the email address and press "Enter".'}),"\n",(0,i.jsx)(t.li,{children:'The "Launch owner" is selected by default. Uncheck "Launch owner" to exclude\nhim/her from the notification.'}),"\n",(0,i.jsx)(t.li,{children:'Select the "In Case" setting. To do that, select one of the following options from the "In Case" drop-down.'}),"\n",(0,i.jsx)(t.li,{children:'Select launches (optional). To do that, start typing any symbols into the "Launch names" field.\nYou can select an item from the auto-complete tool-tip using the "Up" and "Down" arrows and clicking "Enter" on the keyboard. This is an alternate way you can add a new launch name that does not exist on the project. Several launches names can be selected; the recipients will receive notifications when each of them finishes.'}),"\n",(0,i.jsx)(t.li,{children:'Then Select attributes (optional). To do that, start typing any symbols into the "Attribute key" and "Attribute value" fields. The system will suggest the results in the drop-down, after at least 1 symbol is provided. It is also possible to add a new attribute (that does not exist on the project). Several attributes can be selected at once; the corresponding recipients will receive notifications about the launches that have all the specified attributes.'}),"\n",(0,i.jsx)(t.li,{children:"Switch ON Notifications"}),"\n",(0,i.jsx)(t.li,{children:'The system will activate the "Email notification" option. After the launch is finished, the recipients will receive a notification via email.'}),"\n",(0,i.jsx)(t.li,{children:"Add more rules, if needed. Each Notification rule should be unique."}),"\n",(0,i.jsx)(t.li,{children:"You can edit/ copy/enable/disable notification rule by clicking on the appropriate controls on the notification rule."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Users with a ",(0,i.jsx)(t.code,{children:"MEMBER"}),"/ ",(0,i.jsx)(t.code,{children:"OPERATOR"}),"/ ",(0,i.jsx)(t.code,{children:"CUSTOMER"})," project role will not have the capability to edit the project settings, however, they do have the permissions to view them."]})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"For using this functionality be sure that the E-mail server is configured."})}),"\n",(0,i.jsx)(t.h3,{id:"custom-defect-types",children:"Custom defect types"}),"\n",(0,i.jsx)(t.p,{children:'The "Defect Types" tab allows users with permissions to create custom defect types as subtypes of default defects on the project.'}),"\n",(0,i.jsx)(t.p,{children:"After Installation the ReportPortal by default sets-up the following defect types groups:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"To investigate"})," - means that no investigation was performed on this defect yet."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Product Bug"})," - defect was investigated and a production bug was found as a cause for this test failure."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Automation Bug"})," - defect was investigated and an automation test is not correct."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"System Issue"})," - defect was investigated and it turns out that it is a system-level issue, like the app, crashed and caused the test to fail."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"No Defect"})," - defect was investigated and defined as not a defect."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"ReportPortal allows the use of existing defect types (Product Bug, Automation Bug, System Issue, No Defect, To investigate) and or to create custom ones on the project settings page."}),"\n",(0,i.jsx)(t.p,{children:"To create custom defect types, perform the following steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Login into the ReportPortal."}),"\n",(0,i.jsx)(t.li,{children:'Navigate to Projects -> Project "Settings" page.'}),"\n",(0,i.jsx)(t.li,{children:'Open "Defect Types" tab'}),"\n",(0,i.jsx)(t.li,{children:'Click "Add Defect Type" button under any default defect type'}),"\n",(0,i.jsx)(t.li,{children:"Add new defect type form will appear"}),"\n",(0,i.jsx)(t.li,{children:'Enter "Defect name" and "Abbreviation", select color for defect presentation on the launches grid and widgets.'}),"\n",(0,i.jsx)(t.li,{children:"Submit form. You will see an added defect type on the chart preview."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Add more custom defects, if you need it. The system allows us to add up to ten subtypes of each default defect type."}),"\n",(0,i.jsxs)(t.p,{children:["Now you can do bug triage and set defect types as default Product Bug/Automation Bug/System Issue/No Defect/TO investigate or custom defects. All of them will be available to select on the Defect Type editor.\nFor more information refer to the ",(0,i.jsx)(t.a,{href:"/work-with-reports/InvestigationOfFailure",children:"Investigation of failure"})," topic."]}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.p,{children:"Default defects cannot be modified and or deleted from the system. Custom defect types can be deleted at any time."}),(0,i.jsx)(t.p,{children:"You can create up to 15 custom defect types for each group."})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["If you have deleted a custom type from the system, all test executions with this deleted defect type get the parent type of the group in which deleted defect has belonged. Statistics updates in all launches where a deleted defect was present.",(0,i.jsx)(t.br,{}),"\n",'For example, if you create a custom "Product Bug-1" as a subtype of "Product Bugs" group and investigate a few\ndefects as "Product Bug-1", then remove "Product Bug-1" from your project, all investigated "Product Bug-1" defects\nwill be shown as "Product Bug".']})}),"\n",(0,i.jsx)(n,{src:"https://youtu.be/CcU2_dEu59k",alt:"Defect Type Configuration for clear test execution report",type:"video"}),"\n",(0,i.jsx)(t.h3,{id:"auto-analysis-and-pattern-analysis",children:"Auto-analysis and Pattern analysis"}),"\n",(0,i.jsx)(t.p,{children:'The "Auto-Analysis" and "Pattern analysis" tabs can allow reducing test failure analysis routine on the project.'}),"\n",(0,i.jsxs)(t.p,{children:["For more information on this topic, please refer to ",(0,i.jsx)(t.a,{href:"/category/analysis",children:"Analysis"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"demo-data",children:"Demo data"}),"\n",(0,i.jsx)(t.p,{children:'The "Demo Data" tab provides a way to generate demo data on the project.'}),"\n",(0,i.jsx)(t.p,{children:"The generated data could demonstrate how the launches, filter, and dashboard will look. On the other hand, demo data could be\nmodified or removed without any effect of your real objects."}),"\n",(0,i.jsx)(n,{src:"https://youtu.be/bXHY0_sXAF8",alt:"Generate Demo Data with test report&analytics dashboard",type:"video"}),"\n",(0,i.jsx)(t.h2,{id:"management-of-users-on-the-project",children:"Management of users on the project"}),"\n",(0,i.jsx)(t.p,{children:'On the "Project Members" page users with the appropriate roles can invite new members.'}),"\n",(0,i.jsx)(t.p,{children:"Permissions:"}),"\n",(0,i.jsxs)(t.p,{children:["User with ",(0,i.jsx)(t.code,{children:"ADMINISTRATOR"})," role and users with project role ",(0,i.jsx)(t.code,{children:"PROJECT_MANAGER"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"invite-user-on-a-project",children:"Invite user on a project"}),"\n",(0,i.jsx)(t.p,{children:'To invite a user on the "Project Members" page, perform the following steps:'}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Login into ReportPortal instance as with the PROJECT_MANAGER project role."}),"\n",(0,i.jsx)(t.li,{children:'Navigate to the "Project Members" page on the left menu.'}),"\n",(0,i.jsx)(t.li,{children:'Click the "Invite User" tab.'}),"\n",(0,i.jsx)(t.li,{children:"Enter the email address of the user in case he/she is not present in the ReportPortal database or enter his/her login name."}),"\n",(0,i.jsx)(t.li,{children:"In case the user is already available in the ReportPortal, his/her name will appear in the suggestion list.\nIf not, the Admin should enter the correct email address."}),"\n",(0,i.jsx)(t.li,{children:"Select an appropriate role."}),"\n",(0,i.jsx)(t.li,{children:"Then click 'Invite'."}),"\n",(0,i.jsx)(t.li,{children:"In case the user is already available in ReportPortal s/he will be assigned to the project\nIf not, the letter with an invitation link will be sent to the user email address."}),"\n",(0,i.jsx)(t.li,{children:"The user will receive an email with the link to the registration.\nWhen the user clicks the link, he/she will see a registration form."}),"\n",(0,i.jsx)(t.li,{children:'The user needs to fill in the registration form and click the "Register"\nbutton to complete the registration.'}),"\n",(0,i.jsx)(t.li,{children:'The user will be assigned to the project that the invitation was sent from, and to "Personal Project" with the PROJECT\nMANAGER project role.'}),"\n"]}),"\n",(0,i.jsx)(n,{src:"https://youtu.be/VOk80XZHpWc",alt:"Invite User From Project Members Page",type:"video"}),"\n",(0,i.jsx)(t.h3,{id:"project-role",children:"Project role"}),"\n",(0,i.jsx)(t.p,{children:"Every user is given a specific Project role within a specific project."}),"\n",(0,i.jsx)(t.p,{children:'Depends on the role, the user is able or not able to perform some actions. For more details, please see the "Permissions map".'}),"\n",(0,i.jsx)(t.p,{children:"There are 4 possible Project roles in ReportPortal:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"PROJECT MANAGER"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"MEMBER"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"OPERATOR"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"CUSTOMER"})}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"ADMINISTRATOR"})," has all privileges on the project."]})}),"\n",(0,i.jsx)(t.h3,{id:"edit-project-role",children:"Edit project role"}),"\n",(0,i.jsx)(t.p,{children:"To edit the project role, perform the following steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Login into the ReportPortal as a user with ",(0,i.jsx)(t.code,{children:"PROJECT_MANAGER"})," project role."]}),"\n",(0,i.jsx)(t.li,{children:'Navigate to the "Project Members" page on the left menu.'}),"\n",(0,i.jsx)(t.li,{children:'Select a new value from the "Project Role" drop-down for the user. - The new project role will be automatically saved.'}),"\n"]}),"\n",(0,i.jsx)(n,{src:"https://youtu.be/DF38BbE5vws",alt:"Edit Project Role From Project Members Page",type:"video"}),"\n",(0,i.jsx)(t.h3,{id:"unassign-user-from-the-project",children:"Unassign user from the project"}),"\n",(0,i.jsx)(t.p,{children:"Depending on the project needs the assignment could be removed.\nTo unassign the assignment for the user on the project, perform the following steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Login into the ReportPortal as a user with ",(0,i.jsx)(t.code,{children:"PROJECT_MANAGER"})," project role."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'Navigate to the "Project Members" page on the left menu.'}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Find the required member."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Click the 'Unassign' button for the user."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Confirm the action in the popup."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The user will be unassigned from the current project but will stay in the system."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Invite user, Assign/Unassign internal user to/from the project, change user's role on a project action can be done for a user\nwith a similar and lower role only."})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(67294);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);