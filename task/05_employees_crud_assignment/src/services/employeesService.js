import axios from "axios";
const EMPLOYEES_URL = "http://localhost:3001/employees/";

const getEmployees = () => axios.get(EMPLOYEES_URL);
const getEmployeesById = (id) => axios.get(`${EMPLOYEES_URL}${id}`);

const addEmployees = (data) => axios.post(EMPLOYEES_URL, data);

const updateEmployee = (id, data) => axios.put(`${EMPLOYEES_URL}${id}`, data);

const deleteEmployee = (id) => axios.delete(`${EMPLOYEES_URL}${id}`);

export {
  getEmployees,
  getEmployeesById,
  addEmployees,
  updateEmployee,
  deleteEmployee,
};
