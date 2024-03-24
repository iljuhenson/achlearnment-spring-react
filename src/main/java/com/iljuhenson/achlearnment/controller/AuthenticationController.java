package com.iljuhenson.achlearnment.controller;

import com.iljuhenson.achlearnment.service.DO.AuthenticationRequestDO;
import com.iljuhenson.achlearnment.service.DO.AuthenticationResponseDO;
import com.iljuhenson.achlearnment.service.DO.RegisterRequestDO;
import com.iljuhenson.achlearnment.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {
    private final UserService userService;

    @Autowired
    public AuthenticationController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponseDO> register(@RequestBody RegisterRequestDO request) {
        return ResponseEntity.ok(userService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponseDO> register(@RequestBody AuthenticationRequestDO request) {
        return ResponseEntity.ok(userService.authenticate(request));
    }

}
