import{r as l,K as k,j as e,v as t,L as N,B as C,M as L}from"./index.646e8ac6.js";import{b as j,I as P}from"./staricon.ce185bf2.js";import{R,c as m,F as E,L as c,h as v}from"./App.954e6202.js";import{C as F,a as T}from"./CardTitle.a3f9ac64.js";import{b as z}from"./bgimage.59825773.js";const q=()=>{const[s,S]=l.exports.useState(""),[n,I]=l.exports.useState(""),[d,o]=l.exports.useState(null),[i,w]=l.exports.useState(!1),_=k(),[g,u]=l.exports.useState(!1),y=async r=>{var p,h,f,b;if(r.preventDefault(),!s.trim()||!n.trim()){o("Email and password are required.");return}if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(s)){o("Please enter a valid email.");return}o(null),u(!0);try{const a=await L.post("https://bapi.reownlogics.com/api/login",{email:s,password:n},{headers:{"Content-Type":"application/json"}}),x=a.data.token;x&&(i&&localStorage.setItem("authEmail",s),localStorage.setItem("authToken",x),localStorage.setItem("user_name",a.data.name),localStorage.setItem("user_first_name",a.data.employee_id.middle_name),localStorage.setItem("user_last_name",(p=a.data.employee_id)==null?void 0:p.last_name),localStorage.setItem("user_email",a.data.email),console.log("i am login",a.data),localStorage.setItem("user_id",a.data.id),localStorage.setItem("employee_id",a.data.employee_id.id),localStorage.setItem("user_role",a.data.role),localStorage.setItem("current_role",a.data.current_role),localStorage.setItem("picture",a.data.picture),localStorage.setItem("department",((h=a.data.department)==null?void 0:h.name)||"No Department"),console.log(" response.data.picture",a.data.picture),_("/home"))}catch(a){console.error("Login Error:",a),o(((b=(f=a.response)==null?void 0:f.data)==null?void 0:b.message)||"Invalid credentials"),u(!1)}};return e("div",{className:"auth-wrapper auth-cover",children:t(R,{className:"auth-inner m-0",children:[e(m,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",style:{backgroundImage:`url(${z})`,backgroundSize:"cover",backgroundPosition:"center",height:"100vh"},children:e("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5"})}),e(m,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:t(m,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[e("img",{src:j,alt:"QR Code",className:"img-fluid",width:"20"}),e(F,{tag:"h2",className:"fw-bold mb-1",children:"Welcome to Bona Fide"}),e(T,{className:"mb-2",children:"Please login here"}),t(E,{className:"auth-login-form mt-2",onSubmit:y,children:[d&&e("div",{className:"alert alert-danger p-2",role:"alert",children:e("strong",{children:d})}),t("div",{className:"mb-1",children:[e(c,{className:"form-label",for:"login-email",children:"Email"}),e(v,{type:"email",value:s,onChange:r=>S(r.target.value),id:"login-email",placeholder:"john@example.com",autoFocus:!0})]}),t("div",{className:"mb-1",children:[e("div",{className:"d-flex justify-content-between",children:e(c,{className:"form-label",for:"login-password",children:"Password"})}),e(P,{className:"input-group-merge",id:"login-password",value:n,onChange:r=>I(r.target.value)})]}),t("div",{className:"d-flex justify-content-between",children:[t("div",{className:"form-check mb-1",children:[e(v,{type:"checkbox",id:"remember-me",checked:i,onChange:()=>w(!i)}),e(c,{className:"form-check-label",for:"remember-me",children:"Remember Me"})]}),e(N,{to:"/forgot-password",children:e("small",{children:"Forgot Password?"})})]}),e(C,{type:"submit",color:"primary",className:"custom-button",block:!0,disabled:g,children:g?"Signing In...":"Sign In"})]}),t("p",{className:"text-center mt-2",children:[e("span",{className:"me-25",children:"Do not have an account?"}),e(N,{to:"/register",children:e("span",{children:"Sign Up"})})]})]})})]})})};export{q as default};
