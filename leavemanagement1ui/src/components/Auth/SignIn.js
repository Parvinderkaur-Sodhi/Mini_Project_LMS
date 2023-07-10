import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../../services/EmployeeService';

const SignIn = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { email, password } = loginData;
  
    if (email === 'admin@gmail.com' && password === 'admin') {
      localStorage.setItem('employeeId', 'admin'); // Set a unique identifier for the admin user
      navigate('/admin');
      setError('');
    } else {
      EmployeeService.getAllEmployees()
        .then((response) => {
          const employees = response.data;
          const matchedEmployee = employees.find((employee) => employee.email === email);
          if (matchedEmployee) {
            const decodedPassword = atob(matchedEmployee.password);
            if (decodedPassword === password) {
              localStorage.setItem('employeeId', matchedEmployee.employeeId);
              navigate('/user');
            } else {
              setError('Invalid credentials');
            }
          } else {
            setError('Invalid credentials');
          }
        })
        .catch((error) => {
          console.error(error);
          setError('An error occurred. Please try again.');
        });
    }
  };  

  return (
    <div className="container" style={{ padding: '160px 200px' }}>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Sign In</h2>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={loginData.email}
                onChange={handleInputChange}
                autoComplete="off" // Disable autocomplete for email input
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={loginData.password}
                onChange={handleInputChange}
              />
            </div>
            <br></br>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </form>
          <p className="mt-3">
            New employee? <Link to="/signup">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
