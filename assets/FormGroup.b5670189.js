import{p as a,t as p,m as u,a as x,j as v}from"./index.6f6a8d80.js";var w=["className","cssModule","row","disabled","check","inline","floating","noMargin","tag","switch"];function y(e,i){if(e==null)return{};var s=k(e,i),o,t;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],!(i.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,o)||(s[o]=e[o]))}return s}function k(e,i){if(e==null)return{};var s={},o=Object.keys(e),t,r;for(r=0;r<o.length;r++)t=o[r],!(i.indexOf(t)>=0)&&(s[t]=e[t]);return s}var j={children:a.exports.node,row:a.exports.bool,check:a.exports.bool,switch:a.exports.bool,inline:a.exports.bool,floating:a.exports.bool,noMargin:a.exports.bool,disabled:a.exports.bool,tag:p,className:a.exports.string,cssModule:a.exports.object};function M(e){var i=e.className,s=e.cssModule,o=e.row,t=e.disabled,r=e.check,d=e.inline,g=e.floating,m=e.noMargin,n=e.tag,c=n===void 0?"div":n,f=e.switch,b=y(e,w),l=r||f,h=u(x(i,o?"row":!1,l?"form-check":!1,f?"form-switch":!1,l||m?!1:"mb-3",l&&d?"form-check-inline":!1,l&&t?"disabled":!1,g&&"form-floating"),s);return c==="fieldset"&&(b.disabled=t),v(c,{...b,className:h})}M.propTypes=j;export{M as F};
