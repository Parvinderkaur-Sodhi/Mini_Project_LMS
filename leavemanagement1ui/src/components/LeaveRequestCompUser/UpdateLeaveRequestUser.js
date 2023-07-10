import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LeaveRequestService from "../../services/LeaveRequestService";
import LeaveTypeService from "../../services/LeaveTypeService";

const UpdateLeaveRequest = () => {
  const { requestId } = useParams();
  const [leaveRequest, setLeaveRequest] = useState({
    leaveTypeName: { typeId: "" },
    startDate: "",
    endDate: "",
    reason: "",
  });
  const [leaveTypes, setLeaveTypes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchLeaveRequest(requestId);
    fetchLeaveTypes();
  }, [requestId]);

  const fetchLeaveRequest = (requestId) => {
    LeaveRequestService.getLeaveRequestById(requestId)
      .then((response) => {
        const { leaveTypeName, startDate, endDate, reason } = response.data;
        const leaveTypeId = leaveTypeName?.typeId || "";
        setLeaveRequest({
          leaveTypeName: { typeId: leaveTypeId },
          startDate: startDate,
          endDate: endDate,
          reason: reason,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchLeaveTypes = () => {
    LeaveTypeService.getAllLeaveTypes()
      .then((response) => {
        setLeaveTypes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeaveRequest((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateLeaveRequest = (e) => {
    e.preventDefault();
    const requestBody = {
      //leaveTypeName: leaveRequest.leaveTypeName,
      leaveTypeName: {
        typeId: leaveRequest.leaveTypeName
      },
      startDate: leaveRequest.startDate,
      endDate: leaveRequest.endDate,
      reason: leaveRequest.reason,
    };

    LeaveRequestService.updateLeaveRequest(requestId, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    })
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
      <h1 className="mb-4">Update Leave Request</h1>
      <hr />
      <br />
      <form onSubmit={updateLeaveRequest}>
        <div className="form-group">
          <label>Leave Type</label>
          <select
            className="form-control"
            name="leaveTypeName"
            value={leaveRequest.leaveTypeName.typeId}
            onChange={handleChange}
            required
          >
            <option value="">Select Leave Type</option>
            {leaveTypes.map((leaveType) => (
              <option key={leaveType.typeId} value={leaveType.typeId}>
                {leaveType.typeName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            className="form-control"
            name="startDate"
            value={leaveRequest.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            className="form-control"
            name="endDate"
            value={leaveRequest.endDate}
            onChange={handleChange}
            required
          />
        </div>
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
        <br />
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateLeaveRequest;
