package com.eco.buchungsSystem.endpoint;

import com.eco.buchungsSystem.domain.User;
import com.eco.buchungsSystem.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT )
@AutoConfigureMockMvc
public class RestEndpoindTest {
    @Autowired
    UserService service;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void loginRestEndpointTest() throws Exception {
        MvcResult result = mockMvc.perform(get("/login?username=ivan&password=password").contentType("application/json"))
                .andExpect(status().isOk()).andReturn();

        assertEquals(result.getResponse().getStatus(), 200);
    }

    @Test
    public void SaveUserRestEndpointTest() throws Exception {
        String url = "/registration";
        User user = creatUser("tas", "abg785", true);
        String data = service.UserToString(user);
        System.out.println(data);
        mockMvc.perform(post(url).contentType("application/json").content(data)).andExpect(status().isOk());
    }

    private User creatUser(String username, String password, boolean isadmin) {
        return User.builder()
                .password(password)
                .isadmin(isadmin)
                .username(username).build();
    }


}

