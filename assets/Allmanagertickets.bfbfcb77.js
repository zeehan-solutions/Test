import{r as s,a6 as P,v as r,j as e,B as C,K as O}from"./index.fe43fbf5.js";import{s as y,C as z,I as q,f as L,S as $,g as G,b as H,T as F,Q as K,V as Q,W as U,Y as V,Z as W}from"./App.9644e084.js";import{h as p}from"./moment.68d8b8f0.js";import{C as Z}from"./createhelpdesk.7e5331ba.js";const J=y.button`
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
`;const se=()=>{const[d,D]=s.exports.useState(!1),[v,u]=s.exports.useState([]),[m,A]=s.exports.useState(""),[g,N]=s.exports.useState([]),[f,X]=s.exports.useState("newest");s.exports.useState(!1);const[a,M]=s.exports.useState(1),[c]=s.exports.useState(5),i=P(),[x,T]=s.exports.useState(!1),w=()=>{T(!x)},l=localStorage.getItem("authToken"),E=localStorage.getItem("user_id"),k=async()=>{try{if(l){const t=await O.get(`https://bapi.reownlogics.com/api/help-desk?department_manager_id=${E}`,{headers:{Authorization:`Bearer ${l}`}});console.log("sortedemployees",t.data);const n=t.data.sort((o,j)=>new Date(j.created_at)-new Date(o.created_at));N(n)}else console.log("No token found. Please log in again."),i("/login")}catch(t){console.error("Error fetching employee data: ",t)}};s.exports.useEffect(()=>{k()},[l,i]);const R=(t,n)=>f==="newest"?new Date(n.createdAt)-new Date(t.createdAt):f==="oldest"?new Date(t.createdAt)-new Date(n.createdAt):0,h=g.filter(t=>t.title.toLowerCase().includes(m.toLowerCase())).sort(R),b=a*c,Y=b-c,_=h.slice(Y,b),S=t=>M(t),B=()=>{D(!d),u(d?[]:g.map(t=>t.id))},I=t=>{u(n=>n.includes(t)?n.filter(o=>o!==t):[...n,t])};return r("div",{children:[r("div",{className:"d-flex justify-content-end align-items-center mb-2",children:[e(J,{onClick:w,children:"+ Create New"}),e(Z,{isOpen:x,toggle:w,refreshTickets:k})]}),r(z,{children:[r("div",{className:"p-2 d-flex justify-content-between align-items-center",children:[e("div",{children:e("h3",{children:"Recent Ticket"})}),e("div",{className:"d-flex align-items-center justify-content-end",children:r(q,{className:"mr-3",children:[e(L,{children:e($,{size:16})}),e(G,{placeholder:"Search by name",value:m,onChange:t=>A(t.target.value)})]})})]}),r(H,{children:[r(F,{striped:!0,responsive:!0,children:[e("thead",{children:r("tr",{children:[e("th",{children:e("input",{type:"checkbox",checked:d,onChange:B})}),e("th",{children:"Name"}),e("th",{children:"Requested Date"}),e("th",{children:"Requested Time"}),e("th",{children:"Assign By"}),e("th",{children:"Rating"}),e("th",{children:"Time for Requested to Resolution"}),e("th",{children:"Actions"})]})}),e("tbody",{children:_.map(t=>{var n,o;return r("tr",{children:[e("td",{children:e("input",{type:"checkbox",checked:v.includes(t.id),onChange:()=>I(t.id)})}),e("td",{children:t.title}),e("td",{children:p(t.created_at).format("YYYY-MM-DD")}),e("td",{children:p(t.created_at).format("hh:mm:ss A")}),e("td",{children:(o=(n=t.department)==null?void 0:n.manager)!=null&&o.name?t.department.manager.name:"N/A"}),e("td",{children:t.reviews.rating}),e("td",{children:e("span",{style:{background:"#daf1df",padding:"6px",borderRadius:"100px"},children:p(t.created_at).format("YYYY-MM-DD hh:mm:ss A")})}),e("td",{children:r(K,{children:[e(Q,{className:"pe-1",tag:"span",children:e(U,{size:15})}),e(V,{end:!0,children:e(W,{onClick:()=>i(`/ticket-detail/${t.id}`),children:e("span",{className:"align-middle ms-50",children:"Detail"})})})]})})]},t.id)})})]}),r("div",{className:"d-flex justify-content-between align-items-center mt-3",children:[e(C,{disabled:a===1,onClick:()=>S(a-1),children:"Previous"}),r("div",{children:["Page ",a," of ",Math.ceil(h.length/c)]}),e(C,{disabled:a===Math.ceil(h.length/c),onClick:()=>S(a+1),children:"Next"})]})]})]})]})};export{se as default};
