import{r as p,v as c,j as l,p as s,a as w}from"./index.8f15b5f4.js";import{L as I,I as O,g as C,f as z}from"./App.8a97c86d.js";function k(e,i){if(e==null)return{};var n=L(e,i),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function L(e,i){if(e==null)return{};var n={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(i.indexOf(r)>=0)&&(n[r]=e[r]);return n}var x=p.exports.forwardRef(function(e,i){var n=e.color,t=n===void 0?"currentColor":n,r=e.size,o=r===void 0?24:r,a=k(e,["color","size"]);return c("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[l("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),l("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})});x.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};x.displayName="EyeOff";const E=x;function N(e,i){if(e==null)return{};var n=T(e,i),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function T(e,i){if(e==null)return{};var n={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(i.indexOf(r)>=0)&&(n[r]=e[r]);return n}var u=p.exports.forwardRef(function(e,i){var n=e.color,t=n===void 0?"currentColor":n,r=e.size,o=r===void 0?24:r,a=N(e,["color","size"]);return c("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[l("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),l("circle",{cx:"12",cy:"12",r:"3"})]})});u.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};u.displayName="Eye";const F=u,b=p.exports.forwardRef((e,i)=>{const{label:n,hideIcon:t,showIcon:r,visible:o,className:a,htmlFor:A,placeholder:h,iconSize:d,inputClassName:g,invalid:v,...m}=e,[f,B]=p.exports.useState(o),j=()=>{const y=d||14;return f===!1?t||l(F,{size:y}):r||l(E,{size:y})};return c(p.exports.Fragment,{children:[n?l(I,{className:"form-label",for:A,children:n}):null,c(O,{className:w({[a]:a,"is-invalid":v}),children:[l(C,{ref:i,invalid:v,type:f===!1?"password":"text",placeholder:h||"\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",className:w({[g]:g}),...n&&A?{id:A}:{},...m}),l(z,{className:"cursor-pointer",onClick:()=>B(!f),children:j()})]})]})});b.propTypes={invalid:s.exports.bool,hideIcon:s.exports.node,showIcon:s.exports.node,visible:s.exports.bool,className:s.exports.string,placeholder:s.exports.string,iconSize:s.exports.number,inputClassName:s.exports.string,label(e,i){if(e[i]&&e.htmlFor==="undefined")throw new Error("htmlFor prop is required when label prop is present")},htmlFor(e,i){if(e[i]&&e.label==="undefined")throw new Error("label prop is required when htmlFor prop is present")}};b.defaultProps={visible:!1};const R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHzSURBVHgB1ZdNUsJAEIVfAguXuGMZbhBvEPQA6g3wBMpOy5/wU66FG+DOnXgBiTeIJ3CWLDmACXYzKYxCkpkJQvlVRYcw0G+6e94EoASOe+/yhRJUUYrYpz81upowxIIhjttxgMqHfBXti7AzgwE2jLG91LgFQ0oIsM5T42MYYlSCn+lf0hThbQBNDDNQ9VfvxR4M0M5AxuoZasKooduMBhlYt/oFtB2rD9CkojPZcfvceJc5U9xa/UjMpq/vUES5BNLx4gmk8eRBJbCpIa9DKKBUAqq7pxgcck48oWx5CnOLSyDTbj/RcA/q8NxWrX6I2XTyljfRyg7Mq65wU5U6bAgBzLsivBuhSAAFpfRVuNFa/BKbRZCQIZVnTFtVLAXIoOzlCzv1sB0CEvPIYkhAn03FwW4QtAuiA1JzJlVtjYBitjn27x5wqBwnyUnnYLMIuijt0SBt1zm7oNeit/0NCGFDamedlIVOSD3SoX8+jLAo8M0gdwYUSFztGWpOyHCKT1WeD/7HWcDIL+TOLcLqqgZntI5j8vWQ/L2BTHu2RlTzK2hg8EASXUDWeA2fXWiiLUDu4Xi4+g6v/tvj/0xA8rFg9Z7+6o0FJNsrSN0KTVZvLEAyf0mNhzCkhIB4lBoH2AXkkPTs1xujBCV/ntsKxpTPFyF5oooPJCtEAAAAAElFTkSuQmCC";export{b as I,R as b};
