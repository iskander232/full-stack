package org.example.backend.model;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @NonNull
    private String login;
    @NonNull
    private String password;
    @NonNull
    private String mail;

    @OneToMany
    private Set<Post> posts;
}
