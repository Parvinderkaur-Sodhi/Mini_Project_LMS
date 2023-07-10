import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LeaveTypeService from "../../services/LeaveTypeService";

const UpdateLeaveType = () => {
  const { leaveTypeId } = useParams();
  const [leaveType, setLeaveType] = useState({
    typeName: "",
    countAllowed: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchLeaveType();
  }, []);

  const fetchLeaveType = () => {
    LeaveTypeService.getLeaveTypeById(leaveTypeId)
      .then((response) => {
        console.log(response.data);
        setLeaveType(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeaveType((prevLeaveType) => ({
      ...prevLeaveType,
      [name]: name === 'leaveTypeId' ? prevLeaveType[name] : value,
    }));
  };
  

  const updateLeaveType = (e) => {
    e.preventDefault();
    LeaveTypeService.updateLeaveType(leaveTypeId, leaveType)
      .then((response) => {
        console.log(response);
        navigate("/admin/leaveTypeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (leaveType === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="mb-4">Edit Leave Type</h1>
      <hr></hr><br></br>
      <form onSubmit={updateLeaveType}>
        <div className="form-group">
          <label>Type Name</label>
          <input
            type="text"
            className="form-control"
            name="typeName"
            value={leaveType.typeName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Count Allowed</label>
          <input
            type="number"
            className="form-control"
            name="countAllowed"
            value={leaveType.countAllowed}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateLeaveType;
