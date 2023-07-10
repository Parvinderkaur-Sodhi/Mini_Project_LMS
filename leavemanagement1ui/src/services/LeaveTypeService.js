import axios from 'axios';

const LEAVE_TYPE_API_BASE_URL = 'http://localhost:8089/api/leave-types';

class LeaveTypeService {
  getAllLeaveTypes() {
    return axios.get(LEAVE_TYPE_API_BASE_URL);
  }

  getLeaveTypeById(leaveTypeId) {
    return axios.get(`${LEAVE_TYPE_API_BASE_URL}/${leaveTypeId}`);
  }

  saveLeaveType(leaveType) {
    return axios.post(LEAVE_TYPE_API_BASE_URL, leaveType);
  }

  updateLeaveType(leaveTypeId, leaveType) {
    return axios.put(`${LEAVE_TYPE_API_BASE_URL}/${leaveTypeId}`, leaveType);
  }

  deleteLeaveType(leaveTypeId) {
    return axios.delete(`${LEAVE_TYPE_API_BASE_URL}/${leaveTypeId}`);
  }
}

export default new LeaveTypeService();
