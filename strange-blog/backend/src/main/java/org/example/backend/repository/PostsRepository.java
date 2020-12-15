package org.example.backend.repository;

import org.example.backend.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostsRepository extends JpaRepository<Post, String> {
    List<Post> findByLogin(String login);
}
