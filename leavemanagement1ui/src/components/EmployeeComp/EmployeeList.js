import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import "../commonCss.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [employeeNameFilter, setEmployeeNameFilter] = useState("");
  const [employeeIdFilter, setEmployeeIdFilter] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        console.log(response.data);
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId)
      .then(() => {
        fetchEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const applyFilters = () => {
    let filteredEmployees = employees;
    if (employeeNameFilter) {
      filteredEmployees = filteredEmployees.filter(
        (employee) => employee.name.toLowerCase().includes(employeeNameFilter.toLowerCase())
      );
    }
    if (employeeIdFilter) {
      filteredEmployees = filteredEmployees.filter(
        (employee) => employee.employeeId.toString() === employeeIdFilter
      );
    }
    return filteredEmployees;
  };
  

  return (
    <div className="container">
      <h1 className="mb-4">Employee List</h1>
      <hr />
      <br />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="form-group col-md-4">
          <input
            type="text"
            value={employeeNameFilter}
            onChange={(e) => setEmployeeNameFilter(e.target.value)}
            className="form-control"
            placeholder="Employee Name Filter"
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="text"
            value={employeeIdFilter}
            onChange={(e) => setEmployeeIdFilter(e.target.value)}
            className="form-control"
            placeholder="Employee ID Filter"
          />
        </div>
        <div>
          <Link to="/admin" className="btn btn-success">
            Home
          </Link>
          &nbsp;&nbsp;
          <Link to="/admin/addEmployee" className="btn btn-success">
            Add Employee
          </Link>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Department</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applyFilters().map((employee) => (
            <tr key={employee.employeeId}>
              <td>{employee.employeeId}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.department}</td>
              <td>{employee.username}</td>
              <td>
                <Link
                  to={`/admin/editEmployee/${employee.employeeId}`}
                  className="btn btn-primary mr-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteEmployee(employee.employeeId)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
