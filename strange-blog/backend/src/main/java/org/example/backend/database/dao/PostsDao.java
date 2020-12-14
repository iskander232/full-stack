package org.example.backend.database.dao;

import lombok.RequiredArgsConstructor;
import org.example.backend.database.PostsRepository;
import org.example.backend.database.UsersRepository;
import org.example.backend.database.domain.Post;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@RequiredArgsConstructor
public class PostsDao {
    private final PostsRepository postsRepository;

    public boolean addPost(Post post) {
        postsRepository.save(post);
        return true;
    }

    public Set<Post> getPostsByLogin(String login){
        return postsRepository.findByLogin(login);
    }
}
