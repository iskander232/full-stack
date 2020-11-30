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
    private PostsRepository postsRepository;
    private UsersRepository usersRepository;

    boolean addPost(Post post) {
        if (usersRepository.findByLogin(post.getLogin()).size() == 0) {
            return false;
        }

        postsRepository.save(post);
        return true;
    }

    Set<Post> getPostsByLogin(String login){
        return postsRepository.findByLogin(login);
    }
}
