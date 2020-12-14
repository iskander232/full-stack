package org.example.backend.database;

import org.example.backend.database.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UsersRepository extends JpaRepository<User, Long> {
    User findByLogin(String login);

    User findByLoginAndPassword(String login, String password);
}
