package org.example.backend.controller;

import org.example.backend.database.dao.UsersService;
import org.example.backend.database.domain.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.json.JSONObject;

@RestController
public class AutorisationController {
    private final UsersService usersService;

    public AutorisationController(UsersService usersService) {
        this.usersService = usersService;
    }

    @PostMapping("/registration")
    ResponseEntity<String> registration(@RequestBody User user) {
        if (usersService.contains(user.getLogin())) {
            return ResponseEntity.badRequest().body("{\"message\": \"user exists\"}");
        }

        usersService.saveUser(user);
        return ResponseEntity.ok("{}");
    }

    @PostMapping("/login")
    void login() {
    }

    @PostMapping("login_succeeded")
    ResponseEntity<String> loginSuccess() {
        return ResponseEntity.ok("{}");
    }

    @PostMapping("login_failed")
    ResponseEntity<String> loginFail() {
        return ResponseEntity.badRequest().body("{\"message\": \"user doesn't exist\"}");
    }

    @GetMapping("logout")
    void logout(){}
}
