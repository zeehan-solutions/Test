import{r as a,K as I,j as n,M as j,v as l,L as D}from"./index.646e8ac6.js";import{s as B,S as E,C as L,I as M,f as $,g as O,h as P}from"./App.954e6202.js";import"./moment.ef14f9cc.js";import{C as z}from"./createhelpdesk.82c3a433.js";import{c as G,C as H,a as K,b as V,d as q,e as F,t as J}from"./tickettable.3f47a7bc.js";import{C as Q}from"./c6.4d79638f.js";import{B as U}from"./Backbutton.93eeba5d.js";import"./CardTitle.a3f9ac64.js";function W(){var T,i,u,h,s,d,m,_,f,k,p,w;const[e,c]=a.exports.useState(null),x=I(),S=async()=>{try{const r=localStorage.getItem("authToken"),t=localStorage.getItem("user_id");if(!r){window.location.href="/login",console.error("No token found, please login.");return}const o=await j.get(`https://bapi.reownlogics.com/api/manager_dashboard/${t}`,{headers:{Authorization:`Bearer ${r}`}});c(o.data||{})}catch(r){console.error("Error fetching ticket stats:",r),c({})}};if(a.exports.useEffect(()=>{S()},[]),e===null)return n("div",{className:"text-center p-2",children:"Loading stats..."});if(!Object.values(e).some(r=>typeof r=="number"&&r>0))return n("div",{className:"text-center p-4",children:"No stats available"});const g=[{key:"total_tickets",label:"Total Tickets",value:(T=e==null?void 0:e.total_tickets)!=null?T:0,percentage:(i=e==null?void 0:e.percentage_change_total)!=null?i:0,img:G,trend:(e==null?void 0:e.percentage_change_total)>0?"up":(e==null?void 0:e.percentage_change_total)<0?"down":"neutral"},{key:"completed_tickets",label:"Completed Tickets",value:(u=e==null?void 0:e.completed_tickets)!=null?u:0,percentage:(h=e==null?void 0:e.percentage_change_completed)!=null?h:0,img:H,trend:(e==null?void 0:e.percentage_change_completed)>0?"up":(e==null?void 0:e.percentage_change_completed)<0?"down":"neutral"},{key:"pending_tickets",label:"Pending Tickets",value:(s=e==null?void 0:e.pending_tickets)!=null?s:0,percentage:(d=e==null?void 0:e.percentage_change_pending)!=null?d:0,img:K,trend:(e==null?void 0:e.percentage_change_pending)>0?"up":(e==null?void 0:e.percentage_change_pending)<0?"down":"neutral"},{key:"inprogress_tickets",label:"In Progress Tickets",value:(m=e==null?void 0:e.inprogress_tickets)!=null?m:0,percentage:(_=e==null?void 0:e.percentage_change_inprogress)!=null?_:0,img:V,trend:(e==null?void 0:e.percentage_change_inprogress)>0?"up":(e==null?void 0:e.percentage_change_inprogress)<0?"down":"neutral"},{key:"Reopen",label:"Reopen",value:(f=e==null?void 0:e.reopen_tickets)!=null?f:0,percentage:(k=e==null?void 0:e.percentage_change_reopen)!=null?k:0,img:q,trend:(e==null?void 0:e.percentage_change_reopen)>0?"up":(e==null?void 0:e.percentage_change_reopen)<0?"down":"neutral"},{key:"Closed-Rejected",label:"Closed-Rejected",value:(p=e==null?void 0:e.closed_tickets)!=null?p:0,percentage:(w=e==null?void 0:e.percentage_change_closed)!=null?w:0,img:Q,trend:(e==null?void 0:e.percentage_change_closed)>0?"up":(e==null?void 0:e.percentage_change_closed)<0?"down":"neutral"}],b={"Pending Tickets":2,"In Progress Tickets":3,"Completed Tickets":4,Reopen:6,"Closed-Rejected":7};return n("div",{children:n(F,{ticketData:g,handleCardClick:r=>{const t=b[r];t&&x(`/rolestats/${t}`)}})})}B.button`
  background-color: #0C1539 !important;
  width: 200px;
  padding: 10px;
  color: white;
  cursor: pointer;
  border-radius: 10px!important;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1a2447 !important; /* Lighter shade on hover */
  }
`;const oe=()=>{const e=I(),[c,x]=a.exports.useState(!1),[S,C]=a.exports.useState([]),[g,b]=a.exports.useState(""),[v,T]=a.exports.useState("newest"),[i,u]=a.exports.useState([]);a.exports.useState(!1);const[h,s]=a.exports.useState(!1),d=async()=>{s(!0);try{const t=localStorage.getItem("authToken"),o=localStorage.getItem("user_id");if(!t){e("/login"),console.error("No token found, please login.");return}const y=await j.get(`https://bapi.reownlogics.com/api/help-desk?department_manager_id=${o}`,{headers:{Authorization:`Bearer ${t}`}});let N=y.data;N.sort((R,A)=>new Date(A.created_at)-new Date(R.created_at)),u(N.slice(0,5)),console.log("employee data data",y.data)}catch(t){console.error("Error fetching employee data: ",t)}finally{s(!1)}};a.exports.useEffect(()=>{d()},[]);const m=(t,o)=>v==="newest"?new Date(o.createdAt)-new Date(t.createdAt):v==="oldest"?new Date(t.createdAt)-new Date(o.createdAt):0,_=i.filter(t=>t.title.toLowerCase().includes(g.toLowerCase())).sort(m),f=()=>{x(!c),C(c?[]:i.map(t=>t.id))},k=t=>{C(o=>o.includes(t)?o.filter(y=>y!==t):[...o,t])},[p,w]=a.exports.useState(!1),r=()=>{w(!p)};return h?l("div",{className:"d-flex justify-content-center align-items-center fs-3",style:{height:"calc(100vh - 170px)"},children:[n(E,{}),n("span",{className:"fs-2",style:{paddingBottom:"6px",paddingLeft:"5px"}})]}):l("div",{children:[n(U,{}),n("div",{className:"d-flex justify-content-end align-items-center",children:n(z,{isOpen:p,toggle:r,refreshTickets:d})}),n(W,{}),l(L,{className:"bg-white ticket-card",style:{borderRadius:"30px"},children:[l("div",{className:"p-2 d-flex justify-content-between align-items-center",children:[n("div",{children:n("h3",{children:"Recent Ticket"})}),l("div",{className:"d-flex align-items-center justify-content-end",children:[l(M,{className:"mr-3",children:[n($,{children:n(O,{size:16})}),n(P,{placeholder:"Search by name",value:g,onChange:t=>b(t.target.value)})]}),n(D,{to:"/allmanagertickets",style:{width:"50%"},className:"ms-1 viewall",children:"View All"})]})]}),n(J,{filteredEmployees:_,selectAll:c,selectedRows:S,handleSelectRow:k,handleSelectAll:f})]})]})};export{oe as default};
