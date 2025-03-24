import{a6 as x,r as n,K as b,v as s,j as t,F as _,M as w}from"./index.361edad1.js";import{S as v,C as N,b as S,T as $}from"./App.19801506.js";import{P as T}from"./planet.7b97fcd0.js";import{h as g}from"./moment.ef14f9cc.js";import{B as C}from"./Backbutton.1eb4ec0d.js";function D(){const{statusId:r}=x(),[o,u]=n.exports.useState([]),[p,f]=n.exports.useState(!0),[l,m]=n.exports.useState(null),k=b();return n.exports.useEffect(()=>{(async()=>{try{const c=localStorage.getItem("authToken"),a=localStorage.getItem("user_role"),d=localStorage.getItem("user_id");if(!c){window.location.href="/login";return}let i="";a==="manager"||a==="hr"?i=`https://bapi.reownlogics.com/api/help-desk?manager_status_id=${r}&department_manager_id=${d}`:a==="employee"?i=`https://bapi.reownlogics.com/api/help-desk?employee_status_id=${r}&employee_id=${d}`:a==="assistant"&&(i=`https://bapi.reownlogics.com/api/help-desk?assigned_to_id=${d}&assigned_status_id=${r}`);const h=await w.get(i,{headers:{Authorization:`Bearer ${c}`}});u(h.data),console.log("response of tickets",h.data)}catch{m("Failed to fetch tickets")}finally{f(!1)}})()},[r]),p?s("div",{className:"d-flex justify-content-center align-items-center fs-3",style:{height:"calc(100vh - 170px)"},children:[t(v,{}),t("span",{className:"fs-2",style:{paddingBottom:"6px",paddingLeft:"5px"}})]}):l?t("div",{className:"text-danger",children:l}):s(_,{children:[" ",t(C,{}),t("div",{children:t(N,{className:"bg-white ticket-card",style:{borderRadius:"30px"},children:t(S,{children:s($,{responsive:!0,className:"table-ticket",children:[t("thead",{children:s("tr",{children:[t("th",{children:"Name"}),t("th",{children:"Description"}),r==="4"&&t("th",{children:"Rating"}),t("th",{children:"Department"}),t("th",{children:"Created at"}),t("th",{children:"Requested Time"}),t("th",{children:"Actions"})]})}),t("tbody",{children:o.length>0?o.map(e=>s("tr",{children:[t("td",{children:e.title}),t("td",{children:(e==null?void 0:e.description)&&e.description.length>3?`${e.description.slice(0,30)}...`:(e==null?void 0:e.description)||""}),r==="4"&&t("td",{children:e.reviews.length>0?e.reviews[0].rating:"No rating"}),t("td",{children:e.department.name}),t("td",{children:t("span",{style:{background:"rgba(58, 151, 76, 0.1)",padding:"10px",borderRadius:"100px",color:"#3A974C"},children:g(e.created_at).format("YYYY-MM-DD ")})}),t("td",{children:t("span",{children:g(e.created_at).format("hh:mm:ss A")})}),t("td",{children:t("button",{type:"button",onClick:()=>k(`/ticket-detail/${e.id}`),class:"btn btn-outline-primary rounded-pill",children:"view"})})]},e.id)):t("tr",{children:t("td",{colSpan:"6",className:"text-center",children:s("div",{className:"card bg-white text-center",children:[t("img",{src:T,height:400,width:400,className:"mx-auto d-block",alt:"Planet"}),t("h2",{children:"No tickets found"})]})})})})]})})})})]})}export{D as default};
