import{bP as R,aB as N,bD as D,k as V,c6 as j,C as q,o as _,b as S,w as o,p as t,bQ as E,bR as z,bS as J,ak as M,m as P,y,q as s,b$ as Q,c0 as G,av as H,aw as c,al as v,ap as O,b_ as W,bU as f}from"./index.e195cd26.js";import{_ as X}from"./DialogCloseBtn.a5443f2c.js";import{u as Y}from"./Employees.44d1dea6.js";import{u as Z}from"./Roles.9ea452a8.js";import{u as K}from"./Cities.5a000363.js";import{u as ee}from"./Countries.4447f2e9.js";import{V as se}from"./VForm.bf1fdf96.js";import{V as T}from"./VSelect.d3114f6b.js";import{d as w}from"./VTextField.0ba2900d.js";import{V as te}from"./VSwitch.2364144e.js";import{V as le}from"./VDialog.4d61232b.js";const ae={class:"mx-1 my-1"},Ve={__name:"AddCustomerAddressDialog",props:{isAddOpen:{type:Boolean,required:!0},customerId:{type:Number,required:!0}},emits:["update:isAddOpen","refreshTable"],setup(e,{emit:u}){const p=e,m=u,{t:n}=R(),g=Z(),$=Y(),F=ee(),I=K(),r=N(),B=D([]),A=V([]),C=V([]),b=V(!1),l=D({customer_id:null,country_id:null,city_id:null,address:null,comment:null,label:null,is_default:!1,lat:0,lng:0}),h=()=>{l.country_id=null,l.city_id=null,l.address=null,l.comment=null,l.label=null,l.is_default=!1,l.lat=0,l.lng=0,m("update:isAddOpen",!1)},x=V(null);j(()=>{l.customer_id=p.customerId}),q(()=>{g.fetchRoles().then(i=>{B.value=i.data.data}),F.fetchCountries().then(i=>{A.value=i.data.data}),I.fetchCities().then(i=>{C.value=i.data.data})});const L=async()=>{b.value=!0,(await x.value.validate()).valid?$.storeAddress(l).then(a=>{b.value=!1,r.alertColor="success",r.alertMessage="\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0646\u0635\u0631 \u0628\u0646\u062C\u0627\u062D",r.isAlertShow=!0,h(),m("refreshTable",a.data.data),m("update"),setTimeout(()=>{r.isAlertShow=!1,r.alertMessage=""},2e3)}).catch(a=>{a.response.data.errors?Object.keys(a.response.data.errors).forEach(d=>{r.alertMessage=n(`errors.${d}`)}):r.alertMessage="\u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627 !",b.value=!1,r.alertColor="error",r.isAlertShow=!0,setTimeout(()=>{r.isAlertShow=!1,r.alertMessage=""},2e3)}):(b.value=!1,r.alertMessage="\u064A\u0631\u062C\u064A \u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 !",r.alertColor="error",r.isAlertShow=!0,setTimeout(()=>{r.isAlertShow=!1,r.alertMessage=""},2e3))},U=i=>{m("update:isAddOpen",i)};return(i,a)=>{const k=X;return _(),S(le,{width:i.$vuetify.display.smAndDown?"auto":650,"model-value":p.isAddOpen,"onUpdate:modelValue":U},{default:o(()=>[t(k,{onClick:a[0]||(a[0]=d=>U(!1))}),t(E,{class:"pa-sm-9 pa-5"},{default:o(()=>[t(z,null,{default:o(()=>[t(J,{class:"text-h5 d-flex flex-column align-center gap-2 text-center mb-3"},{default:o(()=>[t(M,{icon:"ph:users-four",size:"24",color:"primary"}),P("span",ae,y(s(n)("Add_Address")),1)]),_:1})]),_:1}),t(Q,null,{default:o(()=>[t(se,{ref_key:"refForm",ref:x,onSubmit:G(L,["prevent"])},{default:o(()=>[t(H,null,{default:o(()=>[t(c,{cols:"12",lg:"12",sm:"6"},{default:o(()=>[t(T,{modelValue:s(l).country_id,"onUpdate:modelValue":a[1]||(a[1]=d=>s(l).country_id=d),items:s(A),"item-title":"name_ar","item-value":"id",label:s(n)("forms.country")},null,8,["modelValue","items","label"])]),_:1}),t(c,{cols:"12",lg:"12",sm:"6"},{default:o(()=>[t(T,{modelValue:s(l).city_id,"onUpdate:modelValue":a[2]||(a[2]=d=>s(l).city_id=d),items:s(C),"item-title":"name_ar","item-value":"id",label:s(n)("forms.city")},null,8,["modelValue","items","label"])]),_:1}),t(c,{cols:"12",lg:"12",sm:"6"},{default:o(()=>[t(w,{modelValue:s(l).address,"onUpdate:modelValue":a[3]||(a[3]=d=>s(l).address=d),label:s(n)("forms.address")},null,8,["modelValue","label"])]),_:1}),t(c,{cols:"12",lg:"12",sm:"6"},{default:o(()=>[t(w,{modelValue:s(l).comment,"onUpdate:modelValue":a[4]||(a[4]=d=>s(l).comment=d),label:s(n)("forms.comment")},null,8,["modelValue","label"])]),_:1}),t(c,{cols:"12",lg:"12",sm:"6"},{default:o(()=>[t(w,{modelValue:s(l).label,"onUpdate:modelValue":a[5]||(a[5]=d=>s(l).label=d),label:s(n)("forms.label")},null,8,["modelValue","label"])]),_:1}),t(c,{cols:"12",lg:"12",sm:"6"},{default:o(()=>[t(te,{modelValue:s(l).is_default,"onUpdate:modelValue":a[6]||(a[6]=d=>s(l).is_default=d),label:s(n)("forms.is_default")},null,8,["modelValue","label"])]),_:1}),t(c,{cols:"12",class:"text-center"},{default:o(()=>[s(b)?(_(),S(v,{key:1,type:"submit",class:"position-relative me-3"},{default:o(()=>[t(M,{icon:"mingcute:loading-line",class:"loading",size:"32"})]),_:1})):(_(),S(v,{key:0,type:"submit",class:"me-3"},{default:o(()=>[O(y(s(n)("buttons.save")),1)]),_:1})),t(v,{variant:"tonal",color:"secondary",onClick:h},{default:o(()=>[O(y(s(n)("buttons.cancel")),1)]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}},ge=(e=[])=>{if(!localStorage.getItem("najdUser"))return!1;const p=JSON.parse(localStorage.getItem("najdUser")).roles||[];if(typeof e=="string")return p.some(n=>n==e);let m=0;return e.forEach(n=>{p.some(g=>g==n)&&m++}),m>0},_e=W("CustomersStore",{actions:{getAll(e){return f.get("customers",{params:e})},getOne(e){return f.get(`/customers/${e}`)},getAddresses(e){return f.get(`/customers-address/${e}`)},storeAddress(e){return f.post("customers-address/store",e)},store(e){const u=new FormData;return u.append("mobile",e.mobile),u.append("name",e.name),u.append("address",e.address),f.post("customers/store",u)},edit(e){const u=new FormData;return u.append("name",e.name),u.append("email",e.email),u.append("mobile",e.mobile),u.append("wallet",e.wallet),f.post(`customers/${e.id}`,u)},delete(e){return f.delete(`customers/${e.id}`)}}});export{Ve as _,ge as h,_e as u};
