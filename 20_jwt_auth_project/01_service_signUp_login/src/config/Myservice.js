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

export {
  registerUser,
  loginUser,
  isLoggedIn,
  getToken,
  getUser,
  isAdmin,
  doLogout,
};
