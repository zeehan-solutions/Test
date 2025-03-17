import{a6 as x,r as n,K as w,v as a,j as t,F as _,M as b}from"./index.9ce7a48c.js";import{S as N,C as v,b as D,T as S,a3 as T,a4 as $,a5 as C,a6 as B,a7 as I}from"./App.67f4a7e8.js";import{P as M}from"./planet.7b97fcd0.js";import{h as g}from"./moment.ef14f9cc.js";import{B as R}from"./Backbutton.191c060c.js";function F(){const{statusId:s}=x(),[o,p]=n.exports.useState([]),[u,m]=n.exports.useState(!0),[l,f]=n.exports.useState(null),k=w();return n.exports.useEffect(()=>{(async()=>{try{const d=localStorage.getItem("authToken"),r=localStorage.getItem("user_role"),c=localStorage.getItem("user_id");if(!d){window.location.href="/login";return}let i="";r==="manager"||r==="hr"?i=`https://bapi.reownlogics.com/api/help-desk?manager_status_id=${s}&department_manager_id=${c}`:r==="employee"?i=`https://bapi.reownlogics.com/api/help-desk?employee_status_id=${s}&employee_id=${c}`:r==="assistant"&&(i=`https://bapi.reownlogics.com/api/help-desk?assigned_to_id=${c}&assigned_status_id=${s}`);const h=await b.get(i,{headers:{Authorization:`Bearer ${d}`}});p(h.data),console.log("response of tickets",h.data)}catch{f("Failed to fetch tickets")}finally{m(!1)}})()},[s]),u?a("div",{className:"d-flex justify-content-center align-items-center fs-3",style:{height:"calc(100vh - 170px)"},children:[t(N,{}),t("span",{className:"fs-2",style:{paddingBottom:"6px",paddingLeft:"5px"}})]}):l?t("div",{className:"text-danger",children:l}):a(_,{children:[" ",t(R,{}),t("div",{children:t(v,{className:"bg-white ticket-card",style:{borderRadius:"30px"},children:t(D,{children:a(S,{responsive:!0,className:"table-ticket",children:[t("thead",{children:a("tr",{children:[t("th",{children:"Name"}),t("th",{children:"Description"}),s==="4"&&t("th",{children:"Rating"}),t("th",{children:"Department"}),t("th",{children:"Created at"}),t("th",{children:"Requested Time"}),t("th",{children:"Actions"})]})}),t("tbody",{children:o.length>0?o.map(e=>a("tr",{children:[t("td",{children:e.title}),t("td",{children:(e==null?void 0:e.description)&&e.description.length>3?`${e.description.slice(0,30)}...`:(e==null?void 0:e.description)||""}),s==="4"&&t("td",{children:e.reviews.length>0?e.reviews[0].rating:"No rating"}),t("td",{children:e.department.name}),t("td",{children:t("span",{style:{background:"rgba(58, 151, 76, 0.1)",padding:"10px",borderRadius:"100px",color:"#3A974C"},children:g(e.created_at).format("YYYY-MM-DD ")})}),t("td",{children:t("span",{children:g(e.created_at).format("hh:mm:ss A")})}),t("td",{children:a(T,{children:[t($,{className:"pe-1",tag:"span",children:t(C,{size:15})}),t(B,{end:!0,children:t(I,{onClick:()=>k(`/ticket-detail/${e.id}`),children:t("span",{className:"align-middle ms-50",children:"Detail"})})})]})})]},e.id)):t("tr",{children:t("td",{colSpan:"6",className:"text-center",children:a("div",{className:"card bg-white text-center",children:[t("img",{src:M,height:400,width:400,className:"mx-auto d-block",alt:"Planet"}),t("h2",{children:"No tickets found"})]})})})})]})})})})]})}export{F as default};
