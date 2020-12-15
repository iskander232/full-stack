package org.example.backend.controller;

import org.example.backend.model.User;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestBuilders;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import java.lang.String;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.springframework.security.*;
@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
class AutorisationControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    AutorisationController autorisationController;

    @Test
    public void RegistrationCheck() throws Exception {
        assertThat(autorisationController).isNotNull();

        User user = new User();
        user.setLogin("user");
        user.setPassword("pass");
        String userJson = "{\"login\": \"1\", \"password\": \"1\"}";

        mockMvc.perform(post("/registration")
                .contentType(APPLICATION_JSON_UTF8).content(userJson))
                .andDo(print()).andExpect(status().isOk());
    }

    @Test
    public void accessDeniedTest() throws Exception{
        mockMvc.perform(get("/posts")).andDo(print()).andExpect(status().is4xxClientError());
    }
}