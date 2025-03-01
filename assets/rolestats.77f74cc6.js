import{a5 as k,r as n,a6 as x,v as a,j as e,K as w}from"./index.021d50c3.js";import{S as _,C as N,b,T as v,W as $,Y as D,Z as S,$ as T,a0 as C}from"./App.1f34475c.js";import{P as I}from"./planet.7b97fcd0.js";import{h as Y}from"./moment.68d8b8f0.js";function y(){const{statusId:s}=k(),[o,p]=n.exports.useState([]),[g,m]=n.exports.useState(!0),[l,u]=n.exports.useState(null),f=x();return n.exports.useEffect(()=>{(async()=>{try{const d=localStorage.getItem("authToken"),r=localStorage.getItem("user_role"),c=localStorage.getItem("user_id");if(!d){window.location.href="/login";return}let i="";r==="manager"||r==="hr"?i=`https://bapi.reownlogics.com/api/help-desk?manager_status_id=${s}&department_manager_id=${c}`:r==="employee"?i=`https://bapi.reownlogics.com/api/help-desk?employee_status_id=${s}&employee_id=${c}`:r==="assistant"&&(i=`https://bapi.reownlogics.com/api/help-desk?assigned_to_id=${c}&assigned_status_id=${s}`);const h=await w.get(i,{headers:{Authorization:`Bearer ${d}`}});p(h.data),console.log("response of tickets",h.data)}catch{u("Failed to fetch tickets")}finally{m(!1)}})()},[s]),g?a("div",{className:"d-flex justify-content-center align-items-center fs-3",style:{height:"calc(100vh - 170px)"},children:[e(_,{}),e("span",{className:"fs-2",style:{paddingBottom:"6px",paddingLeft:"5px"}})]}):l?e("div",{className:"text-danger",children:l}):e("div",{children:e(N,{className:"bg-white ticket-card",children:e(b,{children:a(v,{striped:!0,responsive:!0,children:[e("thead",{children:a("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Description"}),s==="4"&&e("th",{children:"Rating"}),e("th",{children:"Department"}),e("th",{children:"Created At"}),e("th",{children:"Actions"})]})}),e("tbody",{children:o.length>0?o.map(t=>a("tr",{children:[e("td",{children:t.title}),e("td",{children:t.description.length>3?`${t.description.slice(0,30)}...`:t.description}),s==="4"&&e("td",{children:t.reviews.length>0?t.reviews[0].rating:"No rating"}),e("td",{children:t.department.name}),e("td",{children:e("span",{style:{background:"#daf1df",padding:"6px",borderRadius:"100px"},children:Y(t.created_at).format("YYYY-MM-DD hh:mm:ss A")})}),e("td",{children:a($,{children:[e(D,{className:"pe-1",tag:"span",children:e(S,{size:15})}),e(T,{end:!0,children:e(C,{onClick:()=>f(`/ticket-detail/${t.id}`),children:e("span",{className:"align-middle ms-50",children:"Detail"})})})]})})]},t.id)):e("tr",{children:e("td",{colSpan:"6",className:"text-center",children:a("div",{className:"card bg-white text-center",children:[e("img",{src:I,height:400,width:400,className:"mx-auto d-block",alt:"Planet"}),e("h2",{children:"No tickets found"})]})})})})]})})})})}export{y as default};
