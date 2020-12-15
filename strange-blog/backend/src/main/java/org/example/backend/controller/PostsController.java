package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.service.PostsService;
import org.example.backend.model.Post;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequiredArgsConstructor
public class PostsController {
    private final PostsService postsService;

    @PostMapping("/posts/add")
    public ResponseEntity<String> addPost(@RequestBody Post post) {
        postsService.addPost(post);
        return ResponseEntity.ok("{}");
    }

    @GetMapping("/posts/get")
    public ResponseEntity<String> getAllPosts(Principal principal) {
        if (postsService.getPostsByLogin(principal.getName()).size() == 0) {
            return ResponseEntity.ok("[]");
        }

        List<Post> posts = new ArrayList<>(postsService.getPostsByLogin(principal.getName()));
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (int i = 0; i < posts.size(); ++i) {
            Post post = posts.get(i);
            sb.append("{\"postTitle\":").append("\"" + post.getPostTitle() + "\",")
                    .append("\"postContent\":").append("\"" + post.getPostContent() + "\",")
                    .append("\"tags\":").append(post.getTags() + ",")
                    .append("\"date\":").append("\"" + post.getDate() + "\",")
                    .append("\"timestamp\":").append("\"" + post.getTimestamp() + "\"")
                    .append("}");

            if (i != posts.size() - 1) {
                sb.append(", ");
            } else {
                sb.append("]");
            }
        }
        System.out.println(sb.toString());
        return ResponseEntity.ok(sb.toString());
    }
}
