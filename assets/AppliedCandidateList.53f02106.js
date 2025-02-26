import{r as n,j as e,v as s,a6 as E,a5 as j,F as q,K}from"./index.77ed9b33.js";import{X as G,R as L}from"./index.es.66466f6b.js";import{R as P,c as f,C as T,P as X,Q as Y,V as F,W as O,Y as V}from"./App.24656bef.js";import{F as z}from"./FormGroup.af5ec525.js";import{D as J}from"./DropDown-Arrow.f1c62309.js";import{p as H}from"./profile-picture.07359540.js";const M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHaSURBVHgBvZTRbcIwEIYdCBKP6QSkG7Qb0A3oBIQ3BEhNJkgyQVMJEG+kG9AJoBtkBI+QviEQ0P/COXJCStqqqiUrlnP+7u6/s4X442HUGQyHw26z2fSxlIfDIVwsFvJXQIBsBjmYKU8bM74GvgC6rmvtdrsnwzDczMAwXkzTjLbbrYWvczqdfDatBBtfgCw60Gq1vCiK0orIAyz7mBIO4vl8HhaAo9GIQAGDNvA8qNOqDMZ5bzqdrhqcVo9h8jswGmQD25jOYNpKijxlROkATJu2qBG+XDClM8ljaEbUHs9Y3mlnC2BN50CzKUikNPTZKPN2PB5XXJxceJYmKxhHFADe07KKZrOZl2nYaDRu2FsKmETVEvx04PkWe+/kjB0mtAfxXbbviLP25Owjj1DTZYlll6MKAY7VP0RkA7Sp0DvhCmf/TE2bvqYfpbUcj8e+BpbaNSSnibJFVrYKLEt5v9+vNQ0fkO4NQANOhcBrmoCtKSrsPcLmniXJbfIIsRECQBWmfuojEslRxVp6pJUHUFSSiKKj2/RW0JDGZDIJCCgqepFkoT6jLzIi544o9eAFUPMciHPLCDgIoNFru91Oqx6N8l2ve74UWHLKlvjp83UF3CGtVXv82/gEnBU6jnRrXdIAAAAASUVORK5CYII=",W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHYSURBVHgBrZTLccIwFEVlA3t3ENGB04GpIMOaAeMKSCoAKkg6IOGzJqkAd4BLcAms+eZej6QIIyfODJphJKz3jq7eR0LceXh/GcxmM4lJqr9ZkiS7fwMBCZrN5sjzvOHlcpFXDp6Xn8/n6WAweK8FBCxstVprBUoxfxGC9Q7rEOsnrCN+OxwOHSjOK4G8HpRt4biDQ9Lv91PhvkHYaDTWsAl83+/0er1M7/m2IZRtCDudTp0qGAdUZbShLX5rhugGOJ/Pi3jh5G75GhXQnLegD1Q+3wDxcYwpteU7riqXy+WrVqRukUJEfAWkAU9iAsQvAyEZw4ZqzBXpQ9/VavVggEhEyBlxyUqKjONisRjBcciSsUOiKkDs9/t2wbIBAAcWLGTGAZocj8cPfJrg9xnH8aQk/KrQC4VwyJV8qTeYSUwFSJcS7F5KMPqEapkZoMpYrorWDAR9qKBUPnVlnz6A5rolfeskOka4alSGQtmjq9UYFvrwMHOAtRkg/VuUj3C1lAMm2QhIksBhbf3dKKRkZLkLg4CG6vQqWKRgATvG3nM9DuyWDWIjhXocWE6sACZNPw6MGwWo5FUD9WArYhor8I8Dksd4I65vrrexzgMb6MJnedXp87uObxy8Iz5lch2ZAAAAAElFTkSuQmCC",Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAImSURBVHgBvVRNbtNAFH4z4zSBRMg3wL1BuEF6gipCQWJFeoKWDSJiUVeAUrGBG0BXSK2q0AVrcoPkCD6CFwlKE8+8vjeOnYnj9Eeq+jYez7z53ve9nwF4ZBN3OdTCQQAqCexaT8ZxeBA/GNAPf/rz6otDAOySQ1C4EoHRJ9NPb37dC7D+7byJWg0EYEC/Q4N45REICow1QlMKsU/7LQbWMN+b9d5GWwFr/d+BgsqItmMB5mDS6wxLSED9KwWVNqgPxuwR23F2Jl1HCTv/GIwjbwNjYwBDPki+QMCcog3Aev+8a2Ua3S7KKDP2kaSC8hzMK42jDUAEdUyfoUu/aJyS+unl94zRUsVQSPluDdAPBz6z4wLALabEzjEgHs2qtVyiQXHFLGtf/r7MAWcqaaYXYI2dm5tnp4NDAuO0nLgp8QDt2lP/d9N/xwyaHIAruZBy9Lx/GVIBziTqEAX8mX7shO6dhcZYeatmSXPoJTYKggyygzSXeEaMwqyVDC7eQ8GEkladdz0ZrySTBASIlk2b27TX6TIoq+fpKKu+FLjPTZ6NpHT08sVWo3/R2gBV5lXZqFUoLXyHg+WMswVXel41I94oG6micQvxIAgb9PVuzjhbxGE7Fkq3SaKvyHEZvRzs80UrBUOfg7tnYnvk1eOAGsY0FT4qGbiPAxCB6Yf1Qdj6HvIo8vQsgXOzxaNCUVV/lL2Ndz6w3NxJtWHlJ+BFs147gqe0G00BB+8NMbqIAAAAAElFTkSuQmCC";function $(){const[o,A]=n.exports.useState({question1:"",question2:"",question3:""}),[m,b]=n.exports.useState({question2:!1,question3:!1}),i=[{value:"question2",label:"Status"},{value:"question3",label:"Stage"}],u=(a,l,d)=>{a.preventDefault(),A({...o,[l]:d})},c=a=>{b(l=>({...l,[a]:!l[a]}))},x=a=>s("div",{className:"custom-dropdown position-relative mt-0 block",style:{width:"100%",height:"40px",cursor:"pointer"},onClick:()=>c(a),children:[e("div",{className:"selected-option",style:{width:"100%",height:"100%",backgroundColor:"white",border:"1px solid #ccc",borderRadius:"5px",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 40px 0 10px"},children:o[a]||"Select an option"}),e("img",{src:J,alt:"dropdown-icon",className:"position-absolute",style:{top:"50%",right:"10px",transform:`translateY(-50%) rotate(${m[a]?"0deg":"180deg"})`,transition:"transform 0.3s ease-in-out"}}),e("img",{src:M,alt:"layer-icon",className:"position-absolute",style:{top:"50%",left:"10px",transform:"translateY(-50%)"}}),m[a]&&e("div",{className:"dropdown-options position-absolute",style:{width:"100%",backgroundColor:"white",border:"1px solid #ccc",borderRadius:"5px",marginTop:"5px",zIndex:10,boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)"},children:i.map(l=>s("div",{className:"position-relative",children:[e("img",{src:o[a]===l.value?Z:W,alt:"tick-icon",className:"position-absolute",style:{top:"50%",left:"10px",transform:"translateY(-50%)"}}),e("div",{className:"dropdown-item dropdown-items",style:{padding:"10px",textAlign:"center",cursor:"pointer",color:o[a]===l.value?"#4285F4":"black",borderBottom:l.value!==i[i.length-1].value?"1px solid #ddd":"none"},onMouseDown:d=>u(d,a,l.value),children:l.label})]},l.value))})]}),g={question1:"Job Title",question2:"Status",question3:"Stage"};return e("div",{className:" ",children:s(z,{className:"mb-4",children:[s(P,{className:"w-full",style:{display:"block"},children:[s(f,{className:"",children:[e("div",{className:"dropdown-label",children:g.question1}),e("input",{type:"text",value:o.question1,onChange:a=>A({...o,question1:a.target.value}),placeholder:"Insert text here",style:{width:"100%",height:"40px",padding:"5px 10px",border:"1px solid #ccc",borderRadius:"5px"}}),e("p",{className:"m-0",style:{paddingTop:"8px",paddingBottom:"10px"},children:"Insert text here to help users."})]}),i.map((a,l)=>s(f,{className:"mb-1 w-full",children:[e("div",{className:"dropdown-label",children:g[a.value]}),x(a.value)]},a.value))]}),s("div",{className:"d-flex justify-content-center align-items-center gap-1 position-absolute",style:{bottom:"3%",left:"50%",transform:"translateX(-50%)"},children:[e("button",{className:"btn btn-bg",style:{maxWidth:"110px"},children:"Apply"}),e("button",{className:"btn border",style:{maxWidth:"110px"},children:"Reset"})]})]})})}const ne=()=>{const o=E(),A="https://bapi.reownlogics.com/storage",[m,b]=n.exports.useState(""),[i,u]=n.exports.useState(1),[c,x]=n.exports.useState(10),[g,a]=n.exports.useState([]),[l,d]=n.exports.useState(!1),[p,k]=n.exports.useState(!1),[S,w]=n.exports.useState(!1);n.exports.useState(null);const{id:C}=j(),[N,y]=n.exports.useState([]);n.exports.useEffect(()=>{(async()=>{w(!0);try{const r=localStorage.getItem("authToken"),h=await K.get(`https://bapi.reownlogics.com/api/jobs/${C}/candidate`,{headers:{Authorization:`Bearer ${r}`,Accept:"application/json"}});y(h.data),console.log("jobs",h.data)}catch(r){console.error("Error fetching candidates:",r)}finally{w(!1)}})()},[C]);const B=()=>k(t=>!t),D=()=>{d(!l),a(l?[]:N.map(t=>t.id))},I=t=>{a(r=>r.includes(t)?r.filter(h=>h!==t):[...r,t])},Q=[{name:e("input",{type:"checkbox",className:"selectAll-Checkbox",checked:l,onChange:D}),selector:t=>t.id,cell:t=>e("input",{type:"checkbox",className:"input-padding",checked:g.includes(t.id),onChange:()=>I(t.id)}),sortable:!1,width:"8%"},{name:"Name",selector:t=>t.full_name,sortable:!1,cell:t=>s("div",{className:"d-flex align-items-center cursor-pointer p-sm-0",onClick:()=>o(`/appliedcandidatedetail/${t.id}`),children:[e("img",{src:t.picture?`${A}/${t.picture}`:H,alt:t.full_name,width:"30",height:"30",className:"rounded-circle border-none me-1 me-lg-2",style:{backgroundColor:"gray"}}),s("div",{children:[e("div",{className:"text-black text-ellipsis",children:t.full_name}),e("div",{className:"small-font",style:{display:p&&window.innerWidth>768?"none":"block",fontSize:"12px",color:"#6c757d"},children:new Date(t.created_at).toLocaleDateString()})]})]}),width:"22%"},{name:"Job Title",selector:t=>t.current_title,sortable:!1,width:"24.5%",cell:t=>e("span",{style:{color:"black"},children:t.current_title})},{name:"Stage",selector:t=>t.stage,sortable:!1,width:"17.5%",cell:t=>e("span",{style:{color:"black"},children:t.stage})},{name:"Applied Date",selector:t=>t.created_at,sortable:!1,width:"17.5%",cell:t=>e("span",{style:{color:"black"},children:new Date(t.created_at).toLocaleDateString()})},{name:"Action",selector:t=>t.action,sortable:!1,cell:t=>s(X,{children:[e(Y,{className:"pe-1",tag:"span",children:e(F,{size:15})}),e(O,{end:!0,children:e(V,{onClick:()=>o(`/ticket-detail/${employee.id}`),children:e("span",{className:"align-middle ms-50",children:"Detail"})})})]}),width:"10%"}],v=N.filter(t=>t.full_name.toLowerCase().includes(m.toLowerCase())),U=v.slice((i-1)*c,i*c),R=()=>e(L,{previousLabel:"",nextLabel:"",pageCount:Math.ceil(v.length/c)||1,activeClassName:"active",forcePage:i-1,onPageChange:t=>u(t.selected+1),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"});return S?e("div",{children:"Loading ..."}):s(q,{children:[s("div",{className:"card shadow-none bg-white border mobile-res-head",style:{padding:"25px 46px",borderRadius:"17px",marginBottom:"20px"},children:[s("div",{className:"d-flex align-items-center flex-wrap",style:{gap:"38px"},children:[e("h2",{children:"Creative Head"}),e("span",{className:"badge bgSky",children:"Open"})]}),s("p",{className:"text-muted",children:["Hiring / Creative Head / ",e("span",{className:"sky-blue",children:"Applied"})]}),s("div",{className:"d-flex align-items-center gap-1 flex-wrap",children:[e("button",{className:"btn btn-bg",style:{maxWidth:"148px"},children:"All Applied"}),e("button",{className:"btn border",onClick:B,children:"Filters"}),e("a",{className:"sky-blue custom-link",children:"View Job Description"})]})]}),s("div",{className:"d-md-flex",children:[p&&e("div",{className:"filter-panel position-relative",children:e("div",{className:"filter-content ",style:{marginTop:"10px"},children:e($,{})})}),s("div",{className:`Wrapper-list ${p?"shrink":""} overflow-auto px-1 px-md-3`,style:{width:p?"auto":"100%"},children:[s("div",{className:"d-flex justify-content-between align-center bg-transparent pad-b-12",children:[e("h4",{className:"mb-0 ps-1 pe-1",children:"Applied Candidate"}),e("button",{className:"btn btn-bg",children:"Export"})]}),e(T,{className:"card border",children:e("div",{className:`react-dataTable react-dataTable-selectable-rows ${p?"overflow-auto":""}`,style:{maxHeight:"500px"},children:e(G,{noHeader:!0,subHeader:!1,pagination:!0,responsive:!0,paginationServer:!0,columns:Q,data:U,sortIcon:null,paginationComponent:R})})})]})]})]})};export{ne as default};
