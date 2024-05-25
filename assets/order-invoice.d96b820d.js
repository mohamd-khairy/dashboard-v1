import{aB as Q,k as u,bP as O,bD as y,D as W,C as F,c6 as Y,o as p,b as S,w as o,p as e,bQ as J,bR as K,bS as X,ak as C,m as x,y as U,q as a,b$ as Z,c0 as aa,av as L,aw as c,al as V,a8 as ea,ag as ta,ap as $,ay as sa,bY as oa,c as E,an as la,ca as da,bW as ra,bX as ia}from"./index.8696608c.js";import{_ as na}from"./DialogCloseBtn.fa23c62a.js";import{u as ca}from"./Coupons.a076dca8.js";import{u as ma}from"./Employees.9819eac4.js";import{u as N}from"./Orders.bf3580ec.js";import{r as ua}from"./validators.dc210ddc.js";import{V as va}from"./VForm.b24f32c4.js";import{V as b}from"./VSelect.8b1bd621.js";import{V as fa}from"./VTooltip.5725ac57.js";import{d as pa}from"./VTextField.5650c267.js";import{V as _a}from"./VTextarea.7925c9ec.js";import{V as ba}from"./VDialog.7b711207.js";import{_ as ga}from"./logo.dd54840d.js";import"./moment.9709ab41.js";import"./forwardRefs.74a345f5.js";import"./VList.2c4b0ac9.js";import"./index.461d6288.js";import"./ssrBoot.1b100f40.js";import"./VDivider.f9f5c85d.js";import"./VOverlay.b159883d.js";import"./lazy.e80e0acb.js";import"./VMenu.6210b3de.js";import"./VCheckboxBtn.61f55216.js";import"./VChip.e8cfcd99.js";const ha={class:"mx-1 my-1"},ya={__name:"EditOrderDeatilsDialog",props:{isEditOpen:{type:Boolean,required:!0},item:{type:Object,required:!0}},emits:["update:isEditOpen","refreshTable"],setup(_,{emit:D}){const i=_,v=D,f=N(),t=Q(),g=ma(),m=u(!1),{t:d}=O(),s=y({id:null,order_state_id:null,user_id:null,discount_code:null,delivery_date:null,delivery_period:null,payment_type:null,paid:null,notes:null});W(()=>s.discount_code,n=>{s.discount_code=n});const h=y([]),T=y([]),A=u([]),k=u([]),I=u([]),R=ca();u();const q=()=>{v("update:isEditOpen",!1)};F(()=>{f.fetchOrderStatus().then(n=>{h.value=n.data.data}),g.fetchEmployees({pageSize:-1,role_id:7}).then(n=>{T.value=n.data.data}),R.fetchCoupons().then(n=>{A.value=n.data.data}),t.fetchDelivery_Periods().then(n=>{k.value=n.data.data}),t.fetchPaymentTypes().then(n=>{I.value=n.data.data})}),Y(()=>{s.id=i.item.order?i.item.order.id:0,s.order_state_id=i.item.order?i.item.order.order_state_id:0,s.discount_code=i.item.order?i.item.order.applied_discount_code:null,s.paid=i.item.order?i.item.order.paid:null,s.notes=i.item.order&&i.item.order.notes?i.item.order.notes:null});const B=u(null),w=u(!1),H=y([{id:1,name:"\u0645\u062F\u0641\u0648\u0639"},{id:0,name:"\u063A\u064A\u0631 \u0645\u062F\u0641\u0648\u0639"}]),j=()=>{w.value=!0,f.removeDiscount(s.id).then(()=>{t.alertColor="success",t.alertMessage="\u062A\u0645 \u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0643\u0648\u0628\u0648\u0646 \u0628\u0646\u062C\u0627\u062D",t.isAlertShow=!0,v("refreshTable"),setTimeout(()=>{t.isAlertShow=!1,t.alertMessage=""},2e3),w.value=!1}).catch(n=>{w.value=!1,t.alertColor="error",t.alertMessage="\u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627 !",t.isAlertShow=!0,setTimeout(()=>{t.isAlertShow=!1,t.alertMessage=""},2e3)})},G=async()=>{m.value=!0,(await B.value.validate()).valid?f.editOrder(s).then(l=>{v("refreshTable"),v("update:isEditOpen",!1),t.alertColor="success",t.alertMessage="\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D",t.isAlertShow=!0,setTimeout(()=>{t.isAlertShow=!1,t.alertMessage="",m.value=!1},1e3)}).catch(l=>{l.response.data.errors?Object.keys(l.response.data.errors).forEach(r=>{t.alertMessage=d(`errors.${r}`)}):t.alertMessage="\u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627 !",m.value=!1,t.alertColor="error",t.isAlertShow=!0,setTimeout(()=>{t.isAlertShow=!1,t.alertMessage=""},2e3)}):(m.value=!1,t.alertMessage="\u064A\u0631\u062C\u064A \u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 !",t.alertColor="error",t.isAlertShow=!0,setTimeout(()=>{t.isAlertShow=!1,t.alertMessage=""},2e3))},M=n=>{v("update:isEditOpen",n)};return(n,l)=>{const P=na;return p(),S(ba,{width:n.$vuetify.display.smAndDown?"auto":650,"model-value":i.isEditOpen,"onUpdate:modelValue":M},{default:o(()=>[e(P,{onClick:l[0]||(l[0]=r=>M(!1))}),e(J,{class:"pa-sm-9 pa-5"},{default:o(()=>[e(K,null,{default:o(()=>[e(X,{class:"text-h5 d-flex flex-column align-center gap-2 text-center mb-3"},{default:o(()=>[e(C,{icon:"solar:delivery-broken",size:"24",color:"primary"}),x("span",ha,U(a(d)("\u062A\u0639\u062F\u064A\u0644 \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628")),1)]),_:1})]),_:1}),e(Z,null,{default:o(()=>[e(va,{ref_key:"refForm",ref:B,onSubmit:aa(G,["prevent"])},{default:o(()=>[e(L,null,{default:o(()=>[e(c,{cols:"12",md:"6"},{default:o(()=>[e(b,{modelValue:a(s).order_state_id,"onUpdate:modelValue":l[1]||(l[1]=r=>a(s).order_state_id=r),items:a(h).value,label:a(d)("forms.order_state"),"item-title":"customer_state_ar","item-value":"code",rules:[a(ua)]},null,8,["modelValue","items","label","rules"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(b,{modelValue:a(s).user_id,"onUpdate:modelValue":l[2]||(l[2]=r=>a(s).user_id=r),items:a(T).value,label:a(d)("forms.user"),"item-title":"username","item-value":"id"},null,8,["modelValue","items","label"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(L,{align:"center"},{default:o(()=>[e(c,{cols:i.item.order.applied_discount_code?10:12},{default:o(()=>[e(b,{modelValue:a(s).discount_code,"onUpdate:modelValue":l[3]||(l[3]=r=>a(s).discount_code=r),label:a(d)("forms.coupon"),items:a(A),"item-title":"name","item-value":"code"},null,8,["modelValue","label","items"])]),_:1},8,["cols"]),i.item.order.applied_discount_code?(p(),S(c,{key:0,cols:i.item.order.applied_discount_code?2:0},{default:o(()=>[e(fa,{text:"\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0643\u0648\u0628\u0648\u0646 \u0645\u0646 \u0627\u0644\u0637\u0644\u0628"},{activator:o(({props:r})=>[e(V,ea(r,{icon:"",variant:"plain",color:"error",size:"x-small",onClick:j}),{default:o(()=>[e(C,{size:22,icon:"streamline:discount-percent-coupon"})]),_:2},1040)]),_:1})]),_:1},8,["cols"])):ta("",!0)]),_:1})]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(pa,{modelValue:a(s).delivery_date,"onUpdate:modelValue":l[4]||(l[4]=r=>a(s).delivery_date=r),type:"date",label:a(d)("forms.delivery_date")},null,8,["modelValue","label"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(b,{modelValue:a(s).delivery_period,"onUpdate:modelValue":l[5]||(l[5]=r=>a(s).delivery_period=r),label:a(d)("forms.delivery_time"),items:a(k),"item-title":"name_ar","item-value":"id"},null,8,["modelValue","label","items"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(b,{modelValue:a(s).payment_type,"onUpdate:modelValue":l[6]||(l[6]=r=>a(s).payment_type=r),label:a(d)("forms.payment_type_ids"),items:a(I),"item-title":"name_ar","item-value":"id"},null,8,["modelValue","label","items"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(b,{modelValue:a(s).paid,"onUpdate:modelValue":l[7]||(l[7]=r=>a(s).paid=r),label:a(d)("forms.payment_status"),items:a(H),"item-title":"name","item-value":"id"},null,8,["modelValue","label","items"])]),_:1}),e(c,{cols:"12"},{default:o(()=>[e(_a,{modelValue:a(s).notes,"onUpdate:modelValue":l[8]||(l[8]=r=>a(s).notes=r),label:a(d)("forms.notes"),rows:"3"},null,8,["modelValue","label"])]),_:1}),e(c,{cols:"12",class:"text-center"},{default:o(()=>[a(m)?(p(),S(V,{key:1,type:"submit",class:"position-relative me-3"},{default:o(()=>[e(C,{icon:"mingcute:loading-line",class:"loading",size:"32"})]),_:1})):(p(),S(V,{key:0,type:"submit",class:"me-3"},{default:o(()=>[$(U(a(d)("buttons.save")),1)]),_:1})),e(V,{variant:"tonal",color:"secondary",onClick:q},{default:o(()=>[$(U(a(d)("buttons.cancel")),1)]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}};const z=_=>(ra("data-v-a02fca08"),_=_(),ia(),_),Sa={key:0,class:"loader_wrap"},Va=z(()=>x("img",{src:ga,alt:"ehtzem"},null,-1)),Da=z(()=>x("p",{class:"text-2xl"},"\u062C\u0627\u0631\u064A \u062C\u0644\u0628 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A ...",-1)),wa=[Va,Da],Ca={key:1,class:"card-wrapper"},Ua=da('<div class="row pad-top-botm" data-v-a02fca08><div class="col-lg-6 col-md-6 col-sm-6" data-v-a02fca08></div><div class="col-lg-6 col-md-6 col-sm-6" data-v-a02fca08><strong data-v-a02fca08>Brian Bossier Design</strong><br data-v-a02fca08><i data-v-a02fca08>Address :</i> Barrington, IL <br data-v-a02fca08> 89th street , Suite 69, <br data-v-a02fca08> United States. </div></div><div class="row text-center contact-info" data-v-a02fca08><div class="col-lg-12 col-md-12 col-sm-12" data-v-a02fca08><hr data-v-a02fca08><span data-v-a02fca08><strong data-v-a02fca08>Email : </strong> brian@brianbossierdesign.com </span><span data-v-a02fca08><strong data-v-a02fca08>Call : </strong> +1-623-777-9044 </span><span data-v-a02fca08><strong data-v-a02fca08>Fax : </strong> +012340-908- 890 </span><hr data-v-a02fca08></div></div><div class="row pad-top-botm client-info" data-v-a02fca08><div class="col-lg-6 col-md-6 col-sm-6" data-v-a02fca08><h4 data-v-a02fca08><strong data-v-a02fca08>Client Information</strong></h4><strong data-v-a02fca08> Classy Client</strong><br data-v-a02fca08><b data-v-a02fca08>Address :</b> 111 , their street name, <br data-v-a02fca08> United States. <br data-v-a02fca08><b data-v-a02fca08>Call :</b> +1-908-567-0987 <br data-v-a02fca08><b data-v-a02fca08>E-mail :</b> info@clientdomain.com </div><div class="col-lg-6 col-md-6 col-sm-6" data-v-a02fca08><h4 data-v-a02fca08><strong data-v-a02fca08>Payment Details </strong></h4><b data-v-a02fca08>Bill Amount : 990 USD </b><br data-v-a02fca08> Bill Date : 01th August 2014 <br data-v-a02fca08><b data-v-a02fca08>Payment Status : Paid </b><br data-v-a02fca08> Delivery Date : 10th August 2014 <br data-v-a02fca08> Purchase Date : 30th July 2014 </div></div><div class="row" data-v-a02fca08><div class="col-lg-12 col-md-12 col-sm-12" data-v-a02fca08><div class="table-responsive" data-v-a02fca08><table class="table table-striped table-bordered table-hover" data-v-a02fca08><thead data-v-a02fca08><tr data-v-a02fca08><th data-v-a02fca08>STYLE</th><th data-v-a02fca08>COLOR</th><th data-v-a02fca08>Quantity.</th><th data-v-a02fca08>Unit Price</th><th data-v-a02fca08>Sub Total</th></tr></thead><tbody data-v-a02fca08><tr data-v-a02fca08><td data-v-a02fca08>SHOE DESIGN 2</td><td data-v-a02fca08>BLACK</td><td data-v-a02fca08>3</td><td data-v-a02fca08>$435 USD</td><td data-v-a02fca08>$1,305 USD</td></tr><tr data-v-a02fca08><td data-v-a02fca08>SHOE DESIGN 1</td><td data-v-a02fca08>Website Design</td><td data-v-a02fca08>3</td><td data-v-a02fca08>$435 USD</td><td data-v-a02fca08>$1,305 USD</td></tr><tr data-v-a02fca08><td data-v-a02fca08>3</td><td data-v-a02fca08>Hosting Domains</td><td data-v-a02fca08>2</td><td data-v-a02fca08>100 USD</td><td data-v-a02fca08>200 USD</td></tr></tbody></table></div><hr data-v-a02fca08><div class="ttl-amts" data-v-a02fca08><h5 data-v-a02fca08> Total Amount : 900 USD </h5></div><hr data-v-a02fca08><div class="ttl-amts" data-v-a02fca08><h5 data-v-a02fca08> Tax : 90 USD ( by 10 % on bill ) </h5></div><hr data-v-a02fca08><div class="ttl-amts" data-v-a02fca08><h4 data-v-a02fca08><strong data-v-a02fca08>Bill Amount : 990 USD</strong></h4></div></div></div><div class="row" data-v-a02fca08><div class="col-lg-12 col-md-12 col-sm-12" data-v-a02fca08><strong data-v-a02fca08> Important: </strong><ol data-v-a02fca08><li data-v-a02fca08> This is an electronic generated invoice so doesn&#39;t require any signature. </li><li data-v-a02fca08> Please read all terms and polices on www.yourdomaon.com for returns, replacement and other issues. </li></ol></div></div><div class="row pad-top-botm" data-v-a02fca08><div class="col-lg-12 col-md-12 col-sm-12" data-v-a02fca08><hr data-v-a02fca08><a href="#" class="btn btn-primary btn-lg" data-v-a02fca08>Print Invoice</a> \xA0\xA0\xA0 <a href="#" class="btn btn-success btn-lg" data-v-a02fca08>Download In Pdf</a></div></div>',6),Ea=[Ua],Oa={__name:"order-invoice",setup(_){const D=N(),i=oa(),v=u({}),f=u(!0),t=u(!1);O(),O();const g=m=>{D.fetchOrder(m).then(d=>{v.value=d==null?void 0:d.data.data,f.value=!1}).catch(d=>{f.value=!1})};return F(()=>{const m=i.params.id;g(m)}),(m,d)=>{const s=ya;return p(),E("div",null,[a(f)?(p(),E("div",Sa,wa)):(p(),E("div",Ca,Ea)),e(s,{isEditOpen:a(t),"onUpdate:isEditOpen":d[0]||(d[0]=h=>la(t)?t.value=h:null),item:a(v),onRefrshTable:g},null,8,["isEditOpen","item"])])}}},Za=sa(Oa,[["__scopeId","data-v-a02fca08"]]);export{Za as default};
