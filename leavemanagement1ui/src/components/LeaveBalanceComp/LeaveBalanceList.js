import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LeaveBalanceService from "../../services/LeaveBalanceService";
import EmployeeService from "../../services/EmployeeService";
import LeaveTypeService from "../../services/LeaveTypeService";
import "../commonCss.css";

const LeaveBalanceList = () => {
  const [leaveBalances, setLeaveBalances] = useState([]);
  const [employees, setEmployees] = useState({});
  const [leaveTypes, setLeaveTypes] = useState({});
  const [employeeNameFilter, setEmployeeNameFilter] = useState("");
  const [typeNameFilter, setTypeNameFilter] = useState("");

  useEffect(() => {
    fetchLeaveBalances();
    fetchEmployees();
    fetchLeaveTypes();
  }, []);

  const fetchLeaveBalances = () => {
    LeaveBalanceService.getAllLeaveBalances()
      .then((response) => {
        console.log(response.data);
        setLeaveBalances(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        const employeeMap = {};
        response.data.forEach((employee) => {
          employeeMap[employee.employeeId] = employee.name;
        });
        setEmployees(employeeMap);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchLeaveTypes = () => {
    LeaveTypeService.getAllLeaveTypes()
      .then((response) => {
        const leaveTypeMap = {};
        response.data.forEach((leaveType) => {
          leaveTypeMap[leaveType.typeId] = leaveType.typeName;
        });
        setLeaveTypes(leaveTypeMap);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const applyFilters = () => {
    let filteredBalances = leaveBalances;
    if (employeeNameFilter) {
      filteredBalances = filteredBalances.filter(
        (balance) => balance.employee.name.toLowerCase().includes(employeeNameFilter.toLowerCase())
      );
    }
    if (typeNameFilter) {
      filteredBalances = filteredBalances.filter(
        (balance) => balance.leaveType.typeName.toLowerCase().includes(typeNameFilter.toLowerCase())
      );
    }
    return filteredBalances;
  };

  return (
    <div className="container">
      <h1 className="mb-4">Leave Balance List</h1>
      <hr></hr><br></br>
      <div className="d-flex justify-content-end">
      <Link to="/admin" className="btn btn-success">
          Home
      </Link>
      </div>
      <br></br>
      <div className="row mb-3">
      <h6>Apply Filters:</h6>
        <div className="col">
          <input
            type="text"
            value={employeeNameFilter}
            onChange={(e) => setEmployeeNameFilter(e.target.value)}
            className="form-control"
            placeholder="Employee Name Filter"
          />
        </div>
        <div className="col">
          <input
            type="text"
            value={typeNameFilter}
            onChange={(e) => setTypeNameFilter(e.target.value)}
            className="form-control"
            placeholder="Leave Type Filter"
          />
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Balance ID</th>
            <th>Employee</th>
            <th>Leave Type</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
         {applyFilters().map((leaveBalance) => (
            <tr key={leaveBalance.balanceId}>
              <td>{leaveBalance.balanceId}</td>
              <td>{leaveBalance.employee.name}</td>
              <td>{leaveBalance.leaveType.typeName}</td>
              <td>{leaveBalance.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default LeaveBalanceList;
