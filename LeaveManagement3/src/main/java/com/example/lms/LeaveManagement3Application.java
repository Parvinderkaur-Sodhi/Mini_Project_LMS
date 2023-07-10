package com.example.lms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.example.lms.entity")
public class LeaveManagement3Application {

	public static void main(String[] args) {
		SpringApplication.run(LeaveManagement3Application.class, args);
	}

}
