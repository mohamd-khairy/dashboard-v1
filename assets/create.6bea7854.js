import{aB as R,j as $,k as n,bP as O,C as Q,r as G,o as _,c as H,p as t,w as s,bS as J,ak as g,b$ as K,c0 as W,av as X,aw as i,q as l,b as U,al as I,bQ as Y,m as A}from"./index.e195cd26.js";import{u as Z}from"./Employees.44d1dea6.js";import{u as ee}from"./Products.8f4807a4.js";import{u as le}from"./Stocks.1ea6d577.js";import{u as te}from"./Stores.c71e12d1.js";import{u as ae}from"./Suppliers.3b5560c1.js";import{r as d}from"./validators.dc210ddc.js";import{V as oe}from"./VForm.bf1fdf96.js";import{V as f}from"./VSelect.d3114f6b.js";import{a as M}from"./VList.9d440da5.js";import{d as p}from"./VTextField.0ba2900d.js";import{V as q}from"./VDivider.638f8eff.js";import{V as se}from"./VFileInput.892a0b51.js";import{V as re}from"./VTextarea.3e3c834d.js";import"./forwardRefs.74a345f5.js";import"./VOverlay.e3c69687.js";import"./lazy.3c63b833.js";import"./VMenu.62aeda27.js";import"./VCheckboxBtn.720fbc0c.js";import"./VChip.37b1ef7f.js";import"./index.4f7ac4e6.js";import"./ssrBoot.d7cd1016.js";const ue=A("span",{class:"mx-1"},"\u0625\u0636\u0627\u0641\u0629 \u0645\u062E\u0632\u0648\u0646",-1),ie=A("span",null,"\u062D\u0641\u0638 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",-1),he={__name:"create",setup(ne){const u=R(),h=le(),F=te(),L=ee(),B=Z(),P=ae(),z=$(),c=n(!1),S=n([]),b=n([]),y=n([]),x=n([]),a=n({product_id:null,store_id:null,supplier_id:null,user_id:null,product_name:null,quantity:1,price:null,tax:null,invoice:[],invoice_price:null,notes:null}),{t:w}=O(),k=n(null),D=async()=>{if(c.value=!0,(await k.value.validate()).valid){const e=new FormData;e.append("product_id",a.value.product_id),e.append("invoice",a.value.invoice[0]),e.append("store_id",a.value.store_id),e.append("supplier_id",a.value.supplier_id),e.append("user_id",a.value.user_id),e.append("product_name",a.value.product_name),e.append("quantity",a.value.quantity),e.append("price",a.value.price),e.append("tax",a.value.tax),e.append("invoice_price",a.value.invoice_price),e.append("notes",a.value.notes),h.store(e).then(r=>{u.alertColor="success",u.alertMessage="\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D",u.isAlertShow=!0,setTimeout(()=>{u.isAlertShow=!1,u.alertMessage=""},1e3),z.push({name:"stocks"})}).catch(r=>{r.response.data.errors?Object.keys(r.response.data.errors).forEach(N=>{u.alertMessage=w(`errors.${N}`)}):u.alertMessage="\u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627 !",u.alertColor="error",u.isAlertShow=!0,setTimeout(()=>{u.isAlertShow=!1,u.alertMessage=""},2e3)}).finally(()=>{c.value=!1})}else c.value=!1,u.alertMessage="\u064A\u0631\u062C\u064A \u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 !",u.alertColor="error",u.isAlertShow=!0,setTimeout(()=>{u.isAlertShow=!1,u.alertMessage=""},2e3)},C=n(null),V=n(!1),E=m=>{clearTimeout(C.value),C.value=setTimeout(()=>{V.value=!0,L.fetchProducts({search:m.target.value}).then(e=>{var r,o;b.value=((o=(r=e.data)==null?void 0:r.data)==null?void 0:o.data)||[]}).finally(()=>{V.value=!1})},800)},T=n(null),v=n(!1),j=m=>{clearTimeout(T.value),T.value=setTimeout(()=>{v.value=!0,F.getAll({search:m.target.value}).then(e=>{var r,o;S.value=((o=(r=e.data)==null?void 0:r.data)==null?void 0:o.data)||[]}).finally(()=>{v.value=!1})},800)};return Q(()=>{B.fetchEmployees({pageSize:-1}).then(m=>{var e,r;y.value=((r=(e=m.data)==null?void 0:e.data)==null?void 0:r.data)||[]}),P.getAll({pageSize:-1}).then(m=>{var e,r;x.value=((r=(e=m.data)==null?void 0:e.data)==null?void 0:r.data)||[]})}),(m,e)=>{const r=G("VListItemContent");return _(),H("div",null,[t(Y,{class:"mb-5 pa-5"},{default:s(()=>[t(J,{class:"d-flex align-center gap-2"},{default:s(()=>[t(g,{icon:"material-symbols:production-quantity-limits-sharp",size:"24",color:"primary"}),ue]),_:1}),t(K,{class:"d-flex align-center flex-wrap gap-2 py-4"},{default:s(()=>[t(oe,{ref_key:"refForm",ref:k,onSubmit:W(D,["prevent"])},{default:s(()=>[t(X,null,{default:s(()=>[t(i,{cols:"12",md:"6"},{default:s(()=>[t(f,{modelValue:l(a).product_id,"onUpdate:modelValue":e[0]||(e[0]=o=>l(a).product_id=o),items:l(b),label:"\u0627\u0644\u0645\u0646\u062A\u062C","item-title":"name_ar","item-value":"id",rules:[l(d)],loading:l(V)},{"prepend-item":s(()=>[t(M,null,{default:s(()=>[t(r,null,{default:s(()=>[t(p,{placeholder:"\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A",onInput:E})]),_:1})]),_:1}),t(q,{class:"mt-2"})]),_:1},8,["modelValue","items","rules","loading"])]),_:1}),t(i,{cols:"12",md:"6"},{default:s(()=>[t(f,{modelValue:l(a).store_id,"onUpdate:modelValue":e[1]||(e[1]=o=>l(a).store_id=o),items:l(S),label:"\u0627\u0644\u0645\u062E\u0632\u0646","item-title":"name","item-value":"id",rules:[l(d)],loading:l(v)},{"prepend-item":s(()=>[t(M,null,{default:s(()=>[t(r,null,{default:s(()=>[t(p,{placeholder:"\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0645\u062E\u0627\u0632\u0646",onInput:j})]),_:1})]),_:1}),t(q,{class:"mt-2"})]),_:1},8,["modelValue","items","rules","loading"])]),_:1}),t(i,{cols:"12",md:"6"},{default:s(()=>[t(f,{modelValue:l(a).supplier_id,"onUpdate:modelValue":e[2]||(e[2]=o=>l(a).supplier_id=o),items:l(x),label:"\u0627\u0644\u0645\u0648\u0631\u062F","item-title":"name","item-value":"id",rules:[l(d)]},null,8,["modelValue","items","rules"])]),_:1}),t(i,{cols:"12",md:"6"},{default:s(()=>[t(f,{modelValue:l(a).user_id,"onUpdate:modelValue":e[3]||(e[3]=o=>l(a).user_id=o),items:l(y),label:"\u0627\u0644\u0645\u0648\u0638\u0641 \u0627\u0644\u0645\u0633\u0626\u0648\u0644","item-title":"username","item-value":"id",rules:[l(d)]},null,8,["modelValue","items","rules"])]),_:1}),t(i,{cols:"12",md:"6"},{default:s(()=>[t(p,{modelValue:l(a).product_name,"onUpdate:modelValue":e[4]||(e[4]=o=>l(a).product_name=o),label:"\u0627\u0633\u0645 \u0627\u0644\u0645\u062E\u0632\u0648\u0646",rules:[l(d)]},null,8,["modelValue","rules"])]),_:1}),t(i,{cols:"12",md:"6"},{default:s(()=>[t(p,{modelValue:l(a).quantity,"onUpdate:modelValue":e[5]||(e[5]=o=>l(a).quantity=o),label:"\u0627\u0644\u0643\u0645\u064A\u0629",type:"number",min:"0",rules:[l(d)]},null,8,["modelValue","rules"])]),_:1}),t(i,{cols:"12",md:"6"},{default:s(()=>[t(p,{modelValue:l(a).price,"onUpdate:modelValue":e[6]||(e[6]=o=>l(a).price=o),label:"\u0627\u0644\u0633\u0639\u0631",type:"number",min:"0",rules:[l(d)]},null,8,["modelValue","rules"])]),_:1}),t(i,{cols:"12",md:"6"},{default:s(()=>[t(p,{modelValue:l(a).tax,"onUpdate:modelValue":e[7]||(e[7]=o=>l(a).tax=o),label:"\u0627\u0644\u0636\u0631\u064A\u0628\u0629",type:"number",min:"0",rules:[l(d)]},null,8,["modelValue","rules"])]),_:1}),t(i,{cols:"12",md:"6"},{default:s(()=>[t(se,{modelValue:l(a).invoice,"onUpdate:modelValue":e[8]||(e[8]=o=>l(a).invoice=o),label:"\u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629",accept:"image/*","prepend-icon":"","prepend-inner-icon":"mdi-image",rules:[l(d)]},null,8,["modelValue","rules"])]),_:1}),t(i,{cols:"12",md:"6"},{default:s(()=>[t(p,{modelValue:l(a).invoice_price,"onUpdate:modelValue":e[9]||(e[9]=o=>l(a).invoice_price=o),label:"\u0633\u0639\u0631 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629",type:"number",min:"0",rules:[l(d)]},null,8,["modelValue","rules"])]),_:1}),t(i,{cols:"12"},{default:s(()=>[t(re,{modelValue:l(a).notes,"onUpdate:modelValue":e[10]||(e[10]=o=>l(a).notes=o),label:l(w)("forms.notes"),rows:"6"},null,8,["modelValue","label"])]),_:1}),t(i,{cols:"12"},{default:s(()=>[l(c)?(_(),U(I,{key:0,type:"button",class:"position-relative d-flex px-14"},{default:s(()=>[t(g,{icon:"mingcute:loading-line",class:"loading",size:"32"})]),_:1})):(_(),U(I,{key:1,color:"primary",class:"px-4 d-flex",type:"submit"},{default:s(()=>[t(g,{size:22,icon:"material-symbols-light:save-outline"}),ie]),_:1}))]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})])}}};export{he as default};
