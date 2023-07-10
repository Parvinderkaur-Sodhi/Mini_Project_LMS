package com.example.lms.service;

import com.example.lms.entity.LeaveBalance;

import java.util.List;

public interface LeaveBalanceService {
    List<LeaveBalance> getAllLeaveBalances();

    LeaveBalance getLeaveBalanceById(int leaveBalanceId);

    LeaveBalance saveLeaveBalance(LeaveBalance leaveBalance);

    LeaveBalance updateLeaveBalance(int balanceId, LeaveBalance leaveBalance);

    void deleteLeaveBalance(int leaveBalanceId);
    List<LeaveBalance> getLeaveBalancesByEmployeeId(int employeeId);
}
