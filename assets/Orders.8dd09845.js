import{b_ as t,bU as e}from"./index.8d01543a.js";const d=t("OrdersStore",{actions:{exportOrderProducts(r){return e.get("orders/export-order-products",{params:r})},fetchOrders(r){return e.get("orders/get-order",{params:r})},fetchOrderStatus(){return e.get("order-status")},fetchAllOrderStatus(){return e.get("all-order-status")},storeOrder(r){return e.post("orders/create-order",r)},fetchOrder(r){return e.get(`/orders/get-one-order/${r}`)},removeDiscount(r){return e.get(`/orders/remove-discount/${r}`)},editOrder(r){return e.post("/orders/edit-order",r)},editOrderProduct(r){return e.post("/orders/edit-order-product",r)},deleteOrderProduct(r){return e.post("orders/delete-order-product",r)},assignOrderDeligation(r){return e.post("orders/assign-user-order",r)},takeOrder(r){return e.get(`orders/take-order/${r}`)}}});export{d as u};
