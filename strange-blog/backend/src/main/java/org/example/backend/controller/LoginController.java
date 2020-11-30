package org.example.backend.controller;

import org.example.backend.database.dao.UsersDao;
import org.example.backend.database.domain.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/blog")
public class LoginController {
    private final UsersDao usersDao;

    public LoginController(UsersDao usersDao) {
        this.usersDao = usersDao;
    }

    @PostMapping("/registration")
    ResponseEntity<User> registration(@RequestBody User user) {
        if (usersDao.contains(user.getLogin())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
        return ResponseEntity.ok().body(usersDao.addUser(user));
    }

    @PostMapping("/login")
    ResponseEntity<User> login(@RequestBody User user) {
        if (!usersDao.contains(user.getLogin(), user.getPassword())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
        return ResponseEntity.ok().body(user);
    }
}
