//package com.example.lms.controller;
//
//import com.example.lms.custom.ResourceNotFoundException;
//import com.example.lms.entity.Employee;
//import com.example.lms.entity.LeaveBalance;
//import com.example.lms.entity.LeaveRequest;
//import com.example.lms.entity.LeaveType;
//import com.example.lms.service.EmployeeService;
//import com.example.lms.service.LeaveBalanceService;
//import com.example.lms.service.LeaveRequestService;
//import com.example.lms.service.LeaveTypeService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api")
//public class CrudController {
//
//    private final EmployeeService employeeService;
//    private final LeaveBalanceService leaveBalanceService;
//    private final LeaveRequestService leaveRequestService;
//    private final LeaveTypeService leaveTypeService;
//
//    @Autowired
//    public CrudController(EmployeeService employeeService, LeaveBalanceService leaveBalanceService,
//                          LeaveRequestService leaveRequestService, LeaveTypeService leaveTypeService) {
//        this.employeeService = employeeService;
//        this.leaveBalanceService = leaveBalanceService;
//        this.leaveRequestService = leaveRequestService;
//        this.leaveTypeService = leaveTypeService;
//    }
//
//    // Employee CRUD operations
//
//    @GetMapping("/employees")
//    public List<Employee> getAllEmployees() {
//        return employeeService.getAllEmployees();
//    }
//
//    @GetMapping("/employees/{employeeId}")
//    public Employee getEmployeeById(@PathVariable int employeeId) {
//        return employeeService.getEmployeeById(employeeId);
//    }
//
//    @PostMapping("/employees")
//    public Employee saveEmployee(@RequestBody Employee employee) {
//        return employeeService.saveEmployee(employee);
//    }
//
//
//    @PutMapping("/{employeeId}")
//    public Employee updateEmployee(@PathVariable int employeeId, @RequestBody Employee employee) {
//        Employee updatedEmployee = employeeService.updateEmployee(employeeId, employee);
//        if (updatedEmployee != null) {
//            return updatedEmployee;
//        }
//        throw new ResourceNotFoundException("Employee not found with ID: " + employeeId);
//    }
//
//    @DeleteMapping("/employees/{employeeId}")
//    public void deleteEmployee(@PathVariable int employeeId) {
//        employeeService.deleteEmployee(employeeId);
//    }
//
//    // LeaveBalance CRUD operations
//
//    @GetMapping("/leave-balances")
//    public List<LeaveBalance> getAllLeaveBalances() {
//        return leaveBalanceService.getAllLeaveBalances();
//    }
//
//    @GetMapping("/leave-balances/{leaveBalanceId}")
//    public LeaveBalance getLeaveBalanceById(@PathVariable int leaveBalanceId) {
//        return leaveBalanceService.getLeaveBalanceById(leaveBalanceId);
//    }
//
//    @PostMapping("/leave-balances")
//    public LeaveBalance saveLeaveBalance(@RequestBody LeaveBalance leaveBalance) {
//        return leaveBalanceService.saveLeaveBalance(leaveBalance);
//    }
//
//    @PutMapping("/{balanceId}")
//    public LeaveBalance updateLeaveBalance(@PathVariable int balanceId, @RequestBody LeaveBalance leaveBalance) {
//        LeaveBalance updatedLeaveBalance = leaveBalanceService.updateLeaveBalance(balanceId, leaveBalance);
//        if (updatedLeaveBalance != null) {
//            return updatedLeaveBalance;
//        }
//        throw new ResourceNotFoundException("Leave Balance not found with ID: " + balanceId);
//    }
//
//    @DeleteMapping("/leave-balances/{leaveBalanceId}")
//    public void deleteLeaveBalance(@PathVariable int leaveBalanceId) {
//        leaveBalanceService.deleteLeaveBalance(leaveBalanceId);
//    }
//
//    // LeaveRequest CRUD operations
//
//    @GetMapping("/leave-requests")
//    public List<LeaveRequest> getAllLeaveRequests() {
//        return leaveRequestService.getAllLeaveRequests();
//    }
//
//    @GetMapping("/leave-requests/{leaveRequestId}")
//    public LeaveRequest getLeaveRequestById(@PathVariable int leaveRequestId) {
//        return leaveRequestService.getLeaveRequestById(leaveRequestId);
//    }
//
//    @PostMapping("/leave-requests")
//    public LeaveRequest saveLeaveRequest(@RequestBody LeaveRequest leaveRequest) {
//        return leaveRequestService.saveLeaveRequest(leaveRequest);
//    }
//
//    @PutMapping("/leave-requests/{leaveRequestId}")
//    public LeaveRequest updateLeaveRequest(@PathVariable int leaveRequestId, @RequestBody LeaveRequest leaveRequest) {
//        return leaveRequestService.updateLeaveRequest(leaveRequestId, leaveRequest);
//    }
//
//
//    @DeleteMapping("/leave-requests/{leaveRequestId}")
//    public void deleteLeaveRequest(@PathVariable int leaveRequestId) {
//        leaveRequestService.deleteLeaveRequest(leaveRequestId);
//    }
//
//    @GetMapping("/leave-requests/{employeeId}/leave-requests")
//    public List<LeaveRequest> getLeaveRequestsByEmployeeId(@PathVariable int employeeId) {
//        return leaveRequestService.getLeaveRequestsByEmployeeId(employeeId);
//    }
//
//    // LeaveType CRUD operations
//
//    @GetMapping("/leave-types")
//    public List<LeaveType> getAllLeaveTypes() {
//        return leaveTypeService.getAllLeaveTypes();
//    }
//
//    @GetMapping("/leave-types/{leaveTypeId}")
//    public LeaveType getLeaveTypeById(@PathVariable int leaveTypeId) {
//        return leaveTypeService.getLeaveTypeById(leaveTypeId);
//    }
//
//    @PostMapping("/leave-types")
//    public LeaveType saveLeaveType(@RequestBody LeaveType leaveType) {
//        return leaveTypeService.saveLeaveType(leaveType);
//    }
//
//    @PutMapping("/leave-types/{leaveTypeId}")
//    public LeaveType updateLeaveType(@PathVariable int leaveTypeId, @RequestBody LeaveType leaveType) {
//        return leaveTypeService.updateLeaveType(leaveTypeId, leaveType);
//    }
//
//
//    @DeleteMapping("/leave-types/{leaveTypeId}")
//    public void deleteLeaveType(@PathVariable int leaveTypeId) {
//        leaveTypeService.deleteLeaveType(leaveTypeId);
//    }
//}
