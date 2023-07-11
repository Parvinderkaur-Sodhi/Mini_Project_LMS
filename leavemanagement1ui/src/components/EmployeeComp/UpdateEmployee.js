import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    console.log("Employee ID:", id);
    fetchEmployee();
  }, []);

  const fetchEmployee = () => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        const { name, department, email, phoneNumber, username, password } = response.data;
        setEmployee({ name, department, email, phoneNumber, username, password });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const updateEmployee = (e) => {
    console.log("Update button clicked");
    e.preventDefault();
    const { name, department, email, phoneNumber, username, password } = employee;
    const updatedEmployee = { name, department, email, phoneNumber, username, password };
    EmployeeService.updateEmployee(id, updatedEmployee)
      .then((response) => {
        console.log(response);
        navigate("/admin/employeeList"); // Update the navigation path to the correct URL
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1 className="mb-4">Update Employee</h1>
      <hr></hr>
      <br></br>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            className="form-control"
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
            disabled // Disable the email field
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
            disabled // Disable the username field
          />
        </div>
        <div className="mb-3">
          <button onClick={updateEmployee} className="btn btn-primary mr-2">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmployee;
