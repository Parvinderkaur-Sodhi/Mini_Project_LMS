import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeaveTypeService from "../../services/LeaveTypeService";

const AddLeaveType = () => {
  const [leaveType, setLeaveType] = useState({
    typeName: "",
    countAllowed: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setLeaveType({ ...leaveType, [e.target.name]: value });
  };

  const saveLeaveType = (e) => {
    e.preventDefault();
    LeaveTypeService.saveLeaveType(leaveType)
      .then((response) => {
        console.log(response);
        setLeaveType({
          typeName: "",
          countAllowed: 0,
        });
        navigate("/admin/leaveTypeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1 className="mb-4">Add Leave Type</h1>
      <hr></hr><br></br>
      <form onSubmit={saveLeaveType}>
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
        <br></br>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddLeaveType;
