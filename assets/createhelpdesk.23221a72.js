import{r as a,v as r,j as t,M as F}from"./index.0e991307.js";import{s as j,M as B,r as L,k as P,R as z,c as C,L as i,h as c,t as H,m as O}from"./App.f2f7ddbf.js";const Y=j.button`
  background-color: #0C1539 !important;
  width: 200px;
  padding: 10px;
  color: white;
  cursor: pointer;
  border-radius: 10px!important;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1a2447 !important; /* Lighter shade on hover */
  }
`,_=({isOpen:T,toggle:x,refreshTickets:U})=>{const[d,f]=a.exports.useState(""),[R,p]=a.exports.useState([]),[m,b]=a.exports.useState(""),[u,y]=a.exports.useState("No"),[h,S]=a.exports.useState(""),[g,D]=a.exports.useState(""),[n,A]=a.exports.useState({}),[N,k]=a.exports.useState({}),[v,q]=a.exports.useState(!1),E=e=>{b(e),console.log("File selected:",e)},I=()=>{let e={};return d.trim()||(e.requestTitle="Request title is required."),g||(e.selectedDepartment="Please select a department."),h.trim()||(e.description="Description is required."),A(e),Object.keys(e).length===0};a.exports.useEffect(()=>{(async()=>{var l;const o=localStorage.getItem("authToken");if(!o){console.error("User token is missing");return}try{const s=await F.get("https://bapi.reownlogics.com/api/department",{headers:{Authorization:`Bearer ${o}`}});console.log("API Response:",s.data),Array.isArray(s.data)?p(s.data):(console.error("Unexpected API response format:",s.data),p([]))}catch(s){console.error("Error fetching departments:",((l=s.response)==null?void 0:l.data)||s.message),p([])}})()},[]);const M=async()=>{var l;if(!I())return;const e=localStorage.getItem("authToken");if(q(!0),!e){console.error("User token is missing");return}const o=new FormData;o.append("title",d),o.append("department_id",Number(g)),o.append("description",h),u==="Yes"&&m&&(o.append("attachments[]",m),console.log("File uploaded:",m));for(let s of o.entries())console.log(s[0],s[1]);try{const s=await F.post("https://bapi.reownlogics.com/api/help-desk/store",o,{headers:{Authorization:`Bearer ${e}`}});console.log("Success:",s.data),U(),x()}catch(s){console.error("Error submitting the form:",((l=s.response)==null?void 0:l.data)||s.message),k(s.response.data)}finally{q(!1)}},w=()=>{k({}),f(""),D(""),b(""),y("No"),S(""),x()};return r(B,{isOpen:T,toggle:w,size:"lg",children:[t(L,{toggle:w}),t("h4",{className:"text-center mb-2",children:"Help Desk"}),r(P,{children:[r(z,{children:[r(C,{md:6,children:[r(i,{children:["Request Title",t("span",{className:"text-danger",children:"*"})]}),t(c,{type:"text",placeholder:"Eg. Landing Page Design",value:d,onChange:e=>f(e.target.value)}),n.requestTitle&&t("small",{className:"text-danger",children:n.requestTitle})]}),r(C,{md:6,children:[r(i,{children:["Type of Request",t("span",{className:"text-danger",children:"*"})]}),r(c,{type:"select",value:g,onChange:e=>D(e.target.value),children:[t("option",{value:"",children:"Select Department"}),R.map(e=>t("option",{value:e.id,children:e.name},e.id))]}),n.selectedDepartment&&t("small",{className:"text-danger",children:n.selectedDepartment}),N.message&&t("p",{className:"text-danger",children:N.message})]})]}),t(i,{className:"mt-1",children:"Do you want to upload a file to explain the query more?"}),r(c,{type:"select",value:u,onChange:e=>y(e.target.value),children:[t("option",{children:"No"}),t("option",{children:"Yes"})]}),u==="Yes"&&t("div",{className:"mt-2",children:t(H,{onFileUpload:E})}),r(i,{className:"mt-1",children:["Description",t("span",{className:"text-danger",children:"*"})]}),t(c,{type:"textarea",placeholder:"Write your query here...",value:h,onChange:e=>S(e.target.value)}),n.description&&t("small",{className:"text-danger",children:n.description})]}),r(O,{className:"d-flex flex-column justify-content-center",children:[t(Y,{onClick:M,disabled:v,children:v?"Submitting...":"Submit"}),t("p",{className:"text-center mt-1 mb-2",children:"Never submit passwords or credit cards details through Workforms"})]})]})};export{_ as C};
