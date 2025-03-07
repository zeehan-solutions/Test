import{r,K as $,v as s,j as e,B as y,M as z}from"./index.0e991307.js";import{s as N,S as Y,C as G,I as H,f as q,g as F,h as K,b as U,T as Z,Z as J,$ as Q,a0 as V,a1 as W,a2 as X}from"./App.f2f7ddbf.js";import{h as C}from"./ticketstable.c660ffcc.js";import{C as ee}from"./createhelpdesk.23221a72.js";import{B as te}from"./Backbutton.e95fbde2.js";const se=N.button`
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
`;N.button`
  background-color:rgb(231, 231, 231) !important;
  width: 300px;
  padding: 10px;
  color: black;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
`;const le=()=>{const[i,v]=r.exports.useState(!1),[D,p]=r.exports.useState([]),[u,A]=r.exports.useState(""),[g,B]=r.exports.useState([]),[m,ne]=r.exports.useState("newest");r.exports.useState(!1);const[a,E]=r.exports.useState(1),[c]=r.exports.useState(5),[M,f]=r.exports.useState(!1),l=$(),[x,T]=r.exports.useState(!1),b=()=>{T(!x)},d=localStorage.getItem("authToken"),j=localStorage.getItem("user_id"),k=async()=>{f(!0);try{if(d){const t=await z.get(`https://bapi.reownlogics.com/api/help-desk?department_manager_id=${j}`,{headers:{Authorization:`Bearer ${d}`}});console.log("sortedemployees",t.data);const n=t.data.sort((o,O)=>new Date(O.created_at)-new Date(o.created_at));B(n)}else console.log("No token found. Please log in again."),l("/login")}catch(t){console.error("Error fetching employee data: ",t)}finally{f(!1)}};r.exports.useEffect(()=>{k()},[d,l]);const I=(t,n)=>m==="newest"?new Date(n.createdAt)-new Date(t.createdAt):m==="oldest"?new Date(t.createdAt)-new Date(n.createdAt):0,h=g.filter(t=>t.title.toLowerCase().includes(u.toLowerCase())).sort(I),w=a*c,_=w-c,P=h.slice(_,w),S=t=>E(t),R=()=>{v(!i),p(i?[]:g.map(t=>t.id))},L=t=>{p(n=>n.includes(t)?n.filter(o=>o!==t):[...n,t])};return M?s("div",{className:"d-flex justify-content-center align-items-center fs-3",style:{height:"calc(100vh - 170px)"},children:[e(Y,{}),e("span",{className:"fs-2",style:{paddingBottom:"6px",paddingLeft:"5px"}})]}):s("div",{children:[s("div",{className:"d-flex justify-content-between align-items-center",children:[e(te,{}),e(se,{className:"mb-2",onClick:b,children:"+ Create New"}),e(ee,{isOpen:x,toggle:b,refreshTickets:k})]}),s(G,{className:"bg-white ticket-card",style:{borderRadius:"30px"},children:[s("div",{className:"p-2 d-flex justify-content-between align-items-center",children:[e("div",{children:e("h3",{children:"Recent Ticket"})}),e("div",{className:"d-flex align-items-center justify-content-end",children:s(H,{className:"mr-3",children:[e(q,{children:e(F,{size:16})}),e(K,{placeholder:"Search by name",value:u,onChange:t=>A(t.target.value)})]})})]}),s(U,{children:[s(Z,{responsive:!0,className:"table-ticket",children:[e("thead",{children:s("tr",{children:[e("th",{children:e("input",{type:"checkbox",checked:i,onChange:R})}),e("th",{children:"Name"}),e("th",{children:"Description"}),e("th",{children:"Assign By"}),e("th",{children:"Created at"}),e("th",{children:"Requested Time"}),e("th",{children:"Actions"})]})}),e("tbody",{children:P.map(t=>{var n,o;return s("tr",{children:[e("td",{children:e("input",{type:"checkbox",checked:D.includes(t.id),onChange:()=>L(t.id)})}),e("td",{children:t.title}),e("td",{children:t.description.length>3?`${t.description.slice(0,30)}...`:t.description}),e("td",{children:(o=(n=t.department)==null?void 0:n.manager)!=null&&o.name?t.department.manager.name:"N/A"}),e("td",{children:e("span",{style:{background:"rgba(58, 151, 76, 0.1)",padding:"10px",borderRadius:"100px",color:"#3A974C"},children:C(t.created_at).format("YYYY-MM-DD ")})}),e("td",{children:e("span",{children:C(t.created_at).format("hh:mm:ss A")})}),e("td",{children:s(J,{children:[e(Q,{className:"pe-1",tag:"span",children:e(V,{size:15})}),e(W,{end:!0,children:e(X,{onClick:()=>l(`/ticket-detail/${t.id}`),children:e("span",{className:"align-middle ms-50",children:"Detail"})})})]})})]},t.id)})})]}),s("div",{className:"d-flex justify-content-between align-items-center mt-3",children:[e(y,{disabled:a===1,onClick:()=>S(a-1),children:"Previous"}),s("div",{children:["Page ",a," of ",Math.ceil(h.length/c)]}),e(y,{disabled:a===Math.ceil(h.length/c),onClick:()=>S(a+1),children:"Next"})]})]})]})]})};export{le as default};
