import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/employeesService";
import { useNavigate } from "react-router-dom";

function Employees() {
  const [employeesData, setEmployeesData] = useState([]);
  const navigate = useNavigate();

  // Get all Employees
  useEffect(() => {
    getEmployees().then((res) => setEmployeesData(res.data));
  }, []);

  // Edit Employee
  const editEmployee = (id) => {
    navigate(`/edit-employee/${id}`);
  };

  // Delete Employee
  const deleteEmp = (id) => {
    if (window.confirm("Do you want to remove this employee?")) {
      deleteEmployee(id).then((res) => {
        if (res) {
          alert("Employee  deleted");
          const remainEmployees = employeesData.filter(
            (employee) => employee.id !== id
          );
          setEmployeesData(remainEmployees);
        }
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="cards p-4">
          <div className="row">
            {employeesData?.map((employee) => {
              return (
                <div
                  className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-2"
                  key={employee.id}
                >
                  <div className="card ">
                    <div className="card-body">
                      <h5 className="card-title">
                        Employee : {employee.employee_name}
                      </h5>
                      <p className="card-text">
                        <span>Salary: {employee.employee_salary}</span>
                        <br />
                        <span>Age : {employee.employee_age}</span>
                      </p>
                      <button
                        className="btn btn-primary"
                        onClick={() => editEmployee(employee.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => deleteEmp(employee.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Employees;
