import{b_ as r,bU as t}from"./index.8696608c.js";const o=r("StoresStore",{actions:{getAll(e){return t.get("stores",{params:e})},getOne(e){return t.get(`stores/${e}`)},store(e){return t.post("stores",e)},update(e){return t.put(`stores/${e.id}`,e)},delete(e){return t.delete(`stores/${e.id}`)}}});export{o as u};
