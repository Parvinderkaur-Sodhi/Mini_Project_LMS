package com.example.lms.service;

import com.example.lms.entity.LeaveType;
import com.example.lms.repository.LeaveTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface LeaveTypeService {
    List<LeaveType> getAllLeaveTypes();

    Optional<LeaveType> getLeaveTypeById(int typeId);

    LeaveType saveLeaveType(LeaveType leaveType);

    void deleteLeaveType(int typeId);

    LeaveType updateLeaveType(int leaveTypeId, LeaveType leaveType);
}
