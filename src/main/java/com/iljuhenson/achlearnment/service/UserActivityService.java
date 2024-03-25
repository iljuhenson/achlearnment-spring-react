package com.iljuhenson.achlearnment.service;

import com.iljuhenson.achlearnment.entity.User;
import com.iljuhenson.achlearnment.entity.UserActivity;
import com.iljuhenson.achlearnment.service.DO.UserActivityDO;

import java.util.List;

public interface UserActivityService {
    List<UserActivityDO> findAllUserActivities(User user);
}
