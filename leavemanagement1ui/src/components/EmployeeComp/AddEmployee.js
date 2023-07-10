import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    department: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        setEmployee({
          name: "",
          email: "",
          phoneNumber: "",
          department: "",
          username: "",
          password: "",
        });
        navigate("/admin/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = () => {
    setEmployee({
      name: "",
      email: "",
      phoneNumber: "",
      department: "",
      username: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <h1 className="mb-4">Add New Employee</h1>
      <hr></hr>
      <br></br>
      <form onSubmit={saveEmployee}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={employee.phoneNumber}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Department</label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            value={employee.username}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={employee.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary mr-2">
            Save
          </button>
          <button type="button" onClick={reset} className="btn btn-secondary">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
