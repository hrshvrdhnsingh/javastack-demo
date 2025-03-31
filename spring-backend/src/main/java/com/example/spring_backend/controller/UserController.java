package com.example.spring_backend.controller;

import com.example.spring_backend.exception.UserNotFoundException;
import com.example.spring_backend.model.User;
import com.example.spring_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository usersRepository;

    @PostMapping("/user")
    public User createNewUser(@RequestBody User newUser) {
        return usersRepository.save(newUser);
    }

    @GetMapping("/user")
    public List<User> getAllUsers() {
        return usersRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Long id) {
        return usersRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    public User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return usersRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return usersRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable Long id) {
        if(!usersRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        usersRepository.deleteById(id);
        return "user with id " + id + "deleted successfully.";
    }
}
