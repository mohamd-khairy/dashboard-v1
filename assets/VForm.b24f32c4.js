import{K as p,M as v,U as b,k as F,a7 as V,p as y}from"./index.8696608c.js";import{e as h,f as R}from"./VTextField.5650c267.js";import{f as k}from"./forwardRefs.74a345f5.js";const P=p({...v(),...h()},"VForm"),g=b()({name:"VForm",props:P(),emits:{"update:modelValue":a=>!0,submit:a=>!0},setup(a,f){let{slots:n,emit:i}=f;const r=R(a),s=F();function l(t){t.preventDefault(),r.reset()}function u(t){const o=t,e=r.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),i("submit",o),o.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),o.preventDefault()}return V(()=>{var t;return y("form",{ref:s,class:["v-form",a.class],style:a.style,novalidate:!0,onReset:l,onSubmit:u},[(t=n.default)==null?void 0:t.call(n,r)])}),k(r,s)}});export{g as V};
