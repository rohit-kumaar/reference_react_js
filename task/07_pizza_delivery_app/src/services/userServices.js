import axios from 'axios';
const USERS_URL = 'http://localhost:3001/users/';

const getUsers = () => axios.get(USERS_URL);
const getUsersById = (id) => axios.get(`${USERS_URL}${id}`);

const addUser = (data) => axios.post(USERS_URL, data);

export { getUsers, getUsersById, addUser };

