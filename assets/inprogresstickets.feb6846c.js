import{a6 as g,r,K as f,v as a,j as e,M as k}from"./index.9ce7a48c.js";import{S as x,C as w,b as N,T as b,a3 as v,a4 as D,a5 as S,a6 as T,a7 as _}from"./App.67f4a7e8.js";import{P as y}from"./planet.7b97fcd0.js";import{h as B}from"./moment.ef14f9cc.js";import{B as C}from"./Backbutton.191c060c.js";function z(){const{statusId:d}=g(),[i,o]=r.exports.useState([]),[l,h]=r.exports.useState(!0),[n,p]=r.exports.useState(null),m=f();return r.exports.useEffect(()=>{(async()=>{try{const s=localStorage.getItem("authToken"),I=localStorage.getItem("user_role"),u=localStorage.getItem("user_id");if(!s){window.location.href="/login";return}const c=await k.get(`https://bapi.reownlogics.com/api/help-desk?manager_status_id=3&employee_id=${u}`,{headers:{Authorization:`Bearer ${s}`}});o(c.data),console.log("response of tickets",c.data)}catch{p("Failed to fetch tickets")}finally{h(!1)}})()},[d]),l?a("div",{className:"d-flex justify-content-center align-items-center fs-3",style:{height:"calc(100vh - 170px)"},children:[e(x,{}),e("span",{className:"fs-2",style:{paddingBottom:"6px",paddingLeft:"5px"}})]}):n?e("div",{className:"text-danger",children:n}):a("div",{children:[e(C,{}),e(w,{className:"bg-white ticket-card",style:{borderRadius:"30px"},children:e(N,{children:a(b,{responsive:!0,className:"table-ticket",children:[e("thead",{children:a("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Description"}),e("th",{children:"Department"}),e("th",{children:"Created At"}),e("th",{children:"Actions"})]})}),e("tbody",{children:i.length>0?i.map(t=>a("tr",{children:[e("td",{children:t.title}),e("td",{children:t.description}),e("td",{children:t.department.name}),e("td",{children:e("span",{style:{background:"#daf1df",padding:"6px",borderRadius:"100px"},children:B(t.created_at).format("YYYY-MM-DD hh:mm:ss A")})}),e("td",{children:a(v,{children:[e(D,{className:"pe-1",tag:"span",children:e(S,{size:15})}),e(T,{end:!0,children:e(_,{onClick:()=>m(`/ticket-detail/${t.id}`),children:e("span",{className:"align-middle ms-50",children:"Detail"})})})]})})]},t.id)):e("tr",{children:e("td",{colSpan:"6",className:"text-center",children:a("div",{className:"card bg-white text-center",children:[e("img",{src:y,height:400,width:400,className:"mx-auto d-block",alt:"Planet"}),e("h2",{children:"No tickets found"})]})})})})]})})})]})}export{z as default};
