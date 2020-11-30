package org.example.backend.database.domain;

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
    private String login;
    @NonNull
    private String password;
    @NonNull
    private String mail;

    @OneToMany
    private Set<Post> posts;

    public User(String login, String password, String mail){
        this.login = login;
        this.mail = mail;
        this.password = password;
    }
}
