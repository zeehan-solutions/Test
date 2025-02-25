import{r as o,a6 as R,j as e,v as r,K as F}from"./index.8f15b5f4.js";import{b as $,I as f}from"./staricon.4c99df4d.js";import{R as O,c as m,F as k,L as d,g as w}from"./App.8a97c86d.js";import{C as q,a as z}from"./CardTitle.a973e15f.js";import{b as A}from"./bgimage.20ea7dbb.js";const Q=()=>{const[i,b]=o.exports.useState(""),[n,v]=o.exports.useState(""),[t,x]=o.exports.useState(""),[c,P]=o.exports.useState(""),[a,N]=o.exports.useState({}),[p,C]=o.exports.useState(""),y=R(),S=/^\d{6}$/,E=/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/,T=/^[a-zA-Z0-9@#$%^&*]{6,20}$/,j=()=>{let s={};return n.trim()?S.test(n)||(s.otp="Invalid OTP format."):s.otp="OTP is required.",i.trim()?E.test(i)||(s.email="Invalid email format."):s.email="Email is required.",t.trim()?T.test(t)||(s.password="Password must be 6-20 characters and can contain @#$%^&*."):s.password="Password is required.",c.trim()?c!==t&&(s.confirmPassword="Passwords do not match."):s.confirmPassword="Confirm Password is required.",N(s),Object.keys(s).length===0},I=async s=>{var g,u,h;if(s.preventDefault(),!!j())try{const l=await F.post("https://bapi.reownlogics.com/api/password/reset",{email:i,otp:n,password:t,confirm_password:c});console.log("Password Changed successfuly Successful:",l.data),setTimeout(()=>{y("/login")},2e3)}catch(l){console.error("Change Password Error:",((g=l.response)==null?void 0:g.data)||l.message),C(((h=(u=l.response)==null?void 0:u.data)==null?void 0:h.message)||"Change Password Fail. Try again.")}};return e("div",{className:"auth-wrapper auth-cover",children:r(O,{className:"auth-inner m-0",children:[e(m,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",style:{backgroundImage:`url(${A})`,backgroundSize:"cover",backgroundPosition:"center",height:"100vh"},children:e("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5"})}),e(m,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:r(m,{className:"px-xl-2 mx-auto",xs:"12",sm:"8",md:"6",lg:"12",children:[e("img",{src:$,alt:"QR Code",className:"img-fluid",width:"20"}),e(q,{tag:"h2",className:"fw-bold mb-1",children:"Change Password \u{1F44B}"}),e(z,{className:"mb-2",children:"Please enter your new password"}),r(k,{className:"auth-register-form mt-2",onSubmit:I,children:[p&&e("div",{className:"alert alert-danger p-1",role:"alert",children:p}),r("div",{className:"mb-1",children:[e(d,{className:"form-label",for:"register-email",children:"Email"}),e(w,{type:"email",id:"email",value:i,onChange:s=>b(s.target.value),placeholder:"john@example.com"}),a.email&&e("p",{style:{color:"red"},children:a.email})]}),r("div",{className:"mb-1",children:[e(d,{className:"form-label",for:"register-email",children:"OTP"}),e(w,{type:"text",id:"otp",value:n,onChange:s=>v(s.target.value),placeholder:"john"}),e("p",{style:{color:"red"},children:a.otp})]}),r("div",{className:"mb-1",children:[e(d,{className:"form-label",for:"register-password",children:"Password"}),e(f,{className:"input-group-merge",id:"password",value:t,onChange:s=>x(s.target.value)}),a.password&&e("p",{style:{color:"red"},children:a.password})]}),r("div",{className:"mb-1",children:[e(d,{className:"form-label",for:"confirmpassword",children:"Confirm Password"}),e(f,{className:"input-group-merge",id:"confirmpassword",value:c,onChange:s=>P(s.target.value)}),a.confirmPassword&&e("p",{style:{color:"red"},children:a.confirmPassword})]}),e("button",{className:"custom-button",type:"submit",children:"Change Password"})]})]})})]})})};export{Q as default};
