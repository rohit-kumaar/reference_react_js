import { API_URL } from "./Url";
import axios from "axios";
import jwt_decode from "jwt-decode";

function registerUser(data) {
  return axios.post(`${API_URL}users`, data);
}
function loginUser(data) {
  return axios.post(`${API_URL}auth`, data);
}
function isLoggedIn() {
  let data = localStorage.getItem("_token");
  if (!data) {
    return false;
  } else {
    return true;
  }
}
function getToken() {
  return localStorage.getItem("_token");
}
function getUser() {
  try {
    return jwt_decode(localStorage.getItem("_token"));
  } catch (e) {
    return null;
  }
}
function isAdmin() {
  return !getUser() ? false : getUser().isAdmin;
}
function doLogout() {
  localStorage.removeItem("_token");
  window.location = "/";
}
function postAddProduct(data) {
  return axios.post(`${API_URL}products`, data);
}
function getAllProducts() {
  return axios.get(`${API_URL}products`);
}
function delproduct(id) {
  return axios.delete(`${API_URL}products/${id}`);
}

export {
  registerUser,
  loginUser,
  isLoggedIn,
  getToken,
  getUser,
  isAdmin,
  doLogout,
  postAddProduct,
  getAllProducts,
  delproduct,
};
