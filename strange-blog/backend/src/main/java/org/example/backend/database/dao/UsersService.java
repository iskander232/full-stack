package org.example.backend.database.dao;

import lombok.RequiredArgsConstructor;
import org.example.backend.database.UsersRepository;
import org.example.backend.database.domain.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

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
