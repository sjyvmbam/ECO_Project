package com.eco.buchungsSystem.restController;

import com.eco.buchungsSystem.domain.User;
import com.eco.buchungsSystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    private UserService userService;


    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public User login(@RequestParam("username") String username, @RequestParam("password") String password) {
        Optional<User> optionalUser = userService.login(username, password);
        if (optionalUser.isPresent()) {
            return User.builder().username(username).isadmin(optionalUser.get().isIsadmin()).build();
        }
        return null;
    }


    @GetMapping(path = "/user", consumes = "application/json", produces = "application/json")
    public User getSelectedUser(@RequestParam("username") String username, @RequestParam("password") String password) {
        return userService.getUserByUsername("yannick");
    }

    @PostMapping(path = "/registration", consumes = "application/json", produces = "application/json")
    public Boolean addNewUser(@RequestBody String data){
        User user = userService.jsonStringToUser(data);
        return userService.saveUser(user);
    }

}
