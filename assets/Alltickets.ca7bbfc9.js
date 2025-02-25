import{r as s,a6 as j,v as r,j as e,B as C,K as O}from"./index.70eb4055.js";import{s as y,C as z,I as L,f as q,S as G,g as H,b as $,T as F,P as K,Q,V as U,W as V,Y as W}from"./App.a52e237f.js";import{h as p}from"./moment.68d8b8f0.js";import{C as J}from"./createhelpdesk.276add72.js";const X=y.button`
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
`;const se=()=>{const[d,D]=s.exports.useState(!1),[A,u]=s.exports.useState([]),[m,v]=s.exports.useState(""),[g,N]=s.exports.useState([]),[f,Z]=s.exports.useState("newest");s.exports.useState(!1);const[a,M]=s.exports.useState(1),[c]=s.exports.useState(5),i=j(),[x,E]=s.exports.useState(!1),w=()=>{E(!x)},l=localStorage.getItem("authToken"),T=localStorage.getItem("user_id"),k=async()=>{try{if(l){const t=await O.get("https://bapi.reownlogics.com/api/help-desk",{params:{employee_id:T},headers:{Authorization:`Bearer ${l}`}});console.log("sortedemployees",t.data);const n=t.data.sort((o,_)=>new Date(_.created_at)-new Date(o.created_at));N(n)}else console.log("No token found. Please log in again."),i("/login")}catch(t){console.error("Error fetching employee data: ",t)}};s.exports.useEffect(()=>{k()},[l,i]);const Y=(t,n)=>f==="newest"?new Date(n.createdAt)-new Date(t.createdAt):f==="oldest"?new Date(t.createdAt)-new Date(n.createdAt):0,h=g.filter(t=>t.title.toLowerCase().includes(m.toLowerCase())).sort(Y),b=a*c,B=b-c,I=h.slice(B,b),S=t=>M(t),P=()=>{D(!d),u(d?[]:g.map(t=>t.id))},R=t=>{u(n=>n.includes(t)?n.filter(o=>o!==t):[...n,t])};return r("div",{children:[r("div",{className:"d-flex justify-content-end align-items-center mb-2",children:[e(X,{onClick:w,children:"+ Create New"}),e(J,{isOpen:x,toggle:w,refreshTickets:k})]}),r(z,{children:[r("div",{className:"p-2 d-flex justify-content-between align-items-center",children:[e("div",{children:e("h3",{children:"Recent Ticket"})}),e("div",{className:"d-flex align-items-center justify-content-end",children:r(L,{className:"mr-3",children:[e(q,{children:e(G,{size:16})}),e(H,{placeholder:"Search by name",value:m,onChange:t=>v(t.target.value)})]})})]}),r($,{children:[r(F,{striped:!0,responsive:!0,children:[e("thead",{children:r("tr",{children:[e("th",{children:e("input",{type:"checkbox",checked:d,onChange:P})}),e("th",{children:"Name"}),e("th",{children:"Requested Date"}),e("th",{children:"Requested Time"}),e("th",{children:"Assign By"}),e("th",{children:"Rating"}),e("th",{children:"Created At"}),e("th",{children:"Actions"})]})}),e("tbody",{children:I.map(t=>{var n,o;return r("tr",{children:[e("td",{children:e("input",{type:"checkbox",checked:A.includes(t.id),onChange:()=>R(t.id)})}),e("td",{children:t.title}),e("td",{children:p(t.created_at).format("YYYY-MM-DD")}),e("td",{children:p(t.created_at).format("hh:mm:ss A")}),e("td",{children:(o=(n=t.department)==null?void 0:n.manager)!=null&&o.name?t.department.manager.name:"N/A"}),e("td",{children:t.reviews.rating}),e("td",{children:e("span",{style:{background:"#daf1df",padding:"6px",borderRadius:"100px"},children:p(t.created_at).format("YYYY-MM-DD hh:mm:ss A")})}),e("td",{children:r(K,{children:[e(Q,{className:"pe-1",tag:"span",children:e(U,{size:15})}),e(V,{end:!0,children:e(W,{onClick:()=>i(`/ticket-detail/${t.id}`),children:e("span",{className:"align-middle ms-50",children:"Detail"})})})]})})]},t.id)})})]}),r("div",{className:"d-flex justify-content-between align-items-center mt-3",children:[e(C,{disabled:a===1,onClick:()=>S(a-1),children:"Previous"}),r("div",{children:["Page ",a," of ",Math.ceil(h.length/c)]}),e(C,{disabled:a===Math.ceil(h.length/c),onClick:()=>S(a+1),children:"Next"})]})]})]})]})};export{se as default};
