import{b_ as i,bU as e}from"./index.8d01543a.js";const r=i("CitiesStore",{actions:{fetchCities(t){return e.get("cities",{params:t})},fetchCitiesByCountry(t){return e.get(`cities/get-city-ByCountry/${t}`)},fetchCity(t){return e.get(`/cities/${t}`)},storeCity(t){return e.post("cities/add-cities",t)},editCity(t){return e.post(`cities/update-cities/${t.id}`,t)},deleteCity(t){return e.post(`cities/delete-city/${t.id}`)}}});export{r as u};
