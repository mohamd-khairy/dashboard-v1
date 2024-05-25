import{b as ke,c as Pe,d as ce}from"./VTextField.d0ea55f9.js";import{K as $,M as he,U as ae,b5 as ge,D as E,a7 as oe,p as i,F as z,a8 as H,a0 as Te,z as _,I as de,k as q,A as D,J as ye,b6 as te,b7 as xe,ab as Ve,b3 as ne,aT as Ie,aP as Ce,aV as Re,Z as Ae,H as De,B as Z,C as Fe,ad as Be,ac as Oe,aI as _e,aH as Le,a3 as fe,b8 as Me,ak as ve,b9 as He,aa as Ee,ap as Ue,aJ as Ke,ba as me}from"./index.e64427d3.js";import{f as qe}from"./forwardRefs.74a345f5.js";import{m as Ne,u as ze,V as $e,a as pe}from"./VList.e1320d57.js";import{g as je,V as We}from"./VOverlay.f99881ed.js";import{V as Je}from"./VMenu.dadd3f9b.js";import{c as Xe}from"./VCheckboxBtn.c219e675.js";import{V as Ye}from"./VChip.0f7134b7.js";const Ze=$({renderless:Boolean,...he()},"VVirtualScrollItem"),Ge=ae()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Ze(),emits:{"update:height":e=>!0},setup(e,c){let{attrs:n,emit:d,slots:s}=c;const{resizeRef:f,contentRect:w}=ge(void 0,"border");E(()=>{var u;return(u=w.value)==null?void 0:u.height},u=>{u!=null&&d("update:height",u)}),oe(()=>{var u,a;return e.renderless?i(z,null,[(u=s.default)==null?void 0:u.call(s,{itemRef:f})]):i("div",H({ref:f,class:["v-virtual-scroll__item",e.class],style:e.style},n),[(a=s.default)==null?void 0:a.call(s)])})}}),Qe=-1,et=1,le=100,tt=$({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function lt(e,c){const n=Te(),d=_(0);de(()=>{d.value=parseFloat(e.itemHeight||0)});const s=_(0),f=_(Math.ceil((parseInt(e.height)||n.height.value)/(d.value||16))||1),w=_(0),u=_(0),a=q(),b=q();let A=0;const{resizeRef:F,contentRect:r}=ge();de(()=>{F.value=a.value});const k=D(()=>{var t;return a.value===document.documentElement?n.height.value:((t=r.value)==null?void 0:t.height)||parseInt(e.height)||0}),P=D(()=>!!(a.value&&b.value&&k.value&&d.value));let x=Array.from({length:c.value.length}),m=Array.from({length:c.value.length});const I=_(0);let C=-1;function j(t){return x[t]||d.value}const R=xe(()=>{const t=performance.now();m[0]=0;const o=c.value.length;for(let V=1;V<=o-1;V++)m[V]=(m[V-1]||0)+j(V-1);I.value=Math.max(I.value,performance.now()-t)},I),W=E(P,t=>{!t||(W(),A=b.value.offsetTop,R.immediate(),B(),~C&&Ve(()=>{ne&&window.requestAnimationFrame(()=>{Y(C),C=-1})}))});ye(()=>{R.clear()});function G(t,o){const V=x[t],h=d.value;d.value=h?Math.min(d.value,o):o,(V!==o||h!==d.value)&&(x[t]=o,R())}function T(t){return t=te(t,0,c.value.length-1),m[t]||0}function J(t){return nt(m,t)}let U=0,L=0,N=0;E(k,(t,o)=>{o&&(B(),t<o&&requestAnimationFrame(()=>{L=0,B()}))});function Q(){if(!a.value||!b.value)return;const t=a.value.scrollTop,o=performance.now();o-N>500?(L=Math.sign(t-U),A=b.value.offsetTop):L=t-U,U=t,N=o,B()}function K(){!a.value||!b.value||(L=0,N=0,B())}let X=-1;function B(){cancelAnimationFrame(X),X=requestAnimationFrame(ee)}function ee(){if(!a.value||!k.value)return;const t=U-A,o=Math.sign(L),V=Math.max(0,t-le),h=te(J(V),0,c.value.length),v=t+k.value+le,g=te(J(v)+1,h+1,c.value.length);if((o!==Qe||h<s.value)&&(o!==et||g>f.value)){const p=T(s.value)-T(h),S=T(g)-T(f.value);Math.max(p,S)>le?(s.value=h,f.value=g):(h<=0&&(s.value=h),g>=c.value.length&&(f.value=g))}w.value=T(s.value),u.value=T(c.value.length)-T(f.value)}function Y(t){const o=T(t);!a.value||t&&!o?C=t:a.value.scrollTop=o}const l=D(()=>c.value.slice(s.value,f.value).map((t,o)=>({raw:t,index:o+s.value})));return E(c,()=>{x=Array.from({length:c.value.length}),m=Array.from({length:c.value.length}),R.immediate(),B()},{deep:!0}),{containerRef:a,markerRef:b,computedItems:l,paddingTop:w,paddingBottom:u,scrollToIndex:Y,handleScroll:Q,handleScrollend:K,handleItemResize:G}}function nt(e,c){let n=e.length-1,d=0,s=0,f=null,w=-1;if(e[n]<c)return n;for(;d<=n;)if(s=d+n>>1,f=e[s],f>c)n=s-1;else if(f<c)w=s,d=s+1;else return f===c?s:d;return w}const at=$({items:{type:Array,default:()=>[]},renderless:Boolean,...tt(),...he(),...Ie()},"VVirtualScroll"),ot=ae()({name:"VVirtualScroll",props:at(),setup(e,c){let{slots:n}=c;const d=Ce("VVirtualScroll"),{dimensionStyles:s}=Re(e),{containerRef:f,markerRef:w,handleScroll:u,handleScrollend:a,handleItemResize:b,scrollToIndex:A,paddingTop:F,paddingBottom:r,computedItems:k}=lt(e,Ae(e,"items"));return De(()=>e.renderless,()=>{function P(){var I,C;const m=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";f.value===document.documentElement?(document[m]("scroll",u,{passive:!0}),document[m]("scrollend",a)):((I=f.value)==null||I[m]("scroll",u,{passive:!0}),(C=f.value)==null||C[m]("scrollend",a))}Fe(()=>{f.value=je(d.vnode.el,!0),P(!0)}),ye(P)}),oe(()=>{const P=k.value.map(x=>i(Ge,{key:x.index,renderless:e.renderless,"onUpdate:height":m=>b(x.index,m)},{default:m=>{var I;return(I=n.default)==null?void 0:I.call(n,{item:x.raw,index:x.index,...m})}}));return e.renderless?i(z,null,[i("div",{ref:w,class:"v-virtual-scroll__spacer",style:{paddingTop:Z(F.value)}},null),P,i("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:Z(r.value)}},null)]):i("div",{ref:f,class:["v-virtual-scroll",e.class],onScrollPassive:u,onScrollend:a,style:[s.value,e.style]},[i("div",{ref:w,class:"v-virtual-scroll__container",style:{paddingTop:Z(F.value),paddingBottom:Z(r.value)}},[P])])}),{scrollToIndex:A}}});function ut(e,c){const n=_(!1);let d;function s(u){cancelAnimationFrame(d),n.value=!0,d=requestAnimationFrame(()=>{d=requestAnimationFrame(()=>{n.value=!1})})}async function f(){await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>{if(n.value){const a=E(n,()=>{a(),u()})}else u()})}async function w(u){var A,F;if(u.key==="Tab"&&((A=c.value)==null||A.focus()),!["PageDown","PageUp","Home","End"].includes(u.key))return;const a=(F=e.value)==null?void 0:F.$el;if(!a)return;(u.key==="Home"||u.key==="End")&&a.scrollTo({top:u.key==="Home"?0:a.scrollHeight,behavior:"smooth"}),await f();const b=a.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(u.key==="PageDown"||u.key==="Home"){const r=a.getBoundingClientRect().top;for(const k of b)if(k.getBoundingClientRect().top>=r){k.focus();break}}else{const r=a.getBoundingClientRect().bottom;for(const k of[...b].reverse())if(k.getBoundingClientRect().bottom<=r){k.focus();break}}}return{onListScroll:s,onListKeydown:w}}const st=$({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:Be,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Ne({itemChildren:!1})},"Select"),rt=$({...st(),...Oe(ke({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),..._e({transition:{component:We}})},"VSelect"),gt=ae()({name:"VSelect",props:rt(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,c){let{slots:n}=c;const{t:d}=Le(),s=q(),f=q(),w=q(),u=fe(e,"menu"),a=D({get:()=>u.value,set:l=>{var t;u.value&&!l&&((t=f.value)==null?void 0:t.\u03A8openChildren)||(u.value=l)}}),{items:b,transformIn:A,transformOut:F}=ze(e),r=fe(e,"modelValue",[],l=>A(l===null?[null]:Ke(l)),l=>{var o;const t=F(l);return e.multiple?t:(o=t[0])!=null?o:null}),k=D(()=>typeof e.counterValue=="function"?e.counterValue(r.value):typeof e.counterValue=="number"?e.counterValue:r.value.length),P=Pe(),x=D(()=>r.value.map(l=>l.value)),m=_(!1),I=D(()=>a.value?e.closeText:e.openText);let C="",j;const R=D(()=>e.hideSelected?b.value.filter(l=>!r.value.some(t=>e.valueComparator(t,l))):b.value),W=D(()=>e.hideNoData&&!R.value.length||e.readonly||(P==null?void 0:P.isReadonly.value)),G=D(()=>{var l;return{...e.menuProps,activatorProps:{...((l=e.menuProps)==null?void 0:l.activatorProps)||{},"aria-haspopup":"listbox"}}}),T=q(),{onListScroll:J,onListKeydown:U}=ut(T,s);function L(l){e.openOnClear&&(a.value=!0)}function N(){W.value||(a.value=!a.value)}function Q(l){var v,g;if(!l.key||e.readonly||(P==null?void 0:P.isReadonly.value))return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(l.key)&&l.preventDefault(),["Enter","ArrowDown"," "].includes(l.key)&&(a.value=!0),["Escape","Tab"].includes(l.key)&&(a.value=!1),l.key==="Home"?(v=T.value)==null||v.focus("first"):l.key==="End"&&((g=T.value)==null||g.focus("last"));const t=1e3;function o(p){const S=p.key.length===1,O=!p.ctrlKey&&!p.metaKey&&!p.altKey;return S&&O}if(e.multiple||!o(l))return;const V=performance.now();V-j>t&&(C=""),C+=l.key.toLowerCase(),j=V;const h=b.value.find(p=>p.title.toLowerCase().startsWith(C));if(h!==void 0){r.value=[h];const p=R.value.indexOf(h);ne&&window.requestAnimationFrame(()=>{var S;p>=0&&((S=w.value)==null||S.scrollToIndex(p))})}}function K(l){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!l.props.disabled)if(e.multiple){const o=r.value.findIndex(h=>e.valueComparator(h.value,l.value)),V=t==null?!~o:t;if(~o){const h=V?[...r.value,l]:[...r.value];h.splice(o,1),r.value=h}else V&&(r.value=[...r.value,l])}else{const o=t!==!1;r.value=o?[l]:[],Ve(()=>{a.value=!1})}}function X(l){var t;(t=T.value)!=null&&t.$el.contains(l.relatedTarget)||(a.value=!1)}function B(){var l;m.value&&((l=s.value)==null||l.focus())}function ee(l){m.value=!0}function Y(l){if(l==null)r.value=[];else if(me(s.value,":autofill")||me(s.value,":-webkit-autofill")){const t=b.value.find(o=>o.title===l);t&&K(t)}else s.value&&(s.value.value="")}return E(a,()=>{if(!e.hideSelected&&a.value&&r.value.length){const l=R.value.findIndex(t=>r.value.some(o=>e.valueComparator(o.value,t.value)));ne&&window.requestAnimationFrame(()=>{var t;l>=0&&((t=w.value)==null||t.scrollToIndex(l))})}}),E(()=>e.items,(l,t)=>{a.value||m.value&&!t.length&&l.length&&(a.value=!0)}),oe(()=>{const l=!!(e.chips||n.chip),t=!!(!e.hideNoData||R.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),o=r.value.length>0,V=ce.filterProps(e),h=o||!m.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return i(ce,H({ref:s},V,{modelValue:r.value.map(v=>v.props.value).join(", "),"onUpdate:modelValue":Y,focused:m.value,"onUpdate:focused":v=>m.value=v,validationValue:r.externalValue,counterValue:k.value,dirty:o,class:["v-select",{"v-select--active-menu":a.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":r.value.length,"v-select--selection-slot":!!n.selection},e.class],style:e.style,inputmode:"none",placeholder:h,"onClick:clear":L,"onMousedown:control":N,onBlur:X,onKeydown:Q,"aria-label":d(I.value),title:d(I.value)}),{...n,default:()=>i(z,null,[i(Je,H({ref:f,modelValue:a.value,"onUpdate:modelValue":v=>a.value=v,activator:"parent",contentClass:"v-select__content",disabled:W.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:B},G.value),{default:()=>{var v;return[t&&i($e,H({ref:T,selected:x.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:g=>g.preventDefault(),onKeydown:U,onFocusin:ee,onScrollPassive:J,tabindex:"-1","aria-live":"polite",color:(v=e.itemColor)!=null?v:e.color},e.listProps),{default:()=>{var g,p,S,O;return[(g=n["prepend-item"])==null?void 0:g.call(n),!R.value.length&&!e.hideNoData&&((S=(p=n["no-data"])==null?void 0:p.call(n))!=null?S:i(pe,{title:d(e.noDataText)},null)),i(ot,{ref:w,renderless:!0,items:R.value},{default:M=>{var re,ie;let{item:y,index:ue,itemRef:we}=M;const se=H(y.props,{ref:we,key:ue,onClick:()=>K(y,null)});return(ie=(re=n.item)==null?void 0:re.call(n,{item:y,index:ue,props:se}))!=null?ie:i(pe,H(se,{role:"option"}),{prepend:be=>{let{isSelected:Se}=be;return i(z,null,[e.multiple&&!e.hideSelected?i(Xe,{key:y.value,modelValue:Se,ripple:!1,tabindex:"-1"},null):void 0,y.props.prependAvatar&&i(Me,{image:y.props.prependAvatar},null),y.props.prependIcon&&i(ve,{icon:y.props.prependIcon},null)])}})}}),(O=n["append-item"])==null?void 0:O.call(n)]}})]}}),r.value.map((v,g)=>{function p(y){y.stopPropagation(),y.preventDefault(),K(v,!1)}const S={"onClick:close":p,onKeydown(y){y.key!=="Enter"&&y.key!==" "||(y.preventDefault(),y.stopPropagation(),p(y))},onMousedown(y){y.preventDefault(),y.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},O=l?!!n.chip:!!n.selection,M=O?He(l?n.chip({item:v,index:g,props:S}):n.selection({item:v,index:g})):void 0;if(!(O&&!M))return i("div",{key:v.value,class:"v-select__selection"},[l?n.chip?i(Ee,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:v.title}}},{default:()=>[M]}):i(Ye,H({key:"chip",closable:e.closableChips,size:"small",text:v.title,disabled:v.props.disabled},S),null):M!=null?M:i("span",{class:"v-select__selection-text"},[v.title,e.multiple&&g<r.value.length-1&&i("span",{class:"v-select__selection-comma"},[Ue(",")])])])})]),"append-inner":function(){var S;for(var v=arguments.length,g=new Array(v),p=0;p<v;p++)g[p]=arguments[p];return i(z,null,[(S=n["append-inner"])==null?void 0:S.call(n,...g),e.menuIcon?i(ve,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),qe({isFocused:m,menu:a,select:K},s)}});export{gt as V,ot as a,st as m,ut as u};
