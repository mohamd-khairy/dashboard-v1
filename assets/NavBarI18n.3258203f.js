import{bP as p,o as s,b as i,w as a,p as o,ak as m,c as g,F as _,a as f,ap as d,y as L,al as h,t as b}from"./index.e195cd26.js";import{V}from"./VMenu.62aeda27.js";import{V as v,a as k,b as x}from"./VList.9d440da5.js";import"./VOverlay.e3c69687.js";import"./forwardRefs.74a345f5.js";import"./lazy.3c63b833.js";import"./index.4f7ac4e6.js";import"./ssrBoot.d7cd1016.js";import"./VDivider.638f8eff.js";const C={__name:"I18n",props:{languages:{type:Array,required:!0},location:{type:null,required:!1,default:"bottom end"}},emits:["change"],setup(l,{emit:c}){const t=l,{locale:r}=p({useScope:"global"});return(n,u)=>(s(),i(h,{icon:"",variant:"text",color:"default",size:"small"},{default:a(()=>[o(m,{icon:"tabler-language",size:"24"}),o(V,{activator:"parent",location:t.location,offset:"14px"},{default:a(()=>[o(v,{"min-width":"175px"},{default:a(()=>[(s(!0),g(_,null,f(t.languages,e=>(s(),i(k,{key:e.i18nLang,value:e.i18nLang,onClick:y=>{r.value=e.i18nLang,n.$emit("change",e.i18nLang)}},{default:a(()=>[o(x,null,{default:a(()=>[d(L(e.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1},8,["location"])]),_:1}))}},E={__name:"NavBarI18n",setup(l){const{isAppRtl:c}=b(),t=[{label:"English",i18nLang:"en"},{label:"Arabic",i18nLang:"ar"}],r=n=>{c.value=n==="ar"};return(n,u)=>(s(),i(C,{languages:t,onChange:r}))}};export{E as default};
