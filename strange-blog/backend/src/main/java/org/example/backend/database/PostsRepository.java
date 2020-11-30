package org.example.backend.database;

import org.example.backend.database.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface PostsRepository extends JpaRepository<Post, String> {
    Set<Post> findByLogin(String login);
}
