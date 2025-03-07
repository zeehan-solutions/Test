import{r as n,K as R,a6 as k,v as t,j as a,F as E,M as B}from"./index.0e991307.js";import{i as I,s as U,S as O,R as M,c as h,C as g}from"./App.f2f7ddbf.js";import{b as P}from"./bona.20802e48.js";import Q from"./Applynow.0e7c50e0.js";import{B as V}from"./Backbutton.e95fbde2.js";import"./FormGroup.86db02e3.js";/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var L=I("filled","bookmark-filled","IconBookmarkFilled",[["path",{d:"M14 2a5 5 0 0 1 5 5v14a1 1 0 0 1 -1.555 .832l-5.445 -3.63l-5.444 3.63a1 1 0 0 1 -1.55 -.72l-.006 -.112v-14a5 5 0 0 1 5 -5h4z",key:"svg-0"}]]);const u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHCSURBVHgBtVI9SEJRGL1Kmj8gKIUZiRDWVg5NYjg0ShAqNDS5iFtk0OJkRSiEZCn+K4EiKmqK8sRBxwpcg0CMIKipQZ9Dvcpn94IPNN8zGjrLO++e+5373XM/ACZAqVRODyiLaQ+dwIpEIq98Pl9CEMQLl8udwXF8SqVSHWs0mkOo95nMgFQqFfp8vi+bzbb6Q2JXKhV7Pp8nEWeqZwcCgf5wV1ardWW4IJfLnaXT6auRIoqEQqE9+DmnWvT7/T2tVntRKBR6wWAQQ2tGo3G/2+1u0R7vdrsfYWgixF0u14PZbN6ktGg0SspkMgHixWLxxmAwLI51IBaL51qtFo64RCKRh8NhjNJgiE21Wj2LeLvdvlMoFPIxA6FQeG8ymZYQh2HupFKpD8QxDNsQCATLMMCngYGuVCrdjhl0Op1dvV6fRFyn02V5PN5RPB5/J0ny1GKxsKlsOBzOPOyUAHSAp5LwvuuAAZlM5i2bzR6ASfB6vT1AM2DVatUOg46B3+BwONbgW5PDJk6nc7tcLpNgwkiPoFar2ZPJ5DX17/F4Ppn2MjomEommSCS6hE94EovFFur1+jP4I1hw/vuNRsMO/hPffferi83Yg5kAAAAASUVORK5CYII=",J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFHSURBVHgBpVK9aoRAEN7dU45cfY9wjeVddX3gSCkqURCblJaBkOOK4EEgL5AzRcBWRZC8QUqTUgRJbZNKCFbB38waCPkxFy/3wcLuzHwz38wsQv2B/zSIolgzDFN+txdFQXzfZ+HaoC7M53MOyDddPkEQNtT/pbKqqsuqqq7oo2nek2L8QxCCmGYwGHw4xuPxGsmy3C1jO7CiKA3pqtIDbcH/kluQuq5fNE1b7kICySfQf40Xi4U8Go3Oh8PhFOzXSZLcBUFwL0lSybIszvO8CcPwgOO4KcRcwBqPyrJ8zrLslNBMkOXWdV0cx/FmMpkc8jz/CERk2zahCWaz2QOEHadpeuY4DoGtXFIe81lOFEVPcFZwXem6boC8GlStLcsyuuQzv/VlmiYlGGgLCGDnccOQ21VRIgvDeYVBVH3J8NsYz/MI2gdv0tRymmPTNfkAAAAASUVORK5CYII=",W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJqSURBVHgBhVNLiJJRFPa/qaPNwAwzkIuGGSYmYly0GMztoNa4UEHxESI+0WUMExUR0Uy0LCGi1QSKogYqCKW4CEbTUJFAV2UMEhHqIkMUH/j4tXPFGxZBF/7/Ps53vnPPd86lGHODx+MtisXit8PhkGL8NeCMk8/nJbVarUvOpiCFQnFteXn52Wg04tfrdW273WZsb2/HCKjb7e63Wi0WkJ82m80YYJy5XC7J1Ov1X0ql0n6j0bBubGy8wuC1tbWXPp9vkTgbjcYEOD/u9XonmUzmHpfLZSmVym+IzWbfKhQKtc3NzXIgEFBgMIfD+YFnh8MhnUWekmSz2dsymaxRqVR+UhTlRB6P5x0c3J3AIJE6nc6BxWK5Abe5r1arD1OplJ7YWCwWstvtx5FI5AWC/WRpaekBCBIngNXV1ZvlcrkSDodFMEclEslTYgM9ng8GgyO8RlKpdJem6fOhUEg2F1meTqc/4XWxWDxDCF0ltmAweNjv9yc7Ozu7CKLmx+PxiUAguEQAoMOF+TKB/QpZb21t8UDxR3w+/yOCxNPVavU1lOaMAJhM5oHNZjteX1/n6nQ6F0S+MyOhhELh55WVlQ+wjTM0Gk1y5oPkcrkHOxESkUi0R3rBbDY/NJlMp2QPQsbQ/O2i0agVGuXIarVOlU8kEu/xbDAYhlCMJ16v9zoWGJ/BjSkm/pHIEJV2uVznZsxOaIbLUAXa7/ezMR5Iabfbje3jqYdWq8XsaBZt/ib/GgRHQbpxSqVSJUGAvT8Y/0MA+dPQdW8oUPMrqPgdiwwfDbmNZzmN4cON9/uFwRpXB+FXt7CwcPEXuMYWmPb8oSAAAAAASUVORK5CYII=",X=U.button`
  background-color: #253180 !important;
  width:200px;
  border-radius:10px!important;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1a2447 !important; /* Lighter shade on hover */
  }
`,j=()=>{var p;const[e,N]=n.exports.useState(null),[Y,c]=n.exports.useState(!1),[K,x]=n.exports.useState(!1),[f,G]=n.exports.useState(!1),w=R(),[l,b]=n.exports.useState(localStorage.getItem("user_role")),[d,y]=n.exports.useState(localStorage.getItem("appliedJob")==="true"),[v,m]=n.exports.useState(!1),{uniqueid:o}=k();if(n.exports.useEffect(()=>{const s=()=>{b(localStorage.getItem("user_role"))};return window.addEventListener("storage",s),()=>{window.removeEventListener("storage",s)}},[]),n.exports.useEffect(()=>{var s;(s=location.state)!=null&&s.applied&&(y(!0),localStorage.setItem("appliedJob","true"))},[location.state]),n.exports.useEffect(()=>{(async()=>{c(!0);try{const i=localStorage.getItem("authToken"),r=await B.get(`https://bapi.reownlogics.com/api/job-detail/${o}`,{headers:{Authorization:`Bearer ${i}`}});N(r.data),console.log("JobDetail",r.data)}catch{x("Failed to fetch JobDetail details")}finally{c(!1)}})()},[]),!e)return t("div",{className:"d-flex justify-content-center align-items-center fs-3",style:{height:"calc(100vh - 170px)"},children:[a(O,{}),a("span",{className:"fs-2",style:{paddingBottom:"6px",paddingLeft:"5px"}})]});const A=(e==null?void 0:e.id)||"",F=()=>{if(!o||!A){console.error("Navigation error: uniqueid or id is missing");return}w(`/apply/now/${o}/${A}`)},C=s=>{const i=new Date(s),r={weekday:"short",year:"numeric",month:"numeric",day:"numeric"};return i.toLocaleDateString("en-US",r)},S=()=>{const s=`${window.location.origin}/jobdetail/${o}`;navigator.clipboard.writeText(s).then(()=>{m(!0),setTimeout(()=>m(!1),2e3)}).catch(i=>console.error("Failed to copy:",i))};return a(E,{children:t("div",{className:"container py-6 my-4",children:[a(V,{}),t("div",{className:"d-flex justify-content-start align-item-center my-2 py-50",children:[a("img",{src:P,alt:"QR Code",className:"img-fluid me-2",width:"65"}),a("span",{style:{color:"#253180",fontSize:"38px"},children:"Bona Fide"})]}),t(M,{children:[a(h,{xl:"8",lg:"8",sm:"12",xs:"12",children:t(g,{className:"bg-white p-2",style:{borderRadius:"20px"},children:[t("div",{className:"d-flex justify-content-between alig-item-center mobile-column",children:[a("span",{style:{fontSize:"20px",color:"#253180"},children:e==null?void 0:e.title}),t("div",{className:"d-flex align-item-center mobt",children:[l!=="employee"&&l!=="hr"&&l!=="assistant"&&l!=="manager"&&t(X,{className:"me-2",onClick:F,disabled:d,children:[" ",d?"Applied":"Apply Now"]}),t("div",{className:"rounded border bg-light p-1 d-flex flex-column align-items-center justify-content-center me-2 ",children:[a(L,{size:20,onClick:S,style:{cursor:"pointer"}}),v&&a("span",{className:"text-green-600 text-sm mt-1",children:"URL copied!"})]})]})]}),t("div",{className:"text-muted",children:[a("span",{style:{color:"#0062FF"},children:" Hiring Lead"}),a("img",{src:u,alt:"location",className:"img-fluid ms-2",width:"20"}),a("span",{children:e==null?void 0:e.location})]}),t("div",{className:"d-flex gap-2 mt-2",children:[a("div",{className:"px-1 py-1 bg-light rounded",children:t("p",{className:"mb-0",children:["   ",a("img",{src:J,alt:"briefcase",className:"img-fluid me-1",width:"20"})," ",e==null?void 0:e.job_type]})}),a("div",{className:"px-1 py-1 bg-light rounded",children:t("p",{className:"mb-0",children:["   ",a("img",{src:u,alt:"Location",className:"img-fluid me-1",width:"20"}),e==null?void 0:e.job_location]})}),a("div",{className:"px-1 py-1 bg-light rounded",children:t("p",{className:"mb-0",children:["   ",a("img",{src:W,alt:"money",className:"img-fluid me-1",width:"20"}),e==null?void 0:e.compensation]})})]}),t("div",{className:"mt-4",children:[a("h6",{children:"About this Job:"}),a("p",{children:e==null?void 0:e.description})]})]})}),a(h,{xl:"4",lg:"4",sm:"12",children:t(g,{className:"bg-white p-2 rounded-4",children:[a("div",{className:"rounded p-1 mb-1",style:{background:"#F3F3F3"},children:t("div",{className:"d-flex align-item-center",children:[a("h6",{className:"bold me-2",children:"Location:"}),a("span",{children:e==null?void 0:e.location})]})}),a("div",{className:"rounded p-1 mb-1",style:{background:"#F3F3F3"},children:t("div",{className:"d-flex align-item-center",children:[a("h6",{className:"bold me-2",children:"Department:"}),a("span",{children:(p=e==null?void 0:e.department)==null?void 0:p.name})]})}),a("div",{className:"rounded p-1 mb-1",style:{background:"#F3F3F3"},children:t("div",{className:"d-flex align-item-center",children:[a("h6",{className:"bold me-2",children:"Employment Type:"}),a("span",{children:e==null?void 0:e.job_type})]})}),a("div",{className:"rounded p-1 mb-1",style:{background:"#F3F3F3"},children:t("div",{className:"d-flex align-item-center",children:[a("h6",{className:"bold me-2",children:"Minimum Experience:"}),a("span",{children:e==null?void 0:e.min_experience})]})}),a("div",{className:"rounded p-1 mb-1",style:{background:"#F3F3F3"},children:t("div",{className:"d-flex align-item-center",children:[a("h6",{className:"bold me-2",children:"Salary:"}),t("span",{children:[e==null?void 0:e.compensation," /Per Month"]})]})}),a("div",{className:"rounded p-1 mb-1",style:{background:"#F3F3F3"},children:t("div",{className:"d-flex align-item-center",children:[a("h6",{className:"bold me-2",children:"Date Posted:"}),a("span",{children:C(e==null?void 0:e.created_at)})]})})]})}),f&&a(Q,{})]})]})})};export{j as default};
