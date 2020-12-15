package org.example.backend.model;

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

    private String login;
    @NonNull
    private String postTitle;
    @NonNull
    private String postContent;
    private String tags;
    @NonNull
    private String date;
    @NonNull
    private String timestamp;

    @ManyToOne
    private User user;
}
