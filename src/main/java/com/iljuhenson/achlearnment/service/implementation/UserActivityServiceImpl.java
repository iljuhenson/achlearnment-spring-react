package com.iljuhenson.achlearnment.service.implementation;

import com.iljuhenson.achlearnment.entity.UserActivity;
import com.iljuhenson.achlearnment.service.UserActivityService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserActivityServiceImpl implements UserActivityService {
    @Override
    public List<UserActivity> findAllUserActivities() {
        return null;
    }
}
