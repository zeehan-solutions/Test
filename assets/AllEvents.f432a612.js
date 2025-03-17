import{r,j as e,v as a,M,B as G}from"./index.646e8ac6.js";import{s as q,M as V,m as H,n as Q,R as T,c as D,L as w,h as y,Q as J,o as K,S as te,C as ae,I as ne,f as re,g as se,b as oe,T as ie}from"./App.954e6202.js";import{e as le,d as de}from"./delete.bc8c3c16.js";const ce=q.button`
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
`;function pe({isOpen:F,toggle:g,refreshEvents:c}){const[x,p]=r.exports.useState(""),[m,v]=r.exports.useState(""),[b,f]=r.exports.useState(""),[N,S]=r.exports.useState(""),[l,C]=r.exports.useState({}),[E,u]=r.exports.useState(!1),[k,h]=r.exports.useState(""),d=()=>{g()},I=s=>{h(s),S(s),console.log("File selected:",s)},B=async()=>{if(u(!0),A()){const n=localStorage.getItem("authToken");if(!n){console.error("User token is missing");return}try{const i=new FormData;i.append("name",x),i.append("start_date",m),i.append("end_date",b),i.append("image",k);const _=await M.post("https://bapi.reownlogics.com/api/bonafide-events/store",i,{headers:{Authorization:`Bearer ${n}`}});console.log("Response",_.data),p(""),v(""),f(""),S(""),h(""),C({}),u(!1),g(),c()}catch(i){console.error("Event creation failed",i),u(!1)}}else u(!1)},A=()=>{let s={};return x.trim()||(s.eventname="Event name is required."),m.trim()||(s.startdate="Start date is required."),b.trim()||(s.enddate="End date is required."),N||(s.image="Event image is required."),C(s),Object.keys(s).length===0};return e("div",{children:a(V,{isOpen:F,toggle:d,size:"lg",children:[e(H,{toggle:d}),e("h4",{className:"text-center mb-2",children:"Add Event"}),a(Q,{children:[e(T,{children:a(D,{md:12,children:[a(w,{children:["Event Name",e("span",{className:"text-danger",children:"*"})]}),e(y,{className:"mb-1",type:"text",placeholder:"Eg. Eid",value:x,onChange:s=>p(s.target.value)}),l.eventname&&e("small",{className:"text-danger",children:l.eventname})]})}),a(T,{children:[a(D,{md:6,children:[a(w,{children:["Start Date",e("span",{className:"text-danger",children:"*"})]}),e(y,{className:"mb-1",type:"date",placeholder:"Eg. Landing Page Design",value:m,onChange:s=>v(s.target.value)}),l.startdate&&e("small",{className:"text-danger",children:l.startdate})]}),a(D,{md:6,children:[a(w,{children:["End Date",e("span",{className:"text-danger",children:"*"})]}),e(y,{className:"mb-1",type:"date",placeholder:"Eg. Landing Page Design",value:b,onChange:s=>f(s.target.value)}),l.enddate&&e("small",{className:"text-danger",children:l.enddate})]})]}),e(w,{className:"mt-1",children:"Upload Event Image "}),e(J,{onFileUpload:I}),l.image&&e("small",{className:"text-danger",children:l.image})]}),e(K,{className:"d-flex flex-column justify-content-center",children:e(ce,{onClick:B,disabled:E,children:E?"Submitting...":"Submit"})})]})})}const he=q.button`
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
`,ue=({isOpen:F,toggle:g,event:c,refreshEvents:x})=>{const[p,m]=r.exports.useState(""),[v,b]=r.exports.useState(""),[f,N]=r.exports.useState(""),[S,l]=r.exports.useState(null),[C,E]=r.exports.useState(""),u=r.exports.useRef(null),[k,h]=r.exports.useState(!1),[d,I]=r.exports.useState({}),B=()=>{let n={};return p.trim()||(n.name="Event Name is required"),v||(n.startDate="Start Date is required"),f||(n.endDate="End Date is required"),!S&&!C&&(n.image="Event Image is required"),I(n),Object.keys(n).length===0};r.exports.useEffect(()=>{c&&(m(c.name),b(c.start_date),N(c.end_date),E(c.image?`https://bapi.reownlogics.com/${c.image}`:""))},[c]);const A=n=>{n?(l(n),E("")):(l(null),E(""))},s=async()=>{if(!!B()){h(!0);try{const n=localStorage.getItem("authToken"),i=new FormData;i.append("name",p),i.append("start_date",v),i.append("end_date",f),i.append("event_id",c.id),S&&i.append("image",S),await M.post("https://bapi.reownlogics.com/api/bonafide-events/update",i,{headers:{Authorization:`Bearer ${n}`,"Content-Type":"multipart/form-data"}}),x(),g()}catch(n){console.error("Error updating event:",n),h(!1)}}};return a(V,{isOpen:F,toggle:g,size:"lg",children:[e(H,{toggle:g}),e("h4",{className:"text-center mb-2",children:"Edit Event"}),a(Q,{children:[e(T,{children:a(D,{md:12,children:[a(w,{children:["Event Name",e("span",{className:"text-danger",children:"*"})]}),e(y,{value:p,onChange:n=>m(n.target.value)}),d.name&&e("p",{className:"text-danger",children:d.name})]})}),a(T,{children:[a(D,{md:6,children:[a(w,{children:["Start Date",e("span",{className:"text-danger",children:"*"})]}),e(y,{type:"date",value:v,onChange:n=>b(n.target.value)}),d.startDate&&e("p",{className:"text-danger",children:d.startDate})]}),a(D,{md:6,children:[a(w,{children:["End Date",e("span",{className:"text-danger",children:"*"})]}),e(y,{type:"date",value:f,onChange:n=>N(n.target.value)}),d.endDate&&e("p",{className:"text-danger",children:d.endDate})]})]}),e(w,{className:"mt-1",children:"Upload Event Image "}),e(J,{onFileUpload:A,ref:u,fileTypes:["image/jpeg","image/png"],existingImage:C}),d.image&&e("p",{className:"text-danger",children:d.image})]}),e(K,{children:e(he,{onClick:s,disabled:k,children:k?"Submitting...":"Submit"})})]})},ge=q.button`
  background-color: #0C1539 !important;
  padding: 15px 50px;
  border-radius: 10px!important;
  color: white;
  display: block;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  white-space: nowrap; /* Prevent text wrapping */

  &:hover {
    background-color: #1a2447 !important;
  }
`,ve=()=>{const[F,g]=r.exports.useState(!1),[c,x]=r.exports.useState(!1),[p,m]=r.exports.useState(null),v=()=>g(!0),b=()=>g(!1),[f,N]=r.exports.useState(!1),[S,l]=r.exports.useState(null),C=t=>{l(t),N(!0)},E=()=>{N(!1),l(null)},[u,k]=r.exports.useState(""),[h,d]=r.exports.useState("newest");r.exports.useState(!1);const[I,B]=r.exports.useState([]),[A,s]=r.exports.useState(null),[n,i]=r.exports.useState(1),_=10,j=async()=>{try{const t=localStorage.getItem("authToken"),o=await M.get("https://bapi.reownlogics.com/api/bonafide-events",{headers:{Authorization:`Bearer ${t}`,Accept:"application/json"}});B(Array.isArray(o.data)?o.data:o.data.data||[]),console.log("Events data",o.data)}catch(t){console.error("Error fetching hiring requests:",t),s("Failed to fetch hiring requests.")}finally{x(!1)}};r.exports.useEffect(()=>{x(!0),j()},[]);const W=(t,o)=>{const L=t.created_at?new Date(t.created_at):new Date(t.date_of_birth),O=o.created_at?new Date(o.created_at):new Date(o.date_of_birth);return isNaN(L)||isNaN(O)?(console.error("Invalid date found:",t,o),0):h==="newest"?O-L:h==="oldest"?L-O:0},P=[...I].sort(W);console.log("Sorted events:",P);const R=P.filter(t=>{var o;return u?(o=t.name)==null?void 0:o.toLowerCase().includes(u.toLowerCase()):!0}),X=t=>{d(t.target.value)};if(c)return a("div",{className:"d-flex justify-content-center align-items-center fs-3",style:{height:"calc(100vh - 170px)"},children:[e(te,{}),e("span",{className:"fs-2",style:{paddingBottom:"6px",paddingLeft:"5px"}})]});const $=n*_,Y=$-_,Z=R.slice(Y,$),U=Math.ceil(R.length/_),z=t=>{t>=1&&t<=U&&i(t)},ee=async t=>{m(t);try{const o=localStorage.getItem("authToken");await M.delete(`https://bapi.reownlogics.com/api/bonafide-events/${t}`,{headers:{Authorization:`Bearer ${o}`,Accept:"application/json"}}),console.log("Event deleted"),await j()}catch(o){console.error("Error deleting event:",o),s("Failed to delete event.")}finally{m(null)}};return e("div",{children:a(ae,{className:"bg-white p-md-2",style:{borderRadius:"40px"},children:[a("div",{className:"p-2 d-flex flex-wrap justify-content-between align-items-center overflow-x-auto z-index-1",children:[e("div",{children:e("h3",{children:"All Events"})}),a("div",{className:"d-flex flex-wrap gap-1 flex-sm-nowrap align-items-center justify-content-center",children:[a(ne,{className:"",style:{borderRadius:"10px",overflow:"hidden"},children:[e(re,{style:{backgroundColor:"#F9FBFF",border:"none",padding:"15px 10px"},children:e(se,{size:16})}),e(y,{placeholder:"Search",value:u,onChange:t=>k(t.target.value),style:{border:"none",backgroundColor:"#F9FBFF"}})]}),a(y,{type:"select",className:"",name:"select",id:"exampleSelect",onChange:X,value:h,style:{border:"none",backgroundColor:"#F9FBFF",padding:"15px 10px"},children:[a("option",{disabled:!0,children:["Sort By ",h.charAt(0).toUpperCase()+h.slice(1)]}),e("option",{value:"newest",children:"Newest"}),e("option",{value:"oldest",children:"Oldest"})]}),e(ge,{onClick:v,children:"Add Event"}),e(pe,{isOpen:F,toggle:b,refreshEvents:j})]})]}),a(oe,{children:[a(ie,{responsive:!0,className:"table-events",children:[e("thead",{className:"custom-thead",children:a("tr",{children:[e("th",{children:"Image"}),e("th",{children:"Name"}),e("th",{children:"Start Date"}),e("th",{children:"End Date"}),e("th",{children:"Actions"})]})}),e("tbody",{style:{backgroundColor:"white"},children:Z.map((t,o)=>a("tr",{children:[e("td",{style:{position:"relative"},children:t.image?a("div",{style:{position:"relative",display:"inline-block"},children:[e("img",{src:`https://bapi.reownlogics.com/${t.image.trim()}`,alt:t.name,style:{height:"60px",width:"60px",objectFit:"cover",borderRadius:"50%",filter:p===t.id?"grayscale(100%) opacity(0.5)":"none",transition:"opacity 0.3s ease"}}),p===t.id&&e("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",borderRadius:"50%"}})]}):e("p",{children:"No Image Available"})}),e("td",{children:t.name}),e("td",{children:t.start_date}),e("td",{children:t.end_date}),e("td",{children:a("div",{className:"d-flex justify-content-start gap-1",children:[e("img",{src:le,alt:"editIcon",style:{cursor:"pointer"},onClick:()=>C(t)}),f&&e(ue,{isOpen:f,toggle:E,event:S,refreshEvents:j}),e("img",{src:de,alt:"deleteIcon",onClick:()=>p===t.id?null:ee(t.id),style:{cursor:p===t.id?"not-allowed":"pointer",opacity:p===t.id?.5:1}})]})})]},o))})]}),a("div",{className:"d-flex justify-content-between align-items-center mt-3",children:[e(G,{className:"pagbutton",disabled:n===1,onClick:()=>z(n-1),children:"Previous"}),a("span",{children:["Page ",n," of ",U]}),e(G,{className:"pagbutton",disabled:n===U,onClick:()=>z(n+1),children:"Next"})]})]})]})})};export{ve as default};
