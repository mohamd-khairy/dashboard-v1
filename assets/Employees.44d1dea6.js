import{b_ as n,bU as s}from"./index.e195cd26.js";const m=n("EmployeesStore",{actions:{fetchEmployees(e){return s.get("users",{params:e})},fetchCustomers(e){return s.get("customers",{params:e})},fetchEmployee(e){return s.get(`/users/${e}`)},storeEmployee(e){const r=new FormData;r.append("username",e.username),r.append("email",e.email),r.append("password",e.password),r.append("avatar",e.avatar),r.append("mobile",e.mobile),r.append("gender",e.gender),r.append("age",e.age),r.append("is_active",e.is_active),r.append("country_code",e.country_code);for(let p=0;p<e.roles.length;p++)r.append(`roles[${p}]`,e.roles[p]);return s.post("users",r)},storeAddress(e){return s.post("customers-address/store",e)},storeCustomer(e){const r=new FormData;return r.append("mobile",e.mobile),r.append("name",e.name),r.append("address",e.address),s.post("customers/store",r)},editEmployee(e){const r=new FormData;return r.append("_method","PUT"),r.append("username",e.username),r.append("email",e.email),e.password!=null&&r.append("password",e.password),e.avatar!={}&&r.append("avatar",e.avatar),r.append("mobile",e.mobile),r.append("gender",e.gender),r.append("age",e.age),r.append("country_code",e.country_code),r.append("is_active",e.is_active),Object.values(e.roles).map((p,o)=>{r.append(`roles[${o}]`,Number.isInteger(p)?p:p.id)}),s.post(`users/${e.id}`,r)},editCustomer(e){const r=new FormData;return r.append("name",e.name),r.append("email",e.email),r.append("mobile",e.mobile),r.append("wallet",e.wallet),s.post(`customers/${e.id}`,r)},deleteEmployee(e){return s.delete(`users/${e.id}`)},deleteCustomer(e){return s.delete(`customers/${e.id}`)}}});export{m as u};
