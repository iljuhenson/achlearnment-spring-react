package com.iljuhenson.achlearnment.service.implementation;

import com.iljuhenson.achlearnment.service.DO.AuthenticationRequestDO;
import com.iljuhenson.achlearnment.service.DO.AuthenticationResponseDO;
import com.iljuhenson.achlearnment.service.DO.RegisterRequestDO;
import com.iljuhenson.achlearnment.entity.User;
import com.iljuhenson.achlearnment.entity.enums.AuthorityEnum;
import com.iljuhenson.achlearnment.repository.AuthorityRepository;
import com.iljuhenson.achlearnment.repository.UserRepository;
import com.iljuhenson.achlearnment.security.utility.JwtService;
import com.iljuhenson.achlearnment.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final AuthorityRepository authorityRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    @Autowired
    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthorityRepository authorityRepository, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityRepository = authorityRepository;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    @Override
    public AuthenticationResponseDO register(RegisterRequestDO request) {
        User user = new User(request.getEmail(), passwordEncoder.encode(request.getPassword()));
        user.setAuthorities(Set.of(authorityRepository.findAuthorityByName(AuthorityEnum.USER).get()));
        userRepository.save(user);
        String token = jwtService.generateToken(user);
        return new AuthenticationResponseDO(token);
    }

    @Override
    public AuthenticationResponseDO authenticate(AuthenticationRequestDO request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                request.getPassword()
        ));

        User user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token = jwtService.generateToken(user);
        return new AuthenticationResponseDO(token);
    }
}
