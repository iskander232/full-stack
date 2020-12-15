package org.example.backend.service;

import lombok.RequiredArgsConstructor;
import org.example.backend.repository.PostsRepository;
import org.example.backend.model.Post;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class PostsService {
    private final PostsRepository postsRepository;

    public boolean addPost(Post post) {
        postsRepository.save(post);
        return true;
    }

    public List<Post> getPostsByLogin(String login){
        return postsRepository.findByLogin(login);
    }
}
