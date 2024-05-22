import{c7 as R,K as C,M as W,R as N,S as U,U as T,W as q,V as J,aH as L,bI as Q,k as x,A as V,z as P,D as I,aM as Z,p as u,al as S,a7 as B,ar as M,b0 as p,ad as ee,a3 as te,C as ne,F as oe,aa as se,a8 as b,c8 as ae,B as _,bK as ie,aO as le,bN as ue,as as ce,aK as re,ab as de,c9 as ve,a9 as Y}from"./index.e195cd26.js";import{m as fe,u as me}from"./lazy.3c63b833.js";import{u as he}from"./ssrBoot.d7cd1016.js";const ge=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:a}=e,i=.5,s=16;e.offsetX=t-o,e.offsetY=a-n,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&t<o-s&&e.left(e),e.right&&t>o+s&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&a<n-s&&e.up(e),e.down&&a>n+s&&e.down(e))};function ye(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function Ve(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),ge(o)}function we(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function Ie(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>ye(t,o),touchend:t=>Ve(t,o),touchmove:t=>we(t,o)}}function be(e,o){var v,c,l;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,a=(v=t==null?void 0:t.options)!=null?v:{passive:!0},i=(c=o.instance)==null?void 0:c.$.uid;if(!n||!i)return;const s=Ie(o.value);n._touchHandlers=(l=n._touchHandlers)!=null?l:Object.create(null),n._touchHandlers[i]=s,R(s).forEach(m=>{n.addEventListener(m,s[m],a)})}function Ce(e,o){var i,s;const t=(i=o.value)!=null&&i.parent?e.parentElement:e,n=(s=o.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const a=t._touchHandlers[n];R(a).forEach(v=>{t.removeEventListener(v,a[v])}),delete t._touchHandlers[n]}const A={mounted:be,unmounted:Ce},Te=A,F=Symbol.for("vuetify:v-window"),O=Symbol.for("vuetify:v-window-group"),j=C({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...W(),...N(),...U()},"VWindow"),D=T()({name:"VWindow",directives:{Touch:A},props:j(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=q(e),{isRtl:a}=J(),{t:i}=L(),s=Q(e,O),v=x(),c=V(()=>a.value?!e.reverse:e.reverse),l=P(!1),m=V(()=>{const d=e.direction==="vertical"?"y":"x",y=(c.value?!l.value:l.value)?"-reverse":"";return`v-window-${d}${y}-transition`}),h=P(0),g=x(void 0),w=V(()=>s.items.value.findIndex(d=>s.selected.value.includes(d.id)));I(w,(d,f)=>{const y=s.items.value.length,X=y-1;y<=2?l.value=d<f:d===X&&f===0?l.value=!0:d===0&&f===X?l.value=!1:l.value=d<f}),Z(F,{transition:m,isReversed:l,transitionCount:h,transitionHeight:g,rootRef:v});const r=V(()=>e.continuous||w.value!==0),k=V(()=>e.continuous||w.value!==s.items.value.length-1);function E(){r.value&&s.prev()}function $(){k.value&&s.next()}const G=V(()=>{const d=[],f={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${c.value?"right":"left"}`,onClick:s.prev,"aria-label":i("$vuetify.carousel.prev")};d.push(r.value?t.prev?t.prev({props:f}):u(S,f,null):u("div",null,null));const y={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${c.value?"left":"right"}`,onClick:s.next,"aria-label":i("$vuetify.carousel.next")};return d.push(k.value?t.next?t.next({props:y}):u(S,y,null):u("div",null,null)),d}),K=V(()=>e.touch===!1?e.touch:{...{left:()=>{c.value?E():$()},right:()=>{c.value?$():E()},start:f=>{let{originalEvent:y}=f;y.stopPropagation()}},...e.touch===!0?{}:e.touch});return B(()=>M(u(e.tag,{ref:v,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var d,f;return[u("div",{class:"v-window__container",style:{height:g.value}},[(d=t.default)==null?void 0:d.call(t,{group:s}),e.showArrows!==!1&&u("div",{class:"v-window__controls"},[G.value])]),(f=t.additional)==null?void 0:f.call(t,{group:s})]}}),[[p("touch"),K.value]])),{group:s}}}),Be=C({color:String,cycle:Boolean,delimiterIcon:{type:ee,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...j({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),ke=T()({name:"VCarousel",props:Be(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=te(e,"modelValue"),{t:a}=L(),i=x();let s=-1;I(n,c),I(()=>e.interval,c),I(()=>e.cycle,l=>{l?c():window.clearTimeout(s)}),ne(v);function v(){!e.cycle||!i.value||(s=window.setTimeout(i.value.group.next,+e.interval>0?+e.interval:6e3))}function c(){window.clearTimeout(s),window.requestAnimationFrame(v)}return B(()=>{const l=D.filterProps(e);return u(D,b({ref:i},l,{modelValue:n.value,"onUpdate:modelValue":m=>n.value=m,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:_(e.height)},e.style]}),{default:t.default,additional:m=>{let{group:h}=m;return u(oe,null,[!e.hideDelimiters&&u("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[h.items.value.length>0&&u(se,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[h.items.value.map((g,w)=>{const r={id:`carousel-item-${g.id}`,"aria-label":a("$vuetify.carousel.ariaLabel.delimiter",w+1,h.items.value.length),class:["v-carousel__controls__item",h.isSelected(g.id)&&"v-btn--active"],onClick:()=>h.select(g.id,!0)};return t.item?t.item({props:r,item:g}):u(S,b(g,r),null)})]})]),e.progress&&u(ae,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(h.getItemIndex(n.value)+1)/h.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),z=C({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...W(),...ie(),...fe()},"VWindowItem"),H=T()({name:"VWindowItem",directives:{Touch:Te},props:z(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=le(F),a=ue(e,O),{isBooted:i}=he();if(!n||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=P(!1),v=V(()=>i.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function c(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function l(){var r;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=_((r=n.rootRef.value)==null?void 0:r.clientHeight)),n.transitionCount.value+=1)}function m(){c()}function h(r){!s.value||de(()=>{!v.value||!s.value||!n||(n.transitionHeight.value=_(r.clientHeight))})}const g=V(()=>{const r=n.isReversed.value?e.reverseTransition:e.transition;return v.value?{name:typeof r!="string"?n.transition.value:r,onBeforeEnter:l,onAfterEnter:c,onEnterCancelled:m,onBeforeLeave:l,onAfterLeave:c,onLeaveCancelled:m,onEnter:h}:!1}),{hasContent:w}=me(e,a.isSelected);return B(()=>u(re,{transition:g.value,disabled:!i.value},{default:()=>{var r;return[M(u("div",{class:["v-window-item",a.selectedClass.value,e.class],style:e.style},[w.value&&((r=t.default)==null?void 0:r.call(t))]),[[ce,a.isSelected.value]])]}})),{groupItem:a}}}),xe=C({...ve(),...z()},"VCarouselItem"),Ee=T()({name:"VCarouselItem",inheritAttrs:!1,props:xe(),setup(e,o){let{slots:t,attrs:n}=o;B(()=>{const a=Y.filterProps(e),i=H.filterProps(e);return u(H,b({class:["v-carousel-item",e.class]},i),{default:()=>[u(Y,b(n,a),t)]})})}});export{ke as V,Ee as a};
