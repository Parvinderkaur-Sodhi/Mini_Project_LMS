import axios from 'axios';

const LEAVE_BALANCE_API_BASE_URL = 'http://localhost:8089/api/leave-balances';

class LeaveBalanceService {
  getAllLeaveBalances() {
    return axios.get(LEAVE_BALANCE_API_BASE_URL);
  }

  getLeaveBalanceById(leaveBalanceId) {
    return axios.get(`${LEAVE_BALANCE_API_BASE_URL}/${leaveBalanceId}`);
  }

  saveLeaveBalance(leaveBalance) {
    return axios.post(LEAVE_BALANCE_API_BASE_URL, leaveBalance);
  }

  updateLeaveBalance(leaveBalanceId, leaveBalance) {
    return axios.put(`${LEAVE_BALANCE_API_BASE_URL}/${leaveBalanceId}`, leaveBalance);
  }

  deleteLeaveBalance(leaveBalanceId) {
    return axios.delete(`${LEAVE_BALANCE_API_BASE_URL}/${leaveBalanceId}`);
  }

  getLeaveBalancesByEmployeeId(employeeId) {
    return axios.get(`${LEAVE_BALANCE_API_BASE_URL}/employee/${employeeId}`);
  }
}

export default new LeaveBalanceService();
