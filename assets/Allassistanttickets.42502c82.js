import{r as s,a6 as P,v as r,j as e,B as C,K as O}from"./index.fe43fbf5.js";import{s as y,C as z,I as L,f as $,S as q,g as G,b as H,T as F,Q as K,V as Q,W as U,Y as V,Z as W}from"./App.9644e084.js";import{h as p}from"./moment.68d8b8f0.js";import{C as Z}from"./createhelpdesk.7e5331ba.js";const J=y.button`
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
`;y.button`
  background-color:rgb(231, 231, 231) !important;
  width: 300px;
  padding: 10px;
  color: black;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
`;const se=()=>{const[d,D]=s.exports.useState(!1),[A,u]=s.exports.useState([]),[g,v]=s.exports.useState(""),[m,N]=s.exports.useState([]),[f,X]=s.exports.useState("newest");s.exports.useState(!1);const[a,M]=s.exports.useState(1),[c]=s.exports.useState(5),i=P(),[x,E]=s.exports.useState(!1),w=()=>{E(!x)},l=localStorage.getItem("authToken"),T=localStorage.getItem("user_id"),k=async()=>{try{if(l){const t=await O.get(`https://bapi.reownlogics.com/api/help-desk?assigned_to_id=${T}`,{headers:{Authorization:`Bearer ${l}`}});console.log("sortedemployees",t.data);const n=t.data.sort((o,j)=>new Date(j.created_at)-new Date(o.created_at));N(n)}else console.log("No token found. Please log in again."),i("/login")}catch(t){console.error("Error fetching employee data: ",t)}};s.exports.useEffect(()=>{k()},[l,i]);const Y=(t,n)=>f==="newest"?new Date(n.createdAt)-new Date(t.createdAt):f==="oldest"?new Date(t.createdAt)-new Date(n.createdAt):0,h=m.filter(t=>t.title.toLowerCase().includes(g.toLowerCase())).sort(Y),b=a*c,_=b-c,B=h.slice(_,b),S=t=>M(t),I=()=>{D(!d),u(d?[]:m.map(t=>t.id))},R=t=>{u(n=>n.includes(t)?n.filter(o=>o!==t):[...n,t])};return r("div",{children:[r("div",{className:"d-flex justify-content-end align-items-center mb-2",children:[e(J,{onClick:w,children:"+ Create New"}),e(Z,{isOpen:x,toggle:w,refreshTickets:k})]}),r(z,{children:[r("div",{className:"p-2 d-flex justify-content-between align-items-center",children:[e("div",{children:e("h3",{children:"Recent Ticket"})}),e("div",{className:"d-flex align-items-center justify-content-end",children:r(L,{className:"mr-3",children:[e($,{children:e(q,{size:16})}),e(G,{placeholder:"Search by name",value:g,onChange:t=>v(t.target.value)})]})})]}),r(H,{children:[r(F,{striped:!0,responsive:!0,children:[e("thead",{children:r("tr",{children:[e("th",{children:e("input",{type:"checkbox",checked:d,onChange:I})}),e("th",{children:"Name"}),e("th",{children:"Requested Date"}),e("th",{children:"Requested Time"}),e("th",{children:"Assign By"}),e("th",{children:"Rating"}),e("th",{children:"Created At"}),e("th",{children:"Actions"})]})}),e("tbody",{children:B.map(t=>{var n,o;return r("tr",{children:[e("td",{children:e("input",{type:"checkbox",checked:A.includes(t.id),onChange:()=>R(t.id)})}),e("td",{children:t.title}),e("td",{children:p(t.created_at).format("YYYY-MM-DD")}),e("td",{children:p(t.created_at).format("hh:mm:ss A")}),e("td",{children:(o=(n=t.department)==null?void 0:n.manager)!=null&&o.name?t.department.manager.name:"N/A"}),e("td",{children:t.reviews.rating}),e("td",{children:e("span",{style:{background:"#daf1df",padding:"6px",borderRadius:"100px"},children:p(t.created_at).format("YYYY-MM-DD hh:mm:ss A")})}),e("td",{children:r(K,{children:[e(Q,{className:"pe-1",tag:"span",children:e(U,{size:15})}),e(V,{end:!0,children:e(W,{onClick:()=>i(`/ticket-detail/${t.id}`),children:e("span",{className:"align-middle ms-50",children:"Detail"})})})]})})]},t.id)})})]}),r("div",{className:"d-flex justify-content-between align-items-center mt-3",children:[e(C,{disabled:a===1,onClick:()=>S(a-1),children:"Previous"}),r("div",{children:["Page ",a," of ",Math.ceil(h.length/c)]}),e(C,{disabled:a===Math.ceil(h.length/c),onClick:()=>S(a+1),children:"Next"})]})]})]})]})};export{se as default};
