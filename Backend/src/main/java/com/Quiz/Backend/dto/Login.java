package com.Quiz.Backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class Login {

    @NotBlank(message = "UserName is Required")
    private String email;
    
    @NotBlank(message = "Password is Required")
    private String password;
}
