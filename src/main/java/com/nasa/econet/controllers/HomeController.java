package com.nasa.econet.controllers;

import com.nasa.econet.entities.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/dataCO2")
    public String home() {
        return "dataCO2";
    }

    @GetMapping("/")
    public String userProfile(Model model) {
        // Sample fictional user data
        User user = new User();
        user.setId(1L);
        user.setUsername("john_doe");
        user.setEmail("john.doe@example.com");
        user.setBio("Lorem ipsum dolor sit amet.");

        model.addAttribute("user", user);
        return "profile";
    }
}
