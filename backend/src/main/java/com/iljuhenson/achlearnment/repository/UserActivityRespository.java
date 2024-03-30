package com.iljuhenson.achlearnment.repository;

import com.iljuhenson.achlearnment.entity.UserActivity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserActivityRespository extends JpaRepository<UserActivity, Integer> {
}
