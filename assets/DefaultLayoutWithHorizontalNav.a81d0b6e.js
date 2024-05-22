import{_ as C}from"./TheCustomizer.b4bf1c18.js";import{o as i,c as u,F as b,a as k,b as h,e as w,_ as $,f as z,g as S,i as P,j as x,k as L,l as N,m as t,n as m,p as o,q as e,s as v,t as R,r as y,w as a,v as B,x as g,y as I,T as V}from"./index.e195cd26.js";import E from"./Footer.f165a3f5.js";import T from"./NavbarThemeSwitcher.a2f848b6.js";import H from"./UserProfile.b24b7910.js";import{V as W}from"./VSpacer.b4f17f1c.js";import"./VDivider.638f8eff.js";import"./index.4f7ac4e6.js";import"./VTextField.0ba2900d.js";import"./forwardRefs.74a345f5.js";import"./VCheckboxBtn.720fbc0c.js";import"./VSwitch.2364144e.js";import"./VSelect.d3114f6b.js";import"./VList.9d440da5.js";import"./ssrBoot.d7cd1016.js";import"./VOverlay.e3c69687.js";import"./lazy.3c63b833.js";import"./VMenu.62aeda27.js";import"./VChip.37b1ef7f.js";import"./VBadge.866b7f93.js";const q={class:"nav-items"},D={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(p){const r=c=>"children"in c?$:z;return(c,d)=>(i(),u("ul",q,[(i(!0),u(b,null,k(p.navItems,(s,l)=>(i(),h(w(r(s)),{key:l,item:s},null,8,["item"]))),128))]))}},F={class:"layout-navbar"},M={class:"navbar-content-container"},j={class:"layout-horizontal-nav"},A={class:"horizontal-nav-content-container"},O={class:"layout-page-content"},Y={class:"layout-footer"},G={class:"footer-content-container"},J={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(p){const{y:r}=S(),{width:c}=P(),d=x(),s=L(!1);d.beforeEach(()=>{s.value=!0}),d.afterEach(()=>{s.value=!1});const{_layoutClasses:l,isNavbarBlurEnabled:_}=N();return(n,f)=>(i(),u("div",{class:v(["layout-wrapper",e(l)(e(c),e(r))])},[t("div",{class:v(["layout-navbar-and-nav-container",e(_)&&"header-blur"])},[t("div",F,[t("div",M,[m(n.$slots,"navbar")])]),t("div",j,[t("div",A,[o(e(D),{"nav-items":p.navItems},null,8,["nav-items"])])])],2),t("main",O,[n.$slots["content-loading"]?(i(),u(b,{key:0},[e(s)?m(n.$slots,"content-loading",{key:0}):m(n.$slots,"default",{key:1})],64)):m(n.$slots,"default",{key:1})]),t("footer",Y,[t("div",G,[m(n.$slots,"footer")])])],2))}},K=[{title:"Home",to:{name:"index"},icon:{icon:"tabler-smart-home"},permission:"read-dashboard"},{title:"Banners",to:{name:"banners"},icon:{icon:"game-icons:vertical-banner"},permission:"read-banner"},{title:"Orders",to:{name:"orders"},icon:{icon:"solar:delivery-broken"},permission:"read-order"},{title:"Categories",to:{name:"categories"},icon:{icon:"carbon:categories"},permission:"read-category"},{title:"Sub_Category",to:{name:"sub-category"},icon:{icon:"carbon:category-new-each"},permission:"read-sub-category"},{title:"Products",to:{name:"products"},icon:{icon:"streamline:shopping-bag-hand-bag-1-shopping-bag-purse-goods-item-products"},permission:"read-product"},{title:"\u0627\u0644\u0645\u062E\u0632\u0646",icon:{icon:"carbon:store"},permission:"read-dashboard",children:[{title:"\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631",to:{name:"invoices"}},{title:"\u0627\u0644\u0645\u062E\u0632\u0648\u0646",to:{name:"stocks"}},{title:"\u0627\u0644\u0645\u062E\u0632\u0646",to:{name:"stores"}},{title:"\u0627\u0644\u0645\u0648\u0631\u062F\u0648\u0646",to:{name:"suppliers"}},{title:"\u0627\u0644\u062E\u0632\u0646",to:{name:"safes"}},{title:"\u0627\u0644\u0628\u0646\u0648\u0643",to:{name:"banks"}}],permission:"read-permission"},{title:"Coupons",to:{name:"coupons"},icon:{icon:"bxs:coupon"},permission:"read-discount"},{title:"Countries",to:{name:"countries"},icon:{icon:"material-symbols:globe"},permission:"read-country"},{title:"Cities",to:{name:"cities"},icon:{icon:"solar:city-broken"},permission:"read-city"},{title:"Customers",to:{name:"customers"},icon:{icon:"clarity:users-line"},permission:"read-customer"},{title:"Employees",to:{name:"employees"},icon:{icon:"ph:users-four"},permission:"read-user"},{title:"Roles",to:{name:"roles"},icon:{icon:"zondicons:shield"},permission:"read-role"},{title:"Permissions",to:{name:"permissions"},icon:{icon:"zondicons:shield"},permission:"read-permission"},{title:"Settings",icon:{icon:"uil:setting"},children:[{title:"Product_Cut",to:"product-cut"},{title:"Product_Preparation",to:"product-preparation"},{title:"Product_Size",to:"product-size"},{title:"Product_Miced_Meat",to:"product-miced-meat"},{title:"Product_Shalwata",to:"product-shalwata"}],permission:"read-product"},{title:"Activities",to:{name:"activities"},icon:{icon:"octicon:log-24"},permission:"read-dashboard"}],Q=["alt"],U={class:"app-title font-weight-bold leading-normal text-xl"},ye={__name:"DefaultLayoutWithHorizontalNav",setup(p){const{appRouteTransition:r}=R();return(c,d)=>{const s=y("RouterLink"),l=y("RouterView"),_=C;return i(),h(e(J),{"nav-items":e(K)},{navbar:a(()=>[o(s,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:a(()=>[t("img",{width:"45",src:B,alt:e(g).app.title,style:{width:"100px"}},null,8,Q),t("h1",U,I(e(g).app.title),1)]),_:1}),o(W),o(T,{class:"me-2"}),o(H)]),footer:a(()=>[o(E)]),default:a(()=>[o(l,null,{default:a(({Component:n,route:f})=>[o(V,{name:e(r),mode:"out-in"},{default:a(()=>[(i(),h(w(n),{key:f.path}))]),_:2},1032,["name"])]),_:1}),o(_)]),_:1},8,["nav-items"])}}};export{ye as default};
