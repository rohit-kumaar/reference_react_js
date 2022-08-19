import axios from "axios";
import { API_URL } from "./Url";

export function login(data) {
  return axios.post(`${API_URL}adminlogin`, data);
}

export function register(data) {
  return axios.post(`${API_URL}register`, data);
}

export function addProducts(data) {
  return axios.post(`${API_URL}addproducts`, data);
}

export function getAllProducts(data) {
  return axios.get(`${API_URL}getproducts`, data);
}

export function deleteProduct(id) {
  return axios.delete(`${API_URL}delproduct/${id}`);
}
