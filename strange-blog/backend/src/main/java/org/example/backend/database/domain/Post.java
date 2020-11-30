package org.example.backend.database.domain;

import lombok.*;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "posts")
public class Post {
    @Id
    @GeneratedValue
    int id;
    @NonNull
    private String login;
    @NonNull
    private String postTitle;
    @NonNull
    private String postContent;
    private String tags;
    @NonNull
    private String date;

    @ManyToOne
    private User user;


    public Post(String login, String postTitle, String postContent, String tags, String date) {
        this.login = login;
        this.postTitle = postTitle;
        this.postContent = postContent;
        this.tags = tags;
        this.date = date;
    }
}
