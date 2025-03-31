package com.example.spring_backend.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id) {
        super("Could not find user with user -> " + id);
    }
}
