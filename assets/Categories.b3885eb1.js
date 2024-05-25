import{b_ as n,bU as p}from"./index.e64427d3.js";const a=n("CategoriesStore",{actions:{fetchCategories(e){return p.get("categories",{params:e})},fetchSubCategories(e){return p.get("sub-categories",{params:e})},fetchCategory(e){return p.get(`/categories/${e}`)},fetchSubCategory(e){return p.get(`/sub-categories/${e}`)},fetchSubCategoryByCategory(e){return p.get(`/sub-categories/by-category-id/${e}`)},storeCategory(e){const t=new FormData;let r=" ";return Object.values(e.city_ids).map(o=>{r=r+","+o}),t.append("type_ar",e.type_ar),t.append("type_en",e.type_en),t.append("description",e.description),t.append("backgroundColor",e.backgroundColor),t.append("color",e.color),t.append("city_ids",r.split(" ,")[1]),t.append("image",e.image[0]),p.post("/categories/add-category",t)},storeSubCategory(e){const t=new FormData;let r=" ";return Object.values(e.city_ids).map(o=>{r=r+","+o}),t.append("type_ar",e.type_ar),t.append("type_en",e.type_en),t.append("description",e.description),t.append("category_id",e.category_id),t.append("city_ids",r.split(" ,")[1]),p.post("/sub-categories/add-sub-category",t)},editSubCategory(e){const t=new FormData;console.log("Sub => ",e);let r=" ";return Object.values(e.city_ids).map(o=>{typeof o=="object"?r=r.length==0?`${o.id}`:r+","+o.id:r=r.length==0?`${o}`:r+","+o}),t.append("type_ar",e.type_ar),t.append("type_en",e.type_en),t.append("description",e.description),t.append("category_id",e.category_id),t.append("city_ids",r.split(" ,")[1]),p.post(`/sub-categories/update-sub-category/${e.id}`,t)},editCategory(e){var o;const t=new FormData;let r=" ";return Object.values(e.city_ids).map(i=>{typeof i=="object"?r=r.length==0?`${i.id}`:r+","+i.id:r=r.length==0?`${i}`:r+","+i}),t.append("type_ar",e.type_ar),t.append("type_en",e.type_en),t.append("description",e.description),t.append("backgroundColor",e.backgroundColor),t.append("color",e.color),t.append("city_ids",r.split(" ,")[1]),e.image!=={}&&e.image!==void 0&&t.append("image",(o=e.image[0])!=null?o:{}),p.post(`/categories/update-category/${e.id}`,t)},deleteCategory(e){return p.delete(`/categories/delete-category/${e.id}`)},deleteSubCategory(e){return p.delete(`/sub-categories/delete-sub-category/${e.id}`)}}});export{a as u};
