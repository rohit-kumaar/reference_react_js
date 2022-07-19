import axios from "axios";
const PRODUCT_URL = "http://localhost:3001/products/";

const getProducts = () => axios.get(PRODUCT_URL);
const getProductsById = (id) => axios.get(`${PRODUCT_URL}${id}`);

const addProducts = (data) => axios.post(PRODUCT_URL, data);

const updateProducts = (id, data) => axios.put(`${PRODUCT_URL}${id}`, data);

const deleteProducts = (id) => axios.delete(`${PRODUCT_URL}${id}`);

export {
  getProducts,
  getProductsById,
  addProducts,
  updateProducts,
  deleteProducts,
};
