package org.example.backend.controller;

import org.example.backend.service.UsersService;
import org.example.backend.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AutorisationController {
    private final UsersService usersService;

    public AutorisationController(UsersService usersService) {
        this.usersService = usersService;
    }

    @PostMapping("/registration")
    public ResponseEntity<String> registration(@RequestBody User user) {
        if (usersService.contains(user.getLogin())) {
            return ResponseEntity.badRequest().body("{\"message\": \"user exists\"}");
        }

        usersService.saveUser(user);
        return ResponseEntity.ok("{}");
    }

    @PostMapping("/login")
    public void login() {
    }

    @PostMapping("login_succeeded")
    public ResponseEntity<String> loginSuccess() {
        return ResponseEntity.ok("{}");
    }

    @PostMapping("login_failed")
    public ResponseEntity<String> loginFail() {
        return ResponseEntity.badRequest().body("{\"message\": \"user doesn't exist\"}");
    }

    @GetMapping("logout")
    void logout(){}
}
