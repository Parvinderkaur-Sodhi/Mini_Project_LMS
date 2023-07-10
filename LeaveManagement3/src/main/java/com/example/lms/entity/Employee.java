package com.example.lms.entity;

import lombok.*;
import org.hibernate.annotations.DynamicUpdate;
import javax.persistence.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@DynamicUpdate
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int employeeId;

    private String name;

    @Column(unique = true)
    private String email;
    private String phoneNumber;
    private String department;
    private String password;
    private String username;


    public LeaveBalance getLeaveBalanceByType(LeaveType leaveTypeName) {
        return null;
    }
}
