package org.example.backend.database.dao;

import lombok.RequiredArgsConstructor;
import org.example.backend.database.UsersRepository;
import org.example.backend.database.domain.User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsersDao {
    private final UsersRepository usersRepository;

    public User addUser(User user){
        return usersRepository.save(user);
    }

    public boolean contains(String login, String password){
        return usersRepository.findByLoginAndPassword(login, password).size() > 0;
    }

    public boolean contains(String login){
        return usersRepository.findByLogin(login).size() > 0;
    }

//    UsersDao(UsersRepository usersRepository){
//        this.usersRepository = usersRepository;
//    }
}
