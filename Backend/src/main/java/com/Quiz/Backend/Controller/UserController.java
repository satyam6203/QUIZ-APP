package com.Quiz.Backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Quiz.Backend.Entity.User;
import com.Quiz.Backend.Service.UserService;
import com.Quiz.Backend.dto.Login;

@RestController
@RequestMapping("/quiz")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> userRegister(@RequestBody User user){
        try{
            return userService.register(user);
        }
        catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.status(500).body("unable to Register");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Login login){
        try{
            return userService.login(login);
        }
        catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.status(500).body("Unable ot Login");
        }
    }
}
