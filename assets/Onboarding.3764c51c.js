import{r as l,K as Ze,j as e,F as Te,v as n,M as We}from"./index.e4a29e23.js";import{a8 as De,a9 as Ye,s as $e,P as Je,C as Xe,F as ea,R as m,c as d,L as o,h as c,Q as z,a2 as aa,U as Pe,V as p}from"./App.07cedc2c.js";De.registerLocale(Ye);const ta=Object.values(De.getNames("en")),na=$e.button`
  background-color: #0C1539 !important;
  width: 300px;
  padding: 10px;
  border-radius: 10px!important;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1a2447 !important; /* Lighter shade on hover */
  }
`,sa=()=>{const[N,V]=l.exports.useState(""),[g,Q]=l.exports.useState(""),[f,G]=l.exports.useState(""),[H,Z]=l.exports.useState(""),[T,W]=l.exports.useState(""),[x,Y]=l.exports.useState(""),[b,$]=l.exports.useState(""),[C,J]=l.exports.useState(""),[y,X]=l.exports.useState(""),[S,ee]=l.exports.useState(""),[v,ae]=l.exports.useState(""),[q,te]=l.exports.useState(""),[ne,ie]=l.exports.useState(""),[_,re]=l.exports.useState(""),[le,se]=l.exports.useState(""),[K,de]=l.exports.useState(""),[k,oe]=l.exports.useState(""),[O,ce]=l.exports.useState(""),[me,ue]=l.exports.useState(""),[he,pe]=l.exports.useState(""),[I,Ne]=l.exports.useState(""),[F,ge]=l.exports.useState(""),[A,fe]=l.exports.useState(""),[B,xe]=l.exports.useState(""),[L,be]=l.exports.useState(""),[P,Ce]=l.exports.useState(""),[D,ye]=l.exports.useState(""),[E,Se]=l.exports.useState(""),[M,ve]=l.exports.useState([]),[R,qe]=l.exports.useState(""),[w,_e]=l.exports.useState(""),[U,Ke]=l.exports.useState(""),[ke,h]=l.exports.useState(!1);l.exports.useState(""),l.exports.useState(""),l.exports.useState("");const[u,Oe]=l.exports.useState({}),Ee=Ze(),[t,Ie]=l.exports.useState({middleName:"",lastName:"",familyName:"",dob:"",nationality:"",maritalStatus:"",gender:"",religion:"",phone:"",email:"",qualification:"",city:"",streetNo:"",buildingNo:"",zipCode:"",homeCountryAddress:"",nextOfKinName:"",nextOfKinRelationship:"",nextOfKinPhone:"",nextOfKinEmail:"",bankName:""}),{register:ia,handleSubmit:Me,control:j,reset:Re}=Je(),Fe=localStorage.getItem("user_id"),Ae=async a=>{var Le;a.preventDefault(),h(!0);let r=!0,s={...t};if(N||(r=!1,s.middleName="Middle Name is required"),g||(r=!1,s.lastName="Last Name is required"),f||(r=!1,s.familyName="Family Name is required"),T||(r=!1,s.dob="Date of Birth is required"),x||(r=!1,s.nationality="Nationality is required"),b||(r=!1,s.maritalStatus="Marital Status is required"),C||(r=!1,s.gender="Gender is required"),y||(r=!1,s.religion="Religion is required"),S||(r=!1,s.phone="Phone is required"),v||(r=!1,s.email="Email is required"),q||(r=!1,s.qualification="Qualification is required"),_||(r=!1,s.city="City is required"),K||(r=!1,s.streetNo="Street No is required"),k||(r=!1,s.buildingNo="Building No is required"),O||(r=!1,s.zipCode="Zip Code is required"),I||(r=!1,s.homeCountryAddress="Home Country Address is required"),F||(r=!1,s.nextOfKinName="Next of Kin Name is required"),A||(r=!1,s.nextOfKinRelationship="Relationship with Next of Kin is required"),B||(r=!1,s.nextOfKinPhone="Mobile Number - Next of Kin is required"),L||(r=!1,s.nextOfKinEmail="Email - Next of Kin is required"),P||(r=!1,s.bankName="Bank Name is required"),D||(r=!1,s.iban="IBAN is required"),E||(r=!1,s.bankLetter="Bank Letter is required"),M||(r=!1,s.idCard="ID Card is required"),R||(r=!1,s.passport="Passport is required"),w||(r=!1,s.educationalCertificate="Educational Certificate is required"),U||(r=!1,s.idNumber="ID Number is required"),r)Ie({});else{Ie(s),h(!1);return}const Be=localStorage.getItem("authToken");if(!Be){console.error("User token is missing");return}try{const i=new FormData;i.append("middle_name",N),i.append("last_name",g),i.append("family_name",f),i.append("name_in_arabic",H),i.append("date_of_birth",T),i.append("nationality",x),i.append("marital_status",b),i.append("gender",C),i.append("religion",y),i.append("phone",S),i.append("email",v),i.append("qualification",q),i.append("major",ne),i.append("city",_),i.append("district",le),i.append("street_no",K),i.append("building_no",k),i.append("zip_code",O),i.append("additional_number",me),i.append("unit_number",he),i.append("home_country_address",I),i.append("next_of_kin_name",F),i.append("next_of_kin_relationship",A),i.append("next_of_kin_mobile",B),i.append("next_of_kin_email",L),i.append("bank_name",P),i.append("iban",D),i.append("peronal_id_number",U),i.append("user_id",Fe),i.append("hired_by",Fe),E&&i.append("bank_letter",E),M&&i.append("personal_id",M),R&&i.append("passport",R),w&&i.append("educational_cert",w);for(let[Ge,He]of i.entries())console.log(Ge,He);const Qe=await We.post("https://bapi.reownlogics.com/api/onboard",i,{headers:{Authorization:`Bearer ${Be}`}});console.log("API Response:",Qe.data),Oe({}),Re(),Ve(),h(!1),Ee("/login")}catch(i){console.error("Error creating employee:",((Le=i.response)==null?void 0:Le.data)||i.message),Oe(i.response.data.errors),h(!1)}},we=a=>{Se(a)},Ue=a=>{ve(a)},je=a=>{qe(a)},ze=a=>{_e(a)},Ve=()=>{V(""),Q(""),G(""),Z(""),W(""),Y(""),$(""),J(""),X(""),ee(""),ae(""),te(""),ie(""),re(""),se(""),de(""),oe(""),ce(""),ue(""),pe(""),Ne(""),ge(""),fe(""),xe(""),be(""),Ce(""),ye(""),Se(""),ve([]),qe(""),_e(""),Ke("")};return e(Te,{children:n(Xe,{className:" bg-white shadow-none p-2 m-2",children:[e("h3",{className:"text-center mb-2",children:" Onboarding "}),n(ea,{onSubmit:Me(Ae),className:"container",children:[n(m,{children:[n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Middle Name*"}),e(c,{type:"text",value:N,onChange:a=>V(a.target.value),required:!0}),t.middleName&&e("small",{className:"text-danger",children:t.middleName})]}),n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Last Name*"}),e(c,{type:"text",value:g,onChange:a=>Q(a.target.value),required:!0}),t.lastName&&e("small",{className:"text-danger",children:t.lastName})]})]}),n(m,{children:[n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Family Name*"}),e(c,{type:"text",value:f,onChange:a=>G(a.target.value),required:!0}),t.familyName&&e("small",{className:"text-danger",children:t.familyName})]}),n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Name in Arabic"}),e(c,{type:"text",value:H,onChange:a=>Z(a.target.value)}),t.nameInArabic&&e("small",{className:"text-danger",children:t.nameInArabic})]})]}),n(m,{children:[n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Date of Birth*"}),e(z,{name:"dob",control:j,defaultValue:"",render:({field:a})=>e(aa,{...a,className:"form-control",options:{dateFormat:"Y-m-d"},onChange:r=>{if(r.length>0){const s=r[0].toISOString().split("T")[0];a.onChange(s),W(s),console.log("DOB Sent to Backend:",s)}}}),rules:{required:!0}}),t.dob&&e("small",{className:"text-danger",children:t.dob})]}),n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Nationality*"}),n(c,{type:"select",value:x,onChange:a=>Y(a.target.value),required:!0,children:[e("option",{value:"",children:"Select..."}),ta.map((a,r)=>e("option",{value:a,children:a},r))]}),t.nationality&&e("small",{className:"text-danger",children:t.nationality})]})]}),n(m,{children:[n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Marital Status*"}),n(c,{type:"select",value:b,onChange:a=>$(a.target.value),required:!0,children:[e("option",{children:"Select..."}),e("option",{children:"Single"}),e("option",{children:"Married"}),e("option",{children:"Divorced"}),e("option",{children:"Widowed"})]}),t.maritalStatus&&e("small",{className:"text-danger",children:t.maritalStatus})]}),n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Gender*"}),n(c,{type:"select",value:C,onChange:a=>J(a.target.value),required:!0,children:[e("option",{children:"Select..."}),e("option",{children:"Male"}),e("option",{children:"Female"}),e("option",{children:"Other"})]}),t.gender&&e("small",{className:"text-danger",children:t.gender})]})]}),n(m,{children:[n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Religion*"}),e(c,{type:"text",value:y,onChange:a=>X(a.target.value),required:!0}),t.religion&&e("small",{className:"text-danger",children:t.religion})]}),n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Phone*"}),e(z,{name:"phone",control:j,defaultValue:S,rules:{required:!0},render:({field:a})=>e(Pe,{...a,country:"us",inputClass:"form-control",value:a.value,onChange:r=>{a.onChange(r),ee(r)}})}),t.phone&&e("small",{className:"text-danger",children:t.phone}),(u==null?void 0:u.phone)&&e("small",{className:"text-danger",children:u.phone})]})]}),n(m,{children:[n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Email*"}),e(c,{type:"email",value:v,onChange:a=>ae(a.target.value),required:!0}),(u==null?void 0:u.email)&&e("small",{className:"text-danger",children:u.email}),t.email&&e("small",{className:"text-danger",children:t.email})]}),n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Qualification*"}),e(c,{type:"text",value:q,onChange:a=>te(a.target.value),required:!0}),t.qualification&&e("small",{className:"text-danger",children:t.qualification})]})]}),n(m,{children:[n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Major"}),e(c,{type:"text",value:ne,onChange:a=>ie(a.target.value)}),t.major&&e("small",{className:"text-danger",children:t.major})]}),n(d,{md:"6",className:"mb-1",children:[e(o,{children:"City*"}),e(c,{type:"text",value:_,onChange:a=>re(a.target.value),required:!0}),t.city&&e("small",{className:"text-danger",children:t.city})]})]}),n(m,{children:[n(d,{md:"6",className:"mb-1",children:[e(o,{children:"District"}),e(c,{type:"text",value:le,onChange:a=>se(a.target.value)}),t.district&&e("small",{className:"text-danger",children:t.district})]}),n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Street No.*"}),e(c,{type:"number",value:K,onChange:a=>de(a.target.value),required:!0}),t.streetNo&&e("small",{className:"text-danger",children:t.streetNo})]})]}),n(m,{children:[n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Building No.*"}),e(c,{type:"text",value:k,onChange:a=>oe(a.target.value),required:!0}),t.buildingNo&&e("small",{className:"text-danger",children:t.buildingNo})]}),n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Zip Code*"}),e(c,{type:"text",value:O,onChange:a=>ce(a.target.value),required:!0}),t.zipCode&&e("small",{className:"text-danger",children:t.zipCode})]})]}),n(m,{children:[n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Additional Number"}),e(c,{type:"text",value:me,onChange:a=>ue(a.target.value)}),t.additionalNumber&&e("small",{className:"text-danger",children:t.additionalNumber})]}),n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Unit Number"}),e(c,{type:"text",value:he,onChange:a=>pe(a.target.value)}),t.unitNumber&&e("small",{className:"text-danger",children:t.unitNumber})]})]}),n(m,{children:[n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Home Country Address*"}),e(c,{type:"text",value:I,onChange:a=>Ne(a.target.value),required:!0}),t.homeCountryAddress&&e("small",{className:"text-danger",children:t.homeCountryAddress})]}),n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Next of Kin (Name)*"}),e(c,{type:"text",value:F,onChange:a=>ge(a.target.value),required:!0}),t.nextOfKinName&&e("small",{className:"text-danger",children:t.nextOfKinName})]})]}),n(m,{children:[n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Relationship with Next of Kin*"}),e(c,{type:"text",value:A,onChange:a=>fe(a.target.value),required:!0}),t.nextOfKinRelationship&&e("small",{className:"text-danger",children:t.nextOfKinRelationship})]}),n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Mobile Number - Next of Kin*"}),e(z,{name:"nextOfKinPhone",control:j,defaultValue:"",render:({field:a})=>e(Pe,{...a,country:"us",inputClass:"form-control",value:B,onChange:r=>{a.onChange(r),xe(r)}}),rules:{required:!0}}),t.nextOfKinPhone&&e("small",{className:"text-danger",children:t.nextOfKinPhone})]})]}),n(m,{children:[n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Email - Next of Kin*"}),e(c,{type:"email",value:L,onChange:a=>be(a.target.value),required:!0}),t.nextOfKinEmail&&e("small",{className:"text-danger",children:t.nextOfKinEmail})]}),n(d,{md:"6",className:"mb-1",children:[e(o,{children:"Bank Name*"}),e(c,{type:"text",value:P,onChange:a=>Ce(a.target.value),required:!0}),t.bankName&&e("small",{className:"text-danger",children:t.bankName})]})]}),e(m,{className:"",children:n(d,{md:"12",children:[e(o,{children:"IBAN*"}),e(c,{type:"text",value:D,onChange:a=>ye(a.target.value),required:!0}),t.iban&&e("small",{className:"text-danger",children:t.iban}),(u==null?void 0:u.iban)&&e("small",{className:"text-danger",children:u.iban})]})}),n(d,{sm:"12",children:[e("label",{children:"Bank Letter*"}),e(p,{onFileUpload:we}),t.bankLetter&&e("small",{className:"text-danger",children:t.bankLetter})]}),n(d,{sm:"12",children:[e("label",{children:"Please Share Front and Back Image of ID Card"}),e(p,{onFileUpload:Ue}),t.idCard&&e("small",{className:"text-danger",children:t.idCard})]}),e(m,{className:"mb-1",children:n(d,{md:"12",children:[e(o,{children:"ID Number*"}),e(c,{type:"text",value:U,onChange:a=>Ke(a.target.value)}),t.idNumber&&e("small",{className:"text-danger",children:t.idNumber})]})}),n(d,{sm:"12",children:[e("label",{children:"Passport*"}),e(p,{onFileUpload:je}),t.passport&&e("small",{className:"text-danger",children:t.passport})]}),n(d,{sm:"12",children:[e("label",{children:"Educational Certificate* (Attach your certificate for the last degree attained)"}),e(p,{onFileUpload:ze}),t.educationalCertificate&&e("small",{className:"text-danger",children:t.educationalCertificate})]}),e("div",{className:"text-center mt-3",children:e(na,{type:"submit",onClick:Ae,disabled:ke,children:ke?"Submitting...":"Submit"})})]})]})})};export{sa as default};
