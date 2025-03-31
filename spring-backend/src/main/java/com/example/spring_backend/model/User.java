package com.example.spring_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="Users")
public class User {
    @GeneratedValue // If is not given the underlying database will allot it.
    @Id
    private long id;
    private String username, name, email;
}
