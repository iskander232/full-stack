package org.example.backend.database;

import org.example.backend.database.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsersRepository extends JpaRepository<User, String> {
    List<User> findByLogin(String login);

    List<User> findByLoginAndPassword(String login, String password);
}
