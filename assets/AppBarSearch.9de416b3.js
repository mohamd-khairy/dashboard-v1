import{ay as P,cj as j,k as g,bf as f,D as A,I as E,o as l,b as y,w as t,p as a,bQ as X,b$ as C,q as r,an as O,ck as I,al as B,ak as u,m as n,am as W,ar as D,c as d,F as b,a as k,ap as z,y as v,n as w,as as $,av as G,aw as H,ag as L,bW as J,bX as Y}from"./index.e64427d3.js";import{d as Z}from"./VTextField.d0ea55f9.js";import{V as ee}from"./VDivider.510e5eac.js";import{V as Q,d as se,a as R,b as te}from"./VList.e1320d57.js";import{V as ae}from"./VDialog.b8fd2272.js";import"./index.30512b5b.js";import"./forwardRefs.74a345f5.js";import"./ssrBoot.4a5d3037.js";import"./VOverlay.f99881ed.js";import"./lazy.05b69fdb.js";const re=m=>(J("data-v-46e59b5d"),m=m(),Y(),m),le={class:"d-flex align-center"},ie={class:"h-100"},oe={class:"text-xs text-disabled text-uppercase"},ne={class:"h-100"},ce={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis h-100"},ue={class:"text-h6 my-3"},de={key:0,class:"mt-8"},pe=re(()=>n("span",{class:"d-flex justify-center text-disabled"},"Try searching for",-1)),he=["onClick"],fe={class:"text-sm"},me={__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean,required:!0},searchQuery:{type:String,required:!0},searchResults:{type:Array,required:!0},suggestions:{type:Array,required:!1},noDataSuggestion:{type:Array,required:!1}},emits:["update:isDialogVisible","update:searchQuery","itemSelected"],setup(m,{emit:T}){const i=m,_=T,{ctrl_k:q,meta_k:F}=j(),x=g(),o=g(structuredClone(f(i.searchQuery))),U=g(),S=g(structuredClone(f(i.isDialogVisible))),p=g(structuredClone(f(i.searchResults)));A(i,()=>{S.value=structuredClone(f(i.isDialogVisible)),p.value=structuredClone(f(i.searchResults)),o.value=structuredClone(f(i.searchQuery))}),A([q,F],()=>{S.value=!0,_("update:isDialogVisible",!0)});const V=()=>{_("update:isDialogVisible",!1),_("update:searchQuery","")};E(()=>{o.value.length||(p.value=[])});const K=e=>{var c,s;e.key==="ArrowDown"?(e.preventDefault(),(c=x.value)==null||c.focus("next")):e.key==="ArrowUp"&&(e.preventDefault(),(s=x.value)==null||s.focus("prev"))},M=e=>{_("update:isDialogVisible",e),_("update:searchQuery","")},N=e=>e==="dashboards"?"Dashboards":e==="appsPages"?"Apps & Pages":e==="userInterface"?"User Interface":e==="formsTables"?"Forms Tables":e==="chartsMisc"?"Charts Misc":"Misc";return(e,c)=>(l(),y(ae,{"max-width":"600","model-value":r(S),height:e.$vuetify.display.smAndUp?"550":"100%",fullscreen:e.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":M,onKeyup:I(V,["esc"])},{default:t(()=>[a(X,{height:"100%",width:"100%",class:"position-relative"},{default:t(()=>[a(C,{class:"pt-1",style:{"max-height":"65px"}},{default:t(()=>[a(Z,{ref_key:"refSearchInput",ref:U,modelValue:r(o),"onUpdate:modelValue":[c[0]||(c[0]=s=>O(o)?o.value=s:null),c[1]||(c[1]=s=>e.$emit("update:searchQuery",r(o)))],autofocus:"",variant:"plain",density:"comfortable",class:"app-bar-autocomplete-box",onKeyup:I(V,["esc"]),onKeydown:K},{"prepend-inner":t(()=>[a(B,{icon:"",variant:"text",color:"default",size:"x-small",class:"text-high-emphasis ms-n1"},{default:t(()=>[a(u,{size:"22",icon:"tabler-search"})]),_:1})]),"append-inner":t(()=>[n("div",le,[n("div",{class:"text-base text-disabled cursor-pointer me-2",onClick:V}," [esc] "),a(B,{icon:"",variant:"text",color:"default",size:"x-small",onClick:V},{default:t(()=>[a(u,{size:"22",icon:"tabler-x"})]),_:1})])]),_:1},8,["modelValue"])]),_:1}),a(ee),a(r(W),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:t(()=>[D(a(r(Q),{ref_key:"refSearchList",ref:x,density:"compact",class:"app-bar-search-list"},{default:t(()=>[(l(!0),d(b,null,k(r(p),s=>(l(),d(b,{key:s.title},["header"in s?(l(),y(r(se),{key:0,class:"text-disabled"},{default:t(()=>[z(v(N(s.title)),1)]),_:2},1024)):w(e.$slots,"searchResult",{key:1,item:s},()=>[a(r(R),{link:"",onClick:h=>e.$emit("itemSelected",s)},{prepend:t(()=>[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"])]),append:t(()=>[a(u,{size:"20",icon:"tabler-corner-down-left",class:"enter-icon text-disabled"})]),default:t(()=>[a(te,null,{default:t(()=>[z(v(s.title),1)]),_:2},1024)]),_:2},1032,["onClick"])],!0)],64))),128))]),_:3},512),[[$,r(o).length&&!!r(p).length]]),D(n("div",ie,[w(e.$slots,"suggestions",{},()=>[a(C,{class:"app-bar-search-suggestions h-100 pa-10"},{default:t(()=>[i.suggestions?(l(),y(G,{key:0,class:"gap-y-4"},{default:t(()=>[(l(!0),d(b,null,k(i.suggestions,s=>(l(),y(H,{key:s.title,cols:"12",sm:"6",class:"ps-6"},{default:t(()=>[n("p",oe,v(s.title),1),a(r(Q),{class:"card-list"},{default:t(()=>[(l(!0),d(b,null,k(s.content,h=>(l(),y(r(R),{key:h.title,link:"",title:h.title,class:"app-bar-search-suggestion",onClick:_e=>e.$emit("itemSelected",h)},{prepend:t(()=>[a(u,{icon:h.icon,size:"20",class:"me-2"},null,8,["icon"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):L("",!0)]),_:1})],!0)],512),[[$,!!r(p)&&!r(o)]]),D(n("div",ne,[w(e.$slots,"noData",{},()=>[a(C,{class:"h-100"},{default:t(()=>[n("div",ce,[a(u,{size:"75",icon:"tabler-file-x"}),n("h6",ue,' No Result For "'+v(r(o))+'" ',1),i.noDataSuggestion?(l(),d("div",de,[pe,(l(!0),d(b,null,k(i.noDataSuggestion,s=>(l(),d("h6",{key:s.title,class:"app-bar-search-suggestion text-sm font-weight-regular cursor-pointer mt-3",onClick:h=>e.$emit("itemSelected",s)},[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"]),n("span",fe,v(s.title),1)],8,he))),128))])):L("",!0)])]),_:1})],!0)],512),[[$,!r(p).length&&r(o).length]])]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen"]))}},we=P(me,[["__scopeId","data-v-46e59b5d"]]);export{we as default};
