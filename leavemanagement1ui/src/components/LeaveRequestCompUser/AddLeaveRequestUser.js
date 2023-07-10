import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeaveRequestService from "../../services/LeaveRequestService";
import LeaveTypeService from "../../services/LeaveTypeService";

const AddLeaveRequestUser = ({ employeeId }) => {
  const navigate = useNavigate();
  const [leaveRequest, setLeaveRequest] = useState({
    employeeId: {
      employeeId: employeeId
    },
    leaveTypeName: {
      typeId: 0
    },
    startDate: "",
    endDate: "",
    reason: ""
  });

  const [leaveTypes, setLeaveTypes] = useState([]);

  useEffect(() => {
    fetchLeaveTypes();
    setLeaveRequest((prevLeaveRequest) => ({ ...prevLeaveRequest, employeeId }));
  }, [employeeId]);

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

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "employeeId") {
      setLeaveRequest((prevLeaveRequest) => ({
        ...prevLeaveRequest,
        employeeId: {
          employeeId: parseInt(value)
        }
      }));
    } else if (name === "leaveTypeName") {
      setLeaveRequest((prevLeaveRequest) => ({
        ...prevLeaveRequest,
        leaveTypeName: {
          typeId: parseInt(value)
        }
      }));
    } else {
      setLeaveRequest((prevLeaveRequest) => ({
        ...prevLeaveRequest,
        [name]: value
      }));
    }
  };


  const addLeaveRequest = (e) => {
    e.preventDefault();
    console.log(leaveRequest.employeeId);
    const requestBody = {
      employeeId: {
        employeeId: leaveRequest.employeeId
      },
      leaveTypeName: {
        typeId: leaveRequest.leaveTypeName.typeId
      },
      startDate: leaveRequest.startDate,
      endDate: leaveRequest.endDate,
      reason: leaveRequest.reason
    };

    LeaveRequestService.saveLeaveRequest(requestBody)
      .then((response) => {
        console.log(response);
        navigate("/user/leaveRequestListUser");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1 className="mb-4">Add Leave Request for Employee ID: {employeeId}</h1>
      <form onSubmit={addLeaveRequest}>
        <div className="form-group">
          <label>Leave Type</label>
          <select
            className="form-control"
            name="leaveTypeName"
            value={leaveRequest.leaveTypeName.typeId}
            onChange={handleChange}
            required
          >

            <option value={0}>Select Leave Type</option>
            {leaveTypes.map((leaveType) => (
              <option key={leaveType.typeId} value={leaveType.typeId}>
                {leaveType.typeName}
              </option>
            ))}
          </select>
        </div>
        <br></br>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Start Date</label>
            <input
              type="date"
              className="form-control"
              name="startDate"
              value={leaveRequest.startDate}
              onChange={handleChange}
              min={getCurrentDate()} // Set the min attribute to the current date
              required
            />
          </div>
          <br></br>
          <div className="form-group col-md-6">
            <label>End Date</label>
            <input
              type="date"
              className="form-control"
              name="endDate"
              value={leaveRequest.endDate}
              onChange={handleChange}
              min={leaveRequest.startDate} // Set the min attribute to the value of the start date
              required
            />
          </div>
        </div>
        <br></br>
        <div className="form-group">
          <label>Reason</label>
          <textarea
            className="form-control"
            name="reason"
            value={leaveRequest.reason}
            onChange={handleChange}
            rows={4}
            required
          ></textarea>
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddLeaveRequestUser;
