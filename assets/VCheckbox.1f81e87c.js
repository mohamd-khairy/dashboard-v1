import{d as g,c as t}from"./VCheckboxBtn.61f55216.js";import{m as F,u as I,V as l}from"./VTextField.5650c267.js";import{K as U,ac as B,U as R,a3 as $,ae as D,A as K,a7 as M,af as N,p as u,a8 as r}from"./index.8696608c.js";const j=U({...F(),...B(g(),["inline"])},"VCheckbox"),E=R()({name:"VCheckbox",inheritAttrs:!1,props:j(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,c){let{attrs:d,slots:a}=c;const s=$(e,"modelValue"),{isFocused:n,focus:i,blur:m}=I(e),V=D(),p=K(()=>e.id||`checkbox-${V}`);return M(()=>{const[b,f]=N(d),k=l.filterProps(e),v=t.filterProps(e);return u(l,r({class:["v-checkbox",e.class]},b,k,{modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,id:p.value,focused:n.value,style:e.style}),{...a,default:o=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:C,isValid:y}=o;return u(t,r(v,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},f,{error:y.value===!1,modelValue:s.value,"onUpdate:modelValue":A=>s.value=A,onFocus:i,onBlur:m}),a)}})}),{}}});export{E as V};
