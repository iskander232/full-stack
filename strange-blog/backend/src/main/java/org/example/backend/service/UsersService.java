package org.example.backend.service;

import lombok.RequiredArgsConstructor;
import org.example.backend.repository.UsersRepository;
import org.example.backend.model.User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsersService {
    private final UsersRepository usersRepository;

    public boolean saveUser(User user) {
        User userFromDB = usersRepository.findByLogin(user.getLogin());

        if (userFromDB != null) {
            return false;
        }
        usersRepository.save(user);

        return true;
    }

    public boolean contains(String login, String password) {
        return usersRepository.findByLoginAndPassword(login, password) != null;
    }

    public boolean contains(String login) {
        return usersRepository.findByLogin(login) != null;
    }
}
