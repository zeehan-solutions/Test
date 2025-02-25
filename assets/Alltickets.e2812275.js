import{r as s,a6 as j,v as r,j as e,B as v,K as O}from"./index.8f15b5f4.js";import{s as C,C as z,I as q,f as L,S as G,g as H,b as U,T as $,U as F,O as K,P as Q,Q as V,V as J}from"./App.8a97c86d.js";import{h as u}from"./moment.68d8b8f0.js";import{C as W}from"./createhelpdesk.8550a018.js";const X=C.button`
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
`;C.button`
  background-color:rgb(231, 231, 231) !important;
  width: 300px;
  padding: 10px;
  color: black;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
`;const se=()=>{const[d,D]=s.exports.useState(!1),[A,p]=s.exports.useState([]),[m,N]=s.exports.useState(""),[g,y]=s.exports.useState([]),[f,Z]=s.exports.useState("newest");s.exports.useState(!1);const[a,R]=s.exports.useState(1),[c]=s.exports.useState(5),i=j(),[x,T]=s.exports.useState(!1),k=()=>{T(!x)},l=localStorage.getItem("authToken"),_=localStorage.getItem("user_id"),w=async()=>{try{if(l){const t=await O.get("https://bapi.reownlogics.com/api/help-desk",{params:{employee_id:_},headers:{Authorization:`Bearer ${l}`}});console.log("sortedemployees",t.data);const n=t.data.sort((o,Y)=>new Date(Y.created_at)-new Date(o.created_at));y(n)}else console.log("No token found. Please log in again."),i("/login")}catch(t){console.error("Error fetching employee data: ",t)}};s.exports.useEffect(()=>{w()},[l,i]);const M=(t,n)=>f==="newest"?new Date(n.createdAt)-new Date(t.createdAt):f==="oldest"?new Date(t.createdAt)-new Date(n.createdAt):0,h=g.filter(t=>t.title.toLowerCase().includes(m.toLowerCase())).sort(M),b=a*c,E=b-c,B=h.slice(E,b),S=t=>R(t),I=()=>{D(!d),p(d?[]:g.map(t=>t.id))},P=t=>{p(n=>n.includes(t)?n.filter(o=>o!==t):[...n,t])};return r("div",{children:[r("div",{className:"d-flex justify-content-end align-items-center mb-2",children:[e(X,{onClick:k,children:"+ Create New"}),e(W,{isOpen:x,toggle:k,refreshTickets:w})]}),r(z,{children:[r("div",{className:"p-2 d-flex justify-content-between align-items-center",children:[e("div",{children:e("h3",{children:"Recent Ticket"})}),e("div",{className:"d-flex align-items-center justify-content-end",children:r(q,{className:"mr-3",children:[e(L,{children:e(G,{size:16})}),e(H,{placeholder:"Search by name",value:m,onChange:t=>N(t.target.value)})]})})]}),r(U,{children:[r($,{striped:!0,responsive:!0,children:[e("thead",{children:r("tr",{children:[e("th",{children:e("input",{type:"checkbox",checked:d,onChange:I})}),e("th",{children:"Name"}),e("th",{children:"Requested Date"}),e("th",{children:"Requested Time"}),e("th",{children:"Resolved Date"}),e("th",{children:"Resolved Time"}),e("th",{children:"Assign By"}),e("th",{children:"Rating"}),e("th",{children:"Time for Requested to Resolution"}),e("th",{children:"Actions"})]})}),e("tbody",{children:B.map(t=>{var n,o;return r("tr",{children:[e("td",{children:e("input",{type:"checkbox",checked:A.includes(t.id),onChange:()=>P(t.id)})}),e("td",{children:t.title}),e("td",{children:u(t.created_at).format("YYYY-MM-DD")}),e("td",{children:u(t.created_at).format("hh:mm:ss A")}),e("td",{children:t.resolve_date?t.resolve_date:"N/A"}),e("td",{children:t.resolve_time?t.resolve_time:"N/A"}),e("td",{children:(o=(n=t.department)==null?void 0:n.manager)!=null&&o.name?t.department.manager.name:"N/A"}),e("td",{children:t.title}),e("td",{children:e("span",{style:{background:"#daf1df",padding:"6px",borderRadius:"100px"},children:u(t.created_at).format("YYYY-MM-DD hh:mm:ss A")})}),e("td",{children:r(F,{children:[e(K,{className:"pe-1",tag:"span",children:e(Q,{size:15})}),e(V,{end:!0,children:e(J,{onClick:()=>i(`/ticket-detail/${t.id}`),children:e("span",{className:"align-middle ms-50",children:"Detail"})})})]})})]},t.id)})})]}),r("div",{className:"d-flex justify-content-between align-items-center mt-3",children:[e(v,{disabled:a===1,onClick:()=>S(a-1),children:"Previous"}),r("div",{children:["Page ",a," of ",Math.ceil(h.length/c)]}),e(v,{disabled:a===Math.ceil(h.length/c),onClick:()=>S(a+1),children:"Next"})]})]})]})]})};export{se as default};
