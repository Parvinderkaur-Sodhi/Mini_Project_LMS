package com.example.lms.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthController {

    @GetMapping("/home")
    public String Home() {
        return "Hello All!! Login Page !!";
    }
}
