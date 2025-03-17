import{a6 as k,r as s,K as w,v as a,j as t,M as N}from"./index.9ce7a48c.js";import{S as b,C as v,b as D,T as S,a3 as T,a4 as _,a5 as C,a6 as B,a7 as A}from"./App.67f4a7e8.js";import{P as I}from"./planet.7b97fcd0.js";import{h as l}from"./moment.ef14f9cc.js";import{B as M}from"./Backbutton.191c060c.js";function z(){const{statusType:i}=k(),[n,h]=s.exports.useState([]),[g,p]=s.exports.useState(!0),[c,u]=s.exports.useState(null),f=w();return s.exports.useEffect(()=>{(async()=>{try{const r=localStorage.getItem("authToken"),m=localStorage.getItem("user_role"),x=localStorage.getItem("user_id");if(!r){window.location.href="/login";return}let d="";m==="assistant"&&i==="progress"&&(d=`https://bapi.reownlogics.com/api/help-desk?employee_status_id=2&assigned_to_id=${x}`);const o=await N.get(d,{headers:{Authorization:`Bearer ${r}`}});h(o.data),console.log("response of tickets",o.data)}catch{u("Failed to fetch tickets")}finally{p(!1)}})()},[i]),g?a("div",{className:"d-flex justify-content-center align-items-center fs-3",style:{height:"calc(100vh - 170px)"},children:[t(b,{}),t("span",{className:"fs-2",style:{paddingBottom:"6px",paddingLeft:"5px"}})]}):c?t("div",{className:"text-danger",children:c}):a("div",{children:[t(M,{}),t(v,{className:"bg-white ticket-card",style:{borderRadius:"30px"},children:t(D,{children:a(S,{responsive:!0,className:"table-ticket",children:[t("thead",{children:a("tr",{children:[t("th",{children:"Name"}),t("th",{children:"Description"}),t("th",{children:"Department"}),t("th",{children:"Created at"}),t("th",{children:"Requested Time"}),t("th",{children:"Actions"})]})}),t("tbody",{children:n.length>0?n.map(e=>a("tr",{children:[t("td",{children:e.title}),t("td",{children:(e==null?void 0:e.description)&&e.description.length>3?`${e.description.slice(0,20)}...`:(e==null?void 0:e.description)||""}),t("td",{children:e.department.name}),t("td",{children:t("span",{style:{background:"rgba(58, 151, 76, 0.1)",padding:"10px",borderRadius:"100px",color:"#3A974C"},children:l(e.created_at).format("YYYY-MM-DD ")})}),t("td",{children:t("span",{children:l(e.created_at).format("hh:mm:ss A")})}),t("td",{children:a(T,{children:[t(_,{className:"pe-1",tag:"span",children:t(C,{size:15})}),t(B,{end:!0,children:t(A,{onClick:()=>f(`/ticket-detail/${e.id}`),children:t("span",{className:"align-middle ms-50",children:"Detail"})})})]})})]},e.id)):t("tr",{children:t("td",{colSpan:"6",className:"text-center",children:a("div",{className:"card bg-white text-center",children:[t("img",{src:I,height:400,width:400,className:"mx-auto d-block",alt:"Planet"}),t("h2",{children:"No tickets found"})]})})})})]})})})]})}export{z as default};
