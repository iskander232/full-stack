package org.example.backend.service;

import org.example.backend.model.User;
import org.example.backend.repository.UsersRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;


import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

@SpringBootTest
class UsersServiceTest {
    @Autowired
    UsersService usersService;

    @MockBean
    UsersRepository usersRepository;

    @Test
    void saveUser() {
        User a = new User();
        a.setLogin("a");

        Mockito.when(usersRepository.findByLogin("a")).thenReturn(a);
        usersService.saveUser(a);
        Mockito.verify(usersRepository, Mockito.times(0)).save(a);

        Mockito.when(usersRepository.findByLogin("a")).thenReturn(null);
        usersService.saveUser(a);
        Mockito.verify(usersRepository, Mockito.times(1)).save(a);
    }

    @Test
    void contains() {
        Mockito.when(usersRepository.findByLoginAndPassword("a", "b")).thenReturn(new User());
        Mockito.when(usersRepository.findByLoginAndPassword("a", "c")).thenReturn(null);

        assertThat("has user", usersService.contains("a", "b"), equalTo(true));
        assertThat("hasn't user", usersService.contains("a", "c"), equalTo(false));

    }

    @Test
    void testContains() {
        Mockito.when(usersRepository.findByLogin("a")).thenReturn(new User());
        Mockito.when(usersRepository.findByLogin("b")).thenReturn(null);

        assertThat("has user", usersService.contains("a"), equalTo(true));
        assertThat("hasn't user", usersService.contains("b"), equalTo(false));

    }
}