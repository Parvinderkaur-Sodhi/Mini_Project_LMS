import React, { useState } from "react";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import EmployeeList from "./EmployeeComp/EmployeeList";
import AddEmployee from "./EmployeeComp/AddEmployee";
import UpdateEmployee from "./EmployeeComp/UpdateEmployee";
import LeaveRequestList from "./LeaveRequestComp/LeaveRequestList";
import LeaveTypeList from "./TypeComp/LeaveTypeList";
import AddLeaveType from "./TypeComp/AddLeaveType";
import UpdateLeaveType from "./TypeComp/UpdateLeaveType";
import LeaveBalanceList from "./LeaveBalanceComp/LeaveBalanceList";

const AdminHome = () => {
  const logoStyle = {
    marginLeft: "20px",
    width: "40px",
  };

  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  
  // State variable to track admin login status
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(true); // Set the initial value based on login status
  
  // Logout function
  const handleLogout = () => {
    setIsAdminLoggedIn(false); // Set admin login status to false
    navigate('/');
  };

  // Redirect to sign-in page if admin is not logged in
  if (!isAdminLoggedIn) {
    navigate('/'); // Redirect to sign-in page
    return null; // Render nothing until the redirect takes place
  }

  return (
    <div style={{ backgroundImage: `url(${require("./lms.jpg")})`, backgroundSize: "cover", minHeight: "96vh" }}>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark" style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}>
        <Link className="navbar-brand" to="/">
          <img src={require("./My.png")} alt="logo" style={logoStyle} />
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={`nav-link ${path === "/admin/employeelist" ? "active" : ""}`} to="/admin/employeelist">
              Employees
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${path === "/admin/leaverequestlist" ? "active" : ""}`} to="/admin/leaverequestlist">
              Leave Requests
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${path === "/admin/leavetypelist" ? "active" : ""}`} to="/admin/leavetypelist">
              Leave Types
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${path === "/admin/leavebalancelist" ? "active" : ""}`} to="/admin/leavebalancelist">
              Leave Balance
            </Link>
          </li>
          <ul className="justify-end">
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1 className="mt-4">Welcome, to Manager Home (Admin)!</h1>} />
        <Route path="/employeelist" element={<EmployeeList />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/editemployee/:id" element={<UpdateEmployee />} />
        <Route path="/leaverequestlist" element={<LeaveRequestList />} />
        <Route path="/leavetypelist" element={<LeaveTypeList />} />
        <Route path="/addleavetype" element={<AddLeaveType />} />
        <Route path="/editleavetype/:leaveTypeId" element={<UpdateLeaveType />} />
        <Route path="/leavebalancelist" element={<LeaveBalanceList />} />
      </Routes>
    </div>
  );
};

export default AdminHome;
