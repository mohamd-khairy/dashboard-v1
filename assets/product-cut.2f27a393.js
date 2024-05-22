import{k as c,bP as B,aB as q,o as C,b as O,w as a,p as e,bQ as N,bR as Z,bS as L,ak as D,m as r,y as m,q as t,b$ as M,c0 as G,av as H,aw as P,al as x,ap as T,bD as oe,c6 as ne,I as R,A as j,c as U,an as A,bZ as re,F as ie,a as ue,ar as de,as as ce}from"./index.e195cd26.js";import{_ as J}from"./DialogCloseBtn.a5443f2c.js";import{V as K}from"./VForm.bf1fdf96.js";import{V as W}from"./VDialog.4d61232b.js";import{r as F}from"./validators.dc210ddc.js";import{d as z}from"./VTextField.0ba2900d.js";import{_ as me}from"./AddProductCutDialog.9ca7944e.js";import"./moment.9709ab41.js";import{V as pe}from"./VSelect.d3114f6b.js";import{V as fe}from"./VSpacer.b4f17f1c.js";import{V as Q}from"./VDivider.638f8eff.js";import{V as ve}from"./VPagination.744b7e53.js";import"./forwardRefs.74a345f5.js";import"./VOverlay.e3c69687.js";import"./lazy.3c63b833.js";import"./index.4f7ac4e6.js";import"./VList.9d440da5.js";import"./ssrBoot.d7cd1016.js";import"./VMenu.62aeda27.js";import"./VCheckboxBtn.720fbc0c.js";import"./VChip.37b1ef7f.js";const _e={__name:"DeleteProductCutDialog",props:{isDeleteOpen:{type:Boolean,required:!0},item:{type:Object,required:!0}},emits:["update:isDeleteOpen","refreshTable"],setup(E,{emit:b}){const h=E,v=b,l=c(!1),{t:o}=B(),s=q(),u=()=>{v("update:isDeleteOpen",!1)},f=()=>{l.value=!0,s.deleteProductCut(h.item).then(()=>{v("refreshTable"),v("update:isDeleteOpen",!1),s.alertColor="success",s.alertMessage="\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0639\u0646\u0635\u0631 \u0628\u0646\u062C\u0627\u062D",s.isAlertShow=!0,setTimeout(()=>{s.isAlertShow=!1,s.alertMessage="",l.value=!1},1e3)}).catch(_=>{l.value=!1,s.alertColor="error",s.alertMessage="\u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627 !",s.isAlertShow=!0,setTimeout(()=>{s.isAlertShow=!1,s.alertMessage=""},2e3)})},V=_=>{v("update:isDeleteOpen",_)};return(_,w)=>{const g=J;return C(),O(W,{width:_.$vuetify.display.smAndDown?"auto":650,"model-value":h.isDeleteOpen,"onUpdate:modelValue":V},{default:a(()=>[e(g,{onClick:w[0]||(w[0]=i=>V(!1))}),e(N,{class:"pa-sm-9 pa-5"},{default:a(()=>[e(Z,null,{default:a(()=>[e(L,{class:"text-h5 text-center mb-3"},{default:a(()=>[e(D,{icon:"ph:info-light",color:"#f00",size:"50"}),r("h5",null,m(t(o)("ask_delete")),1)]),_:1})]),_:1}),e(M,null,{default:a(()=>[e(K,{ref:"refForm",onSubmit:G(f,["prevent"])},{default:a(()=>[e(H,null,{default:a(()=>[e(P,{cols:"12",class:"text-center"},{default:a(()=>[t(l)?(C(),O(x,{key:1,type:"submit",class:"position-relative me-3"},{default:a(()=>[e(D,{icon:"mingcute:loading-line",class:"loading",size:"32"})]),_:1})):(C(),O(x,{key:0,type:"submit",class:"me-3",color:"primary"},{default:a(()=>[T(m(t(o)("buttons.confirm")),1)]),_:1})),e(x,{variant:"tonal",color:"secondary",onClick:u},{default:a(()=>[T(m(t(o)("buttons.cancel")),1)]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}},ge={class:"mx-1 my-1"},be={__name:"EditProductCutDialog",props:{isEditOpen:{type:Boolean,required:!0},item:{type:Object,required:!0}},emits:["update:isEditOpen","refreshTable"],setup(E,{emit:b}){const h=E,v=b,l=q(),o=c(!1),{t:s}=B(),u=oe({name_en:null,name_ar:null,price:null});c();const f=()=>{v("update:isEditOpen",!1)};ne(()=>{u.id=h.item.id,u.name_en=h.item.name_en,u.name_ar=h.item.name_ar,u.price=h.item.price});const V=c(null),_=async()=>{o.value=!0,(await V.value.validate()).valid?l.editProductCut(u).then(i=>{v("refreshTable"),v("update:isEditOpen",!1),l.alertColor="success",l.alertMessage="\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0639\u0646\u0635\u0631 \u0628\u0646\u062C\u0627\u062D",l.isAlertShow=!0,setTimeout(()=>{l.isAlertShow=!1,l.alertMessage="",o.value=!1},1e3)}).catch(i=>{i.response.data.errors?Object.keys(i.response.data.errors).forEach(y=>{l.alertMessage=s(`errors.${y}`)}):l.alertMessage="\u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627 !",o.value=!1,l.alertColor="error",l.isAlertShow=!0,setTimeout(()=>{l.isAlertShow=!1,l.alertMessage=""},2e3)}):(o.value=!1,l.alertMessage="\u064A\u0631\u062C\u064A \u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 !",l.alertColor="error",l.isAlertShow=!0,setTimeout(()=>{l.isAlertShow=!1,l.alertMessage=""},2e3))},w=g=>{v("update:isEditOpen",g)};return(g,i)=>{const $=J;return C(),O(W,{width:g.$vuetify.display.smAndDown?"auto":650,"model-value":h.isEditOpen,"onUpdate:modelValue":w},{default:a(()=>[e($,{onClick:i[0]||(i[0]=y=>w(!1))}),e(N,{class:"pa-sm-9 pa-5"},{default:a(()=>[e(Z,null,{default:a(()=>[e(L,{class:"text-h5 d-flex flex-column align-center gap-2 text-center mb-3"},{default:a(()=>[e(D,{icon:"ph:knife-thin",size:"24",color:"primary"}),r("span",ge,m(t(s)("Edit_Item")),1)]),_:1})]),_:1}),e(M,null,{default:a(()=>[e(K,{ref_key:"refForm",ref:V,onSubmit:G(_,["prevent"])},{default:a(()=>[e(H,null,{default:a(()=>[e(P,{cols:"12",md:"6"},{default:a(()=>[e(z,{modelValue:t(u).name_ar,"onUpdate:modelValue":i[1]||(i[1]=y=>t(u).name_ar=y),label:t(s)("forms.name_ar"),rules:[t(F)]},null,8,["modelValue","label","rules"])]),_:1}),e(P,{cols:"12",md:"6"},{default:a(()=>[e(z,{modelValue:t(u).name_en,"onUpdate:modelValue":i[2]||(i[2]=y=>t(u).name_en=y),label:t(s)("forms.name_en"),rules:[t(F)]},null,8,["modelValue","label","rules"])]),_:1}),e(P,{cols:"12",md:"6"},{default:a(()=>[e(z,{modelValue:t(u).price,"onUpdate:modelValue":i[3]||(i[3]=y=>t(u).price=y),label:t(s)("forms.price"),rules:[t(F)]},null,8,["modelValue","label","rules"])]),_:1}),e(P,{cols:"12",class:"text-center"},{default:a(()=>[t(o)?(C(),O(x,{key:1,type:"submit",class:"position-relative me-3"},{default:a(()=>[e(D,{icon:"mingcute:loading-line",class:"loading",size:"32"})]),_:1})):(C(),O(x,{key:0,type:"submit",class:"me-3"},{default:a(()=>[T(m(t(s)("buttons.save")),1)]),_:1})),e(x,{variant:"tonal",color:"secondary",onClick:f},{default:a(()=>[T(m(t(s)("buttons.cancel")),1)]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}},he={class:"mx-1"},Ve={style:{width:"5rem"}},we={scope:"col",class:"font-weight-semibold"},ye={scope:"col",class:"font-weight-semibold"},Ce={scope:"col",class:"font-weight-semibold"},xe={scope:"col",class:"font-weight-semibold"},De=r("tr",null,[r("td",{colspan:"8",class:"text-center text-body-1"}," \u0644\u0627 \u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A ")],-1),Oe=[De],Se={class:"text-sm text-disabled"},Je={__name:"product-cut",setup(E){const{t:b}=B(),h=q(),v=c("");c();const l=c(5),o=c(1),s=c(1),u=c(0),f=c([]);c([]);const V=c(!1),_=c(!1),w=c({}),g=c(!1),i=()=>{h.fetchProductCut({q:v.value}).then(p=>{f.value=p.data.data,s.value=f.value/l,u.value=f.value.length,o.value=1}).catch(p=>{console.log(p)})};R(()=>{i()}),R(()=>{l.value&&(o.value=1)});const $=j(()=>(s.value=Math.ceil(f.value.length/l.value),f.value.filter((p,n)=>{let k=(o.value-1)*l.value,I=o.value*l.value;if(n>=k&&n<I)return!0}))),y=()=>{o.value*l.value<f.value.length&&o.value},X=()=>{o.value>1&&o.value},Y=j(()=>{const p=f.value.length?(o.value-1)*l.value+1:0,n=p+(l.value-1)<=f.value.length?p+(l.value-1):u.value;return` \u0639\u0631\u0636 \u0645\u0646 ${S(p)} \u0625\u0644\u064A ${S(n)} \u0645\u0646 ${S(u.value)} \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A `}),ee=p=>{_.value=!0,w.value=p},te=p=>{g.value=!0,w.value=p},S=p=>{const n="\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669";return String(p).replace(/[0123456789]/g,k=>n[k])};return(p,n)=>{const k=me,I=be,le=_e;return C(),U("div",null,[e(N,null,{default:a(()=>[e(L,{class:"d-flex align-center"},{default:a(()=>[e(D,{icon:"ph:knife-thin",size:"24",color:"primary"}),r("span",he,m(t(b)("Product_Cut")),1)]),_:1}),e(M,{class:"d-flex align-center flex-wrap gap-2 py-4"},{default:a(()=>[r("div",Ve,[e(pe,{modelValue:t(l),"onUpdate:modelValue":n[0]||(n[0]=d=>A(l)?l.value=d:null),variant:"outlined",items:[5,10,20,30,50]},null,8,["modelValue"])]),e(x,{"prepend-icon":"tabler-plus",onClick:n[1]||(n[1]=d=>V.value=!0)},{default:a(()=>[T(m(t(b)("Add_Item")),1)]),_:1}),e(fe)]),_:1}),e(Q),e(re,{class:"text-no-wrap product-list-table"},{default:a(()=>[r("thead",null,[r("tr",null,[r("th",we,m(t(b)("forms.id")),1),r("th",ye,m(t(b)("forms.name")),1),r("th",Ce,m(t(b)("forms.price")),1),r("th",xe,m(t(b)("forms.actions")),1)])]),r("tbody",null,[(C(!0),U(ie,null,ue(t($),(d,ae)=>(C(),U("tr",{key:d.id},[r("td",null," #"+m(S(++ae)),1),r("td",null,m(d.name_ar),1),r("td",null,m(S(Intl.NumberFormat().format(d.price))),1),r("td",null,[e(x,{icon:"",variant:"plain",color:"default",size:"x-small",onClick:se=>te(d)},{default:a(()=>[e(D,{size:22,icon:"tabler-pencil"})]),_:2},1032,["onClick"]),e(x,{icon:"",variant:"plain",color:"default",size:"x-small",onClick:se=>ee(d)},{default:a(()=>[e(D,{size:22,icon:"tabler-trash"})]),_:2},1032,["onClick"])])]))),128))]),de(r("tfoot",null,Oe,512),[[ce,!t(f).length]])]),_:1}),e(Q),e(M,{class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3"},{default:a(()=>[r("span",Se,m(t(Y)),1),e(ve,{modelValue:t(o),"onUpdate:modelValue":n[2]||(n[2]=d=>A(o)?o.value=d:null),size:"small","total-visible":t(l),length:t(s),onNext:y,onPrev:X},null,8,["modelValue","total-visible","length"])]),_:1})]),_:1}),e(k,{isAddOpen:t(V),"onUpdate:isAddOpen":n[3]||(n[3]=d=>A(V)?V.value=d:null),onRefreshTable:i},null,8,["isAddOpen"]),e(I,{isEditOpen:t(g),"onUpdate:isEditOpen":n[4]||(n[4]=d=>A(g)?g.value=d:null),item:t(w),onRefreshTable:i},null,8,["isEditOpen","item"]),e(le,{isDeleteOpen:t(_),"onUpdate:isDeleteOpen":n[5]||(n[5]=d=>A(_)?_.value=d:null),item:t(w),onRefreshTable:i},null,8,["isDeleteOpen","item"])])}}};export{Je as default};
