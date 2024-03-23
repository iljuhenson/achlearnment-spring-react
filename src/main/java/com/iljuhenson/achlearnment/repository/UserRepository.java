package com.iljuhenson.achlearnment.repository;

import com.iljuhenson.achlearnment.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
