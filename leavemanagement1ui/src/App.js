import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/EmployeeComp/AddEmployee';
import EmployeeList from './components/EmployeeComp/EmployeeList';
import UpdateEmployee from './components/EmployeeComp/UpdateEmployee';

import LeaveRequestList from './components/LeaveRequestComp/LeaveRequestList';

import LeaveTypeList from './components/TypeComp/LeaveTypeList';
import AddLeaveType from './components/TypeComp/AddLeaveType';
import UpdateLeaveType from './components/TypeComp/UpdateLeaveType';
import LeaveBalanceList from './components/LeaveBalanceComp/LeaveBalanceList';

import LeaveRequestListUser from './components/LeaveRequestCompUser/LeaveRequestListUser';
import LeaveBalanceListUser from './components/LeaveBalanceComp/LeaveBalanceListUser';
import AddLeaveRequestUser from './components/LeaveRequestCompUser/AddLeaveRequestUser';
import LeaveTypeListUsers from './components/TypeComp/LeaveTypeListUsers';
import UpdateLeaveRequestUser from './components/LeaveRequestCompUser/UpdateLeaveRequestUser';

import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
//import Home from './components/Home';
import AdminHome from './components/AdminHome.js';
import UserHome from './components/UserHome.js';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminHome />}>
          <Route path="employeeList" element={<EmployeeList />} />
          <Route path="addEmployee" element={<AddEmployee />} />
          <Route path="editEmployee/:id" element={<UpdateEmployee />} />
          <Route path="leaveRequestList" element={<LeaveRequestList />} />
          <Route path="leaveTypeList" element={<LeaveTypeList />} />
          <Route path="addLeaveType" element={<AddLeaveType />} />
          <Route path="editLeaveType/:leaveTypeId" element={<UpdateLeaveType />} />
          <Route path="leaveBalanceList" element={<LeaveBalanceList />} />
        </Route>

        <Route path="/user" element={<UserHome />}>
          <Route path="/user/leaveTypeListUsers" element={<LeaveTypeListUsers />} />
          <Route path="/user/leaveRequestListUser" element={<LeaveRequestListUser employeeId={localStorage.getItem('employeeId')} />} />
          <Route path="/user/applyLeave" element={<AddLeaveRequestUser employeeId={localStorage.getItem('employeeId')} />} />
          <Route path="/user/leaveBalanceListUser" element={<LeaveBalanceListUser employeeId={localStorage.getItem('employeeId')} />} />
          <Route path="/user/editLeaveRequestUser/:requestId" element={<UpdateLeaveRequestUser employeeId={localStorage.getItem('employeeId')} />} />
        </Route>

        {/* <Route path="/user" element={<UserHome />}>
        <Route path="leaveTypeListUsers" element={<LeaveTypeListUsers />} />
        <Route path="leaveRequestListUser" element={<LeaveRequestListUser employeeId={4} />} />
        <Route path="applyLeave" element={<AddLeaveRequestUser employeeId={4} />} />
        <Route path="leaveBalanceListUser" element={<LeaveBalanceListUser employeeId={4} />} />
        <Route path="editLeaveRequestUser/:requestId" element={<UpdateLeaveRequestUser employeeId={4}/>} />
      </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
