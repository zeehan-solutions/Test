import{r as o,a6 as b,j as t,v as a,K as v,L as D}from"./index.fe43fbf5.js";import{R as I,c as A,C,b as T,s as R,I as $,f as j,S as M,g as E,T as z,Q as L,V as B,W as P,Y,Z as O}from"./App.9644e084.js";import{h as U}from"./moment.68d8b8f0.js";import{C as G}from"./createhelpdesk.7e5331ba.js";import{C as H,a as V}from"./CardTitle.81dc1aec.js";import{c as K,C as Q,a as W,b as Z,d as q,I as F,e as J}from"./c5.e569d3ae.js";function X(){var m,f,d,k,y,n,s,p,g,_;const[e,l]=o.exports.useState(null),i=b(),h=async()=>{try{const r=localStorage.getItem("authToken"),c=localStorage.getItem("user_id");if(!r){window.location.href="/login",console.error("No token found, please login.");return}const S=await v.get(`https://bapi.reownlogics.com/api/assistant_dashboard/${c}`,{headers:{Authorization:`Bearer ${r}`}});l(S.data||{})}catch(r){console.error("Error fetching ticket stats:",r),l({})}};if(o.exports.useEffect(()=>{h()},[]),e===null)return t("div",{className:"text-center p-2",children:"Loading stats..."});if(!Object.values(e).some(r=>typeof r=="number"&&r>0))return t("div",{className:"text-center p-4",children:"No stats available"});const w=[{key:"total_tickets",label:"Total Tickets",value:(m=e==null?void 0:e.total_tickets)!=null?m:0,percentage:(f=e==null?void 0:e.percentage_change_total)!=null?f:0,img:K,trend:(e==null?void 0:e.percentage_change_total)>0?"up":(e==null?void 0:e.percentage_change_total)<0?"down":"neutral"},{key:"completed_tickets",label:"Completed Tickets",value:(d=e==null?void 0:e.completed_tickets)!=null?d:0,percentage:(k=e==null?void 0:e.percentage_change_completed)!=null?k:0,img:Q,trend:(e==null?void 0:e.percentage_change_completed)>0?"up":(e==null?void 0:e.percentage_change_completed)<0?"down":"neutral"},{key:"pending_tickets",label:"Pending Tickets",value:(y=e==null?void 0:e.pending_tickets)!=null?y:0,percentage:(n=e==null?void 0:e.percentage_change_pending)!=null?n:0,img:W,trend:(e==null?void 0:e.percentage_change_pending)>0?"up":(e==null?void 0:e.percentage_change_pending)<0?"down":"neutral"},{key:"inprogress_tickets",label:"In Progress Tickets",value:(s=e==null?void 0:e.inprogress_tickets)!=null?s:0,percentage:(p=e==null?void 0:e.percentage_change_inprogress)!=null?p:0,img:Z,trend:(e==null?void 0:e.percentage_change_inprogress)>0?"up":(e==null?void 0:e.percentage_change_inprogress)<0?"down":"neutral"},{key:"Reopen",label:"Reopen",value:(g=e==null?void 0:e.reopen_tickets)!=null?g:0,percentage:(_=e==null?void 0:e.percentage_change_reopen)!=null?_:0,img:q,trend:(e==null?void 0:e.percentage_change_reopen)>0?"up":(e==null?void 0:e.percentage_change_reopen)<0?"down":"neutral"}],x={"Pending Tickets":2,"In Progress Tickets":"progress","Completed Tickets":"completed",Reopen:"reopen","Closed-Rejected":7},u=r=>{const c=x[r];r==="In Progress Tickets"?i(`/assistantprogress/${c}`):r==="Completed Tickets"?i(`/assistantview/${c}`):r==="Reopen"?i(`/assistantview/${c}`):c&&i(`/rolestats/${c}`)};return t("div",{children:t(I,{children:w.map((r,c)=>t(A,{sm:"6",md:"4",children:t(C,{className:"ticket-card bg-white",onClick:()=>u(r.label),style:{borderRadius:"30px"},children:a(T,{children:[a("div",{className:"d-flex justify-content-between",children:[a(H,{tag:"h6",className:"text-muted pe-auto",children:[r.label,t("h3",{className:"mt-2",children:r.value})]}),r.img&&t("img",{src:r.img,alt:"Icon",style:{width:60,height:60,marginLeft:"10px"}})]}),a("div",{className:"d-flex align-items-center",children:[r.trend==="up"&&t(F,{size:16,style:{color:"green"}}),r.trend==="down"&&t(J,{size:16,style:{color:"red"}}),a("span",{className:"text-primary ms-1",children:[r.percentage,"%"]}),r.trend!=="neutral"&&t(V,{className:"text-muted ms-1",children:r.trend==="up"?"Up from yesterday":"Down from yesterday"})]})]})})},c))})})}R.button`
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
`;const ce=()=>{const e=b();o.exports.useState(!1),o.exports.useState([]);const[l,i]=o.exports.useState(""),[h,N]=o.exports.useState("newest"),[w,x]=o.exports.useState([]);o.exports.useState(!1);const u=async()=>{try{const n=localStorage.getItem("authToken"),s=localStorage.getItem("user_id");if(!n){e("/login"),console.error("No token found, please login.");return}const p=await v.get(`https://bapi.reownlogics.com/api/help-desk?assigned_to_id=${s}`,{headers:{Authorization:`Bearer ${n}`}});let g=p.data;g.sort((_,r)=>new Date(r.created_at)-new Date(_.created_at)),x(g.slice(0,5)),console.log("employee data data",p.data)}catch(n){console.error("Error fetching employee data: ",n)}};o.exports.useEffect(()=>{u()},[]);const m=(n,s)=>h==="newest"?new Date(s.createdAt)-new Date(n.createdAt):h==="oldest"?new Date(n.createdAt)-new Date(s.createdAt):0,f=w.filter(n=>n.title.toLowerCase().includes(l.toLowerCase())).sort(m),[d,k]=o.exports.useState(!1);return a("div",{children:[t("div",{className:"d-flex justify-content-end align-items-center mb-2",children:t(G,{isOpen:d,toggle:()=>{k(!d)},refreshTickets:u})}),t(X,{}),a(C,{className:"bg-white ticket-card",children:[a("div",{className:"p-2 d-flex justify-content-between align-items-center",children:[t("div",{children:t("h3",{children:"Recent Ticket"})}),a("div",{className:"d-flex align-items-center justify-content-end",children:[a($,{className:"mr-3",children:[t(j,{children:t(M,{size:16})}),t(E,{placeholder:"Search by name",value:l,onChange:n=>i(n.target.value)})]}),t(D,{to:"/allassistanttickets",style:{width:"50%"},className:"ms-1",children:"View All"})]})]}),t(T,{children:a(z,{striped:!0,responsive:!0,children:[t("thead",{children:a("tr",{children:[t("th",{children:"Name"}),t("th",{children:"Description"}),t("th",{children:"Department"}),t("th",{children:"Created at"}),t("th",{children:"Actions"})]})}),t("tbody",{children:f.map(n=>a("tr",{children:[t("td",{children:n.title}),t("td",{children:n.description.length>3?`${n.description.slice(0,30)}...`:n.description}),t("td",{children:n.department.name}),t("td",{children:t("span",{style:{background:"#daf1df",padding:"6px",borderRadius:"100px"},children:U(n.created_at).format("YYYY-MM-DD hh:mm:ss A")})}),t("td",{children:a(L,{children:[t(B,{className:"pe-1",tag:"span",children:t(P,{size:15})}),t(Y,{end:!0,children:t(O,{onClick:()=>e(`/ticket-detail/${n.id}`),children:t("span",{className:"align-middle ms-50",children:"Detail"})})})]})})]},n.id))})]})})]})]})};export{ce as default};
