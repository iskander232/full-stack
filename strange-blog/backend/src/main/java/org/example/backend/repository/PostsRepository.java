package org.example.backend.repository;

import org.example.backend.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface PostsRepository extends JpaRepository<Post, String> {
    Set<Post> findByLogin(String login);
}
