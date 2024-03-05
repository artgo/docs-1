"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71288],{42435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(85893),s=r(11151);const o={sidebar_label:"Quick Start Guide for Google Cloud Platform GKE"},l="Quick Start Guide for Google Cloud Platform GKE",a={id:"installation-steps/deploy-with-kubernetes/QuickStartWithGCPGKE",title:"Quick Start Guide for Google Cloud Platform GKE",description:"Prerequisites",source:"@site/docs/installation-steps/deploy-with-kubernetes/QuickStartWithGCPGKE.md",sourceDirName:"installation-steps/deploy-with-kubernetes",slug:"/installation-steps/deploy-with-kubernetes/QuickStartWithGCPGKE",permalink:"/docs/installation-steps/deploy-with-kubernetes/QuickStartWithGCPGKE",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/installation-steps/deploy-with-kubernetes/QuickStartWithGCPGKE.md",tags:[],version:"current",frontMatter:{sidebar_label:"Quick Start Guide for Google Cloud Platform GKE"},sidebar:"docs",previous:{title:"Amazon ALB + NGINX Ingress Controller",permalink:"/docs/installation-steps/deploy-with-kubernetes/AmazonALBNGINXIngressController"},next:{title:"Deploy via Google Cloud Marketplace",permalink:"/docs/installation-steps/DeployViaGoogleCloudMarketplace"}},i={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialize the gcloud CLI",id:"initialize-the-gcloud-cli",level:2},{value:"Set up gcloud credential helper",id:"set-up-gcloud-credential-helper",level:2},{value:"Adjust Google Cloud IAM",id:"adjust-google-cloud-iam",level:2},{value:"Create a GKE cluster",id:"create-a-gke-cluster",level:2},{value:"Create a cluster in Autopilot mode",id:"create-a-cluster-in-autopilot-mode",level:3},{value:"Create a cluster in Standard mode",id:"create-a-cluster-in-standard-mode",level:3},{value:"Get cluster credentials for kubectl",id:"get-cluster-credentials-for-kubectl",level:3},{value:"Verify the cluster mode",id:"verify-the-cluster-mode",level:3},{value:"Prepare Helm package for installation",id:"prepare-helm-package-for-installation",level:2},{value:"Create a repository",id:"create-a-repository",level:3},{value:"Build and push Helm chart",id:"build-and-push-helm-chart",level:3},{value:"Install ReportPortal on GKE Autopilot Cluster via Helm chart",id:"install-reportportal-on-gke-autopilot-cluster-via-helm-chart",level:2},{value:"Install ReportPortal from Artifact Registry",id:"install-reportportal-from-artifact-registry",level:3},{value:"Install Helm chart on GKE Standard Cluster",id:"install-helm-chart-on-gke-standard-cluster",level:2},{value:"Ingress configuration",id:"ingress-configuration",level:3},{value:"Clean up",id:"clean-up",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"quick-start-guide-for-google-cloud-platform-gke",children:"Quick Start Guide for Google Cloud Platform GKE"}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.p,{children:"Before you begin, you need to have a Google Cloud account, a project and install the following\ntools:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/tools/#kubectl",children:"kubectl"})," 1.28 or later"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://helm.sh/docs/intro/install/",children:"Helm"})," 3.11 or later"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://cloud.google.com/sdk/docs/install-sdk",children:"google-cloud-cli"})," and\n",(0,n.jsx)(t.a,{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl#install_plugin",children:"gke-gcloud-auth-plugin"})]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["For some operation systems we recommend install ",(0,n.jsx)(t.code,{children:"google-cloud-sdk"})," package instead of ",(0,n.jsx)(t.code,{children:"google-cloud-cli"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"initialize-the-gcloud-cli",children:"Initialize the gcloud CLI"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://cloud.google.com/sdk/docs/initializing",children:"Perform initial setup tasks"})," and set up your default project:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gcloud init\n"})}),"\n",(0,n.jsx)(t.h2,{id:"set-up-gcloud-credential-helper",children:"Set up gcloud credential helper"}),"\n",(0,n.jsx)(t.p,{children:"If you have Docker, you can use the Docker credential helper to authenticate to Artifact Registry."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Here and below we use ",(0,n.jsx)(t.code,{children:"us-central1"})," region as a location for GKE cluster.\nHowever, you can use any other region."]})}),"\n",(0,n.jsx)(t.p,{children:"Just perform the following commands:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gcloud auth login\ngcloud auth configure-docker us-central1-docker.pkg.dev\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can find more information about gcloud credential helper\n",(0,n.jsx)(t.a,{href:"https://cloud.google.com/artifact-registry/docs/docker/authentication#gcloud-helper",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"adjust-google-cloud-iam",children:"Adjust Google Cloud IAM"}),"\n",(0,n.jsx)(t.p,{children:"Installation of ReportPortal requires setting up access to your GKE cluster for creating\na service account in GKE and providing permissions for some services to access Kubernetes API."}),"\n",(0,n.jsxs)(t.p,{children:["For adjusting access, you can do it using both Identity and Access Management (IAM)\nand Kubernetes RBAC.\nRead about it ",(0,n.jsx)(t.a,{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control#iam-interaction",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can use ",(0,n.jsx)(t.a,{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/iam#predefined",children:"Predefined GKE Roles"})," and update\nyour account role. To set a service account on nodes, you must also have the Service Account User role (roles/iam.serviceAccountUser)."]}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsxs)(t.p,{children:["We recommend to create a separate ",(0,n.jsx)(t.a,{href:"https://cloud.google.com/iam/docs/service-accounts-create",children:"IAM Service Account"})," for working with GKE cluster."]})}),"\n",(0,n.jsx)(t.h2,{id:"create-a-gke-cluster",children:"Create a GKE cluster"}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsx)(t.p,{children:"All GKE clusters are created as public clusters by default."})}),"\n",(0,n.jsxs)(t.p,{children:["You can create ",(0,n.jsx)(t.a,{href:"https://cloud.google.com/kubernetes-engine/docs/concepts/types-of-clusters#modes",children:"two types"}),"\nof GKE clusters:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview",children:"Autopilot"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://cloud.google.com/kubernetes-engine/docs/concepts/choose-cluster-mode#why-standard",children:"Standard"})}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"We recommend to use Autopilot mode. It is a managed Kubernetes environment that reduces the operational cost."})}),"\n",(0,n.jsx)(t.h3,{id:"create-a-cluster-in-autopilot-mode",children:"Create a cluster in Autopilot mode"}),"\n",(0,n.jsx)(t.p,{children:"It's pretty simple to create a cluster in Autopilot mode:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gcloud container clusters create-auto reportportal-cluster \\\n    --location=us-central1\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For more information about creating a cluster in Autopilot mode you can find\n",(0,n.jsx)(t.a,{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/creating-an-autopilot-cluster",children:"here"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Here and below we use ",(0,n.jsx)(t.code,{children:"us-central1"})," region as a location for GKE cluster.\nHowever, you can use any other region."]})}),"\n",(0,n.jsx)(t.h3,{id:"create-a-cluster-in-standard-mode",children:"Create a cluster in Standard mode"}),"\n",(0,n.jsx)(t.p,{children:"For a standard cluster you need to specify a machine type and a number of nodes."}),"\n",(0,n.jsxs)(t.p,{children:["ReportPortal requires at least 3 nodes with 2 vCPU and 4 GB memory for each.\nWe recommend using ",(0,n.jsx)(t.code,{children:"e2-standard-2"})," machine type with 2 vCPU and 8 GB memory:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gcloud container clusters create reportportal-cluster \\\n    --zone=us-central1-a \\\n    --machine-type=e2-standard-2 --num-nodes=3\n"})}),"\n",(0,n.jsxs)(t.p,{children:["More information about creating a cluster in Standard mode you can find\n",(0,n.jsx)(t.a,{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster#gcloud",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"get-cluster-credentials-for-kubectl",children:"Get cluster credentials for kubectl"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gcloud container clusters get-credentials reportportal-cluster \\\n    --location=us-central1\n"})}),"\n",(0,n.jsx)(t.h3,{id:"verify-the-cluster-mode",children:"Verify the cluster mode"}),"\n",(0,n.jsx)(t.p,{children:"You can verify the cluster:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gcloud container clusters describe reportportal-cluster \\\n    --location=us-central1\n"})}),"\n",(0,n.jsx)(t.h2,{id:"prepare-helm-package-for-installation",children:"Prepare Helm package for installation"}),"\n",(0,n.jsx)(t.p,{children:"At the current moment, you can install ReportPortal on GKE cluster via Helm chart only from\ndevelop branch."}),"\n",(0,n.jsx)(t.h3,{id:"create-a-repository",children:"Create a repository"}),"\n",(0,n.jsx)(t.p,{children:"Create a repository in Artifact Registry for ReportPortal Helm charts:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'gcloud artifacts repositories create reportportal-helm-repo --repository-format=docker \\\n--location=us-central1 --description="ReportPortal Helm repository"\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["More information about Store Helm charts in the Artifact Registry you can find\n",(0,n.jsx)(t.a,{href:"https://cloud.google.com/artifact-registry/docs/helm/store-helm-charts",children:"here"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:"Verify that the repository was created:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gcloud artifacts repositories list\n"})}),"\n",(0,n.jsx)(t.p,{children:"Authenticate with the repository:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gcloud auth print-access-token | helm registry login -u oauth2accesstoken \\\n--password-stdin https://us-central1-docker.pkg.dev\n"})}),"\n",(0,n.jsx)(t.h3,{id:"build-and-push-helm-chart",children:"Build and push Helm chart"}),"\n",(0,n.jsx)(t.p,{children:"Add GitHub repository on your local machine:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/reportportal/kubernetes.git\n"})}),"\n",(0,n.jsx)(t.p,{children:"Build and push the Helm chart to Artifact Registry using actual helm chart version\nand your project id:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd kubernetes\nhelm package .\nhelm push reportportal-${VERSION}.tgz oci://us-central1-docker.pkg.dev/${PROJECT_ID}/reportportal-helm-repo\n"})}),"\n",(0,n.jsx)(t.h2,{id:"install-reportportal-on-gke-autopilot-cluster-via-helm-chart",children:"Install ReportPortal on GKE Autopilot Cluster via Helm chart"}),"\n",(0,n.jsx)(t.p,{children:"By default, ReportPortal Helm chart install with infrastructure dependencies in GKE Autopilot Cluster:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"PostgreSQL"}),"\n",(0,n.jsx)(t.li,{children:"OpenSearch"}),"\n",(0,n.jsx)(t.li,{children:"RabbitMQ"}),"\n",(0,n.jsx)(t.li,{children:"MinIO"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You can disable an installation of some components via Helm chart values, but you have to provide\nnew credentials for your standalone components."}),"\n",(0,n.jsxs)(t.p,{children:["More information about it you can find here:\n",(0,n.jsx)(t.a,{href:"https://github.com/reportportal/kubernetes#install-the-chart-with-dependencies",children:"Install the chart with dependencies"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"install-reportportal-from-artifact-registry",children:"Install ReportPortal from Artifact Registry"}),"\n",(0,n.jsx)(t.p,{children:"For installing ReportPortal on GKE Autopilot Cluster, you need to set the:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["ingress controller as a ",(0,n.jsx)(t.code,{children:"gke"})]}),"\n",(0,n.jsx)(t.li,{children:"superadmin password"}),"\n",(0,n.jsx)(t.li,{children:"resources requests for api, uat, and analyzer services"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'helm install \\\n    --set ingress.class="gke" \\\n    --set uat.superadminInitPasswd.password=${SUPERADMIN_PASSWORD} \\\n    --set uat.resources.requests.memory="1Gi" \\\n    --set serviceapi.resources.requests.cpu="1000m" \\\n    --set serviceapi.resources.requests.memory="2Gi" \\\n    --set serviceanalyzer.resources.requests.memory="1Gi" \\\n    reportportal \\\n    oci://us-central1-docker.pkg.dev/${PROJECT_ID}/reportportal-helm-repo/reportportal \\\n    --version ${VERSION}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"install-helm-chart-on-gke-standard-cluster",children:"Install Helm chart on GKE Standard Cluster"}),"\n",(0,n.jsx)(t.p,{children:"For installing ReportPortal on GKE Standard Cluster you need to set:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["ingress controller as a ",(0,n.jsx)(t.code,{children:"gke"})]}),"\n",(0,n.jsx)(t.li,{children:"superadmin password"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'helm install \\\n    --set ingress.class="gke" \\\n    --set uat.superadminInitPasswd.password=${SUPERADMIN_PASSWORD} \\\n    reportportal \\\n    oci://us-central1-docker.pkg.dev/${PROJECT_ID}/reportportal-helm-repo/reportportal \\\n    --version ${VERSION}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"ingress-configuration",children:"Ingress configuration"}),"\n",(0,n.jsxs)(t.p,{children:["You can add custom gke ingress annotations via ",(0,n.jsx)(t.code,{children:"ingress.annotations.gke"})," parameter:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'--set-json=\'ingress.annotations.gke={"key1":"value1","key2":"value2"}\'\n'})}),"\n",(0,n.jsxs)(t.p,{children:["If you have some domain name, set ",(0,n.jsx)(t.code,{children:"ingress.usedomainname"})," variable to ",(0,n.jsx)(t.code,{children:"true"})," and\nset this FQDN to ",(0,n.jsx)(t.code,{children:"ingress.hosts"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"--set ingress.usedomainname=true \\\n--set ingress.hosts[0].reportportal.k8.com\n"})}),"\n",(0,n.jsx)(t.h2,{id:"clean-up",children:"Clean up"}),"\n",(0,n.jsx)(t.p,{children:"To delete the cluster:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gcloud artifacts repositories delete reportportal-cluster --location=us-central1\n"})}),"\n",(0,n.jsx)(t.p,{children:"To delete the artifacts repository:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gcloud artifacts repositories delete reportportal-helm-repo --location=us-central1\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>l});var n=r(67294);const s={},o=n.createContext(s);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);