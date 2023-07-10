package com.example.lms.controller;

import com.example.lms.entity.LeaveType;
import com.example.lms.service.LeaveTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/leave-types")
public class LeaveTypeController {

    private final LeaveTypeService leaveTypeService;

    @Autowired
    public LeaveTypeController(LeaveTypeService leaveTypeService) {
        this.leaveTypeService = leaveTypeService;
    }

    @GetMapping
    public List<LeaveType> getAllLeaveTypes() {
        return leaveTypeService.getAllLeaveTypes();
    }

    @GetMapping("/{leaveTypeId}")
    public Optional<LeaveType> getLeaveTypeById(@PathVariable int leaveTypeId) {
        return leaveTypeService.getLeaveTypeById(leaveTypeId);
    }

    @PostMapping
    public LeaveType saveLeaveType(@RequestBody LeaveType leaveType) {
        return leaveTypeService.saveLeaveType(leaveType);
    }

    @PutMapping("/{leaveTypeId}")
    public LeaveType updateLeaveType(@PathVariable int leaveTypeId, @RequestBody LeaveType leaveType) {
        return leaveTypeService.updateLeaveType(leaveTypeId, leaveType);
    }

    @DeleteMapping("/{leaveTypeId}")
    public void deleteLeaveType(@PathVariable int leaveTypeId) {
        leaveTypeService.deleteLeaveType(leaveTypeId);
    }
}
