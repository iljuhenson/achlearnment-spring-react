package com.iljuhenson.achlearnment.config;

import com.iljuhenson.achlearnment.entity.Authority;
import com.iljuhenson.achlearnment.entity.enums.AuthorityEnum;
import com.iljuhenson.achlearnment.repository.AuthorityRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DbInit {
    private final AuthorityRepository authorityRepository;

    @Autowired
    public DbInit(AuthorityRepository authorityRepository) {
        this.authorityRepository = authorityRepository;
    }

    @PostConstruct
    private void init() {
        AuthorityEnum[] authorities = AuthorityEnum.values();
        for(AuthorityEnum authority : authorities) {
            if(!authorityRepository.findAuthorityByName(authority).isPresent()) {
                Authority authorityDb = new Authority(authority);
                authorityRepository.save(authorityDb);
            }
        }
    }
}
