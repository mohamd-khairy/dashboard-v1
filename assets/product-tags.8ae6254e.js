import{k as c,bP as z,aB as I,o as A,b as T,w as l,p as e,bQ as B,bR as j,bS as q,ak as k,m as i,y as p,q as t,b$ as E,c0 as Q,av as Z,aw as O,al as S,ap as C,bD as ee,c6 as ie,I as W,A as X,C as de,c as R,an as U,bZ as ce,F as me,a as pe,aq as fe,ar as _e,as as ge}from"./index.8d01543a.js";import{_ as G}from"./DialogCloseBtn.0d2acdf8.js";import{V as H}from"./VForm.6ad382fa.js";import{V as J}from"./VDialog.6b48d5ed.js";import{r as M}from"./validators.dc210ddc.js";import{d as P}from"./VTextField.b27bb6f2.js";import{V as K}from"./VSelect.2c43c85a.js";import"./moment.9709ab41.js";import{u as ve}from"./Products.979d0fae.js";import{V as be}from"./VSpacer.40a311d3.js";import{V as Y}from"./VDivider.c9b30b9a.js";import{V as he}from"./VPagination.6b05bef2.js";import"./forwardRefs.74a345f5.js";import"./VOverlay.cd1f8bc0.js";import"./lazy.746ef82b.js";import"./index.4049f65e.js";import"./VList.35d78c12.js";import"./ssrBoot.e590dc30.js";import"./VMenu.535e4389.js";import"./VCheckboxBtn.6481c716.js";import"./VChip.2389378e.js";const Ve={__name:"DeleteProductTagsDialog",props:{isDeleteOpen:{type:Boolean,required:!0},item:{type:Object,required:!0}},emits:["update:isDeleteOpen","refreshTable"],setup(D,{emit:w}){const b=D,g=w,s=c(!1),{t:r}=z(),a=I(),n=()=>{g("update:isDeleteOpen",!1)},h=()=>{s.value=!0,a.deleteProductTags(b.item).then(()=>{g("refreshTable"),g("update:isDeleteOpen",!1),a.alertColor="success",a.alertMessage="\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0639\u0646\u0635\u0631 \u0628\u0646\u062C\u0627\u062D",a.isAlertShow=!0,setTimeout(()=>{a.isAlertShow=!1,a.alertMessage="",s.value=!1},1e3)}).catch(x=>{s.value=!1,a.alertColor="error",a.alertMessage="\u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627 !",a.isAlertShow=!0,setTimeout(()=>{a.isAlertShow=!1,a.alertMessage=""},2e3)})},f=x=>{g("update:isDeleteOpen",x)};return(x,V)=>{const m=G;return A(),T(J,{width:x.$vuetify.display.smAndDown?"auto":650,"model-value":b.isDeleteOpen,"onUpdate:modelValue":f},{default:l(()=>[e(m,{onClick:V[0]||(V[0]=o=>f(!1))}),e(B,{class:"pa-sm-9 pa-5"},{default:l(()=>[e(j,null,{default:l(()=>[e(q,{class:"text-h5 text-center mb-3"},{default:l(()=>[e(k,{icon:"ph:info-light",color:"#f00",size:"50"}),i("h5",null,p(t(r)("ask_delete")),1)]),_:1})]),_:1}),e(E,null,{default:l(()=>[e(H,{ref:"refForm",onSubmit:Q(h,["prevent"])},{default:l(()=>[e(Z,null,{default:l(()=>[e(O,{cols:"12",class:"text-center"},{default:l(()=>[t(s)?(A(),T(S,{key:1,type:"submit",class:"position-relative me-3"},{default:l(()=>[e(k,{icon:"mingcute:loading-line",class:"loading",size:"32"})]),_:1})):(A(),T(S,{key:0,type:"submit",class:"me-3",color:"primary"},{default:l(()=>[C(p(t(r)("buttons.confirm")),1)]),_:1})),e(S,{variant:"tonal",color:"secondary",onClick:n},{default:l(()=>[C(p(t(r)("buttons.cancel")),1)]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}},ye={class:"mx-1 my-1"},we={__name:"EditProductTagsDialog",props:{isEditOpen:{type:Boolean,required:!0},item:{type:Object,required:!0},products:{type:Array,required:!0}},emits:["update:isEditOpen","refreshTable"],setup(D,{emit:w}){const b=D,g=w,s=I(),r=c(!1),{t:a}=z(),n=ee({name_ar:null,name_en:null,color:null,product_ids:[]});c([]);const h=c(null),f=()=>{g("update:isEditOpen",!1)};ie(()=>{n.product_ids.length=0,n.id=b.item.id,n.name_ar=b.item.name_ar,n.name_en=b.item.name_en,n.color=b.item.color,b.item.products&&b.item.products.length>0&&b.item.products.map(m=>{n.product_ids.push(m.id)})});const x=async()=>{if(r.value=!0,(await h.value.validate()).valid){const o={id:n.id,name_ar:n.name_ar,name_en:n.name_en,color:n.color,product_ids:n.product_ids};s.editProductTags(o).then(y=>{g("refreshTable"),g("update:isEditOpen",!1),s.alertColor="success",s.alertMessage="\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0639\u0646\u0635\u0631 \u0628\u0646\u062C\u0627\u062D",s.isAlertShow=!0,setTimeout(()=>{s.isAlertShow=!1,s.alertMessage="",r.value=!1},1e3)}).catch(y=>{y.response.data.errors?Object.keys(y.response.data.errors).forEach(L=>{s.alertMessage=a(`errors.${L}`)}):s.alertMessage="\u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627 !",r.value=!1,s.alertColor="error",s.isAlertShow=!0,setTimeout(()=>{s.isAlertShow=!1,s.alertMessage=""},2e3)})}else r.value=!1,s.alertMessage="\u064A\u0631\u062C\u064A \u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 !",s.alertColor="error",s.isAlertShow=!0,setTimeout(()=>{s.isAlertShow=!1,s.alertMessage=""},2e3)},V=m=>{g("update:isEditOpen",m)};return(m,o)=>{const y=G;return A(),T(J,{width:m.$vuetify.display.smAndDown?"auto":650,"model-value":b.isEditOpen,"onUpdate:modelValue":V},{default:l(()=>[e(y,{onClick:o[0]||(o[0]=u=>V(!1))}),e(B,{class:"pa-sm-9 pa-5"},{default:l(()=>[e(j,null,{default:l(()=>[e(q,{class:"text-h5 d-flex flex-column align-center gap-2 text-center mb-3"},{default:l(()=>[e(k,{icon:"solar:tag-broken",size:"24",color:"primary"}),i("span",ye,p(t(a)("Edit_Item")),1)]),_:1})]),_:1}),e(E,null,{default:l(()=>[e(H,{onSubmit:Q(x,["prevent"]),ref_key:"refForm",ref:h},{default:l(()=>[e(Z,null,{default:l(()=>[e(O,{cols:"12"},{default:l(()=>[e(P,{modelValue:t(n).name_ar,"onUpdate:modelValue":o[1]||(o[1]=u=>t(n).name_ar=u),label:t(a)("forms.name_ar"),rules:[t(M)]},null,8,["modelValue","label","rules"])]),_:1}),e(O,{cols:"12"},{default:l(()=>[e(P,{modelValue:t(n).name_en,"onUpdate:modelValue":o[2]||(o[2]=u=>t(n).name_en=u),label:t(a)("forms.name_en"),rules:[t(M)]},null,8,["modelValue","label","rules"])]),_:1}),e(O,{cols:"12"},{default:l(()=>[e(P,{modelValue:t(n).color,"onUpdate:modelValue":o[3]||(o[3]=u=>t(n).color=u),type:"color",label:t(a)("forms.color")},null,8,["modelValue","label"])]),_:1}),e(O,{cols:"12"},{default:l(()=>[e(K,{modelValue:t(n).product_ids,"onUpdate:modelValue":o[4]||(o[4]=u=>t(n).product_ids=u),items:D.products,label:t(a)("Products"),"item-title":"name_ar","item-value":"id",multiple:"",rules:[t(M)]},null,8,["modelValue","items","label","rules"])]),_:1}),e(O,{cols:"12",class:"text-center"},{default:l(()=>[t(r)?(A(),T(S,{key:1,type:"submit",class:"position-relative me-3"},{default:l(()=>[e(k,{icon:"mingcute:loading-line",class:"loading",size:"32"})]),_:1})):(A(),T(S,{key:0,type:"submit",class:"me-3"},{default:l(()=>[C(p(t(a)("buttons.save")),1)]),_:1})),e(S,{variant:"tonal",color:"secondary",onClick:f},{default:l(()=>[C(p(t(a)("buttons.cancel")),1)]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}},xe={class:"mx-1 my-1"},Ae={__name:"AddProductTagsDialog",props:{isAddOpen:{type:Boolean,required:!0},products:{type:Array,required:!0}},emits:["update:isAddOpen","refreshTable"],setup(D,{emit:w}){const b=D,g=w,s=I(),{t:r}=z(),a=ee({name_ar:null,name_en:null,color:null,product_ids:[]}),n=c(null),h=c(!1),f=()=>{a.name_ar=null,a.name_en=null,a.color=null,a.product_ids=[],g("update:isAddOpen",!1)},x=async()=>{h.value=!0,(await n.value.validate()).valid?s.storeProductTags(a).then(o=>{f(),g("refreshTable"),g("update:isAddOpen",!1),s.alertColor="success",s.alertMessage="\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0646\u0635\u0631 \u0628\u0646\u062C\u0627\u062D",s.isAlertShow=!0,setTimeout(()=>{s.isAlertShow=!1,s.alertMessage=""},2e3)}).catch(o=>{o.response.data.errors?Object.keys(o.response.data.errors).forEach(u=>{s.alertMessage=r(`errors.${u}`)}):s.alertMessage="\u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627 !",h.value=!1,s.alertColor="error",s.isAlertShow=!0,setTimeout(()=>{s.isAlertShow=!1,s.alertMessage=""},2e3)}):(h.value=!1,s.alertMessage="\u064A\u0631\u062C\u064A \u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 !",s.alertColor="error",s.isAlertShow=!0,setTimeout(()=>{s.isAlertShow=!1,s.alertMessage=""},2e3))},V=m=>{g("update:isAddOpen",m)};return(m,o)=>{const y=G;return A(),T(J,{width:m.$vuetify.display.smAndDown?"auto":650,"model-value":b.isAddOpen,"onUpdate:modelValue":V},{default:l(()=>[e(y,{onClick:o[0]||(o[0]=u=>V(!1))}),e(B,{class:"pa-sm-9 pa-5"},{default:l(()=>[e(j,null,{default:l(()=>[e(q,{class:"text-h5 d-flex flex-column align-center gap-2 text-center mb-3"},{default:l(()=>[e(k,{icon:"solar:tag-broken",size:"24",color:"primary"}),i("span",xe,p(t(r)("Add_Item")),1)]),_:1})]),_:1}),e(E,null,{default:l(()=>[e(H,{onSubmit:Q(x,["prevent"]),ref_key:"refForm",ref:n},{default:l(()=>[e(Z,null,{default:l(()=>[e(O,{cols:"12"},{default:l(()=>[e(P,{modelValue:t(a).name_ar,"onUpdate:modelValue":o[1]||(o[1]=u=>t(a).name_ar=u),label:t(r)("forms.name_ar"),rules:[t(M)]},null,8,["modelValue","label","rules"])]),_:1}),e(O,{cols:"12"},{default:l(()=>[e(P,{modelValue:t(a).name_en,"onUpdate:modelValue":o[2]||(o[2]=u=>t(a).name_en=u),label:t(r)("forms.name_en"),rules:[t(M)]},null,8,["modelValue","label","rules"])]),_:1}),e(O,{cols:"12"},{default:l(()=>[e(P,{modelValue:t(a).color,"onUpdate:modelValue":o[3]||(o[3]=u=>t(a).color=u),type:"color",label:t(r)("forms.color")},null,8,["modelValue","label"])]),_:1}),e(O,{cols:"12"},{default:l(()=>[e(K,{modelValue:t(a).product_ids,"onUpdate:modelValue":o[4]||(o[4]=u=>t(a).product_ids=u),items:D.products,label:t(r)("Products"),"item-title":"name_ar","item-value":"id",multiple:"",rules:[t(M)]},null,8,["modelValue","items","label","rules"])]),_:1}),e(O,{cols:"12",class:"text-center"},{default:l(()=>[t(h)?(A(),T(S,{key:1,type:"submit",class:"position-relative me-3"},{default:l(()=>[e(k,{icon:"mingcute:loading-line",class:"loading",size:"32"})]),_:1})):(A(),T(S,{key:0,type:"submit",class:"me-3"},{default:l(()=>[C(p(t(r)("buttons.save")),1)]),_:1})),e(S,{variant:"tonal",color:"secondary",onClick:f},{default:l(()=>[C(p(t(r)("buttons.cancel")),1)]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}},Se={class:"mx-1"},Oe={style:{width:"5rem"}},Te={scope:"col",class:"font-weight-semibold"},ke={scope:"col",class:"font-weight-semibold"},De={scope:"col",class:"font-weight-semibold"},Ce={scope:"col",class:"font-weight-semibold"},Me={class:"d-flex align-center gap-2"},Pe=i("tr",null,[i("td",{colspan:"8",class:"text-center text-body-1"}," \u0644\u0627 \u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A ")],-1),$e=[Pe],Ue={class:"text-sm text-disabled"},lt={__name:"product-tags",setup(D){const{t:w}=z(),b=I(),g=ve(),s=c("");c();const r=c(10),a=c(1),n=c(1),h=c(0),f=c([]),x=c([]);c([]);const V=c(!1),m=c(!1),o=c({}),y=c(!1),u=()=>{b.fetchProductTags({q:s.value}).then(_=>{f.value=_.data.data,n.value=f.value/r,h.value=f.value.length,a.value=1}).catch(_=>{console.log(_)})};W(()=>{u()}),W(()=>{r.value&&(a.value=1)});const L=X(()=>(n.value=Math.ceil(f.value.length/r.value),f.value.filter((_,d)=>{let $=(a.value-1)*r.value,N=a.value*r.value;if(d>=$&&d<N)return!0}))),te=()=>{a.value*r.value<f.value.length&&a.value},le=()=>{a.value>1&&a.value},ae=X(()=>{const _=f.value.length?(a.value-1)*r.value+1:0,d=_+(r.value-1)<=f.value.length?_+(r.value-1):h.value;return` \u0639\u0631\u0636 \u0645\u0646 ${F(_)} \u0625\u0644\u064A ${F(d)} \u0645\u0646 ${F(h.value)} \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A `}),se=_=>{m.value=!0,o.value=_},oe=_=>{y.value=!0,o.value=_},F=_=>{const d="\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669";return String(_).replace(/[0123456789]/g,$=>d[$])};return de(()=>{g.fetchProducts({per_page:-1}).then(_=>{x.value=_.data.data})}),(_,d)=>{const $=Ae,N=we,re=Ve;return A(),R("div",null,[e(B,null,{default:l(()=>[e(q,{class:"d-flex align-center"},{default:l(()=>[e(k,{icon:"solar:tag-broken",size:"24",color:"primary"}),i("span",Se,p(t(w)("Product_Tags")),1)]),_:1}),e(E,{class:"d-flex align-center flex-wrap gap-2 py-4"},{default:l(()=>[i("div",Oe,[e(K,{modelValue:t(r),"onUpdate:modelValue":d[0]||(d[0]=v=>U(r)?r.value=v:null),variant:"outlined",items:[5,10,20,30,50]},null,8,["modelValue"])]),e(S,{"prepend-icon":"tabler-plus",onClick:d[1]||(d[1]=v=>V.value=!0)},{default:l(()=>[C(p(t(w)("Add_Item")),1)]),_:1}),e(be)]),_:1}),e(Y),e(ce,{class:"text-no-wrap product-list-table"},{default:l(()=>[i("thead",null,[i("tr",null,[i("th",Te,p(t(w)("forms.id")),1),i("th",ke,p(t(w)("forms.name")),1),i("th",De,p(t(w)("forms.color")),1),i("th",Ce,p(t(w)("forms.actions")),1)])]),i("tbody",null,[(A(!0),R(me,null,pe(t(L),(v,ne)=>(A(),R("tr",{key:v.id},[i("td",null," #"+p(F(++ne)),1),i("td",null,p(v.name_ar),1),i("td",Me,[i("span",{style:fe({backgroundColor:v.color,display:"inline-block",width:"15px",height:"15px"})},null,4)]),i("td",null,[e(S,{icon:"",variant:"plain",color:"default",size:"x-small",onClick:ue=>oe(v)},{default:l(()=>[e(k,{size:22,icon:"tabler-pencil"})]),_:2},1032,["onClick"]),e(S,{icon:"",variant:"plain",color:"default",size:"x-small",onClick:ue=>se(v)},{default:l(()=>[e(k,{size:22,icon:"tabler-trash"})]),_:2},1032,["onClick"])])]))),128))]),_e(i("tfoot",null,$e,512),[[ge,!t(f).length]])]),_:1}),e(Y),e(E,{class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3"},{default:l(()=>[i("span",Ue,p(t(ae)),1),e(he,{modelValue:t(a),"onUpdate:modelValue":d[2]||(d[2]=v=>U(a)?a.value=v:null),size:"small","total-visible":t(r),length:t(n),onNext:te,onPrev:le},null,8,["modelValue","total-visible","length"])]),_:1})]),_:1}),e($,{isAddOpen:t(V),"onUpdate:isAddOpen":d[3]||(d[3]=v=>U(V)?V.value=v:null),products:t(x),onRefreshTable:u},null,8,["isAddOpen","products"]),e(N,{isEditOpen:t(y),"onUpdate:isEditOpen":d[4]||(d[4]=v=>U(y)?y.value=v:null),products:t(x),item:t(o),onRefreshTable:u},null,8,["isEditOpen","products","item"]),e(re,{isDeleteOpen:t(m),"onUpdate:isDeleteOpen":d[5]||(d[5]=v=>U(m)?m.value=v:null),item:t(o),onRefreshTable:u},null,8,["isDeleteOpen","item"])])}}};export{lt as default};
