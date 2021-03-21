package com.eco.buchungsSystem.service;

import com.eco.buchungsSystem.domain.User;
import com.eco.buchungsSystem.repositories.EcoUserRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private EcoUserRepository repositorie;

    public UserService() {
    }

    public User getUserByUsername(String username) {
        return repositorie.findUserByUsername(username).get();
    }

    public Optional<User> login(String username, String password) {
        Optional<User> repositorieByName = repositorie.findUserByUsername(username);
        if (repositorieByName.isPresent() && repositorieByName.get().getPassword().equals(password)) {
            return repositorieByName;
        }
        return Optional.empty();
    }

    public boolean saveUser(User user) {
        if(repositorie.findUserByUsername(user.getUsername()).isEmpty()){
            repositorie.save(user);
            return true;
        }return false;
    }

    public User jsonStringToUser(String data) {
        JSONObject jsonobject = new JSONObject(data);
        User user = User.builder()
                .username((String) jsonobject.get("username"))
                .password((String) jsonobject.get("password"))
                .isadmin((Boolean) jsonobject.get("isAdmin")).build();
        return user;
    }

    public String UserToString(User user){
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("username",user.getUsername());
        jsonObject.put("password",user.getPassword());
        jsonObject.put("isAdmin",user.isIsadmin());
        return jsonObject.toString();
    }

}
