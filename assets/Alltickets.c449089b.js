import{r as a,K as O,v as r,j as e,B as y,M as z}from"./index.0e991307.js";import{s as S,C as L,I as Y,f as $,g as q,h as G,b as H,T as F,Z as K,$ as U,a0 as Z,a1 as J,a2 as Q}from"./App.f2f7ddbf.js";import{h as C}from"./ticketstable.c660ffcc.js";import{C as V}from"./createhelpdesk.23221a72.js";import{B as W}from"./Backbutton.e95fbde2.js";const X=S.button`
  background-color: #0C1539 !important;
  width: 200px;
  padding: 10px;
  color: white;
  cursor: pointer;
  border-radius: 10px!important;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1a2447 !important;
  }
`;S.button`
  background-color:rgb(231, 231, 231) !important;
  width: 300px;
  padding: 10px;
  color: black;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
`;const oe=()=>{const[l,N]=a.exports.useState(!1),[D,p]=a.exports.useState([]),[u,A]=a.exports.useState(""),[m,v]=a.exports.useState([]),[g,ee]=a.exports.useState("newest");a.exports.useState(!1);const[n,B]=a.exports.useState(1),[c]=a.exports.useState(5),i=O(),[f,E]=a.exports.useState(!1),x=()=>{E(!f)},d=localStorage.getItem("authToken"),M=localStorage.getItem("user_id"),b=async()=>{try{if(d){const t=await z.get("https://bapi.reownlogics.com/api/help-desk",{params:{employee_id:M},headers:{Authorization:`Bearer ${d}`}});console.log("sortedemployees",t.data);const s=t.data.sort((o,_)=>new Date(_.created_at)-new Date(o.created_at));v(s)}else console.log("No token found. Please log in again."),i("/login")}catch(t){console.error("Error fetching employee data: ",t)}};a.exports.useEffect(()=>{b()},[d,i]);const T=(t,s)=>g==="newest"?new Date(s.createdAt)-new Date(t.createdAt):g==="oldest"?new Date(t.createdAt)-new Date(s.createdAt):0,h=m.filter(t=>t.title.toLowerCase().includes(u.toLowerCase())).sort(T),k=n*c,R=k-c,I=h.slice(R,k),w=t=>B(t),j=()=>{N(!l),p(l?[]:m.map(t=>t.id))},P=t=>{p(s=>s.includes(t)?s.filter(o=>o!==t):[...s,t])};return r("div",{children:[r("div",{className:"d-flex justify-content-between align-items-center",children:[e(W,{}),e(X,{className:"mb-2",onClick:x,children:"+ Create New"}),e(V,{isOpen:f,toggle:x,refreshTickets:b})]}),r(L,{className:"bg-white ticket-card",style:{borderRadius:"30px"},children:[r("div",{className:"p-2 d-flex justify-content-between align-items-center",children:[e("div",{children:e("h3",{children:"Recent Ticket"})}),e("div",{className:"d-flex align-items-center justify-content-end",children:r(Y,{className:"mr-3",children:[e($,{style:{borderRight:0},children:e(q,{size:16})}),e(G,{placeholder:"Search by name",value:u,onChange:t=>A(t.target.value),style:{borderLeft:0}})]})})]}),r(H,{children:[r(F,{responsive:!0,className:"table-ticket",children:[e("thead",{children:r("tr",{children:[e("th",{children:e("input",{type:"checkbox",checked:l,onChange:j})}),e("th",{children:"Name"}),e("th",{children:"Requested Date"}),e("th",{children:"Requested Time"}),e("th",{children:"Assign By"}),e("th",{children:"Actions"})]})}),e("tbody",{children:I.map(t=>{var s,o;return r("tr",{children:[e("td",{children:e("input",{type:"checkbox",checked:D.includes(t.id),onChange:()=>P(t.id)})}),e("td",{children:t.title}),e("td",{children:e("span",{style:{background:"rgba(58, 151, 76, 0.1)",padding:"10px",borderRadius:"100px",color:"#3A974C"},children:C(t.created_at).format("YYYY-MM-DD")})}),e("td",{children:C(t.created_at).format("hh:mm:ss A")}),e("td",{children:(o=(s=t.department)==null?void 0:s.manager)!=null&&o.name?t.department.manager.name:"N/A"}),e("td",{children:r(K,{children:[e(U,{className:"pe-1",tag:"span",children:e(Z,{size:15})}),e(J,{end:!0,children:e(Q,{onClick:()=>i(`/ticket-detail/${t.id}`),children:e("span",{className:"align-middle ms-50",children:"Detail"})})})]})})]},t.id)})})]}),r("div",{className:"d-flex justify-content-between align-items-center mt-3",children:[e(y,{disabled:n===1,onClick:()=>w(n-1),children:"Previous"}),r("div",{children:["Page ",n," of ",Math.ceil(h.length/c)]}),e(y,{disabled:n===Math.ceil(h.length/c),onClick:()=>w(n+1),children:"Next"})]})]})]})]})};export{oe as default};
