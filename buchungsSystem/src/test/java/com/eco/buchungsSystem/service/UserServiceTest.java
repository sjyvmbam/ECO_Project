package com.eco.buchungsSystem.service;

import com.eco.buchungsSystem.domain.User;
import com.eco.buchungsSystem.repositories.EcoUserRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;

@SpringBootTest
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @MockBean
    private EcoUserRepository ecoUserRepository;

    @Test
    void shouldGetSelectedUser(){
        String username = "ivan";
        String password = "1234";
        User user = creatUser(username,password,false);

        Optional<User> userOptional = Optional.of(user);
        when(ecoUserRepository.findUserByUsername(anyString())).thenReturn(userOptional);

        User optionalUser = userService.getUserByUsername(username);

        assertTrue(username.equals(optionalUser.getUsername()));
        assertTrue(password.equals(optionalUser.getPassword()));
    }

    @Test
    void shouldSaveUser(){
        String username = "ten";
        User user = creatUser(username, "ab1234", true);
        when(ecoUserRepository.save(any())).thenReturn(user);
        when(ecoUserRepository.findUserByUsername(eq(username))).thenReturn(Optional.of(user));

        userService.saveUser(user);
        User retunedUsername = userService.getUserByUsername(username);

        assertEquals(user,retunedUsername);

    }

    private User creatUser(String username, String password, boolean isadmin) {
        return User.builder()
                .password(password)
                .isadmin(isadmin)
                .username(username).build();
    }
}
