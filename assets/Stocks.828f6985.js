import{b_ as s,bU as e}from"./index.8d01543a.js";const o=s("StocksStore",{actions:{getAll(t){return e.get("stocks",{params:t})},getOne(t){return e.get(`stocks/${t}`)},store(t){return e.post("stocks",t)},update(t){return e.post(`stocks/${t.id}`,t)},transferStock(t){return e.post("transfer-stock",t)},transferQuantity(t){return e.post("transfer-quantity",t)},delete(t){return e.delete(`stocks/${t.id}`)}}});export{o as u};
