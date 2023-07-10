import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import EmployeeService from '../../services/EmployeeService';

const SignUp = () => {
  const [signupData, setSignupData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    department: '',
  });
  const [error, setError] = useState('');
  const [emailExists, setEmailExists] = useState(false);
  const [usernameExists, setUsernameExists] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handleInputChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleEmailBlur = (e) => {
    const { value } = e.target;
    if (value.trim() !== '') {
      EmployeeService.getAllEmployees()
        .then((response) => {
          const employees = response.data;
          const emailExists = employees.some((employee) => employee.email === value);
          setEmailExists(emailExists);
        })
        .catch((error) => {
          console.error(error);
          setError('An error occurred. Please try again.');
        });
    }
  };

  const handleUsernameBlur = (e) => {
    const { value } = e.target;
    if (value.trim() !== '') {
      EmployeeService.getAllEmployees()
        .then((response) => {
          const employees = response.data;
          const usernameExists = employees.some((employee) => employee.username === value);
          setUsernameExists(usernameExists);
        })
        .catch((error) => {
          console.error(error);
          setError('An error occurred. Please try again.');
        });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    if (value.trim() !== '') {
      if (!validateEmail(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    } else {
      setEmailError('');
    }
    setSignupData({ ...signupData, email: value });
  };

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    if (value.trim() !== '') {
      if (!validatePhoneNumber(value)) {
        setPhoneNumberError('Please enter a 10-digit phone number');
      } else {
        setPhoneNumberError('');
      }
    } else {
      setPhoneNumberError('');
    }
    setSignupData({ ...signupData, phoneNumber: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const encodedPassword = btoa(signupData.password); // Encode the password
    const newEmployee = {
      ...signupData,
      password: encodedPassword,
    };

    EmployeeService.saveEmployee(newEmployee)
      .then((response) => {
        // Handle successful signup
        console.log(response.data);
        setError('');
        // Reset the signup form
        setSignupData({
          name: '',
          username: '',
          email: '',
          password: '',
          phoneNumber: '',
          department: '',
        });
        alert('User successfully signed up!');
      })
      .catch((error) => {
        // Handle signup error
        if (error.response && error.response.data) {
          console.error(error.response.data);
          setError(error.response.data);
        } else {
          console.error(error);
          setError('An error occurred. Please try again.');
        }
      });
  };

  return (
    <div style={{ backgroundImage: `url(${require("./Auth1.jpg")})`, padding: '40px 180px', backgroundSize: "cover", }}>
    <div className="container" style={{ padding: '40px 120px' }}>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title justify-center">Sign Up</h2>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={signupData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={signupData.username}
                onChange={handleInputChange}
                onBlur={handleUsernameBlur}
                required
              />
              {usernameExists && <div className="text-danger">Username already exists. Please choose a different username.</div>}
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={signupData.email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                required
              />
              {emailError && <div className="text-danger">{emailError}</div>}
              {emailExists && !emailError && <div className="text-danger">Email already exists. Please use a different email address.</div>}
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={signupData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                className="form-control"
                value={signupData.phoneNumber}
                onChange={handlePhoneNumberChange}
                required
              />
              {phoneNumberError && <div className="text-danger">{phoneNumberError}</div>}
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input
                type="text"
                name="department"
                className="form-control"
                value={signupData.department}
                onChange={handleInputChange}
                required
              />
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
          <p className="mt-3">
            Already have an account? <Link to="/">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
