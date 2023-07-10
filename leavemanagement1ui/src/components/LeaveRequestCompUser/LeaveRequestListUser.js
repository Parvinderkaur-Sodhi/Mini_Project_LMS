import React, { useState, useEffect } from "react";
import LeaveRequestService from "../../services/LeaveRequestService";
import LeaveTypeService from "../../services/LeaveTypeService";
import EmployeeService from "../../services/EmployeeService";
import LeaveRequestCalendar from "../LeaveRequestCalendar";
import { Link } from "react-router-dom";
import "../commonCss.css";

const LeaveRequestListUser = ({ employeeId }) => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [leaveTypes, setLeaveTypes] = useState({});
  const [employee, setEmployee] = useState({});
  const [isCalendarView, setIsCalendarView] = useState(false);

  useEffect(() => {
    fetchLeaveRequests();
    fetchLeaveTypes();
    fetchEmployee();
  }, [employeeId]);

  const fetchLeaveRequests = async () => {
    try {
      const response = await LeaveRequestService.getLeaveRequestsByEmployeeId(employeeId);
      setLeaveRequests(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLeaveTypes = async () => {
    try {
      const response = await LeaveTypeService.getAllLeaveTypes();
      const leaveTypesData = response.data.reduce((types, type) => {
        types[type.typeId] = type.typeName;
        return types;
      }, {});
      setLeaveTypes(leaveTypesData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEmployee = async () => {
    try {
      const response = await EmployeeService.getEmployeeById(employeeId);
      setEmployee(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLeaveRequest = async (leaveRequestId) => {
    try {
      await LeaveRequestService.deleteLeaveRequest(leaveRequestId);
      fetchLeaveRequests();
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleView = () => {
    setIsCalendarView(!isCalendarView);
  };

  return (
    <div style={{ padding: "10px 10px" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0" style={{ marginLeft: "20px", marginRight: "20px" }}>
          Leave Request List
        </h1>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="calendarViewToggle"
            checked={isCalendarView}
            onChange={handleToggleView}
          />
          <label className="form-check-label" htmlFor="calendarViewToggle">
            Calendar View
          </label>
        </div>
      </div>
      <hr />
      <br />
      <div className="d-flex justify-content-end">
        <Link to="/user" className="btn btn-success">
          Home
        </Link>
      </div>
      <h4 style={{ marginLeft: "20px", marginRight: "30px" }}>
        Hello, {employee.name}. Check your leave history.
      </h4>
      <h4 style={{ marginLeft: "20px", marginRight: "20px" }}>Username: {employee.username}</h4>
      <br />
      {!isCalendarView ? (
        // Render table view
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Leave Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((leaveRequest) => (
                <tr key={leaveRequest.requestId}>
                  <td>{leaveRequest.requestId}</td>
                  <td>{leaveTypes[leaveRequest.leaveTypeName.typeId]}</td>
                  <td>{leaveRequest.startDate}</td>
                  <td>{leaveRequest.endDate}</td>
                  <td>{leaveRequest.reason}</td>
                  <td>{leaveRequest.status}</td>
                  <td>
                    <Link
                      to={`/user/editLeaveRequestUser/${leaveRequest.requestId}`}
                      className={`btn btn-primary mr-2 ${leaveRequest.status === "Rejected" || leaveRequest.status === "Accepted" ? "disabled" : ""}`}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteLeaveRequest(leaveRequest.requestId)}
                      className={`btn btn-danger mr-2 ${leaveRequest.status === "Rejected" || leaveRequest.status === "Accepted" ? "disabled" : ""}`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center">
            <Link to="/user/applyLeave" className="btn btn-primary">
              Apply for New Leave
            </Link>
          </div>
        </div>
      ) : (
        // Render calendar view
        <LeaveRequestCalendar leaveRequests={leaveRequests} />
      )}
      <br />
      <br />
    </div>
  );
};

export default LeaveRequestListUser;
