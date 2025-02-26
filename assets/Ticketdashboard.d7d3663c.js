import{r as o,a6 as T,j as r,v as a,K as S,L as A}from"./index.77ed9b33.js";import{R,c as j,C as D,b as N,s as M,I as E,f as z,S as L,g as $,T as B,P,Q as Y,V as O,W as U,Y as G}from"./App.24656bef.js";import{h as H}from"./moment.68d8b8f0.js";import{C as V}from"./createhelpdesk.ae906216.js";import{C as K,a as Q}from"./CardTitle.8fb572a9.js";import{c as W,C as q,a as F,b as J,d as X,I as Z,e as ee}from"./c5.34e01369.js";import{C as re}from"./c6.4d79638f.js";function te(){var i,k,f,w,s,y,p,g,t,l,h,m;const[e,d]=o.exports.useState(null),u=T(),_=async()=>{try{const n=localStorage.getItem("authToken"),c=localStorage.getItem("user_id");if(!n){window.location.href="/login",console.error("No token found, please login.");return}const I=await S.get(`https://bapi.reownlogics.com/api/employee_dashboard/${c}`,{headers:{Authorization:`Bearer ${n}`}});d(I.data)}catch(n){console.error("Error fetching ticket stats:",n),d(null)}};if(o.exports.useEffect(()=>{_()},[]),!e)return r("div",{className:"text-center p-2",children:"Loading stats..."});const v=[{key:"total_tickets",label:"Total Tickets",value:(i=e==null?void 0:e.total_tickets)!=null?i:0,percentage:(k=e==null?void 0:e.percentage_change_total)!=null?k:0,img:W,trend:(e==null?void 0:e.percentage_change_total)>0?"up":(e==null?void 0:e.percentage_change_total)<0?"down":"neutral"},{key:"completed_tickets",label:"Completed Tickets",value:(f=e==null?void 0:e.completed_tickets)!=null?f:0,percentage:(w=e==null?void 0:e.percentage_change_completed)!=null?w:0,img:q,trend:(e==null?void 0:e.percentage_change_completed)>0?"up":(e==null?void 0:e.percentage_change_completed)<0?"down":"neutral"},{key:"pending_tickets",label:"Pending Tickets",value:(s=e==null?void 0:e.pending_tickets)!=null?s:0,percentage:(y=e==null?void 0:e.percentage_change_pending)!=null?y:0,img:F,trend:(e==null?void 0:e.percentage_change_pending)>0?"up":(e==null?void 0:e.percentage_change_pending)<0?"down":"neutral"},{key:"inprogress_tickets",label:"In Progress Tickets",value:(p=e==null?void 0:e.inprogress_tickets)!=null?p:0,percentage:(g=e==null?void 0:e.percentage_change_inprogress)!=null?g:0,img:J,trend:(e==null?void 0:e.percentage_change_inprogress)>0?"up":(e==null?void 0:e.percentage_change_inprogress)<0?"down":"neutral"},{key:"Reopen",label:"Reopen",value:(t=e==null?void 0:e.reopen_tickets)!=null?t:0,percentage:(l=e==null?void 0:e.percentage_change_reopen)!=null?l:0,img:X,trend:(e==null?void 0:e.percentage_change_reopen)>0?"up":(e==null?void 0:e.percentage_change_reopen)<0?"down":"neutral"},{key:"Closed-Rejected",label:"Closed-Rejected",value:(h=e==null?void 0:e.closed_tickets)!=null?h:0,percentage:(m=e==null?void 0:e.percentage_change_closed)!=null?m:0,img:re,trend:(e==null?void 0:e.percentage_change_closed)>0?"up":(e==null?void 0:e.percentage_change_closed)<0?"down":"neutral"}],C={"Pending Tickets":2,"In Progress Tickets":3,"Completed Tickets":4,Reopen:6,"Closed-Rejected":7},x=n=>{const c=C[n];n==="In Progress Tickets"?u("/in-progress-tickets"):c&&u(`/tickets/${c}`)};return r("div",{children:r(R,{children:v.map((n,c)=>r(j,{sm:"6",md:"4",children:r(D,{className:"ticket-card bg-white",onClick:()=>x(n.label),style:{borderRadius:"30px"},children:a(N,{children:[a("div",{className:"d-flex justify-content-between",children:[a(K,{tag:"h6",className:"text-muted pe-auto",children:[n.label,r("h3",{className:"mt-2",children:n.value})]}),n.img&&r("img",{src:n.img,alt:"Icon",style:{width:60,height:60,marginLeft:"10px"}})]}),a("div",{className:"d-flex align-items-center",children:[n.trend==="up"&&r(Z,{size:16,style:{color:"green"}}),n.trend==="down"&&r(ee,{size:16,style:{color:"red"}}),a("span",{className:"text-primary ms-1",children:[n.percentage,"%"]}),n.trend!=="neutral"&&r(Q,{className:"text-muted ms-1",children:n.trend==="up"?"Up from yesterday":"Down from yesterday"})]})]})})},c))})})}const b=M.button`
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
`,se=()=>{const e=T();o.exports.useState(!1),o.exports.useState([]);const[d,u]=o.exports.useState(""),[_,v]=o.exports.useState("newest"),[C,x]=o.exports.useState([]);o.exports.useState(!1);const i=localStorage.getItem("user_role"),k=async()=>{try{const t=localStorage.getItem("authToken"),l=localStorage.getItem("user_id");if(!t){e("/login"),console.error("No token found, please login.");return}const h=await S.get("https://bapi.reownlogics.com/api/help-desk",{params:{employee_id:l},headers:{Authorization:`Bearer ${t}`}});let m=h.data;m.sort((n,c)=>new Date(c.created_at)-new Date(n.created_at)),x(m.slice(0,5)),console.log("employee data data",h.data)}catch(t){console.error("Error fetching employee data: ",t)}};o.exports.useEffect(()=>{k()},[]);const f=(t,l)=>_==="newest"?new Date(l.createdAt)-new Date(t.createdAt):_==="oldest"?new Date(t.createdAt)-new Date(l.createdAt):0,w=C.filter(t=>t.title.toLowerCase().includes(d.toLowerCase())).sort(f),[s,y]=o.exports.useState(!1),p=()=>{y(!s)},g=()=>{const t=localStorage.getItem("user_id");i==="assistant"?e(`/assistant_dashboard/${t}`):i==="manager"&&e(`/manager_dashboard/${t}`)};return a("div",{children:[a("div",{className:"d-flex justify-content-end align-items-center mb-2",children:[i==="assistant"&&r(b,{onClick:g,children:"Assigned Tickets"}),i==="manager"&&r(b,{onClick:g,children:"Managed Tickets"}),r(b,{onClick:p,children:"+ Create New"}),r(V,{isOpen:s,toggle:p})]}),r(te,{}),a(D,{className:"bg-white ticket-card",children:[a("div",{className:"p-2 d-flex justify-content-between align-items-center",children:[r("div",{children:r("h3",{children:"Recent Ticket"})}),a("div",{className:"d-flex align-items-center justify-content-end",children:[a(E,{className:"mr-3",children:[r(z,{children:r(L,{size:16})}),r($,{placeholder:"Search by name",value:d,onChange:t=>u(t.target.value)})]}),r(A,{to:"/alltickets",style:{width:"50%"},className:"ms-1",children:"View All"})]})]}),r(N,{children:a(B,{striped:!0,responsive:!0,children:[r("thead",{children:a("tr",{children:[r("th",{children:"Name"}),r("th",{children:"Description"}),r("th",{children:"Department"}),r("th",{children:"Created"}),r("th",{children:"Actions"})]})}),r("tbody",{children:w.map(t=>a("tr",{children:[r("td",{children:t.title}),r("td",{children:t.description}),r("td",{children:t.department.name}),r("td",{children:r("span",{style:{background:"#daf1df",padding:"6px",borderRadius:"100px"},children:H(t.created_at).format("YYYY-MM-DD hh:mm:ss A")})}),r("td",{children:a(P,{children:[r(Y,{className:"pe-1",tag:"span",children:r(O,{size:15})}),r(U,{end:!0,children:r(G,{onClick:()=>e(`/ticket-detail/${t.id}`),children:r("span",{className:"align-middle ms-50",children:"Detail"})})})]})})]},t.id))})]})})]})]})};export{se as default};
