package org.example.backend.service;

import org.example.backend.model.Post;
import org.example.backend.repository.PostsRepository;
import org.example.backend.service.PostsService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

import java.util.*;

@SpringBootTest()
class PostsServiceTest {
    @Autowired
    PostsService postsService;

    @MockBean
    PostsRepository postsRepository;

    @Test
    void addPost() {
        postsService.addPost(new Post());
        Mockito.verify(postsRepository, Mockito.times(1)).save(new Post());
    }

    @Test
    void getPostsByLogin() {
        Post a = new Post();
        List<Post> x = Collections.singletonList(a);

        Mockito.when(postsRepository.findByLogin("a")).thenReturn(x);
        Mockito.when(postsRepository.findByLogin("b")).thenReturn(new ArrayList<>());


        assertThat("a", postsService.getPostsByLogin("a").size(), equalTo(1));
        assertThat("b", postsService.getPostsByLogin("b").size(), equalTo(0));
    }
}