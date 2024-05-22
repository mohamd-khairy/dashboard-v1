import{K as I,ad as B,bo as K,M as _,aR as Y,S as Z,U as F,a3 as g,ae as j,A as o,aM as Q,J as W,a6 as X,Z as i,a7 as A,p as d,bj as p,z as M,k as ee,af as le,a8 as P,ar as ae,b0 as te,F as ne,ak as oe,aO as ue,aU as ie,aJ as x,aF as re,Y as ce,ba as se,ab as de,ac as ve}from"./index.e195cd26.js";import{a as fe}from"./VTextField.0ba2900d.js";const E=Symbol.for("vuetify:selection-control-group"),J=I({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:B,trueIcon:B,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:K},..._(),...Y(),...Z()},"SelectionControlGroup"),me=I({...J({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),ke=F()({name:"VSelectionControlGroup",props:me(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:c}=u;const l=g(e,"modelValue"),t=j(),v=o(()=>e.id||`v-selection-control-group-${t}`),r=o(()=>e.name||v.value),a=new Set;return Q(E,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),W(()=>{a.delete(n)})}}),X({[e.defaultsTarget]:{color:i(e,"color"),disabled:i(e,"disabled"),density:i(e,"density"),error:i(e,"error"),inline:i(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:r,falseIcon:i(e,"falseIcon"),trueIcon:i(e,"trueIcon"),readonly:i(e,"readonly"),ripple:i(e,"ripple"),type:i(e,"type"),valueComparator:i(e,"valueComparator")}}),A(()=>{var n;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=c.default)==null?void 0:n.call(c)])}),{}}}),L=I({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,..._(),...J()},"VSelectionControl");function be(e){const u=ue(E,void 0),{densityClasses:c}=ie(e),l=g(e,"modelValue"),t=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=o(()=>e.falseValue!==void 0?e.falseValue:!1),r=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=o({get(){const m=u?u.modelValue.value:l.value;return r.value?x(m).some(s=>e.valueComparator(s,t.value)):e.valueComparator(m,t.value)},set(m){if(e.readonly)return;const s=m?t.value:v.value;let b=s;r.value&&(b=m?[...x(l.value),s]:x(l.value).filter(C=>!e.valueComparator(C,t.value))),u?u.modelValue.value=b:l.value=b}}),{textColorClasses:n,textColorStyles:y}=re(o(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:V,backgroundColorStyles:k}=ce(o(()=>a.value&&!e.error&&!e.disabled?e.color:e.baseColor)),h=o(()=>a.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:c,trueValue:t,falseValue:v,model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:V,backgroundColorStyles:k,icon:h}}const O=F()({name:"VSelectionControl",directives:{Ripple:p},inheritAttrs:!1,props:L(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:c,slots:l}=u;const{group:t,densityClasses:v,icon:r,model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:V,backgroundColorStyles:k,trueValue:h}=be(e),m=j(),s=M(!1),b=M(!1),C=ee(),S=o(()=>e.id||`input-${m}`),G=o(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{C.value&&(C.value.checked=a.value)});function U(f){!G.value||(s.value=!0,se(f.target,":focus-visible")!==!1&&(b.value=!0))}function $(){s.value=!1,b.value=!1}function N(f){f.stopPropagation()}function q(f){!G.value||(e.readonly&&t&&de(()=>t.forceUpdate()),a.value=f.target.checked)}return A(()=>{var D,T,R;const f=l.label?l.label({label:e.label,props:{for:S.value}}):e.label,[z,H]=le(c),w=d("input",P({ref:C,checked:a.value,disabled:!!e.disabled,id:S.value,onBlur:$,onFocus:U,onInput:q,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:h.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},H),null);return d("div",P({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":s.value,"v-selection-control--focus-visible":b.value,"v-selection-control--inline":e.inline},v.value,e.class]},z,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",n.value],style:y.value},[(D=l.default)==null?void 0:D.call(l,{backgroundColorClasses:V,backgroundColorStyles:k}),ae(d("div",{class:["v-selection-control__input"]},[(R=(T=l.input)==null?void 0:T.call(l,{model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:V,backgroundColorStyles:k,inputNode:w,icon:r.value,props:{onFocus:U,onBlur:$,id:S.value}}))!=null?R:d(ne,null,[r.value&&d(oe,{key:"icon",icon:r.value},null),w])]),[[te("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),f&&d(fe,{for:S.value,onClick:N},{default:()=>[f]})])}),{isFocused:s,input:C}}}),ye=I({indeterminate:Boolean,indeterminateIcon:{type:B,default:"$checkboxIndeterminate"},...L({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),Se=F()({name:"VCheckboxBtn",props:ye(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,u){let{slots:c}=u;const l=g(e,"indeterminate"),t=g(e,"modelValue");function v(n){l.value&&(l.value=!1)}const r=o(()=>l.value?e.indeterminateIcon:e.falseIcon),a=o(()=>l.value?e.indeterminateIcon:e.trueIcon);return A(()=>{const n=ve(O.filterProps(e),["modelValue"]);return d(O,P(n,{modelValue:t.value,"onUpdate:modelValue":[y=>t.value=y,v],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:r.value,trueIcon:a.value,"aria-checked":l.value?"mixed":void 0}),c)}),{}}});export{O as V,J as a,ke as b,Se as c,ye as d,L as m};
