import{r as c,a6 as N,j as t,v as a,K as T,L as A}from"./index.021d50c3.js";import{R,c as L,C as D,b as I,s as M,S as $,I as E,f as z,g as B,h as P,T as Y,W as O,Y as G,Z as U,$ as H,a0 as K}from"./App.1f34475c.js";import{h as V}from"./moment.68d8b8f0.js";import{C as W}from"./createhelpdesk.dfbfbc2f.js";import{C as Z,a as q}from"./CardTitle.81b7bacf.js";import{c as F,C as J,a as Q,b as X,d as ee,I as te,e as ne}from"./c5.584927f1.js";import{C as re}from"./c6.4d79638f.js";function ae(){var d,o,p,k,w,g,y,h,m,n,s,u;const[e,l]=c.exports.useState(null),f=N(),_=async()=>{try{const r=localStorage.getItem("authToken"),i=localStorage.getItem("user_id");if(!r){window.location.href="/login",console.error("No token found, please login.");return}const v=await T.get(`https://bapi.reownlogics.com/api/employee_dashboard/${i}`,{headers:{Authorization:`Bearer ${r}`}});l(v.data||{})}catch(r){console.error("Error fetching ticket stats:",r),l({})}};if(c.exports.useEffect(()=>{_()},[]),e===null)return t("div",{className:"d-flex justify-content-center align-items-center gap-2 mb-2",children:"Loading Stats..."});if(!Object.values(e).some(r=>typeof r=="number"&&r>0))return t("div",{className:"text-center p-4",children:"No stats available"});const x=[{key:"total_tickets",label:"Total Tickets",value:(d=e==null?void 0:e.total_tickets)!=null?d:0,percentage:(o=e==null?void 0:e.percentage_change_total)!=null?o:0,img:F,trend:(e==null?void 0:e.percentage_change_total)>0?"up":(e==null?void 0:e.percentage_change_total)<0?"down":"neutral"},{key:"completed_tickets",label:"Completed Tickets",value:(p=e==null?void 0:e.completed_tickets)!=null?p:0,percentage:(k=e==null?void 0:e.percentage_change_completed)!=null?k:0,img:J,trend:(e==null?void 0:e.percentage_change_completed)>0?"up":(e==null?void 0:e.percentage_change_completed)<0?"down":"neutral"},{key:"pending_tickets",label:"Pending Tickets",value:(w=e==null?void 0:e.pending_tickets)!=null?w:0,percentage:(g=e==null?void 0:e.percentage_change_pending)!=null?g:0,img:Q,trend:(e==null?void 0:e.percentage_change_pending)>0?"up":(e==null?void 0:e.percentage_change_pending)<0?"down":"neutral"},{key:"inprogress_tickets",label:"In Progress Tickets",value:(y=e==null?void 0:e.inprogress_tickets)!=null?y:0,percentage:(h=e==null?void 0:e.percentage_change_inprogress)!=null?h:0,img:X,trend:(e==null?void 0:e.percentage_change_inprogress)>0?"up":(e==null?void 0:e.percentage_change_inprogress)<0?"down":"neutral"},{key:"Reopen",label:"Reopen",value:(m=e==null?void 0:e.reopen_tickets)!=null?m:0,percentage:(n=e==null?void 0:e.percentage_change_reopen)!=null?n:0,img:ee,trend:(e==null?void 0:e.percentage_change_reopen)>0?"up":(e==null?void 0:e.percentage_change_reopen)<0?"down":"neutral"},{key:"Closed-Rejected",label:"Closed-Rejected",value:(s=e==null?void 0:e.closed_tickets)!=null?s:0,percentage:(u=e==null?void 0:e.percentage_change_closed)!=null?u:0,img:re,trend:(e==null?void 0:e.percentage_change_closed)>0?"up":(e==null?void 0:e.percentage_change_closed)<0?"down":"neutral"}],C={"Pending Tickets":2,"In Progress Tickets":3,"Completed Tickets":4,Reopen:6,"Closed-Rejected":7},b=r=>{const i=C[r];r==="In Progress Tickets"?f("/in-progress-tickets"):i&&f(`/tickets/${i}`)};return t("div",{children:t(R,{children:x.map((r,i)=>t(L,{sm:"6",md:"4",children:t(D,{className:"ticket-card bg-white",onClick:()=>b(r.label),style:{borderRadius:"30px"},children:a(I,{children:[a("div",{className:"d-flex justify-content-between",children:[a(Z,{tag:"h6",className:"text-muted pe-auto",children:[r.label,t("h3",{className:"mt-2",children:r.value})]}),r.img&&t("img",{src:r.img,alt:"Icon",style:{width:60,height:60,marginLeft:"10px"}})]}),a("div",{className:"d-flex align-items-center",children:[r.trend==="up"&&t(te,{size:16,style:{color:"green"}}),r.trend==="down"&&t(ne,{size:16,style:{color:"red"}}),a("span",{className:"text-primary ms-1",children:[r.percentage,"%"]}),r.trend!=="neutral"&&t(q,{className:"text-muted ms-1",children:r.trend==="up"?"Up from yesterday":"Down from yesterday"})]})]})})},i))})})}const S=M.button`
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
`,ge=()=>{const e=N();c.exports.useState(!1),c.exports.useState([]);const[l,f]=c.exports.useState(""),[_,j]=c.exports.useState("newest"),[x,C]=c.exports.useState([]);c.exports.useState(!1);const[b,d]=c.exports.useState(!1),o=localStorage.getItem("user_role"),p=async()=>{d(!0);try{const n=localStorage.getItem("authToken"),s=localStorage.getItem("user_id");if(!n){e("/login"),console.error("No token found, please login.");return}const u=await T.get("https://bapi.reownlogics.com/api/help-desk",{params:{employee_id:s},headers:{Authorization:`Bearer ${n}`}});let r=u.data;r.sort((i,v)=>new Date(v.created_at)-new Date(i.created_at)),C(r.slice(0,5)),console.log("employee data data",u.data)}catch(n){console.error("Error fetching employee data: ",n)}finally{d(!1)}};c.exports.useEffect(()=>{p()},[]);const k=(n,s)=>_==="newest"?new Date(s.createdAt)-new Date(n.createdAt):_==="oldest"?new Date(n.createdAt)-new Date(s.createdAt):0,w=x.filter(n=>n.title.toLowerCase().includes(l.toLowerCase())).sort(k),[g,y]=c.exports.useState(!1),h=()=>{y(!g)},m=()=>{const n=localStorage.getItem("user_id");o==="assistant"?e(`/assistant_dashboard/${n}`):(o==="manager"||o==="hr")&&e(`/manager_dashboard/${n}`)};return b?a("div",{className:"d-flex justify-content-center align-items-center fs-3",style:{height:"calc(100vh - 170px)"},children:[t($,{}),t("span",{className:"fs-2",style:{paddingBottom:"6px",paddingLeft:"5px"}})]}):a("div",{children:[a("div",{className:"d-flex justify-content-end align-items-center mb-2",children:[o==="assistant"&&t(S,{onClick:m,children:"Assigned Tickets"}),(o==="manager"||o==="hr")&&t(S,{onClick:m,children:"Managed Tickets"}),t(S,{onClick:h,className:"ms-1",children:"+ Create New"}),t(W,{isOpen:g,toggle:h,refreshTickets:p})]}),t(ae,{}),a(D,{className:"bg-white ticket-card",children:[a("div",{className:"p-2 d-flex justify-content-between align-items-center",children:[t("div",{children:t("h3",{children:"Recent Ticket"})}),a("div",{className:"d-flex align-items-center justify-content-end",children:[a(E,{className:"mr-3",children:[t(z,{children:t(B,{size:16})}),t(P,{placeholder:"Search by name",value:l,onChange:n=>f(n.target.value)})]}),t(A,{to:"/alltickets",style:{width:"50%"},className:"ms-1",children:"View All"})]})]}),t(I,{children:a(Y,{striped:!0,responsive:!0,children:[t("thead",{children:a("tr",{children:[t("th",{children:"Name"}),t("th",{children:"Description"}),t("th",{children:"Department"}),t("th",{children:"Created"}),t("th",{children:"Actions"})]})}),t("tbody",{children:w.map(n=>a("tr",{children:[t("td",{children:n.title}),t("td",{children:n.description.length>3?`${n.description.slice(0,30)}...`:n.description}),t("td",{children:n.department.name}),t("td",{children:t("span",{style:{background:"#daf1df",padding:"6px",borderRadius:"100px"},children:V(n.created_at).format("YYYY-MM-DD hh:mm:ss A")})}),t("td",{children:a(O,{children:[t(G,{className:"pe-1",tag:"span",children:t(U,{size:15})}),t(H,{end:!0,children:t(K,{onClick:()=>e(`/ticket-detail/${n.id}`),children:t("span",{className:"align-middle ms-50",children:"Detail"})})})]})})]},n.id))})]})})]})]})};export{ge as default};
