import{p as s,t as Z,a9 as B,m as E,a as W,j as i,r as d,v as l,K as R}from"./index.0c706ca6.js";import{h as L,s as F,M as G,k as V,F as U,L as O,g as w,l as H}from"./App.dac02815.js";import{F as P}from"./FormGroup.f1724220.js";import{f as S}from"./format.8c6abd95.js";var ee=["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barStyle","barAriaValueText","barAriaLabelledBy"];function A(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,t)}return n}function N(e){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?A(Object(n),!0).forEach(function(t){te(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function te(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function re(e,a){if(e==null)return{};var n=oe(e,a),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(a.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function oe(e,a){if(e==null)return{};var n={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(a.indexOf(r)>=0)&&(n[r]=e[r]);return n}var ne={animated:s.exports.bool,bar:s.exports.bool,barAriaLabelledBy:s.exports.string,barAriaValueText:s.exports.string,barClassName:s.exports.string,barStyle:s.exports.object,children:s.exports.node,className:s.exports.string,cssModule:s.exports.object,color:s.exports.string,max:s.exports.oneOfType([s.exports.string,s.exports.number]),min:s.exports.oneOfType([s.exports.string,s.exports.number]),multi:s.exports.bool,striped:s.exports.bool,style:s.exports.object,tag:Z,value:s.exports.oneOfType([s.exports.string,s.exports.number])};function ae(e){var a=e.children,n=e.className,t=e.barClassName,r=e.cssModule,o=e.value,c=o===void 0?0:o,m=e.min,y=m===void 0?0:m,g=e.max,b=g===void 0?100:g,x=e.animated,u=e.striped,f=e.color,k=e.bar,j=e.multi,C=e.tag,p=C===void 0?"div":C,h=e.style,v=h===void 0?{}:h,I=e.barStyle,K=I===void 0?{}:I,Y=e.barAriaValueText,q=e.barAriaLabelledBy,_=re(e,ee),J=B(c)/B(b)*100,Q=E(W(n,"progress"),r),X=E(W("progress-bar",k&&n||t,x?"progress-bar-animated":null,f?"bg-".concat(f):null,u||x?"progress-bar-striped":null),r),D={className:X,style:N(N(N({},k?v:{}),K),{},{width:"".concat(J,"%")}),role:"progressbar","aria-valuenow":c,"aria-valuemin":y,"aria-valuemax":b,"aria-valuetext":Y,"aria-labelledby":q,children:a};return k?i(p,{..._,...D}):i(p,{..._,style:v,className:Q,children:j?a:i("div",{...D})})}ae.propTypes=ne;function ie(e,a){if(e==null)return{};var n=se(e,a),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(a.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function se(e,a){if(e==null)return{};var n={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(a.indexOf(r)>=0)&&(n[r]=e[r]);return n}var $=d.exports.forwardRef(function(e,a){var n=e.color,t=n===void 0?"currentColor":n,r=e.size,o=r===void 0?24:r,c=ie(e,["color","size"]);return i("svg",{ref:a,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...c,children:i("polyline",{points:"6 9 12 15 18 9"})})});$.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};$.displayName="ChevronDown";const be=$;function le(e,a){if(e==null)return{};var n=ce(e,a),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(a.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function ce(e,a){if(e==null)return{};var n={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(a.indexOf(r)>=0)&&(n[r]=e[r]);return n}var M=d.exports.forwardRef(function(e,a){var n=e.color,t=n===void 0?"currentColor":n,r=e.size,o=r===void 0?24:r,c=le(e,["color","size"]);return l("svg",{ref:a,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...c,children:[i("path",{d:"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"}),i("line",{x1:"18",y1:"9",x2:"12",y2:"15"}),i("line",{x1:"12",y1:"9",x2:"18",y2:"15"})]})});M.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};M.displayName="Delete";const xe=M;function pe(e,a){if(e==null)return{};var n=de(e,a),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(a.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function de(e,a){if(e==null)return{};var n={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(a.indexOf(r)>=0)&&(n[r]=e[r]);return n}var T=d.exports.forwardRef(function(e,a){var n=e.color,t=n===void 0?"currentColor":n,r=e.size,o=r===void 0?24:r,c=pe(e,["color","size"]);return l("svg",{ref:a,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...c,children:[i("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),i("polyline",{points:"7 10 12 15 17 10"}),i("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]})});T.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};T.displayName="Download";const ke=T;function ue(e,a){if(e==null)return{};var n=he(e,a),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(a.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function he(e,a){if(e==null)return{};var n={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(a.indexOf(r)>=0)&&(n[r]=e[r]);return n}var z=d.exports.forwardRef(function(e,a){var n=e.color,t=n===void 0?"currentColor":n,r=e.size,o=r===void 0?24:r,c=ue(e,["color","size"]);return l("svg",{ref:a,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...c,children:[i("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),i("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})});z.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};z.displayName="Edit";const Oe=z;/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var we=L("outline","briefcase","IconBriefcase",[["path",{d:"M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2",key:"svg-1"}],["path",{d:"M12 12l0 .01",key:"svg-2"}],["path",{d:"M3 13a20 20 0 0 0 18 0",key:"svg-3"}]]);/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var je=L("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]]);/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ce=L("outline","clock","IconClock",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pe=L("outline","user-check","IconUserCheck",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4",key:"svg-1"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-2"}]]);const ge="http://bapi.reownlogics.com/api/employee/check-out",Se=({setCheckOutModal:e,checkOutModal:a,time:n})=>{const[t,r]=d.exports.useState({lat:null,lng:null}),[o,c]=d.exports.useState(null),[m,y]=d.exports.useState(S(new Date,"hh:mm a"));d.exports.useEffect(()=>{const u=setInterval(()=>{y(S(new Date,"hh:mm a"))},1e3);return()=>clearInterval(u)},[]);const g=()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(u=>{r({lat:u.coords.latitude,lng:u.coords.longitude})},u=>{alert("Unable to retrieve location. Please enable GPS.")}):alert("Geolocation is not supported by this browser.")},b=async()=>{if(!o){alert('Please select either "On Site" or "Out of Radius".');return}if(!t.lat||!t.lng){alert("Please get your location first.");return}const u={site:o,out_lat:t.lat||0,out_lng:t.lng||0};try{const f=localStorage.getItem("authToken"),k=await R.post(ge,u,{headers:{Authorization:`Bearer ${f}`,Accept:"application/json"}});e(!1),r({lat:"",lng:""})}catch{alert("Failed to check out. Please try again.")}},x=F.button`
    background-color: #0C1539 !important;
    width: 155px;
    height: 40px;
    border-radius: 10px !important;
    color: white;
    cursor: pointer;
    border: none;
    &:hover {
      background-color: #1a2447 !important;
    }
  `;return i("div",{className:"vertically-centered-modal",children:l(G,{isOpen:a,toggle:()=>e(!a),className:"modal-dialog-centered",children:[l(V,{style:{padding:"17px 30px 0 30px",width:"70%",margin:"0 auto"},children:[i("p",{style:{fontSize:"16px",color:"black"},children:"Check Out Time"}),l("div",{className:"text-center",children:[i("p",{children:"Your Check Out time is"}),i("p",{children:n}),l(U,{className:"w-sm-50 text-start",children:[i(P,{className:"mt-1",check:!0,children:l(O,{check:!0,children:[i(w,{type:"checkbox",name:"site",value:"on-site",checked:o==="on-site",onChange:()=>c("on-site")}),"On Site"]})}),i(P,{check:!0,children:l(O,{check:!0,children:[i(w,{type:"checkbox",name:"site",value:"out-of-radius",checked:o==="out-of-radius",onChange:()=>c("out-of-radius")}),"Out of Radius"]})}),l("p",{className:"pt-2",children:["latitude:",t.lat,", longitude:",t.lng]})]})]})]}),i(H,{className:"border-none text-center",style:{border:"none"},children:l("div",{className:"d-flex justify-content-center w-100",style:{gap:"15px"},children:[i(x,{onClick:b,children:"OK"}),i(x,{onClick:g,children:"Get My Location"})]})})]})})};const Le=({checkInModal:e,setCheckInModal:a,time:n})=>{const[t,r]=d.exports.useState({option1:!1,option2:!1,option3:!1}),[o,c]=d.exports.useState({latitude:null,longitude:null}),[m,y]=d.exports.useState(!1),[g,b]=d.exports.useState(""),[x,u]=d.exports.useState(S(new Date,"hh:mm a"));d.exports.useEffect(()=>{const p=setInterval(()=>{u(S(new Date,"hh:mm a"))},1e3);return()=>clearInterval(p)},[]);const f=()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(p=>{const{latitude:h,longitude:v}=p.coords;c({latitude:h,longitude:v})},p=>{console.error("Error getting location:",p)}):console.error("Geolocation is not supported by this browser.")},k=async()=>{const p=t.option1?"on-site":t.option2?"out-of-radius":t.option3?"vacation":"";if(!p){alert("Please select a site option before checking in.");return}if(!o.latitude||!o.longitude){alert("Please get Location First.");return}y(!0);try{const h=localStorage.getItem("authToken"),v=await R.post("http://bapi.reownlogics.com/api/employee/check-in",{site:p,lat:o.latitude||0,lng:o.longitude||0,comment:g},{headers:{Authorization:`Bearer ${h}`,Accept:"application/json"}});a(!1),c({latitude:"",longitude:""})}catch(h){console.error("Error checking in:",h),alert("Failed to check-in. Please try again.")}finally{y(!1)}},j=p=>{const{name:h,checked:v}=p.target;r({option1:!1,option2:!1,option3:!1,[h]:v})},C=F.button`
    background-color: #0c1539 !important;
    width: 155px;
    height: 40px;
    border-radius: 10px !important;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
    border: none;

    &:hover {
      background-color: #1a2447 !important;
    }
  `;return i("div",{className:"vertically-centered-modal",children:l(G,{isOpen:e,toggle:()=>a(!e),className:"modal-dialog-centered",children:[l(V,{style:{padding:"17px 30px"},children:[i("p",{className:"pb-2",style:{fontSize:"16px",color:"black"},children:"Check In Time"}),l("div",{className:"text-start",children:[l("p",{children:["Your Check-in time is ",n]}),i("p",{children:"Where are you today?"}),l(U,{children:[i(P,{check:!0,children:l(O,{check:!0,children:[i(w,{type:"checkbox",name:"option1",checked:t.option1,onChange:j}),"On Site"]})}),i(P,{check:!0,children:l(O,{check:!0,children:[i(w,{type:"checkbox",name:"option2",checked:t.option2,onChange:j}),"Out of Radius"]})}),t.option2&&l("div",{children:[i(O,{for:"locationDetails",children:"Reason"}),i(w,{type:"textarea",onChange:p=>b(p.target.value),value:g,val:!0,name:"locationDetails",id:"locationDetails"})]}),i(P,{check:!0,children:l(O,{check:!0,children:[i(w,{type:"checkbox",name:"option3",checked:t.option3,onChange:j}),"On Vacation"]})})]}),o.latitude&&o.longitude&&i("div",{className:"mt-3 text-center",children:l("p",{children:["Latitude: ",o.latitude,", Longitude: ",o.longitude]})})]})]}),i(H,{className:"border-none text-center pt-2",children:l("div",{className:"d-flex w-100 justify-content-between",children:[i(C,{onClick:f,children:"Get My Location"}),i(C,{onClick:k,disabled:m,children:m?"Checking In...":"Check In"})]})})]})})};export{be as C,xe as D,Oe as E,Pe as I,ae as P,Se as a,Le as b,ke as c,Ce as d,je as e,we as f};
