package com.iljuhenson.achlearnment.repository;

import com.iljuhenson.achlearnment.entity.Authority;
import com.iljuhenson.achlearnment.entity.enums.AuthorityEnum;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AuthorityRepository extends JpaRepository<Authority, Integer> {
    Optional<Authority> findAuthorityByName(AuthorityEnum authority);
}
