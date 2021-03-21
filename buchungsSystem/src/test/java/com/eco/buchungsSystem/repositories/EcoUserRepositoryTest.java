package com.eco.buchungsSystem.repositories;

import com.eco.buchungsSystem.domain.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class EcoUserRepositoryTest {

    @Autowired
    EcoUserRepository ecoUserRepository;

    @BeforeEach
    void beforeEach() {
        ecoUserRepository.deleteAll();
    }

    @Test
    void getUserFromDatabaseTest() {
        String username = "ivan";
        String password = "1234";
        User user = creatUser(username, password, false);

        ecoUserRepository.save(user);
        Optional<User> optionalUser = ecoUserRepository.findUserByUsername(username);

        assertFalse(optionalUser.isEmpty());

        assertTrue(username.equals(optionalUser.get().getUsername()));
        assertTrue(password.equals(optionalUser.get().getPassword()));

    }

    @Test
    void saveMoreThanOneUserTest() {

        User user = creatUser("ivan", "password", true);
        User user1 = creatUser("steve", "password1", false);

        List<User> saveAll = ecoUserRepository.saveAll(Arrays.asList(user, user1));

        assertTrue(saveAll.size() == 2);
    }

    @Test
    void deleteUserByUsernameTest() {

        String username = "username";
        User user = creatUser(username, "password", false);

        ecoUserRepository.save(user);

        assertTrue(ecoUserRepository.findUserByUsername(username).isPresent());
        ecoUserRepository.deleteUserByUsername(username);

        assertFalse(ecoUserRepository.findUserByUsername(username).isPresent());
    }

    private User creatUser(String username, String password, boolean isadmin) {
        return User.builder()
                .password(password)
                .isadmin(isadmin)
                .username(username).build();
    }
}
