import{b_ as n,bU as t}from"./index.e195cd26.js";const s=n("BanksStore",{actions:{getAll(e){return t.get("banks",{params:e})},getOne(e){return t.get(`banks/${e}`)},store(e){return t.post("banks",e)},update(e){return t.put(`banks/${e.id}`,e)},delete(e){return t.delete(`banks/${e.id}`)}}});export{s as u};
