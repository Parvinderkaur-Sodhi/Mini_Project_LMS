// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import EmployeeService from "../../services/EmployeeService";

// const AddEmployee = () => {
//   const [employee, setEmployee] = useState({
//     name: "",
//     email: "",
//     phoneNumber: "",
//     department: "",
//     username: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   // const handleChange = (e) => {
//   //   const value = e.target.value;
//   //   const name = e.target.name;
//   //   setEmployee({ ...employee, [name]: value });
//   // };

//   const [errors, setErrors] = useState({
//     email: "",
//     phoneNumber: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
//     validateField(name, value);
//   };

//   const validateField = (fieldName, value) => {
//     let errorMessage = "";

//     if (fieldName === "email") {
//       if (value !== "" && !validateEmail(value)) {
//         errorMessage = "Please enter a valid email address";
//       }
//     } else if (fieldName === "phoneNumber") {
//       if (value !== "" && !validatePhoneNumber(value)) {
//         errorMessage = "Please enter a 10-digit phone number";
//       }
//     }

//     setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: errorMessage }));
//   };

//   const validateEmail = (email) => {
//     // Regular expression for email format validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePhoneNumber = (phoneNumber) => {
//     // Regular expression for 10-digit phone number format validation
//     const phoneRegex = /^\d{10}$/;
//     return phoneRegex.test(phoneNumber);
//   };

//   const saveEmployee = (e) => {
//     e.preventDefault();
//     const encodedPassword = btoa(employee.password); // Encode the password
//     const mployee = {
//       ...employee,
//       password: encodedPassword
//     };
//     EmployeeService.saveEmployee(employee)
//       .then((response) => {
//         console.log(response);
//         setEmployee({
//           name: "",
//           email: "",
//           phoneNumber: "",
//           department: "",
//           username: "",
//           password: "",
//         });
//         navigate("/admin/employeeList");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const reset = () => {
//     setEmployee({
//       name: "",
//       email: "",
//       phoneNumber: "",
//       department: "",
//       username: "",
//       password: "",
//     });
//     setErrors({ email: "", phoneNumber: "" });
//   };

//   return (
//     <div className="container">
//       <h1 className="mb-4">Add New Employee</h1>
//       <hr />
//       <br />
//       <form onSubmit={saveEmployee}>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={employee.name}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={employee.email}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//           {errors.email && <p className="error-message">{errors.email}</p>}
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Phone Number</label>
//           <input
//             type="text"
//             name="phoneNumber"
//             value={employee.phoneNumber}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//           {errors.phoneNumber && (
//             <p className="error-message">{errors.phoneNumber}</p>
//           )}
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Department</label>
//           <input
//             type="text"
//             name="department"
//             value={employee.department}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Username</label>
//           <input
//             type="text"
//             name="username"
//             value={employee.username}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={employee.password}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <button type="submit" className="btn btn-primary mr-2">
//             Save
//           </button>
//           <button type="button" onClick={reset} className="btn btn-secondary">
//             Clear
//           </button>
//         </div>
//       </form>
//     </div>
//     // <div className="container">
//     //   <h1 className="mb-4">Add New Employee</h1>
//     //   <hr></hr>
//     //   <br></br>
//     //   <form onSubmit={saveEmployee}>
//     //     <div className="mb-3">
//     //       <label className="form-label">Name</label>
//     //       <input
//     //         type="text"
//     //         name="name"
//     //         value={employee.name}
//     //         onChange={handleChange}
//     //         className="form-control"
//     //         required
//     //       />
//     //     </div>
//     //     <div className="mb-3">
//     //       <label className="form-label">Email</label>
//     //       <input
//     //         type="email"
//     //         name="email"
//     //         value={employee.email}
//     //         onChange={handleChange}
//     //         className="form-control"
//     //         required
//     //       />
//     //     </div>
//     //     <div className="mb-3">
//     //       <label className="form-label">Phone Number</label>
//     //       <input
//     //         type="text"
//     //         name="phoneNumber"
//     //         value={employee.phoneNumber}
//     //         onChange={handleChange}
//     //         className="form-control"
//     //         required
//     //       />
//     //     </div>
//     //     <div className="mb-3">
//     //       <label className="form-label">Department</label>
//     //       <input
//     //         type="text"
//     //         name="department"
//     //         value={employee.department}
//     //         onChange={handleChange}
//     //         className="form-control"
//     //         required
//     //       />
//     //     </div>
//     //     <div className="mb-3">
//     //       <label className="form-label">Username</label>
//     //       <input
//     //         type="text"
//     //         name="username"
//     //         value={employee.username}
//     //         onChange={handleChange}
//     //         className="form-control"
//     //         required
//     //       />
//     //     </div>
//     //     <div className="mb-3">
//     //       <label className="form-label">Password</label>
//     //       <input
//     //         type="password"
//     //         name="password"
//     //         value={employee.password}
//     //         onChange={handleChange}
//     //         className="form-control"
//     //         required
//     //       />
//     //     </div>
//     //     <div className="mb-3">
//     //       <button type="submit" className="btn btn-primary mr-2">
//     //         Save
//     //       </button>
//     //       <button type="button" onClick={reset} className="btn btn-secondary">
//     //         Clear
//     //       </button>
//     //     </div>
//     //   </form>
//     // </div>
//   );
// };

// export default AddEmployee;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../../services/EmployeeService';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    department: '',
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    phoneNumber: '',
    username: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    checkUniqueEmail(employee.email);
    checkUniqueUsername(employee.username);
  }, [employee.email, employee.username]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const validateField = (fieldName, value) => {
    let errorMessage = '';

    if (fieldName === 'email') {
      if (value !== '' && !validateEmail(value)) {
        errorMessage = 'Please enter a valid email address';
      }
    } else if (fieldName === 'phoneNumber') {
      if (value !== '' && !validatePhoneNumber(value)) {
        errorMessage = 'Please enter a 10-digit phone number';
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: errorMessage }));

    return errorMessage;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const checkUniqueEmail = (email) => {
    if (email !== '') {
      EmployeeService.getAllEmployees()
        .then((response) => {
          const employees = response.data;
          const emailExists = employees.some(
            (emp) => emp.email.toLowerCase() === email.toLowerCase()
          );
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: emailExists ? 'Email already exists' : '',
          }));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const checkUniqueUsername = (username) => {
    if (username !== '') {
      EmployeeService.getAllEmployees()
        .then((response) => {
          const employees = response.data;
          const usernameExists = employees.some(
            (emp) => emp.username.toLowerCase() === username.toLowerCase()
          );
          setErrors((prevErrors) => ({
            ...prevErrors,
            username: usernameExists ? 'Username already exists' : '',
          }));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    const encodedPassword = btoa(employee.password); // Encode the password
    const newEmployee = {
      ...employee,
      password: encodedPassword,
    };
    EmployeeService.saveEmployee(newEmployee)
      .then((response) => {
        console.log(response);
        setEmployee({
          name: '',
          email: '',
          phoneNumber: '',
          department: '',
          username: '',
          password: '',
        });
        navigate('/admin/employeeList');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = () => {
    setEmployee({
      name: '',
      email: '',
      phoneNumber: '',
      department: '',
      username: '',
      password: '',
    });
    setErrors({ email: '', phoneNumber: '', username: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, phoneNumber, username } = employee;
    const emailError = validateField('email', email);
    const phoneNumberError = validateField('phoneNumber', phoneNumber);
    const usernameError = validateField('username', username);

    if (emailError || phoneNumberError || usernameError) {
      return;
    }

    saveEmployee(e);
  };

  return (
<div className="container">
      <h1 className="mb-4">Add New Employee</h1>
      <hr />
      <br />
      <form onSubmit={handleSubmit}>
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
            onBlur={(e) => validateField('email', e.target.value)}
            className="form-control"
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={employee.phoneNumber}
            onChange={handleChange}
            onBlur={(e) => validateField('phoneNumber', e.target.value)}
            className="form-control"
            required
          />
          {errors.phoneNumber && (
            <p className="error-message">{errors.phoneNumber}</p>
          )}
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
            onBlur={(e) => validateField('username', e.target.value)}
            className="form-control"
            required
          />
          {errors.username && (
            <p className="error-message">{errors.username}</p>
          )}
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

