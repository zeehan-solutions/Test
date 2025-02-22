import{r as t,a6 as $,j as e,v as r,L as A,K as k}from"./index.f9ed2f7a.js";import{b as z,I as f}from"./staricon.b8c3a541.js";import{R as L,c as d,F as q,L as c,g as w}from"./App.b83c219c.js";import{C as F,a as T}from"./CardTitle.e76ab14d.js";import{b as Z}from"./bgimage.20ea7dbb.js";const Q=()=>{const[i,v]=t.exports.useState(""),[n,b]=t.exports.useState(""),[o,x]=t.exports.useState(""),[m,N]=t.exports.useState(""),[s,P]=t.exports.useState({}),[g,y]=t.exports.useState(""),C=$(),S=/^[a-zA-Z\s]+$/,R=/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/,E=/^[a-zA-Z0-9@#$%^&*]{6,20}$/,j=()=>{let a={};return i.trim()?S.test(i)||(a.name="Invalid name format."):a.name="Name is required.",n.trim()?R.test(n)||(a.email="Invalid email format."):a.email="Email is required.",o.trim()?E.test(o)||(a.password="Password must be 6-20 characters and can contain @#$%^&*."):a.password="Password is required.",m.trim()?m!==o&&(a.confirmPassword="Passwords do not match."):a.confirmPassword="Confirm Password is required.",P(a),Object.keys(a).length===0},I=async a=>{var p,u,h;if(a.preventDefault(),!!j())try{const l=await k.post("https://bapi.reownlogics.com/api/register",{name:i,email:n,password:o});console.log("Signup Successful:",l.data),C("/login")}catch(l){console.error("Signup Error:",((p=l.response)==null?void 0:p.data)||l.message),y(((h=(u=l.response)==null?void 0:u.data)==null?void 0:h.message)||"Registration failed. Try again.")}};return e("div",{className:"auth-wrapper auth-cover",children:r(L,{className:"auth-inner m-0",children:[e(d,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",style:{backgroundImage:`url(${Z})`,backgroundSize:"cover",backgroundPosition:"center",height:"100vh"},children:e("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5"})}),e(d,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:r(d,{className:"px-xl-2 mx-auto",xs:"12",sm:"8",md:"6",lg:"12",children:[e("img",{src:z,alt:"QR Code",className:"img-fluid",width:"20"}),e(F,{tag:"h2",className:"fw-bold mb-1",children:"Create Account \u{1F44B}"}),e(T,{className:"mb-2",children:"Please create your account"}),r(q,{className:"auth-register-form mt-2",onSubmit:I,children:[g&&e("div",{className:"alert alert-danger p-1",role:"alert",children:g}),r("div",{className:"mb-1",children:[e(c,{className:"form-label",for:"register-email",children:"Username"}),e(w,{type:"text",id:"username",value:i,onChange:a=>v(a.target.value),placeholder:"john"}),s.name&&e("p",{style:{color:"red"},children:s.name})]}),r("div",{className:"mb-1",children:[e(c,{className:"form-label",for:"register-email",children:"Email"}),e(w,{type:"email",id:"email",value:n,onChange:a=>b(a.target.value),placeholder:"john@example.com"}),s.email&&e("p",{style:{color:"red"},children:s.email})]}),r("div",{className:"mb-1",children:[e(c,{className:"form-label",for:"register-password",children:"Password"}),e(f,{className:"input-group-merge",id:"password",value:o,onChange:a=>x(a.target.value)}),s.password&&e("p",{style:{color:"red"},children:s.password})]}),r("div",{className:"mb-1",children:[e(c,{className:"form-label",for:"confirmpassword",children:"Confirm Password"}),e(f,{className:"input-group-merge",id:"confirmpassword",value:m,onChange:a=>N(a.target.value)}),s.confirmPassword&&e("p",{style:{color:"red"},children:s.confirmPassword})]}),e("button",{className:"custom-button",type:"submit",children:"Sign up"})]}),r("p",{className:"text-center mt-2",children:[e("span",{className:"me-25",children:"  Already have an account? "}),e(A,{to:"/login",children:e("span",{children:"Login"})})]})]})})]})})};export{Q as default};
