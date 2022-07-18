import axios from "axios";
const PRO_URL="http://localhost:3001/products/";
function getProducts(){
    return axios.get(PRO_URL);
}
function getProductById(id){
    return axios.get(`${PRO_URL}${id}`)
}
function addProduct(data){
    return axios.post(PRO_URL,data)
}
function delProduct(id){
    return axios.delete(`${PRO_URL}${id}`)
}
function updateProduct(id,data){
    return axios.put(`${PRO_URL}${id}`,data)
}
export {getProducts,getProductById,addProduct,delProduct,updateProduct}