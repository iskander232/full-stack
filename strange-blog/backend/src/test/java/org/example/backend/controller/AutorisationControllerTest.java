package org.example.backend.controller;

import org.example.backend.model.User;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
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

        mockMvc.perform(post("/registration")
                .contentType(APPLICATION_JSON_UTF8).content("{\"login\": \"1\", \"password\": \"1\"}"))
                .andDo(print());

        mockMvc.perform(post("/login?1:1")).andExpect(status().isOk());
    }

    @Test
    public void accessDeniedTest() throws Exception{
        mockMvc.perform(get("/posts")).andDo(print()).andExpect(status().is4xxClientError());
    }
}