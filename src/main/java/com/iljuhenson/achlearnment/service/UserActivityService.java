package com.iljuhenson.achlearnment.service;

import com.iljuhenson.achlearnment.entity.UserActivity;

import java.util.List;

public interface UserActivityService {
    List<UserActivity> findAllUserActivities();
    boolean addTodayActivity();
}
