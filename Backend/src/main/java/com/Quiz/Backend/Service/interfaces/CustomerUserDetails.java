package com.Quiz.Backend.Service.interfaces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.Quiz.Backend.Exception.OurException;
import com.Quiz.Backend.Repo.UserRepo;

@Service
public class CustomerUserDetails implements UserDetailsService{

    @Autowired
    UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return (UserDetails) userRepo.findByEmail(username).orElseThrow(()-> new OurException("userName is not found "));
    }
    
}
