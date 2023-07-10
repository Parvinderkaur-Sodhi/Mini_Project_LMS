import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8089/api/employees';


class EmployeeService {
  getAllEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  getEmployeeById(employeeId) {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
  }

  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }

  updateEmployee(employeeId, employee) {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/${employeeId}`, employee);
  }

  deleteEmployee(employeeId) {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
  }
}

export default new EmployeeService();
