import axios from 'axios';

const LEAVEREQUEST_API_BASE_URL = "http://localhost:8089/api/leave-requests";

class LeaveRequestService {
  saveLeaveRequest(leaveRequest) {
    return axios.post(LEAVEREQUEST_API_BASE_URL, leaveRequest);
  }

  getAllLeaveRequests() {
    return axios.get(LEAVEREQUEST_API_BASE_URL);
  }

  getLeaveRequestById(leaveRequestId) {
    return axios.get(`${LEAVEREQUEST_API_BASE_URL}/${leaveRequestId}`);
  }

  updateLeaveRequest(leaveRequestId, leaveRequest) {
    return axios.put(`${LEAVEREQUEST_API_BASE_URL}/${leaveRequestId}`, leaveRequest);
  }

  deleteLeaveRequest(leaveRequestId) {
    return axios.delete(`${LEAVEREQUEST_API_BASE_URL}/${leaveRequestId}`);
  }

  getLeaveRequestsByEmployeeId(employeeId) {
    return axios.get(`${LEAVEREQUEST_API_BASE_URL}/employee/${employeeId}`);
  }

  updateLeaveRequestStatus(requestId, statusMap) {
    return axios.put(`${LEAVEREQUEST_API_BASE_URL}/${requestId}/status`, statusMap);
  }
}

export default new LeaveRequestService();
