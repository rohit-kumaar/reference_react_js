import { getEmployees, deleteEmployee } from "../services/employeesService";
import { useEffect, useState } from "react";
import { context } from "./context";

export const EmployeeState = (props) => {
  const [employeesData, setEmployeesData] = useState([]);

  // Read Employees
  useEffect(() => {
    getEmployees().then((res) => setEmployeesData(res.data));
  }, []);

  // Delete Employee
  const deleteEmp = (id) => {
    if (window.confirm("Do you want to remove this employee?")) {
      deleteEmployee(id).then((res) => {
        if (res) {
          alert("Employee  deleted");
          setEmployeesData(
            employeesData.filter((employee) => employee.id !== id)
          );
        }
      });
    }
  };

  return (
    <context.Provider value={{ employeesData, deleteEmp }}>
      {props.children}
    </context.Provider>
  );
};
