import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { performRequest } from "../../helpers/axios";

export default function EmployeesList() {
  const [employees, setEmployees] = useState([]);

  useEffect(function () {
    const success = (response) => setEmployees(response.data);
    const fail = (error) => console.log(error);
    performRequest("GET", "employees", success, fail);
  }, []);

  return (
    <div className="col-md-8">
      <div className="card">
        <div className="card-header">
          Employees List
          <span style={{ float: "right" }}>
              <Link to={'/auth/employees/create'}>Create</Link>
          </span>
        </div>

        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Salary</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee.id}>
                  <th scope="row">{employee.id}</th>
                  <td>{employee.name}</td>
                  <td>{employee.salary}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
