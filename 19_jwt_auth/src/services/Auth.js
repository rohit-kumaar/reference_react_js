import axios from "axios";
import jwt_decode from 'jwt-decode'
const API_URL="http://localhost:3001/api/v1/";
function loginUser(data){
    return axios.post(`${API_URL}auth`,data);
}
function isLoggedIn(){
    const data=localStorage.getItem("_token");
    if(!data){
        return false;
    }
    else {
        return true;
    }
}
function getToken(){
    return localStorage.getItem("_token")
}
function getUser(){
    try{
    return jwt_decode(localStorage.getItem("_token"));
    }
    catch(e){
        return null;
    }
}
function isAdmin(){
    return !getUser()?false:getUser().isAdmin;
}
export {isLoggedIn,loginUser,getToken,getUser,isAdmin}