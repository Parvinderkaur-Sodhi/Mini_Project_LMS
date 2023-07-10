import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LeaveTypeService from "../../services/LeaveTypeService";
import "../commonCss.css";

const LeaveTypeListUsers = () => {
  const [leaveTypes, setLeaveTypes] = useState([]);

  useEffect(() => {
    fetchLeaveTypes();
  }, []);

  const fetchLeaveTypes = () => {
    LeaveTypeService.getAllLeaveTypes()
      .then((response) => {
        console.log(response.data);
        setLeaveTypes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1 className="mb-4">Leave Type List</h1>
      <hr></hr><br></br>
      <div className="d-flex justify-content-end">
      <Link to="/user" className="btn btn-success">
          Home
      </Link>
      </div>
      <br></br>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Type ID</th>
            <th>Type Name</th>
            <th>Count Allowed</th>
          </tr>
        </thead>
        <tbody>
          {leaveTypes.map((leaveType) => (
            <tr key={leaveType.typeId}>
              <td>{leaveType.typeId}</td>
              <td>{leaveType.typeName}</td>
              <td>{leaveType.countAllowed}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
};

export default LeaveTypeListUsers;
