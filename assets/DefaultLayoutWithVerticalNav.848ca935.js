import{t as l,i as d,r as u,o as n,b as r,w as o,m as _,q as t,al as b,p as e,ak as h,ag as f,T as g,e as v,bO as y}from"./index.8d01543a.js";import{_ as C}from"./TheCustomizer.a9a24dfa.js";import k from"./Footer.be2a7bec.js";import w from"./NavbarThemeSwitcher.e118ee2b.js";import V from"./UserProfile.f5e9e1b3.js";import{V as z}from"./VSpacer.40a311d3.js";import"./VDivider.c9b30b9a.js";import"./index.4049f65e.js";import"./VTextField.b27bb6f2.js";import"./forwardRefs.74a345f5.js";import"./VCheckboxBtn.6481c716.js";import"./VSwitch.5107874e.js";import"./VSelect.2c43c85a.js";import"./VList.35d78c12.js";import"./ssrBoot.e590dc30.js";import"./VOverlay.cd1f8bc0.js";import"./lazy.746ef82b.js";import"./VMenu.535e4389.js";import"./VChip.2389378e.js";import"./VBadge.adaae1bb.js";const P=[{title:"Home",to:{name:"index"},icon:{icon:"tabler-smart-home"},permission:"read-dashboard"},{title:"Banners",to:{name:"banners"},icon:{icon:"game-icons:vertical-banner"},permission:"read-banner"},{title:"Orders",to:{name:"orders"},icon:{icon:"solar:delivery-broken"},permission:"read-order"},{title:"Categories",to:{name:"categories"},icon:{icon:"carbon:categories"},permission:"read-category"},{title:"Sub_Category",to:{name:"sub-category"},icon:{icon:"carbon:category-new-each"},permission:"read-sub-category"},{title:"Products",to:{name:"products"},icon:{icon:"streamline:shopping-bag-hand-bag-1-shopping-bag-purse-goods-item-products"},permission:"read-product"},{title:"\u0627\u0644\u0645\u062E\u0632\u0646",icon:{icon:"carbon:store"},permission:"read-dashboard",children:[{title:"\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631",to:{name:"invoices"}},{title:"\u0627\u0644\u0645\u062E\u0632\u0648\u0646",to:{name:"stocks"}},{title:"\u0627\u0644\u0645\u062E\u0632\u0646",to:{name:"stores"}},{title:"\u0627\u0644\u0645\u0648\u0631\u062F\u0648\u0646",to:{name:"suppliers"}},{title:"\u0627\u0644\u062E\u0632\u0646",to:{name:"safes"}},{title:"\u0627\u0644\u0628\u0646\u0648\u0643",to:{name:"banks"}}],permission:"read-permission"},{title:"Coupons",to:{name:"coupons"},icon:{icon:"bxs:coupon"},permission:"read-discount"},{title:"Countries",to:{name:"countries"},icon:{icon:"material-symbols:globe"},permission:"read-country"},{title:"Cities",to:{name:"cities"},icon:{icon:"solar:city-broken"},permission:"read-city"},{title:"Customers",to:{name:"customers"},icon:{icon:"clarity:users-line"},permission:"read-customer"},{title:"Employees",to:{name:"employees"},icon:{icon:"ph:users-four"},permission:"read-user"},{title:"Roles",to:{name:"roles"},icon:{icon:"zondicons:shield"},permission:"read-role"},{title:"Permissions",to:{name:"permissions"},icon:{icon:"zondicons:shield"},permission:"read-permission"},{title:"Settings",icon:{icon:"uil:setting"},children:[{title:"Product_Cut",to:"product-cut"},{title:"Product_Preparation",to:"product-preparation"},{title:"Product_Size",to:"product-size"},{title:"Product_Miced_Meat",to:"product-miced-meat"},{title:"Product_Shalwata",to:"product-shalwata"}],permission:"read-product"},{title:"Activities",to:{name:"activities"},icon:{icon:"octicon:log-24"},permission:"read-dashboard"}],x={class:"d-flex h-100 align-center"},Y={__name:"DefaultLayoutWithVerticalNav",setup(B){const{appRouteTransition:s,isLessThanOverlayNavBreakpoint:a}=l(),{width:c}=d();return(S,T)=>{const m=u("RouterView"),p=C;return n(),r(t(y),{"nav-items":t(P)},{navbar:o(({toggleVerticalOverlayNavActive:i})=>[_("div",x,[t(a)(t(c))?(n(),r(b,{key:0,icon:"",variant:"text",color:"default",class:"ms-n3",size:"small",onClick:N=>i(!0)},{default:o(()=>[e(h,{icon:"tabler-menu-2",size:"24"})]),_:2},1032,["onClick"])):f("",!0),e(w),e(z),e(V)])]),footer:o(()=>[e(k)]),default:o(()=>[e(m,null,{default:o(({Component:i})=>[e(g,{name:t(s),mode:"out-in"},{default:o(()=>[(n(),r(v(i)))]),_:2},1032,["name"])]),_:1}),e(p)]),_:1},8,["nav-items"])}}};export{Y as default};
