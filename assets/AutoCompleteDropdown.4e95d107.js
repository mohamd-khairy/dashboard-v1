import{a as _}from"./VList.35d78c12.js";import{d as g}from"./VTextField.b27bb6f2.js";import{V}from"./VDivider.c9b30b9a.js";import{V as x}from"./VSelect.2c43c85a.js";import{k as s,C as I,r as T,o as C,b as M,w as r,p as o,q as f}from"./index.8d01543a.js";const w={__name:"AutoCompleteDropdown",props:{valueText:String,placeholder:String,apiModel:Object,apiSearchMethod:Object,apiParams:Object},setup(h){const t=h,n=s([]),i=s(null),l=s(!1),c=e=>{clearTimeout(i.value),i.value=setTimeout(()=>{var a,m;l.value=!0;const p=!((a=e==null?void 0:e.target)!=null&&a.value)&&e&&typeof e=="string"?e:(m=e.target)==null?void 0:m.value;t.apiModel[t.apiSearchMethod]({search:p,...t.apiParams}).then(v=>{var u,d;n.value=((d=(u=v.data)==null?void 0:u.data)==null?void 0:d.data)||[]}).finally(()=>{l.value=!1})},800)};return I(()=>{console.log(t.valueText),t.valueText&&c(t.valueText)}),(e,p)=>{const a=T("VListItemContent");return C(),M(x,{items:f(n),loading:f(l)},{"prepend-item":r(()=>[o(_,null,{default:r(()=>[o(a,null,{default:r(()=>[o(g,{placeholder:t.placeholder,onInput:c},null,8,["placeholder"])]),_:1})]),_:1}),o(V,{class:"mt-2"})]),_:1},8,["items","loading"])}}};export{w as _};
