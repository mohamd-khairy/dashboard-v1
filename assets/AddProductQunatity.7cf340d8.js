import{bP as O,aB as L,k as r,bD as R,c6 as Q,o as S,c as F,p as l,w as d,bQ as T,q as e,bR as $,bS as I,ak as U,m as N,y as q,b$ as j,c0 as E,av as G,aw as o,b as A,al as x,ap as C}from"./index.8d01543a.js";import{_ as H}from"./DialogCloseBtn.0d2acdf8.js";import{u as J}from"./Products.979d0fae.js";import{V as K}from"./VForm.6ad382fa.js";import{d as W}from"./VTextField.b27bb6f2.js";import{V as n}from"./VSelect.2c43c85a.js";import{V as f}from"./VCheckbox.b7252a11.js";import{V as X}from"./VDialog.6b48d5ed.js";import"./forwardRefs.74a345f5.js";import"./index.4049f65e.js";import"./VList.35d78c12.js";import"./ssrBoot.e590dc30.js";import"./VDivider.c9b30b9a.js";import"./VOverlay.cd1f8bc0.js";import"./lazy.746ef82b.js";import"./VMenu.535e4389.js";import"./VCheckboxBtn.6481c716.js";import"./VChip.2389378e.js";const Y={class:"mx-1 my-1"},ve={__name:"AddProductQunatity",props:{isAddOpen:{type:Boolean,required:!0},item:{type:Object,required:!0},itemSaved:{type:Object,required:!0},sizes:{type:Array,required:!0},micedmeats:{type:Array,required:!0},cuts:{type:Array,required:!0},preparations:{type:Array,required:!0}},emits:["update:isAddOpen","addProductQuantity"],setup(M,{emit:B}){const s=M,V=B,{t:u}=O();L();const P=J(),v=r([]),b=r([]),y=r([]),g=r([]),a=R({id:null,quantity:1,cut_id:null,size_id:null,miced_meat_id:null,preparation_id:null,shalwata:0,is_karashah:0,is_kwar3:0,is_lyh:0,is_Ras:null}),p=r(!1),_=r(!1),k=r(!1),c=r(!1),w=()=>{a.quantity=1,a.cut_id=null,a.size_id=null,a.miced_meat_id=null,a.preparation_id=null,a.shalwata=0,a.is_karashah=0,a.is_kwar3=0,a.is_lyh=0,a.is_Ras=null,v.value=[],b.value=[],y.value=[],g.value=[],V("update:isAddOpen",!1)},h=()=>{V("addProductQuantity",a),w()},z=m=>{w(),V("update:isAddOpen",m)};return Q(()=>{var m;p.value=!0,_.value=!0,k.value=!0,c.value=!0,a.id=s.item.id,a.quantity=s.itemSaved.quantity,a.cut_id=s.itemSaved.cut_id,a.size_id=s.itemSaved.size_id,a.miced_meat_id=(m=s.itemSaved.miced_meat_id)!=null?m:null,a.preparation_id=s.itemSaved.preparation_id,s.item&&s.item.id&&P.fetchProduct(s.item.id).then(t=>{g.value=t.data.data.preparations,b.value=t.data.data.sizes,y.value=t.data.data.MicedMeats,v.value=t.data.data.cuts,p.value=!1,_.value=!1,k.value=!1,c.value=!1})}),(m,t)=>{const D=H;return S(),F("div",null,[l(X,{width:m.$vuetify.display.smAndDown?"auto":650,"model-value":s.isAddOpen,"onUpdate:modelValue":z},{default:d(()=>[l(D,{onClick:t[0]||(t[0]=i=>z(!1))}),l(T,{loading:e(p)||e(_)||e(c),class:"pa-sm-9 pa-5"},{default:d(()=>[l($,null,{default:d(()=>[l(I,{class:"text-h5 d-flex flex-column align-center gap-2 text-center mb-3"},{default:d(()=>[l(U,{icon:"solar:tag-broken",size:"24",color:"primary"}),N("span",Y,q(e(u)("Add_Quantity")),1)]),_:1})]),_:1}),l(j,null,{default:d(()=>[l(K,{ref:"bannerData",onSubmit:E(h,["prevent"])},{default:d(()=>[l(G,null,{default:d(()=>[l(o,{cols:"12",md:"6"},{default:d(()=>[l(W,{modelValue:e(a).quantity,"onUpdate:modelValue":t[1]||(t[1]=i=>e(a).quantity=i),label:e(u)("forms.quantity")},null,8,["modelValue","label"])]),_:1}),l(o,{cols:"12",md:"6"},{default:d(()=>[l(n,{modelValue:e(a).cut_id,"onUpdate:modelValue":t[2]||(t[2]=i=>e(a).cut_id=i),items:e(v),label:e(u)("forms.product_cut"),"item-title":"name_ar","item-value":"id",disabled:e(p)},null,8,["modelValue","items","label","disabled"])]),_:1}),l(o,{cols:"12",md:"6"},{default:d(()=>[l(n,{modelValue:e(a).size_id,"onUpdate:modelValue":t[3]||(t[3]=i=>e(a).size_id=i),items:e(b),label:e(u)("forms.product_size"),"item-title":"name_ar","item-value":"id",disabled:e(_)},null,8,["modelValue","items","label","disabled"])]),_:1}),l(o,{cols:"12",md:"6"},{default:d(()=>[l(n,{modelValue:e(a).miced_meat_id,"onUpdate:modelValue":t[4]||(t[4]=i=>e(a).miced_meat_id=i),items:e(y),label:e(u)("forms.productMicedMeats"),"item-title":"name_ar","item-value":"id",disabled:e(k)},null,8,["modelValue","items","label","disabled"])]),_:1}),l(o,{cols:"12",md:"6"},{default:d(()=>[l(n,{modelValue:e(a).preparation_id,"onUpdate:modelValue":t[5]||(t[5]=i=>e(a).preparation_id=i),items:e(g),label:e(u)("forms.product_preparation"),"item-title":"name_ar","item-value":"id",disabled:e(c)},null,8,["modelValue","items","label","disabled"])]),_:1}),l(o,{cols:"12",md:"6"},{default:d(()=>[l(n,{modelValue:e(a).is_Ras,"onUpdate:modelValue":t[6]||(t[6]=i=>e(a).is_Ras=i),items:[{name_ar:"\u0633\u0644\u062E",id:"salkh"},{name_ar:"\u0628\u062F\u0648\u0646",id:"without"},{name_ar:"\u0634\u0644\u0648\u0637\u0629",id:"shalwta"}],label:e(u)("forms.ra2s"),"item-title":"name_ar","item-value":"id"},null,8,["modelValue","label"])]),_:1}),l(o,{cols:"12",md:"6",class:"d-flex gap-9"},{default:d(()=>[l(f,{modelValue:e(a).shalwata,"onUpdate:modelValue":t[7]||(t[7]=i=>e(a).shalwata=i),label:"\u0645\u0639 \u0634\u0644\u0648\u0637\u0629","false-value":0,"true-value":1},null,8,["modelValue"]),l(f,{modelValue:e(a).is_karashah,"onUpdate:modelValue":t[8]||(t[8]=i=>e(a).is_karashah=i),label:"\u0628\u062F\u0648\u0646 \u0643\u0631\u0634\u0629","false-value":0,"true-value":1},null,8,["modelValue"])]),_:1}),l(o,{cols:"12",md:"6",class:"d-flex gap-9"},{default:d(()=>[l(f,{modelValue:e(a).is_kwar3,"onUpdate:modelValue":t[9]||(t[9]=i=>e(a).is_kwar3=i),label:"\u0628\u062F\u0648\u0646 \u0643\u0648\u0627\u0631\u0639","false-value":0,"true-value":1},null,8,["modelValue"]),l(f,{modelValue:e(a).is_lyh,"onUpdate:modelValue":t[10]||(t[10]=i=>e(a).is_lyh=i),label:"\u0628\u062F\u0648\u0646 \u0644\u064A\u0647","false-value":0,"true-value":1},null,8,["modelValue"])]),_:1}),l(o,{cols:"12",md:"6",class:"d-flex gap-10 mb-4"}),l(o,{cols:"12",class:"text-center"},{default:d(()=>[m.isLoading?(S(),A(x,{key:1,type:"submit",class:"position-relative me-3"},{default:d(()=>[l(U,{icon:"mingcute:loading-line",class:"loading",size:"32"})]),_:1})):(S(),A(x,{key:0,type:"submit",class:"me-3"},{default:d(()=>[C(q(e(u)("buttons.save")),1)]),_:1})),l(x,{variant:"tonal",color:"secondary",onClick:w},{default:d(()=>[C(q(e(u)("buttons.cancel")),1)]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1},8,["loading"])]),_:1},8,["width","model-value"])])}}};export{ve as default};
