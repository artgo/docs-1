"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2253],{20739:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=s(85893),t=s(11151);const r={},o="Asynchronous reporting",d={id:"dev-guides/AsynchronousReporting",title:"Asynchronous reporting",description:"Overview",source:"@site/docs/dev-guides/AsynchronousReporting.mdx",sourceDirName:"dev-guides",slug:"/dev-guides/AsynchronousReporting",permalink:"/docs/dev-guides/AsynchronousReporting",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/dev-guides/AsynchronousReporting.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"API differences between v4 and v5",permalink:"/docs/dev-guides/APIDifferencesBetweenV4AndV5"},next:{title:"Attachments (Screenshots) Guide",permalink:"/docs/dev-guides/AttachmentsGuide"}},a={},c=[{value:"Overview",id:"overview",level:3},{value:"Simple scheme of interactions between RabbitMq and API",id:"simple-scheme-of-interactions-between-rabbitmq-and-api",level:3},{value:"Enable asynchronous reporting in agents",id:"enable-asynchronous-reporting-in-agents",level:3},{value:"Asynchronous API",id:"asynchronous-api",level:3},{value:"Detailed scheme of interactions between RabbitMq and API",id:"detailed-scheme-of-interactions-between-rabbitmq-and-api",level:3},{value:"API properties",id:"api-properties",level:4},{value:"Exchanges and queues for reporting",id:"exchanges-and-queues-for-reporting",level:4},{value:"Scheme",id:"scheme",level:4},{value:"Finishing launch",id:"finishing-launch",level:4}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{MediaViewer:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"asynchronous-reporting",children:"Asynchronous reporting"}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["Asynchronous reporting implemented using ",(0,i.jsx)(n.a,{href:"https://www.rabbitmq.com/tutorials/amqp-concepts.html",children:"AMQP 0-9-1"})," protocol based on\n",(0,i.jsx)(n.a,{href:"https://www.rabbitmq.com",children:"RabbitMq"})," message broker.\nThe main idea of the async reporting is to give a response back immediately after a server that is receiving a request from a client.\nSo, using this approach, a client is not blocked and doesn't wait until a server processes the request."]}),"\n",(0,i.jsx)(n.h3,{id:"simple-scheme-of-interactions-between-rabbitmq-and-api",children:"Simple scheme of interactions between RabbitMq and API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Difference between ID and UUID"})})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ID"})," is a physical identificator of an entity generated automatically by a database at the moment of saving.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"UUID"})," is a virtual identificator of the entity. Can be specified in a request or, if not present, in a request generated automatically at the moment the\n",(0,i.jsx)(n.code,{children:"api"})," accepts the request.",(0,i.jsx)(n.br,{}),"\n","Each entity has both ",(0,i.jsx)(n.code,{children:"ID"})," and ",(0,i.jsx)(n.code,{children:"UUID"}),". ",(0,i.jsx)(n.code,{children:"ID"})," is used to perform the CRUD operations with an entity that is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"already saved in db"})}),".\n",(0,i.jsx)(n.code,{children:"UUID"})," is used to build the child-parent relationships between entities at the client side during reporting.\nIn case of synchronous reporting, any response from ",(0,i.jsx)(n.code,{children:"api"})," is returned ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"after"})})," handling of the request and saving the entity in a database.\nIn case of asynchronous reporting, any response from ",(0,i.jsx)(n.code,{children:"api"})," is returned ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"before"})})," handling of the request and saving the entity in a database.\nThe responses in both modes look the same:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "cd64d5eb-fea1-4e7e-8a5a-69998ac5620f"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"id"})," property of the response is actually an ",(0,i.jsx)(n.code,{children:"UUID"}),". This is due to backward compatibility.\nSo when you have this uuid and want to update, delete etc. entity you should get a physical ",(0,i.jsx)(n.code,{children:"id"})," from the db first."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Simple asynchronous reporting scheme"})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Step 1"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"API"})," receives HTTP request from ",(0,i.jsx)(n.code,{children:"client"}),". ",(0,i.jsx)(n.code,{children:"Controller"})," checks permissions and throws the request to ",(0,i.jsx)(n.code,{children:"producer"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Step 2"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"Producer"})," validates business rules if necessary, generates UUID (virtual id) for an entity and returns it back to the ",(0,i.jsx)(n.code,{children:"controller"}),",\ncomposes a message for ",(0,i.jsx)(n.code,{children:"RabbitMq"})," and sends it to the specified queue.\nAfter that, a ",(0,i.jsx)(n.code,{children:"controller"})," returns HTTP response to the ",(0,i.jsx)(n.code,{children:"client"})," that contains UUID. ",(0,i.jsx)(n.strong,{children:"At the moment, the physical entity may not be created yet!"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Step 3"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"Consumer"})," starts processing the message as soon as it is received from ",(0,i.jsx)(n.code,{children:"RabbitMq"}),".\nAfter a successful processing, the entity will be stored in a database and obtain a physical id.\nIn case of an exception, it is logged and the entity is not saved."]}),"\n"]}),"\n",(0,i.jsx)(r,{src:s(96530),alt:"Simple Scheme"}),"\n",(0,i.jsx)(n.h3,{id:"enable-asynchronous-reporting-in-agents",children:"Enable asynchronous reporting in agents"}),"\n",(0,i.jsxs)(n.p,{children:["Async reporting is supported only by agents since version 5.0.0.\nTo enable it you should set ",(0,i.jsx)(n.code,{children:"rp.reporting.async=true"})," in ",(0,i.jsx)(n.code,{children:"reportportal.properties"}),".\nBy default (if property ",(0,i.jsx)(n.code,{children:"rp.reporting.async"})," is not specified) agents work in a synchronous mode."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-properties",children:"rp.endpoint=https://example.com\nrp.api.key=xxx\nrp.launch=launch-name\nrp.project=project-name\nrp.reporting.async=true\n"})}),"\n",(0,i.jsx)(n.p,{children:"(*) Listed above is an example for Java-based client. For another platforms please see corresponding documentation."}),"\n",(0,i.jsx)(n.h3,{id:"asynchronous-api",children:"Asynchronous API"}),"\n",(0,i.jsxs)(n.p,{children:["Async controllers have ",(0,i.jsx)(n.code,{children:"/api/v2"})," prefix.\nRequests and responses have no differences with sync ones but there are some specific distinctions in the behavior that is described in\n",(0,i.jsx)(n.a,{href:"/dev-guides/ReportingDevelopersGuide",children:"reporting guide"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/dev-guides/ReportingDevelopersGuide#start-launch",children:"Start launch"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/dev-guides/ReportingDevelopersGuide#start-rootsuite-item",children:"Start root(suite) item"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/dev-guides/ReportingDevelopersGuide#start-childcontainer-item",children:"Start child(container) item"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/dev-guides/ReportingDevelopersGuide#start-childstep-item",children:"Start child(step) item"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/dev-guides/ReportingDevelopersGuide#finish-child-item",children:"Finish child item"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/dev-guides/ReportingDevelopersGuide#finish-parentcontainer-item",children:"Finish parent(container) item"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/dev-guides/ReportingDevelopersGuide#save-single-log-without-attachment",children:"Save single log without attachment"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/dev-guides/ReportingDevelopersGuide#batch-save-logs",children:"Batch save logs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/dev-guides/ReportingDevelopersGuide#save-launch-log",children:"Save launch log"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/dev-guides/ReportingDevelopersGuide#finish-rootsuite-item",children:"Finish root(suite) item"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/dev-guides/ReportingDevelopersGuide#finish-launch",children:"Finish launch"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"detailed-scheme-of-interactions-between-rabbitmq-and-api",children:"Detailed scheme of interactions between RabbitMq and API"}),"\n",(0,i.jsx)(n.h4,{id:"api-properties",children:"API properties"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"API"})," has the following properties for connection to RabbitMq service:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Environment variable name"}),(0,i.jsx)(n.th,{children:"Default value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rp.amqp.host"}),(0,i.jsx)(n.td,{children:"RP_AMQP_HOST"}),(0,i.jsx)(n.td,{children:"rabbitmq"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rp.amqp.port"}),(0,i.jsx)(n.td,{children:"RP_AMQP_PORT"}),(0,i.jsx)(n.td,{children:"5672"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rp.amqp.user"}),(0,i.jsx)(n.td,{children:"RP_AMQP_USER"}),(0,i.jsx)(n.td,{children:"rabbitmq"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rp.amqp.pass"}),(0,i.jsx)(n.td,{children:"RP_AMQP_PASS"}),(0,i.jsx)(n.td,{children:"rabbitmq"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rp.amqp.addresses"}),(0,i.jsx)(n.td,{children:"RP_AMQP_ADDRESSES"}),(0,i.jsxs)(n.td,{children:["amqp://rabbitmq",":rabbitmq","@rabbitmq:5672"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rp.amqp.queues"}),(0,i.jsx)(n.td,{children:"RP_AMQP_QUEUES"}),(0,i.jsx)(n.td,{children:"10"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rp.amqp.queuesPerPod"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"10"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"rp.amqp.host"})," - Hostname of RabbitMq service.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"rp.amqp.port"})," - Port of RabbitMq service.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"rp.amqp.user"})," - Username to connect to RabbitMq service.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"rp.amqp.pass"})," - User password to connect to RabbitMq service.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"rp.amqp.addresses"})," - Full address to connect to RabbitMq service.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"rp.amqp.queues"})," - Number of queues to be processed by this service-api.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"rp.amqp.queuesPerPod"})," - Cluster configuration parameter. Number of queues to be processed by this service-api pod\n(default effectively infinite)."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"should correlate with number QUEUE_AMOUNT & number of service-api pods being started in cluster."})}),"\n",(0,i.jsx)(n.h4,{id:"exchanges-and-queues-for-reporting",children:"Exchanges and queues for reporting"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"API"})," produces two reporting exchanges - ",(0,i.jsx)(n.code,{children:"reporting"})," and ",(0,i.jsx)(n.code,{children:"reporting.retry"}),". Exchange ",(0,i.jsx)(n.code,{children:"reporting"})," contains queues for storing messages\nfrom the requests. Exchange ",(0,i.jsx)(n.code,{children:"reporting.retry"})," contains queues for storing messages that were consumed exceptionally from the queues in ",(0,i.jsx)(n.code,{children:"reporting"}),"\nexchange. The amount of the queues in the exchanges depends on ",(0,i.jsx)(n.code,{children:"rp.amqp.queues"})," parameter. Exchange ",(0,i.jsx)(n.code,{children:"reporting"})," has ",(0,i.jsx)(n.code,{children:"N"})," queues with names\n",(0,i.jsx)(n.code,{children:"reporting.0 ... reporting.N"}),". Exchange ",(0,i.jsx)(n.code,{children:"reporting.retry"})," has ",(0,i.jsx)(n.code,{children:"N+1"})," queues with the names ",(0,i.jsx)(n.code,{children:"reporting.retry.0 ... reporting.retry.N"})," and ",(0,i.jsx)(n.code,{children:"reporting.dlq"}),".\nIn case message from ",(0,i.jsx)(n.code,{children:"reporting.retry"})," was consumed with exception more than 10 times, the message will be stored in reporting.dlq which is\n",(0,i.jsx)(n.a,{href:"https://www.rabbitmq.com/dlx.html",children:"dead letter queue"}),"."]}),"\n",(0,i.jsx)(r,{src:s(43944),alt:"Exchanges Queues"}),"\n",(0,i.jsx)(n.h4,{id:"scheme",children:"Scheme"}),"\n",(0,i.jsx)(n.p,{children:"All requests (items, logs) related to the same launch will be stored in the same RabbitMQ queue.\nIt is achieved using the following algorithm that maps launch uuid to a queue key:"}),"\n",(0,i.jsx)(r,{src:s(333),alt:"Uuid Queus Mapping"}),"\n",(0,i.jsxs)(n.p,{children:["Messages in the queue don't have a strict order but they are stored mostly in the same order as they arrive from ",(0,i.jsx)(n.code,{children:"client"}),".\nThis ensures a minimal amount of exceptions (causing the sending of such messages to the retry queue) caused by cases when a child is handled before its own parent."]}),"\n",(0,i.jsx)(n.p,{children:"Consuming scheme:"}),"\n",(0,i.jsx)(r,{src:s(69048),alt:"Consuming"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"(!)"})," Possible exceptions that may be thrown and lead to sending the message to the retry queue:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On start launch/test item:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"User not found."}),"\n",(0,i.jsx)(n.li,{children:"Entity not found. Parent entity not found."}),"\n",(0,i.jsx)(n.li,{children:"Bad request. Start time of the child item is earlier than the parent start time, trying to report a child child under a retry item, trying\nto report a non-nested step under a nested step parent, trying to rerun a launch that does not exist."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["On finish launch/test item:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Entity not found. Entity that has to be finished not found in database or parent entity not found (for test items)."}),"\n",(0,i.jsx)(n.li,{children:"Bad request. User tries to finish already finished entity. Finish time is earlier than start time."}),"\n",(0,i.jsx)(n.li,{children:"Access denied. User tries to finish not own entity of under not own project"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["On log creation:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Entity not found. Trying to create log for not existing launch/test item"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"finishing-launch",children:"Finishing launch"}),"\n",(0,i.jsx)(n.p,{children:"If the order is not broken, launch finish request will be handled when there are no more child item requests in the queue."}),"\n",(0,i.jsx)(r,{src:s(20872),alt:"Finish Launch"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"(!)"})," It is a main difference in reporting mechanism between ReportPortal version 4 and 5.\nIn case the launch finish request is not last in the queue it will be finished anyway.\nBut all the next requests under the launch will be handled as soon as they get to the consumer and the launch statistics will be updated.\nSo it is possible to report items under already finished launch."]})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},69048:(e,n,s)=>{s.r(n),s.d(n,{default:()=>i});const i=s.p+"assets/images/Consuming-8ac6509081b9d7f72476ac0bf161ee04.png"},43944:(e,n,s)=>{s.r(n),s.d(n,{default:()=>i});const i=s.p+"assets/images/ExchangesQueues-82936b5f9bd33e45f8b6d4c3ff1705da.png"},20872:(e,n,s)=>{s.r(n),s.d(n,{default:()=>i});const i=s.p+"assets/images/FinishLaunch-67ef9725f4ecc9de62732517758a3448.png"},96530:(e,n,s)=>{s.r(n),s.d(n,{default:()=>i});const i=s.p+"assets/images/SimpleScheme-26a8a2f83498680ef5aa64628e1e6b11.png"},333:(e,n,s)=>{s.r(n),s.d(n,{default:()=>i});const i=s.p+"assets/images/UuidQueusMapping-c52ac1d1ea2ce153ad94c3f6edbccb31.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>o});var i=s(67294);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);