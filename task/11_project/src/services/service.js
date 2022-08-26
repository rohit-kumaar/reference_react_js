import axios from "axios";
import jwt_decode from "jwt-decode";
import { API_URL } from "config";
import { ROUTE_PATH } from "routes/publicRoutes";

export const registerUser = (data) => axios.post(`${API_URL}users`, data);

export const loginUser = (data) => axios.post(`${API_URL}auth`, data);

export const isLoggedIn = () => {
  let data = localStorage.getItem("_token");
  if (!data) {
    return false;
  } else {
    return true;
  }
};

export const getToken = () => localStorage.getItem("_token");

export const getUser = () => {
  try {
    return jwt_decode(localStorage.getItem("_token"));
  } catch (e) {
    return null;
  }
};

export const isAdmin = () => (!getUser() ? false : getUser().isAdmin);

export const doLogout = () => {
  localStorage.removeItem("_token");
  window.location = ROUTE_PATH.SignUp;
};
