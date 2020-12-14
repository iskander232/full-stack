package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.database.dao.PostsDao;
import org.example.backend.database.domain.Post;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;


@RestController
@RequiredArgsConstructor
public class PostsController {
    private final PostsDao postsDao;

    @PostMapping("/posts/add")
    public ResponseEntity<String> addPost(@RequestBody Post post) {
        postsDao.addPost(post);
        return ResponseEntity.ok("{}");
    }

    @GetMapping("/posts/get")
    public ResponseEntity<String> getAllPosts(Principal principal) {
        if (postsDao.getPostsByLogin(principal.getName()).size() == 0) {
            return ResponseEntity.ok("[]");
        }

        List<Post> posts = new ArrayList<>(postsDao.getPostsByLogin(principal.getName()));
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
